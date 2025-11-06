# Building Cook CLI

Complete guide for building Cook CLI into standalone executables using PyInstaller.

## Prerequisites

- Python 3.7 or higher
- Dependencies installed: `pip install -r requirements.txt`
- PyInstaller: `pip install pyinstaller`

## Quick Build

```bash
# Install PyInstaller
pip install pyinstaller

# Build executable
pyinstaller cook.spec --clean

# Test executable
./dist/cook/cook --help
```

## Build Configuration

Cook CLI uses a custom `cook.spec` file with optimized settings.

### Key Features

**Dependencies**: Automatically includes all required Python packages
**Hidden Imports**: Ensures runtime modules are bundled
**Compression**: Uses UPX for smaller file sizes
**Cross-Platform**: Works on macOS, Linux, Windows

### Spec File Structure

```python
# Dependencies and metadata
datas = []
datas += copy_metadata('typer')
datas += copy_metadata('inquirer')
# ... other dependencies

# Hidden imports for runtime
hiddenimports=[
    'typer', 'inquirer', 'yaspin',
    'zstandard', 'requests', 'watchdog',
    'rich', 'platformdirs', 'tqdm'
]
```

---

## Platform Builds

### macOS

**Standard Build**
```bash
pyinstaller cook.spec --clean
```

**With Code Signing**
```bash
pyinstaller cook.spec --clean --codesign-identity "Developer ID Application: Your Name"
```

**Create DMG**
```bash
# Install create-dmg
brew install create-dmg

# Create DMG package
create-dmg \
  --volname "Cook CLI" \
  --window-pos 200 120 \
  --window-size 600 300 \
  --icon-size 100 \
  --icon "cook" 175 120 \
  --hide-extension "cook" \
  --app-drop-link 425 120 \
  "Cook-CLI.dmg" \
  "dist/cook/"
```

### Linux

**Standard Build**
```bash
pyinstaller cook.spec --clean
```

**With UPX Compression**
```bash
# Install UPX
sudo apt install upx  # Ubuntu/Debian

# Build with compression
pyinstaller cook.spec --clean --upx-dir /usr/bin
```

**Create AppImage**
```bash
# Download appimagetool
wget https://github.com/AppImage/AppImageKit/releases/download/continuous/appimagetool-x86_64.AppImage
chmod +x appimagetool-x86_64.AppImage

# Create AppDir structure
mkdir -p Cook.AppDir/usr/bin
cp -r dist/cook/* Cook.AppDir/usr/bin/
cp assets/cook.desktop Cook.AppDir/
cp assets/cook.png Cook.AppDir/

# Build AppImage
./appimagetool-x86_64.AppImage Cook.AppDir Cook-CLI.AppImage
```

### Windows

**Standard Build**
```powershell
pyinstaller cook.spec --clean
```

**With UPX Compression**
```powershell
# Download UPX from https://upx.github.io/
pyinstaller cook.spec --clean --upx-dir "C:\path\to\upx"
```

**Create Installer**
```powershell
# Using NSIS (requires NSIS installation)
makensis cook-installer.nsi
```

---

## Build Options

### Development Build

```bash
# With debug information
pyinstaller cook.spec --clean --debug=all

# Without UPX (faster build)
pyinstaller cook.spec --clean --noupx
```

### Production Build

```bash
# Optimized with compression
pyinstaller cook.spec --clean --upx-dir /usr/bin

# Strip debug symbols (Linux/macOS)
pyinstaller cook.spec --clean --strip
```

### Single File Build

Modify `cook.spec` for single executable:

```python
exe = EXE(
    pyz,
    a.scripts,
    a.binaries,    # Add this line
    a.datas,       # Add this line
    [],
    name='cook',
    debug=False,
    bootloader_ignore_signals=False,
    strip=False,
    upx=True,
    upx_exclude=[],
    runtime_tmpdir=None,
    console=True,
)

# Remove COLLECT section for single file
```

---

## Build Verification

### Test Basic Functionality

