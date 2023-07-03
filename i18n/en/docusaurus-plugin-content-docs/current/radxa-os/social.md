---
sidebar_label: 'Social Media Apps'
sidebar_position: 80
---

# Social Media Apps

## Discord
  
1. Open a terminal and update your system using the following command:  
```bash
    sudo apt update && sudo apt upgrade
```
2. Install the dependencies:  
```bash
    sudo apt install libc++1 libc++abi1 libatomic1 libgconf-2-4 libnotify4 libnspr4 libnss3 libxss1 libxtst6 xdg-utils
```
3. Download the latest Linux version (for 64-bit systems) from the Discord website.    
4. Open a terminal and switch to the directory where the downloaded Discord installation package is located:  
```bash
    cd Downloads
```
5. Extract the downloaded installation package:  
```bash
    tar -xvzf discord-*.tar.gz
```
6. Enter the extracted folder:  
```bash
    cd discord-*
```
7. Run the Discord application:  
```bash
    ./Discord
```
If you encounter any issues while running Discord, you can try restarting your system and running it again, or check if your dependencies are correctly installed.
## Tencent QQ
1. Download the installation package(The download link may be out of date,you can go to the [QQ official website](https://im.qq.com/linuxqq/index.shtml) to download)
```bash
wget https://dldir1.qq.com/qqfile/qq/QQNT/ad5b5393/linuxqq_3.1.2-13107_arm64.deb
```
2.Install the package
```bash
sudo dpkg -i linuxqq_3.1.2-13107_arm64.deb
```
3.Run qq
```bash
qq
```
