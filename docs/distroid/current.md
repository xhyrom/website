---
title: Current
description: How to get latest version of the discord's android app
---

## Get The Latest Android Version

This section explains how to retrieve the latest version of the Discord Android app using our API.

**Endpoint:** [https://distroid.xhyrom.dev/v1/current](https://distroid.xhyrom.dev/v1/current)

### Channel Type

### Channel Object

This object describes the current release channel for the Discord Android app.

**Properties:**

| Field Name     | Type                                 | Description                                                              |
| -------------- | ------------------------------------ | ------------------------------------------------------------------------ |
| version_code   | integer                              | Internal version code used for downloading specific APKs. (e.g., 244205) |
| version_string | string                               | Human-readable version number of the release. (e.g., "244.5")            |
| files \*       | array of [file object](#file-object) | An array containing details about the available APK splits.              |

\* Only included if you're using `with_file_metadata=true` query parameter.

### File Object

This object details a specific APK split for the Discord Android app.

**Properties:**

| Field Name      | Type    | Description                                              |
| --------------- | ------- | -------------------------------------------------------- |
| compressed_size | integer | Size of the downloaded file in bytes (compressed).       |
| size            | integer | Size of the installed APK in bytes (uncompressed).       |
| split_id        | string  | Unique identifier for the split. Empty for the base APK. |

### Fetching Latest Version Information

To retrieve the latest version details, send a GET request to the API endpoint:

**Optional Query Parameter:**

| Parameter Name     | Type    | Description                                                  |
| ------------------ | ------- | ------------------------------------------------------------ |
| with_file_metadata | boolean | Include detailed information about each available APK split. |

```
GET https://distroid.xhyrom.dev/v1/current
```

Returns map\[channel type - `stable`, `beta` or `alpha`\]\[[Channel Object](#channel-object)\]
