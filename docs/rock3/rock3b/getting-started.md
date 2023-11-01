---
sidebar_label: "上手指南"
sidebar_position: 3
slug: /rock3b/getting-started
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 开始使用 ROCK 3B

## 准备项

- ROCK 3B
- 以下存储介质之一：  
   microSD 卡，容量不小于 16GB  
   [eMMC 模块](/accessories/emmc_module)，容量不小于 16GB
- 电源适配器，推荐使用 [Radxa Power PD 30W](/accessories/pd_30w)：  
   ROCK 3B 采用 Type-C 接口供电，支持 PD 供电输入
- USB 键盘鼠标
- HDMI 显示器和 HDMI 线  
   ROCK 3B 配备了全尺寸 HDMI 接口。建议使用 HDMI 显示器。最高支持 4K@60 显示。
- microSD 读卡器或 eMMC 读卡器  
   用于 microSD 卡或 eMMC 模块的镜像刷写。

### 系统安装

1. 选择您要使用的[官方镜像](/rock3/images)并下载。

2. 参考[操作系统安装指南](/general-tutorial/os-installation)将镜像刷写到存储介质中。

3. 将系统存储介质：microSD 卡或 eMMC 模块插入主板上的插口，并通过 Type-C 电源适配器供电启动您的产品。

4. 连接外设，开始使用 [Radxa OS](/radxa-os)。

如果您对该产品已足够了解，您也可使用线刷的方式来进行刷机：

<Tabs>
<TabItems value="Windows">

请参阅 [RKDevtool 使用指南](/general-tutorial/rksdk/rkdevtool#write-file-to-device)。

</TabItems>
<TabItems value="Linux/MacOS">

请参阅 [rkdevloptool 使用指南](/general-tutorial/rksdk/rkdeveloptool#usage-for-rkdeveloptool)或者 [upgrade_tool 使用指南](/general-tutorial/rksdk/upgrade_tool#usage-for-upgrade_tool)。

</TabItems>
</Tabs>
