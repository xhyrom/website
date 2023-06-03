---
title: Stats
description: Get stats from the API
---

# Stats

This section of the documentation will cover how to get stats from the API.

Accessible on [https://api.discord-experiments.xhyrom.dev/v2/stats](https://api.discord-experiments.xhyrom.dev/v2/stats)

## Stats Object

Represents stats of the API

**Stats Structure:**
| field | type                        | description                |
| ----- | --------------------------- | -------------------------- |
| total | integer                     | Total sum of experiments   |
| kind  | [kind object](#kind-object) | Sum of experiments by kind |

## Kind Object

Represents number of experiments by kind

**Kind Structure:**

| field   | type    | description              |
| ------- | ------- | ------------------------ |
| guild   | integer | Sum of guild experiments |
| user    | integer | Sum of user experiments  |
| other * | integer | Sum of other experiments |

* Other experiments are experiments that are not guild or user specific. This will be always 0, because there are no other experiments.

## Fetching stats

You can fetch stats from the API by sending a GET request to [https://api.discord-experiments.xhyrom.dev/v2/stats](https://api.discord-experiments.xhyrom.dev/v2/stats)

```
GET https://api.discord-experiments.xhyrom.dev/v2/stats
```

Returns a [stats object](#stats-object)
