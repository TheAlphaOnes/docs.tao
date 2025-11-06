# Cook tool

Development tools and utilities for common development tasks.

## Usage

```bash
cook tool [COMMAND]
```

## Commands

### tool loc

Count lines of code in the current directory, respecting `.gitignore` patterns.

```bash
$ cook tool loc
    Line Of Code
┌────────────┬──────┐
│ *.md       │ 4321 │
│ *.json     │ 201  │
│ License    │ 17   │
│ *.txt      │ 1215 │
│ *.spec     │ 54   │
│ *.py       │ 4439 │
│ *.vue      │ 6    │
│ *.yaml     │ 8447 │
│ .gitignore │ 20   │
│ *.ts       │ 12   │
│ *.mjs      │ 5    │
└────────────┴──────┘
Total Line Of Code: 18737
```

**With exclusions:**
```bash
cook tool loc node_modules dist
```

### tool tree

Show directory tree structure with file sizes.

```bash
$ cook tool tree
📂 /home/developer/projects/cook-cli
┣━━ 📂 assets
┃   ┣━━ 📂 licenses
┃   ┃   ┣━━ 📄apache-2.txt (10.8 kB)
┃   ┃   ┣━━ 📄bsd-2.txt (1.3 kB)
┃   ┃   ┣━━ 📄bsd-3.txt (1.5 kB)
┃   ┃   ┣━━ 📄closed.txt (54 bytes)
┃   ┃   ┣━━ 📄gpl-3.txt (33.2 kB)
┃   ┃   ┣━━ 📄lgpl-3.txt (8.5 kB)
┃   ┃   ┣━━ 📄mit.txt (1.1 kB)
┃   ┃   ┣━━ 📄mpl-2.txt (16.8 kB)
┃   ┃   ┗━━ 📄none.txt (1.2 kB)
┃   ┗━━ 📄status.json (7.8 kB)
┣━━ 📂 cli
┃   ┣━━ 📄api.py (1.2 kB)
┃   ┣━━ 📄auth.py (1.0 kB)
┃   ┣━━ 📄bite.py (877 bytes)
┃   ┣━━ 📄cleanup.py (136 bytes)
┃   ┣━━ 📄cmd.py (2.2 kB)
┃   ┣━━ 📄global_cmd.py (1.6 kB)
┃   ┣━━ 📄ignite.py (140 bytes)
┃   ┣━━ 📄layer.py (282 bytes)
┃   ┣━━ 📄license.py (634 bytes)
┃   ┣━━ 📄mold.py (1.5 kB)
┃   ┣━━ 📄plate.py (277 bytes)
┃   ┣━━ 📄slice.py (288 bytes)
┃   ┣━━ 📄stir.py (128 bytes)
┃   ┣━━ 📄tool.py (3.5 kB)
┃   ┗━━ 📄tunnel.py (207 bytes)
┣━━ 📂 docs
┃   ┗━━ 📂 commands
┃       ┣━━ 📄auth.md (2.4 kB)
┃       ┣━━ 📄cmd.md (3.1 kB)
┃       ┣━━ 📄init.md (2.2 kB)
┃       ┣━━ 📄sys.md (3.5 kB)
┃       ┗━━ 📄version.md (677 bytes)
┣━━ 📂 handlers
┃   ┣━━ 📂 auth
┃   ┃   ┗━━ 📄auth.py (4.0 kB)
┃   ┣━━ 📂 cleanup
┃   ┃   ┗━━ 📄cleanup.py (46 bytes)
┃   ┣━━ 📂 cmd
┃   ┃   ┣━━ 📄cmd.py (11.3 kB)
┃   ┃   ┣━━ 📄global_cmd.py (3.3 kB)
┃   ┃   ┗━━ 📄watcher.py (10.2 kB)
┃   ┣━━ 📂 ignite
┃   ┃   ┗━━ 📄ignite.py (52 bytes)
┃   ┣━━ 📂 layer
┃   ┃   ┗━━ 📄layer.py (152 bytes)
┃   ┣━━ 📂 license
┃   ┃   ┣━━ 📄licence_helper.py (75.9 kB)
┃   ┃   ┗━━ 📄license.py (1.7 kB)
┃   ┣━━ 📂 mold
┃   ┃   ┣━━ 📄mold.py (17.8 kB)
┃   ┃   ┗━━ 📄mold_helper.py (10.8 kB)
┃   ┣━━ 📂 plate
┃   ┃   ┗━━ 📄plate.py (169 bytes)
┃   ┣━━ 📂 slice
┃   ┃   ┗━━ 📄slice.py (72 bytes)
┃   ┣━━ 📂 stir
┃   ┃   ┗━━ 📄stir.py (219 bytes)
┃   ┣━━ 📂 tool
┃   ┃   ┣━━ 📄status.py (13.4 kB)
┃   ┃   ┗━━ 📄tool.py (0 bytes)
┃   ┣━━ 📂 tunnel
┃   ┃   ┗━━ 📄tunnel.py (124 bytes)
┃   ┣━━ 📄__init__.py (0 bytes)
┃   ┣━━ 📄backend.py (7.3 kB)
┃   ┣━━ 📄config.py (3.1 kB)
┃   ┣━━ 📄const.py (1.8 kB)
┃   ┣━━ 📄error_handler.py (5.3 kB)
┃   ┣━━ 📄loc.py (3.9 kB)
┃   ┣━━ 📄packer.py (1.8 kB)
┃   ┣━━ 📄pyprompt.py (11.1 kB)
┃   ┣━━ 📄tree.py (2.1 kB)
┃   ┣━━ 📄user.py (1.6 kB)
┃   ┗━━ 📄utils.py (522 bytes)
┣━━ 📂 template_test
┃   ┣━━ 📂 public
┃   ┃   ┣━━ 📄favicon.ico (4.3 kB)
┃   ┃   ┗━━ 📄robots.txt (24 bytes)
┃   ┣━━ 📂 server
┃   ┃   ┗━━ 📄tsconfig.json (49 bytes)
┃   ┣━━ 📄app.vue (87 bytes)
┃   ┣━━ 📄cook.config.json (728 bytes)
┃   ┣━━ 📄cook.readme.md (898 bytes)
┃   ┣━━ 📄eslint.config.mjs (120 bytes)
┃   ┣━━ 📄nuxt.config.ts (266 bytes)
┃   ┣━━ 📄package.json (692 bytes)
┃   ┣━━ 📄pnpm-lock.yaml (346.4 kB)
┃   ┣━━ 📄README.md (822 bytes)
┃   ┗━━ 📄tsconfig.json (94 bytes)
┣━━ 📂 test_project
┃   ┗━━ 📄cook.config.json (512 bytes)
┣━━ 📄cook.config.json (788 bytes)
┣━━ 📄cook.spec (1.4 kB)
┣━━ 📄LICENSE (1.1 kB)
┣━━ 📄main.py (4.1 kB)
┣━━ 📄README.md (10.8 kB)
┣━━ 📄requirements.txt (96 bytes)
┗━━ 📄WORKFLOWS.md (0 bytes)
```

