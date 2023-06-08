---
sidebar_label: 'SSH使用教程'
sidebar_position: 10
---

# SSH访问教程

瑞莎在官方linux镜像中预集成了SSH以便于远程访问终端，本指南以ROCK 5A为例，其他主板的操作相似。  

## 必要准备

- ROCK 5A 主板
- RJ45 网线
- 主机PC
- 路由器/交换机

通过网线将ROCK 5A连接到与主机同网段的路由器/交换机。

### 查看SSH服务状态

在ROCK 5A启动后，可通过以下命令查看SSH服务状态：  

```bash
	sudo service ssh status
```

如果SSH服务异常或被卸载，可通过以下命令重启或重新安装:  
重启服务：  

```bash
    service sshd restart
```

重新安装：  

```bash
    sudo apt-get update
    sudo apt-get install ssh
```
### 查询IP地址

#### 通过命令行查看

通过`Ctrl + Alt + T`打开终端，在终端中输入以下命令查看I{地址：  

```bash
    ip a
```

其中与主机同一个网段的IP地址即是SSH连接时所需要的ip地址，如以下输出中`192.168.42.100`即是我们需要的ip地址:  

```bash
1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN group default qlen 1000
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
    inet 127.0.0.1/8 scope host lo
       valid_lft forever preferred_lft forever
    inet6 ::1/128 scope host
       valid_lft forever preferred_lft forever
2: eth0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc mq state UP group default qlen 1000
    link/ether 56:ae:03:82:18:51 brd ff:ff:ff:ff:ff:ff
    inet 192.168.42.100/24 brd 192.168.42.255 scope global dynamic noprefixroute eth0
       valid_lft 43176sec preferred_lft 43176sec
    inet6 fe80::8e:d164:96ea:40b6/64 scope link noprefixroute
       valid_lft forever preferred_lft forever

```


#### 使用Angryip找到ROCK 5A的IP地址

在无屏或远程情况下无法直接操作主板来获取ip地址时，可使用此方法查询ip地址。

- 首先主机PC需要下载[Angryip](https://angryip.org/download/),然后确保主机PC 和 ROCK 5A处于同一局域网。

- 打开Angryip，选择IP 范围，范围在192.168.2.0 - 192.168.2.255(选择主机与主板所在的网段)。 点击开始，如图所示。

- ![Angryip](/img/configuration/ssh-Angryip.webp)

- Ctrl + F 查找`rock`关键词，找到ROCK 5A的IP地址。

## 连接

- 打开主机终端，通过`ping`命令查询是否在同一网段：  

```bash
    ping ROCK 5A的IP地址
```

在连通的情况下`ping`结果应该是正常的。

- SSH登录ROCK 5A

```bash
ssh rock@ROCK 5A的IP地址
```

- 若支持**本地域名(Local Domain)**,则可以使用一下命令，而不用扫描ROCK 5A的IP地址。

```bash
ping rock-5a.local
ssh rock@rock-5a.local
```

正确连接后，终端会切换到ROCK 5A的远程终端，如下图所示：  

![ssh connect](/img/configuration/ssh-connect.webp)

此时就可以像5A上一样操作终端。
