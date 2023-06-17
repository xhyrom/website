---
title: Introduction
description: Introduction to the Distools API
---

# Introduction

This section of the documentation will cover the basics of the Distools API, and how to use it.

Accessible on [https://api.distools.xhyrom.dev/v2](https://api.distools.xhyrom.dev/v2)

## What is the Distools API?

It's about the Distools API, which allows you to get information about Discord's experiments. It's a public API, so you don't need any token to use it.

## How it works?

It scrapes everything from client, and also from [https://discord.com/api/v10/experiments?with_guild_experiments=true](https://discord.com/api/v10/experiments?with_guild_experiments=true) for **some** guild rollouts.

This api **contains** all known experiments and their rollouts (if available).

## Source code

This api is currently closed source, but we will do our best to make it open source in the future.
If you don't trust us, you can scrape everything from our [Discord-Datamining](https://github.com/xHyroM/discord-datamining) repository, which is open source. There's file inside [data/experiments.json](https://github.com/xHyroM/discord-datamining/blob/master/data/experiments.json) which contains all experiments and their rollouts from our API (updates every 5 minutes).
