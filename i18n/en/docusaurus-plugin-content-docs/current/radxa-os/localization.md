---
sidebar_label: "Localization"
sidebar_position: 40
---

# Change Language

## Change sysytem language

**Note:** The default setting of the system is English, if you need other languages, please follow the instructions below.

In the system settings, click regional settings to add language.

![rock5a_system_language_1](/img/rock5a/rock5a_system_language_1.webp)

Select language you want and click Add.

![rock5a_system_language_2](/img/rock5a/rock5a_system_language_2.webp)

In the new language column, click the up icon to promote to default, andd click Apply. Restart your computer that the system language will be setting new language.

![rock5a_system_language_3](/img/rock5a/rock5a_system_language_3.webp)

## Change language input method

Debian system only has English input method by default, if you need input method in other languages, you need to install it separately. Here we give an example of how to install Pinyin.

### Environment configuration

If the Debian environment is not the Chinese environment and needs to switch to the Chinese environment, you can use the following command to switch, then enter user password

    sudo dpkg-reconfigure locales

Press the space or enter to select OK to prepare for the next step of installation.

![rock5a_language_input_1](/img/rock5a/rock5a_language_input_1.webp)  
![rock5a_language_input_2](/img/rock5a/rock5a_language_input_2.webp)

Execute the following commands to update and install the system environment software:

    sudo apt update

### Install fctix Chinese input method

1.  Open the command terminal and enter the following command:

    sudo apt install fcitx  
    Type "Y" and the package will be installed.

2.  Execute the Chinese input method command you need to install, then enter user password.

        sudo apt install fcitx-googlepinyin

    Type "Y" to complete the installation.

After the installation is successful, please restart the computer, and the keyboard icon will be displayed on the taskbar of the computer.

Right-click the keyboard picture and then click configure

![rock5a_language_input_3](/img/rock5a/rock5a_language_input_3.webp)

Click '+' add new language iput method.

![rock5a_language_input_4](/img/rock5a/rock5a_language_input_4.webp)

Click the box to cancel "only show current language"

![rock5a_language_input_5](/img/rock5a/rock5a_language_input_5.webp)

Enter _Google pinyin_ in the search box and click ok to complete adding a new language input method.

![rock5a_language_input_6](/img/rock5a/rock5a_language_input_6.webp)

Click ^ to adjust language priority as shown.

![rock5a_language_input_7](/img/rock5a/rock5a_language_input_7.webp)

Now you can start working with Pinyin. If you want to switch the language, you only click the keyboard icon to switch the language input method.

![rock5a_language_input_8](/img/rock5a/rock5a_language_input_8.webp)

# Keyboard Layout

Open the input devices in the system interface.  
![rock5a_keyboard_1](/img/rock5a/rock5a_keyboard_1.webp)

Click Layouts and then click Add to choose the keyboard layout you want.

![rock5a_keyboard_2](/img/rock5a/rock5a_keyboard_2.webp)

Select _Limit selection by language_ or layout to set the keyboard layout you want, you can click preview to view.  
![rock5a_keyboard_3](/img/rock5a/rock5a_keyboard_3.webp)

Move up your newly added layout and click Apply.

![rock5a_keyboard_4](/img/rock5a/rock5a_keyboard_4.webp)
