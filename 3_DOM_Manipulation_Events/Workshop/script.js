// Select the story container element
const storyContainer = document.querySelector(".story-container");

// Select the story buttons
const scaryStoryBtn = document.querySelector("#scary-btn");
const funnyStoryBtn = document.querySelector("#funny-btn");
const adventureStoryBtn = document.querySelector("#adventure-btn");

// Select the result paragraph
const resultParagraph = document.querySelector("#result");

// Story object containing all story types
const storyObj = {
  scary: {
    story:
      "In the dark woods, a group of friends stumbled upon an old, abandoned cabin. They enter the cabin and awaken something malevolent that had been dormant for centuries.",
    borderColor: "#ee4b2b",
  },
  funny: {
    story:
      "During a camping trip, Mark decided to show off his culinary skills by cooking dinner over an open fire. However, his attempt caused him to burn the dinner as well as his eyebrows off.",
    borderColor: "#f1be32",
  },
  adventure: {
    story:
      "Lost in the heart of the Amazon rain forest, Sarah and Jake stumbled upon an ancient temple. They braved deadly traps and encountered strange wildlife, all while deciphering cryptic clues left behind by a mysterious civilization.",
    borderColor: "#acd157",
  },
};

// https://claude.ai/chat/c5fb1fc0-a859-4c5c-874f-eba91780a0c1
