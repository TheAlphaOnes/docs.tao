# cook run

Execute command groups defined in your cook.config.json file.

## Synopsis

```bash
cook run <group> [OPTIONS]
```

## Description

The `cook run` command executes a group of commands defined in your `cook.config.json` file. It runs commands sequentially, stopping if any command fails (unless configured otherwise).

With the `--hot` flag, Cook watches for file changes and automatically reruns your commands, perfect for development workflows.

## Arguments

### group
- **Type:** String (required)
- **Description:** The name of the command group to execute
- **Example:** `dev`, `build`, `test`, `deploy`

## Options

### --hot
- **Type:** Boolean flag (optional)
- **Description:** Enable hot reload mode - watch files and auto-restart on changes
- **Default:** `false`
- **Alias:** None

## Usage

### Basic Usage

```bash
$ cook run dev

→ Executing: npm install
✔ Command succeeded: npm install

→ Executing: npm run dev
✔ Command succeeded: npm run dev

✅ All commands completed successfully!
```

### Hot Reload Mode

```bash
$ cook run dev --hot

✅ Starting hot reload for group: dev

→ Watching directory: .
→ Ignoring: node_modules, .git, dist

→ Executing: npm install
✔ Command succeeded: npm install

→ Executing: npm run dev
✔ Command succeeded: npm run dev

👁️  Watching for changes...

# Edit a file - commands auto-restart

📝 File changed: src/App.tsx

→ Restarting processes...
→ Executing: npm install
✔ Command succeeded: npm install

→ Executing: npm run dev
✔ Command succeeded: npm run dev

👁️  Watching for changes...
```

## Command Groups

Command groups are defined in `cook.config.json`:

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
      "docker build -t myapp .",
      "docker push myapp",
      "./deploy.sh"
    ],
    "test": [
      "npm run test",
      "npm run coverage"
    ]
  }
}
```

## Examples

### Example 1: Development Workflow

```bash
# cook.config.json
{
  "cmd": {
    "dev": [
      "npm install",
      "npm run dev"
    ]
  }
}

# Run development
$ cook run dev --hot

✅ Starting hot reload for group: dev
→ Executing: npm install
✔ Command succeeded

