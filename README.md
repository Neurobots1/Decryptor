# Decryptor Scouting for the FTC DECODE Season

Modern FTC scouting web app with an interactive field, real-time sync, and seamless Netlify deployment for cross-device team use.

---

## Overview

Decryptor Scouting is a competition-ready web app designed to:

- Scout matches in real time
- Track robot performance on an interactive field
- Sync data across multiple devices
- Run instantly from a shared URL

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

## Deploy to Netlify

This project can be deployed with Netlify so the whole team can access it from one shared link.

---

## Option 1: Deploy with Netlify CLI

### 1. Install prerequisites

- Node.js v18 or newer
- A free Netlify account
- This project folder on your computer

### 2. Install Netlify CLI

```bash
npm install -g netlify-cli
```

### 3. Log in to Netlify

```bash
netlify login
```

A browser window will open. Log in to your Netlify account and approve access. After logging in, return to the terminal.

### 4. Navigate to the project folder

```bash
cd path/to/decryptor-scouting
```

Replace `path/to/decryptor-scouting` with the actual location of the project folder on your computer.

Example:

```bash
cd Desktop/decryptor-scouting
```

### 5. Deploy the app

```bash
netlify deploy --prod
```

When Netlify asks for the publish directory, enter:

```text
.
```

The single dot means the current folder will be deployed.

Netlify will upload the project and give you a live URL, for example:

```text
https://your-site-name.netlify.app
```

### 6. Updating the app

After making changes to the project, run the deploy command again from the same folder:

```bash
netlify deploy --prod
```

Your Netlify URL will stay the same, but the website will update with the newest version.

---

## Option 2: Link GitHub to Netlify

You can also connect this GitHub repository directly to Netlify. This is useful because every time you push an update to GitHub, Netlify can automatically redeploy the app.

### 1. Go to Netlify

Open:

```text
https://netlify.com
```

Log in to your Netlify account.

### 2. Create a new site

In the Netlify dashboard:

```text
Add new site → Import an existing project
```

### 3. Connect GitHub

Choose GitHub as the provider and authorize Netlify to access your repositories.

### 4. Select the repository

Choose the repository for this project:

```text
decryptor-scouting
```

### 5. Configure deploy settings

Use these settings:

```text
Build command: leave empty
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

Netlify will build and deploy the project. Once it finishes, it will give you a live URL.

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

Do not delete them or syncing will stop working.

---

## Project Structure

```text
decryptor-scouting/
├── netlify/
│   └── functions/
├── netlify.toml
├── src/
├── public/
└── index.html
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

## License

Internal team use or open-source depending on your preference.
