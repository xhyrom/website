---
title: Experiments
description: How to fetch experiments from the API
layout: ../../../layouts/docs/ItemLayout.astro
---

# Experiments

This section of the documentation will cover how to fetch experiments from the API.

Accessible on [https://api.discord-experiments.xhyrom.dev/v2/experiments](https://api.discord-experiments.xhyrom.dev/v2/experiments)

## Experiment Object

Represents an experiment

**Experiment Structure:**
| field   | type                                             | description                   |
| ------- | ------------------------------------------------ | ----------------------------- |
| data    | [experiment data structure](#data-object)        | The data of the experiment    |
| rollout | ?[experiment rollout structure](#rollout-object) | The rollout of the experiment |

## Data Object

Represents the data of an experiment

**Experiment Data Structure:**
| field       | type               | description                                                               |
| ----------- | ------------------ | ------------------------------------------------------------------------- |
| hash        | string             | Hash of the experiment (if the experiment has no id, this will be a hash) |
| id *        | ?string            | Id of the experiment                                                      |
| label *     | ?string            | Human-readable label of the experiment                                    |
| kind **     | string             | Kind of the experiment                                                    |
| description | ?array of string   | Names of buckets                                                          |
| buckets     | ?array of integers | Ids of available buckets                                                  |
| config_keys | ?array of string   | Keys of the config                                                        |

\* Also included if you're using `?only_keys=true` query parameter.  
\** Can be `guild` if the experiment is guild-specific, `user` if the experiment is user-specific.  
\*** Everything is included in the `data` field, if you're not using `?also_with_unknown_ids=true` query parameter.  

## Rollout Object

Represents the rollout of an experiment

**Rollout Structure:**

| field               | type                                                      | description                                 |
| ------------------- | --------------------------------------------------------- | ------------------------------------------- |
| revision            | integer                                                   | Current version fo the rollout              |
| populations         | array of [rollout population](#rollout-population-object) | The experiment rollout's populations        |
| overrides           | array of [rollout override](#rollout-override-object)     | The experiment rollout's overrides          |
| overrides_formatted | array of [rollout population](#rollout-population-object) | Additional experiment rollout's populations |

## Rollout Population Object

Represents a population of an experiment rollout. The population object specifies a set of filters and ranges of positions needed to fit into particular buckets.

**Rollout Population Structure:**

| field   | type                                                            | description |
| ------- | --------------------------------------------------------------- | ----------- |
| buckets | map\[string\]\[[population bucket](#population-bucket-object)\] |             |
| filters | array of [population filter](#population-filter-object)         |             |

## Population Bucket Object

Represents a bucket of a population of an experiment rollout.

**Population Bucket Structure:**

| field   | type                                                                    | description |
| ------- | ----------------------------------------------------------------------- | ----------- |
| rollout | array of [population bucket rollout](#population-bucket-rollout-object) |             |

### Population Bucket Rollout Object

Represents a rollout of a bucket of a population of an experiment rollout.

**Population Bucket Rollout Structure:**

| field | type    | description |
| ----- | ------- | ----------- |
| start | integer |             |
| end   | integer |             |

## Population Filter Object

Represents a filter of a population of an experiment rollout.

**Population Filter Structure:**

| field | type   | description |
| ----- | ------ | ----------- |
| type  | string |             |

type is **guild_has_feature**
| field    | type             | description |
| -------- | ---------------- | ----------- |
| features | ?array of string |             |

type is **guild_id_range**
| field  | type     | description |
| ------ | -------- | ----------- |
| min_id | ?integer |             |
| max_id | integer  |             |

type is **guild_member_count_range**
| field     | type     | description |
| --------- | -------- | ----------- |
| min_count | ?integer |             |
| max_count | integer  |             |

type is **guild_ids**
| field | type             | description |
| ----- | ---------------- | ----------- |
| ids   | ?array of string |             |

type is **guild_hub_types**
| field     | type              | description |
| --------- | ----------------- | ----------- |
| hub_types | ?array of integer |             |

type is **guild_has_vanity_url**
| field      | type     | description |
| ---------- | -------- | ----------- |
| has_vanity | ?boolean |             |

type is **guild_in_range_by_hash**
| field    | type    | description |
| -------- | ------- | ----------- |
| hash_key | ?number |             |
| target   | ?number |             |

## Fetching all experiments

You can fetch experiments from the API by sending a GET request to [https://api.discord-experiments.xhyrom.dev/v2/experiments](https://api.discord-experiments.xhyrom.dev/v2/experiments).

**Query parameters:**
| Name                  | Type            | Description                                                   |
| --------------------- | --------------- | ------------------------------------------------------------- |
| also_with_unknown_ids | boolean         | This will include also experiments without id, just hash      |
| only_keys             | boolean         | This will only return the keys of the experiments (label, id) |
| has_rollout           | boolean         | This will only return experiments with rollout                |
| kind *                | array of string | This will only return experiments with the specified kind     |

\* If you want multiple kinds, you can separate them with a comma (,)

```
GET https://api.discord-experiments.xhyrom.dev/v2/experiments
```

## Fetching experiment

You can fetch a specific experiment from the API by sending a GET request to [https://api.discord-experiments.xhyrom.dev/v2/experiments/:experimentId](https://api.discord-experiments.xhyrom.dev/v2/experiments/:experimentId).

You can use same query parameters as in [Fetching all experiments](#fetching-all-experiments)

```
GET https://api.discord-experiments.xhyrom.dev/v2/experiments/:experimentId
```

