---
sidebar_label: "RK3588 安装 Panfork 开源驱动"
sidebar_position: 17
---

# RK3588 安装 Panfork 开源驱动

## 主线 Xorg server 与 RockChip Xorg server 切换

:::info
虽然官方镜像自带了厂商 Mali 驱动，但是只支持 OpenGL ES，不符合 Linux 生态大多数应用使用的 OpenGL 接口。  
Panfork 开源驱动需要运行于主线 Xorg server，厂商 Mali 驱动需要运行于 RockChip Xorg server。  
所以我们需要如下命令切换 Xorg server 版本。
:::

```bash
sudo apt update
sudo apt-get install xserver-xorg-core/bullseye

#   如需恢复Rockchip Xorg server，请运行一下命令
#   sudo apt-get install  xserver-xorg-core/rockchip-bullseye
```

## 安装编译依赖

```bash
sudo apt update
sudo apt install build-essential meson git python3-mako libexpat1-dev bison flex libwayland-egl-backend-dev libxext-dev libxfixes-dev libxcb-glx0-dev libxcb-shm0-dev libxcb-dri2-0-dev libxcb-dri3-dev libxcb-present-dev libxshmfence-dev libxxf86vm-dev libxrandr-dev zlib1g-dev pkg-config cmake libwayland-*
```

## 编译并安装 dri2to3

```bash
git clone https://gitlab.com/panfork/dri2to3.git
mkdir dri2to3/build
cd dri2to3/build
meson setup
sudo ninja install
```

## 编译并安装 libdrm

```bash
cd ~/
git clone https://gitlab.freedesktop.org/mesa/drm
mkdir drm/build
cd drm/build
meson
sudo ninja install
```

## 编译并安装 Wayland protocols

```bash
cd ~/
git clone https://gitlab.freedesktop.org/wayland/wayland-protocols
mkdir wayland-protocols/build
cd wayland-protocols/build
git checkout 1.24
meson
sudo ninja install
```

## 编译并安装 Mesa

```bash
cd ~/
git clone https://gitlab.com/panfork/mesa.git
mkdir mesa/build
cd mesa/build
meson -Dgallium-drivers=panfrost -Dvulkan-drivers= -Dllvm=disabled --prefix=/opt/panfrost
sudo ninja install
```

## 设置 Panfork 相关依赖的优先值

```bash
echo /opt/panfrost/lib/aarch64-linux-gnu | sudo tee /etc/ld.so.conf.d/0-panfrost.conf
sudo mv /etc/ld.so.conf.d/00-aarch64-mali.conf /etc/ld.so.conf.d/2-aarch64-mali.conf
sudo ldconfig
```

## 测试效果

### 1.重启窗口管理器

```bash
systemctl restart sddm.service
```

### 2.登录桌面

### 3.打开桌面环境对应的虚拟终端并运行以下命令

:::info
驱动运行在 Wayland 下性能更佳，可使用 apt 安装 `plasma-workspace-wayland`，并在 SDDM 登录界面选择对应会话。
:::

```bash
sudo apt update
sudo apt install glmark-x11 #如果桌面运行在 Wayland 环境下可安装 glmark-wayland
glmark2
```

![glmark2 运行结果](/img/general-tutorial/panfork/panfork.webp)
