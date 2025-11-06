# Cook CLI Installation Guide

Complete installation instructions for Cook CLI across all operating systems.

## Quick Install (Recommended)

### Download Pre-built Executables

**Windows:**
```bash
# Download and extract
curl -L -o cook-win.zip \
  https://github.com/TheAlphaOnes/cook-cli/releases/download/v1.0.0-alpha.1/cook-win.zip
unzip cook-win.zip
cd cook

# Run Cook CLI
./cook.exe --help
```

**macOS:**
```bash
# Download and extract
curl -L -o cook-mac.zip \
  https://github.com/TheAlphaOnes/cook-cli/releases/download/v1.0.0-alpha.1/cook-mac.zip
unzip cook-mac.zip
cd cook

# Run Cook CLI
./cook --help
```

**Linux:**
```bash
# Download and extract (use macOS build for now)
curl -L -o cook-linux.zip \
  https://github.com/TheAlphaOnes/cook-cli/releases/download/v1.0.0-alpha.1/cook-mac.zip
unzip cook-linux.zip
cd cook

# Make executable and run
chmod +x cook
./cook --help
```

### Install from Source

**If you prefer to build from source or need the latest development version:**

```bash
# Clone repository
git clone https://github.com/TheAlphaOnes/cook-cli.git
cd cook-cli

# Install dependencies
pip install -r requirements.txt

# Run Cook CLI
python3 main.py --help
```

📋 **[Building Guide](/docs/COOK/cook-building)** - Build from source

---

## Platform Installation

### Linux (Ubuntu/Debian)

**Method 1: Pre-built Executable (Recommended)**

```bash
# Download and extract
wget -O cook-linux.zip \
  https://github.com/TheAlphaOnes/cook-cli/releases/download/v1.0.0-alpha.1/cook-mac.zip
unzip cook-linux.zip
cd cook

# Make executable
chmod +x cook

# Test installation
./cook --help

# Optional: Install globally
sudo cp cook /usr/local/bin/
```

📋 **[Building Guide](/docs/COOK/cook-building)** - Build from source

### macOS

**Method 1: Pre-built Executable (Recommended)**

```bash
# Download and extract
curl -L -o cook-mac.zip \
  https://github.com/TheAlphaOnes/cook-cli/releases/download/v1.0.0-alpha.1/cook-mac.zip
unzip cook-mac.zip
cd cook

# Test installation
./cook --help

# Optional: Install globally
sudo cp cook /usr/local/bin/

# Optional: Remove quarantine (if needed)
xattr -dr com.apple.quarantine cook
```

**Method 2: Build from Source**

```bash
# Install Homebrew (if needed)
/bin/bash -c "$(curl -fsSL \
  https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Install dependencies
brew install python3 git

# Clone and install
git clone https://github.com/TheAlphaOnes/cook-cli.git
cd cook-cli
pip3 install -r requirements.txt

# Run Cook CLI
python3 main.py --help
```

📋 **[Building Guide](/docs/COOK/cook-building)** - Build from source

### Windows

**Method 1: Pre-built Executable (Recommended)**

```powershell
# Download and extract
$BaseUrl = "https://github.com/TheAlphaOnes/cook-cli/releases/download"
$Version = "v1.0.0-alpha.1"
$DownloadUrl = "$BaseUrl/$Version/cook-win.zip"
Invoke-WebRequest -Uri $DownloadUrl -OutFile "cook-win.zip"
Expand-Archive -Path "cook-win.zip" -DestinationPath "."
cd cook

# Test installation
.\cook.exe --help

# Optional: Add to PATH
$env:PATH += ";$(Get-Location)"
```

**Method 2: Build from Source**

```powershell
# Install Python from Microsoft Store or python.org
# Then in PowerShell or Command Prompt:

# Clone and install
git clone https://github.com/TheAlphaOnes/cook-cli.git
cd cook-cli
pip install -r requirements.txt

# Run Cook CLI
python main.py --help
```

📋 **[Building Guide](/docs/COOK/cook-building)** - Build from source

---

## Development Setup

### Create Development Environment

```bash
# Clone repository
git clone https://github.com/TheAlphaOnes/cook-cli.git
cd cook-cli

# Create virtual environment
python3 -m venv venv

# Activate environment
# Linux/macOS:
source venv/bin/activate
# Windows:
venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Optional: Development tools
pip install pytest black flake8 mypy

# Run tests (if available)
pytest

# Run Cook CLI
python main.py --help
```

---

## Verification

After installation, verify Cook CLI works:

```bash
# Check version (use ./cook on Linux/macOS, .\cook.exe on Windows)
./cook version

# Initialize test project
mkdir test-cook && cd test-cook
../cook init  # Adjust path as needed

# List commands
./cook --help

# Test authentication (optional)
./cook auth now
```

Expected output:
```
  _________  ____  __ __
 / ___/ __ \/ __ \/ //_/
/ /__/ /_/ / /_/ / ,<
\___/\____/\____/_/|_|

COOK_VERSION 1.0.0 (alpha)
```

---

## Troubleshooting

### Common Issues

**Python Not Found**
```bash
# Linux/macOS
which python3
# Windows
where python

# If not found, install from python.org
```

**Permission Denied**
```bash
# Linux/macOS
chmod +x main.py
# Or run with python3
python3 main.py --help
```

**Module Not Found**
```bash
# Reinstall dependencies
pip install -r requirements.txt --force-reinstall
```

**PyInstaller Build Fails**
```bash
# Clear cache
pyinstaller --clean cook.spec

# Install specific version
pip install pyinstaller==5.13.2
```

### Platform Issues

**macOS: Command Not Found**
```bash
# Add to PATH
echo 'export PATH="/path/to/cook-cli:$PATH"' >> ~/.zshrc
source ~/.zshrc
```

**Windows: Execution Policy**
```powershell
# Set policy
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

**Linux: Permission Denied**
```bash
# Use --user flag
pip3 install --user -r requirements.txt
```

---

## Uninstallation

### Remove Cook CLI

```bash
# Remove source installation
rm -rf /path/to/cook-cli

# Remove virtual environment
rm -rf cook-env

# Remove global symlinks
sudo rm /usr/local/bin/cook

# Remove aliases from shell config
# Edit ~/.bashrc, ~/.zshrc, etc.
```

### Clean Dependencies

```bash
# If using virtual environment
rm -rf venv

# If installed globally
pip uninstall typer inquirer yaspin zstandard requests \
              watchdog rich platformdirs tqdm gitignorefile
```

---

## Next Steps

After installation:

1. **Initialize project**: `cook init`
2. **Set up authentication**: `cook auth login`
3. **Explore templates**: `cook mold list`
4. **Create system commands**: `cook sys add`
5. **Read documentation**: [Command Reference](/docs/COOK/cook-overview)

📋 **[Complete Building Guide](/docs/COOK/cook-building)** - Build standalone executables

For help, visit the [Cook CLI documentation](/docs/COOK/cook-overview) or open an issue on GitHub.
