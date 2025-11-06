# Cook CLI Documentation

Complete documentation for Cook CLI - The Swiss Army Knife for Developers.

## Quick Start

```bash
# Install dependencies
pip install -r requirements.txt

# Initialize a new project
cook init

# Run your project
cook run serve

# Create a template from your project
cook mold create

# Use a template to start a new project
cook bake username/@category/template-name
```

## Command Reference

### Core Commands

| Command | Description | Documentation |
|---------|-------------|---------------|
| [`cook init`](/docs/COOK/cook-init) | Initialize a new Cook project | [📖 View Docs](/docs/COOK/cook-init) |
| [`cook run`](/docs/COOK/cook-run) | Run command groups | [📖 View Docs](/docs/COOK/cook-run) |
| [`cook bake`](/docs/COOK/cook-bake) | Use a template to create a project | [📖 View Docs](/docs/COOK/cook-bake) |
| [`cook version`](/docs/COOK/cook-version) | Show version information | [📖 View Docs](/docs/COOK/cook-version) |

### Authentication

| Command | Description | Documentation |
|---------|-------------|---------------|
| [`cook auth`](/docs/COOK/cook-auth) | Authentication and user management | [📖 View Docs](/docs/COOK/cook-auth) |

### Template Management

| Command | Description | Documentation |
|---------|-------------|---------------|
| [`cook mold`](/docs/COOK/cook-mold) | Template management (create, upload, manage) | [📖 View Docs](/docs/COOK/cook-mold) |

### Command Execution

| Command | Description | Documentation |
|---------|-------------|---------------|
| [`cook cmd`](/docs/COOK/cook-cmd) | Local command execution and management | [📖 View Docs](/docs/COOK/cook-cmd) |
| [`cook sys`](/docs/COOK/cook-sys) | System-level command management | [📖 View Docs](/docs/COOK/cook-sys) |

### Development Tools

| Command | Description | Documentation |
|---------|-------------|---------------|
| [`cook tool`](/docs/COOK/cook-tool) | Development tools and utilities | [📖 View Docs](/docs/COOK/cook-tool) |

## Getting Started

### 1. Installation

```bash
# Clone the repository
git clone https://github.com/TheAlphaOnes/cook-cli.git
cd cook-cli

# Install dependencies
pip install -r requirements.txt

# Run Cook CLI
python3 main.py --help
```

### 2. Initialize Your First Project

```bash
# Create a new directory for your project
mkdir my-awesome-project
cd my-awesome-project

# Initialize Cook configuration
cook init
```

### 3. Set Up Authentication (Optional)

To use template management features:

```bash
# Login to your Cook account
cook auth login

# Check authentication status
cook auth now
```

### 4. Start Using Cook CLI

```bash
# Run your development server
cook run serve

# Create a template from your project
cook mold create

# Use someone else's template
cook bake alice/@web/react-starter
```

## Key Features

### 📦 Template Management
- Create reusable project templates
- Share templates with the community
- Download and use templates to bootstrap new projects
- Version control and update templates

### ⚡ Command Automation
- Define project-specific command groups
- Create system-wide commands for global use
- Hot reload functionality for development
- Verbose execution with detailed logging

### 🔐 Authentication
- Secure login with connection keys
- Personal template storage and management
- Access control for private templates

### 🛠️ Development Tools
- Lines of code counter with smart filtering
- Directory tree visualization
- License generator for open source projects
- HTTP status code reference tool

## Configuration

### Project Configuration (`cook.config.json`)

```json
{
  "name": "my-project",
  "author": "username",
  "stir": true,
  "cmd": {
    "serve": ["npm run dev"],
    "build": ["npm run build"],
    "clean": ["rm -rf node_modules"]
  },
  "template": {
    "name": "my-template",
    "category": "web",
    "version": "1.0.0",
    "stack": ["react", "typescript"],
    "github": "https://github.com/user/repo"
  }
}
```

### Watch Configuration (Optional)

```json
{
  "watch": {
    "directory": ".",
    "patterns": ["**/*.js", "**/*.ts"],
    "ignore": ["node_modules", ".git", "dist"]
  }
}
```

## Common Workflows

### Starting a New Project

```bash
# Option 1: Use an existing template
cook bake username/@category/template-name
cd my-new-project
npm install
cook run serve

# Option 2: Initialize from scratch
mkdir my-project && cd my-project
cook init
# Set up your project files
cook run serve
```

### Creating and Sharing Templates

```bash
# Develop your project
cook init
# ... build your awesome project ...

# Create a template
cook mold create

# Share your template ID with others
# They can use: cook bake yourusername/@category/template-name
```

### Command Automation

```bash
# Add local command groups
cook cmd add

# Add system-wide commands
cook sys add

# Run commands with hot reload
cook run serve --hot

# Run with verbose output
cook run build --verbose
```

### Development Utilities

```bash
# Analyze your codebase
cook tool loc

# Visualize project structure
cook tool tree

# Generate a license
cook tool licence

# Look up HTTP status codes
cook tool status 404
```

## Tips and Best Practices

### Template Creation
- Include comprehensive documentation in your templates
- Use meaningful category names (@web, @mobile, @backend)
- Keep templates focused on specific use cases
- Include example configuration and setup instructions

### Command Groups
- Use descriptive names for command groups
- Group related commands together
- Include cleanup commands for development artifacts
- Test commands in different environments

### Hot Reload
- Use hot reload for development workflows
- Configure watch patterns to avoid unnecessary restarts
- Exclude build outputs and dependencies from watching
- Combine with verbose mode for debugging

### System Commands
- Create shortcuts for frequently used operations
- Use descriptive names and descriptions
- Include error handling in complex command sequences
- Test system commands across different projects

## Troubleshooting

### Common Issues

**Authentication Problems:**
```bash
# Check authentication status
cook auth now

# Re-login if needed
cook auth logout
cook auth login
```

**Template Issues:**
```bash
# Verify template exists
cook mold list

# Check template details
cook mold show

# Ensure you're logged in for private templates
cook auth login
```

**Command Execution Problems:**
```bash
# List available command groups
cook cmd list

# Run with verbose output for debugging
cook run serve --verbose

# Check your cook.config.json syntax
```

### Getting Help

- Use `--help` with any command for detailed usage information
- Check command-specific documentation in this guide
- Verify your `cook.config.json` syntax and structure
- Ensure you have proper authentication for template operations

## Contributing

Cook CLI is open source and welcomes contributions:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests and documentation
5. Submit a pull request

## License

Cook CLI is licensed under the MIT License. See the LICENSE file for details.

---

**Need help?** Check the individual command documentation or open an issue on GitHub.
