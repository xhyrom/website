---
title: Experiments
description: How to fetch experiments from the API
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
| overrides *         | map\[string\]\[array of string\]                          | The experiment rollout's overrides          |
| overrides_formatted | array of [rollout population](#rollout-population-object) | Additional experiment rollout's populations |

\* Map key is bucket id and value is array of guild ids

## Rollout Population Object

Represents a population of an experiment rollout. The population object specifies a set of filters and ranges of positions needed to fit into particular buckets.

**Rollout Population Structure:**

| field   | type                                                            | description            |
| ------- | --------------------------------------------------------------- | ---------------------- |
| buckets | map\[string\]\[[population bucket](#population-bucket-object)\] | The population buckets |
| filters | array of [population filter](#population-filter-object)         | Population filters     |

### Population Bucket Object

Represents a bucket of a population of an experiment rollout. Bucket contains a rollout.

**Population Bucket Structure:**

| field   | type                                                                    | description                  |
| ------- | ----------------------------------------------------------------------- | ---------------------------- |
| rollout | array of [population bucket rollout](#population-bucket-rollout-object) | The bucket rollouts (ranges) |

### Population Bucket Rollout Object

Represents a rollout of a bucket of a population of an experiment rollout. Rollout contains a range, start and end.

**Population Bucket Rollout Structure:**

| field | type    | description             |
| ----- | ------- | ----------------------- |
| start | integer | The start of this range |
| end   | integer | The end of this range   |

### Population Filter Object

Represents a filter of a population of an experiment rollout.

**Population Filter Structure:**

| field | type   | description     |
| ----- | ------ | --------------- |
| type  | string | The filter type |

#### type is **guild_has_feature**
The guild features required for eligiblity

| field    | type             | description                                                                                                |
| -------- | ---------------- | ---------------------------------------------------------------------------------------------------------- |
| features | ?array of string | Contains [Guild Features](https://discord.com/developers/docs/resources/guild#guild-object-guild-features) |

#### type is **guild_id_range**
The range of snowflake resource Ids that are eligible

| field  | type     | description      |
| ------ | -------- | ---------------- |
| min_id | ?integer | Minimum guild id |
| max_id | integer  | Maximum guild id |

#### type is **guild_member_count_range**
The range of guild member counts that are eligible

| field     | type     | description          |
| --------- | -------- | -------------------- |
| min_count | ?integer | Minimum member count |
| max_count | integer  | Maximum member count |

#### type is **guild_ids**
The list of snowflake resource IDs that are eligible

| field | type             | description        |
| ----- | ---------------- | ------------------ |
| ids   | ?array of string | Contains Guild Ids |

#### type is **guild_hub_types**
The types of hubs that is eligible

| field     | type              | description   |
| --------- | ----------------- | ------------- |
| hub_types | ?array of integer | Types of hubs |

0. Default
1. High School
2. College

#### type is **guild_has_vanity_url**
Whether a vanity is or is not required for eligibility

| field      | type     | description                      |
| ---------- | -------- | -------------------------------- |
| has_vanity | ?boolean | Whether the guild has vanity url |

#### type is **guild_in_range_by_hash**
If the guild experiment hash (murmurhash v3 unsigned of `experiment_name:guild_id` % 1e4) is greater than `hash_key`, it is eligible

| field    | type    | description      |
| -------- | ------- | ---------------- |
| hash_key | ?number | Minimum hash key |
| target   | ?number | Unknown          |

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

Returns array of [Experiment Object](#experiment-object)

## Fetching experiment

You can fetch a specific experiment from the API by sending a GET request to [https://api.discord-experiments.xhyrom.dev/v2/experiments/:experimentId](https://api.discord-experiments.xhyrom.dev/v2/experiments/:experimentId).

You can use same query parameters as in [Fetching all experiments](#fetching-all-experiments)

```
GET https://api.discord-experiments.xhyrom.dev/v2/experiments/:experimentId
```

Returns [Experiment Object](#experiment-object)