**With exclusions:**
```bash
cook tool tree node_modules .git
```

### tool licence

Manage project licenses with interactive prompts.

```bash
$ cook tool licence
What would you like to do?
> Generate licence
  List licences
  Show licence details

# Interactive license generation
Enter project name: My Awesome Project
Enter author name: John Doe
Select license type:
> MIT License
  Apache License 2.0
  GNU GPL v3
  BSD 3-Clause
  ...

License generated successfully: LICENSE
```

### tool status

HTTP status code lookup and reference tool with comprehensive database of standard and unofficial codes.

**Lookup specific status code:**
```bash
$ cook tool status 200

200 - OK
Category: Success
Message: Request succeeded.

$ cook tool status 404

404 - Not Found
Category: Client Error
Message: Requested resource not found.

$ cook tool status 500

500 - Internal Server Error
Category: Server Error
Message: Unexpected server error.

$ cook tool status 418

418 - I'm a Teapot
Category: Client Error
Message: RFC joke code.
```

**Search status codes by name or message:**
```bash
$ cook tool status --search "not found"

Search results for: 'not found'

404 - Not Found
Category: Client Error
Message: Requested resource not found.

$ cook tool status --search "success"

Search results for: 'success'

201 - Created
Category: Success
Message: Resource created successfully.
```

