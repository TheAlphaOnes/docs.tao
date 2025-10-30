# cook cmd

**Command execution and management** - Manage and execute local project commands and system-wide commands.

---

## Table of Contents

- [Overview](#overview)
- [Command Structure](#command-structure)
- [Local Commands](#local-commands)
  - [cook cmd list](#cook-cmd-list)
  - [cook cmd run](#cook-cmd-run)
  - [cook cmd add](#cook-cmd-add)
  - [cook cmd update](#cook-cmd-update)
- [System Commands](#system-commands)
  - [cook cmd sys list](#cook-cmd-sys-list)
  - [cook cmd sys add](#cook-cmd-sys-add)
  - [cook cmd sys run](#cook-cmd-sys-run)
  - [cook cmd sys update](#cook-cmd-sys-update)
  - [cook cmd sys remove](#cook-cmd-sys-remove)
- [Use Cases](#use-cases)
- [Best Practices](#best-practices)
- [Troubleshooting](#troubleshooting)

---

## Overview

The `cook cmd` command group provides a powerful way to manage and execute commands in two scopes:

1. **Local Commands** - Project-specific command groups defined in `cook.config.json`
2. **System Commands** - User-level commands that work across all projects, stored in your system configuration

### Key Features

✅ **Interactive Management** - All commands support fully interactive workflows
✅ **Beautiful Display** - Clean, numbered output with syntax highlighting
✅ **Hot Reload** - Run commands with automatic restart on file changes
✅ **Cross-Project** - System commands work anywhere on your machine
✅ **Zero Configuration** - Start using immediately

---

## Command Structure

```bash
cook cmd [OPTIONS] COMMAND [ARGS]...
```

### Available Commands

| Command | Description |
|---------|-------------|
| `list` | List all local command groups |
| `run` | Run a local command group |
| `add` | Add a new local command group |
| `update` | Update an existing local command group |
| `sys` | System-level command management (sub-commands) |

### System Sub-Commands

| Command | Description |
|---------|-------------|
| `sys add` | Add a new system command |
| `sys list` | List all system commands |
| `sys run` | Run a system command |
| `sys update` | Update an existing system command |
| `sys remove` | Remove a system command |

---

## Local Commands

Local commands are defined in your project's `cook.config.json` file. They are project-specific and only available when you're in that project directory.

### cook cmd list

List all local command groups in the current project.

**Usage:**
```bash
cook cmd list
```

**Example Output:**
```
Local Command Groups:

  serve
    1. python3 -m http.server 8000

  build
    1. echo "BUILDING COOK"
    2. rm -rf dist/cook
    3. sleep 5
    4. pyinstaller cook.spec
    5. echo "BUILD COMPLETE"

  clean
    1. echo "CLEANED FOLDER"

  dev
    1. code .

Total: 4 command group(s)
```

**Features:**
- 🎨 Clean, numbered display
- 📊 Shows all commands in each group
- 📈 Displays total count

**When to Use:**
- Check available command groups before running
- Verify your cook.config.json configuration
- Review project automation setup

---

### cook cmd run

Run a command group from your project configuration.

**Usage:**
```bash
# Run a specific group
cook cmd run <group>

# Run with hot reload (auto-restart on file changes)
cook cmd run <group> --hot

# Interactive selection
cook cmd run
```

**Arguments:**
- `group` - Name of the command group to execute (optional, prompts if not provided)

**Options:**
- `--hot` - Enable hot reload mode (watches for file changes and restarts)

**Example 1: Run Specific Group**
```bash
$ cook cmd run clean

Running commands in group: clean
→ Executing: echo "CLEANED FOLDER"
CLEANED FOLDER
✔ Command succeeded: echo "CLEANED FOLDER"
```

**Example 2: Interactive Selection**
```bash
$ cook cmd run

[?] Select command group to run:
 > serve
   build
   clean
   dev

Running commands in group: serve
→ Executing: python3 -m http.server 8000
Serving HTTP on 0.0.0.0 port 8000...
```

**Example 3: Hot Reload Mode**
```bash
$ cook cmd run dev --hot

✅ Starting hot reload for group: dev

→ Watching directory: .
→ Ignoring: node_modules, .git, dist

→ Executing: npm run dev
✔ Command succeeded: npm run dev

[Server running]

👁️  Watching for changes...

📝 File changed: src/app.ts
→ Restarting processes...
```

**Hot Reload Features:**
- Watches current directory for changes
- Automatically ignores common directories (node_modules, .git, etc.)
- Restarts all commands in the group when files change
- Shows clear status messages

---

### cook cmd add

Add a new command group to your project's `cook.config.json`.

**Usage:**
```bash
cook cmd add
```

**Interactive Workflow:**
```bash
$ cook cmd add

Enter local command group name:: dev
Enter commands for this group (one per line, empty line to finish):
Command 1:: npm install
Command 2:: npm run dev
Command 3::

Added local command group: dev
```

**What Happens:**
1. Prompts for a command group name
2. Asks for commands one by one
3. Press Enter on empty line to finish
4. Saves to `cook.config.json`

**Example: Development Setup**
```bash
$ cook cmd add

Enter local command group name:: fullstack
Enter commands for this group (one per line, empty line to finish):
Command 1:: docker-compose up -d
Command 2:: npm install
Command 3:: npm run migrate
Command 4:: npm run dev
Command 5::

Added local command group: fullstack
```

**Tips:**
- ✅ Use descriptive group names (`dev`, `build`, `test`, `deploy`)
- ✅ Commands run in order
- ✅ If one command fails, execution stops
- ❌ Don't duplicate group names (use `update` instead)

---

### cook cmd update

Update an existing command group in `cook.config.json`.

**Usage:**
```bash
cook cmd update
```

**Interactive Workflow:**
```bash
$ cook cmd update

[?] Select command group to update:
 > serve
   build
   clean
   dev

Current commands for serve:
  1. python3 -m http.serve 8080

Enter new commands (one per line, empty line to finish):
Command 1:: python3 -m http.server 8000
Command 2::

Updated local command group: serve
```

**What Happens:**
1. Shows list of existing command groups
2. Displays current commands for selected group
3. Prompts for new commands (replaces all existing)
4. Updates `cook.config.json`

**Example: Add Commands to Group**
```bash
$ cook cmd update

[?] Select command group to update:
 > build

Current commands for build:
  1. npm run build

Enter new commands (one per line, empty line to finish):
Command 1:: npm run lint
Command 2:: npm run test
Command 3:: npm run build
Command 4::

Updated local command group: build
```

**Important Notes:**
- ⚠️ **Replaces ALL commands** in the group (not append)
- ✅ Review current commands before updating
- ✅ Re-enter all commands you want to keep

---

## System Commands

System commands are stored in your user data directory and work across all projects. They're perfect for frequently-used commands, utilities, and personal workflows.

**Storage Location:**
- **macOS**: `~/Library/Application Support/cook/sys_commands.json`
- **Linux**: `~/.config/cook/sys_commands.json`
- **Windows**: `%APPDATA%/cook/sys_commands.json`

---

### cook cmd sys list

List all system commands.

**Usage:**
```bash
cook cmd sys list
```

**Example Output:**
```
System Commands:

  building
    1. echo "BUILDINGGGGGGGGG........."

  mycode — move to my code folder
    1. cd /Users/vishnu_mac/Desktop/room

Total: 2 system command(s)
```

**Features:**
- 🎨 Clean, numbered display
- 📝 Shows command descriptions
- 📊 Displays all commands in each system command
- 📈 Shows total count

---

### cook cmd sys add

Add a new system command.

**Usage:**
```bash
cook cmd sys add
```

**Interactive Workflow:**
```bash
$ cook cmd sys add

Enter command name:: server
Enter description (optional):: Quick HTTP server on port 8000
Enter commands (one per line, empty line to finish):
Command 1:: python3 -m http.server 8000
Command 2::

Added system command: server
```

**What Happens:**
1. Prompts for command name (unique identifier)
2. Asks for optional description
3. Collects commands one by one
4. Saves to system configuration

**Example 1: Simple Utility**
```bash
$ cook cmd sys add

Enter command name:: cleanup
Enter description (optional):: Clean Docker and npm cache
Enter commands (one per line, empty line to finish):
Command 1:: docker system prune -f
Command 2:: npm cache clean --force
Command 3::

Added system command: cleanup
```

**Example 2: Multi-Step Workflow**
```bash
$ cook cmd sys add

Enter command name:: deploy
Enter description (optional):: Build and deploy to production
Enter commands (one per line, empty line to finish):
Command 1:: npm run build
Command 2:: npm run test
Command 3:: scp -r dist/ user@server:/var/www/
Command 4::

Added system command: deploy
```

**Example 3: Directory Navigation**
```bash
$ cook cmd sys add

Enter command name:: projects
Enter description (optional):: Navigate to projects folder
Enter commands (one per line, empty line to finish):
Command 1:: cd ~/Development/Projects
Command 2:: ls -la
Command 3::

Added system command: projects
```

**Tips:**
- ✅ Use short, memorable names
- ✅ Add clear descriptions
- ✅ Commands you run multiple times daily
- ✅ Works from any directory

---

### cook cmd sys run

Run a system command interactively.

**Usage:**
```bash
cook cmd sys run
```

**Interactive Workflow:**
```bash
$ cook cmd sys run

[?] Select system command to run:
 > server — Quick HTTP server on port 8000
   cleanup — Clean Docker and npm cache
   mycode — move to my code folder

Running system command: server

→ Executing: python3 -m http.server 8000
Serving HTTP on 0.0.0.0 port 8000...
```

**What Happens:**
1. Shows list of all system commands with descriptions
2. Select command to run
3. Executes all commands in sequence
4. Shows execution status

**Example: Quick Cleanup**
```bash
$ cook cmd sys run

[?] Select system command to run:
 > cleanup — Clean Docker and npm cache

Running system command: cleanup

→ Executing: docker system prune -f
Deleted Containers: 5
Deleted Images: 12
✔ Command succeeded

→ Executing: npm cache clean --force
npm cache verified
✔ Command succeeded
```

---

### cook cmd sys update

Update an existing system command.

**Usage:**
```bash
cook cmd sys update
```

**Interactive Workflow:**
```bash
$ cook cmd sys update

[?] Select command to update:
 > server — Quick HTTP server on port 8000
   cleanup — Clean Docker and npm cache

Selected: server

Current description: Quick HTTP server on port 8000
New description: HTTP server with custom port
Current commands:
  1. python3 -m http.server 8000

Enter new commands (one per line, empty line to finish):
Command 1:: python3 -m http.server 8080
Command 2:: echo "Server running on http://localhost:8080"
Command 3::

Updated system command: server
```

**What Happens:**
1. Select command to update
2. Shows current description and commands
3. Prompts for new description
4. Prompts for new commands (replaces all)
5. Updates system configuration

**Important:**
- ⚠️ **Replaces ALL commands** (not append)
- ✅ Description is optional (press Enter to keep current)
- ✅ Re-enter all commands you want to keep

---

### cook cmd sys remove

Remove a system command.

**Usage:**
```bash
cook cmd sys remove
```

**Interactive Workflow:**
```bash
$ cook cmd sys remove

[?] Select command to remove:
 > oldcommand — Deprecated command
   testcmd — Test command

Selected: oldcommand

⚠️  Are you sure you want to remove 'oldcommand'? (y/n): y

✔ Removed system command: oldcommand
```

**What Happens:**
1. Shows list of system commands
2. Select command to remove
3. Asks for confirmation
4. Deletes from system configuration

**Safety:**
- ✅ Requires confirmation
- ✅ Shows command name before deletion
- ✅ Type 'n' to cancel

---

## Use Cases

### 1. Development Workflows

**Local Commands (Project-Specific):**
```json
{
  "cmd": {
    "dev": [
      "npm install",
      "npm run dev"
    ],
    "build": [
      "npm run lint",
      "npm run test",
      "npm run build"
    ],
    "deploy": [
      "npm run build",
      "./deploy.sh"
    ]
  }
}
```

**System Commands (Any Project):**
```bash
# Quick server
cook cmd sys add
# name: serve
# commands: python3 -m http.server 8000

# Database reset
cook cmd sys add
# name: dbreset
# commands: dropdb mydb && createdb mydb
```

---

### 2. Multi-Service Projects

**Full Stack Development:**
```bash
cook cmd add
# name: fullstack
# commands:
#   docker-compose up -d postgres redis
#   npm run migrate
#   npm run dev
```

**Microservices:**
```bash
cook cmd add
# name: services
# commands:
#   cd services/auth && npm run dev &
#   cd services/api && npm run dev &
#   cd services/web && npm run dev
```

---

### 3. Build & Deployment

**Production Build:**
```bash
cook cmd add
# name: prod-build
# commands:
#   npm run lint
#   npm run test
#   npm run build
#   npm run bundle
```

**System-Wide Deploy:**
```bash
cook cmd sys add
# name: deploy-staging
# commands:
#   npm run build
#   scp -r dist/ user@staging:/var/www/
#   ssh user@staging 'systemctl restart app'
```

---

### 4. Cleanup & Maintenance

**Project Cleanup:**
```bash
cook cmd add
# name: clean
# commands:
#   rm -rf node_modules dist coverage
#   npm cache clean --force
```

**System-Wide Cleanup:**
```bash
cook cmd sys add
# name: cleanup-all
# commands:
#   docker system prune -af
#   npm cache clean --force
#   brew cleanup
```

---

### 5. Git Workflows

**System Commands for Git:**
```bash
cook cmd sys add
# name: gitpush
# commands:
#   git add .
#   git commit -m "Update"
#   git push origin main

cook cmd sys add
# name: feature
# commands:
#   git checkout -b feature/new-feature
#   git push -u origin feature/new-feature
```

---

## Best Practices

### 1. Command Naming

✅ **Good Names:**
- `dev` - Start development server
- `build` - Build for production
- `test` - Run test suite
- `deploy` - Deploy application
- `clean` - Cleanup temporary files

❌ **Avoid:**
- `d`, `b`, `t` - Too short, not descriptive
- `do-everything` - Too broad
- `asdf` - No meaning

---

### 2. Command Organization

**Local vs System:**

| Use Local Commands For | Use System Commands For |
|------------------------|-------------------------|
| Project-specific builds | General utilities |
| Project dependencies | Personal workflows |
| Project test suites | Cross-project tools |
| Project deployment | System maintenance |

**Example:**
```bash
# Local (project-specific)
cook cmd add  # name: build
  # → npm run build

# System (works anywhere)
cook cmd sys add  # name: server
  # → python3 -m http.server 8000
```

---

### 3. Command Descriptions

✅ **Good Descriptions:**
- "Quick HTTP server on port 8000"
- "Clean Docker containers and npm cache"
- "Build and deploy to staging server"

❌ **Avoid:**
- "Server" - Too vague
- "Command" - No information
- "" - Empty

---

### 4. Command Structure

✅ **Sequential Commands:**
```bash
# Good - each command depends on previous
npm install
npm run migrate
npm run dev
```

✅ **Independent Commands:**
```bash
# Good - can run independently
echo "Starting..."
npm run build
echo "Complete!"
```

❌ **Avoid:**
```bash
# Bad - mixing unrelated tasks
npm install
docker-compose up
git pull
terraform apply
```

---

### 5. Error Handling

**Commands stop on first error:**
```bash
# If npm install fails, npm run dev won't run
cook cmd run dev
  1. npm install  ← fails here
  2. npm run dev  ← never runs
```

**Solution: Handle errors in scripts:**
```bash
# Create a script that handles errors
cook cmd add
# name: dev-safe
# commands:
#   npm install || echo "Install failed"
#   npm run dev || echo "Dev failed"
```

---

## Troubleshooting

### No Command Groups Found

**Problem:**
```bash
$ cook cmd list
No command groups found in cook.config.json.
```

**Solution:**
1. Check if `cook.config.json` exists in current directory
2. Verify the file has a `cmd` section
3. Add a command group:
```bash
cook cmd add
```

---

### Command Group Already Exists

**Problem:**
```bash
$ cook cmd add
Enter local command group name:: dev
Error: Command group 'dev' already exists.
```

**Solution:**
- Use `cook cmd update` instead to modify existing group
- Choose a different name
- Check existing groups with `cook cmd list`

---

### System Command Name Conflict

**Problem:**
```bash
$ cook cmd sys add
Enter command name:: server
Error: System command 'server' already exists.
```

**Solution:**
- Use `cook cmd sys update` to modify existing command
- Choose a different name
- Check existing commands with `cook cmd sys list`
- Remove old command first: `cook cmd sys remove`

---

### Hot Reload Not Working

**Problem:**
Hot reload doesn't detect changes or restart commands.

**Solution:**
1. Check if watching the right directory
2. Ensure files aren't in ignored directories (node_modules, .git, dist)
3. Try running without hot reload first to verify commands work
4. Check file system permissions

---

### Commands Run in Wrong Directory

**Problem:**
System commands that use relative paths don't work.

**Solution:**
Use absolute paths in system commands:
```bash
# Bad
cd projects/myapp

# Good
cd ~/Development/projects/myapp
# Or
cd /Users/username/Development/projects/myapp
```

---

### Empty Command Error

**Problem:**
```bash
Enter commands (one per line, empty line to finish):
Command 1::
Error: At least one command is required.
```

**Solution:**
- Enter at least one command before pressing Enter on empty line
- Commands cannot be empty strings

---

## Related Commands

- **[cook run](run.md)** - Alternative syntax for running local commands
- **[cook init](init.md)** - Initialize project with cook.config.json
- **[cook version](version.md)** - Check Cook CLI version

---

## Quick Reference

### Local Commands
```bash
cook cmd list              # List command groups
cook cmd run <group>       # Run command group
cook cmd run <group> --hot # Run with hot reload
cook cmd add               # Add command group
cook cmd update            # Update command group
```

### System Commands
```bash
cook cmd sys list    # List system commands
cook cmd sys add     # Add system command
cook cmd sys run     # Run system command
cook cmd sys update  # Update system command
cook cmd sys remove  # Remove system command
```

---

**Next Steps:**
- [View Workflow Examples](../workflows.md)
- [Learn About Hot Reload](../hot-reload.md)
- [Explore Tool Commands](tool.md)
