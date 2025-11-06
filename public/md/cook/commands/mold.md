# Cook mold

Template management for creating, uploading, and managing project templates.

## Usage

```bash
cook mold [COMMAND]
```

## Commands

### mold list

List all your available templates stored in the Cook platform.

```bash
$ cook mold list
[success] Getting user templates

User Templates:

📦 cook/@vue/vue
   Name: vue | Category: vue | Version: 3.5.22 | Public: True
   Stack: vue, js, pinia, css, pnpm

📦 cook/@nuxt/nuxt-v4
   Name: nuxt-v4 | Category: nuxt | Version: 4.1.2 | Public: True
   Stack: vue, nuxt, js, ts, css, pnpm

📦 cook/@nuxt/nuxt-v3
   Name: nuxt-v3 | Category: nuxt | Version: 3.20.0 | Public: True
   Stack: nuxt, vue, js, ts, css, pnpm
```

### mold create

Create a new template from the current directory or a selected directory.

```bash
$ cook mold create

📦 Creating template from: /home/developer/projects/my-app

How would you like to select the directory?
> Choose from list
  Enter directory path manually

Template name: my-awesome-template
Enter template category: web

Description: My awesome template for React projects
Tech stack (Enter empty line to finish):
1 $ : react
2 $ : typescript
3 $ : vite
4 $ :

GitHub repository: https://github.com/developer/my-awesome-template
Version: 1.0.0

📦 Packing template...
✅ Template packed: my-awesome-template.tar.zst (2.3 MB)

📤 Uploading template...
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 100% 2.3/2.3 MB
✅ Upload successful!

✅ Template created successfully!

Template ID: developer/@web/my-awesome-template
```

### mold use

Download and use an existing template to create a new project.

```bash
$ cook mold use

Choose a template to use:
> cook/@vue/vue — Vue.js template with Pinia
  cook/@nuxt/nuxt-v4 — Nuxt 4 template
  cook/@nuxt/nuxt-v3 — Nuxt 3 template

📋 Template Information:
┌─────────────┬──────────────────────────────────┐
│ Name        │ vue                              │
│ Category    │ vue                              │
│ Version     │ 3.5.22                           │
│ Stack       │ vue, js, pinia, css, pnpm        │
│ Author      │ cook                             │
│ Public      │ True                             │
└─────────────┴──────────────────────────────────┘

Do you want to continue with this template? (y/N): y

[success] Downloading template...
Enter the project folder name: my-vue-project

[success] Extracting template files...
✅ Template extracted to: my-vue-project
```

**Direct usage with template ID:**
```bash
cook mold use cook/@vue/vue
```

### mold show

Show detailed information about a specific template.

```bash
$ cook mold show

Choose a template to see:
> cook/@vue/vue — Vue.js template
  cook/@nuxt/nuxt-v4 — Nuxt 4 template
  cook/@nuxt/nuxt-v3 — Nuxt 3 template

📋 Template Details:
┌─────────────┬──────────────────────────────────┐
│ ID          │ cook/@vue/vue                    │
│ Name        │ vue                              │
│ Category    │ vue                              │
│ Version     │ 3.5.22                           │
│ Author      │ cook                             │
│ Stack       │ vue, js, pinia, css, pnpm        │
│ GitHub      │ https://github.com/cook/vue      │
│ Public      │ True                             │
│ Downloads   │ 1,234                            │
│ Created     │ 2024-01-15                       │
└─────────────┴──────────────────────────────────┘

📖 Description:
A modern Vue.js template with Pinia for state management,
optimized for rapid development with best practices.
```

### mold update

Update an existing template with new metadata or re-upload the template files.

```bash
$ cook mold update

How would you like to select the directory?
> Choose from list
  Enter directory path manually

Updating template: developer/@web/my-awesome-template

📋 Current Template Data:
┌─────────────┬──────────────────────────────────┐
│ Name        │ my-awesome-template              │
│ Category    │ web                              │
│ Version     │ 1.0.0                            │
│ Stack       │ react, typescript, vite          │
│ GitHub      │ https://github.com/developer/template  │
└─────────────┴──────────────────────────────────┘

✏️  Update Template Information
Press Enter to keep current value, or type new value

Version (1.0.0): 1.1.0
GitHub URL (https://github.com/developer/template): https://github.com/developer/updated-template

Current stack: react, typescript, vite
Stack (Enter empty line to keep current):
1 $ : react
2 $ : typescript
3 $ : vite
4 $ : tailwindcss
5 $ :

📦 Do you want to re-upload the template folder? (y/N): y

🔄 Re-uploading template...
[success] Regenerating cook.readme.md...
[success] Compressing template folder...
[success] Uploading new template...
[success] Updating template metadata...

✓ Template metadata updated successfully!
🗑️  Cleaning up old template file...
✓ Old template file removed from bucket

🎉 Template update completed!
```

## Description

The `mold` commands manage project templates that can be shared and reused across different projects. Templates are compressed, uploaded to the Cook platform, and can be downloaded by anyone with access.

## Template Structure

Templates include:
- **Project files**: All your project source code and configuration
- **cook.config.json**: Project configuration and template metadata
- **cook.readme.md**: Auto-generated template documentation
- **Metadata**: Name, category, version, tech stack, GitHub link

## Template ID Format

Templates use a hierarchical ID system:
```
username/@category/template-name
```

Examples:
- `cook/@vue/vue-starter`
- `alice/@web/react-typescript`
- `bob/@mobile/flutter-app`

## Authentication Required

Most mold commands require authentication:
- **create**: Upload templates to your account
- **list**: View your personal templates
- **show**: View template details (personal templates)
- **update**: Modify your templates
- **use**: Download templates (public templates work without auth)

## Template Categories

Common categories include:
- `@web`: Web applications and websites
- `@mobile`: Mobile applications
- `@backend`: Server and API projects
- `@desktop`: Desktop applications
- `@cli`: Command-line tools
- `@lib`: Libraries and packages

## Options

### create
No additional options (interactive mode only)

### use
- `template_id`: Optional template ID to use directly

### list
No additional options

### show
No additional options (interactive mode only)

### update
No additional options (interactive mode only)

## Notes

- Templates are compressed using zstandard for efficient storage
- Template files respect `.gitignore` patterns during packaging
- Public templates can be used by anyone without authentication
- Private templates are only accessible to the template owner
- Template updates can include metadata changes and/or file re-uploads
- The Cook platform provides template discovery and sharing capabilities
- Templates automatically generate documentation from metadata
