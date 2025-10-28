# cook mold

Template management commands - create, use, list, show, and update templates.

## Synopsis

```bash
cook mold <subcommand> [OPTIONS]
```

## Description

The `cook mold` command group manages templates in Cook CLI. Use these commands to create templates from your projects, browse available templates, use templates in new projects, and update existing templates.

## Subcommands

| Command | Description |
|---------|-------------|
| `create` | Create a new template from current directory |
| `use` | Interactively select and use a template |
| `list` | List all available templates |
| `show` | Show detailed information about a template |
| `update` | Update an existing template |

---

## cook mold create {#create}

Create a template from your current directory and upload it to the Cook platform.

### Synopsis

```bash
cook mold create
```

### Description

Creates a template package from your current directory, excluding common build artifacts and dependencies, then uploads it to the Cook platform for reuse.

### Interactive Workflow

```bash
$ cook mold create

📦 Creating template from: /Users/you/projects/my-app

Template name: react-vite-starter
Category:
> web
  mobile
  backend
  cli
  other

Description: Modern React starter with Vite and TypeScript
Tech stack: react,typescript,vite,tailwindcss
GitHub repository: https://github.com/you/react-vite-starter
Version: 1.0.0

📦 Packing template...
⏳ Compressing files (excluding node_modules, .git, dist)...
✅ Template packed: react-vite-starter.tar.zst (2.3 MB)

📤 Uploading template...
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 100% 2.3/2.3 MB
✅ Upload successful!

✅ Template created successfully!

Template ID: yourname/@web/react-vite-starter
Share: cook bake yourname/@web/react-vite-starter
```

### Template Categories

- **web** - Web applications (React, Vue, Next.js, etc.)
- **mobile** - Mobile apps (React Native, Flutter)
- **backend** - Backend services (APIs, servers)
- **cli** - Command-line tools
- **other** - Libraries, utilities, other projects

### Excluded Files

Cook automatically excludes:
- `node_modules/`
- `.git/`
- `dist/`, `build/`
- `.next/`, `.nuxt/`
- `__pycache__/`, `*.pyc`
- `.DS_Store`
- `*.log`

### Requirements

- Must be authenticated: `cook auth login`
- Directory must contain meaningful project files
- Template name must be unique

### Examples

**Example 1: Create React Template**

```bash
$ cd ~/projects/my-react-starter
$ cook mold create

Template name: modern-react-starter
Category: web
Description: React + TypeScript + Vite + Tailwind CSS
Tech stack: react,typescript,vite,tailwindcss,eslint
GitHub: https://github.com/you/modern-react-starter
Version: 1.0.0

✅ Template created: yourname/@web/modern-react-starter
```

**Example 2: Create Backend Template**

```bash
$ cd ~/projects/fastapi-template
$ cook mold create

Template name: fastapi-rest-api
Category: backend
Description: FastAPI REST API with PostgreSQL
Tech stack: fastapi,python,postgresql,docker
GitHub: https://github.com/you/fastapi-template
Version: 1.0.0

✅ Template created: yourname/@backend/fastapi-rest-api
```

---

## cook mold use {#use}

Interactively browse and select a template to use in your current directory.

### Synopsis

```bash
cook mold use
```

### Description

Browse available templates, view details, and select one to apply to your current directory. This is the interactive alternative to `cook bake`.

### Interactive Workflow

```bash
$ cook mold use

Select a template:
> alice/@web/react-vite-starter — Modern React with Vite
  bob/@backend/fastapi-template — FastAPI REST API
  charlie/@mobile/react-native-expo — React Native Expo

Show details for: alice/@web/react-vite-starter

Name: react-vite-starter
Author: alice
Description: Modern React starter with Vite
Tech Stack: react, typescript, vite, tailwindcss
Version: 1.0.0

Use this template? (y/n): y

📥 Downloading template...
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 100%
✅ Template downloaded!

🍳 Baking template...
✅ Template baked successfully!
```

### Examples

**Example 1: Browse and Select**

```bash
$ mkdir my-new-project
$ cd my-new-project
$ cook mold use

# Browse templates
# View details
# Select and apply
```

**Example 2: Quick Start Workflow**

```bash
# Create directory and apply template
mkdir my-app && cd my-app && cook mold use
```

---

## cook mold list {#list}

List all available templates on the Cook platform.

### Synopsis

```bash
cook mold list
```

### Description

Displays all public templates grouped by category.

### Output

```bash
$ cook mold list

Available templates:

Web (@web):
  alice/@web/react-vite-starter — Modern React with Vite
    Tech: react, typescript, vite, tailwindcss
    Downloads: 1,234 | Version: 1.0.0

  bob/@web/vue3-typescript — Vue 3 + TypeScript starter
    Tech: vue, typescript, vite
    Downloads: 856 | Version: 2.1.0

  charlie/@web/next-tailwind — Next.js with Tailwind CSS
    Tech: nextjs, react, typescript, tailwindcss
    Downloads: 2,341 | Version: 1.5.0

Backend (@backend):
  bob/@backend/fastapi-template — FastAPI REST API
    Tech: fastapi, python, postgresql, docker
    Downloads: 645 | Version: 1.2.0

  david/@backend/express-typescript — Express + TypeScript
    Tech: express, typescript, postgresql
    Downloads: 892 | Version: 1.0.0

Mobile (@mobile):
  charlie/@mobile/react-native-expo — React Native Expo
    Tech: react-native, expo, typescript
    Downloads: 423 | Version: 1.3.0

CLI (@cli):
  emma/@cli/python-cli-typer — Python CLI with Typer
    Tech: python, typer, click
    Downloads: 234 | Version: 1.0.0

Total: 7 templates
```

