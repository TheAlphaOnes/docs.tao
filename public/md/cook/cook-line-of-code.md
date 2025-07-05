<h1> LOC [ Line of Code ]</h1>

```loc``` tells you how many lines of code you’ve written in your project. Neat and tidy.

## Example : ```cook loc```
```bash
username@Userpc:~/Project$ cook loc

 Line Of Code     
┌────────────┬──────┐
│ *.txt      │ 1213 │
│ *.py       │ 2627 │
│ License    │ 17   │
│ *.md       │ 178  │
│ *.json     │ 62   │
│ *.ts       │ 12   │
│ *.vue      │ 6    │
│ *.mjs      │ 5    │
│ *.yaml     │ 8447 │
│ .gitignore │ 20   │
│ *.ico      │ 1    │
└────────────┴──────┘
Total Line Of Code: 12588

```
<br>
<hr>
<br>

# How ```loc``` works ?
```bash
Cook LOC Module
├── 🧠 Analyzer Engine
│   └── Scans file system, filters supported file types
│       and counts effective lines of code (not empty/comments)
├── 🗂️ File Type Mapper
│   └── Groups line counts by file extension
│       (e.g. .py, .md, .yaml) for insights
├── 📊 Formatter
│   └── Displays results in a clean table format
│       with totals and breakdowns
└── ⚙️ Config & Ignore Layer
    └── Respects .gitignore, custom ignore rules,
        and hidden file handling
```
<br>
<hr>
<br>

# WHY to use ```loc``` ?

<p style=" font-size: 18px;" >Now, if you are asking, What are the use cases of this command ? Is it usefull ?
</p>

<p style="font-weight: bold; font-size: 18px;" >Here is why!</p>

### 1. Project Size Estimation & Complexity Analysis

* Useful during onboarding, project audits, or when taking over legacy projects.

* Helps PMs and tech leads decide on timeframes, manpower, and technical debt.




### 2. Language/File Type Distribution
* Useful in multi-language repos (e.g. full-stack apps with .ts, .py, .yaml, .vue) to assess where code is concentrated.

* Helps in assigning domain experts or refactoring monoliths into modular components.

<br>
<hr>
<br>

# Arguments : ```dir```, ```exclude```

### ``` --dir```
Specifies the root directory to begin scanning from.
If not provided, the current working directory is used.


### Example:
```cook loc Projects```
→ Scan starts inside ```./projects```

```bash
username@Userpc:~/Project$ cook loc

 Line Of Code     
┌────────────┬──────┐
│ *.txt      │ 1213 │
│ *.py       │ 2627 │
│ License    │ 17   │
│ *.md       │ 178  │
│ *.json     │ 62   │
│ *.ts       │ 12   │
│ *.vue      │ 6    │
│ *.mjs      │ 5    │
│ *.yaml     │ 8447 │
│ .gitignore │ 20   │
│ *.ico      │ 1    │
└────────────┴──────┘
Total Line Of Code: 12588

```

<hr>

### ```--exclude```
```exclude``` argument ignores the file type you want not to be scanned for line of code.



### Exampel:
 ```cook Projects .txt``` → Ignores the ```.txt``` files. 

 ```bash
username@Userpc:~/Project$ cook loc

 Line Of Code     
┌────────────┬──────┐
│ *.py       │ 2627 │
│ License    │ 17   │
│ *.md       │ 178  │
│ *.json     │ 62   │
│ *.ts       │ 12   │
│ *.vue      │ 6    │
│ *.mjs      │ 5    │
│ *.yaml     │ 8447 │
│ .gitignore │ 20   │
│ *.ico      │ 1    │
└────────────┴──────┘
Total Line Of Code: 12588

```
<br>
<hr>

<h3 align="center "style="color:white;">Don't take loc (Lines of Code) as a sole metric for productivity!</h3>