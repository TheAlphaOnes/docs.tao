const MarkdownConfig = {
  md: [
    {
      name: "Cook",
      items: [
        {
          name: "Intro to cook",
          link: "cook-intro",
          file: "cook/cook-intro.md",
          type: "tool",
          sub: "Introduction to the Cook dev tool",
        },
        {
          name: "cook-line-of-cod",
          link: "cook-line-of-cod",
          file: "cook/cook-line-of-code.md",
          type: "command",
          sub: "Command to count lines of code",
        },
        {
          name: "cook-mold",
          link: "cook-mold",
          file: "cook/cook-mold.md",
          type: "command",
          sub: "Command to mold project files/templates",
        },
        {
          name: "cook-tree",
          link: "cook-tree",
          file: "cook/cook-tree.md",
          type: "command",
          sub: "Command to visualize project structure as a tree",
        },
        {
          name: "cook-license",
          link: "cook-license",
          file: "cook/license.md",
          type: "command",
          sub: "Command to manage project licensing",
        },
      ],
    },
  ],
};

export { MarkdownConfig };
