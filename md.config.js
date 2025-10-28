const MarkdownConfig = {
  md: [
    {
      name: "Cook",
      items: [
        {
          name: "Introduction",
          link: "cook-intro",
          file: "cook/intro.md",
          type: "tool",
          sub: "Introduction to the Cook dev tool",
        },
        {
          name: "Installation",
          link: "cook-installation",
          file: "cook/installation.md",
          type: "guide",
          sub: "How to install Cook",
        },
        {
          name: "Quick Start",
          link: "cook-quickstart",
          file: "cook/quickstart.md",
          type: "guide",
          sub: "Get started with Cook quickly",
        },
        {
          name: "auth",
          link: "cook-auth",
          file: "cook/commands/auth.md",
          type: "command",
          sub: "Authentication command",
        },
        {
          name: "bake",
          link: "cook-bake",
          file: "cook/commands/bake.md",
          type: "command",
          sub: "Bake command",
        },
        {
          name: "cmd",
          link: "cook-cmd",
          file: "cook/commands/cmd.md",
          type: "command",
          sub: "Command utilities",
        },
        {
          name: "init",
          link: "cook-init",
          file: "cook/commands/init.md",
          type: "command",
          sub: "Initialize a new project",
        },
        {
          name: "mold",
          link: "cook-mold",
          file: "cook/commands/mold.md",
          type: "command",
          sub: "Mold project files/templates",
        },
        {
          name: "run",
          link: "cook-run",
          file: "cook/commands/run.md",
          type: "command",
          sub: "Run command",
        },
        {
          name: "tool",
          link: "cook-tool",
          file: "cook/commands/tool.md",
          type: "command",
          sub: "Tool utilities",
        },
        {
          name: "version",
          link: "cook-version",
          file: "cook/commands/version.md",
          type: "command",
          sub: "Version command",
        },
      ],
    },
  ],
};

export { MarkdownConfig };
