# cook bake

Download and apply a template into the current directory.

## Synopsis

```bash
cook bake <template_name>
```

## Description

The `cook bake` command downloads a template from the Cook platform and extracts it into your current directory. It's a quick way to start a new project from an existing template without going through the interactive `cook mold use` flow.

## Arguments

### template_name
- **Type:** String (required)
- **Format:** `username/@category/template-name`
- **Description:** The full identifier of the template to use
- **Example:** `alice/@web/react-vite-starter`

## Usage

### Basic Usage

```bash
$ cook bake alice/@web/react-vite-starter

📥 Downloading template: alice/@web/react-vite-starter
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 100% 2.3/2.3 MB
✅ Template downloaded successfully!

🍳 Baking template into current directory...
Extracting files...
✅ Template baked successfully!

📝 Next steps:
   1. Review the generated files
   2. Run: npm install (if package.json exists)
   3. Run: cook run dev
```

## Template Name Format

Templates follow this naming convention:

```
username/@category/template-name
```

- **username**: The template creator's username
- **@category**: The template category (prefixed with @)
- **template-name**: The template identifier

### Categories

| Category | Description | Examples |
|----------|-------------|----------|
| `@web` | Web applications | React, Vue, Next.js starters |
| `@mobile` | Mobile applications | React Native, Flutter templates |
| `@backend` | Backend services | Express, FastAPI, Django |
| `@cli` | CLI applications | Python CLI, Node CLI tools |
| `@other` | Other projects | Libraries, utilities, scripts |

## Examples

### Example 1: React Web Application

```bash
$ mkdir my-react-app
$ cd my-react-app
$ cook bake alice/@web/react-vite-starter

📥 Downloading template: alice/@web/react-vite-starter
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 100%
✅ Template downloaded successfully!

🍳 Baking template...
✅ Template baked successfully!

$ ls
node_modules/  package.json  src/  vite.config.ts  tsconfig.json

$ npm install
$ npm run dev
```

### Example 2: Backend API Template

```bash
$ mkdir api-service
$ cd api-service
$ cook bake bob/@backend/fastapi-template

📥 Downloading template: bob/@backend/fastapi-template
✅ Template downloaded successfully!

🍳 Baking template...
✅ Template baked successfully!

$ ls
app/  requirements.txt  main.py  Dockerfile  docker-compose.yml

$ pip install -r requirements.txt
$ uvicorn main:app --reload
```

### Example 3: Mobile App Template

```bash
$ mkdir my-mobile-app
$ cd my-mobile-app
$ cook bake charlie/@mobile/react-native-expo

📥 Downloading template: charlie/@mobile/react-native-expo
✅ Template baked successfully!

$ npx expo start
```

## Finding Templates

### List Available Templates

Use `cook mold list` to browse available templates:

```bash
$ cook mold list

Available templates:

Web (@web):
  alice/@web/react-vite-starter — Modern React with Vite
  bob/@web/vue3-typescript — Vue 3 + TypeScript starter
  charlie/@web/next-tailwind — Next.js with Tailwind CSS

Backend (@backend):
  bob/@backend/fastapi-template — FastAPI REST API
  david/@backend/express-typescript — Express + TypeScript

Mobile (@mobile):
  charlie/@mobile/react-native-expo — React Native with Expo
  emma/@mobile/flutter-starter — Flutter starter template
```

### Search for Templates

Use `cook mold show` to see template details:

```bash
$ cook mold show alice/@web/react-vite-starter

Template: react-vite-starter
Author: alice
Category: web
Description: Modern React starter with Vite, TypeScript, and Tailwind
Tech Stack: react, typescript, vite, tailwindcss
Version: 1.0.0
GitHub: https://github.com/alice/react-vite-starter
Downloads: 1,234
Created: 2024-01-15
Updated: 2024-03-20
```

## Authentication Required

You must be authenticated to download templates:

```bash
# Check authentication
$ cook auth now
👤 Logged in as: yourname

# If not authenticated
$ cook auth login
Enter your connection key: xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
✅ Login successful!

# Now you can bake templates
$ cook bake alice/@web/react-vite-starter
```

## Target Directory

`cook bake` extracts files into the **current directory**:

```bash
# Create a new directory first
$ mkdir my-new-project
$ cd my-new-project

# Then bake the template
$ cook bake username/@web/template
```

**Warning:** Files in the current directory may be overwritten if they conflict with template files.

## Common Workflows

### Workflow 1: Quick Project Start

```bash
# One-liner project setup
mkdir my-app && cd my-app && cook bake alice/@web/react-vite-starter

# Install dependencies
npm install

# Start development
cook run dev --hot
```

