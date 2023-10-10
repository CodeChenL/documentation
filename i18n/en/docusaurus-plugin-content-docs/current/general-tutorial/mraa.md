---
sidebar_label: "MRAA Introduction"
sidebar_position: 30
---

# MRAA Introduction

Eclipse Mraa (Libmraa) is a C/C++ library with Java, Python, and JavaScript bindings for connecting I/O pins and buses on a variety of IoT and edge platforms, with a well-structured API and port names/numbers that match the boards on which they are located.

## Install MRAA on Radxa boards

```bash
sudo apt-get update -y
sudo apt-get install libmraa2 libmraa-dev libmraa-java python3-mraa mraa-tools -y
```

## MRAA Command Line Tools

### GPIO

- mraa-gpio list: List all available pins
- mraa-gpio get pin: Get Pin Status
- mraa-gpio set pin level: Set Pin Status
- mraa-gpio version: Get MRAA Version

### I2C

- mraa-i2c list: List available busses
- mraa-i2c version: Get mraa version and board name
- mraa-i2c detect bus: List detected devices on specified bus
- mraa-i2c get bus device reg: Get value from specified device register
- mraa-i2c set bus device reg value: Set specified device register to value

### UART

- mraa-uart list: Lists uarts on the system (non intrusive)
- mraa-uart dev dev_num baud customized_baud send str: send str to port dev_num
- mraa-uart dev dev_num baud customized_baud recv 1000: receive 1000 bytes from port dev_num

# More

- [mraa official website](https://iotdk.intel.com/docs/master/mraa/index.html)
- [github](https://github.com/eclipse/mraa)
