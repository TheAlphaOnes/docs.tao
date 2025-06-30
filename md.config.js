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
          sub:  "introduction to cook dev tool"
        },
      ],
    },
    {
      name: "Aura",
      items: [
        {
          name: "Intro to aura",
          link: "aura-intro",
          file: "aura/aura-intro.md",
          type:"service",
          sub:"introduction to aura ai"
        },
        {
          name: "customize aura",
          link: "aura-customize",
          file: "aura/aura-customize.md",
          type:"service",
          sub: "customize the aura ai personality"
        },
      ],
    },
  ],
};

export { MarkdownConfig };
