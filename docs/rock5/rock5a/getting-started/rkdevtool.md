﻿---
sidebar_label: '通过RKDevTool工具线刷系统'
sidebar_position: 36
---

# 简介

ROCK 5支持Maskrom模式，这是CPU通过USB OTG端口接收命令的一种特殊操作模式。
我们用来与ROCK 5在Maskrom模式下进行通信的PC工具是rkdeveloptool和RKDevTool。
我们在Linux/MacOS下使用rkdeveloptool，在Windows下使用RKDevTool。

# 准备工作

- ROCK 5A
- USB-A转USB-A线缆
- eMMC模块
- 电源适配器以及电源线
- 系统镜像

# 步骤

- **在Windows下安装工具以及RK驱动：**  
[RKDevTool V2.96](https://dl.radxa.com/tools/windows/RKDevTool_Release_v2.96-20221121.rar)  
[DriverAssitant V5.0](https://dl.radxa.com/tools/windows/DriverAssitant_v5.0.zip)  

- 把板子启动到Maskrom模式：  
ROCK 5A进入maskrom模式的步骤：  
1. 拔掉板子的电源。  
2. 将eMMC或其他存储介质取下。  
3. 把USB-A转USB-A线一端插入ROCK 5A**上方的** [USB 3.0端口](../getting-started/overview)(8号标注)， 另一端接入电脑USB 3.0端口。  
4. 插电启动板子：  
![ROCK 5A power on](/img/rock5a/rock5a_power.webp)  
5. 装上eMMC模块或其他安装介质。

另一种方法是在开机前把两个[maskrom针脚](../getting-started/overview)(23号标注)短接，这种方式不需要把eMMC模块和其他存储器拿下来。 

-打开RKdevtool:  
这是没检测到Maskrom设备的界面：  
![no device](/img/rock5a/no-device.webp)  

这是检测到Maskrom设备的界面：  
![on maskrom](/img/rock5a/on-maskrom.webp)  

- 选择引导文件和系统镜像：  
鼠标左键点击最右边空格以选择文件：  
![Choose files](/img/rock5a/choose-files.webp)  

ROCK 5A的spi加载文件可以在此下载： **[RK3588 loader](https://dl.radxa.com/rock5/sw/images/loader/rock-5b/rk3588_spl_loader_v1.08.111.bin)**  
系统镜像可在[官方系统镜像页面](../downloads/official-images)下载。  
**提示： RKDevTool使用的镜像是在下载后解压产生的镜像文件。**

- 选择设备并烧写(run键):  
注意:  
1. 选择正在使用的存储介质  
2. 选择所需的设备  
3. 勾选此项  
![Attention Point](/img/rock5a/attention-point.webp)

- 等待刷写完成：  
刷写进度显示在右边，完成后它会提示你：  
![Flash completion](/img/rock5a/completion.webp)

# 补充说明

RKDevTool的用途还有很多，本指南只是其中之一， 
如需获取更多信息，欢迎加入我们的交流平台或向谷歌寻求帮助。


