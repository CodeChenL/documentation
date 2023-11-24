---
sidebar_position: 2
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# RKDevTool

:::caution
本文的主题不是 [rkdeveloptool](rkdeveloptool)（适用于 Linux / macOS）。
:::

RKDevTool 是 Rockchip 为 Windows 平台下进行 USB 烧录所开发的软件。

---

## 安装 RKDevTool

请下载并解压以下文件以安装 RKDevTool：

- [RKDevTool v2.96](https://dl.radxa.com/tools/windows/RKDevTool_Release_v2.96_zh.zip) (含中文使用文档)
- [DriverAssistant v5.0](https://dl.radxa.com/tools/windows/DriverAssitant_v5.0.zip)

### 安装驱动

下载并解压 DriverAssistant，然后执行 DriverInstall.exe 并点击 `Install Driver` 按钮来安装驱动。  
如果你之前已经安装过其他版本的驱动，请先点击 `Uninstall Driver` 卸载驱动，然后再重新安装。

![RK Driver](/img/configuration/RK-Driver-Assistant-Install-Uninstall.webp)

---

## 向设备中写入文件

### 运行 RKDevTool

![RKDevTool zh](/img/configuration/rkdevtool-zh.webp)

### 连接产品并进入 Maskrom 模式

:::info
请参照产品相关说明进行操作。不同产品进入 Maskrom 模式的方式会略有不同。
:::

如操作正常，RKDevTool 会提示 `发现一个MASKROM设备`：

![RKDevTool zh maskrom](/img/configuration/rkdevtool-zh-maskrom.webp)

:::caution
虽然 RKDevTool 支持选择 Maskrom 设备，但在同时写入多个设备时会导致正在写入的设备写入失败。

如果需要同时写入多个设备，请使用 [upgrade_tool](upgrade_tool)。
:::

### 配置 RKDevTool 写入参数

:::caution
写入文件时，RKDevTool 不会自动对压缩文件进行解压缩。

请首先将使用到的文件进行解压缩，并在 RKDevTool 中指定解压缩后的文件。
:::

点击空白单元格选择待使用的 [Loader](Loader) 和 Image 文件：

![RKDevTool zh choose](/img/configuration/rkdevtool-zh-choose.webp)

在 `存储` 选项中选择目标介质：

<Tabs queryString="storage">
<TabItem value="eMMC">

![RKDevTool zh storage](/img/configuration/rkdevtool-zh-storage.webp)

</TabItem>
<TabItem value="SPINOR">

![RKDevTool zh SPINOR](/img/configuration/rkdevtool-zh-spinor.webp)

</TabItem>
</Tabs>

选择 `强制按地址写` 后点击 `执行`：

![RKDevTool zh flashing](/img/configuration/rkdevtool-zh-flashing.webp)

等待写入完成，随后设备将自动重启：

![RKDevTool zh complete](/img/configuration/rkdevtool-zh-complete.webp)
