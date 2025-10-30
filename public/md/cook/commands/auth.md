# cook auth

Authentication commands for Cook CLI.

## Synopsis

```bash
cook auth <subcommand> [OPTIONS]
```

## Description

The `cook auth` command group manages authentication for Cook CLI. You need to be authenticated to create templates, upload to the platform, and access private templates.

## Subcommands

| Command | Description |
|---------|-------------|
| `login` | Login to your Cook account |
| `logout` | Logout and clear credentials |
| `now` | Show current authentication status |

---

## cook auth login

Login to your Cook account using a connection key.

### Synopsis

```bash
cook auth login [--key <connection_key>]
```

### Options

#### --key
- **Type:** String (optional)
- **Description:** Your connection key for non-interactive login
- **Example:** `cook auth login --key xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx`

### Interactive Login

```bash
$ cook auth login

Enter your connection key: xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx

✅ Login successful!
👤 Logged in as: johndoe
```

### Non-Interactive Login

```bash
$ cook auth login --key xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx

✅ Login successful!
👤 Logged in as: johndoe
```

### Getting Your Connection Key

1. Visit the Cook platform: [cook.taohq.org](https://cook.taohq.org)
2. Sign up or log in to your account
3. Navigate to Settings → API Keys
4. Copy your connection key
5. Use it with `cook auth login`

### Examples

**Example 1: First Time Login**
```bash
$ cook auth login

Enter your connection key: abc123-def456-ghi789

✅ Login successful!
👤 Logged in as: alice
```

**Example 2: Scripted Login**
```bash
#!/bin/bash
KEY="abc123-def456-ghi789"
cook auth login --key "$KEY"
```

**Example 3: Environment Variable**
```bash
# .env
export COOK_API_KEY="abc123-def456-ghi789"

# Login script
cook auth login --key "$COOK_API_KEY"
```

---

## cook auth logout

Logout and clear stored credentials.

### Synopsis

```bash
cook auth logout
```

### Usage

```bash
$ cook auth logout

✅ Logged out successfully.
```

### What Gets Cleared

- Stored connection key
- User session data
- Cached credentials

### When to Logout

- Switching accounts
- Security best practices on shared systems
- After completing template operations
- Before uninstalling Cook CLI

### Examples

**Example 1: Simple Logout**
```bash
$ cook auth logout
✅ Logged out successfully.

$ cook auth now
❌ Not authenticated
```

**Example 2: Switch Accounts**
```bash
# Logout from current account
$ cook auth logout
✅ Logged out successfully.

# Login with different account
$ cook auth login
Enter your connection key: different-key-here
✅ Login successful!
👤 Logged in as: bob
```

---

## cook auth now

Show current authentication status and user information.

### Synopsis

```bash
cook auth now
```

### Usage

```bash
$ cook auth now

👤 Logged in as: johndoe
📧 Email: johndoe@example.com
🔑 Account ID: 12345
```

### When Not Authenticated

```bash
$ cook auth now

❌ Not authenticated
💡 Run 'cook auth login' to authenticate
```

### Examples

**Example 1: Check Before Operations**
```bash
# Verify authentication before creating template
$ cook auth now
👤 Logged in as: alice

$ cook mold create
# Proceeds with template creation
```

**Example 2: Verify Successful Login**
```bash
$ cook auth login
Enter your connection key: xxx-xxx-xxx

$ cook auth now
👤 Logged in as: alice
✅ Ready to use Cook CLI
```

**Example 3: Script Usage**
```bash
#!/bin/bash

# Check if authenticated
if cook auth now &>/dev/null; then
  echo "Authenticated - proceeding"
  cook mold create
else
  echo "Not authenticated - please login"
  cook auth login
fi
```

---

## Authentication Workflow

### Complete Authentication Flow

```bash
# Step 1: Get your key from the platform
# Visit: cook.taohq.org → Settings → API Keys

# Step 2: Login
$ cook auth login
Enter your connection key: xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
✅ Login successful!
👤 Logged in as: yourname

# Step 3: Verify
$ cook auth now
👤 Logged in as: yourname

# Step 4: Use Cook features
$ cook mold create
$ cook mold list

# Step 5: Logout when done (optional)
$ cook auth logout
✅ Logged out successfully.
```

## Security Best Practices

### 1. Keep Your Key Secret

```bash
# DON'T commit keys to version control
# Add to .gitignore:
.env
.cook-credentials

# DON'T share keys in public
# DON'T hardcode keys in scripts
```

### 2. Use Environment Variables

```bash
# Store in environment variable
export COOK_API_KEY="your-key-here"

# Use in scripts
cook auth login --key "$COOK_API_KEY"
```

### 3. Logout on Shared Systems

```bash
# Always logout on shared computers
cook auth logout
```

### 4. Rotate Keys Regularly

```bash
# Generate new key on the platform
# Login with new key
cook auth login --key new-key

# Old key is invalidated
```

## Credential Storage

Cook stores credentials securely:

- **macOS:** `~/Library/Application Support/cook/`
- **Linux:** `~/.config/cook/`
- **Windows:** `%APPDATA%/cook/`

Credentials are stored in:
```
cook/auth.json
```

## Troubleshooting

### Invalid Connection Key

```bash
$ cook auth login
Enter your connection key: invalid-key

❌ Error: Invalid connection key
```

**Solution:**
- Verify key from the platform
- Check for typos
- Ensure no extra spaces
- Generate a new key if needed

### Network Error

```bash
$ cook auth login
❌ Error: Network error. Could not connect to Cook platform.
```

**Solution:**
- Check internet connection
- Verify platform is accessible
- Try again later
- Use debug mode: `COOK_DEBUG=1 cook auth login`

### Permission Denied

```bash
$ cook auth login
❌ Error: Permission denied: cannot write credentials
```

**Solution:**
- Check directory permissions
- Ensure config directory exists: `mkdir -p ~/.config/cook`
- Try with different user

### Already Authenticated

```bash
$ cook auth login
⚠️  Already logged in as: johndoe
Continue with new login? (y/n):
```

**Solution:**
- Type `n` to keep current session
- Type `y` to login with different account
- Or logout first: `cook auth logout`

## Environment Variables

### COOK_API_KEY
Set default connection key:

```bash
export COOK_API_KEY="your-key-here"
cook auth login --key "$COOK_API_KEY"
```

### COOK_API_URL
Override API endpoint (advanced):

```bash
export COOK_API_URL="https://custom.api.com"
cook auth login
```

## Scripting

### Automated Login

```bash
#!/bin/bash
# automated-login.sh

KEY_FILE=".cook-key"

if [ -f "$KEY_FILE" ]; then
  KEY=$(cat "$KEY_FILE")
  cook auth login --key "$KEY"
else
  echo "Error: Key file not found"
  exit 1
fi
```

### Check Authentication

```bash
#!/bin/bash

if cook auth now &>/dev/null; then
  echo "✓ Authenticated"
  exit 0
else
  echo "✗ Not authenticated"
  exit 1
fi
```

### CI/CD Integration

```yaml
# .github/workflows/deploy.yml
name: Deploy Template

on: [push]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2

      - name: Authenticate
        run: cook auth login --key ${{ secrets.COOK_API_KEY }}

      - name: Create Template
        run: cook mold create
```

## Related Commands

- **[cook mold create](mold.md#create)** - Requires authentication
- **[cook mold list](mold.md#list)** - Shows public and private templates
- **[cook bake](bake.md)** - Download templates (may require auth)

## See Also

- [Quick Start Guide](../quickstart.md#authentication)
- [Security Best Practices](../advanced.md#security)
- [Troubleshooting](../troubleshooting.md#authentication-issues)

---

**Next:** [cook mold](mold.md) - Template management commands
