export interface Docs {
  sidebar: Sidebar[];
}

export interface Sidebar {
  text: string;
  header?: boolean;
  link?: string;
}

export const docs: Docs = {
  sidebar: [
    { text: "Discord Experiments API", header: true },
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
  ],
};