### Workflow 2: Explore Then Use

```bash
# Browse templates
cook mold list

# View details
cook mold show alice/@web/react-vite-starter

# Use the template
mkdir my-app && cd my-app
cook bake alice/@web/react-vite-starter
```

### Workflow 3: Multiple Projects

```bash
# Create multiple projects from the same template
for project in app1 app2 app3; do
  mkdir $project
  cd $project
  cook bake alice/@web/react-vite-starter
  cd ..
done
```

## Troubleshooting

### Template Not Found

```bash
$ cook bake alice/@web/nonexistent
❌ Error: Template not found: alice/@web/nonexistent
```

**Solution:**
- Check the template name spelling
- Verify the template exists: `cook mold list`
- Ensure correct format: `username/@category/name`

### Not Authenticated

```bash
$ cook bake alice/@web/template
❌ Error: Not authenticated. Please login first.
```

**Solution:**
```bash
cook auth login
```

### Directory Not Empty Warning

```bash
$ cook bake alice/@web/template
⚠️  Current directory is not empty. Files may be overwritten.
Continue? (y/n):
```

**Solution:**
- Type `y` to proceed (existing files may be overwritten)
- Type `n` to cancel and clean up the directory first

### Network Error

```bash
$ cook bake alice/@web/template
❌ Error: Network error. Could not download template.
```

**Solution:**
- Check your internet connection
- Verify the Cook platform is accessible
- Try again later
- Use debug mode: `COOK_DEBUG=1 cook bake alice/@web/template`

### Permission Denied

```bash
$ cook bake alice/@web/template
❌ Error: Permission denied: cannot write to directory
```

**Solution:**
- Check directory permissions: `ls -la`
- Ensure write access: `chmod u+w .`
- Use a directory you own

## Advanced Usage

### With Debug Mode

See detailed operation logs:

```bash
$ COOK_DEBUG=1 cook bake alice/@web/react-vite-starter

[DEBUG] Authenticating...
[DEBUG] Fetching template metadata...
[DEBUG] Downloading template file...
[DEBUG] Extracting archive...
[DEBUG] Setting permissions...
✅ Template baked successfully!
```

### Scripting

Use in shell scripts:

```bash
#!/bin/bash

# Automated project setup script
PROJECT_NAME=$1
TEMPLATE=$2

mkdir -p "$PROJECT_NAME"
cd "$PROJECT_NAME"

if cook bake "$TEMPLATE"; then
  echo "✅ Project created: $PROJECT_NAME"

  # Auto-install dependencies if package.json exists
  if [ -f "package.json" ]; then
    npm install
  fi

  # Initialize git
  git init
  git add .
  git commit -m "Initial commit from template"
else
  echo "❌ Failed to create project"
  exit 1
fi
```

Usage:
```bash
./create-project.sh my-app alice/@web/react-vite-starter
```

## Best Practices

1. **Create a new directory first** - Don't bake into existing projects
   ```bash
   mkdir my-new-project
   cd my-new-project
   cook bake username/@web/template
   ```

2. **Review the template first** - Check details before using
   ```bash
   cook mold show username/@web/template
   cook bake username/@web/template
   ```

3. **Initialize git after baking** - Start version control immediately
   ```bash
   cook bake username/@web/template
   git init
   git add .
   git commit -m "Initial commit from template"
   ```

4. **Follow template instructions** - Check for README or setup docs
   ```bash
   cook bake username/@web/template
   cat README.md  # Read setup instructions
   ```

5. **Install dependencies** - Run package manager after baking
   ```bash
   cook bake username/@web/template
   npm install  # or pip install -r requirements.txt
   ```

## Comparison with cook mold use

| Feature | `cook bake` | `cook mold use` |
|---------|-------------|-----------------|
| Interface | CLI argument | Interactive menu |
| Speed | Faster (one command) | Slower (multiple prompts) |
| Discovery | Need to know name | Browse templates |
| Use case | Automation, scripting | Exploration, learning |

Use `cook bake` when:
- You know the exact template name
- Writing scripts or automation
- Want quick, non-interactive usage

Use `cook mold use` when:
- Browsing available templates
- Not sure which template to use
- Prefer interactive experience

## Related Commands

- **[cook mold use](mold.md#use)** - Interactive template selection
- **[cook mold list](mold.md#list)** - List available templates
- **[cook mold show](mold.md#show)** - Show template details
- **[cook init](init.md)** - Initialize Cook in project

## See Also

- [Template Management](../templates.md)
- [Quick Start Guide](../quickstart.md)
- [Workflows: Using Templates](../workflows.md#template-workflows)

---

**Next:** [cook run](run.md) - Execute commands from your project
