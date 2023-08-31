---
sidebar_label: "ROCK 5B 硬件接口定义"
sidebar_position: 1
---

# 硬件概览

我们将在本文提供 ROCK 5B 的详细硬件信息。
![ROCK 5B Overview](/img/rock5b/rock-5b-overview.webp)

## 处理器 (1)

ROCK 5B 的 SoC 是 Rockchip RK3588。
主 CPU 是一个四核 ARM Cortex-A76 MPCore 处理器和四核 ARM Cortex-A55 MPCore 处理器、
两者都是高性能、低功耗和缓存的应用处理器。
搭载的 ARM Mali-G610 MP4 3D GPU 使 RK3588 完全兼容 OpenGLES 1.1、2.0 、3.2 ，OpenCL 2.2 和 Vulkan 1.2。
带有 MMU 的特殊 2D 硬件引擎将最大化显示性能并提供非常流畅的操作。
内置的 NPU 支持 INT4 / INT8 / NT16 / FP16 混合运算，计算能力高达 6 TOPs。
此外，由于其强大的兼容性，基于 TensorFlow / MXNet / PyTorch / Caffe 等一系列框架的网络模型也可以轻松实现。

## 内存 (2)

ROCK 5B 的内存是 LPDDR 4x，由两个 32 bits LPDDR 4x 芯片组成 64 bits，频率高达 4224 Mhz。ROCK 5B 提供 4GB、8GB 和 16GB 的内存选项。

## USB-C 电源 (3)

Radxa ROCK 5 Model B 被设计为低功耗的 ARM 台式单板计算机。它支持以下电源输入：

- USB PD2.0 电源适配器，支持 12V / 15V / 20V，输出电流为 2A 或更高。
- 具有固定 9V 至 20V 直流电压和 USB-C 插头的电源适配器
- 来自 GPIO PIN 2 和 4 的 5V PoE 电源

## HDMI 输出 (4 / 5)

## HDMI 输入 (6)

## USB2.0 (7)

## USB3.0 (8)

## 2.5GbE (9)

## PoE (10)

## M.2 E-KEY (11)

M.2 E key 引脚信号定义表：

<div className='gpio_style'>

| Pin# | Name                    | Pin# | Name                      | Pin# | Name              | Pin# | Name      |
| :--: | :---------------------- | :--: | :------------------------ | :--: | :---------------- | :--: | :-------- |
|  1   | GND                     |  21  | WIFI_WAKE_HOST_H_GPIO3_D5 |  49  | PCIE20_REFCLKN    |  69  | GND       |
|  2   | VCC3V3_WF               |  22  | UART1_RX_M0               |  50  | WIFIBT_32KIN_1T1R |  70  | BT_WAKE   |
|  3   | USB2_M2_DP              |  23  | WIFI_REG_ON               |  51  | GND               |  71  | NC        |
|  4   | VCC3V3_WF               |  32  | UART1_TX_M0               |  52  | PCIE_PERSTN       |  72  | VCC3V3_WF |
|  5   | USB2_M2_DM              |  33  | GND                       |  53  | PCIE_CLKREQN      |  73  | NC        |
|  6   | WIFI_LED                |  34  | UART1_CTS_M               |  54  | HOST_WAKE_BT_H    |  74  | VCC3V3_WF |
|  7   | GND                     |  35  | PCIE_TXP                  |  55  | PCIE_WAKEN        |  75  | GND       |
|  8   | PCM_CLK/I2S_SCK         |  36  | UART1_RTS_M               |  56  | BT_REG_ON_H       |  76  | GND       |
|  9   | SDIO_CLK                |  37  | PCIE_TXN                  |  57  | GND               |  77  | GND       |
|  10  | PCM_SYNC/I2S_WS         |  38  | NC                        |  58  | I2C4_SDA_M1       |  78  | NC        |
|  11  | SDMMC2_CMD_M0           |  39  | GND                       |  59  | NC                |  79  | NC        |
|  12  | PCM_OUT/I2S SD_OUT      |  40  | NC                        |  60  | I2C4_SCL_M1       |
|  13  | SDMMC2_D0_M0            |  41  | PCIE20_RXP                |  61  | NC                |
|  14  | PCM_IN/I2S SD_IN        |  42  | BT_REG_NO                 |  62  | NC                |
|  15  | SDMMC2_D1_M0            |  43  | PCIE20_RXN                |  63  | GND               |
|  16  | NC                      |  44  | NC                        |  64  | NC                |
|  17  | SDMMC2_D2_M0            |  45  | GND                       |  65  | NC                |
|  18  | GND                     |  46  | NC                        |  66  | NC                |
|  19  | SDMMC2_D3_M0            |  47  | PCIE20_REFC               |  67  | NC                |
|  20  | BT_WAKE_HOST_H_GPIO4_B4 |  48  | NC                        |  68  | NC                |

</div>

## M.2 M-KEY (12)

## eMMC (13)

