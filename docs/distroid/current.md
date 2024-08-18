---
title: Current
description: How to get latest release of the discord's android app
---

## Get The Latest Android Release

This section explains how to retrieve the latest release of the Discord Android app using our API.

**Endpoint:** [https://distroid.xhyrom.dev/v1/current](https://distroid.xhyrom.dev/v1/current)

### Channel Type

### Channel Object

This object describes the current release channel for the Discord Android app.

**Properties:**

| Field Name     | Type                                 | Description                                                              |
| -------------- | ------------------------------------ | ------------------------------------------------------------------------ |
| version_code   | integer                              | Internal version code used for downloading specific APKs. (e.g., 244205) |
| version_string | string                               | Version name of the release. (e.g., "244.5")            |
| files \*       | array of [file object](#file-object) | An array containing details about the available APK splits.              |

\* Only included if you're using `with_file_metadata=true` query parameter.

### File Object

This object details a specific APK split for the Discord Android app.

**Properties:**

| Field Name      | Type    | Description                                              |
| --------------- | ------- | -------------------------------------------------------- |
| compressed_size | integer | Bytesize of the `.apk` file (compressed).       |
| size            | integer | Bytesize of the installed APK (uncompressed).       |
| split_id        | string  | Unique identifier for the split. Empty for the base APK. |

### Fetching Latest Release Information

To retrieve the latest release details, send a GET request to the API endpoint:

**Optional Query Parameter:**

| Parameter Name     | Type    | Description                                                  |
| ------------------ | ------- | ------------------------------------------------------------ |
| with_file_metadata | boolean | Include detailed information about each available APK split. |

```
GET https://distroid.xhyrom.dev/v1/current
```

Returns map\[channel type - `stable`, `beta` or `alpha`\]\[[Channel Object](#channel-object)\]
