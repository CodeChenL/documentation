﻿---
sidebar_label: '定频认证指导'
sidebar_position: 13
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 定频认证指导

进行 CE / FCC 认证的时候，会要求设备的无线信号工作在指定频率。本教程会指引你如何进行 Wi-Fi / 蓝牙相关的定频设置。

## 安装配置工具

请在待验证设备上执行以下命令：

```bash
# 禁用默认 brcmfmac 驱动程序
echo "blacklist brcmfmac" >> /etc/modprobe.d/blacklist.conf
# 下载 wl 工具
sudo wget -O /usr/local/sbin/wl https://dl.radxa.com/fix_freq_docs/wl
sudo chmod +x /usr/local/sbin/wl
# 安装 armel 依赖
sudo dpkg --add-architecture armel
sudo apt update
sudo apt install libc6:armel
```

## 替换专用固件

请在待验证设备上执行以下命令：

<Tabs groupId="module" queryString>
<TabItem value="ap6256" label="AP6256" default>

```bash
sudo mv /lib/firmware/brcm/fw_bcm43456c5_ag.bin /lib/firmware/brcm/fw_bcm43456c5_ag.bin.bak
sudo wget -O /lib/firmware/brcm/fw_bcm43456c5_ag.bin https://dl.radxa.com/fix_freq_docs/ap6256/fw_bcm43456c5_ag_mfg.bin
reboot
sudo wl ver                       # 出现 WLTEST 字样，说明固件替换成功
sudo hcitool cmd 0x03 0x003       # 没有报错，说明蓝牙环境正常
```

</TabItem>

<TabItem value="ap6212" label="AP6212">

```bash
sudo mv /lib/firmware/brcm/fw_bcm43438a1.bin /lib/firmware/brcm/fw_bcm43438a1.bin.bak
sudo wget -O /lib/firmware/brcm/fw_bcm43438a1.bin https://dl.radxa.com/fix_freq_docs/ap6212/fw_bcm43438a1_mfg.bin
reboot
sudo wl ver                       # 出现 WLTEST 字样，说明固件替换成功
sudo hcitool cmd 0x03 0x003       # 没有报错，说明蓝牙环境正常
```

</TabItem>

<TabItem value="cm256" label="AW-CM256SM">

```bash
sudo mv /lib/firmware/brcm/cyw43455.bin /lib/firmware/brcm/cyw43455.bin.bak
sudo wget -O /lib/firmware/brcm/cyw43455.bin hhttps://dl.radxa.com/fix_freq_docs/cm256/cyw43455-mfgtest-7.45.100.18.bin
reboot
sudo wl ver                       # 出现 WLTEST 字样，说明固件替换成功
sudo hcitool cmd 0x03 0x003       # 没有报错，说明蓝牙环境正常
```

</TabItem>
</Tabs>

## 继续完成测试

请参考以下文档进行测试：

[Wi-Fi RF Test Commands for Linux-v05.pdf](https://dl.radxa.com/fix_freq_docs/Wi-Fi+RF+Test+Commands+for+Linux_BCM4339-v05.pdf)

[BT+RF+Test+Commands+for+Linux-v07.pdf](https://dl.radxa.com/fix_freq_docs/BT+RF+Test+Commands+for+Linux-v07.pdf)

## 注意事项

测试 Wi-Fi 时，需要关闭蓝牙：

```bash
sudo rfkill block bluetooth
sudo rfkill unblock wlan
```

测试蓝牙时，需要关闭 Wi-Fi：

```bash
sudo rfkill block wlan
sudo rfkill unblock bluetooth
```
