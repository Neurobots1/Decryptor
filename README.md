# Decryptor Scouting for the FTC DECODE Season

Modern FTC scouting web app with an interactive field, real-time sync, and one-click Netlify deployment for cross-device team use.

---

## Overview

Decryptor Scouting is a competition-ready FTC scouting web app designed to help teams collect match data quickly, coordinate between scouts, and access scouting information from any device using one shared link.

The app is built for the FTC DECODE season and can be hosted for free on Netlify.

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

1. Fork the GitHub repository and deploy it directly from Netlify
2. Deploy manually from your computer using the Netlify CLI

The recommended method is Option 1.

---

## Option 1: Fork the Repo and Deploy with Netlify

This is the easiest method. You do not need to download the files to your computer.

Netlify will pull the project directly from GitHub, install what it needs, and deploy the website.

### 1. Fork this repository

Open the GitHub repository:

```text
https://github.com/Neurobots1/Decryptor
```

Click:

```text
Fork
```

This creates your own copy of the project on your GitHub account.

### 2. Create a Netlify account

Go to:

```text
https://netlify.com
```

Create a free account or log in.

### 3. Import the GitHub project

In Netlify, go to:

```text
Add new site → Import an existing project
```

Under `Import a Git repository`, choose:

```text
GitHub
```

Authorize Netlify to access your GitHub account if it asks.

### 4. Select your forked repository

Find and select the repo you just forked.

It will usually be named:

```text
Decryptor
```

### 5. Configure the deploy settings

Netlify should automatically detect most settings from the `netlify.toml` file.

Use these settings:

```text
Branch to deploy: main
Base directory: leave empty
Build command: npm install
Publish directory: .
Functions directory: netlify/functions
```

The publish directory must be a single dot:

```text
.
```

The single dot means the project root will be deployed as the website.

### 6. Deploy the site

Click:

```text
Deploy site
```

Netlify will deploy your copy of Decryptor Scouting and give you a live URL.

The URL will look something like:

```text
https://your-site-name.netlify.app
```

### 7. Future updates

If you make changes to your fork and push them to GitHub, Netlify will automatically redeploy the website.

---

## Option 2: Deploy Manually with Netlify CLI

Use this option only if you want to deploy the app manually from your computer.

For this method, the project files must be on your computer.

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

After deployment, Netlify will give you a live URL.

### 6. Updating the app

After making changes, run the deploy command again from the same folder:

```bash
netlify deploy --prod
```

Your Netlify URL will stay the same, but the website will update with the newest version.

---

## Do You Need the Files on Your Computer?

Only if you use the Netlify CLI method.

If you use the recommended GitHub method, you do not need to download the files manually.

You can simply:

1. Fork the repository
2. Link the fork to Netlify
3. Deploy from Netlify

Netlify will pull the files directly from GitHub and deploy the website, including the Netlify Functions used for Party Sync.

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
