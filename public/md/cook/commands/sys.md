# Cook sys

System-level command management for global commands that work across all projects.

## Usage

```bash
cook sys [COMMAND]
```

## Commands

### sys list

List all system commands stored globally on your system.

```bash
$ cook sys list

System Commands:

  server — Quick HTTP server
    1. python -m http.server 8000

  projects — Navigate to projects folder
    1. cd ~/Projects

Total: 2 system command(s)
```

### sys add

Add a new system command that can be used from any directory.

```bash
$ cook sys add
Enter command name: server
Enter description (optional): Quick HTTP server
Enter commands (one per line, empty line to finish):
Command 1: python -m http.server 8000
Command 2:

Added system command: server
```

### sys run

Run a system command by name or select interactively.

**Run by name:**
```bash
$ cook sys run server
Running system command: server
Description: Quick HTTP server
Serving HTTP on 0.0.0.0 port 8000 (http://0.0.0.0:8000/) ...
```

**Interactive selection:**
```bash
$ cook sys run
Select system command to run:
> server — Quick HTTP server
  projects — Navigate to projects folder

Running system command: server
Description: Quick HTTP server
Serving HTTP on 0.0.0.0 port 8000 (http://0.0.0.0:8000/) ...
```

### sys update

Update an existing system command.

```bash
$ cook sys update
Select system command to update:
> building — gg
  mycode — move to my code folder

Updating: server
Current description: Quick HTTP server
Current commands:
  1. python -m http.server 8000

Enter new description (optional): HTTP server on custom port
Enter new commands (one per line, empty line to finish):
Command 1: python -m http.server 3000
Command 2:

Updated system command: server
```

### sys remove

Remove a system command.

```bash
$ cook sys remove
Select system command to remove:
> server — Quick HTTP server
  projects — Navigate to projects folder

Removed system command: server
```

## Description

System commands are global commands that can be executed from any directory on your system. Unlike local command groups (managed by `cook cmd`), system commands are stored globally and are available across all your projects.

## Use Cases

System commands are perfect for:

- **Development shortcuts**: Quick server startup, common git operations
- **System maintenance**: Cleanup scripts, backup commands
- **Navigation helpers**: Quick directory changes, project switching
- **Utility functions**: File operations, system monitoring

## Examples

### Quick HTTP Server
```bash
cook sys add
# Name: server
# Description: Start HTTP server on port 8000
# Commands: python -m http.server 8000
```

### Git Shortcuts
```bash
cook sys add
# Name: gitpush
# Description: Add, commit, and push changes
# Commands:
#   git add .
#   git commit -m "Quick update"
#   git push
```

### Project Navigation
```bash
cook sys add
# Name: projects
# Description: Navigate to projects directory
# Commands: cd ~/Projects
```

## Storage

System commands are stored globally in your user data directory and persist across all Cook CLI sessions. They are independent of any specific project configuration.

## Notes

- System commands work from any directory
- Commands are executed in sequence
- Use descriptive names and descriptions for easy identification
- System commands complement local command groups for a complete automation solution
- Commands run in your current shell environment
