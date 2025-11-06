# Cook bake

Bake (download and use) a template into the current directory to create a new project.

## Usage

```bash
cook bake [TEMPLATE_ID]
```

## Arguments

- `TEMPLATE_ID` (optional): Template ID to bake (e.g., 'username/@category/template-name')

## Description

The `bake` command is a convenient shortcut for `cook mold use`. It downloads a template from the Cook platform and extracts it to create a new project. This is the fastest way to start a new project from an existing template.

## Examples

### Interactive Mode

When no template ID is provided, Cook CLI will show you available templates to choose from:

```bash
$ cook bake

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

### Direct Template Usage

Specify a template ID directly to skip the selection process:

```bash
$ cook bake cook/@vue/vue

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

### Real-world Examples

**Start a React project:**
```bash
cook bake alice/@web/react-vite-starter
```

**Create a Node.js API:**
```bash
cook bake bob/@backend/express-typescript
```

**Bootstrap a mobile app:**
```bash
cook bake charlie/@mobile/react-native-expo
```

## Workflow

1. **Template Selection**: Choose from available templates or specify directly
2. **Template Preview**: View template information and metadata
3. **Confirmation**: Confirm you want to use the selected template
4. **Download**: Template is downloaded from the Cook platform
5. **Project Setup**: Enter your new project folder name
6. **Extraction**: Template files are extracted to the new folder
7. **Configuration**: Project configuration is updated with your details

## Template ID Format

Templates use a hierarchical naming system:
```
username/@category/template-name
```

Where:
- `username`: Template author's username
- `@category`: Template category (web, mobile, backend, etc.)
- `template-name`: Specific template name

## Authentication

- **Public templates**: Can be used without authentication
- **Private templates**: Require login with `cook auth login`
- **Personal templates**: Access your own templates after login

## Post-Bake Steps

After baking a template, you typically want to:

1. **Navigate to project**: `cd my-new-project`
2. **Install dependencies**: `npm install` or `pnpm install`
3. **Start development**: `cook run serve` or `npm run dev`
4. **Initialize git**: `git init && git add . && git commit -m "Initial commit"`

## Options

This command has no additional options beyond the template ID argument.

## Notes

- Bake creates a new folder with your specified project name
- The original template files are preserved and customized for your project
- Project configuration (`cook.config.json`) is updated with your details
- Template metadata helps you understand what technologies are included
- You can bake the same template multiple times for different projects
- Templates include all necessary files, configuration, and documentation
- Some templates may include setup instructions in their README files

## Related Commands

- `cook mold list`: View available templates
- `cook mold show`: Get detailed template information
- `cook mold create`: Create your own templates
- `cook init`: Initialize Cook configuration in existing projects
