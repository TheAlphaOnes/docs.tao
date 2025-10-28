# Installation Guide

This guide will help you install Cook CLI on your system.

## Prerequisites

- Python 3.8 or higher
- pip (Python package manager)
- Git

## Installation Methods

### Method 1: From Source (Recommended)

```bash
# Clone the repository
git clone https://github.com/TheAlphaOnes/cook-cli.git
cd cook-cli

# Install dependencies
pip install -r requirements.txt

# Test the installation
python3 main.py --help
```

### Method 2: Build with PyInstaller

For a standalone executable:

```bash
# After cloning and installing dependencies
pyinstaller cook.spec --clean

# Run the built executable
./dist/cook/cook --help

# Optional: Add to PATH
export PATH="$PATH:$(pwd)/dist/cook"
```

### Method 3: Development Installation

For development with editable installation:

```bash
# Clone the repository
git clone https://github.com/TheAlphaOnes/cook-cli.git
cd cook-cli

# Create a virtual environment
python3 -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Install in development mode
pip install -e .
```

## Verify Installation

Run the following command to verify Cook CLI is installed correctly:

```bash
$ cook --help

Usage: cook [OPTIONS] COMMAND [ARGS]...

  Cook - A everyday CLI tool for developers

Options:
  --help  Show this message and exit.

Commands:
  init     Initialize a new Cook project in the current directory
  bake     Bake a template into the current directory
  run      Run commands defined in cook.config.json
  version  Show Cook CLI version information
  auth     Authentication commands
  mold     Template management commands
  cmd      Command execution and management
  tool     Development utilities
```

## System Requirements

### Minimum Requirements
- **OS:** macOS, Linux, or Windows
- **Python:** 3.8+
- **RAM:** 512 MB
- **Disk Space:** 100 MB

### Recommended Requirements
- **OS:** macOS 10.15+, Ubuntu 20.04+, Windows 10+
- **Python:** 3.10+
- **RAM:** 2 GB
- **Disk Space:** 500 MB (including templates)

## Dependencies

Cook CLI requires the following Python packages:

```txt
typer>=0.9.0
requests>=2.31.0
rich>=13.0.0
watchdog>=3.0.0
platformdirs>=3.0.0
```

These are automatically installed when you run `pip install -r requirements.txt`.

## Troubleshooting Installation

### Python Version Issues

If you get a Python version error:

```bash
# Check your Python version
python3 --version

# If too old, install a newer version
# macOS with Homebrew
brew install python@3.11

# Ubuntu/Debian
sudo apt install python3.11

# Update alternatives (Linux)
sudo update-alternatives --install /usr/bin/python3 python3 /usr/bin/python3.11 1
```

### Permission Issues

If you encounter permission errors:

```bash
# Option 1: Use virtual environment (recommended)
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt

# Option 2: Install with --user flag
pip install --user -r requirements.txt

# Option 3: Use sudo (not recommended)
sudo pip install -r requirements.txt
```

### Missing Dependencies

If modules are missing:

```bash
# Reinstall all dependencies
pip install --force-reinstall -r requirements.txt

# Or install individually
pip install typer requests rich watchdog platformdirs
```

### PyInstaller Build Issues

If PyInstaller fails:

```bash
# Update PyInstaller
pip install --upgrade pyinstaller

# Clean previous builds
rm -rf build dist __pycache__

# Rebuild
pyinstaller cook.spec --clean
```

## Platform-Specific Notes

### macOS

```bash
# Install Homebrew if not already installed
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Install Python
brew install python@3.11

# Clone and install Cook
git clone https://github.com/TheAlphaOnes/cook-cli.git
cd cook-cli
pip3 install -r requirements.txt
```

### Linux (Ubuntu/Debian)

```bash
# Update package list
sudo apt update

# Install Python and pip
sudo apt install python3 python3-pip git

# Clone and install Cook
git clone https://github.com/TheAlphaOnes/cook-cli.git
cd cook-cli
pip3 install -r requirements.txt
```

### Windows

```powershell
# Install Python from python.org
# Make sure to check "Add Python to PATH" during installation

# Clone the repository
git clone https://github.com/TheAlphaOnes/cook-cli.git
cd cook-cli

# Install dependencies
pip install -r requirements.txt

# Run Cook
python main.py --help
```

## Post-Installation

After installing Cook CLI:

1. **Authenticate** - Get your connection key from the Cook platform
   ```bash
   cook auth login
   ```

2. **Verify Setup** - Check your authentication status
   ```bash
   cook auth now
   ```

3. **Initialize a Project** - Create your first Cook project
   ```bash
   cook init
   ```

## Updating Cook CLI

To update to the latest version:

```bash
# Navigate to your Cook CLI directory
cd path/to/cook-cli

# Pull latest changes
git pull origin master

# Update dependencies
pip install --upgrade -r requirements.txt

# Rebuild if using PyInstaller
pyinstaller cook.spec --clean
```

## Uninstalling Cook CLI

To completely remove Cook CLI:

```bash
# Remove the Cook CLI directory
rm -rf path/to/cook-cli

# Remove virtual environment if created
rm -rf venv

# Remove configuration files (optional)
rm -rf ~/.config/cook
rm -rf ~/Library/Application\ Support/cook  # macOS
```

## Next Steps

- **[Quick Start Guide](quickstart.md)** - Get started in 5 minutes
- **[Authentication](authentication.md)** - Set up your account
- **[Configuration](configuration.md)** - Configure your projects

---

**Need help?** Check the [Troubleshooting Guide](troubleshooting.md) or visit our [GitHub Issues](https://github.com/TheAlphaOnes/cook-cli/issues).
