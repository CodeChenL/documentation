---
sidebar_label: "使用手册"
sidebar_position: 3
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# ROCK 3A

ROCK 3A 配备了四核 Cortex-A55 ARM 处理器和 LPDDR4 运行内存，
最高支持 4K@60 的 HDMI、MIPI DSI、MIPI CSI、带麦克风的 3.5 毫米耳机插孔、USB 端口、千兆以太网、PCIe 3.0、PCIe 2.0、40 pin GPIO 扩展座、RTC。  
此外，ROCK 3A 还支持 PD 和 QC 协议供电。

## 标注图

![ROCK 3A Overview](/img/rock3/rock3a-interfaces.webp)

<details>

<summary>Maskrom 模式</summary>

ROCK 3A 的 OTG 接口位于处于上方的 USB 3.0 接口，可通过 USB-A 转 USB-A 线连接主机和进入 Maskrom 的主板进行通信。
在 Maskrom 模式下，您可使用 [Rockchip 开发套件](/general-tutorial/rksdk)来对您的产品进行操作。

以下是 ROCK 3A 进入 Maskrom 模式的步骤：

1. 拔出电源线断电
2. 短接 Maskrom 引脚，其位于 40 pin GPIO 连接座旁
3. 插入电源线上电，如果电源绿灯常亮则成功进入 Maskrom 模式
4. 通过 USB-A 转 USB-A 线连接主板的 OTG 口和 PC 主机的 USB 口即可实现通信

</details>

## 特性

|            模块             | ROCK 3 Model A                                                                                                                                                                       |
| :-------------------------: | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| SoC<br/>CPU<br/>GPU<br/>NPU | **RK3568**<br/>四核 Cortex-A55, 频率高达 2Ghz<br/>Mali G52<br/>0.8TOPS NPU                                                                                                           |
|            内存             | 2/4/8GB LPDDR4 3200MT/s                                                                                                                                                              |
|            存储             | eMMC，microSD 存储卡，M.2 NVMe 固态硬盘                                                                                                                                              |
|            显示             | 最高支持 4K@60 的 HDMI                                                                                                                                                               |
|            MIPI             | 通过 FPC 连接的 2-lane MIPI DSI                                                                                                                                                      |
|            声音             | 带麦克风的 3.5 毫米耳机插孔<br/>支持高达 24 位/96KHz 音频的高清编解码器                                                                                                              |
|           摄像头            | 通过 FPC 连接的 2-lane MIPI CSI，支持高达 800 万像素摄像头                                                                                                                           |
|            无线             | 可额外选购 [Radxa Wireless Module A8](/accessories/wireless-a8)                                                                                                                      |
|             USB             | 一个 USB 3.0 OTG, 位于上方的 USB 3.0 端口，通过硬件开关来切换硬件功能；一个 USB 3.0 HOST 端口；两个 USB 2.0 HOST 端口                                                                |
|           以太网            | 支持以太网供电 (PoE) 的千兆以太网：PoE 供电需要额外选购的 HAT                                                                                                                        |
|             IO              | 40 pin GPIO 扩展座                                                                                                                                                                   |
|            电源             | USB PD, 支持 USB Type-C PD 2.0, 9V/2A, 12V/2A, 15V/2A, 20V/2A<br/>Qualcomm® Quick ChargeTM: 支持 QC 3.0/2.0 充电协议, 9V/2A, 12V/1.5A<br/>电压范围为 6V 至 24V 的 USB Type-C® 供电 |
|            尺寸             | 85mm x 56mm                                                                                                                                                                          |

## 启动指南

### 准备项

- ROCK 3A
- 以下存储介质之一：  
   microSD 卡，容量不小于 16GB  
   [eMMC 模块](/accessories/emmc_module)，容量不小于 16GB
- 电源适配器，推荐使用 [Radxa Power PD 30W](/accessories/pd_30w)：  
   ROCK 3A 采用 Type-C 接口供电，支持 PD 供电输入
- USB 键盘鼠标
- HDMI 显示器和 HDMI 线  
   ROCK 3A 配备了全尺寸 HDMI 接口。建议使用具有 HDMI 功能的显示器。最高支持 4K@60 显示。
- microSD 读卡器或 eMMC 读卡器  
   用于 microSD 卡或 eMMC 模块的镜像刷写。

### 系统安装

1. 选择您要使用的[官方镜像](/rock3/official-images)并下载。

