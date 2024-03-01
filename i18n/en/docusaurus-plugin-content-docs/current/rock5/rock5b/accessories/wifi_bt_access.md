---
sidebar_position: 2
---

# WIFI & BT

## List of WIFI & BT support modules

| NO. | Model                                               | Chip        | WiFi          | BT  | WIFI Throughput                       | Remark                                              |
| --- | --------------------------------------------------- | ----------- | ------------- | --- | ------------------------------------- | --------------------------------------------------- |
| 1   | ROCK Pi Wireless Module A1 (SDIO+UART) --- AP6236   | BCM43436B0  | 2.4G          | 4.2 | up:23.5 Mbits/sec down:40.4 Mbits/sec |                                                     |
| 2   | ROCK Pi Wireless Module A2 (SDIO+UART) --- AP6256   | BCM43456    | 2.4G&5G       | 5.0 | up:196 Mbits/sec down: 187 Mbits/sec  |                                                     |
| 3   | ROCK Pi Wireless Module A3 (SDIO+UART) --- AP6398S  | BCM43598    | 2.4G&5G       | 5.0 | up:336 Mbits/sec down: 315 Mbits/sec  |                                                     |
| 4   | ROCK Pi Wireless Module A6s (SDIO+UART) --- AP6275S | BCM43752    | 2.4G&5G       | 5.0 | up:234 Mbits/sec down: 273 Mbits/sec  |                                                     |
| 5   | Radxa wireless A8                                   | RTL8852BE   | 2.4G&5G&WIFI6 | 5.0 | up:600Mbits/sec down:900 Mbits/sec    |                                                     |
| 6   | Intel 0MHK36 (PCIE+USB)                             | Intel 3165  | 2.4G&5G       | 4.2 | up:283 Mbits/sec down: 334 Mbits/sec  |                                                     |
| 7   | Intel 7265NGW (PCIE+USB)                            | Intel 7265  | 2.4G&5G       | 4.2 | up:363 Mbits/sec down: 619 Mbits/sec  |                                                     |
| 8   | Intel AX210 (PCIE+USB)                              | Intel AX210 | WiFi 6        | 5.2 | up: 859 Mbits/sec down: 813 Mbits/sec | Only WIFI is supported currently, BT is not working |

- ROCK 5B does not have onboard WiFi/BT module and requires an external module. These are the WITI/BT cards that have been supported and tested.
- The M.2 wireless module demonstrated here is: Radxa wireless Module A8.

[Radxa wireless module A8](/zh/img/accessories/a8-module-01.webp)

- Installation is shown as follows:

[Radxa wireless module A8](/zh/img/accessories/a8-module-02.webp)

## WIFI Usage

1. Switch to the ROOT user mode.

```
sudo su
```

2. Turn on the WIFI

```
nmcli r wifi on
```

3. Scan WIFI

```
nmcli dev wifi
```

4. Connect to the wifi network

```
nmcli dev wifi connect "wifi_name" password "wifi_password"
```

## Bluetooth Usage

- When using Radxa Wireless A8 module, the following blacklist must be added for BT to work properly.

```
root@rock-5b:~# cat /etc/modprobe.d/blacklist.conf
blacklist pgdrv
blacklist btusb
blacklist btrtl
blacklist btbcm
blacklist btintel

root@rock-5b:~# reboot
```

- Radxa APT includes the Broadcom-WiFIbt-Firmware package for broadcom wireless modules and the Intel-WiFIbt-Firmware package for intel wireless modules. You need to download the corresponding software package.

```
root@rock-5b:~# apt-get update -y
root@rock-5b:~# apt-get install -y broadcom-wifibt-firmware intel-wifibt-firmware
```

1. Test the status of Bluetooth module and check Bluetooth device.

```
root@rock-5b:~# systemctl status bluetooth
```

2. Run the Bluetooth device.

```
root@rock-5b:~# systemctl start bluetooth
```

3. Detect Bluetooth devices

```
root@rock-5b:~# hciconfig
hci0:   Type: Primary Bus: UART
       BD Address: 10:2C:6B:49:D5:53 ACL MTU: 1021:8 SCO MTU: 64:1
       UP RUNNING
       RX bytes:850 acl:0 sco:0 events:58 errors:0
       TX bytes:2814 acl:0 sco:0 commands:58 errors:0
```

4. Test: Connect Bluetooth speaker, first install pulseaudio

```
root@rock-5b:~# apt-get install -y pulseaudio-module-bluetooth pulseaudio
```

5. Run pulseaudio

```
root@rock-5b:~# pulseaudio --start
```

6. Connect using pulseaudio

```
root@rock-5b:~# bluetoothctl
[bluetooth]# default-agent
[bluetooth]# power on
[bluetooth]# scan on
[bluetooth]# trust 41:42:1A:8D:A9:65       #BT-280
[bluetooth]# pair 41:42:1A:8D:A9:65
[bluetooth]# connect 41:42:1A:8D:A9:65
```

7. Now you can listen to music.
