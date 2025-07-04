# Tree 

The ```tree``` command provides a visual representation of your project structure, making it easy to understand file organization, nested folders, and the size of important components at a glance.
It’s especially useful for exploring template projects, debugging or structure-related issues.

## Example : ```cook tree```


```bash
username@Userpc:~/Project$ cook tree

📂 /home/user/Projects/cook
┣━━ 📂 assets
┃   ┗━━ 📂 licenses
┃       ┣━━ 📄apache-2.txt (10.8 kB)
┃       ┣━━ 📄gpl-3.txt (33.2 kB)
┃       ┗━━ 📄mit.txt (1.1 kB)
┣━━ 📂 cli
┃   ┣━━ 📄auth.py (200 bytes)
┃   ┣━━ 📄cmd.py (340 bytes)
┃   ┗━━ 📄mold.py (1.9 kB)
┣━━ 📂 handlers
┃   ┣━━ 📂 auth
┃   ┃   ┗━━ 📄auth.py (1.4 kB)
┃   ┣━━ 📂 license
┃   ┃   ┗━━ 📄license_helper.py (76.0 kB)
┃   ┗━━ 📄config.py (3.2 kB)
┣━━ 📂 templates
┃   ┣━━ 📄starter.vue (88 bytes)
┃   ┗━━ 📄setup.json (600 bytes)
┣━━ 📄main.py (2.1 kB)
┣━━ 📄README.md (4.7 kB)
┗━━ 📄requirements.txt (80 bytes)
```
<br>
<hr>
<br>

# How ```tree``` works ?
```tree```'s working is kinda simple, it just follows some pre-defind steps to workout the directories and files.

```bash
> cook tree

[✔] Scanning project directory...
[✔] Recursively traversing folders...
[✔] Collecting file sizes and structure...
[✔] Rendering tree with Unicode icons...
 ```
<br>
<hr>
<br>

# Flags : ```--dir```, ```--exclude```


### ``` --dir <path>```
Specifies the root directory to begin building the tree from.
If not provided, the current working directory is used.


### Example:
```cook tree ./src/components```
→ Builds tree starting inside ```./src/components```

```bash
📂 /src/components
┣━━ 📂 Button
┃   ┣━━ 📄 Button.vue (1.4 kB)
┃   ┗━━ 📄 index.ts (120 bytes)
┣━━ 📂 Card
┃   ┣━━ 📄 Card.vue (2.1 kB)
┃   ┗━━ 📄 Card.test.ts (670 bytes)
┣━━ 📂 Layout
┃   ┣━━ 📄 Header.vue (2.3 kB)
┃   ┣━━ 📄 Footer.vue (1.9 kB)
┃   ┗━━ 📄 Sidebar.vue (3.0 kB)
┣━━ 📄 index.ts (98 bytes)
┗━━ 📄 README.md (410 bytes)
```
<hr>


### ```--exclude <file_name>```
Excludes specific files or folders from being shown in the tree.


### Example:
cook ```tree exclude . Card```
→ Skips these folders while generating the tree.
```bash
📂 /src/components
┣━━ 📂 Button
┃   ┣━━ 📄 Button.vue (1.4 kB)
┃   ┗━━ 📄 index.ts (120 bytes)
┣━━ 📂 Layout
┃   ┣━━ 📄 Header.vue (2.3 kB)
┃   ┣━━ 📄 Footer.vue (1.9 kB)
┃   ┗━━ 📄 Sidebar.vue (3.0 kB)
┣━━ 📄 index.ts (98 bytes)
┗━━ 📄 README.md (410 bytes)
```
<br>
<hr>
<br>

# Options :  ```--dir```, ```--exclude```

```bash

cook tree [options]

Displays a visual tree of your project structure with file sizes.

Options:
  --dir <path>         Start tree from a specific directory
  --exclude <pattern>  Comma-separated list of files/folders to exclude
  --help               Show this help message and exit

Examples:
  cook tree
  cook tree --dir ./src
  cook tree --exclude node_modules,.git,.venv
```
<hr>