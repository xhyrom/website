---
title: Eligible
description: How to check if a guild is eligible for an experiment
---

# Eligible

This section of the documentation will cover how to check if a guild is eligible for an experiment.

Accessible on [https://api.distools.xhyrom.dev/v2/eligible](https://api.distools.xhyrom.dev/v2/eligible)

## Eligible Object

Represents the eligibility of a guild for an experiment

**Eligible Structure:**

| field                 | type                                                      | description                                             |
| --------------------- | --------------------------------------------------------- | ------------------------------------------------------- |
| eligible              | boolean                                                   | Whether the guild is eligible for the experiment or not |
| bucket *              | [bucket](./experiments#population-bucket-object)          | The bucket of the guild                                 |
| filters               | array of [filter](./experiments#population-filter-object) | The filters that haven't been checked                   |
| is_override_formatted | boolean                                                   | Whether the guild is in overrides_formatted             |

\* Includes `id` field - id of the bucket

## Checking eligibility

You can check if a guild is eligible for an experiment by sending a POST request to [https://api.distools.xhyrom.dev/v2/eligible](https://api.distools.xhyrom.dev/v2/eligible)

**Body:**

| field         | type                                                                                      | description                                       |
| ------------- | ----------------------------------------------------------------------------------------- | ------------------------------------------------- |
| experiment_id | string                                                                                    | The id of the experiment to check eligibility for |
| guild *       | [guild](https://discord.com/developers/docs/resources/guild#guild-object-guild-structure) | The guild to check eligibility for                |

\* Only `id`, `features` and `member_count` fields are checked and `id` is required

```
POST https://api.distools.xhyrom.dev/v2/eligible

{
  "experiment_id": "2023-03_clyde_ai",
  "guild": {
    "id": "1046534628577640528",
    "features": ["COMMUNITY"],
    "member_count": 100
  }
}
```

Returns an [eligible object](#eligible-object)
