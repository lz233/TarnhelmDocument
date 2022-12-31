# Introduction

Tarnhelm will help you clean up the tracking parameters in your app sharing links and keep the process as natural as possible.

The word Tarnhelm is derived from The Ring of the Nibelung, see [Wikipedia](https://en.wikipedia.org/wiki/Tarnhelm).

## EditText Menu Mode

In the editable EditText, select the text and click "Tarnhelm" to process the link.

<p style="text-align: center;">
<img src="../img/introduction-1.webp" style="zoom: 40%;" />
<img src="../img/introduction-2.webp" style="zoom: 40%;" />
</p>

## Copy Menu Mode

Select the text and click "Tarnhelm Copy" to process the selected text and add it to the clipboard.

<p style="text-align: center;">
<img src="../img/introduction-3.webp" style="zoom: 40%;" />
</p>


## Sharing Dialog Mode

When sharing content, check "Tarnhelm" to process the link and proceed to the next step. Long press the app icon to put Tarnhelm on top.

<p style="text-align: center;">
<img src="../img/introduction-4.webp" style="zoom: 40%;" />
</p>

## Backgroung Monitoring Mode

In ideal conditions, Tarnhelm would be in the background to listen to the clipboard and processing the content in real time.

If you are using a MIUI device, please ignore the following commands and look [here](./introduction-miui.html).

In order to enable this feature on Android 10+ devices, use ADB to execute the following command:

```shell
adb shell appops set cn.ac.lz233.tarnhelm SYSTEM_ALERT_WINDOW allow
adb shell pm grant cn.ac.lz233.tarnhelm android.permission.READ_LOGS
adb shell am force-stop cn.ac.lz233.tarnhelm
```

Also, in order to allow this app to automatically open processing services on most types of modified ROMs, please lock Tarnhelm in the Recent Tasks screen and go to Security Center - Autostart Management to allow Tarnhelm to start itself, or manually open Tarnhelm once after each boot. Please rest assured that Tarnhelm will not do any redundant operations in the background.

<p style="text-align: center;">
<img src="../img/introduction-5.webp" style="zoom: 40%;" />
</p>
On Android 13+ devices, the above prompt may also appear and will only allow one-time authorization. In this case, it is highly recommended to turn on foreground service mode, otherwise you will be asked to re-authorize every once in a while.

## Xposed Mode

Activate Tarnhelm in Xposed Manager and restart your device, then you can find Xposed settings in the app. Two modes are currently available, "Rewrite clipboard" and "Override clipboard overlay" (Android 13+).

<p style="text-align: center;">
<img src="../img/introduction-6.webp" style="zoom: 40%;" />
</p>
"Rewrite clipboard" means that the text is modified when the application copy some text to the clipboard. Note that this mode has the same effect as "Background Monitoring", so just choose either one. If you installed Xposed, this mode is recommended.

"Override clipboard overlay" creates a new chip on the system clipboard overlay on supported Android 13+ devices, which can be tapped to process the text in the clipboard.

<p style="text-align: center;">
<img src="../img/introduction-7.webp" style="zoom: 40%;" />
</p>
This mode is currently only supported for LSPosed.