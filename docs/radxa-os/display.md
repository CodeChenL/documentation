---
sidebar_label: 'Display Setup'
sidebar_position: 10
---

# ��ʾ����

��ѡ����ʾ��ʱ������Ҫע�ⲻͬ�Ĳ�Ʒ֧�ֲ�ͬ�������ʾ�ֱ��ʣ���鿴���[��Ʒ](../../productlist)��֧����Ϣ���˽����顣
Ȼ����������뽨��һ��[������ƽ̨](headless)���Ͳ���Ҫ���������

## ��ʾ����

�������ֻ����������ʾ���ϲ���ʱ���ã��������������һ��[�������豸](headless)�������ͨ�����·�ʽ������ʾ���á� 

### ϵͳ����-��ʾ����

��KDE�����ϣ����������½ǵ� `Appliction Launcher`���Ϳ��Կ��� `System Settings` �� 
![System settings](/img/configuration/start_sys_setting.webp)  
ѡ�� `System Settings`���� `Hardware`ѡ�����ҵ� `Display and Monitor`��  
![System Settings](/img/configuration/system_setting.webp)  
������������޸��������ã�  
![Display Settings](/img/configuration/display_setting.webp) 
**ע�⣺�����ʹ�õ��Ƕ����ʾ����Ҳ��ͬ���Ĳ��衣**

### ����������

���ǻ��ṩ��`xrandr`������ʾ���á� 
ͨ�������������Լ�鵱ǰ����ʾ״̬��  
```
xrandr
```
������
```
radxa@rock-5a:~$ xrandr
Screen 0: minimum 320 x 200, current 1920 x 1080, maximum 16384 x 16384
HDMI-1 connected primary 1920x1080+0+0 (normal left inverted right x axis y axis) 0mm x 0mm
   1920x1080     60.00*+  60.00    50.00    59.94
   1920x1080i    60.00    60.00    50.00    59.94
   1600x900      60.00
   1280x1024     75.02    60.02
   1152x864      75.00
   1280x720      60.00    60.00    50.00    59.94
   1024x768      75.03    60.00
   800x600       75.00    60.32
   720x576       50.00
   720x576i      50.00
   720x480       60.00    60.00    59.94    59.94    59.94
   720x480i      60.00    59.94
   640x480       75.00    60.00    59.94    59.94
   720x400       70.08
DP-1 disconnected (normal left inverted right x axis y axis)
```
����Լ����������Щ��ʾ�����Լ���Ӧ�ķֱ��ʡ� 

#### ��ʾ��ת

�����ͨ���޸�[Display Settings](display#system-settings-display-settings)-Orientation����ת�����Ļ��ʾ�� 
������Ҳ����ͨ������ʵ�֣�
```
Single Screen:
   xrandr -o left     # Rotate 90 degrees to the left
   xrandr -o right    # Rotate 90 degrees to the right
   xrandr -o inverted # Flip up and down, rotate 180 degrees
   xrandr -o normal   # Back to the normal angle
   xrandr -s 1024x768 # Set the resolution
   xrandr -s 0        # Set the default resolution, which generally defaults to the highest resolution
   xrandr -rate       # Set refresh rate
```

#### ʹ��MIPI��Ļ

Radxa��һЩ��Ʒ֧��ͨ����״�������ӵ�MIPI��ʾ��������������Ĭ��������Ǳ����õġ�

����Դ�[overlay �˵�](rsetup/devicetree#how-to-enable-an-overlay)���֧�ֵ�mipi��Ļ�ͺš�

��ʹ��mipi��Ļ֮ǰ������Ҫ������Ӧ��overlay�������� 

```
        ...
        [ ] Enable Radxa Display 10HD 
        [ ] Enable Radxa Display 8HD
        ...
```
**ע�⣺��ͬ�Ĳ�Ʒ����֧�ֲ�ͬ����Ļ��**  

#### ��������

������ ֮�⣬��������Ҳ�ܹ��޸���ʾ���ã�

```
Dual Screen:
   # HDMI-1 --screen 1   DP-1 --screen 2
   xrandr --output HDMI-1 --primary # SetUp Home Screen
   xrandr --output HDMI-1 --auto --output DP-1 --off # Display only HDMI
   xrandr --output DSI-1 --off --output HDMI-1 --off # No display on either screen
   xrandr --output HDMI-1 --same-as DP-1 --auto # Simultaneous display of the same content
   xrandr --output HDMI-1 --right-of DP-1 --auto # DP-1 is the main display, the HDMI-1 is an extension and to the right of DP-1
```
������Ϣ��鿴[X.Org Server RandR](https://en.wikipedia.org/wiki/X.Org_Server#Other_DDX_components)��
