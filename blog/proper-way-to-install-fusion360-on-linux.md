---
title: Proper way to intall Fusion 360 on linux using Bottles
description: This short guide will show you how to install Fusion 360 on linux using Bottles.
date: May 26 2024
---

## Requirements

- [Flatpak](https://flatpak.org/) (optional, but easier)
- [Bottles](https://usebottles.com/) 

## Bottles installation

The easiest way to install Bottles is using flatpak. You can install it using the following command:

```bash
flatpak install flathub com.usebottles.bottles
```

## Fusion 360 installation

Once you have Bottles installed, install `caffe-9.7` runner and create a new bottle with it. Then, in the bottle,
you can install [Fusion 360](https://usebottles.com/app/#fusion) using their "Install Programs" feature.

## Running Fusion 360

After the installation, you can run Fusion 360 from the Bottles app.

### Workarounds

- If you're stucked in the login screen, you can try the following workaround:
  1. Click **Sign in** in the fusion 360 app and follow the steps until you get the **Go to product** button.
  2. Find `AskIdentityManager` in the `Program Files\Autodesk\webdeploy\production\some digits\Autodesk Identity Manager\AskIdentityManager.exe`
  3. Run the executable inside the bottle with the link (surrounded by quotes) from *Go to product* button as launch options and also select **run in terminal**.
  4. You should be logged in now.  
  - *(source: [#393#issuecomment-1986967643](https://github.com/cryinkfly/Autodesk-Fusion-360-for-Linux/issues/393#issuecomment-1986967643))*

- If you're having issues with the rendering, follow [#401#issuecomment-1993855862](https://github.com/cryinkfly/Autodesk-Fusion-360-for-Linux/issues/401#issuecomment-1993855862) and [#401#issuecomment-2003639665](https://github.com/cryinkfly/Autodesk-Fusion-360-for-Linux/issues/401#issuecomment-2003639665)
