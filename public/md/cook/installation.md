# Cook CLI Installation Guide

Complete installation instructions for Cook CLI across all operating systems.

## Quick Install

### Prerequisites

Cook CLI requires Python 3.7 or higher:

```bash
python3 --version
```

### Install from Source

```bash
# Clone repository
git clone https://github.com/TheAlphaOnes/cook-cli.git
cd cook-cli

# Install dependencies
pip install -r requirements.txt

# Run Cook CLI
python3 main.py --help
```

---

## Platform Installation

### Linux (Ubuntu/Debian)

**Method 1: Package Manager**

```bash
# Update packages
sudo apt update

# Install Python and Git
sudo apt install python3 python3-pip git

# Clone and install
git clone https://github.com/TheAlphaOnes/cook-cli.git
cd cook-cli
pip3 install -r requirements.txt

# Optional: Global access
sudo ln -sf $(pwd)/main.py /usr/local/bin/cook
chmod +x /usr/local/bin/cook
```

**Method 2: Virtual Environment**

```bash
# Install virtual environment
sudo apt install python3-venv

# Create environment
python3 -m venv cook-env
source cook-env/bin/activate

# Install Cook CLI
git clone https://github.com/TheAlphaOnes/cook-cli.git
cd cook-cli
pip install -r requirements.txt
```

**Method 3: Build Executable**

```bash
# Install PyInstaller
pip3 install pyinstaller

# Clone and build
git clone https://github.com/TheAlphaOnes/cook-cli.git
cd cook-cli
pip3 install -r requirements.txt
pyinstaller cook.spec --clean

# Use executable
./dist/cook/cook --help

# Optional: Install globally
sudo cp dist/cook/cook /usr/local/bin/
```

### macOS

**Method 1: Homebrew**

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

# Optional: Create alias
COOK_PATH="$(pwd)/main.py"
echo "alias cook='python3 $COOK_PATH'" >> ~/.zshrc
source ~/.zshrc
```

**Method 2: MacPorts**

```bash
# Install Python via MacPorts
sudo port install python39 py39-pip git

# Clone and install
git clone https://github.com/TheAlphaOnes/cook-cli.git
cd cook-cli
pip3.9 install -r requirements.txt
```

**Method 3: Build macOS App**

```bash
# Install PyInstaller
pip3 install pyinstaller

# Build application
git clone https://github.com/TheAlphaOnes/cook-cli.git
cd cook-cli
pip3 install -r requirements.txt
pyinstaller cook.spec --clean

# Use app
./dist/cook/cook --help

# Optional: Move to Applications
cp -r dist/cook /Applications/Cook.app
```

### Windows

**Method 1: Microsoft Store Python**

```powershell
# Install Python from Microsoft Store
# Then in PowerShell or Command Prompt:

# Clone and install
git clone https://github.com/TheAlphaOnes/cook-cli.git
cd cook-cli
pip install -r requirements.txt

# Run Cook CLI
python main.py --help
```

**Method 2: Chocolatey**

```powershell
# Install Chocolatey (run as Administrator)
Set-ExecutionPolicy Bypass -Scope Process -Force

$SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol
[System.Net.ServicePointManager]::SecurityProtocol = $SecurityProtocol -bor 3072

$InstallScript = 'https://community.chocolatey.org/install.ps1'
iex ((New-Object System.Net.WebClient).DownloadString($InstallScript))

# Install dependencies
choco install python3 git
refreshenv

# Clone and install
git clone https://github.com/TheAlphaOnes/cook-cli.git
cd cook-cli
pip install -r requirements.txt
```

**Method 3: Build Windows Executable**

```powershell
# Install PyInstaller
pip install pyinstaller

# Build executable
git clone https://github.com/TheAlphaOnes/cook-cli.git
cd cook-cli
pip install -r requirements.txt
pyinstaller cook.spec --clean

# Use executable
.\dist\cook\cook.exe --help
```

**Method 4: WSL (Windows Subsystem for Linux)**

```bash
# In WSL terminal, follow Linux instructions:
sudo apt update
sudo apt install python3 python3-pip git
git clone https://github.com/TheAlphaOnes/cook-cli.git
cd cook-cli
pip3 install -r requirements.txt
```

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

## Docker Installation

### Using Docker

```bash
# Create Dockerfile
cat > Dockerfile << EOF
FROM python:3.9-slim

WORKDIR /app

RUN apt-get update && \
    apt-get install -y git && \
    rm -rf /var/lib/apt/lists/*

RUN git clone https://github.com/TheAlphaOnes/cook-cli.git .

RUN pip install -r requirements.txt

RUN echo '#!/bin/bash\npython3 main.py "$@"' > /usr/local/bin/cook && \
    chmod +x /usr/local/bin/cook

ENTRYPOINT ["cook"]
EOF

# Build image
docker build -t cook-cli .

# Run Cook CLI
docker run --rm cook-cli --help

# Create alias
DOCKER_CMD="docker run --rm -v \$(pwd):/workspace -w /workspace cook-cli"
echo "alias cook='$DOCKER_CMD'" >> ~/.bashrc
source ~/.bashrc
```

### Using Docker Compose

```yaml
# docker-compose.yml
version: '3.8'

services:
  cook:
    build: .
    volumes:
      - .:/workspace
    working_dir: /workspace
    stdin_open: true
    tty: true
```

```bash
# Run with Docker Compose
docker-compose run --rm cook --help
```

---

## Verification

After installation, verify Cook CLI works:

```bash
# Check version
cook version

# Initialize test project
mkdir test-cook && cd test-cook
cook init

# List commands
cook --help

# Test authentication (optional)
cook auth now
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
