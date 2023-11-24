---
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# APT 仓库

RadxaOS 是基于 Debian / Ubuntu 基础上进行二次开发而获得的系统。我们的系统里不仅包含了上游系统的 APT 仓库，同时也为 RadxaOS 独有的软件包提供了额外的仓库。

## APT 仓库配置文件

APT 仓库的配置文件一般保存在以下两个地方：

1. `/etc/apt/sources.list`： 主仓库
2. `/etc/apt/sources.list.d/*.list`： 额外仓库

以下是 RadxaOS 中常见的额外仓库：

```bash
radxa@radxa-zero-2pro:~$ ls /etc/apt/sources.list.d/
bookworm-backports.list  bookworm-updates.list  radxa.list
bookworm-security.list   radxa-amlogic.list
```

### `bookworm-*.list`

这些文件提供了上游的一些额外仓库。其中 `bookworm` 是操作系统代号，具体可通过以下命令查询：

```bash
radxa@radxa-zero-2pro:~$ grep VERSION_CODENAME /etc/os-release
VERSION_CODENAME=bookworm
```

### `radxa.list`

此文件提供了 RadxaOS 主仓库。这个仓库里面包含了由瑞莎开发的通用软件包，可以安全适用于大多数系统。

### `radxa-*.list`

此文件提供了 RadxaOS Vendor 仓库。这个仓库里面包含了 Vendor SDK 里提供的私有软件包。

由于这些软件包大多是由第三方制作的，不能保证遵守 [Debian Policy](https://www.debian.org/doc/debian-policy/)，因此本软件仓库在 CLI 版本上是默认不安装的，以避免系统自动解析并安装此软件仓库里面的软件，并导致系统无法正常运行。

:::tip
如果需要使用此仓库中的软件，瑞莎建议使用桌面版本 RadxaOS。
:::

## RadxaOS Vendor 仓库

<Tabs queryString="vendor-repo">
  <TabItem value="enable" label="开启">

:::warning
在非桌面版本 RadxaOS 上开启 RadxaOS Vendor 仓库是不受支持的，请谨慎使用。
:::

请执行以下命令来添加 RadxaOS Vendor 仓库：

```bash
VENDOR="$(tr $"\0" $"\n" < /proc/device-tree/compatible | tail -n 1 | cut -d "," -f 1)"
source /etc/os-release
echo "deb [signed-by=/usr/share/keyrings/radxa-archive-keyring.gpg]" \
     "https://radxa-repo.github.io/$VERSION_CODENAME $VENDOR-$VERSION_CODENAME main" | \
     sudo tee "/etc/apt/sources.list.d/radxa-$VENDOR.list"
sudo apt-get update
```

:::note
Rockchip Vendor 仓库仅支持基于 Debian 的 RadxaOS。Ubuntu 上无法正常使用此仓库中包含的软件包。

同时，Rockchip Vendor 仓库需要额外的配置，从而保证此仓库中的软件包会被系统优先使用。

你可以在执行完以上命令后，执行以下操作，从而配置并安装绝大多数 Rockchip Vendor 软件包：

```bash
sudo apt-get dist-upgrade --allow-downgrades task-rockchip
sudo apt-get dist-upgrade --allow-downgrades
```

:::

  </TabItem>
  <TabItem value="disable" label="关闭">

如需禁用此仓库，直接删除对应的配置文件即可：

```bash
VENDOR="$(tr $"\0" $"\n" < /proc/device-tree/compatible | tail -n 1 | cut -d "," -f 1)"
sudo rm "/etc/apt/sources.list.d/radxa-$VENDOR.list"
sudo apt-get update
```

:::note
删除 Vendor 仓库并不会删除已安装的软件包。但这些软件包也无法再次获得更新，并有被其他仓库中的软件包覆盖的可能性。

为了确保操作系统的正常使用，请勿随意更改系统默认的仓库配置。
:::

  </TabItem>
</Tabs>

## RadxaOS 测试仓库

<Tabs queryString="test-repo">
  <TabItem value="enable" label="开启">

:::warning
测试源里面的软件没有经过验证，请谨慎使用。
:::

请执行以下命令来使用 RadxaOS 测试仓库：

```bash
VENDOR="$(tr $"\0" $"\n" < /proc/device-tree/compatible | tail -n 1 | cut -d "," -f 1)"
source /etc/os-release
echo "deb [signed-by=/usr/share/keyrings/radxa-archive-keyring.gpg]" \
     "https://radxa-repo.github.io/$VERSION_CODENAME $VERSION_CODENAME-test main" | \
     sudo tee "/etc/apt/sources.list.d/radxa.list"
echo "deb [signed-by=/usr/share/keyrings/radxa-archive-keyring.gpg]" \
     "https://radxa-repo.github.io/$VERSION_CODENAME $VENDOR-$VERSION_CODENAME-test main" | \
     sudo tee "/etc/apt/sources.list.d/radxa-$VENDOR.list"
sudo apt-get update
```

  </TabItem>
  <TabItem value="disable" label="关闭">

```bash
VENDOR="$(tr $"\0" $"\n" < /proc/device-tree/compatible | tail -n 1 | cut -d "," -f 1)"
source /etc/os-release
echo "deb [signed-by=/usr/share/keyrings/radxa-archive-keyring.gpg]" \
     "https://radxa-repo.github.io/$VERSION_CODENAME $VERSION_CODENAME main" | \
     sudo tee "/etc/apt/sources.list.d/radxa.list"
echo "deb [signed-by=/usr/share/keyrings/radxa-archive-keyring.gpg]" \
     "https://radxa-repo.github.io/$VERSION_CODENAME $VENDOR-$VERSION_CODENAME main" | \
     sudo tee "/etc/apt/sources.list.d/radxa-$VENDOR.list"
sudo apt-get update
```

  </TabItem>
</Tabs>

## 中国仓库镜像

请执行以下命令来使用由第三方提供的 RadxaOS 仓库镜像：

:::note
瑞莎无法保证第三方镜像的可用性，或下载速率。
:::

<Tabs queryString="mirror">
  <TabItem value="aghost">

本镜像由 [aghost](mailto:ggg17226@gmail.com) 提供。

```bash
sudo sed -i "s|https://radxa-repo.github.io|https://radxa-apt.aghost.cn|g" /etc/apt/sources.list.d/radxa*.list
sudo apt-get update
```

  </TabItem>
  <TabItem value="chenjaly">

本镜像由 [chenjaly](mailto:2540735020@qq.com) 提供。

```bash
sudo sed -i "s|https://radxa-repo.github.io|http://apt.chenjaly.cn|g" /etc/apt/sources.list.d/radxa*.list
sudo apt-get update
```

  </TabItem>
  <TabItem value="default" label="恢复默认">

```bash
sudo sed -e "s|https://radxa-apt.aghost.cn|https://radxa-repo.github.io|g" \
         -e "s|http://apt.chenjaly.cn|https://radxa-repo.github.io|g" \
         -i /etc/apt/sources.list.d/radxa*.list
sudo apt-get update
```

  </TabItem>
</Tabs>
