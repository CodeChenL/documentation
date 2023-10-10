---
sidebar_label: "MRAA 介绍"
sidebar_position: 30
---

# MRAA 简介

Eclipse Mraa（Libmraa）是一个包含 Java、Python 和 JavaScript 绑定的 C/C++ 库，用于连接各种物联网和边缘平台上的 I/O 引脚和总线，其 API 结构合理，端口名称/编号与所在的电路板相匹配。

## 安装 MRAA

```bash
sudo apt-get update -y
sudo apt-get install libmraa2 libmraa-dev libmraa-java python3-mraa mraa-tools -y
```

# MRAA 命令行工具

## gpio

- mraa-gpio list： 列出所有可用引脚
- mraa-gpio get pin： 获取引脚状态
- mraa-gpio set pin level： 设置引脚状态
- mraa-gpio version： 获取版本信息

## i2c

- mraa-i2c list： 列出所有可用 i2c 总线
- mraa-i2c version： 获取 mraa 版本和板卡名称
- mraa-i2c detect bus： 列出指定总线上检测到的设备
- mraa-i2c get bus device reg： 从指定设备寄存器中获取值
- mraa-i2c set bus device reg value： 将指定设备寄存器设置为值

## uart

- mraa-uart list： 列出所有可用 uart 端口
- mraa-uart dev dev_num baud customized_baud send str: 将字符串 str 发送到指定端口
- mraa-uart dev dev_num baud customized_baud recv 1000： 读取端口 dev_num 上的数据，最多读取 1000 字节，并将它们显示在 stdout 上

# 参考

- [mraa 官网](https://iotdk.intel.com/docs/master/mraa/index.html)
- [github](https://github.com/eclipse/mraa)
