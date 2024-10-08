---
title: Current
description: How to get latest release of the discord's android app
---

## Get The Latest Android Release

This section explains how to retrieve the latest release of the Discord Android app using our API.

**Endpoint:** [https://distroid.xhyrom.dev/v1/current](https://distroid.xhyrom.dev/v1/current)

## Channel Object

This object describes the current release channel for the Discord Android app.

**Channel Structure:**

| Field Name     | Type                                 | Description                                                              |
| -------------- | ------------------------------------ | ------------------------------------------------------------------------ |
| version_code   | integer                              | Internal version code used for downloading specific APKs. (e.g., 244205) |
| version_string | string                               | Version name of the release. (e.g., "244.5")            |
| files \*       | array of [file object](#file-object) | An array containing details about the available APK splits.              |

\* Only included if you're using `with_file_metadata=true` query parameter.

#### Channel Type

|        |
| ------ |
| stable |
| beta   |
| alpha  |

## File Object

This object details a specific APK split for the Discord Android app.

**File Structure:**

| Field Name      | Type    | Description                                              |
| --------------- | ------- | -------------------------------------------------------- |
| compressed_size | integer | Bytesize of the `.apk` file (compressed).       |
| size            | integer | Bytesize of the installed APK (uncompressed).       |
| split_id        | string  | Unique identifier for the split. Empty for the base APK. |

### Fetching Latest Release Information

To retrieve the latest release details, send a GET request to the API endpoint:

**Query parameters:**

| Parameter Name     | Type    | Description                                                  |
| ------------------ | ------- | ------------------------------------------------------------ |
| with_file_metadata | boolean | Include detailed information about each available APK split. |

### GET /current

**Example Map**

```json
{
  "alpha": {
    "version_code": 244205,
    "version_string": "244.5"
  },
  "beta": {
    "version_code": 243115,
    "version_string": "243.15"
  },
  "stable": {
    "version_code": 242020,
    "version_string": "242.20"
  }
}
```

Returns map\[[Channel Type](#channel-type)\]\[[Channel Object](#channel-object)\]