2. 参考[操作系统安装指南](/general-tutorial/os-installation)将镜像刷写到存储介质中。

3. 将系统存储介质：microSD 卡或 eMMC 模块插入主板上的插口，并通过 Type-C 电源适配器供电启动您的产品。

4. 连接外设，开始使用 [Radxa OS](/radxa-os)。

如果您对该产品已足够了解，您也可使用线刷的方式来进行刷机。

## GPIO 定义

### 电压范围

| Type | Voltage | Tolerance |
| ---- | ------- | --------- |
| GPIO | 3.3V    | 3.63V     |
| ADC  | 1.8V    | 1.98V     |

### GPIO 接口

ROCK 3A 提供一个 40 pin GPIO 扩展座，兼容市场上大多数传感器应用。

:::caution
提示：实际兼容性以实际使用情况为准。
:::

<Tabs>
<TabItem value="v1_3" label="v1.3+">

<div className='gpio_style'>

| GPIO number |  Function4  |  Function3   |  Function2  |  Function1  |               Pin#               |              Pin#               | Function1 |                 Function2                 |  Function3  |  Function4  | GPIO number |
| ----------- | :---------: | :----------: | :---------: | :---------: | :------------------------------: | :-----------------------------: | :-------: | :---------------------------------------: | :---------: | :---------: | ----------- |
|             |             |              |             |    +3.3V    | <div className='yellow'>1</div>  |  <div className='red'>2</div>   |   +5.0V   |                                           |             |             |             |
| 32          | CAN1_RX_M0  | UART3_RX_M0  | I2C3_SDA_M0 |  GPIO1_A0   |  <div className='green'>3</div>  |  <div className='red'>4</div>   |   +5.0V   |                                           |             |             |             |
| 33          | CAN1_TX_M0  | UART3_TX_M0  | I2C3_SCL_M0 |  GPIO1_A1   |  <div className='green'>5</div>  | <div className='black'>6</div>  |    GND    |                                           |             |             |             |
| 13          |             |   PWM1_M1    | I2C2_SCL_M0 |  GPIO0_B5   |  <div className='green'>7</div>  | <div className='green'>8</div>  | GPIO0_D1  | <div className='orange'>UART2_TX_M0</div> |             |             | 25          |
|             |             |              |             |     GND     |  <div className='black'>9</div>  | <div className='green'>10</div> | GPIO0_D0  | <div className='orange'>UART2_RX_M0</div> |             |             | 24          |
| 116         |             | UART7_TX_M1  |  PWM14_M0   |  GPIO3_C4   | <div className='green'>11</div>  | <div className='green'>12</div> | GPIO3_A3  |                                           |             |             | 99          |
| 117         |             | UART7_RX_M1  | PWM15_IR_M0 |  GPIO3_C5   | <div className='green'>13</div>  | <div className='black'>14</div> |    GND    |                                           |             |             |             |
| 16          |             |   UART0_RX   |   PWM1_M0   |  GPIO0_C0   | <div className='green'>15</div>  | <div className='green'>16</div> | GPIO0_B6  |                I2C2_SDA_M0                |   PWM2_M1   |             | 105         |
|             |             |              |             |    +3.3V    | <div className='yellow'>17</div> | <div className='green'>18</div> | GPIO3_B2  |                UART4_TX_M1                |   PWM9_M0   |             | 106         |
| 147         | CAN1_TX_M1  | SPI3_MOSI_M1 | PWM15_IR_M1 |  GPIO4_C3   | <div className='green'>19</div>  | <div className='black'>20</div> |    GND    |                                           |             |             |             |
| 149         | UART9_TX_M1 | SPI3_MISO_M1 |  PWM12_M1   |  GPIO4_C5   | <div className='green'>21</div>  | <div className='green'>22</div> | GPIO0_C1  |                  PWM2_M0                  |  UART0_TX   |             | 113         |
| 146         | CAN1_RX_M1  | SPI3_CLK_M1  |  PWM14_M1   |  GPIO4_C2   | <div className='green'>23</div>  | <div className='green'>24</div> | GPIO4_C6  |                 PWM13_M1                  | SPI3_CS0_M1 | UART9_RX_M1 | 150         |
|             |             |              |             |     GND     | <div className='black'>25</div>  | <div className='green'>26</div> | GPIO4_D1  |                SPI3_CS1_M1                |             |             |             |
| 12          |   USB_DP    |  CAN0_RX_M0  |  I2C1_SDA   |  GPIO0_B4   |  <div className='blue'>27</div>  | <div className='blue'>28</div>  | GPIO0_B3  |                 I2C1_SCL                  | CAN0_TX_M0  |   USB_DM    | 139         |
| 95          |             |              | UART8_TX_M1 |  GPIO2_D7   | <div className='green'>29</div>  | <div className='black'>30</div> |    GND    |                                           |             |             |             |
| 96          |             |              | UART8_RX_M1 |  GPIO3_A0   | <div className='green'>31</div>  | <div className='green'>32</div> | GPIO3_C2  |                UART5_TX_M1                |             |             | 114         |
| 115         |             | UART5_RX_M1  | SPI1_CLK_M1 |  GPIO3_C3   | <div className='green'>33</div>  | <div className='black'>34</div> |    GND    |                                           |             |             |             |
| 100         |             |              |             |  GPIO3_A4   | <div className='green'>35</div>  | <div className='green'>36</div> | GPIO3_A2  |                                           |             |             | 103         |
|             |             |              |             | SARADC_VIN5 | <div className='green'>37</div>  | <div className='green'>38</div> | GPIO3_A6  |                                           |             |             | 102         |
|             |             |              |             |     GND     | <div className='black'>39</div>  | <div className='green'>40</div> | GPIO3_A5  |                                           |             |             | 101         |

