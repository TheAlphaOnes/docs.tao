# Cook auth

Authentication and user management commands for Cook CLI.

## Usage

```bash
cook auth [COMMAND]
```

## Commands

### auth login

Login to your Cook account using a connection key.

```bash
cook auth login [CONNECTION_KEY]
```

**Interactive Login:**
```bash
$ cook auth login

============================================================
🔑 Get Your Connection Key First:
   https://cook.taohq.org/app
   1. Login to your account
   2. Go to Settings → API Keys
   3. Copy your connection key
============================================================

Connection key: [enter your key]
```

**Direct Login:**
```bash
$ cook auth login your_connection_key_here
```

### auth logout

Logout from your Cook account and clear stored credentials.

```bash
cook auth logout
```

### auth now

Show current authentication status and user information.

```bash
$ cook auth now
           Current User Information
┌────────────────┬────────────────────────────┐
│ Username       │ developer                  │
│ Full name      │ John Developer             │
│ Connection key │ cook_con...xyz123          │
│ Email          │ developer@example.com      │
└────────────────┴────────────────────────────┘
✓ Authentication verified
```

## Description

The auth commands manage your Cook CLI authentication with the Cook platform. Authentication is required for:

- Creating and uploading templates
- Accessing your personal templates
- Syncing data with the Cook platform

## Getting Your Connection Key

1. Visit [https://cook.taohq.org/app](https://cook.taohq.org/app)
2. Login to your account
3. Go to Settings → API Keys
4. Copy your connection key
5. Use it with `cook auth login`

## Options

### login
- `CONNECTION_KEY` (optional): Your Cook connection key. If not provided, you'll be prompted interactively.

### logout
No additional options.

### now
No additional options.

## Notes

- Connection keys are securely stored locally after login
- The `auth now` command masks most of your connection key for security
- You must be logged in to use template management features
- Logout clears all stored authentication data
