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
      text: "Discord Tools API",
      items: [
        {
          text: "Introduction",
          link: "/docs/distools-api/introduction",
        },
        {
          text: "Experiments",
          link: "/docs/distools-api/experiments",
        },
        {
          text: "Eligible",
          link: "/docs/distools-api/eligible",
        },
        {
          text: "Stats",
          link: "/docs/distools-api/stats",
        },
      ],
    },
    {
      text: "Peddler's Pocket",
      items: [
        {
          text: "Introduction",
          link: "/docs/peddlerspocket/introduction",
        },
        {
          text: "Configuration",
          link: "/docs/peddlerspocket/configuration",
        },
      ],
    },
  ],
};