</div>

#### 关于 V1.3+ 硬件版本的 40-pin 扩展座的补充

- 标有橙色的引脚用于 debug console。
- PWM: x7, PWM1 / PWM2 / PWM9 / PWM12 / PWM13 / PWM14 / PWM15
- SPI: x1, SPI3
- I2C: x3, I2C1 / I2C2 / I2C3
- UART: x6, UART0 / UART3 / UART5 / UART7 / UART8 / UART9
- ADC: x1, SARADC_VIN5
- CAN: x2, CAN0 / CAN1
- USB 2.0: x1, USB_DP(PIN#27) + USB_DM(PIN#28)
  - 当我们选择该 USB 功能时，需要按以下方式修改硬件：
  - -> 移除 R90526 R90527
  - -> 添加 R90536 R90537

</TabItem>
<TabItem value="v1_2" label="v1.2">

<div className='gpio_style'>

| GPIO number |  Function4  |  Function3   |  Function2  | Function1 |               Pin#               |              Pin#               | Function1 |                 Function2                 |  Function3  |  Function4  | GPIO number |
| ----------- | :---------: | :----------: | :---------: | :-------: | :------------------------------: | :-----------------------------: | :-------: | :---------------------------------------: | :---------: | :---------: | ----------- |
|             |             |              |             |   +3.3V   | <div className='yellow'>1</div>  |  <div className='red'>2</div>   |   +5.0V   |                                           |             |             |             |
| 32          | CAN1_RX_M0  | UART3_RX_M0  | I2C3_SDA_M0 | GPIO1_A0  |  <div className='green'>3</div>  |  <div className='red'>4</div>   |   +5.0V   |                                           |             |             |             |
| 33          | CAN1_TX_M0  | UART3_TX_M0  | I2C3_SCL_M0 | GPIO1_A1  |  <div className='green'>5</div>  | <div className='black'>6</div>  |    GND    |                                           |             |             |             |
| 111         |             | UART3_TX_M1  |  PWM12_M0   | GPIO3_B7  |  <div className='green'>7</div>  | <div className='green'>8</div>  | GPIO0_D1  | <div className='orange'>UART2_TX_M0</div> |             |             | 25          |
|             |             |              |             |    GND    |  <div className='black'>9</div>  | <div className='green'>10</div> | GPIO0_D0  | <div className='orange'>UART2_RX_M0</div> |             |             | 24          |
| 116         |             | UART7_TX_M1  |  PWM14_M0   | GPIO3_C4  | <div className='green'>11</div>  | <div className='green'>12</div> | GPIO3_A3  |                                           |             |             | 99          |
| 117         |             | UART7_RX_M1  | PWM15_IR_M0 | GPIO3_C5  | <div className='green'>13</div>  | <div className='black'>14</div> |    GND    |                                           |             |             |             |
| 16          |             |   UART0_RX   |   PWM1_M0   | GPIO0_C0  | <div className='green'>15</div>  | <div className='green'>16</div> | GPIO3_A1  |                                           |             |             | 97          |
| 17          |             |   UART0_TX   |   PWM2_M0   | GPIO0_C1  | <div className='yellow'>17</div> | <div className='green'>18</div> | GPIO3_B2  |                UART4_TX_M1                |   PWM9_M0   |             | 106         |
| 147         | CAN1_TX_M1  | SPI3_MOSI_M1 | PWM15_IR_M1 | GPIO4_C3  | <div className='green'>19</div>  | <div className='black'>20</div> |    GND    |                                           |             |             |             |
| 149         | UART9_TX_M1 | SPI3_MISO_M1 |  PWM12_M1   | GPIO4_C5  | <div className='green'>21</div>  | <div className='green'>22</div> |  ADC_IN5  |                                           |             |             |             |
| 146         | CAN1_RX_M1  | SPI3_CLK_M1  |  PWM14_M1   | GPIO4_C2  | <div className='green'>23</div>  | <div className='green'>24</div> | GPIO4_C6  |                 PWM13_M1                  | SPI3_CS0_M1 | UART9_RX_M1 | 150         |
|             |             |              |             |    GND    | <div className='black'>25</div>  | <div className='green'>26</div> | GPIO4_D1  |                SPI3_CS1_M1                |             |             | 153         |
| 14          |   USB_DP    |   PWM2_M1    | I2C2_SDA_M0 | GPIO0_B6  |  <div className='blue'>27</div>  | <div className='blue'>28</div>  | GPIO0_B5  |                I2C2_SCL_M0                |   PWM1_M1   |   USB_DM    | 13          |
| 95          |             |              | UART8_TX_M1 | GPIO2_D7  | <div className='green'>29</div>  | <div className='black'>30</div> |    GND    |                                           |             |             |             |
| 96          |             | UART8_RX_M1  | SPI2_CLK_M1 | GPIO3_A0  | <div className='green'>31</div>  | <div className='green'>32</div> | GPIO3_C2  |                UART5_TX_M1                |             |             | 114         |
| 115         |             |              | UART5_RX_M1 | GPIO3_C3  | <div className='green'>33</div>  | <div className='black'>34</div> |    GND    |                                           |             |             |             |
| 100         |             |              |             | GPIO3_A4  | <div className='green'>35</div>  | <div className='green'>36</div> | GPIO3_A2  |                                           |             |             | 98          |
| 112         |             | UART3_RX_M1  |  PWM13_M0   | GPIO3_C0  | <div className='green'>37</div>  | <div className='green'>38</div> | GPIO3_A6  |                                           |             |             | 102         |
|             |             |              |             |    GND    | <div className='black'>39</div>  | <div className='green'>40</div> | GPIO3_A5  |                                           |             |             | 101         |

</div>

#### 关于 V1.2 硬件版本的 40-pin 扩展座的补充

- 标有橙色的引脚用于 debug console。
- PWM: x7, PWM1 / PWM2 / PWM9 / PWM12 / PWM13 / PWM14 / PWM15
- SPI: x1, SPI3
- I2C: x2, I2C2 / I2C3
- UART: x6, UART0 / UART3 / UART5 / UART7 / UART8 / UART9
- ADC: x1, ADC_IN5
- CAN: x1, CAN1
- USB 2.0: x1, USB_DP(PIN#27) + USB_DM(PIN#28)
  - 当我们选择该 USB 功能时，需要按以下方式修改硬件：
  - -> 移除 R90526 R90527
  - -> 添加 R90536 R90537

</TabItem>
</Tabs>

### GPIO 编号

如果你需要获取 GPIO 编号，请参阅 [GPIO 编号介绍](/general-tutorial/gpio-num)。

## 硬件资料下载

[v1.3 schematic pdf](https://dl.radxa.com/rock3/docs/hw/3a/ROCK-3A-V1.3-SCH.pdf) - ROCK 3A 原理图下载

[v1.3 2D Top&Bottom dxf](https://dl.radxa.com/rock3/docs/hw/3a/rock3a_v1.3_2d_dxf.zip) - ROCK 3A 2D CAD 文件下载

[v1.3 3D](https://dl.radxa.com/rock3/docs/hw/3a/rock3a_v1.3_3d_emn_emp.zip) - ROCK 3A 3D CAD 文件下载 (.emn/.emp 格式)

[v1.3 CAM pdf](https://dl.radxa.com/rock3/docs/hw/3a/ROCK-3A-V1.3-SMD.pdf) - ROCK 3A 位号图下载
