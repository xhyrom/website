---
title: App Details
description: How to fetch app details from Google Play Store
---

# App Details

This section explains how to retrieve app details from Google Play Store across different release channels.

## Get App Details (All Available Channels)

**Endpoint:** [https://sniff.xhyrom.dev/v1/details/:package_name](https://sniff.xhyrom.dev/v1/details/:package_name)

This endpoint returns details for all available channels for the specified package.

### Response Headers

| Header               | Description                                            |
| -------------------- | ------------------------------------------------------ |
| X-Available-Channels | Comma-separated list of available channels for the app |

## Get App Details (Specific Channel)

**Endpoint:** [https://sniff.xhyrom.dev/v1/details/:package_name/:channel](https://sniff.xhyrom.dev/v1/details/:package_name/:channel)

This endpoint returns details for a specific channel if available.

### Channel Types

| Channel | Description                                             |
| ------- | ------------------------------------------------------- |
| stable  | Production release (always available)                   |
| beta    | Beta program release (only available for certain apps)  |
| alpha   | Alpha program release (only available for certain apps) |

## Response Format

All responses follow this structure:

```json
{
  "success": true|false,
  "data": {
    // For multi-channel requests: channel name -> details
    // For single channel requests: detail object directly
  },
  "error": null|"Error message"
}
```

## App Detail Structure

The app details object contains comprehensive information organized in the following structure:

### Core Information

| Field                              | Type    | Description                                       |
| ---------------------------------- | ------- | ------------------------------------------------- |
| item.id                            | string  | Package identifier of the app                     |
| item.title                         | string  | App name displayed on Play Store                  |
| item.creator                       | string  | Developer name                                    |
| item.promotional_description       | string  | Short tagline for the app                         |
| item.description_html              | string  | Full HTML description of the app                  |
| item.mature                        | boolean | Whether the app contains mature content           |
| item.available_for_preregistration | boolean | Whether the app is available for pre-registration |

### Version Information

| Field                                       | Type    | Description                                          |
| ------------------------------------------- | ------- | ---------------------------------------------------- |
| item.details.app_details.version_code       | integer | Internal version code                                |
| item.details.app_details.version_string     | string  | User-facing version string (e.g., "276.13 - Stable") |
| item.details.app_details.target_sdk_version | integer | Target Android SDK version                           |

### Size and Downloads

| Field                                       | Type    | Description                                                 |
| ------------------------------------------- | ------- | ----------------------------------------------------------- |
| item.details.app_details.info_download_size | integer | Size of the app in bytes                                    |
| item.details.app_details.info_download      | string  | Approximate download count (e.g., "500,000,000+ downloads") |

### Developer Information

| Field                                      | Type   | Description             |
| ------------------------------------------ | ------ | ----------------------- |
| item.details.app_details.developer_name    | string | Name of the developer   |
| item.details.app_details.developer_email   | string | Developer contact email |
| item.details.app_details.developer_website | string | Developer website URL   |

### Release Information

| Field                                        | Type   | Description                                                  |
| -------------------------------------------- | ------ | ------------------------------------------------------------ |
| item.details.app_details.info_updated_on     | string | Date when the app was last updated                           |
| item.details.app_details.recent_changes_html | string | Recent changes description in HTML format                    |
| item.app_info.section                        | array  | Additional information including release date, pricing, etc. |

### Metadata

| Field          | Type    | Description                             |
| -------------- | ------- | --------------------------------------- |
| footer_html    | string  | Footer information (e.g., price notes)  |
| enable_reviews | boolean | Whether reviews are enabled for the app |

## App Info Section Structure

The `item.app_info.section` array contains various additional information:

| Section Label    | Description                      | Example                                    |
| ---------------- | -------------------------------- | ------------------------------------------ |
| In-app purchases | Price range for in-app purchases | "€ 1,99 - € 274,99 if billed through Play" |
| Offered by       | Entity handling transactions     | "Google Commerce Ltd"                      |
| Released on      | Initial release date             | "May 13, 2015"                             |

## Example Request

```
GET https://sniff.xhyrom.dev/v1/details/com.discord
```

### Example Response

```json
{
  "success": true,
  "data": {
    "beta": {
      "item": {
        "id": "com.discord",
        "sub_id": "com.discord",
        "type": 1,
        "category_id": 3,
        "title": "Discord - Talk, Play, Hang Out",
        "creator": "Discord Inc.",
        "description_html": "Discord is designed for gaming and great for just chilling with friends or building a community. Customize your own space and gather your friends to talk while playing your favorite games, or just hang out.<br><br>GROUP CHAT THAT’S ALL FUN &amp; GAMES<br>∙ Discord is great for playing games and chilling with friends, or even building a worldwide community. Customize your own space to talk, play, and hang out in.<br><br>MAKE YOUR GROUP CHATS MORE FUN<br>∙ Create custom emoji, stickers, soundboard effects, and more to add your personality to voice, video, or text chat. Set your avatar, a custom status, and write your own profile to show up in chat your way.<br><br>STREAM LIKE YOU’RE IN THE SAME ROOM<br>∙ High-quality and low-latency streaming makes it feel like you&#39;re hanging out on the couch with friends while playing a game, watching shows, looking at photos, or idk doing homework or something.<br><br>HOP IN WHEN YOU’RE FREE, NO NEED TO CALL<br>∙ Easily hop in and out of voice or text chats without having to call or invite anyone, so you can chat with your friends before, during, and after your game session.<br><br>SEE WHO’S AROUND TO CHILL<br>∙ See who’s around, playing games, or just hanging out. For supported games, you can see what modes or characters your friends are playing and directly join up.<br><br>ALWAYS HAVE SOMETHING TO DO TOGETHER<br>∙ Watch videos, play built-in games, listen to music, or just scroll together and spam memes. Seamlessly text, call, video chat, and play games, all in one group chat.<br><br>WHEREVER YOU GAME, HANG OUT HERE<br>∙ On your PC, phone, or console, you can still hang out on Discord. Easily switch between devices and use tools to manage multiple group chats with friends.",
        "offer": [
          {
            "micros": 0,
            "currency_code": "EUR",
            "formatted_amount": "",
            "checkout_flow_required": false,
            "offer_type": 1
          }
        ],
        "details": {
          "app_details": {
            "developer_name": "Discord Inc.",
            "version_code": 277111,
            "version_string": "277.11 - Beta",
            "info_download_size": 180225716,
            "developer_email": "support@discord.com",
            "developer_website": "https://dis.gd/contact",
            "info_download": "500,000,000+ downloads",
            "package_name": "com.discord",
            "recent_changes_html": "We’ve been hard at work making Discord better for you. This includes bug fixes and performance enhancements. For more detailed information, go to your profile in the app and scroll down to “What’s New”.",
            "info_updated_on": "Apr 25, 2025",
            "target_sdk_version": 34
          }
        },
        "app_info": {
          "section": [
            {
              "label": "In-app purchases",
              "container": {
                "description": "€ 1,99 - € 274,99 if billed through Play"
              }
            },
            {
              "label": "Offered by",
              "container": { "description": "Google Commerce Ltd" }
            },
            {
              "label": "Released on",
              "container": { "description": "May 13, 2015" }
            }
          ]
        },
        "mature": false,
        "promotional_description": "Group Chat That’s Fun & Games",
        "available_for_preregistration": false,
        "force_shareability": false
      },
      "footer_html": "All prices include VAT.",
      "enable_reviews": true
    },
    "stable": {
      "item": {
        "id": "com.discord",
        "sub_id": "com.discord",
        "type": 1,
        "category_id": 3,
        "title": "Discord - Talk, Play, Hang Out",
        "creator": "Discord Inc.",
        "description_html": "Discord is designed for gaming and great for just chilling with friends or building a community. Customize your own space and gather your friends to talk while playing your favorite games, or just hang out.<br><br>GROUP CHAT THAT’S ALL FUN &amp; GAMES<br>∙ Discord is great for playing games and chilling with friends, or even building a worldwide community. Customize your own space to talk, play, and hang out in.<br><br>MAKE YOUR GROUP CHATS MORE FUN<br>∙ Create custom emoji, stickers, soundboard effects, and more to add your personality to voice, video, or text chat. Set your avatar, a custom status, and write your own profile to show up in chat your way.<br><br>STREAM LIKE YOU’RE IN THE SAME ROOM<br>∙ High-quality and low-latency streaming makes it feel like you&#39;re hanging out on the couch with friends while playing a game, watching shows, looking at photos, or idk doing homework or something.<br><br>HOP IN WHEN YOU’RE FREE, NO NEED TO CALL<br>∙ Easily hop in and out of voice or text chats without having to call or invite anyone, so you can chat with your friends before, during, and after your game session.<br><br>SEE WHO’S AROUND TO CHILL<br>∙ See who’s around, playing games, or just hanging out. For supported games, you can see what modes or characters your friends are playing and directly join up.<br><br>ALWAYS HAVE SOMETHING TO DO TOGETHER<br>∙ Watch videos, play built-in games, listen to music, or just scroll together and spam memes. Seamlessly text, call, video chat, and play games, all in one group chat.<br><br>WHEREVER YOU GAME, HANG OUT HERE<br>∙ On your PC, phone, or console, you can still hang out on Discord. Easily switch between devices and use tools to manage multiple group chats with friends.",
        "offer": [
          {
            "micros": 0,
            "currency_code": "EUR",
            "formatted_amount": "",
            "checkout_flow_required": false,
            "offer_type": 1
          }
        ],
        "details": {
          "app_details": {
            "developer_name": "Discord Inc.",
            "version_code": 276013,
            "version_string": "276.13 - Stable",
            "info_download_size": 179830953,
            "developer_email": "support@discord.com",
            "developer_website": "https://dis.gd/contact",
            "info_download": "500,000,000+ downloads",
            "package_name": "com.discord",
            "recent_changes_html": "We’ve been hard at work making Discord better for you. This includes bug fixes and performance enhancements. For more detailed information, go to your profile in the app and scroll down to “What’s New”.",
            "info_updated_on": "Apr 21, 2025",
            "target_sdk_version": 34
          }
        },
        "app_info": {
          "section": [
            {
              "label": "In-app purchases",
              "container": {
                "description": "€ 1,99 - € 274,99 if billed through Play"
              }
            },
            {
              "label": "Offered by",
              "container": { "description": "Google Commerce Ltd" }
            },
            {
              "label": "Released on",
              "container": { "description": "May 13, 2015" }
            }
          ]
        },
        "mature": false,
        "promotional_description": "Group Chat That’s Fun & Games",
        "available_for_preregistration": false,
        "force_shareability": false
      },
      "footer_html": "All prices include VAT.",
      "enable_reviews": true
    },
    "alpha": {
      "item": {
        "id": "com.discord",
        "sub_id": "com.discord",
        "type": 1,
        "category_id": 3,
        "title": "Discord - Talk, Play, Hang Out",
        "creator": "Discord Inc.",
        "description_html": "Discord is designed for gaming and great for just chilling with friends or building a community. Customize your own space and gather your friends to talk while playing your favorite games, or just hang out.<br><br>GROUP CHAT THAT’S ALL FUN &amp; GAMES<br>∙ Discord is great for playing games and chilling with friends, or even building a worldwide community. Customize your own space to talk, play, and hang out in.<br><br>MAKE YOUR GROUP CHATS MORE FUN<br>∙ Create custom emoji, stickers, soundboard effects, and more to add your personality to voice, video, or text chat. Set your avatar, a custom status, and write your own profile to show up in chat your way.<br><br>STREAM LIKE YOU’RE IN THE SAME ROOM<br>∙ High-quality and low-latency streaming makes it feel like you&#39;re hanging out on the couch with friends while playing a game, watching shows, looking at photos, or idk doing homework or something.<br><br>HOP IN WHEN YOU’RE FREE, NO NEED TO CALL<br>∙ Easily hop in and out of voice or text chats without having to call or invite anyone, so you can chat with your friends before, during, and after your game session.<br><br>SEE WHO’S AROUND TO CHILL<br>∙ See who’s around, playing games, or just hanging out. For supported games, you can see what modes or characters your friends are playing and directly join up.<br><br>ALWAYS HAVE SOMETHING TO DO TOGETHER<br>∙ Watch videos, play built-in games, listen to music, or just scroll together and spam memes. Seamlessly text, call, video chat, and play games, all in one group chat.<br><br>WHEREVER YOU GAME, HANG OUT HERE<br>∙ On your PC, phone, or console, you can still hang out on Discord. Easily switch between devices and use tools to manage multiple group chats with friends.",
        "offer": [
          {
            "micros": 0,
            "currency_code": "EUR",
            "formatted_amount": "",
            "checkout_flow_required": false,
            "offer_type": 1
          }
        ],
        "details": {
          "app_details": {
            "developer_name": "Discord Inc.",
            "version_code": 278204,
            "version_string": "278.4 - Alpha",
            "info_download_size": 180525694,
            "developer_email": "support@discord.com",
            "developer_website": "https://dis.gd/contact",
            "info_download": "500,000,000+ downloads",
            "package_name": "com.discord",
            "recent_changes_html": "We’ve been hard at work making Discord better for you. This includes bug fixes and performance enhancements. For more detailed information, go to your profile in the app and scroll down to “What’s New”.",
            "info_updated_on": "Apr 24, 2025",
            "target_sdk_version": 34
          }
        },
        "app_info": {
          "section": [
            {
              "label": "In-app purchases",
              "container": {
                "description": "€1.99 - €274.99 if billed through Play"
              }
            },
            {
              "label": "Offered by",
              "container": { "description": "Google Commerce Ltd" }
            },
            {
              "label": "Released on",
              "container": { "description": "May 13, 2015" }
            }
          ]
        },
        "mature": false,
        "promotional_description": "Group Chat That’s Fun & Games",
        "available_for_preregistration": false,
        "force_shareability": false
      },
      "footer_html": "All prices include VAT.",
      "enable_reviews": true
    }
  },
  "error": null
}
```
