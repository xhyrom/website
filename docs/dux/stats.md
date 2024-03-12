---
title: Stats
description: Get stats from the API
---

# Stats

This section of the documentation will cover how to get stats from the API.

Accessible on [https://dux.xhyrom.dev/v2/stats](https://dux.xhyrom.dev/v2/stats)

## Stats object

Represents number of experiments and endpoints

**Stats Structure:**
| field       | type                                                | description            |
| ----------- | --------------------------------------------------- | ---------------------- |
| experiments | [experiment stats object](#experiment-stats-object) | Experiment stats       |
| endpoints   | integer                                             | Total sum of endpoints |

## Experiment Stats Object

Represents number of experiments

**Stats Structure:**
| field | type                                              | description                |
| ----- | ------------------------------------------------- | -------------------------- |
| total | integer                                           | Total sum of experiments   |
| kind  | [experiment kind object](#experiment-kind-object) | Sum of experiments by kind |

## Experiment Kind Object

Represents number of experiments by kind

**Kind Structure:**

| field | type    | description              |
| ----- | ------- | ------------------------ |
| guild | integer | Sum of guild experiments |
| user  | integer | Sum of user experiments  |

* Other experiments are experiments that are not guild or user specific. This will be always 0, because there are no other experiments.

## Fetching stats

You can fetch stats from the API by sending a GET request to [https://dux.xhyrom.dev/v2/stats](https://dux.xhyrom.dev/v2/stats)

```
GET https://dux.xhyrom.dev/v2/stats
```

Returns a [stats object](#stats-object)
