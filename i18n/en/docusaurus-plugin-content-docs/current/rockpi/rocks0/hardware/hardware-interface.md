---
sidebar_position: 4
---

## Hardware interface description

## Interface overview

- **ROCK S0**
  ![Radxa ROCK S0](/img/rockpi/s0/mark_rock_pi_s0.webp)

## Power Supply Interface

The power supply interface of Radxa Rock S0 is [4 Pin USB 2.0 OTG port](/img/rockpi/s0/rocks0-otg-wire.webp), which supports 5V input only.

## Debug Serial Port

[Debug Serial Port](/rockpi/rocks0/low-level-dev/serial.md) for debugging commands

## OTG Interface

Connect to PC via [OTG male cable](/img/rockpi/s0/rocks0-otg-wire.webp) for communication.

## USB interface

Connect USB devices via [USB female](/img/rockpi/s0/rocks0-usb-wire.webp)

## Wired network port

Access to the network via [Ethernet cable](/img/rockpi/s0/rocks0-eth-wire.webp).

## WI-FI

The AP6212 Wi-Fi/BT module is on board, which can access the network via Wi-Fi.

## Bluetooth

The AP6212 Wi-Fi/BT module is onboard, which allows you to access devices such as Bluetooth stereo via BT.

## MicroSD

Can be used as system boot media or storage media

## 40 PIN GPIO

#### GPIO Voltage

| GPIO     | Voltage | Max.  |
| -------- | ------- | ----- |
| All GPIO | 3.3V    | 3.63V |

#### GPIO Interface

The ROCK S0 provides a 40 pin GPIO socket that is compatible with most SBC accessories on the market.

**Hint: Actual compatibility is subject to usage. **

<div className='gpio_style'>