**Browse by category:**
```bash
$ cook tool status --category
[?] Select a category::
   Informational
 > Success
   Redirection
   Client Error
   Server Error
   Unofficial
   All

HTTP Status Codes

Success
────────────────────────────────────────────────────────────
  200 - OK
        Request succeeded.
  201 - Created
        Resource created successfully.
  202 - Accepted
        Request accepted; processing pending.
  203 - Non-Authoritative Information
        Response from a transforming proxy.
  204 - No Content
        Request succeeded; no content returned.
  205 - Reset Content
        Client should reset its view.
  206 - Partial Content
        Partial GET due to range header.
  207 - Multi-Status
        WebDAV multi-status response.
  208 - Already Reported
        WebDAV members already enumerated.
  226 - IM Used
        Instance manipulations applied.

Total: 10 status code(s)
```

**List all status codes:**
```bash
$ cook tool status --list

HTTP Status Codes

Informational
────────────────────────────────────────────────────────────
  100 - Continue
        Client should continue with request.
  101 - Switching Protocols
        Server is switching protocols.
  102 - Processing
        Server is processing the request (WebDAV).
  103 - Early Hints
        Preload resources while final response prepares.

Success
────────────────────────────────────────────────────────────
  200 - OK
        Request succeeded.
  201 - Created
        Resource created successfully.
  [... continues with all categories ...]

Total: 68 status code(s)
```

**Interactive mode:**
```bash
$ cook tool status
What would you like to do?
> Lookup status code
  Search status codes
  Browse by category
  List all status codes
```

**Error handling:**
```bash
$ cook tool status 999
Status code 999 not found.

$ cook tool status --search "xyz"
No status codes found matching: xyz
```

## Description

The `tool` commands provide essential development utilities that help with common tasks like code analysis, project structure visualization, license management, and HTTP status code reference.

## Features

### Lines of Code Counter
- Counts lines by file extension
- Respects `.gitignore` patterns
- Excludes binary and non-code files automatically
- Provides detailed breakdown and total count

### Directory Tree
- Visual tree structure with Unicode characters
- Shows file sizes in human-readable format
- Folder and file icons for better visualization
- Supports exclusion patterns

### License Management
- Multiple open-source license templates
- Interactive license generation
- Customizable with project and author information
- Supports MIT, Apache, GPL, BSD, and more

### HTTP Status Codes
- **Complete database**: 68+ status codes including official and unofficial codes
- **Category browsing**: Informational (1xx), Success (2xx), Redirection (3xx), Client Error (4xx), Server Error (5xx), Unofficial
- **Smart search**: Find codes by name, message, or partial matches
- **Interactive interface**: Menu-driven selection for easy navigation
- **Detailed information**: Each code includes category, name, and descriptive message
- **Special codes**: Includes fun codes like 418 "I'm a Teapot" and unofficial vendor-specific codes
- **Error handling**: Graceful handling of invalid codes and empty search results

## Options

### loc
- `exclude`: List of directories/files to exclude from counting

### tree
- `exclude`: List of directories/files to exclude from tree display

### licence
No additional options (interactive mode only)

### status
- `code`: Specific status code to lookup (e.g., 404)
- `--search, -s`: Search term for status codes
- `--list, -l`: List all status codes
- `--category, -c`: Browse by category

## Notes

- All tools respect common ignore patterns (`.gitignore`, `node_modules`, etc.)
- File size calculations use human-readable formats (kB, MB, GB)
- License templates include proper copyright notices and dates
- Status code data includes official HTTP specifications
- Tools work in any directory and don't require Cook project initialization