### Use Cases

- Discover available templates
- Compare template popularity
- Find templates by category
- Check template versions

---

## cook mold show {#show}

Display detailed information about a specific template.

### Synopsis

```bash
cook mold show <template_name>
```

### Arguments

- **template_name**: Full template identifier (`username/@category/name`)

### Output

```bash
$ cook mold show alice/@web/react-vite-starter

╔═══════════════════════════════════════════════════════════╗
║                     Template Details                      ║
╚═══════════════════════════════════════════════════════════╝

Template Name: react-vite-starter
Author: alice
Category: web
Description: Modern React starter with Vite, TypeScript, and Tailwind CSS

Tech Stack:
  • react
  • typescript
  • vite
  • tailwindcss
  • eslint
  • prettier

Version: 1.0.0
Created: 2024-01-15
Last Updated: 2024-03-20

Statistics:
  Downloads: 1,234
  Stars: 89

Repository: https://github.com/alice/react-vite-starter

Installation:
  cook bake alice/@web/react-vite-starter

Template Contents:
  • src/ - Source code
  • public/ - Public assets
  • package.json - Dependencies
  • vite.config.ts - Vite configuration
  • tsconfig.json - TypeScript config
  • tailwind.config.js - Tailwind CSS config
```

### Examples

**Example 1: View Template Details**

```bash
$ cook mold show bob/@backend/fastapi-template

# Shows full template information
```

**Example 2: Before Using Template**

```bash
# Check details first
$ cook mold show alice/@web/react-vite-starter

# Then use it
$ cook bake alice/@web/react-vite-starter
```

---

## cook mold update {#update}

Update an existing template you own.

### Synopsis

```bash
cook mold update
```

### Description

Update the metadata or files of a template you've created. You can update description, tech stack, version, or upload new files.

### Interactive Workflow

```bash
$ cook mold update

Select template to update:
> yourname/@web/react-vite-starter
  yourname/@backend/api-template

Selected: yourname/@web/react-vite-starter

Current description: Modern React starter with Vite
New description: Modern React starter with Vite, TypeScript, and Tailwind CSS

Current tech stack: react,typescript,vite
New tech stack: react,typescript,vite,tailwindcss,eslint

Current version: 1.0.0
New version: 1.1.0

Update files from current directory? (y/n): y

📦 Packing updated template...
✅ Template packed: react-vite-starter.tar.zst (2.5 MB)

📤 Uploading updated template...
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 100%
✅ Template updated successfully!
```

### What You Can Update

- Template description
- Tech stack list
- Version number
- Template files (from current directory)
- GitHub repository URL

### Version Guidelines

Follow semantic versioning:
- **Major** (2.0.0): Breaking changes
- **Minor** (1.1.0): New features
- **Patch** (1.0.1): Bug fixes

### Examples

**Example 1: Update Metadata Only**

```bash
$ cook mold update

# Select your template
# Update description and tech stack
# Skip file upload
```

**Example 2: Update Files and Version**

```bash
# Make changes to your project
$ cd ~/projects/my-template

# Update template with new files
$ cook mold update

# Update version to 1.1.0
# Update files: y
```

**Example 3: Patch Release**

```bash
# Fix bugs in your template
$ cd ~/projects/my-template
$ # ... make fixes ...

$ cook mold update
# Version: 1.0.0 → 1.0.1
# Files: y
```

---

## Authentication Required

All template operations except `list` and `show` require authentication:

```bash
# Login first
$ cook auth login

# Then use template commands
$ cook mold create
$ cook mold update
```

## Best Practices

### 1. Clean Before Creating

```bash
# Remove build artifacts
rm -rf node_modules dist build

# Then create template
cook mold create
```

### 2. Use Meaningful Names

```bash
# Good names
react-vite-typescript-starter
fastapi-postgresql-docker
flutter-firebase-template

# Avoid
template1
mytemplate
test
```

### 3. Detailed Descriptions

```bash
# Good description
"Modern React starter with Vite, TypeScript, Tailwind CSS, ESLint, and Prettier configured"

# Avoid
"React template"
```

### 4. List Tech Stack

```bash
# Include all major technologies
react,typescript,vite,tailwindcss,eslint,prettier,vitest
```

### 5. Version Properly

```bash
# Start at 1.0.0
# Use semantic versioning
# Update version on changes
```

### 6. Include README

Always include a README.md in your template explaining:
- What's included
- Setup instructions
- How to use
- Prerequisites

## Troubleshooting

### Not Authenticated

```bash
$ cook mold create
❌ Error: Not authenticated
```

**Solution:**
```bash
cook auth login
```

### Template Name Already Exists

```bash
$ cook mold create
Template name: react-starter
❌ Error: Template name already exists
```

**Solution:**
- Choose a different name
- Add version or variant to name
- Update existing template instead

### Upload Failed

```bash
$ cook mold create
❌ Error: Upload failed - network error
```

**Solution:**
- Check internet connection
- Try again
- Use smaller template (< 50 MB)

### Permission Denied

```bash
$ cook mold update
❌ Error: You don't own this template
```

**Solution:**
- Can only update your own templates
- Create a new template instead
- Contact template owner

## Related Commands

- **[cook bake](bake.md)** - Quick template usage
- **[cook auth](auth.md)** - Authentication
- **[cook init](init.md)** - Initialize project

## See Also

- [Template Management Guide](../templates.md)
- [Template Workflows](../workflows.md#template-workflows)
- [Creating Great Templates](../advanced.md#template-creation)

---

**Next:** [cook cmd](cmd.md) - Command execution and management
