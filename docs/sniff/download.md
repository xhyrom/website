---
title: Download
description: How to get download URLs for specific app versions
---

# Download

This section explains how to retrieve download URLs for specific versions of apps from the Google Play Store.

## Get Download URL

**Endpoint:** [https://sniff.xhyrom.dev/v1/download/:package_name/:channel/:version_code](https://sniff.xhyrom.dev/v1/download/:package_name/:channel/:version_code)

This endpoint retrieves the download URLs for a specific version of an app from a particular channel.

### Parameters

| Parameter    | Description                                             |
| ------------ | ------------------------------------------------------- |
| package_name | The package identifier of the app (e.g., `com.discord`) |
| channel      | Release channel (`stable`, `beta`, or `alpha`)          |
| version_code | The specific Android version code to download (integer) |

### Response Format

Successful response:

```json
{
  "success": true,
  "data": [
    "https://play.googleapis.com/download/by-token/download?token=tkn",
    [
      [
        "config.xxhdpi",
        "https://play.googleapis.com/download/by-token/download?token=tkn"
      ],
      [
        "config.sk",
        "https://play.googleapis.com/download/by-token/download?token=tkn"
      ],
      [
        "config.cs",
        "https://play.googleapis.com/download/by-token/download?token=tkn"
      ],
      [
        "config.en",
        "https://play.googleapis.com/download/by-token/download?token=tkn"
      ],
      [
        "config.arm64_v8a",
        "https://play.googleapis.com/download/by-token/download?token=tkn"
      ]
    ],
    []
  ],
  "error": null
}
```

Error response:

```json
{
  "success": false,
  "data": null,
  "error": "App not found or version unavailable"
}
```

### Response Structure

The `data` field in a successful response contains an array with three elements:

1. The primary download URL for the base APK
2. An array of additional split APKs (if any), where each item is an array containing:
   - Split identifier (e.g., "config.xxhdpi", "config.en")
   - Download URL for that split
3. An array of additional patches or OBB files (typically empty for most apps)

### Understanding Split APKs

Split APKs are components of an Android app package that allow for more efficient distribution:

| Split Type      | Description                                             |
| --------------- | ------------------------------------------------------- |
| config.{locale} | Language-specific resources (e.g., config.en)           |
| config.{dpi}    | Screen density specific resources (e.g., config.xxhdpi) |
| config.{abi}    | CPU architecture specific code (e.g., config.arm64_v8a) |

### Example Request

```
GET https://sniff.xhyrom.dev/v1/download/com.discord/stable/242020
```
