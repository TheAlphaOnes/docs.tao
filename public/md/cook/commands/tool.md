# cook tool

Development utilities for code analysis and project management.

## Synopsis

```bash
cook tool <subcommand> [OPTIONS]
```

## Description

The `cook tool` command group provides development utilities for analyzing your codebase, generating project documentation, and managing project metadata.

## Subcommands

| Command | Description |
|---------|-------------|
| `loc` | Count lines of code in your project |
| `tree` | Display directory structure as a tree |
| `licence` | Add or update project license |
| `status` | Show project status and information |

---

## cook tool loc {#loc}

Count lines of code in your project with detailed statistics.

### Synopsis

```bash
cook tool loc [OPTIONS]
```

### Description

Analyzes your project directory and provides statistics about lines of code, broken down by file type. Automatically excludes common build artifacts and dependencies.

### Output

```bash
$ cook tool loc

📊 Lines of Code Analysis

Directory: /Users/you/projects/my-app

JavaScript/TypeScript:
  .js     1,234 lines (15 files)
  .ts     2,456 lines (23 files)
  .jsx      456 lines (8 files)
  .tsx      789 lines (12 files)
  ─────────────────────────────
  Total:  4,935 lines (58 files)

Python:
  .py       567 lines (12 files)

Markup/Styles:
  .html     123 lines (3 files)
  .css      456 lines (8 files)
  .scss     234 lines (4 files)

Configuration:
  .json      89 lines (6 files)
  .yaml      45 lines (3 files)

Documentation:
  .md       234 lines (5 files)

═══════════════════════════════════
Total:    6,683 lines (99 files)
═══════════════════════════════════

Excluded: node_modules, dist, .git
```

### Counted File Types

- **Source Code**: `.js`, `.ts`, `.jsx`, `.tsx`, `.py`, `.rb`, `.go`, `.java`, `.c`, `.cpp`, `.rs`
- **Markup**: `.html`, `.xml`, `.svg`
- **Styles**: `.css`, `.scss`, `.sass`, `.less`
- **Config**: `.json`, `.yaml`, `.yml`, `.toml`, `.ini`
- **Documentation**: `.md`, `.mdx`, `.txt`

### Excluded Directories

- `node_modules/`
- `dist/`, `build/`
- `.git/`
- `.next/`, `.nuxt/`
- `__pycache__/`
- `venv/`, `env/`

### Examples

**Example 1: Analyze Web Project**

```bash
$ cd ~/projects/my-react-app
$ cook tool loc

📊 Lines of Code Analysis

TypeScript/JavaScript:
  .tsx    3,456 lines (34 files)
  .ts     1,234 lines (15 files)

Styles:
  .css      678 lines (12 files)

Total:  5,368 lines (61 files)
```

**Example 2: Python Project**

```bash
$ cd ~/projects/my-api
$ cook tool loc

📊 Lines of Code Analysis

Python:
  .py     4,567 lines (45 files)

Config:
  .yaml      123 lines (8 files)

Total:  4,690 lines (53 files)
```

### Use Cases

- Track project size over time
- Compare projects
- Identify large files
- Report project metrics
- Pre-commit statistics

---

## cook tool tree {#tree}

Display your project's directory structure as a visual tree.

### Synopsis

```bash
cook tool tree [OPTIONS]
```

### Description

Generates a visual tree representation of your project's directory structure, excluding common build artifacts and dependencies.

### Output

```bash
$ cook tool tree

📁 Project Structure

my-app/
├── src/
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── Layout.tsx
│   ├── pages/
│   │   ├── index.tsx
│   │   └── about.tsx
│   ├── styles/
│   │   ├── globals.css
│   │   └── components.css
│   └── utils/
│       └── helpers.ts
├── public/
│   ├── favicon.ico
│   └── logo.svg
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md

Directories: 6
Files: 13
```

### Options

- Shows up to 3 levels deep by default
- Excludes: `node_modules`, `.git`, `dist`, `build`
- Icons: 📁 directories, 📄 files

### Examples

**Example 1: View Project Structure**

```bash
$ cd ~/projects/my-app
$ cook tool tree

# See visual directory layout
```

**Example 2: New Project Exploration**

```bash
$ cook bake alice/@web/react-starter
$ cook tool tree

# Understand template structure
```

### Use Cases

- Understand project layout
- Document project structure
- Explore new projects
- Verify template structure
- Generate documentation

---

## cook tool licence {#licence}

Add or update your project's license file.

### Synopsis

```bash
cook tool licence
```

### Description

Interactively select and add a license to your project. Generates a `LICENSE` file with the selected license text and your information.

### Interactive Workflow

```bash
$ cook tool licence

Select a license:
> MIT
  Apache 2.0
  BSD 3-Clause
  BSD 2-Clause
  GPL 3.0
  LGPL 3.0
  MPL 2.0
  Unlicense
  None (Proprietary)

Selected: MIT

Enter copyright holder: John Doe
Enter year (default: 2024): 2024

✅ LICENSE file created!

📄 Generated: LICENSE (MIT License)
```

### Available Licenses

