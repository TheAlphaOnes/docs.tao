# Cook run

Run command groups defined in your project's `cook.config.json` file.

## Usage

```bash
cook run [GROUP] [OPTIONS]
```

## Arguments

- `GROUP` (optional): Command group to run. If not specified, you'll be prompted to select from available groups.

## Options

- `--hot`: Enable hot reload/watch mode
- `--verbose, -v`: Show detailed execution messages

## Description

The `run` command executes predefined command groups from your project's `cook.config.json` file. This is a convenient way to run common development tasks like starting servers, building projects, or running tests.

## Examples

### Interactive Group Selection

When no group is specified, Cook CLI will show available command groups:

```bash
$ cook run

Select command group to run:
> serve
  build
  clean

Running commands in group: serve
pnpm run dev
rm -rf ./cache
```

### Direct Group Execution

Run a specific command group directly:

```bash
$ cook run build
rm -rf ./dist
rm -rf ./build
pnpm run build
```

### Verbose Mode

Show detailed execution information:

```bash
$ cook run serve --verbose
Running commands in group: serve
→ Executing: npm run dev
> my-project@1.0.0 dev
> vite

  VITE v4.4.5  ready in 432 ms
  ➜  Local:   http://localhost:5173/
✔ Command succeeded: npm run dev
→ Executing: rm -rf ./cache
✔ Command succeeded: rm -rf ./cache
```

### Hot Reload Mode

Enable file watching and automatic command restart:

```bash
$ cook run serve --hot
✅ Starting hot reload for group: serve

→ Watching directory: .
→ Ignoring: node_modules, .git, dist

→ Executing: npm run dev
✔ Command succeeded: npm run dev

[Server running on http://localhost:5173]

👁️  Watching for changes...

📝 File changed: src/App.tsx

→ Restarting processes...
→ Executing: npm run dev
✔ Command succeeded: npm run dev

👁️  Watching for changes...
```

### Combined Options

Use verbose mode with hot reload:

```bash
cook run serve --hot --verbose
```

## Command Groups Configuration

Command groups are defined in your `cook.config.json` file:

```json
{
  "name": "my-project",
  "cmd": {
    "serve": [
      "pnpm run dev",
      "rm -rf ./cache"
    ],
    "build": [
      "rm -rf ./dist",
      "rm -rf ./build",
      "pnpm run build"
    ],
    "clean": [
      "rm -rf ./node_modules",
      "rm -rf ./dist"
    ],
    "test": [
      "npm run test:unit",
      "npm run test:e2e"
    ],
    "deploy": [
      "npm run build",
      "rsync -av dist/ user@server:/var/www/"
    ]
  }
}
```

## Hot Reload Configuration

### Basic Usage

Use the `--hot` flag to enable file watching and automatic command restart:

```bash
cook run serve --hot
```

### Advanced Configuration

Customize hot reload behavior by adding a `watch` section to your `cook.config.json`:

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

### Configuration Options

#### `directory` (string, default: ".")
Root directory to watch for changes.

#### `patterns` (array, optional)
Specific file patterns to watch. Uses glob patterns.

#### `ignore` (array, optional)
Patterns to ignore during watching.

### Example Configurations

**React Development:**
```json
{
  "watch": {
    "directory": "./src",
    "patterns": ["**/*.js", "**/*.jsx", "**/*.css"],
    "ignore": ["*.test.js", "*.spec.js"]
  }
}
```

**Node.js API:**
```json
{
  "watch": {
    "directory": "./server",
    "patterns": ["**/*.js", "**/*.json"],
    "ignore": ["logs", "uploads", "*.test.js"]
  }
}
```

**Full-Stack Project:**
```json
{
  "watch": {
    "patterns": [
      "server/**/*.js",
      "client/src/**/*.js",
      "shared/**/*.js"
    ],
    "ignore": ["node_modules", "dist", "build", "logs"]
  }
}
```

**Nuxt.js Project:**
```json
{
  "watch": {
    "directory": ".",
    "patterns": ["**/*.js", "**/*.ts", "**/*.vue"],
    "ignore": ["node_modules", ".git", "dist", ".nuxt", "public", ".output"]
  }
}
```

**Next.js Project:**
```json
{
  "watch": {
    "directory": ".",
    "patterns": ["**/*.js", "**/*.ts", "**/*.jsx", "**/*.tsx"],
    "ignore": ["node_modules", ".git", "dist", ".next", "public", "out"]
  }
}
```

## Common Command Groups

### Development Server
```json
"serve": [
  "npm run dev"
]
```

### Production Build
```json
"build": [
  "rm -rf dist",
  "npm run build"
]
```

### Testing
```json
"test": [
  "npm run test:unit",
  "npm run test:integration"
]
```

### Cleanup
```json
"clean": [
  "rm -rf node_modules",
  "rm -rf dist",
  "npm cache clean --force"
]
```

### Deployment
```json
"deploy": [
  "npm run build",
  "docker build -t myapp .",
  "docker push myapp:latest"
]
```

### Database Operations
```json
"db:reset": [
  "npm run db:drop",
  "npm run db:create",
  "npm run db:migrate",
  "npm run db:seed"
]
```

## Hot Reload Features

When using `--hot` mode, Cook CLI will:

1. **Execute commands**: Run the specified command group
2. **Watch files**: Monitor file changes in your project directory
3. **Auto-restart**: Automatically restart commands when files change
4. **Smart ignoring**: Ignore common directories like `node_modules`, `.git`
5. **Process management**: Properly terminate and restart processes

### Watched File Types

By default, hot reload watches:
- Source code files (`.js`, `.ts`, `.jsx`, `.tsx`)
- Style files (`.css`, `.scss`, `.less`)
- Template files (`.vue`, `.svelte`, `.html`)
- Configuration files (`.json`, `.yaml`, `.toml`)

### Ignored Directories

Hot reload automatically ignores:
- `node_modules`
- `.git`
- `dist`
- `build`
- `.cache`
- `coverage`

## Error Handling

- Commands continue executing even if one fails
- Use `--verbose` to see detailed error information
- Hot reload will attempt to restart even after command failures
- Keyboard interrupt (Ctrl+C) stops all processes gracefully

## Performance Tips

1. **Use specific patterns**: Configure watch patterns to monitor only relevant files
2. **Ignore build outputs**: Exclude generated files from watching
3. **Optimize commands**: Use fast development builds in serve commands
4. **Batch operations**: Group related commands together

## Notes

- Commands are executed in the order they appear in the group
- Each command runs in the project's root directory
- Environment variables from your shell are available to commands
- Hot reload is ideal for development workflows
- Use `cook cmd run` for the same functionality with additional options
- Command groups are project-specific and stored in `cook.config.json`
- You can create and modify command groups with `cook cmd add` and `cook cmd update`

## Related Commands

- `cook cmd run`: Alternative command with same functionality
- `cook cmd list`: View all available command groups
- `cook cmd add`: Add new command groups
- `cook cmd update`: Modify existing command groups
- `cook init`: Initialize project with default command groups
