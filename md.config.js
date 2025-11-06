const MarkdownConfig = {
  md: [
    {
      name: "COOK",
      items: [
        {
          name: "Overview",
          link: "cook-overview",
          file: "cook/index.md",
          type: "overview",
          sub: "Comprehensive overview of Cook CLI features",
        },

        {
          name: "Installing",
          link: "cook-installation",
          file: "cook/installation.md",
          type: "guide",
          sub: "Step-by-step installation guide for Cook CLI",
        },
        {
          name: "Building",
          link: "cook-building",
          file: "cook/building.md",
          type: "guide",
          sub: "Guide to building projects with Cook CLI",
        },
        {
          name: "Init",
          link: "cook-init",
          file: "cook/commands/init.md",
          type: "command",
          sub: "Initialize a new Cook project",
        },
        {
          name: "Auth",
          link: "cook-auth",
          file: "cook/commands/auth.md",
          type: "command",
          sub: "Manage authentication for Cook CLI",
        },

        {
          name: "Templates",
          link: "cook-mold",
          file: "cook/commands/mold.md",
          type: "command",
          sub: "Manage and create project templates",
        },
        {
          name: "Bake",
          link: "cook-bake",
          file: "cook/commands/bake.md",
          type: "command",
          sub: "Create a new project using templates",
        },
        {
          name: "Custom cmd",
          link: "cook-cmd",
          file: "cook/commands/cmd.md",
          type: "command",
          sub: "Execute and manage project utilities",
        },


        {
          name: "Run",
          link: "cook-run",
          file: "cook/commands/run.md",
          type: "command",
          sub: "Run task groups defined in Cook",
        },
        {
          name: "Tools",
          link: "cook-tool",
          file: "cook/commands/tool.md",
          type: "command",
          sub: "Utility tools for development",
        },

        {
          name: "System",
          link: "cook-sys",
          file: "cook/commands/sys.md",
          type: "command",
          sub: "System-level utilities for Cook CLI",
        },
        {
          name: "Version",
          link: "cook-version",
          file: "cook/commands/version.md",
          type: "command",
          sub: "Display Cook CLI version information",
        },
      ],
    },
  ],
};

export { MarkdownConfig };
