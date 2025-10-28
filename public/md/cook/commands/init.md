# cook init

Initialize a new Cook project in the current directory.

## Synopsis

```bash
cook init [OPTIONS]
```

## Description

The `cook init` command creates a new `cook.config.json` file in your current directory. This configuration file is the heart of your Cook project, containing project metadata, command groups, and settings.

If a `cook.config.json` file already exists, Cook will prompt you before overwriting it.

## Usage

### Basic Usage

```bash
$ cook init

❌ cook.config.json file not found, creating a new one...

Enter project name: my-awesome-project
Enter author name: johndoe
Enable stir mode? (y/n): y

✅ cook.config.json has been created successfully.
```

### What Gets Created

After running `cook init`, you'll have a `cook.config.json` file:

```json
{
  "name": "my-awesome-project",
  "author": "johndoe",
  "version": "0.1.0",
  "description": "",
  "stir": {
    "mode": "enabled"
  },
  "cmd": {}
}
```

## Interactive Prompts

### Project Name
- **Prompt:** "Enter project name"
- **Description:** The name of your project
- **Example:** `my-awesome-project`
- **Validation:** Cannot be empty

### Author Name
- **Prompt:** "Enter author name"
- **Description:** Your name or your organization's name
- **Example:** `johndoe` or `Acme Corp`
- **Validation:** Cannot be empty

### Stir Mode
- **Prompt:** "Enable stir mode? (y/n)"
- **Description:** Enables hot reload functionality
- **Options:** `y` (yes) or `n` (no)
- **Default:** `y`
- **Recommendation:** Enable for development projects

## Configuration File Structure

The generated `cook.config.json` contains:

```json
{
  "name": "string",           // Project name
  "author": "string",         // Author name
  "version": "string",        // Semantic version
  "description": "string",    // Optional description
  "stir": {                   // Hot reload settings
    "mode": "enabled|disabled"
  },
  "cmd": {                    // Command groups
    "group-name": [           // Group name
      "command 1",            // Commands to execute
      "command 2"
    ]
  }
}
```

## Examples

### Example 1: Initialize a Web Project

```bash
$ cd ~/projects/my-web-app
$ cook init

Enter project name: my-web-app
Enter author name: johndoe
Enable stir mode? (y/n): y

✅ cook.config.json has been created successfully.
```

Result:
```json
{
  "name": "my-web-app",
  "author": "johndoe",
  "version": "0.1.0",
  "description": "",
  "stir": {
    "mode": "enabled"
  },
  "cmd": {}
}
```

### Example 2: Initialize and Add Commands

```bash
$ cook init

Enter project name: api-server
Enter author name: devteam
Enable stir mode? (y/n): y

✅ cook.config.json has been created successfully.
```

Then edit `cook.config.json` to add commands:

```json
{
  "name": "api-server",
  "author": "devteam",
  "version": "0.1.0",
  "description": "Backend API server",
  "stir": {
    "mode": "enabled"
  },
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
      "docker build -t api-server .",
      "docker push api-server"
    ]
  }
}
```

### Example 3: Disable Stir Mode

For production or library projects where hot reload isn't needed:

```bash
$ cook init

Enter project name: utility-lib
Enter author name: opensource
Enable stir mode? (y/n): n

✅ cook.config.json has been created successfully.
```

Result:
```json
{
  "name": "utility-lib",
  "author": "opensource",
  "version": "0.1.0",
  "description": "",
  "stir": {
    "mode": "disabled"
  },
  "cmd": {}
}
```

## When to Use

Use `cook init` when:
- Starting a new project from scratch
- Adding Cook to an existing project
- Resetting your Cook configuration
- Setting up a project before creating a template

## Common Workflows

### Workflow 1: New Project Setup

```bash
# Create project directory
mkdir my-new-project
cd my-new-project

# Initialize Cook
cook init

# Add your code
# Edit cook.config.json to add commands

# Start development
cook run dev --hot
```

### Workflow 2: Add Cook to Existing Project

```bash
# Navigate to existing project
cd ~/projects/existing-app

# Initialize Cook
cook init

# Edit cook.config.json to add your existing commands
nano cook.config.json

# Test your commands
cook cmd list
cook run dev
```

### Workflow 3: Template Preparation

```bash
# Set up your project
cook init

# Build your project structure
# Add your code and dependencies

# Create a template from it
cook mold create
```

## Troubleshooting

### File Already Exists

```bash
$ cook init

⚠️  cook.config.json already exists!
Overwrite? (y/n):
```

**Solution:**
- Type `y` to overwrite (you'll lose existing configuration)
- Type `n` to cancel and keep existing file

### Empty Name Error

```bash
$ cook init

Enter project name:
❌ Error: Project name cannot be empty
```

**Solution:** Provide a valid project name

### Permission Denied

```bash
$ cook init

❌ Error: Permission denied: cook.config.json
```

**Solution:**
- Check directory permissions: `ls -la`
- Ensure you have write permissions: `chmod +w .`
- Try with sudo (not recommended): `sudo cook init`

## Best Practices

1. **Use descriptive names** - Choose clear project names that reflect the purpose
   ```bash
   # Good
   my-react-dashboard
   api-gateway-service

   # Avoid
   proj1
   test
   ```

2. **Enable stir mode for development** - Use hot reload during active development
   ```bash
   Enable stir mode? (y/n): y  # Recommended for dev
   ```

3. **Version your config** - Commit `cook.config.json` to version control
   ```bash
   git add cook.config.json
   git commit -m "Add Cook configuration"
   ```

4. **Document your commands** - Add comments in JSON (or use description field)
   ```json
   {
     "cmd": {
       "dev": ["npm install", "npm run dev"],
       "deploy": ["npm run build", "./deploy.sh"]
     }
   }
   ```

5. **Initialize early** - Run `cook init` at the start of your project

## Related Commands

- **[cook run](run.md)** - Run commands defined in cook.config.json
- **[cook cmd](cmd.md)** - Manage and execute command groups
- **[cook mold create](mold.md#create)** - Create a template from your project

## Configuration Reference

See the [Configuration Guide](../configuration.md) for detailed information about `cook.config.json` structure and options.

## See Also

- [Quick Start Guide](../quickstart.md)
- [Configuration](../configuration.md)
- [Command Execution](../command-execution.md)

---

**Next:** [cook bake](bake.md) - Use a template in your project
