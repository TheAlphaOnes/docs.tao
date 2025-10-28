# Quick Start Guide

Get up and running with Cook CLI in 5 minutes!

## Prerequisites

Before you start, make sure you have:
- Python 3.8+ installed
- Git installed
- A Cook account (sign up at [cook.thealpha.one](https://cook.thealpha.one))

## Installation

```bash
# Clone the repository
git clone https://github.com/TheAlphaOnes/cook-cli.git
cd cook-cli

# Install dependencies
pip install -r requirements.txt

# Verify installation
python3 main.py --help
```

## Basic Setup

### Step 1: Authenticate

Get your connection key from the Cook platform and login:

```bash
$ cook auth login

Enter your connection key: xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx

✅ Login successful!
👤 Logged in as: yourname
```

### Step 2: Initialize a Project

Create a new project configuration:

```bash
$ cook init

Enter project name: my-awesome-app
Enter author name: yourname
Enable stir mode? (y/n): y

✅ cook.config.json has been created successfully.
```

This creates a `cook.config.json` file in your current directory.

## Common Workflows

### Use a Template

Start a new project from a template:

```bash
# Interactive mode - browse available templates
$ cook mold use

# Direct mode - specify template name
$ cook bake username/@web/react-vite-starter

📥 Downloading template: username/@web/react-vite-starter
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 100%
✅ Template downloaded successfully!
🍳 Baking template into current directory...
✅ Template baked successfully!
```

### Run Commands

Execute commands defined in your project:

```bash
# List available command groups
$ cook cmd list

Available command groups:
  dev      - Development commands
  build    - Build commands
  deploy   - Deployment commands

# Run a command group
$ cook run dev

→ Executing: npm install
✔ Command succeeded: npm install

→ Executing: npm run dev
✔ Command succeeded: npm run dev
```

### Hot Reload Development

Watch for file changes and auto-restart commands:

```bash
$ cook run dev --hot

✅ Starting hot reload for group: dev

→ Watching directory: .
→ Ignoring: node_modules, .git, dist

→ Executing: npm run dev
✔ Command succeeded: npm run dev

👁️  Watching for changes...

# Your dev server will auto-restart on file changes
```

### Create a Template

Share your project as a template:

```bash
$ cook mold create

📦 Creating template from current directory

Template name: my-starter-template
Category:
> web
  mobile
  backend

Description: My awesome starter template
Tech stack: react,typescript,vite
GitHub repository: https://github.com/you/template
Version: 1.0.0

📦 Packing template...
✅ Template packed: my-starter-template.tar.zst

📤 Uploading template...
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 100%
✅ Template created successfully!
```

### Global Commands

Create commands that work across all projects:

```bash
# Add a global command
$ cook cmd global add

Enter command name: server
Enter description: Quick HTTP server

Enter commands (one per line, empty line to finish):
Command 1: python -m http.server 8000
Command 2:

✔ Added global command: server

# Run it anywhere
$ cook cmd global run

Select global command to run:
> server — Quick HTTP server

→ Executing: python -m http.server 8000
Serving HTTP on 0.0.0.0 port 8000 ...
```

## Essential Commands

Here are the most common commands you'll use:

```bash
# Authentication
cook auth login          # Login to your account
cook auth now            # Check auth status
cook auth logout         # Logout

# Project Setup
cook init                # Initialize project
cook bake <template>     # Use a template

# Command Execution
cook run <group>         # Run command group
cook run <group> --hot   # Run with hot reload

# Template Management
cook mold create         # Create template
cook mold use            # Use template
cook mold list           # List templates

# Global Commands
cook cmd global add      # Add global command
cook cmd global run      # Run global command
cook cmd global list     # List global commands

# Development Tools
cook tool loc            # Count lines of code
cook tool tree           # Show directory tree
cook tool licence        # Add license
```

## Configuration File

After running `cook init`, your `cook.config.json` looks like this:

```json
{
  "name": "my-awesome-app",
  "author": "yourname",
  "version": "0.1.0",
  "description": "",
  "stir": {
    "mode": "enabled"
  },
  "cmd": {
    "dev": [
      "npm install",
      "npm run dev"
    ],
    "build": [
      "npm run build"
    ]
  }
}
```

### Add Command Groups

Edit the `cmd` section to add your commands:

```json
{
  "cmd": {
    "dev": [
      "npm install",
      "npm run dev"
    ],
    "test": [
      "npm run test",
      "npm run lint"
    ],
    "deploy": [
      "npm run build",
      "docker build -t myapp .",
      "docker push myapp"
    ]
  }
}
```

Then run them with:

```bash
cook run dev
cook run test
cook run deploy --hot
```

## Next Steps

Now that you're up and running, explore more features:

- **[Template Management](templates.md)** - Deep dive into templates
- **[Command Execution](command-execution.md)** - Advanced command usage
- **[Global Commands](global-commands.md)** - User-level automation
- **[Workflows](workflows.md)** - Real-world examples
- **[Tool Commands](commands/tool.md)** - Development utilities

## Helpful Tips

1. **Use `--help` often** - Every command has detailed help:
   ```bash
   cook --help
   cook mold --help
   cook cmd global --help
   ```

2. **Hot reload for development** - Always use `--hot` during development:
   ```bash
   cook run dev --hot
   ```

3. **Global commands for common tasks** - Add frequently used commands as global:
   ```bash
   cook cmd global add
   # Name: cleanup
   # Commands: docker system prune -f
   #          npm cache clean --force
   ```

4. **Debug mode** - Set `COOK_DEBUG=1` for detailed error messages:
   ```bash
   COOK_DEBUG=1 cook run dev
   ```

5. **Check auth status** - Before template operations:
   ```bash
   cook auth now
   ```

## Troubleshooting

### Not authenticated
```bash
$ cook mold create
❌ Error: Not authenticated

# Solution:
$ cook auth login
```

### Command group not found
```bash
$ cook run dev
❌ Error: Command group 'dev' not found

# Solution: Check available groups
$ cook cmd list

# Or add the group to cook.config.json
```

### Template not found
```bash
$ cook bake user/@web/template
❌ Error: Template not found

# Solution: List available templates
$ cook mold list

# Or check the template name format
```

For more troubleshooting, see the [Troubleshooting Guide](troubleshooting.md).

---

**Quick Links:**
- [Installation Guide](installation.md)
- [Full Documentation](README.md)
- [Command Reference](commands/init.md)
