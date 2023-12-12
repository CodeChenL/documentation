---
sidebar_position: 5
---

# UART Serial Console

Radxa exports a dedicated uart(UART2) for serial console on GPIO PIN 6/8/10, which can access the low level debug message.

## USB to TTL serial cable

The definition of each pin of USB to TTL cable is showing like this:

![USB to TTL](/img/accessories/600px-Usb2ttl-cable-definition.webp)

**Connect the USB to TTL serial cable as below. Don't connect the red wire(VCC pin).**

<table class="wikitable">

<tbody><tr>
<th> ROCK Pi 4 </th>
<th> &lt;---&gt; </th>
<th> USB to TTL cable
</th></tr>
<tr>
<td> RX(pin 10) </td>
<td> &lt;---&gt; </td>
<td> Green wire
</td></tr>
<tr>
<td> TX(pin 8) </td>
<td> &lt;---&gt; </td>
<td> White wire
</td></tr>
<tr>
<td> GND(pin 6) </td>
<td> &lt;---&gt; </td>
<td> Black wire
</td></tr></tbody></table>

![USB to TTL connected](/img/accessories/1000px-Serial-connection.webp)

<Tabs queryString="os">
<TabItem value="Windows" label="Windows" default>

## Windows

Plug in the USB to TTL cable to you windows PC. Viewing the device manager you can find the COM number.

Using serial tool like Putty,SecureCRTPortable and MobaXterm, as Putty for example, other tools have similar oeration。

Launch the application Putty on your windows PC. And do the setting as follows:  
For category Session, set serial line as COM11, speed as 1500000, connection type as Serial.
Write radxa in the Saved Sessions column and press Save.

![Putty](/img/configuration/Putty-setting-session.webp)

For category Connection---Serial, do the setting:

![Putty](/img/configuration/Putty-setting-serial.webp)

Once finish the setting, press Open button to start.
</TabItem>
<TabItem value="Linux" label="Linux">

## Linux

Minicom is the serial tool that supports wide range baud rate.  
Install minicom:

```bash
   sudo apt-get update
   sudo apt-get install minicom
```

Plug in the USB to TTL cable, kernel `dmesg | tail` should show the following device:

```bash
   [1036835.654076] usb 1-6.4.3: new full-speed USB device number 103 using xhci_hcd
   [1036835.755730] usb 1-6.4.3: New USB device found, idVendor=0403, idProduct=6001
   [1036835.755732] usb 1-6.4.3: New USB device strings: Mfr=1, Product=2, SerialNumber=0
   [1036835.755733] usb 1-6.4.3: Product: USB <-> Serial
   [1036835.755734] usb 1-6.4.3: Manufacturer: FTDI
   [1036835.756728] ftdi_sio 1-6.4.3:1.0: FTDI USB Serial Device converter detected
   [1036835.756750] usb 1-6.4.3: Detected FT232BM
   [1036835.757195] usb 1-6.4.3: FTDI USB Serial Device converter now attached to ttyUSB0
```

**/dev/ttyUSB0** is our device here.

### Setup Minicom

First add current user to plugdev group to use minicom without sudo or root.

```bash
  sudo usermod -a -G plugdev $USER
```

Edit your **~/.bashrc** and add the following line with some default parameter

```bash
   alias minicom='minicom -w -t xterm -l -R UTF-8'
```

Login to a new terminal to take effect.

Create and edit file ~/.minirc.radxa, add the following content:

```bash
   pu port             /dev/ttyUSB0
   pu baudrate         1500000
   pu bits             8
   pu parity           N
   pu stopbits         1
   pu rtscts           No
```

Now run

```bash
minicom radxa
```

to use the config above and connects to the ROCK board serial console.
</TabItem>

<TabItem value="Mac" label="Mac" >

## Mac

1.  Download and install the [PL2303 Mac OS X Driver](http://www.prolific.com.tw/UserFiles/files/PL2303HXD_G_Mac%20Driver_v2_1_0_20210311.zip)
2.  Install [CoolTerm](https://freeware.the-meiers.org/previous/CoolTermMacUniversal147.zip)
3.  Click the Option menu and set the following
    >
        Port: select usbserial-xxx
        Baud rate: choose custom and input 1500000
        No flow control nor DTR/RTS

![mac serial](/img/configuration/Coolterm-serialport-setting.webp)

Click save icon to save the configuration as radxa and click connect icon.  
Boot your ROCK boards and you will see the serial console output:  
![mac serial output](/img/configuration/Coolterm-output.webp)

</TabItem>

</Tabs>
