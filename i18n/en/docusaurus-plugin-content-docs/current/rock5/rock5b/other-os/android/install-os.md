---
sidebar_position: 2
title: Install OS
---

import Etcher from '../../../../common/general/\_etcher.mdx'

This document describes how to install an Android image to the Radxa ROCK 5B.

Radxa ROCK 5B can be booted from microSD card or EMMC, depending on the boot method, the system will be installed on different media.

<Tabs queryString="target">

<TabItem value="microsd" label="Install system to microSD card">

# Install the operating system

## Preparation

- 1x microSD card (capacity >=8GB)
- 1x microSD card reader
- 5V power adapter (Recommended [Radxa Power PD30W](../../accessories/pd-30w))

## Image Download

Please go to [Resource Download Summary](./download) to download the corresponding image file.

## Install the system

<Etcher model="rock5b" />

## Boot the system

- After successfully burning the microSD card as described above, insert the microSD card into the microSD slot of Radxa Radxa ROCK 5B.
- The power supply interface of Radxa Radxa ROCK 5B is [USB 2.0 OTG Type C port](/rock5/rock5b/hardware-design/hardware-interface), please connect the power supply port and the adapter with Type-C cable.

:::tip
The Radxa ROCK 5B supports USB Type-C PD 2.0 at 9V/2A, 12V/2A, 15V/2A and 20V/2A. Radxa recommends using the [Radxa Power PD30W](../../accessories/pd-30w).
:::.

## Reference Documentation

</TabItem>

<TabItem value="emmc" label="Installing the system to eMMC">

### Preparation

### Prepare installation media

- micro usb to typea usb connector cable

### Download the image

Please go to [Resource Download Summary](../../getting-started/download) to download the corresponding image file.

### System Installation

### System Installation

1. Connect the micro usb cable to the host computer. 2.

2. Enter maskrom mode

- Disconnect the board from the power supply.
- Remove the SD card and insert the eMMC module.
- Connect the USB3.0 port of the Radxa Radxa ROCK 5B to the PC side with USB A-A.
- Short the following pins
- Power up the board.
- Remove the right yellow jumper cap and keep the left yellow jumper cap.

<img src="/img/rock5b/rock-5b-maskrom-01.webp" alt="Radxa ROCK 5B maskrom" width="500" />

- Check for USB devices
  - Linux/macOS: Check if "Bus 001 Device 112: ID 2207:350a Fuzhou Rockchip Electronics Company" is displayed after running lsusb.
  - Windows: Open RKDevTool and you will see the device in "maskrom mode".
    <img src="/img/rock5b/rock-5b-select-loader-bin.webp" alt="Radxa ROCK 5B select loader bin" width="500" />

<Tabs queryString="target">

<TabItem value="linux/mac" label="Linux/mac">

#### Linux/Mac systems are written using rkdeveloptool

[rkdeveloptool](../../low-level-dev/rkdeveloptool)

</TabItem>

<TabItem value="windows" label="Windows">

#### Windows systems write with rkdevetool

[rkdevtool](/rock5/rock5b/low-level-dev/rkdevtool)

</TabItem>

</Tabs>

## System startup

### Starting the Radxa ROCK 5B

1. Power up the Radxa ROCK 5B via the adapter.
2. The Radxa ROCK 5B will start up with the green power LED on.

</TabItem>

</Tabs>

## Frequently asked questions

## Documentation
