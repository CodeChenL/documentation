---
sidebar_label: 'Hardware Information Details'
sidebar_position: 1
---

# Ӳ������

���ǽ��ڱ����ṩ ROCK 5B ����ϸӲ����Ϣ�� 
![ROCK 5B Overview](/img/rock5b/rock-5b-overview.webp)

## ������ (1)

ROCK 5B �� SoC �� Rockchip RK3588�� 
�� CPU ��һ���ĺ� ARM Cortex-A76 MPCore ���������ĺ� ARM Cortex-A55 MPCore �������� 
���߶��Ǹ����ܡ��͹��ĺͻ����Ӧ�ô�������
���ص� ARM Mali-G610 MP4 3D GPU ʹ RK3588 ��ȫ���� OpenGLES 1.1��2.0 ��3.2 ��OpenCL 2.2 �� Vulkan 1.2��
���� MMU ������ 2D Ӳ�����潫�����ʾ���ܲ��ṩ�ǳ������Ĳ�����
���õ� NPU ֧�� INT4 / INT8 / NT16 / FP16 ������㣬���������ߴ� 6 TOPs��
���⣬������ǿ��ļ����ԣ����� TensorFlow / MXNet / PyTorch / Caffe ��һϵ�п�ܵ�����ģ��Ҳ��������ʵ�֡�

## �ڴ� (2)

ROCK 5B ���ڴ��� LPDDR 4x�������� 32 bits LPDDR 4x оƬ��� 64 bits��Ƶ�ʸߴ� 4224 Mhz��ROCK 5B �ṩ 4GB��8GB �� 16GB ���ڴ�ѡ�

## USB-C ��Դ (3)

Radxa ROCK 5 Model B �����Ϊ�͹��ĵ� ARM ̨ʽ������������֧�����µ�Դ���룺  

- USB PD2.0 ��Դ��������֧�� 12V / 15V / 20V���������Ϊ 2A ����ߡ�
- ���й̶� 9V �� 20V ֱ����ѹ�� USB-C ��ͷ�ĵ�Դ������
- ���� GPIO PIN 2 �� 4 �� 5V PoE ��Դ

## HDMI ��� (4 / 5)

## HDMI ���� (6)

## USB2.0 (7)

## USB3.0 (8)

## 2.5GbE (9)

## PoE (10)

## M.2 E-KEY (11)

M.2 E key �����źŶ����  

<div className='gpio_style'>

|Pin#|Name|Pin#|Name|Pin#|Name|Pin#|Name|
|:-:|:-|:-:|:-|:-:|:-|:-:|:-|
|1|GND			   		   |21|WIFI_WAKE_HOST_H_GPIO3_D5|49|PCIE20_REFCLKN	 |69|GND		|
|2|VCC3V3_WF			   |22|UART1_RX_M0				|50|WIFIBT_32KIN_1T1R|70|BT_WAKE	|
|3|USB2_M2_DP			   |23|WIFI_REG_ON				|51|GND				 |71|NC			|
|4|VCC3V3_WF			   |32|UART1_TX_M0				|52|PCIE_PERSTN		 |72|VCC3V3_WF	|
|5|USB2_M2_DM			   |33|GND						|53|PCIE_CLKREQN	 |73|NC			|
|6|WIFI_LED				   |34|UART1_CTS_M				|54|HOST_WAKE_BT_H	 |74|VCC3V3_WF	|
|7|GND					   |35|PCIE_TXP					|55|PCIE_WAKEN		 |75|GND		|
|8|PCM_CLK/I2S_SCK		   |36|UART1_RTS_M				|56|BT_REG_ON_H		 |76|GND		|
|9|SDIO_CLK				   |37|PCIE_TXN					|57|GND				 |77|GND		|
|10|PCM_SYNC/I2S_WS		   |38|NC						|58|I2C4_SDA_M1		 |78|NC			|
|11|SDMMC2_CMD_M0		   |39|GND						|59|NC				 |79|NC			|
|12|PCM_OUT/I2S SD_OUT	   |40|NC						|60|I2C4_SCL_M1		 |
|13|SDMMC2_D0_M0		   |41|PCIE20_RXP				|61|NC				 |
|14|PCM_IN/I2S SD_IN	   |42|BT_REG_NO				|62|NC				 |
|15|SDMMC2_D1_M0		   |43|PCIE20_RXN				|63|GND				 |
|16|NC					   |44|NC						|64|NC				 |
|17|SDMMC2_D2_M0		   |45|GND						|65|NC				 |
|18|GND					   |46|NC						|66|NC				 |
|19|SDMMC2_D3_M0		   |47|PCIE20_REFC				|67|NC				 |
|20|BT_WAKE_HOST_H_GPIO4_B4|48|NC						|68|NC				 |
		
</div>

## M.2 M-KEY (12)

## eMMC (13)

���ز����ӿ��ص�  
�����ܵ� eMMC ģ���� ROCK 5B ϵͳ�洢�����ѡ��eMMC ģ���� 8GB / 16GB / 32GB / 64GB / 128GB �ɹ�ѡ�� 
eMMC ���������Ź�����£�  

