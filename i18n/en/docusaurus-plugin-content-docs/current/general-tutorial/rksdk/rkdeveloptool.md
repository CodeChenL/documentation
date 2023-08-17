---
sidebar_label: 'rkdeveloptool'
sidebar_position: 2
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# rkdeveloptool

:::caution
This article is not about [RKDevTool](RKDevTool) (for Windows).
:::

rkdeveloptool is a USB flashing software developed by Rockchip for Linux/macOS platforms.

rkdeveloptool can be thought of as [upgrade_tool](upgrade_tool) for [open source version](https://opensource.rock-chips.com/wiki_Rkdeveloptool).

---

## Installation for rkdeveloptool

If your operating system does not provide rkdeveloptool, you will need to compile and install it from source.

<Tabs queryString="host_os">
<TabItem value="Arch Linux">

The rkdeveloptool can be installed from [AUR](https://aur.archlinux.org/packages/rkdeveloptool).

</TabItem>
<TabItem value="Debian">

Execute the following command from the command line to install:

```bash
sudo apt-get update
sudo apt-get install -y libudev-dev libusb-1.0-0-dev dh-autoreconf pkg-config libusb-1.0 build-essential g++ git wget
git clone https://github.com/rockchip-linux/rkdeveloptool
cd rkdeveloptool
wget https://patch-diff.githubusercontent.com/raw/rockchip-linux/rkdeveloptool/pull/85.patch
git am 85.patch
autoreconf -i
./configure
make -j $(nproc)
sudo cp rkdeveloptool /usr/local/sbin/
```

</TabItem>
<TabItem value="macOS">

Please install [Homebrew](https://brew.sh/) first, then run the following command from the command line to install it:

```bash
brew install automake autoconf libusb pkg-config git wget
git clone https://github.com/rockchip-linux/rkdeveloptool
cd rkdeveloptool
wget https://patch-diff.githubusercontent.com/raw/rockchip-linux/rkdeveloptool/pull/85.patch
git am 85.patch
autoreconf -i
./configure
make -j $(nproc)
cp rkdeveloptool /opt/homebrew/bin/
```

</TabItem>
</Tabs>

---

## Usage for rkdeveloptool

### View connected Maskrom devices

```bash
rkdeveloptool ld
```

### Write file

:::caution
rkdeveloptool does not automatically decompress compressed files when writing to them.

First extract the used files and specify the extracted files in rkdeveloptool.
:::

:::caution
rkdeveloptool does not support the selection of Maskrom devices, nor can it select the storage media to be written to.  
Normally when using rkdeveloptool, only a device and a storage medium are connected in hardware. This step cannot be controlled by software.

If you need to write to multiple devices at the same time, use [upgrade_tool](upgrade_tool).
:::

```bash
sudo rkdeveloptool db <loader>
sudo rkdeveloptool wl 0 <image>
```

Links to download the Loader files used by some products can be found on the [Loader](Loader) page.

### Reboot device

```bash
sudo rkdeveloptool rd
```
