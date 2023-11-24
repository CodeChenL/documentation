---
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# APT Repository

RadxaOS is an operating system based on Debian / Ubuntu. Our system contains not only the APT repositories of the upstream system, but also additional repositories for RadxaOS-specific packages.

## APT Repository Configuration Files

The APT repository configuration files are usually stored in two places:

1. `/etc/apt/sources.list`: main repository
2. `/etc/apt/sources.list.d/*.list`: additional repositories

The following are common additional repositories in RadxaOS:

```bash
radxa@radxa-zero-2pro:~$ ls /etc/apt/sources.list.d/
bookworm-backports.list bookworm-updates.list radxa.list
bookworm-security.list radxa-amlogic.list
```

### `bookworm-*.list`

These files provide some additional repositories upstream. Where `bookworm` is the operating system codename, which can be queried with the following command:

```bash
radxa@radxa-zero-2pro:~$ grep VERSION_CODENAME /etc/os-release
VERSION_CODENAME=bookworm
```

### `radxa.list`

This file provides the main RadxaOS repository. This repository contains common packages developed by Radxa that are safe to use on most systems.

### `radxa-*.list`

This file provides the RadxaOS Vendor repository. This repository contains private packages provided in the Vendor SDK.

Since most of these packages are created by third parties and cannot be guaranteed to comply with the [Debian Policy](https://www.debian.org/doc/debian-policy/), this repository is not installed by default on the CLI version to prevent the system from automatically parsing and installing the software in this repository, which may cause the system to fail to run normally.

:::tip
If you need to use software from this repository, Radxa recommends using the desktop version of RadxaOS.
:::

## RadxaOS Vendor Repository

<Tabs queryString="vendor-repo">
  <TabItem value="enable" label="Enable">

:::warning
Enabling the RadxaOS Vendor repository on non-desktop variants of RadxaOS is unsupported, so please use with caution.
:::

Please run the following command to add the RadxaOS Vendor repository:

```bash
VENDOR="$(tr $"\0" $"\n" < /proc/device-tree/compatible | tail -n 1 | cut -d "," -f 1)"
source /etc/os-release
echo "deb [signed-by=/usr/share/keyrings/radxa-archive-keyring.gpg]" \
     "https://radxa-repo.github.io/$VERSION_CODENAME $VENDOR-$VERSION_CODENAME main" | \
     sudo tee "/etc/apt/sources.list.d/radxa-$VENDOR.list"
sudo apt-get update
```

:::note
The Rockchip Vendor repository is only supported for Debian-based RadxaOS. packages contained in this repository will not work properly on Ubuntu.

Also, the Rockchip Vendor repository requires additional configuration to ensure that packages from this repository are prioritized for use on your system.

You can configure and install most of the Rockchip Vendor packages by doing the following after running the above commands:

```bash
sudo apt-get dist-upgrade --allow-downgrades task-rockchip
sudo apt-get dist-upgrade --allow-downgrades
```

:::

  </TabItem>
  <TabItem value="disable" label="Disable">

To disable this repository, simply delete the corresponding configuration file:

```bash
VENDOR="$(tr $"\0" $"\n" < /proc/device-tree/compatible | tail -n 1 | cut -d "," -f 1)"
sudo rm "/etc/apt/sources.list.d/radxa-$VENDOR.list"
sudo apt-get update
```

:::note
Deleting the Vendor repository does not remove installed packages. However, these packages will not be updated again and may be overwritten by packages in other repositories.

To ensure proper operation of your operating system, do not change your system's default repository configuration.
:::

  </TabItem>
</Tabs>

## RadxaOS Testing Repository

<Tabs queryString="test-repo">
  <TabItem value="enable" label="Enable">

:::warning
The software inside the testing repository is not verified, please use it with caution.
:::.

Please run the following command to use the RadxaOS test repository:

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
  <TabItem value="disable" label="Disable">

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

## China Repository Mirror

Please run the following command to use the RadxaOS repository mirror provided by the third parties:

:::note
RadxaOS cannot guarantee the availability or download speed of third-party mirrors.
:::

<Tabs queryString="mirror">
  <TabItem value="aghost">

This mirror is provided by [aghost](mailto:ggg17226@gmail.com).

```bash
sudo sed -i "s|https://radxa-repo.github.io|https://radxa-apt.aghost.cn|g" /etc/apt/sources.list.d/radxa*.list
sudo apt-get update
```

  </TabItem>
  <TabItem value="chenjaly">

This mirror is provided by [chenjaly](mailto:2540735020@qq.com).

```bash
sudo sed -i "s|https://radxa-repo.github.io|http://apt.chenjaly.cn|g" /etc/apt/sources.list.d/radxa*.list
sudo apt-get update
```

  </TabItem>
  <TabItem value="default" label="Restore Defaults">

```bash
sudo sed -e "s|https://radxa-apt.aghost.cn|https://radxa-repo.github.io|g" \
         -e "s|http://apt.chenjaly.cn|https://radxa-repo.github.io|g" \
         -i /etc/apt/sources.list.d/radxa*.list
sudo apt-get update
```

  </TabItem>
</Tabs>
