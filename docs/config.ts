export interface Docs {
  sidebar: Sidebar[];
}

export interface SidebarItem {
  text: string;
  link: string;
}

export interface Sidebar {
  text: string;
  items: SidebarItem[];
}

export const docs: Docs = {
  sidebar: [
    {
      text: "DUX API",
      items: [
        {
          text: "Introduction",
          link: "/docs/dux/introduction",
        },
        {
          text: "Experiments",
          link: "/docs/dux/experiments",
        },
        {
          text: "Eligible",
          link: "/docs/dux/eligible",
        },
        {
          text: "Endpoints",
          link: "/docs/dux/endpoints",
        },
        {
          text: "Stats",
          link: "/docs/dux/stats",
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
