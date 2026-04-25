# Decryptor Scouting for the FTC DECODE Season

Modern FTC scouting web app with an interactive field, real-time sync, and one-click Netlify deployment for cross-device team use.

---

## Overview

Decryptor Scouting is a competition-ready FTC scouting web app designed to help teams collect match data quickly, coordinate between scouts, and access scouting information from any device using one shared link.

The app is built for the FTC DECODE season and is hosted on Netlify.

---

## Features

- Interactive FTC field input
- Match-based scouting
- Team number and match number tracking
- Alliance selection
- Ball tracking and scoring system
- Clean interface built for competition speed
- Cross-device access on phones, tablets, and laptops
- Real-time sync using Netlify Functions

---

## Live Hosting

This app is designed to be hosted on Netlify.

Netlify gives the app:

- A shared public URL
- Free hosting
- Automatic HTTPS
- Optional custom domain support
- Support for Netlify Functions used by Party Sync

---

## Deploy to Netlify

There are two ways to deploy this project:

1. Deploy manually using the Netlify CLI
2. Link the GitHub repository to Netlify for automatic deployments

---

## Option 1: Deploy with Netlify CLI

Use this option if you want to deploy the app manually from your computer.

### 1. Install prerequisites

Make sure you have:

- Node.js v18 or newer
- A free Netlify account
- This project folder on your computer

### 2. Install the Netlify CLI

```bash
npm install -g netlify-cli
```

### 3. Log in to Netlify

```bash
netlify login
```

A browser window will open.

Log in to your Netlify account, approve access, then return to the terminal.

### 4. Navigate to the project folder

```bash
cd path/to/Decryptor
```

Replace `path/to/Decryptor` with the real location of the project folder on your computer.

Example:

```bash
cd Desktop/Decryptor
```

### 5. Deploy the app

```bash
netlify deploy --prod
```

Netlify will read the project settings from `netlify.toml`.

The current configuration is:

```text
Build command: npm install
Publish directory: .
Functions directory: netlify/functions
```

If Netlify asks for a publish directory, enter:

```text
.
```

The single dot means the current folder will be deployed.

After deployment, Netlify will give you a live URL, for example:

```text
https://your-site-name.netlify.app
```

### 6. Updating the app

After making changes, run the deploy command again from the same folder:

```bash
netlify deploy --prod
```

Your Netlify URL will stay the same, but the website will update with the newest version.

---

## Option 2: Link GitHub to Netlify

Use this option if you want Netlify to automatically update the website every time you push changes to GitHub.

### 1. Go to Netlify

Open:

```text
https://netlify.com
```

Log in to your Netlify account.

### 2. Create a new site

In the Netlify dashboard, select:

```text
Add new site → Import an existing project
```

### 3. Connect GitHub

Choose GitHub as the provider.

Authorize Netlify to access your GitHub account and repositories.

### 4. Select the repository

Choose this repository:

```text
Neurobots1/Decryptor
```

### 5. Configure deploy settings

Netlify should automatically read the settings from `netlify.toml`.

The project uses:

```text
Build command: npm install
Publish directory: .
Functions directory: netlify/functions
```

If Netlify asks you to enter the settings manually, use:

```text
Build command: npm install
Publish directory: .
```

The publish directory must be a single dot:

```text
.
```

### 6. Deploy the site

Click:

```text
Deploy site
```

Netlify will deploy the project and give you a live URL.

### 7. Automatic updates

After the GitHub repository is linked to Netlify, every push to the main branch will automatically update the live website.

---

## Custom Domain

You can use the free Netlify subdomain or add your own custom domain.

To add a custom domain:

1. Open your site in Netlify
2. Go to `Domain settings`
3. Add your custom domain

HTTPS is enabled automatically by Netlify.

---

## Important Notes

This app uses Netlify Functions for real-time sync.

Make sure these files and folders stay in the project:

```text
netlify.toml
netlify/functions/
```

Do not delete them or Party Sync will stop working.

---

## Netlify Configuration

The project includes a `netlify.toml` file.

This file tells Netlify how to deploy the app:

```toml
[build]
publish = "."
functions = "netlify/functions"
command = "npm install"
```

This means:

- The whole project root is deployed as the website
- Netlify Functions are loaded from `netlify/functions`
- Dependencies are installed with `npm install`

---

## Project Structure

```text
Decryptor/
├── netlify/
│   └── functions/
│       └── party.mjs
├── index.html
├── manifest.json
├── netlify.toml
├── package.json
└── README.md
```

---

## Built For

- FTC competitions
- Real-time scouting
- Multi-scout coordination
- Fast strategic decisions
- Cross-device team access

---

## Future Improvements

- Advanced analytics
- CSV or Google Sheets export
- Offline scouting mode
- Match replay visualization

---

## Repository Description

Modern FTC scouting web app with an interactive field, real-time sync, and one-click Netlify deployment for cross-device team use.

---

## License

Internal team use or open-source depending on your preference.
