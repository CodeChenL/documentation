---
sidebar_position: 3
---

# Radxa Display 8 HD使用教程

![显示屏安装-01](/img/rock5b/rock5b-display-8hd-FPC.webp)  
![显示屏安装-02](/img/rock5b/rock5b-display-8hd-connected.webp)

- 准备好 Radxa Display 8HD 或者 Radxa Display 10HD，通过 FPC 线接上 ROCK 5B。

- 通过左下角 Application Launcher 打开 Kconsole 终端, 运行 `rsetup` 命令：

```bash
radxa@rock-5b:~$ rsetup
```

- 通过[启用设备树指导](/radxa-os/rsetup/devicetree)来启用瑞莎 8 寸触摸屏的 Overlay。

:::caution [注意]

1. 请启用 `[] Enable Radxa Display 8 HD` 项 Overlay。
2. 在启用成功显示 `[*] Enable Radxa Display 8 HD` 后退出重启才能使配置生效。  
   :::
