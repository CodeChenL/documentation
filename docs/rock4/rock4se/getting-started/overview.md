﻿---
sidebar_label: '概览'
sidebar_position: 3
---

# ROCK 4SE 简介

ROCK 4 SE 是一款超小型单板计算机 (SBC)，具有优秀的性能和丰富的扩展端口。
ROCK 4 SE 为专业人士、工业 OEM、物联网发烧友、业余爱好者、PC DIY 发烧友和制造商提供了一个可靠且功能极强的平台，用于构建和运行各种应用。

[ROCK 4SE](/img/rock4/rock4se-closelook.webp)

:::note
主板外观可能因为硬件版本不同而有细微的差别。
:::

## 主要参数

|Model|ROCK 4SE|
|:-:|:-:|
|CPU|64 位六核处理器<br/>Rockchip RK3399-T<br/>双 1.5GHz Cortex-72 加四 1.0GHz Cortex-A53<br/>Mali T860MP4 gpu，支持 OpenGL ES 1.1/2.0/3.0/3.1/3.2， Vulkan 1.0， Open CL 1.1 1.2， DX11。|
|运行内存|LPDDR4<br/>64 位双通道 3200Mb/s 内存，可选 1GB/2GB/4GB|
|存储|eMMC<br/>μSD 卡：最高支持 256 GB<br/>M.2 SSD (M.2 最高支持 2T M2 NVME SSD)|
|显示|标准 HDMI 最高支持 4k@60<br/>通过 FPC 连接的双通道 MIPI DSI<br/>HDMI 和 MIPI DSI 可同时工作，支持镜像模式或扩展模式。|
|音频|3.5 毫米插孔，高清编解码器最高支持 24 位/96KHz 音频。|
|相机|通过 FPC 连接的双通道 MIPI CSI，支持高达 800 万像素摄像头（1mm 间距连接器）。|
|无线连接|802.11 ac wifi，蓝牙 5.0，带板载或外置天线。|
|USB|USB 3.0 OTG X1，拥有 host/device 切换开关，位于上方的端口<br/>USB 3.0 HOST X1，专用 USB 3.0 通道，下方 USB3.0 端口<br/>USB 2.0 HOST X2.|
|以太网|千兆以太网网，带以太网供电（PoE），需要额外的 HAT 才能通过 PoE 供电。|
|IO|[40 pin GPIO](../hardware/rock4se-gpio)|
|其他|RTC<br/>用于备份时间的 RTC 电池连接器 (选装)|
|电源|USB PD协议，支持 USB Type-C PD 2.0, 9V/2A, 12V/2A.<br/>Qualcomm® QC 快充：支持 3.0/2.0 adapter, 9V/2A, 12V/1.5A|
|尺寸|85mm x 54mm|
