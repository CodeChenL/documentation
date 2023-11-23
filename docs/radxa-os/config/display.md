---
sidebar_label: "显示设置"
sidebar_position: 10
---

# 显示介绍

在选择显示器时，你需要注意不同的产品支持不同的最高显示分辨率，请查看你的[产品](../../productlist)的支持信息以了解详情。
然而，如果你想建立一个[无屏平台](headless)，就不需要关心这个。

## 显示设置

这个设置只有在你在显示器上操作时可用，或者你可以设置一个[无屏设备](headless)。你可以通过以下方式进行显示设置。

### 系统设置-显示设置

在KDE桌面上，左键点击左下角的 `Application Launcher`，就可以看到 `System Settings` 。
![System settings](/img/configuration/start_sys_setting.webp)  
选择 `System Settings`，在 `Hardware`选项中找到 `Display and Monitor`：  
![System Settings](/img/configuration/system_setting.webp)  
你可以在其中修改以下设置：  
![Display Settings](/img/configuration/display_setting.webp)
**注意：如果你使用的是多个显示器，也是同样的步骤。**

### 命令行设置

我们还提供了`xrandr`用于显示设置。
通过以下命令，你可以检查当前的显示状态：

```
xrandr
```

举例：

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

你可以检查连接了哪些显示器，以及对应的分辨率。

#### 显示旋转

你可以通过修改[Display Settings](display#system-settings-display-settings)-Orientation来旋转你的屏幕显示。
或者你也可以通过命令实现：

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

#### 使用MIPI屏幕

Radxa的一些产品支持通过带状线缆连接的MIPI显示器。但是它们在默认情况下是被禁用的。

你可以从[overlay 菜单](/radxa-os/rsetup/devicetree#how-to-enable-an-overlay)获得支持的mipi屏幕型号。

在使用mipi屏幕之前，你需要启用相应的overlay并重启。

```
        ...
        [ ] Enable Radxa Display 10HD
        [ ] Enable Radxa Display 8HD
        ...
```

**注意：不同的产品可能支持不同的屏幕。**

#### 多屏设置

除设置 之外，以下命令也能够修改显示设置：

```
Dual Screen:
   # HDMI-1 --screen 1   DP-1 --screen 2
   xrandr --output HDMI-1 --primary # SetUp Home Screen
   xrandr --output HDMI-1 --auto --output DP-1 --off # Display only HDMI
   xrandr --output DSI-1 --off --output HDMI-1 --off # No display on either screen
   xrandr --output HDMI-1 --same-as DP-1 --auto # Simultaneous display of the same content
   xrandr --output HDMI-1 --right-of DP-1 --auto # DP-1 is the main display, the HDMI-1 is an extension and to the right of DP-1
```

更多信息请查看[X.Org Server RandR](https://en.wikipedia.org/wiki/X.Org_Server#Other_DDX_components)。
