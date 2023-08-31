---
sidebar_label: "WIFI和BT教程"
sidebar_position: 2
---

# WIFI & BT教程

- ROCK 5B没有板载WiFi/BT模块，需要外接模块。测试并支持[WIFI/BT卡](./support_accessories)
- 这里演示的M.2无线模块是： Radxa无线模块A8。

[Radxa无线模块A8](/zh/img/accessories/a8-module-01.png)

- 安装如图所示：

[Radxa无线模块A8](/zh/img/accessories/a8-module-02.png)

## WIFI 使用情况

1. 首先进入ROOT用户模式。

```
sudo su
```

2. 打开WIFI

```
nmcli r wifi on
```

3. 扫描WIFI

```
nmcli dev wifi
```

1. 连接wifi网络

```
nmcli dev wifi connect "wifi_name" password "wifi_password"
```

## 蓝牙使用

- 使用Radxa无线A8模块时，必须添加以下黑名单才能使BT正常工作。

```
root@rock-5b:~# cat /etc/modprobe.d/blacklist.conf
blacklist pgdrv
blacklist btusb
blacklist btrtl
blacklist btbcm
blacklist btintel

root@rock-5b:~# reboot
```

- Radxa APT包括用于Broadcom无线模块的broadcom-wifibt-firmware软件包和用于Intel无线模块的intel-wifibt-firmware软件包。需要下载相应的软件包。

```
root@rock-5b:~# apt-get update -y
root@rock-5b:~# apt-get install -y broadcom-wifibt-firmware intel-wifibt-firmware
```

1. 测试蓝牙模块的状态并检查蓝牙设备。

```
root@rock-5b:~# systemctl status bluetooth
```

2. 运行蓝牙设备。

```
root@rock-5b:~# systemctl start bluetooth
```

3. 检测蓝牙设备

```
root@rock-5b:~# hciconfig
hci0:   Type: Primary Bus: UART
       BD Address: 10:2C:6B:49:D5:53 ACL MTU: 1021:8 SCO MTU: 64:1
       UP RUNNING
       RX bytes:850 acl:0 sco:0 events:58 errors:0
       TX bytes:2814 acl:0 sco:0 commands:58 errors:0
```

4. 测试：连接蓝牙音箱，首先安装pulseaudio

```
root@rock-5b:~# apt-get install -y pulseaudio-module-bluetooth pulseaudio
```

5. 运行 pulseaudio

```
root@rock-5b:~# pulseaudio --start
```

6. 使用 pulseaudio 连接

```
root@rock-5b:~# bluetoothctl
[bluetooth]# default-agent
[bluetooth]# power on
[bluetooth]# scan on
[bluetooth]# trust 41:42:1A:8D:A9:65       #BT-280
[bluetooth]# pair 41:42:1A:8D:A9:65
[bluetooth]# connect 41:42:1A:8D:A9:65
```

7. 现在您可以听音乐了。