| GPIO Number | Function8        | Function7     | Function6  | Function5   | Function4 | Function3    | Function2   | Function1 | Pin#                             | Pin#                            | Function1 | Function2   | Function3    | Function4 | Function5 | Function6        | Function7        | GPIO Number |
| ----------- | ---------------- | ------------- | ---------- | ----------- | --------- | ------------ | ----------- | --------- | -------------------------------- | ------------------------------- | --------- | ----------- | ------------ | --------- | --------- | ---------------- | ---------------- | ----------- |
|             |                  |               |            |             |           |              |             | +3.3V     | <div className='yellow'>1</div>  | <div className='red'>2</div>    | +5V       |             |              |           |           |                  |                  |             |
| 11          |                  |               |            |             |           |              | I2C1_SDA    | GPIO0_B3  | <div className='green'>3</div>   | <div className='red'>4</div>    | +5V       |             |              |           |           |                  |                  |             |
| 12          |                  |               |            |             |           |              | I2C1_SCL    | GPIO0_B4  | <div className='green'>5</div>   | <div className='black'>6</div>  | GND       |             |              |           |           |                  |                  |             |
| 77          | PDM_8CH_SDI0_M2  | I2S0_8CH_SDI0 |            |             |           |              |             | GPIO2_B5  | <div className='green'>7</div>   | <div className='green'>8</div>  | GPIO2_A1  |             | SPI0_MOSI    |           | UART0_TX  |                  |                  | 65          |
|             |                  |               |            |             |           |              |             | GND       | <div className='black'>9</div>   | <div className='green'>10</div> | GPIO2_A0  | I2C3_SDA_M2 | SPI0_MISO    |           | UART0_RX  |                  |                  | 64          |
| 78          | PDM_8CH_SDI1_M2  | I2S0_8CH_SDI1 |            |             |           |              |             | GPIO2_B6  | <div className='green'>11</div>  | <div className='green'>12</div> | GPIO2_B1  |             | SPI1_CSN0_M1 |           |           | I2S0_8CH_SDO0    |                  | 73          |
| 67          |                  |               |            | UART0_RTSN  |           | SPI0_CSN0    | I2C2_SCL    | GPIO2_A3  | <div className='green'>13</div>  | <div className='black'>14</div> | GND       |             |              |           |           |                  |                  |             |
|             |                  |               | SPDIF_TX   | UART3_RX_M1 | PWM5      |              |             | GPIO0_C1  | <div className='green'>15</div>  | <div className='green'>16</div> | GPIO0_A1  |             |              | PWM4      |           |                  |                  | 1           |
|             |                  |               |            |             |           |              |             | +3.3V     | <div className='yellow'>17</div> | <div className='green'>18</div> | GPIO2_B7  |             |              |           |           | I2S0_8CH_SDI2    | PDM_8CH_SDI2_M2  | 79          |
| 55          |                  |               | UART1_RTSN | UART2_TX_M0 |           | SPI2_MOSI    |             | GPIO1_C7  | <div className='green'>19</div>  | <div className='black'>20</div> |           |             |              |           |           |                  |                  |             |
| 54          |                  | OWIRE_M1      | UART1_CTSN | UART2_RX_M0 |           | SPI2_MISO    |             | GPIO1_C6  | <div className='green'>21</div>  | <div className='green'>22</div> | GPIO2_B3  |             |              | PWM9      |           | I2S0_8CH_SDO2    |                  | 75          |
| 56          |                  |               |            | UART1_RX    |           | SPI2_CLK     | I2C0_SDA    | GPIO1_D0  | <div className='green'>23</div>  | <div className='green'>24</div> | GPIO1_D1  | I2C0_SCL    | SPI2_CSN0    |           | UART1_TX  |                  |                  | 57          |
|             |                  |               |            |             |           |              |             | GND       | <div className='black'>25</div>  | <div className='green'>26</div> | GPIO2_B0  |             |              | PWM7      |           | I2S0_8CH_LRCK_RX |                  | 72          |
| 15          |                  |               |            |             | PWM2      |              | I2C3_SDA_M0 | GPIO0_B7  | <div className='blue'>27</div>   | <div className='blue'>28</div>  | GPIO0_C0  | I2C3_SCL_M0 |              | PWM3      |           |                  |                  | 16          |
| 80          | PDM_8CH_SDI3_M2  | I2S0_8CH_SDI3 |            |             | PWM11     |              |             | GPIO2_C0  | <div className='green'>29</div>  | <div className='black'>30</div> |           |             |              |           |           |                  |                  |             |
| 74          |                  | I2S0_8CH_SDO1 |            |             | PWM8      |              |             | GPIO2_B2  | <div className='green'>31</div>  | <div className='green'>32</div> | GPIO2_B4  |             |              | PWM10     |           | I2S0_8CH_SDO3    |                  | 76          |
| 18          |                  |               | SPDIF_RX   | UART3_TX_M1 | PWM6      |              |             | GPIO0_C2  | <div className='green'>33</div>  | <div className='black'>34</div> |           |             |              |           |           |                  |                  |             |
| 68          | PDM_8CH_CLK_M_M2 | I2S0_8CH_MCLK |            |             |           | SPI1_MISO_M1 |             | GPIO2_A4  | <div className='green'>35</div>  | <div className='green'>36</div> | GPIO2_A6  |             |              |           |           | I2S0_8CH_SCLK_RX | PDM_8CH_CLK_S_M2 | 70          |
| 66          |                  |               | UART0_CTSN |             |           | SPI0_CLK     | I2C2_SDA    | GPIO2_A2  | <div className='green'>37</div>  | <div className='green'>38</div> | GPIO2_A5  |             | SPI1_MOSI_M1 |           |           | I2S0_8CH_SCLK_TX |                  | 69          |
|             |                  |               |            |             |           |              |             | GND       | <div className='black'>39</div>  | <div className='green'>40</div> | GPIO2_A7  |             | SPI1_CLK_M1  |           |           | I2S0_8CH_LRCK_TX |                  | 71          |

</div>
