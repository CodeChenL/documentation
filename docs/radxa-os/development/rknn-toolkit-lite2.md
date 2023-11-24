---
sidebar_position: 20
---

# 板端 Python NPU 模型推理教程 (RKNN Toolkit Lite2)

:::info
本文档仅演示如何运行官方示例，更多资料可以查看 [RKNN Toolkit2 源码库](https://github.com/rockchip-linux/rknn-toolkit2) 内的 rknn_toolkit_lite2/doc 文件夹。
:::

## 安装 RKNN Toolkit Lite2 及其所需依赖

:::info
Radxa 官方镜像已默认安装 RKNN Toolkit Lite2 及其所需依赖，如无法运行可尝试以下命令。
:::

```bash
sudo apt update
sudo apt install rknpu2-rk3588 python3-rknnlite2    #SOC为RK3588系列
sudo apt install rknpu2-rk356x python3-rknnlite2    #SOC为RK356X系列
```

## 安装 RKNN Toolkit Lite2 官方例程

```bash
sudo apt update
sudo apt install python3-rknnlite2-example
```

## 运行 Resnet18 示例

:::info
RKNN Toolkit Lite2 主要用于 RKNN 模型在 Rockchip NPU 上的部署。  
在使用 RKNN Toolkit Lite2 之前，用户需要先通过RKNN Toolkit2 将各深度学习框架导出的模型转成 RKNN 模型。  
RKNN Toolkit2 使用教程可以参考 [PC 端 npu 模型转换与推理教程 (RKNN Toolkit2)](/general-tutorial/rknn-toolkit2.md)。
:::

```bash
cd /usr/share/python3-rknnlite2
python test.py
--> Load RKNN model
done
--> Init runtime environment
I RKNN: [14:34:53.240] RKNN Runtime Information: librknnrt version: 1.5.2 (c6b7b351a@2023-08-23T15:28:22)
I RKNN: [14:34:53.242] RKNN Driver Information: version: 0.8.2
W RKNN: [14:34:53.242] Current driver version: 0.8.2, recommend to upgrade the driver to the new version: >= 0.8.8
I RKNN: [14:34:53.250] RKNN Model Information: version: 6, toolkit version: 1.5.2-source_code(compiler version: 1.5.2 (71720f3fc@2023-08-21T09:35:42)), target: RKNPU v2, target platform: rk3588, framework name: PyTorch, framework layout: NCHW, model inference type: static_shape
done
--> Running model
resnet18
-----TOP 5-----
[812]: 0.9996760487556458
[404]: 0.00024927023332566023
[657]: 1.449744013370946e-05
[466 833]: 9.023910024552606e-06
[466 833]: 9.023910024552606e-06

done
```

:::info
执行该示例将加载 Resnet18 模型并进行推理，得到测试图片的 top5 分类结果。  
在这里，类别 812 的概率最高，所以模型可能认为输入图像属于类别 812。  
要了解类别 812 代表的是什么，您需要查看模型训练时使用的数据集或标签，或者查找与该模型相关的文档或资源，以确定类别 812 的含义。  
在这里类别 812 表示的应该是航天飞机。
:::

![输入的图片](/img/general-tutorial/rknn/space_shuttle_224.webp)
