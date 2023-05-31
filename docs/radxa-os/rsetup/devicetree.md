﻿---
sidebar_label: '设备树设置'
sidebar_position: 10
---

# 设备树设置

## 简介

设备树Overlays使得用一个内核支持多个硬件配置成为可能，而且不需要明确地加载或屏蔽内核模块。

你可以通过 `rsetup`打开rsetup工具来管理设备树。  

## 如何启用一个overlay

### 使用方法

使用 `rsetup` 命令来打开rsetup工具：
```
rsetup
```
在要求输入密码后， 你可以看到[rsetup工具界面](rsetup-tool)。  
选择 `Overlays`:
```
Configure Device Tree Overlay
        Manage overlays
        View overlay info
        Install overlay from source
        Reset overlays
        <Ok>             <Cancel>
```
然后， 选择 `Manage overlays`:
```
Configure Device Tree Overlay  
        Manage overlays  
        View overlay info  
        Install overlay from source  
        Reset overlays  
       

      <Ok>            <Cancel>
```

接下来，已兼容的设备树会显示出来，它可能在不同的产品上有所不同。 
例如，这些是ROCK 5A的：  
```
Please select overlays: 
        [ ] Enable 1-Wire on GPIO4_B1
        [ ] Enable FIQ Debugger on UART4-M2
        [ ] Enable FIQ Debugger on UART6-M1
        [ ] Enable FIQ Debugger on UART7-M2
        [ ] Enable FIQ Debugger on UART8-M0
        [ ] Enable I2C1-M0
        [ ] Enable I2C2-M4
        [ ] Enable I2C4-M3
        [ ] Enable I2C6-M0
        [ ] Enable I2C6-M3
        [ ] Enable I2C7-M3
        [ ] Enable PWM0-M2
        [ ] Enable PWM1-M2
        [ ] Enable PWM11-M1
        [ ] Enable PWM14-M1
        [ ] Enable PWM14-M2 
        [ ] Enable PWM15-M1
        [ ] Enable PWM15-M3 
        [ ] Enable PWM6-M0
        [ ] Enable PWM7-M0
        [ ] Enable Radxa Camera 4K
        [ ] Enable Radxa Display 10HD 
        [ ] Enable Radxa Display 8HD
        [ ] Enable Raspberry Pi Camera V2
        [ ] Enable UART2-M0
        [ ] Enable UART2-M2
        [ ] Enable UART3-M1
        [ ] Enable UART4-M2
        [ ] Enable UART6-M1
        [ ] Enable UART7-M1
        [ ] Enable UART7-M1 with Hardware Flow Control
        [ ] Enable UART7-M2
        [ ] Enable UART8-M0
        [ ] Enable spidev on SPI0-M1 over CS0
        [ ] Enable spidev on SPI0-M2 over CS0
        [ ] Enable spidev on SPI4-M2 over CS0
        [ ] Set OTG port to Host modeq
        [ ] Set OTG port to Peripheral mode
        <Ok>                   <Cancel>
```
**注意：支持的选项可能会改变。**  
用空格键来选择你要加载的Overlay，  
```
[*] Enable Radxa Camera 4K
```
Overlay有`*`标记表示它已启用， 重启后即可正常工作。
