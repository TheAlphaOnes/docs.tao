# Mold
<p>Enables developers to create and manage custom project templates tailored to their specific workflows and technology preferences. This feature allows you to define your own reusable "stacks"—complete with a custom name, type, and version—which can then be listed, organized, and applied across multiple projects. It empowers teams to maintain consistency in setup, enforce internal conventions, and accelerate development by reusing predefined configurations, tools, and file structures, all while preserving flexibility for unique project requirements.</p>

<br>
<hr>
<br>


# What is a template?

<p>A template represents a reusable stack configuration that you either create or select for a specific project. It serves as a foundational blueprint tailored to your project’s unique requirements. Each template is defined by four key attributes:</p>

* **Name** – A custom identifier that helps you recognize and manage your template.
* **Category** – A classification (e.g., frontend, backend, full-stack, DevOps) that organizes templates by their use case or domain.
* **Version** – A user-defined version number that enables version control and iterative improvements to your template over time.
* **Stack** – The actual set of tools, technologies, configurations, and files that make up the core of your development environment.

<p>Templates allow developers to streamline onboarding, maintain consistency across teams, and rapidly spin up projects with a predefined structure that aligns with their workflow or architectural preferences.</p>

```bash
TEMPLATE
├── Name
│   └── A unique identifier for the template
│
├── Category
│   └── Project type or domain (e.g., frontend, backend, devops)
│
├── Version
│   └── Custom version tag for tracking and iteration
│
└── Stack
    ├── tool-1 (e.g., Vue, Django, Docker)
    ├── tool-2 (e.g., ESLint, Prettier, PostgreSQL)
    └── tool-3 (e.g., Nginx, Redis, TailwindCSS)
```
<br>
<hr>
<br>

# Arguments : ```add```, ```list```, ```use```, ```show```
## ```--add```
The ```add``` arg allows you to create and save a new custom mold (template) from your current working directory.

This mold captures the structure, tools, configurations, and files in your project — and lets you reuse it across other projects by simply "molding" it in again.

## What It Does:
* Scans your current directory.
* Packages it into a reusable mold.

**Lets you define:**

* ```--name``` : A unique identifier for your mold.
* ```--category``` : The kind of project this mold applies to (e.g., frontend, backend).
* ```--version``` : A tag to track iterations of the mold.
* ```--stack``` : The actual tooll set you'll be using.

<hr>


### ```--name```
Defines a custom name for your template, so you can easily identify and reuse it later.

**If not provided, the system will prompt you to enter one interactively.**

### Example:
```bash
username@Userpc:~/Project$ cook mold add

template name : Project1
```
<hr>

### ```--category```
Categorizes the mold by its purpose or domain — for example:
frontend, backend, fullstack, api, infra, etc.

Helps in organizing and filtering templates later.
### Example:
```bash
username@Userpc:~/Project$ cook mold add

template name : Project1

template category : frontend
```
<hr>

### ```--version```
Assigns a version number to your template for tracking changes, updates, or releases.

Follows semantic versioning (1.0.0, 2.1.3, etc.) or any custom format you prefer.

```bash
username@Userpc:~/Project$ cook mold add

template name : Project1

template category : frontend

templat version : 0.0.1
```
<hr>

### ```--stack```

Specifies the list of technologies, tools, or components that make up the core of your mold.

```bash
username@Userpc:~/Project$ cook mold add

template name : Project1

template category : frontend

template version : 0.0.1

template stack : nuxt
```
<hr>