板载插座接口特点  
高性能的 eMMC 模块是 ROCK 5B 系统存储的最佳选择。eMMC 模块有 8GB / 16GB / 32GB / 64GB / 128GB 可供选择。
eMMC 插座的引脚规格如下：

<div className='gpio_style'>

| Name      | Pin# | Pin# | Name       |
| :-------- | :--: | :--: | :--------- |
| GND       |  1   |  34  | GND        |
| EMMC_D5   |  2   |  33  | EMMC_D6    |
| GND       |  3   |  32  | GND        |
| EMMC_D4   |  4   |  31  | EMMC_D7    |
| GND       |  5   |  30  | GND        |
| EMMC_D0   |  6   |  29  | EMMC_D1    |
| GND       |  7   |  28  | GND        |
| EMMC_CLK  |  8   |  27  | EMMC_D2    |
| GND       |  9   |  26  | GND        |
| EMMC_D3   |  10  |  25  | EMMC_CMD   |
| GND       |  11  |  24  | GND        |
| EMMC_RSTN |  12  |  23  | VCC3V3_SYS |
| GND       |  13  |  22  | VCC3V3_SYS |
| GND       |  14  |  21  | VCC_1V8    |
| EMMC_RCLK |  15  |  20  | VCC_1V8    |
| GND       |  16  |  19  | GND        |
| GND       |  17  |  18  | GND        |

</div>

## TF 卡槽 (14)

TF 卡可以作为系统存储或外部存储使用。

当它被用作系统存储时，你最好选择存储空间大于 8GB 的。

当它作为外部存储时，你可以选择存储空间最大为 128GB 的。

当 TF 卡插入 TF 卡槽时，系统会自动识别设备。

TF 卡的接口针脚规格如下所示：

| Pin# | Name         |
| :--: | :----------- |
|  1   | SDMMC0_D2    |
|  2   | SDMMC0_D3    |
|  3   | SDMMC0_CMD   |
|  4   | VCC3V3_SYS   |
|  5   | SDMMC0_CLK   |
|  6   | GND          |
|  7   | SDMMC0_D0    |
|  8   | SDMMC0_D1    |
|  9   | SDMMC0_DET_L |
|  10  | GND          |
|  11  | GND          |
|  12  | GND          |
|  13  | GND          |

## 耳机 (15)

## MIPI CSI (16)

## MIPI DSI (17)

## 40-pin 座子 (18)

请查阅 [ROCK 5B GPIO 定义](rock5b-gpio)。

## SPI NOR Flash (19)

## RTC 电池 (20)

RTC 连接器是按照标准的连接器类型设计的。

你可以从板子上的丝印中分辨出 '+3.3V' 和 '-'。

| Pin# | Name  |
| :--: | :---- |
|  1   | GND   |
|  2   | +3.3V |

## Recovery 按钮 (21)

ROCK 5B 支持 loader 模式，这是 CPU 等待 USB OTG 端口命令的一种特殊操作模式。

Recovery 按钮用于升级板上 SPI NOR Flash 或 eMMC 的图像。

下面是将设备启动到 loader 模式的步骤。

- 确保 U-Boot 镜像已经预先安装在 SPI NOR Flash 或 eMMC 上。
- 按下并按住 Recovery 按钮
- 将 USB-A 转 C 线插入 ROCK 5B 的 Type-C 端口，另一端插入电脑。
- 等待大约 5 秒钟
- 确认 ROCK 5B 处于 loader 模式。

```bash
#For macOS host:
	lsusb result
Output:Bus 000 Device 004: ID 2207:350b Fuzhou Rockchip Electronics Co., Ltd. Composite Device

#For Linux host:
	lsusb result
Output：Bus 001 Device 030: ID 2207:350b Fuzhou Rockchip Electronics Company

#For Windows host:
Open RKDevTool and you would see the device is in Found One MASKROM Device.
```

## 电源键 (22)

电源按钮用于打开或关闭设备。
短按电源按钮就可以打开/关闭设备的电源。这就是我们所说的通过软件开/关电源。
电源按钮还提供硬件开/关设备的功能。
当系统崩溃时，你可以通过这种方法关闭设备。
按住电源按钮至少 6 秒钟。然后释放电源按钮。
之后，短按电源按钮就可以打开设备的电源。

## RGB LED (23)

请查阅 [LED 指导](/radxa-os/rsetup/led).

## Fan (24)

你可以查阅 [rsetup: thermal-governor](/radxa-os/rsetup/rsetup-tool#thermal-governor) 来进行风扇设置。
定义表（图片中从上到下）：

| Pin# | Name  |
| :--: | :---- |
|  1   | +5.0V |
|  2   | GND   |

## Maskrom 按键 (25)

ROCK 5B 支持 Maskrom 模式，这是 CPU 等待 USB OTG 端口命令的一种特殊操作模式。

当需要把镜像写到 SPI NOR Flash 或 eMMC 板上时，需要使用 Maskrom 按钮进入 Maskrom 模式。
