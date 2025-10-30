# Cook CLI Documentation

Welcome to the Cook CLI documentation! Cook is a Swiss Army knife for developers - template management, command automation, and development utilities all in one.

## 📖 Documentation Structure

### Getting Started
- **[Installation Guide](installation.md)** - How to install and set up Cook CLI
- **[Quick Start](quickstart.md)** - Get started in 5 minutes
- **[Configuration](configuration.md)** - Configure your Cook projects

### Core Features
- **[Authentication](authentication.md)** - Login and manage your account
- **[Template Management](templates.md)** - Create, share, and use templates
- **[Command Execution](command-execution.md)** - Run and automate commands
- **[Sys Commands](sys-commands.md)** - User-level command system

### Command Reference
- **[cook init](commands/init.md)** - Initialize a new project
- **[cook bake](commands/bake.md)** - Use a template
- **[cook run](commands/run.md)** - Run command groups
- **[cook auth](commands/auth.md)** - Authentication commands
- **[cook mold](commands/mold.md)** - Template management commands
- **[cook cmd](commands/cmd.md)** - Command execution and management
- **[cook tool](commands/tool.md)** - Development utilities
- **[cook version](commands/version.md)** - Version information

### Advanced Topics
- **[Workflows](workflows.md)** - Real-world workflow examples
- **[Hot Reload](hot-reload.md)** - Watch mode for development
- **[Error Handling](error-handling.md)** - Debugging and troubleshooting
- **[Advanced Usage](advanced.md)** - Tips, tricks, and best practices

### Additional Resources
- **[FAQ](faq.md)** - Frequently asked questions
- **[Troubleshooting](troubleshooting.md)** - Common issues and solutions
- **[Contributing](../CONTRIBUTING.md)** - Contribute to Cook CLI

## 🔍 Quick Links

### Popular Commands
- [Create a template](commands/mold.md#create)
- [Use a template](commands/bake.md)
- [Run commands with hot reload](commands/run.md#hot-reload)
- [Add sys commands](commands/cmd.md#sys-add)
- [Count lines of code](commands/tool.md#loc)

### Common Workflows
- [Share a project template](workflows.md#template-workflows)
- [Automate development workflow](workflows.md#development-workflows)
- [Deploy with Cook](workflows.md#deployment-workflows)
- [Team collaboration](workflows.md#team-workflows)

## 💡 Need Help?

- Check the [FAQ](faq.md) for common questions
- See [Troubleshooting](troubleshooting.md) if you encounter issues
- Run `cook <command> --help` for command-specific help
- Visit our [GitHub repository](https://github.com/TheAlphaOnes/cook-cli) for more information

## 🚀 Quick Example

```bash
# Install and authenticate
cook auth login

# Initialize a project
cook init

# Use a template
cook bake username/@web/react-starter

# Run your dev environment
cook run dev --hot
```

---

**Next Steps:**
- New to Cook? Start with the [Quick Start Guide](quickstart.md)
- Want to dive deep? Check out the [Complete Documentation](installation.md)
- Need examples? See [Workflows](workflows.md)
