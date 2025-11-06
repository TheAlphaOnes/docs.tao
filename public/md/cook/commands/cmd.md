# Cook cmd

Command execution and management for local project command groups.

## Usage

```bash
cook cmd [COMMAND]
```

## Commands

### cmd list

List all available command groups defined in your project's `cook.config.json`.

```bash
$ cook cmd list

Local Command Groups:

  serve
    1. npm run dev
    2. rm -rf ./cache

  build
    1. rm -rf ./dist
    2. rm -rf ./build
    3. npm run build

  clean
    1. rm -rf ./node_modules

Total: 3 command group(s)
```

### cmd run

Run commands in a specified group.

```bash
cook cmd run [GROUP] [OPTIONS]
```

**Options:**
- `--hot`: Enable hot reload/watch mode
- `--verbose, -v`: Show detailed execution messages

**Examples:**

```bash
# Run a command group with verbose output
$ cook cmd run serve --verbose
Running commands in group: serve
→ Executing: npm run dev
> my-project@1.0.0 dev
> vite

  VITE v4.4.5  ready in 432 ms
  ➜  Local:   http://localhost:5173/
✔ Command succeeded: npm run dev
→ Executing: rm -rf ./cache
✔ Command succeeded: rm -rf ./cache

# Run with hot reload (watches for file changes)
$ cook cmd run serve --hot
Starting hot reload for group: serve
→ Watching directory: .
→ Ignoring: node_modules, .git, dist
→ Executing: npm run dev
✔ Command succeeded: npm run dev
👁️  Watching for changes...
```

### cmd add

Add a new command group to your project's `cook.config.json`.

```bash
$ cook cmd add
Enter local command group name: deploy
Enter commands for this group (one per line, empty line to finish):
Command 1: npm run build
Command 2: rsync -av dist/ user@server:/var/www/
Command 3:
Added local command group: deploy
```

### cmd update

Update an existing command group in your project's `cook.config.json`.

```bash
$ cook cmd update
Select command group to update:
> serve
  build
  clean

Current commands for serve:
  1. pnpm run dev
  2. rm -rf ./cashe

Enter new commands (one per line, empty line to finish):
Command 1: npm run dev
Command 2:
Updated local command group: serve
```

## Description

The `cmd` commands manage local command groups defined in your project's `cook.config.json` file. These commands are project-specific and help automate common development tasks.

## Hot Reload Configuration

### Basic Hot Reload

When using `--hot` flag with `cmd run`, Cook CLI will:

1. Execute the command group
2. Watch for file changes in your project directory
3. Automatically restart the commands when files change
4. Ignore common directories like `node_modules`, `.git`, etc.

### Advanced Configuration

You can customize hot reload behavior by adding a `watch` section to your `cook.config.json`:

```json
{
  "name": "my-project",
  "cmd": {
    "serve": ["npm run dev"],
    "build": ["npm run build"]
  },
  "watch": {
    "directory": ".",
    "patterns": ["**/*.js", "**/*.ts", "**/*.vue", "**/*.css"],
    "ignore": ["node_modules", ".git", "dist", "build", "*.log"]
  }
}
```

### Watch Configuration Options

#### `directory` (string, default: ".")
The root directory to watch for changes.

```json
{
  "watch": {
    "directory": "./src"
  }
}
```

#### `patterns` (array, optional)
Specific file patterns to watch. If not specified, watches all files.

```json
{
  "watch": {
    "patterns": [
      "**/*.js",
      "**/*.ts",
      "**/*.jsx",
      "**/*.tsx",
      "**/*.vue",
      "**/*.css",
      "**/*.scss"
    ]
  }
}
```

#### `ignore` (array, optional)
Patterns to ignore. Extends the default ignore list.

```json
{
  "watch": {
    "ignore": [
      "node_modules",
      ".git",
      "dist",
      "build",
      "coverage",
      "*.log",
      "*.tmp",
      ".cache"
    ]
  }
}
```

### Example Configurations

#### Frontend Development
```json
{
  "name": "react-app",
  "cmd": {
    "serve": ["npm start"],
    "build": ["npm run build"]
  },
  "watch": {
    "directory": "./src",
    "patterns": ["**/*.js", "**/*.jsx", "**/*.css", "**/*.scss"],
    "ignore": ["node_modules", "build", "*.test.js"]
  }
}
```

#### Full-Stack Development
```json
{
  "name": "fullstack-app",
  "cmd": {
    "serve": [
      "npm run start:backend",
      "npm run start:frontend"
    ]
  },
  "watch": {
    "directory": ".",
    "patterns": [
      "server/**/*.js",
      "client/src/**/*.js",
      "shared/**/*.js"
    ],
    "ignore": [
      "node_modules",
      "dist",
      "build",
      "logs",
      "*.test.js"
    ]
  }
}
```

#### API Development
```json
{
  "name": "api-server",
  "cmd": {
    "serve": ["nodemon server.js"],
    "test": ["npm test"]
  },
  "watch": {
    "directory": "./api",
    "patterns": ["**/*.js", "**/*.json"],
    "ignore": ["node_modules", "logs", "uploads"]
  }
}
```

#### Nuxt.js Development
```json
{
  "name": "nuxt-app",
  "cmd": {
    "serve": ["pnpm run dev"],
    "build": ["pnpm run build"]
  },
  "watch": {
    "directory": ".",
    "patterns": ["**/*.js", "**/*.ts", "**/*.vue"],
    "ignore": ["node_modules", ".git", "dist", ".nuxt", "public", ".output"]
  }
}
```

#### Next.js Development
```json
{
  "name": "nextjs-app",
  "cmd": {
    "serve": ["npm run dev"],
    "build": ["npm run build"]
  },
  "watch": {
    "directory": ".",
    "patterns": ["**/*.js", "**/*.ts", "**/*.jsx", "**/*.tsx"],
    "ignore": ["node_modules", ".git", "dist", ".next", "public", "out"]
  }
}
```

### Default Behavior

If no `watch` configuration is provided, Cook CLI uses these defaults:

- **Directory**: Current directory (`.`)
- **Patterns**: All files (`**/*`)
- **Ignore**: `["node_modules", ".git", "dist", "build", ".cache", "coverage"]`

## Configuration

Command groups are stored in your `cook.config.json` under the `cmd` section:

```json
{
  "cmd": {
    "serve": ["npm run dev", "rm -rf ./cache"],
    "build": ["rm -rf ./dist", "npm run build"],
    "clean": ["rm -rf ./node_modules"]
  }
}
```

## Notes

- Commands are executed in the order they appear in the group
- Use `--verbose` to see detailed execution information
- Hot reload is useful for development workflows
- Command groups are project-specific (unlike system commands)
- You can also use the shorthand `cook run [group]` instead of `cook cmd run [group]`