→ Executing: npm run dev
[Server running on http://localhost:3000]

👁️  Watching for changes...
```

### Example 2: Build and Test

```bash
# cook.config.json
{
  "cmd": {
    "ci": [
      "npm run lint",
      "npm run test",
      "npm run build"
    ]
  }
}

# Run CI pipeline
$ cook run ci

→ Executing: npm run lint
✔ Command succeeded: npm run lint

→ Executing: npm run test
✔ Command succeeded: npm run test

→ Executing: npm run build
✔ Command succeeded: npm run build

✅ All commands completed successfully!
```

### Example 3: Multi-Service Startup

```bash
# cook.config.json
{
  "cmd": {
    "services": [
      "docker-compose up -d postgres redis",
      "sleep 5",
      "npm run migrate",
      "npm run dev"
    ]
  }
}

$ cook run services --hot

→ Executing: docker-compose up -d postgres redis
✔ Command succeeded

→ Executing: sleep 5
✔ Command succeeded

→ Executing: npm run migrate
✔ Command succeeded

→ Executing: npm run dev
[Server started]

👁️  Watching for changes...
```

### Example 4: Deployment Pipeline

```bash
# cook.config.json
{
  "cmd": {
    "deploy": [
      "npm run build",
      "docker build -t myapp:latest .",
      "docker tag myapp:latest registry.com/myapp:latest",
      "docker push registry.com/myapp:latest",
      "kubectl rollout restart deployment/myapp"
    ]
  }
}

$ cook run deploy

→ Executing: npm run build
✔ Command succeeded

→ Executing: docker build -t myapp:latest .
✔ Command succeeded

→ Executing: docker tag myapp:latest registry.com/myapp:latest
✔ Command succeeded

→ Executing: docker push registry.com/myapp:latest
✔ Command succeeded

→ Executing: kubectl rollout restart deployment/myapp
✔ Command succeeded

✅ Deployment completed successfully!
```

## Hot Reload Mode

### How It Works

When you run `cook run <group> --hot`:

1. Executes all commands in the group
2. Starts watching the current directory for changes
3. On file change, kills running processes
4. Re-executes all commands in the group
5. Repeats on each change

### Watched Directories

By default, Cook watches:
- Current directory and all subdirectories
- Excludes: `node_modules`, `.git`, `dist`, `build`, `.next`, `__pycache__`

### Configuration

Configure watch behavior in `cook.config.json`:

```json
{
  "stir": {
    "mode": "enabled",
    "watch": {
      "paths": ["src", "public"],
      "ignore": ["*.log", "temp/*"]
    }
  }
}
```

### Use Cases

Hot reload is perfect for:
- Development servers
- File watchers
- Build tools
- Test runners
- Database migrations during development

## List Available Groups

View all command groups in your project:

```bash
$ cook cmd list

Available command groups in cook.config.json:

  dev       - Development environment
  build     - Production build
  test      - Run tests
  deploy    - Deploy to production
  services  - Start all services
```

## Command Execution

### Sequential Execution

Commands run one after another:

```json
{
  "cmd": {
    "setup": [
      "npm install",      // Runs first
      "npm run build",    // Runs second
      "npm run test"      // Runs third
    ]
  }
}
```

### Failure Handling

If a command fails, execution stops:

```bash
$ cook run build

→ Executing: npm run lint
✔ Command succeeded

→ Executing: npm run test
❌ Command failed: npm run test

❌ Command group execution stopped due to error.
```

### Shell Commands

All standard shell commands work:

```json
{
  "cmd": {
    "cleanup": [
      "rm -rf dist",
      "rm -rf node_modules",
      "npm install",
      "docker system prune -f"
    ]
  }
}
```

## Troubleshooting

### Command Group Not Found

```bash
$ cook run dev
❌ Error: Command group 'dev' not found in cook.config.json
```

**Solution:**
- Check available groups: `cook cmd list`
- Add the group to `cook.config.json`
- Verify spelling

### cook.config.json Not Found

```bash
$ cook run dev
❌ Error: cook.config.json not found in current directory
```

**Solution:**
```bash
# Initialize Cook in this directory
cook init

# Then add your command groups
nano cook.config.json
```

### Command Fails

```bash
$ cook run build
→ Executing: npm run build
❌ Command failed: npm run build
```

**Solution:**
- Check command syntax in `cook.config.json`
- Run the command manually to debug
- Check logs with `COOK_DEBUG=1 cook run build`

### Hot Reload Not Working

```bash
$ cook run dev --hot
# File changes don't trigger restart
```

**Solution:**
- Ensure stir mode is enabled in `cook.config.json`
- Check watched paths configuration
- Verify files aren't in ignored directories
- Try restarting the hot reload

### Process Won't Stop

```bash
$ cook run dev --hot
# Press Ctrl+C multiple times
```

**Solution:**
- Press `Ctrl+C` to stop gracefully
- If stuck, use `Ctrl+Z` then `kill %1`
- Force kill: `pkill -f "cook run"`

## Best Practices

1. **Use descriptive group names**
   ```json
   {
     "cmd": {
       "dev": ["npm run dev"],           // Good
       "prod-build": ["npm run build"],  // Good
       "d": ["npm run dev"]              // Avoid
     }
   }
   ```

2. **Always use --hot for development**
   ```bash
   cook run dev --hot  # Auto-reload on changes
   ```

3. **Group related commands**
   ```json
   {
     "cmd": {
       "setup": [
         "npm install",
         "npm run db:migrate",
         "npm run seed"
       ]
     }
   }
   ```

4. **Add wait times for services**
   ```json
   {
     "cmd": {
       "services": [
         "docker-compose up -d",
         "sleep 10",
         "npm run dev"
       ]
     }
   }
   ```

5. **Use absolute paths when needed**
   ```json
   {
     "cmd": {
       "deploy": [
         "npm run build",
         "/usr/local/bin/deploy.sh"
       ]
     }
   }
   ```

## Advanced Usage

### Environment Variables

Set environment variables in commands:

```json
{
  "cmd": {
    "dev": [
      "export NODE_ENV=development",
      "export PORT=3000",
      "npm run dev"
    ],
    "prod": [
      "export NODE_ENV=production",
      "npm run build"
    ]
  }
}
```

### Conditional Commands

Use shell conditionals:

```json
{
  "cmd": {
    "deploy": [
      "npm run build",
      "[ -f deploy.sh ] && ./deploy.sh || echo 'No deploy script'"
    ]
  }
}
```

### Piping and Redirection

Use shell features:

```json
{
  "cmd": {
    "backup": [
      "pg_dump mydb > backup.sql",
      "tar -czf backup.tar.gz backup.sql",
      "rm backup.sql"
    ]
  }
}
```

## Related Commands

- **[cook cmd list](cmd.md#list)** - List all command groups
- **[cook init](init.md)** - Initialize cook.config.json
- **[cook cmd sys](cmd.md#sys)** - Manage sys commands

## See Also

- [Command Execution Guide](../command-execution.md)
- [Hot Reload Guide](../hot-reload.md)
- [Configuration Reference](../configuration.md)

---

**Next:** [cook auth](auth.md) - Authentication commands
