---
sidebar_position: 10
---

# Adding LEDs (using rsetup to load a third-party device tree overlay file (DTBO))

:::info
Single board computers or computing modules shipped by Radxa usually have two LEDs by default:  
One power light (not modifiable by software)  
A system heartbeat light  
If you want to have a hard disk status light or a network port status light like a PC, follow the tutorial!  
Using the Radxa 5B as an example, you need to modify the device tree overlay file (DTBO) according to the GPIOs used.
:::

## Hardware connections

```
GPIO3_C1(PIN11)(3.3V) <----> Resistor (select size according to LED datasheet) <----> LED positive <----> LED Negative <----> GND(PIN9)
```

## Edit device tree overlay file (DTBO)

```bash
nano ~/user_led3.dts
```

### The following is the content of the device tree overlay file (DTBO):

:::info
The triggers that can be used: none rc-feedback rfkill-any rfkill-none kbd-scrolllock kbd-numlock kbd-capslock kbd-kanalock kbd-shiftlock kbd-altgrlock kbd-ctrllock kbd-altlock kbd-shiftllock kbd-shiftrlock kbd-ctrlllock kbd-ctrlrlock tcpm-source-psy-4-0022-online disk-activity disk-read disk-write ide-disk mtd nand-disk cpu cpu0 cpu1 cpu2 cpu3 cpu4 cpu5 cpu6 cpu7 panic mmc2 mmc1 mmc0 default-on heartbeat pattern timer rfkill1 phy0rx phy0tx phy0assoc phy0radio rfkill2 rfkill3
:::

```
/dts-v1/;
/plugin/;

#include <dt-bindings/gpio/gpio.h>
#include <dt-bindings/pinctrl/rockchip.h>

/ {
    fragment@0 {
        target-path = "/";                                      /* Primary dts node to be modified */
        __overlay__ {                                           /* Add or modify the contents of these brackets */
            custom-leds{                                        /* Add custom-leds node */
                compatible = "gpio-leds";
                status = "okay";
                microsd-led {                                   /* Add icrosd-led node */
                    gpios = <&gpio3 RK_PC1 GPIO_ACTIVE_HIGH>;   /* Register GPIO3_C1 as the enable pin of microsd-led, the enable is level-pull-high by default. */
                    linux,default-trigger = "mmc1";             /* Set default trigger to mmc1(SD Card) */
                };
            };
        };
    };
};
```

## Enter rsetup and load the device tree overlay file (DTBO)

```bash
rsetup

# Follow these options to access the Install 3rd party overlay interface
# Overlays -> Install 3rd party overlay
```

## Select user_led3.dts

![enable-user_led3](/img/general-tutorial/enable-user-led3.webp)

## Reboot

```bash
sudo reboot
```

### After reboot, you can see the LEDs flashing to follow the status of the hard disk.
