---
sidebar_label: 'RKDevTool'
sidebar_position: 2
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# RKDevTool

:::caution
This article is not about [rkdeveloptool](rkdeveloptool) (for Linux / macOS).
:::

RKDevTool is a USB flashing software developed by Rockchip for Windows platforms.

---

## Installation of RKDevTool

Please download and extract the following files to install RKDevTool:
- [RKDevTool v2.96](https://dl.radxa.com/tools/windows/RKDevTool_Release_v2.96_zh.zip) (Includes Chinese documentation)
- [DriverAssitant v5.0](https://dl.radxa.com/tools/windows/DriverAssitant_v5.0.zip)

### Installation of drivers

Download and unzip DriverAssitant, then execute DriverInstall.exe and click the `Install Driver` button to install the driver.  
If you have previously installed another version of driver, please click `Uninstall Driver` to uninstall the driver first and then reinstall it.

![RK Driver](/img/configuration/RK-Driver-Assistant-Install-Uninstall.webp)

---

## Write file to device

### Run RKDevTool

![RKDevTool](/img/configuration/rkdevtool.webp)

### Connect the product and enter Maskrom mode

:::info
Please refer to the instructions of the product for operation. The way to enter Maskrom mode varies slightly from product to product.
:::

 If the operation is normal, RKDevTool will prompt `Found One MASKROM Device`:

![RKDevTool maskrom](/img/configuration/rkdevtool-maskrom.webp)

:::caution
Although RKDevTool supports the selection of Maskrom devices, writing to multiple devices at the same time will result in a write failure for the device being written to.

If you need to write to multiple devices at the same time, use [upgrade_tool](upgrade_tool).
:::

### Configuring RKDevTool Write Parameters

:::caution
RKDevTool does not automatically decompress compressed files when writing to them.

First extract the used files and specify the extracted files in the RKDevTool.
:::

Click a blank cell to select the [Loader](Loader) and Image file to be used:

![RKDevTool choose](/img/configuration/rkdevtool-choose.webp) 

Select the target media in the `Storage` option:

<Tabs queryString="storage">
<TabItem value="eMMC">

![RKDevTool storage](/img/configuration/rkdevtool-storage.webp)

</TabItem>
<TabItem value="SPINOR">

![RKDevTool SPINOR](/img/configuration/rkdevtool-spinor.webp)

</TabItem>
</Tabs>

Select `Write by Address` and click `run`:

![RKDevTool flashing](/img/configuration/rkdevtool-flashing.webp) 

Wait for the write to complete, after which the device will reboot automatically:

![RKDevTool complete](/img/configuration/rkdevtool-complete.webp) 
