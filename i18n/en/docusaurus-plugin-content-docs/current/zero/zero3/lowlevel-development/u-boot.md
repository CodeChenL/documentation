---
sidebar_position: 2
---

# U-boot Develop

BSP is a set of tools provided by Radxa to quickly build U-Boot Kernel. It is very convenient to use bsp to build your own U-Boot and Kernel.  
The following will show you how to use bsp to build the U-Boot of Radxa zero3.

## [bsp Environment configuration](https://github.com/radxa-repo/bsp/blob/main/docs/getting_started.md)

## Build U-Boot

After completing the bsp environment configuration, you need to compile U-Boot once before pulling the relevant code from the repository.  
you can execute `. /bsp u-boot latest radxa-zero3` to build U-Boot, the path to the U-Boot source code is located in the bsp directory under `.src/u-boot`.

```
cd bsp
mkdir output
cd output
../bsp --no-prepare-source u-boot latest radxa-zero3

Parameter Description:
--no-prepare-source

#Compile with local changes, if you don't add this parameter it will sync the latest code from the Radxa U-Boot repository and overwrite the local changes.
```

For more bsp parameter usage instructions, you can execute `./bsp` to view.

After compilation, many `deb` packages will be generated in the bsp/output directory, you just need to install the following `deb` packages.

```
u-boot-latest_2023.10-1_arm64.deb
```

Copy the above two `deb` packages to the board and install them with the `dpkg` command to complete the U-Boot installation.

```
sudo dpkg -i u-boot-latest_2023.10-1_arm64.deb
```

U-Boot needs to be flashed onto the boot media after the installation is complete.

```
cd /usr/lib/u-boot/radxa-zero3/
sudo ./setup.sh update_bootloader /dev/mmcblk1   #/dev/mmcblk1 is the boot media you are currently using, you need to select it according to the actual device you are using
sudo reboot
```

After reboot, you can observe the U-Boot boot log to see if U-Boot has been successfully updated.
