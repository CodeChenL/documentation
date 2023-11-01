---
sidebar_label: "Use rsetup to install device tree overlay files (DTBO) or source code (DTS)"
sidebar_position: 10
---

# Use rsetup to install device tree overlay files (DTBO) or source code (DTS)

:::info
The Install 3rd party overlay feature of rsetup installs both device tree overlay files (DTBO) and source code (DTS).  
Pre-compiled files from the official DTBO repository radxa/overlays can be downloaded [from here](https://github.com/radxa/overlays/actions).  
After unpacking, you can skip to [enter rsetup and load device tree overlay file (DTBO) or source code (DTS)](/radxa-os/rsetup/install_overlays#enter-rsetup-and-load-device-tree-overlay-file-dtbo-or-source-code-dts) to continue.
:::

## Get radxa/overlays source code

```bash
git clone https://github.com/radxa/overlays.git
cd overlays
```

## enter rsetup and load device tree overlay file (DTBO) or source code (DTS)

```bash
rsetup
# Follow these options to enter the Install 3rd party overlay interface
# Overlays -> Install 3rd party overlay
```

![Overlays](/img/radxa-os/rsetup/install_overlays/Overlays.webp)

![Install_3rd_party_overlay](/img/radxa-os/rsetup/install_overlays/Install_3rd_party_overlay.webp)

:::info
The following is the path to the source code of the Rexchip SOC device tree overlay file.  
arch/arm64/boot/dts/rockchip/overlays/\*.dts  
If the SOC vendor is Amlogic, you need to replace rockchip with amlogic in the above path.。
:::

### Enter it, select the device tree overlay file (DTBO) or source code (DTS) you need, and exit rsetup.

## Reboot

```bash
#You can check the parameters using cat /boot/extlinux/extlinux.conf
sudo reboot
```
