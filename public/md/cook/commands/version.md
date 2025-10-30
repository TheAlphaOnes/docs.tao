# cook version

Display Cook CLI version information.

## Synopsis

```bash
cook version
```

## Description

Shows the current version of Cook CLI along with additional information about the build and platform.

## Usage

```bash
$ cook version

Cook CLI
Version: 1.0.0
Build: stable
Platform: macOS-arm64
Python: 3.11.5

🍳 Happy cooking!
```

## Output Format

The version command displays:

- **Cook CLI** - Application name
- **Version** - Semantic version number (e.g., 1.0.0)
- **Build** - Build type (stable, beta, dev)
- **Platform** - Operating system and architecture
- **Python** - Python interpreter version

## Version Number

Cook CLI follows [Semantic Versioning](https://semver.org/):

```
MAJOR.MINOR.PATCH
```

- **MAJOR** - Breaking changes (1.0.0 → 2.0.0)
- **MINOR** - New features, backward compatible (1.0.0 → 1.1.0)
- **PATCH** - Bug fixes (1.0.0 → 1.0.1)

## Examples

### Example 1: Check Version

```bash
$ cook version

Cook CLI
Version: 1.0.0
Build: stable
Platform: Linux-x86_64
Python: 3.10.12
```

### Example 2: Verify Installation

```bash
# After installing or updating
$ cook version

# Ensure correct version is installed
```

### Example 3: Bug Reporting

```bash
# Include version info when reporting bugs
$ cook version > version-info.txt
```

### Example 4: Script Usage

```bash
#!/bin/bash

# Check Cook CLI is installed
if cook version &>/dev/null; then
  echo "Cook CLI is installed"
else
  echo "Cook CLI not found"
  exit 1
fi
```

## Use Cases

- Verify Cook CLI installation
- Check for updates
- Report bugs with version info
- Validate build in CI/CD
- Debug compatibility issues

## Update Cook CLI

To update to the latest version:

```bash
# Navigate to Cook CLI directory
cd path/to/cook-cli

# Pull latest changes
git pull origin master

# Update dependencies
pip install --upgrade -r requirements.txt

# Rebuild if using PyInstaller
pyinstaller cook.spec --clean

# Verify new version
cook version
```

## Version History

### 1.0.0 - Initial Release
- Template management (create, use, list, show, update)
- Command execution with hot reload
- Sys command system
- Development tools (loc, tree, licence, status)
- Authentication system
- Error handling

### Future Releases

Check the [GitHub Releases](https://github.com/TheAlphaOnes/cook-cli/releases) page for:
- Changelog
- New features
- Bug fixes
- Breaking changes

## Help and Support

For help with specific commands, use `--help`:

```bash
# General help
cook --help

# Command-specific help
cook auth --help
cook mold --help
cook cmd sys --help
cook tool --help
```

## Platform Support

Cook CLI supports:

- **macOS** - 10.15+ (Intel and Apple Silicon)
- **Linux** - Ubuntu 20.04+, Debian 10+, Fedora 30+
- **Windows** - Windows 10+ (with Python 3.8+)

## Python Version Requirements

- **Minimum:** Python 3.8
- **Recommended:** Python 3.10+
- **Latest Tested:** Python 3.12

Check your Python version:

```bash
python3 --version
```

## Troubleshooting

### Command Not Found

```bash
$ cook version
command not found: cook
```

**Solution:**
- Check installation: `python3 main.py --version`
- Add to PATH if using built binary
- Reinstall Cook CLI

### Wrong Version Displayed

```bash
$ cook version
Version: 0.9.0

# Expected: 1.0.0
```

**Solution:**
```bash
# Update Cook CLI
cd path/to/cook-cli
git pull
pip install -r requirements.txt
pyinstaller cook.spec --clean
```

### Version Mismatch

```bash
$ cook version
Version: 1.0.0

# But features from 1.1.0 not working
```

**Solution:**
- Pull latest code
- Rebuild application
- Clear cache: `rm -rf __pycache__`

## Related Commands

- **[cook --help](../README.md)** - General help
- **[Installation](../installation.md)** - Install Cook CLI
- **[Quick Start](../quickstart.md)** - Get started guide

## See Also

- [Installation Guide](../installation.md)
- [Updating Cook](../installation.md#updating-cook-cli)
- [Changelog](https://github.com/TheAlphaOnes/cook-cli/releases)

---

**Complete Command Reference:**
- [cook init](init.md)
- [cook bake](bake.md)
- [cook run](run.md)
- [cook auth](auth.md)
- [cook mold](mold.md)
- [cook cmd](cmd.md)
- [cook tool](tool.md)
