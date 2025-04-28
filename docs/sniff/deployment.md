---
title: Deployment
description: How to deploy your own instance of Sniff
---

# Deployment

This section explains how to deploy your own instance of the Sniff API service.

## Cloudflare Workers

Sniff is designed to be deployed as a Cloudflare Worker, providing global distribution and low-latency access to the API.

### Prerequisites

- Cloudflare account
- Wrangler CLI installed (`npm install -g wrangler`)

### Environment Variables

The following environment variables are required for operation:

| Variable Name    | Description                           |
| ---------------- | ------------------------------------- |
| DEVICE_NAME      | Device identifier for Google Play API |
| STABLE_EMAIL     | Email for stable track access         |
| STABLE_AAS_TOKEN | Authentication token for stable track |
| BETA_EMAIL       | Email enrolled in beta programs       |
| BETA_AAS_TOKEN   | Authentication token for beta access  |
| ALPHA_EMAIL      | Email enrolled in alpha programs      |
| ALPHA_AAS_TOKEN  | Authentication token for alpha access |

### Deployment Steps

1. Clone the repository
2. Configure environment variables in `wrangler.toml` or through the Cloudflare dashboard
3. Deploy using Wrangler:

```bash
wrangler publish
```

## Authentication Tokens

To obtain the required AAS tokens for different channels, you can use the included OAuth2AAS tool:

### Using OAuth2AAS Token Generator

1. **Get an OAuth2 token:**

   - Open [Google's embedded setup page](https://accounts.google.com/EmbeddedSetup) in your browser
   - Log in with your Google account (use different accounts for stable/beta/alpha if needed)
   - Access browser developer tools (F12 or right-click -> Inspect)
   - Go to the "Application" tab, then "Local Storage"
   - Copy the oauth2 token value

2. **Run the OAuth2AAS tool:**

   ```bash
   cargo run --package oauth2aas <your-email@gmail.com> <oauth2-token>
   ```

3. **Save the generated token:**
   - Store the resulting AAS token as the appropriate environment variable

Ensure each email account is enrolled in the appropriate program (beta/alpha) for the respective channels. You'll need to generate separate tokens for each channel you want to support.

## OAuth2AAS Tool

The [OAuth2AAS tool](https://github.com/xhyrom/sniff/tree/main/oauth2aas) is included in the Sniff repository and provides a simple way to convert OAuth2 tokens to AAS tokens required by the Google Play API.