| License | Description | Permissions |
|---------|-------------|-------------|
| **MIT** | Permissive, simple | ✅ Commercial use, modification, distribution |
| **Apache 2.0** | Permissive with patent grant | ✅ Commercial use, patent grant |
| **BSD 3-Clause** | Permissive, attribution | ✅ Commercial use, no endorsement |
| **BSD 2-Clause** | Simplified BSD | ✅ Commercial use, simple |
| **GPL 3.0** | Copyleft, strong | ⚠️ Must share source if distributed |
| **LGPL 3.0** | Copyleft, library-friendly | ⚠️ Must share modifications |
| **MPL 2.0** | Weak copyleft | ⚠️ File-level copyleft |
| **Unlicense** | Public domain | ✅ Do anything |
| **None** | Proprietary/Closed | ❌ All rights reserved |

### Generated File

Creates a `LICENSE` file in your project root:

```
MIT License

Copyright (c) 2024 John Doe

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software...
```

### Examples

**Example 1: MIT License**

```bash
$ cook tool licence

Select: MIT
Copyright holder: Alice
Year: 2024

✅ LICENSE created (MIT)
```

**Example 2: Apache 2.0**

```bash
$ cook tool licence

Select: Apache 2.0
Copyright holder: Acme Corp
Year: 2024

✅ LICENSE created (Apache 2.0)
```

**Example 3: Proprietary**

```bash
$ cook tool licence

Select: None (Proprietary)
Copyright holder: Private Company
Year: 2024

✅ LICENSE created (All Rights Reserved)
```

### When to Use

- Starting a new project
- Open-sourcing a private project
- Updating license terms
- Before creating a template
- Before publishing to package registries

### License Selection Guide

**Choose MIT if:**
- You want maximum freedom for users
- You don't care how code is used
- You want simplicity

**Choose Apache 2.0 if:**
- You have patent concerns
- You need contributor agreement
- Large organization/enterprise

**Choose GPL 3.0 if:**
- You want all derivatives to be open source
- You're building on GPL code
- You want to ensure freedom

**Choose BSD 3-Clause if:**
- You want permissive with attribution
- You don't want endorsement without permission

**Choose None (Proprietary) if:**
- Closed source project
- Commercial/private code
- You retain all rights

---

## cook tool status {#status}

Show project status and information.

### Synopsis

```bash
cook tool status
```

### Description

Displays comprehensive information about your Cook project, including configuration, statistics, and health checks.

### Output

```bash
$ cook tool status

🍳 Cook Project Status

Project Information:
  Name: my-awesome-app
  Author: johndoe
  Version: 1.0.0
  Description: My awesome application

Cook Configuration:
  Config File: ✅ cook.config.json found
  Stir Mode: ✅ Enabled
  Command Groups: 4 (dev, build, test, deploy)

Git Status:
  Repository: ✅ Initialized
  Branch: main
  Modified Files: 3
  Untracked Files: 1

Project Statistics:
  Total Files: 127
  Lines of Code: 6,683
  Directories: 15

Template Info:
  Created From: alice/@web/react-starter
  Template Version: 1.0.0

Authentication:
  Status: ✅ Logged in as johndoe

Last Updated: 2024-03-20 14:32:15
```

### Information Displayed

- Project metadata
- Cook configuration
- Git repository status
- Project statistics
- Template information
- Authentication status

### Use Cases

- Quick project overview
- Health check before operations
- Debugging configuration issues
- Project documentation

---

## Common Workflows

### Workflow 1: Project Analysis

```bash
# Get project overview
$ cook tool status

# Count lines of code
$ cook tool loc

# View structure
$ cook tool tree
```

### Workflow 2: New Project Setup

```bash
# Initialize project
$ cook init

# Add license
$ cook tool licence

# View structure
$ cook tool tree
```

### Workflow 3: Template Creation

```bash
# Analyze project
$ cook tool loc
$ cook tool tree

# Add license if needed
$ cook tool licence

# Create template
$ cook mold create
```

## Best Practices

### 1. Add License Early

```bash
# Right after project creation
$ cook init
$ cook tool licence
```

### 2. Track Code Metrics

```bash
# Before major changes
$ cook tool loc > metrics-before.txt

# After changes
$ cook tool loc > metrics-after.txt
```

### 3. Document Structure

```bash
# Generate tree for README
$ cook tool tree > STRUCTURE.md
```

### 4. Regular Status Checks

```bash
# Before committing
$ cook tool status
$ git add .
$ git commit
```

## Troubleshooting

### No Project Found

```bash
$ cook tool status
❌ Error: cook.config.json not found
```

**Solution:**
```bash
cook init
```

### Permission Denied

```bash
$ cook tool loc
❌ Error: Permission denied reading files
```

**Solution:**
- Check directory permissions
- Run from project root
- Ensure you own the files

### Tree Too Deep

```bash
$ cook tool tree
⚠️  Warning: Tree depth limited to 3 levels
```

**Solution:** This is normal - prevents overwhelming output

## Related Commands

- **[cook init](init.md)** - Initialize project
- **[cook mold create](mold.md#create)** - Create template
- **[cook version](version.md)** - Version information

## See Also

- [Development Tools Guide](../advanced.md#development-tools)
- [Project Setup](../quickstart.md#project-setup)
- [Best Practices](../advanced.md#best-practices)

---

**Next:** [cook version](version.md) - Version information
