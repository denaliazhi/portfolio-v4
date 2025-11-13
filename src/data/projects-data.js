const projects = {
  groceryShop: {
    title: "ESL Grocery Shop",
    desc_short:
      "A narrative app for English learners",
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
    images_supporting: [],
    type: "Personal project",
    tools: ["React"],
  },
  haikuHunt: {
    title: "Haiku Hunt",
    desc_short:
      "A poetic, open-source scavenger hunt",
    images_featured: [
      {
        src: "haiku-cover.png",
        alt: "Cover of Haiku Hunt app",
      },
    ],
    images_supporting: [],
    type: "Personal project",
    tools: ["Node", "Express", "PostgreSQL"],
  },
  orbitl: {
    title: "Orbitl",
    desc_short:
      "Focus on breakthroughs, not busywork",
    images_featured: [
      {
        src: "orbitl-cover.png",
        alt: "Cover of Orbitl website",
      },
    ],
    images_supporting: [],
    type: "Client project",
    tools: ["Wordpress"],
  },
};

export { projects };
