const srcBase = "/odin-projects/";

export const projects = [
  {
    title: "Recipe Site",
    date: new Date(2025, 4, 12),
    desc: "Well, it's a start",
    repo: "https://github.com/denaliazhi/odin-recipes",
    image: {
      src: srcBase + "basic-recipe.png",
      alt: "A plain HTML page with a list of two recipes",
    },
    focus: ["HTML / CSS"],
  },
  // {
  //   title: "Landing Page",
  //   date: new Date(2025, 4, 24),
  //   desc: "Looks like something, but does nothing",
  //   repo: "https://github.com/denaliazhi/odin-landing-page",
  //   image: {
  //     src: srcBase + "basic-landing.png",
  //     alt: "A static landing page for a London-themed blog",
  //   },
  //   focus: ["HTML / CSS"],
  // },
  {
    title: "Etch-A-Sketch",
    date: new Date(2025, 5, 9),
    desc: "Now we're drawing",
    repo: "https://github.com/denaliazhi/odin-sketch",
    image: {
      src: srcBase + "etch-a-sketch.png",
      alt: "A square pixel grid with a colorful squiggle",
    },
    focus: ["Javascript"],
  },
  {
    title: "Cowculator",
    date: new Date(2025, 5, 12),
    desc: "Getting (fun)ctional",
    repo: "https://github.com/denaliazhi/odin-calculator",
    image: {
      src: srcBase + "cowculator.png",
      alt: "A calculator with a cow face",
    },
    focus: ["Javascript"],
  },
  {
    title: "Dashboard",
    date: new Date(2025, 6, 5),
    desc: "Not functional. But responsive",
    repo: "https://github.com/denaliazhi/odin-dashboard",
    image: {
      src: srcBase + "dashboard.png",
      alt: "A dashboard that tracks the apps you've built",
    },
    focus: ["HTML / CSS"],
  },
  {
    title: "Ye Olde Bookshelf",
    date: new Date(2025, 6, 9),
    desc: "A modern relic",
    repo: "https://github.com/denaliazhi/ye-olde-bookshelf",
    image: {
      src: srcBase + "bookshelf.png",
      alt: "A digital bookshelf with a Shakespearean aesthetic",
    },
    focus: ["Javascript"],
  },
  {
    title: "Tic Tac Toe",
    date: new Date(2025, 6, 13),
    desc: "It's the game and the snack",
    repo: "https://github.com/denaliazhi/tic-tac-toe",
    image: {
      src: srcBase + "tic-tac-toe.png",
      alt: "A tic-tac-toe board with snack mints as game pieces",
    },
    focus: ["Javascript"],
  },
  {
    title: "Frog & Toad Cafe",
    date: new Date(2025, 6, 25),
    desc: "Come for a cozy cup of pixels",
    repo: "https://github.com/denaliazhi/frog-and-toad-cafe",
    image: {
      src: srcBase + "ft-cafe.png",
      alt: "An online menu for a Frog & Toad themed cafe",
    },
    focus: ["Javascript"],
  },
  {
    title: "ESL Weather Chat",
    date: new Date(2025, 6, 31),
    desc: "A narrative app",
    repo: "https://github.com/denaliazhi/esl-weather-chat",
    image: {
      src: srcBase + "weather-chat.png",
      alt: "A weather forecast with English narration",
    },
    focus: ["Javascript"],
  },
  {
    title: "CV Builder",
    date: new Date(2025, 8, 3),
    desc: "What more can I say?",
    repo: "https://github.com/denaliazhi/cv-builder",
    image: {
      src: srcBase + "cv-builder.png",
      alt: "A form to build a CV",
    },
    focus: ["React"],
  },

  {
    title: "Froget-Me-Not",
    date: new Date(2025, 8, 6),
    desc: "Keep the brain 'frog' away",
    repo: "https://github.com/denaliazhi/forget-me-not",
    image: {
      src: srcBase + "froget-me-not.png",
      alt: "A 5x2 grid of frog stickers",
    },
    focus: ["React"],
  },

  {
    title: "ESL Grocery Shop",
    date: new Date(2025, 8, 29),
    desc: "A(nother) narrative app",
    repo: "https://github.com/denaliazhi/esl-grocery-shop",
    image: {
      src: srcBase + "grocery-shop.png",
      alt: "A grocery shop with English narration",
    },
    focus: ["React"],
  },
  {
    title: "Haiku Hunt",
    date: new Date(2025, 9, 23),
    desc: "A poetic scavenger hunt",
    repo: "https://github.com/denaliazhi/haiku-hunt",
    image: {
      src: srcBase + "haiku-hunt.png",
      alt: "A grid of scavenger hunt clue cards",
    },
    focus: ["Express", "pSQL"],
  },
];
