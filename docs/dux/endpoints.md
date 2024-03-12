---
title: Endpoints
description: Get list of all endpoints
---

# Endpoints

This section of the documentation will cover how to get list of all endpoints.
It's possible that not all endpoints are scraped, as it's scraped from the canary client.

Accessible on [https://dux.xhyrom.dev/v2/endpoints](https://dux.xhyrom.dev/v2/endpoints)

## Fetching endpoints

You can fetch list of all endpoints by sending a GET request to [https://dux.xhyrom.dev/v2/endpoints](https://dux.xhyrom.dev/v2/endpoints)

```
GET https://dux.xhyrom.dev/v2/endpoints
```

Returns a `dictionary` of endpoints, where key is the endpoint name and value is the endpoint url.