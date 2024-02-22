---
sidebar_position: 5
---

# ROCK 3A

## Product Description

- The ROCK 3A features a quad-core Cortex-A55 ARM processor and LPDDR4 RAM, and supports up to 4K@60 HDMI, MIPI DSI, MIPI CSI, 3.5mm headphone jack with microphone, USB port, Gigabit Ethernet, PCIe 3.0, PCIe 2.0, 40-pin GPIO docking station, RTC. The ROCK 3A also supports a 3.5mm headphone jack. In addition, the ROCK 3A supports PD and QC protocol power supply.

### Physical Photos

![ROCK 3A Overview](/img/rock3/3a/rock3a-interfaces.webp)

### Chip Block Diagram

![rk3568 block diagram](/img/rock3/3a/rock3a-system-block-diagram.webp)

### Features

<table>
    <tr>
        <td align="center">Model</td>
        <td align="center">Radxa ROCK 3A</td>
    </tr>
    <tr>
        <td align="center">SoC</td>
        <td colspan="2" align="center">Rockchip rk3568</td>
    </tr>
    <tr>
        <td align="center">CPU</td>
        <td colspan="2" align="center">Quad-core Cortex-A55, up to 1.6GHz</td>
    </tr>
    <tr>
        <td align="center">GPU</td>
        <td colspan="2" align="center">Arm Mali™‑G52‑2EE, Supports Arm Mali™‑G52‑2EE, OpenGL® ES1.1/2.0/3.2, Vulkan® 1.1, OpenCL™ 2.0</td>
    </tr>
    <tr>
        <td align="center">RAM</td>
        <td colspan="2" align="center">1/2/4/8 GB LPDDR4</td>
    </tr>
    <tr>
        <td align="center">Storage</td>
        <td align="center">eMMC on Board：0/8/16/32/64 GB<br/>microSD Card</td>
    </tr>
    <tr>
        <td align="center">Display</td>
        <td colspan="2" align="center">Provide Micro HDMI Interface：Supports 1080p60 output</td>
    </tr>
    <tr>
        <td align="center">Ethernet</td>
        <td align="center">Gigabit Ethernet, Supports POE<br/>PoE requires additional optional HAT</td>
    </tr>
    <tr>
        <td align="center">Wireless</td>
        <td align="center">Wi-Fi 6 (802.11 b/g/n) BT 5.0 with BLE</td>
    </tr>
    <tr>
        <td align="center">USB</td>
        <td colspan="2" align="center">USB 2.0 Type-C OTG x1<br/>USB 3.0 Type-C HOST x1</td>
    </tr>
    <tr>
        <td align="center">Camera</td>
        <td colspan="2" align="center">1x4 lane MIPI CSI</td>
    </tr>
    <tr>
        <td align="center">Others</td>
        <td colspan="2" align="center">40 Pin extends Header</td>
    </tr>
    <tr>
        <td align="center">Power</td>
        <td colspan="2" align="center">Requires 5V/2A adapter</td>
    </tr>
    <tr>
        <td align="center">Size</td>
        <td colspan="2" align="center">65mm x 30mm</td>
    </tr>
</table>

### System block diagram

![ROCK 3A SYSTEM BLOCK DIAGRAM](/img/rock3/3a/rock3a-system-block-diagram.webp)

### Documentation guidelines

:::tip
Except for the **other systems** directory below, the other contents are based on Radxa OS (Radxa's customized system based on Debian).
:::

### [Getting started](/rock3/rock3a/getting-started)

By introducing system programming, system login, accessory usage, etc., let user can get started quickly.

### [Radxa OS](/rock3/rock3a/radxa-os)

Radxa OS is an operating system customized by Radxa based on Debian OS.
This chapter introduces system login, network connection, etc to let user to be familiar with the system quickly.

### [System Configuration](/rock3/rock3a/os-config)

Introduces how to use tools like rsetup or command line to use devices or function.

### [Application Deployment](/rock3/rock3a/apps-deployment)

Introduces how to deploy the applications such as Samba, Docker, PVE, OMV, LAMP, Cheese, remote control panel, etc.

### [Application Development](/rock3/rock3a/app-development)

Introduces upper-layer application development, such as QT, WiringX, Mraa, etc.

### [Hardware Development](/rock3/rock3a/hardware-design)

Introduces hardware information, such as hardware interfaces, supported accessories, etc.

### [Lower level Development](/rock3/rock3a/low-level-dev)

Introduces uboot, kernel, debian os compilation and packaging, etc.

### [Other Systems](/rock3/rock3a/other-os)

Introduces other systems than Radxa OS, such as Android

### [Accessories](/rock3/rock3a/accessories)

Introduces supported accessory models and instructions for use.
