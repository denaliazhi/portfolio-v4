const projects = {
  groceryShop: {
    title: "ESL Grocery Shop",
    desc_short:
      "A narrative app for ESL students",
    desc_long: `I built a narrative app to help English as a Second Language (ESL) 
      students navigate the grocery store and gain confidence in their everyday lives.`,
    images_featured: [
      {
        src: "grocery-cover.png",
        alt: "Cover of ESL grocery shopping app",
      },
      {
        src: "grocery-feature-1.png",
        alt: "Introductory question: How do you grocery shop?",
      },
      {
        src: "grocery-feature-2.png",
        alt: "Key features",
      },
      {
        src: "grocery-feature-3.png",
        alt: "Target audience",
      },
    ],
    type: ["Personal project", "Frontend"],
    tools: ["React"],
  },
  haikuHunt: {
    title: "Haiku Hunt",
    desc_short: "A poetic scavenger hunt",
    desc_long:
      "I built a platform where users guess landmarks based on haiku clues and then write poems of their own.",
    images_featured: [
      {
        src: "haiku-cover.png",
        alt: "Cover of Haiku Hunt app",
      },
      {
        src: "haiku-feature-1.png",
        alt: "Key features",
      },
    ],
    type: ["Personal project", "Fullstack"],
    tools: ["Express", "PostgreSQL"],
  },
  orbitl: {
    title: "Orbitl",
    desc_short:
      "A science startup's landing page",
    images_featured: [
      {
        src: "orbitl-cover.png",
        alt: "Cover of Orbitl website",
      },
    ],
    type: [
      "Client project",
      "Design",
      "Frontend",
    ],
    tools: ["Wordpress", "HTML", "CSS"],
  },
};

export { projects };
