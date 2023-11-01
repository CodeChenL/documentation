---
sidebar_label: "rkdeveloptool"
sidebar_position: 2
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# rkdeveloptool

:::caution
本文的主题不是 [RKDevTool](RKDevTool)（适用于 Windows）。
:::

rkdeveloptool 是 Rockchip 为 Linux/macOS 平台下进行 USB 烧录所开发的软件。

rkdeveloptool 可以被认为是[开源版本](https://opensource.rock-chips.com/wiki_Rkdeveloptool)的 [upgrade_tool](upgrade_tool)。

---

## 安装 rkdeveloptool

如果你的操作系统没有提供 rkdeveloptool，则需要从源代码编译安装。

<Tabs queryString="host_os">
<TabItem value="Arch Linux">

可从 [AUR](https://aur.archlinux.org/packages/rkdeveloptool) 安装 rkdeveloptool。

</TabItem>
<TabItem value="Debian">

从命令行中执行以下命令进行安装：

```bash
sudo apt-get update
sudo apt-get install -y libudev-dev libusb-1.0-0-dev dh-autoreconf pkg-config libusb-1.0 build-essential git wget
git clone https://github.com/rockchip-linux/rkdeveloptool
cd rkdeveloptool
wget https://patch-diff.githubusercontent.com/raw/rockchip-linux/rkdeveloptool/pull/73.patch
wget https://patch-diff.githubusercontent.com/raw/rockchip-linux/rkdeveloptool/pull/85.patch
git am *.patch
autoreconf -i
./configure
make -j $(nproc)
sudo cp rkdeveloptool /usr/local/sbin/
```

</TabItem>
<TabItem value="macOS">

请首先安装 [Homebrew](https://brew.sh/)，然后从命令行中执行以下命令进行安装：

```bash
brew install automake autoconf libusb pkg-config git wget
git clone https://github.com/rockchip-linux/rkdeveloptool
cd rkdeveloptool
wget https://patch-diff.githubusercontent.com/raw/rockchip-linux/rkdeveloptool/pull/73.patch
wget https://patch-diff.githubusercontent.com/raw/rockchip-linux/rkdeveloptool/pull/85.patch
git am *.patch
autoreconf -i
./configure
make -j $(nproc)
cp rkdeveloptool /opt/homebrew/bin/
```

</TabItem>
</Tabs>

---

## 使用 rkdeveloptool

### 查看已连接的 Maskrom 设备

```bash
rkdeveloptool ld
```

### 写入文件

:::caution
写入文件时，rkdeveloptool 不会自动对压缩文件进行解压缩。

请首先将使用到的文件进行解压缩，并在 rkdeveloptool 中指定解压缩后的文件。
:::

:::caution
rkdeveloptool 不支持选择 Maskrom 设备，也无法选择待写入的存储介质。  
通常使用 rkdeveloptool 时，只会硬件连接一部设备和一个存储介质。这一步无法用软件控制。

如果需要同时写入多个设备，请使用 [upgrade_tool](upgrade_tool)。
:::

```bash
sudo rkdeveloptool db <loader>
sudo rkdeveloptool wl 0 <image>
```

可以在 [Loader](Loader) 页面找到部分产品所使用的 Loader 文件下载链接。

### 重启设备

```bash
sudo rkdeveloptool rd
```
