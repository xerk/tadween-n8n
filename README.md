# Introduction
[Tadween](https://tadween.app) is a powerful social media scheduling tool that allows you to manage your social media accounts efficiently.

You can use n8n to automate your workflow and post to multiple social media platforms at once.

Use it with [Tadween](https://studio.tadween.app) or a self-hosted instance.
For example: Load news from Reddit >> Make it a video with AI >> Post it to your social media accounts.

Tadween supports: X, LinkedIn, BlueSky, Instagram, Facebook, TikTok, YouTube, Pinterest, Dribbble, Telegram, Discord, Slack, Threads, Lemmy, Reddit, Mastodon, Warpcast, Nostr and VK.

---

## Credentials

- **Host:** `https://studio.tadween.app/api` (the default). A self-hosted instance uses its backend URL, which usually ends with `/api` (for example `https://yourdomain.com/api`). Don't add `/public/v1`.
- **API Key:** Tadween → Settings → API & MCP. Paste it as it is, without "Bearer".

n8n tests the connection when you save (`GET /public/v1/is-connected`).

Alternatively, call the public API directly (`{Host}/public/v1/...` with the key in the `Authorization` header), or connect an n8n AI Agent to the Tadween MCP server: see [tadween.app/ai-agent](https://tadween.app/ai-agent).

---

## Installation (quick installation)

- Click on settings
- Click on Community Nodes
- Click on Install
- Add "n8n-nodes-tadween" to "npm Package Name"
- Click on Install


---

## Installation (non-docker - manual installation)
Go to your n8n installation usually located at `~/.n8n`.
Check if you have the `custom` folder, if not create it and create a new package.json file inside.
```bash
mkdir -p ~/.n8n/custom
npm init -y
```

Then install the Tadween node package:
```
npm install n8n-nodes-tadween
```

## For docker users (manual installation)
Create a new folder on your host machine, for example `~/n8n-custom-nodes`, and create a new package.json file inside:
```bash
mkdir -p ~/n8n-custom-nodes
npm init -y
```

install the Tadween node package:
```bash
npm install n8n-nodes-tadween
```

When you run the n8n docker container, mount the custom nodes folder to the container:
Add the following environment variable to your docker run command:
```
N8N_CUSTOM_EXTENSIONS="~/n8n-custom-nodes"
```

---

## Credits and license

Based on [n8n-nodes-postiz](https://github.com/gitroomhq/postiz-n8n) by gitroomhq (Nevo David), MIT licensed. See [LICENSE.md](LICENSE.md).
