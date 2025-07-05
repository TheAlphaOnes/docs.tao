## 📘 TheAlphaOnes Docs Platform

Welcome to the official documentation system for all tools and services by **TheAlphaOnes**.

This platform is built to keep our tool docs **modular**, **clean**, and **easy to maintain** — powered by Markdown and Nuxt.

---

## 🗂 Directory Structure

```
/public
├── md/
│   ├── aura/
│   │   ├── aura-intro.md
│   │   └── aura-customize.md
│   └── cook/
│       └── cook-intro.md
├── assets-md/
│   └── image.png
├── favicon.ico
├── favicon.svg
├── og.png
└── robots.txt

/md.config.js
```

---

## ✍️ How to Add a New Doc

### 1. **Create your Markdown file**

Place the `.md` file inside the appropriate tool/service folder under `/public/md`.

Example:

```bash
public/md/cook/setup-cook.md
```

### 2. **Update `md.config.js`**

Register the new doc in the `MarkdownConfig` like this:

```js
{
  name: "Cook",
  items: [
    {
      name: "Intro to cook",
      link: "cook-intro",
      file: "cook/cook-intro.md",
      type: "tool",
      sub: "introduction to cook dev tool"
    },
    {
      name: "Setup Cook",
      link: "setup-cook",
      file: "cook/setup-cook.md",
      type: "tool",
      sub: "how to setup and configure cook"
    }
  ]
}
```

| Field  | Description                                 |
| ------ | ------------------------------------------- |
| `name` | Display title of the doc                    |
| `link` | URL-friendly slug (used in route)           |
| `file` | Relative path from `public/md/`             |
| `type` | `tool` or `service` (for filtering/styling) |
| `sub`  | Short subtitle or description for list UI   |

---

## 🖼 Using Images

Place image assets in:

```
/public/assets-md/
```

Use them in Markdown like:

```md
![Alt text](/assets-md/image.png)
```

---

## 🔗 Routing Convention

A doc registered as:

```js
{
  name: "customize aura",
  link: "aura-customize",
  file: "aura/aura-customize.md"
}
```

Will be accessible at:

```
/docs/aura/aura-customize
```

---

## 📄 Notes

* All markdown files must live under `public/md/{tool}/`.
* All config entries must be lowercase-safe in `link` for routing.
* You can preview local changes immediately without rebuilding.

---

## 🧠 Tips

* Keep titles short and clear.
* Use `##` and `###` headings properly for structure.
* Use `sub` descriptions to make the UI feel organized and scannable.

---

Made with ❤️ by [TheAlphaOnes](https://thealphaones.dev)
