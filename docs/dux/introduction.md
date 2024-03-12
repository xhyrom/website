---
title: Introduction
description: Introduction to the dux api
---

# Introduction

This section of the documentation will cover the basics of the DUX API, and how to use it.

Accessible on [https://dux.xhyrom.dev/v2](https://dux.xhyrom.dev/v2)

## What is the DUX?

It's about the DUX, which allows you to get information about Discord's experiments and endpoints. It's a public API, so you don't need any token to use it.

## How it works?

It scrapes everything from client, and also from [https://discord.com/api/v10/experiments?with_guild_experiments=true](https://discord.com/api/v10/experiments?with_guild_experiments=true) for **some** guild rollouts.

This api **contains** all known experiments and their rollouts (if available).

## Source code

This api is currently closed source, but we will do our best to make it open source in the future.
If you don't trust us, you can scrape everything from our [Discord-Datamining](https://github.com/xHyroM/discord-datamining) repository, which is open source. There's file inside [experiments.json](https://github.com/xHyroM/discord-datamining/blob/master/data/client/experiments/experiments.json) which contains all experiments and their rollouts from our API (updates every 5 minutes).
File [routes.json](https://github.com/xHyroM/discord-datamining/blob/master/data/client/routes.json) contains all scraped endpoints from canary client.