```bash
# Test help
./dist/cook/cook --help

# Test version
./dist/cook/cook version

# Test core commands
./dist/cook/cook tool status 200
./dist/cook/cook tool loc

# Test in new directory
mkdir test-build && cd test-build
../dist/cook/cook init
```

### Performance Check

```bash
# Check file size
du -sh dist/cook/

# Test startup time
time ./dist/cook/cook --help
```

---

## Build Artifacts

After successful build:

```
dist/
└── cook/
    ├── cook                 # Main executable
    └── _internal/           # Supporting files
        ├── base_library.zip
        ├── libpython3.x.dylib
        └── [dependencies]
```

### File Sizes

- **macOS**: ~65MB
- **Linux**: ~70MB
- **Windows**: ~75MB

---

## Troubleshooting

### Missing Dependencies

```bash
# Error: ModuleNotFoundError at runtime
# Solution: Add to hiddenimports in cook.spec
hiddenimports=['missing_module_name']
```

### Large Build Size

```bash
# Use UPX compression
pyinstaller cook.spec --clean --upx-dir /usr/bin

# Exclude unnecessary modules
excludes=['tkinter', 'matplotlib']  # Add to cook.spec
```

### Slow Startup

```bash
# Disable UPX for faster startup
pyinstaller cook.spec --clean --noupx

# Use directory distribution (default)
```

### Permission Issues (macOS)

```bash
# Remove quarantine
xattr -dr com.apple.quarantine dist/cook/cook

# Sign executable
codesign --force --deep --sign "Developer ID" dist/cook/cook
```

### Linux Missing Libraries

```bash
# Install system libraries
sudo apt install libc6-dev libffi-dev libssl-dev
```

### Windows Antivirus

Some antivirus software may flag PyInstaller executables.
Add exclusion for dist/ directory or sign the executable.

---

## Distribution

### Release Packages

**macOS DMG**
```bash
create-dmg --volname "Cook CLI" "Cook-CLI.dmg" "dist/cook/"
```

**Linux Tarball**
```bash
cd dist
tar -czf cook-cli-linux.tar.gz cook/
```

**Windows ZIP**
```powershell
Compress-Archive -Path "dist\cook" -DestinationPath "cook-cli-windows.zip"
```

### GitHub Actions

```yaml
name: Build Cook CLI

on:
  push:
    tags: ['v*']

jobs:
  build:
    runs-on: ${{ matrix.os }}
    strategy:
      matrix:
        os: [ubuntu-latest, windows-latest, macos-latest]

    steps:
    - uses: actions/checkout@v3

    - name: Set up Python
      uses: actions/setup-python@v4
      with:
        python-version: '3.9'

    - name: Install dependencies
      run: |
        pip install -r requirements.txt
        pip install pyinstaller

    - name: Build executable
      run: pyinstaller cook.spec --clean

    - name: Upload artifacts
      uses: actions/upload-artifact@v3
      with:
        name: cook-cli-${{ matrix.os }}
        path: dist/
```

---

## Optimization

### Reduce Size

1. **Exclude unused modules** in cook.spec
2. **Use UPX compression**
3. **Remove debug information**
4. **Optimize imports** in source

### Improve Startup

1. **Use directory distribution**
2. **Disable UPX compression**
3. **Minimize main.py imports**
4. **Use lazy imports**

---

## Security

### Code Signing

**macOS**: Use Apple Developer ID
**Windows**: Use Authenticode certificate
**Linux**: Use GPG signatures

### Verification

```bash
# Create checksums
shasum -a 256 dist/cook/cook > cook.sha256

# Sign checksums
gpg --sign cook.sha256
```

---

## Next Steps

After building:

1. **Test thoroughly** on target platforms
2. **Create packages** (DMG, MSI, DEB)
3. **Set up distribution** (GitHub Releases)
4. **Document installation** for users
5. **Automate builds** for releases

📋 **[Installation Guide](/docs/COOK/cook-installation)** - User installation instructions

For more help, see the [Cook CLI documentation](/docs/COOK/cook-overview).
