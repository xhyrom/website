export interface Docs {
  sidebar: SidebarItem[];
}

export interface SidebarItem {
  text: string;
  items: {
    text: string;
    link: string;
  }[];
}

export const docs: Docs = {
  sidebar: [
    {
      text: "Discord Experiments API",
      items: [
        {
          text: "Introduction",
          link: "/docs/discord-experiments-api/introduction",
        },
        {
          text: "Experiments",
          link: "/docs/discord-experiments-api/experiments",
        },
        {
          text: "Eligible",
          link: "/docs/discord-experiments-api/eligible",
        },
        {
          text: "Stats",
          link: "/docs/discord-experiments-api/stats",
        },
      ],
    },
  ],
};
