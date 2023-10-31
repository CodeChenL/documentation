---
sidebar_label: "音频和视频"
sidebar_position: 70
---

# 音频和视频

## 音频

- 当您使用耳机听音乐时，请将耳机插入 3.5 毫米耳机插孔。 打开桌面右下角的声音图标，切换到耳机驱动。

- 此外，通过HDMI接口，用户可以直接将音频和视频信号传输到连接的显示器或电视上，而无需额外的音频线。 HDMI接口还支持高质量的数字音频传输，提供与数字音频接口相似的音质。 同样，要切换到HDMI输出，只需要在音频输出模式中选择HDMI/Display port即可。

![ROCK5A_Audio](/img/rock5a/rock5a_audio.webp)

## 视频

- Dragon Player是Debian系统默认自带的媒体播放器，如果系统中没有安装Dragon Player，可以执行以下命令进行安装。

  sudo apt-get update  
   sudo apt-get install dragonplayer

- 如果出现提示，请输入您的密码，然后等待安装完成。  
  安装 Dragon Player 后，您可以使用以下命令打开视频：

      dragon /path/to/video/file

- 将“/path/to/video/file”替换为您要播放的视频的实际路径和文件名。 例如，如果您的视频位于主目录的“Videos”文件夹中并且名为“myvideo.mp4”，则命令如下所示：

  dragon ~/Videos/myvideo.mp4

- 当然，您也可以直接双击视频文件图标进行播放。

关于Dragon Player支持的视频格式，它可以解码FFmpeg库支持的任何格式。 这包括流行的视频格式，如 MP4、AVI、MKV、WMV、FLV、MOV 等。