<div className='gpio_style'>

|Name|Pin#|Pin#|Name|
|:-|:-:|:-:|:-|
|GND		|1|34|GND		 |
|EMMC_D5	|2|33|EMMC_D6	 |
|GND		|3|32|GND		 |
|EMMC_D4	|4|31|EMMC_D7	 |
|GND		|5|30|GND		 |
|EMMC_D0	|6|29|EMMC_D1	 |
|GND		|7|28|GND		 |
|EMMC_CLK	|8|27|EMMC_D2	 |
|GND		|9|26|GND		 |
|EMMC_D3	|10|25|EMMC_CMD	 |
|GND		|11|24|GND		 |
|EMMC_RSTN	|12|23|VCC3V3_SYS|
|GND		|13|22|VCC3V3_SYS|
|GND		|14|21|VCC_1V8	 |
|EMMC_RCLK	|15|20|VCC_1V8	 |
|GND		|16|19|GND		 |
|GND		|17|18|GND		 |
</div>

## TF ���� (14)

TF ��������Ϊϵͳ�洢���ⲿ�洢ʹ�á�

����������ϵͳ�洢ʱ�������ѡ��洢�ռ���� 8GB �ġ�

������Ϊ�ⲿ�洢ʱ�������ѡ��洢�ռ����Ϊ 128GB �ġ�

�� TF ������ TF ����ʱ��ϵͳ���Զ�ʶ���豸��

TF ���Ľӿ���Ź��������ʾ��  

|Pin#|Name|
|:-:|:-|
|1 |SDMMC0_D2	|
|2 |SDMMC0_D3	|
|3 |SDMMC0_CMD	|
|4 |VCC3V3_SYS	|
|5 |SDMMC0_CLK	|
|6 |GND			|
|7 |SDMMC0_D0	|
|8 |SDMMC0_D1	|
|9 |SDMMC0_DET_L|
|10|GND			|
|11|GND			|
|12|GND			|
|13|GND			|

## ���� (15)

## MIPI CSI (16)

## MIPI DSI (17)

## 40-pin ���� (18)

����� [ROCK 5B GPIO ����](rock5b-gpio)��

## SPI Nor Flash (19)

## RTC ��� (20)

RTC �������ǰ��ձ�׼��������������Ƶġ�

����ԴӰ����ϵ�˿ӡ�зֱ�� '+3.3V' �� '-'��

|Pin#|Name|
|:-:|:-|
|1|GND	|
|2|+3.3V|

## Recovery ��ť (21)

ROCK 5B ֧�� loader ģʽ������ CPU �ȴ� USB OTG �˿������һ���������ģʽ��

Recovery ��ť������������ SPI Nor Flash �� eMMC ��ͼ��

�����ǽ��豸������ loader ģʽ�Ĳ��衣

 - ȷ�� U-Boot �����Ѿ�Ԥ�Ȱ�װ�� SPI Nor Flash �� eMMC �ϡ�
 - ���²���ס Recovery ��ť
 - �� USB-A ת C �߲��� ROCK 5B �� Type-C �˿ڣ���һ�˲�����ԡ�
 - �ȴ���Լ 5 ����
 - ȷ�� ROCK 5B ���� loader ģʽ��

```bash
#For macOS host: 
	lsusb result
Output:Bus 000 Device 004: ID 2207:350b Fuzhou Rockchip Electronics Co., Ltd. Composite Device

#For Linux host: 
	lsusb result
Output��Bus 001 Device 030: ID 2207:350b Fuzhou Rockchip Electronics Company

#For Windows host: 
Open RKDevTool and you would see the device is in Found One MASKROM Device.
```

## ��Դ�� (22)

��Դ��ť���ڴ򿪻�ر��豸�� 
�̰���Դ��ť�Ϳ��Դ�/�ر��豸�ĵ�Դ�������������˵��ͨ�������/�ص�Դ�� 
��Դ��ť���ṩӲ����/���豸�Ĺ��ܡ�
��ϵͳ����ʱ�������ͨ�����ַ����ر��豸��
��ס��Դ��ť���� 6 ���ӡ�Ȼ���ͷŵ�Դ��ť��
֮�󣬶̰���Դ��ť�Ϳ��Դ��豸�ĵ�Դ��

## RGB LED (23)

����� [LED ָ��](/radxa-os/rsetup/led).

## Fan (24)

����Բ��� [rsetup: thermal-governor](/radxa-os/rsetup/rsetup-tool#thermal-governor) �����з������á� 
�����ͼƬ�д��ϵ��£���

|Pin#|Name|
|:-:|:-|
|1|+5.0V|
|2|GND	|

## Maskrom ���� (25)

ROCK 5B ֧�� Maskrom ģʽ������ CPU �ȴ� USB OTG �˿������һ���������ģʽ��

����Ҫ�Ѿ���д�� SPI Nor Flash �� eMMC ����ʱ����Ҫʹ�� Maskrom ��ť���� Maskrom ģʽ��
