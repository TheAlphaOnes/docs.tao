# cook cmd

Command execution and management - run local commands and manage global commands.

## Synopsis

```bash
cook cmd <subcommand> [ARGUMENTS] [OPTIONS]
```

## Description

The `cook cmd` command group handles two types of commands:
1. **Local commands** - Command groups defined in your project's `cook.config.json`
2. **Global commands** - User-level commands that work across all projects

## Subcommands

| Command | Description |
|---------|-------------|
| `list` | List command groups in cook.config.json |
| `run <group>` | Run a command group |
| `global` | Manage global commands (has sub-subcommands) |

---

## cook cmd list {#list}

List all command groups defined in your project's `cook.config.json`.

### Synopsis

```bash
cook cmd list
```

### Description

Displays all command groups available in the current project, along with their commands.

### Output

```bash
$ cook cmd list

Available command groups in cook.config.json:

  dev
    → npm install
    → npm run dev

  build
    → npm run lint
    → npm run test
    → npm run build

  test
    → npm run test
    → npm run coverage

  deploy
    → npm run build
    → docker build -t myapp .
    → docker push myapp
    → ./deploy.sh

Total: 4 command groups
```

### Use Cases

- See available commands before running
- Verify cook.config.json configuration
- Discover project automation

### Examples

**Example 1: Check Available Commands**

```bash
$ cd my-project
$ cook cmd list

# See all available command groups
```

**Example 2: Before Running**

```bash
# Check what's available
$ cook cmd list

# Run a specific group
$ cook run dev
```

---

## cook cmd run {#run}

Run a command group from cook.config.json.

### Synopsis

```bash
cook cmd run <group> [--hot]
```

### Description

This is an alias for `cook run <group>`. Executes a command group defined in your project.

### Arguments

- **group**: Name of the command group to execute

### Options

- **--hot**: Enable hot reload mode

### Usage

```bash
$ cook cmd run dev

→ Executing: npm install
✔ Command succeeded

→ Executing: npm run dev
✔ Command succeeded
```

### Examples

See [cook run](run.md) for detailed examples and documentation.

---

## cook cmd global {#global}

Manage global commands that work across all projects.

### Synopsis

```bash
cook cmd global <action>
```

### Description

Global commands are user-level commands stored in your system configuration. They work in any directory, making them perfect for frequently used commands, utilities, and automation scripts.

### Actions

| Action | Description |
|--------|-------------|
| `add` | Add a new global command |
| `list` | List all global commands |
| `run` | Run a global command |
| `update` | Update an existing global command |
| `remove` | Remove a global command |

All global command actions are **fully interactive** - no CLI arguments needed.

---

## cook cmd global add {#global-add}

Add a new global command.

### Synopsis

```bash
cook cmd global add
```

### Interactive Workflow

```bash
$ cook cmd global add

Enter command name: server
Enter description: Quick HTTP server on port 8000

Enter commands (one per line, empty line to finish):
Command 1: python -m http.server 8000
Command 2:

✔ Added global command: server
```

### Examples

**Example 1: Simple Utility**

```bash
$ cook cmd global add

Command name: cleanup
Description: Clean Docker and npm cache

Commands:
Command 1: docker system prune -f
Command 2: npm cache clean --force
Command 3:

✔ Added global command: cleanup
```

**Example 2: Development Setup**

```bash
$ cook cmd global add

Command name: devsetup
Description: Start all development services

Commands:
Command 1: docker-compose up -d postgres redis
Command 2: sleep 5
Command 3: npm run migrate
Command 4:

✔ Added global command: devsetup
```

**Example 3: Git Workflow**

```bash
$ cook cmd global add

Command name: gitpush
Description: Stage, commit, and push

Commands:
Command 1: git add .
Command 2: git commit -m "Update"
Command 3: git push origin main
Command 4:

✔ Added global command: gitpush
```

---

## cook cmd global list {#global-list}

List all your global commands.

### Synopsis

```bash
cook cmd global list
```

### Output

```bash
$ cook cmd global list

Your global commands:

  server — Quick HTTP server on port 8000
    → python -m http.server 8000

  cleanup — Clean Docker and npm cache
    → docker system prune -f
    → npm cache clean --force

  devsetup — Start all development services
    → docker-compose up -d postgres redis
    → sleep 5
    → npm run migrate

  gitpush — Stage, commit, and push
    → git add .
    → git commit -m "Update"
    → git push origin main

Total: 4 global commands
```

### Use Cases

- See available global commands
- Review command definitions
- Verify command names before running

---

## cook cmd global run {#global-run}

Run a global command interactively.

### Synopsis

```bash
cook cmd global run
```

### Interactive Workflow

```bash
$ cook cmd global run

Select global command to run:
> server — Quick HTTP server on port 8000
  cleanup — Clean Docker and npm cache
  devsetup — Start all development services
  gitpush — Stage, commit, and push

Running global command: server

→ Executing: python -m http.server 8000
Serving HTTP on 0.0.0.0 port 8000 (http://0.0.0.0:8000/) ...
```

### Examples

**Example 1: Quick Server**

```bash
$ cd ~/Documents/files
$ cook cmd global run

Select: server

Serving HTTP on port 8000...
```

**Example 2: System Cleanup**

```bash
$ cook cmd global run

Select: cleanup

→ Executing: docker system prune -f
✔ Deleted containers, images, networks

→ Executing: npm cache clean --force
✔ npm cache cleaned
```

---

## cook cmd global update {#global-update}

Update an existing global command.

### Synopsis

```bash
cook cmd global update
```

### Interactive Workflow

```bash
$ cook cmd global update

Select command to update:
> server — Quick HTTP server on port 8000
  cleanup — Clean Docker and npm cache
  devsetup — Start all development services

Selected: server

Current description: Quick HTTP server on port 8000
New description: HTTP server with custom port

Current commands:
  1. python -m http.server 8000

Enter new commands (one per line, empty line to finish):
Command 1: python -m http.server 8080
Command 2:

✔ Updated global command: server
```

### What You Can Update

- Command description
- Command list (all commands are replaced)

### Examples

**Example 1: Change Description**

```bash
$ cook cmd global update

Select: cleanup
New description: Full system cleanup
New commands: (keep same)

✔ Updated
```

**Example 2: Add More Commands**

```bash
$ cook cmd global update

Select: devsetup
New commands:
  docker-compose up -d postgres redis
  sleep 5
  npm run migrate
  npm run seed  # NEW

✔ Updated
```

---

## cook cmd global remove {#global-remove}

Remove a global command.

### Synopsis

```bash
cook cmd global remove
```

### Interactive Workflow

```bash
$ cook cmd global remove

Select command to remove:
> server — Quick HTTP server on port 8000
  cleanup — Clean Docker and npm cache
  devsetup — Start all development services

Selected: server

⚠️  Are you sure you want to remove 'server'? (y/n): y

✔ Removed global command: server
```

### Examples

**Example 1: Remove Unused Command**

```bash
$ cook cmd global remove

Select: oldcommand
Confirm: y

✔ Removed
```

**Example 2: Cancel Removal**

```bash
$ cook cmd global remove

Select: important-cmd
Confirm: n

⚠️  Removal cancelled
```

---

## Global Command Storage

Global commands are stored in platform-specific directories:

- **macOS**: `~/Library/Application Support/cook/global_commands.json`
- **Linux**: `~/.config/cook/global_commands.json`
- **Windows**: `%APPDATA%/cook/global_commands.json`

### Storage Format

```json
{
  "server": {
    "name": "server",
    "description": "Quick HTTP server",
    "commands": [
      "python -m http.server 8000"
    ]
  },
  "cleanup": {
    "name": "cleanup",
    "description": "System cleanup",
    "commands": [
      "docker system prune -f",
      "npm cache clean --force"
    ]
  }
}
```

## Use Cases for Global Commands

### 1. Development Utilities

```bash
# HTTP server
server → python -m http.server 8000

# Database reset
dbreset → dropdb mydb && createdb mydb && psql mydb < schema.sql

# Code formatting
format → black . && prettier --write .
```

### 2. System Maintenance

```bash
# Cleanup
cleanup → docker system prune -f && npm cache clean --force

# Update all
updateall → brew upgrade && npm update -g && pip install --upgrade pip
```

### 3. Git Workflows

```bash
# Quick commit
commit → git add . && git commit -m "Update" && git push

# Feature branch
feature → git checkout -b feature/$1 && git push -u origin feature/$1

# Sync main
sync → git checkout main && git pull && git checkout -
```

### 4. Deployment

```bash
# Deploy staging
deploystaging → npm run build && scp -r dist/ user@staging:/var/www/

# Deploy production
deployprod → npm run build && npm run test && ./deploy-prod.sh
```

### 5. Daily Routines

```bash
# Morning routine
morning → docker-compose up -d && npm run migrate && npm run dev

# End of day
eod → git add . && git commit -m "EOD" && git push && docker-compose down
```

## Best Practices

### 1. Use Descriptive Names

```bash
# Good
server
cleanup
devsetup

# Avoid
s
c
d
```

### 2. Add Clear Descriptions

```bash
# Good
"Quick HTTP server on port 8000"
"Clean Docker and npm cache"

# Avoid
"Server"
"Cleanup"
```

### 3. Keep Commands Focused

```bash
# Good - single purpose
server → python -m http.server 8000

# Avoid - too many unrelated things
everything → npm install && docker up && git pull && npm run dev
```

### 4. Use for Frequently Run Commands

Global commands are perfect for:
- Commands you run multiple times daily
- Commands that work across projects
- Complex command sequences you can't remember

### 5. Document Complex Commands

```bash
# Good description for complex command
"Build, test, and deploy to production (requires env vars set)"

# Commands:
npm run build
npm run test:prod
./deploy.sh production
```

## Troubleshooting

### No Global Commands

```bash
$ cook cmd global list

No global commands found.

💡 Add your first global command:
   cook cmd global add
```

**Solution:** Add commands with `cook cmd global add`

### Command Name Already Exists

```bash
$ cook cmd global add

Command name: server
❌ Error: Global command 'server' already exists
```

**Solution:**
- Choose a different name
- Update existing command: `cook cmd global update`
- Remove old command first: `cook cmd global remove`

### Empty Command

```bash
$ cook cmd global add

Command name:
❌ Error: Command name cannot be empty
```

**Solution:** Provide a valid command name

### No Commands Entered

```bash
$ cook cmd global add

Command name: test
Description: Test command
Command 1:
❌ Error: At least one command is required
```

**Solution:** Enter at least one command

## Related Commands

- **[cook run](run.md)** - Run local project commands
- **[cook init](init.md)** - Initialize project config
- **[cook cmd list](cmd.md#list)** - List local commands

## See Also

- [Global Commands Guide](../global-commands.md)
- [Command Execution](../command-execution.md)
- [Workflows: Automation](../workflows.md#automation-workflows)

---

**Next:** [cook tool](tool.md) - Development utilities
