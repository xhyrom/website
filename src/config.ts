export const SOCIALS = [
  {
    name: "GitHub",
    link: "https://github.com/xHyroM/",
    icon: "github.svg",
  },
  {
    name: "Discord",
    link: "https://s.xhyrom.dev/discord",
    icon: "discord.svg",
  },
  {
    name: "Twitter",
    link: "https://twitter.com/hyrousek/",
    icon: "twitter.svg",
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/hyro.dev/",
    icon: "instagram.svg",
  },
  {
    name: "ko-fi",
    link: "https://ko-fi.com/xhyrom",
    icon: "ko-fi.svg",
  },
] satisfies {
  name: string;
  link: string;
  icon: string;
}[];

export const SKILLS = [
  {
    name: "TypeScript",
    icon: "logos:typescript-icon",
  },
  {
    name: "JavaScript",
    icon: "logos:javascript",
  },
  {
    name: "Bun",
    icon: "logos:bun",
  },
  {
    name: "NodeJS",
    icon: "logos:nodejs-icon-alt",
  },
  {
    name: "Deno",
    icon: "logos:deno",
  },
  {
    name: "React",
    icon: "logos:react",
  },
  {
    name: "NextJS",
    icon: "file-icons:nextjs",
  },
  {
    name: "Astro",
    icon: "vscode-icons:file-type-astro",
  },
  {
    name: "TailwindCSS",
    icon: "logos:tailwindcss-icon",
  },
  {
    name: "Java",
    icon: "logos:java",
  },
  {
    name: "Kotlin",
    icon: "logos:kotlin-icon",
  },
  {
    name: "Rust",
    icon: "vscode-icons:file-type-rust",
  },
  {
    name: "Go",
    icon: "vscode-icons:file-type-go-aqua",
  },
  {
    name: "Prisma Client",
    icon: "skill-icons:prisma",
  },
  {
    name: "MySQL",
    icon: "logos:mysql-icon",
  },
  {
    name: "MongoDB",
    icon: "devicon:mongodb",
  },
  {
    name: "Redis",
    icon: "devicon:redis",
  },
  {
    name: "Git",
    icon: "logos:git-icon",
  },
  {
    name: "GitHub",
    icon: "mdi:github",
  },
  {
    name: "GitHub Actions",
    icon: "devicon:githubactions",
  },
  {
    name: "Cloudflare",
    icon: "logos:cloudflare",
  },
  {
    name: "Cloudflare Pages",
    icon: "simple-icons:cloudflarepages",
    color: "#f48120",
  },
  {
    name: "Cloudflare Workers",
    icon: "logos:cloudflare-workers-icon",
  },
  {
    name: "Visual Studio Code",
    icon: "logos:visual-studio-code",
  },
  {
    name: "IntelliJ IDEA",
    icon: "logos:intellij-idea",
  },
] satisfies {
  name: string;
  icon: string;
  color?: string;
}[];

export const PROJECTS = [
  {
    name: "Discord Datamining",
    link: "https://github.com/xHyroM/discord-datamining",
    desc: "Uncover Insights and Trends in Discord's Ecosystem. Explore, Analyze, Discover.",
  },
  {
    name: "hykord",
    link: "https://github.com/xHyroM/hykord",
    desc: "My @discord client modification. Currently out of date but prepare for a new version soon.",
  },
  {
    name: "lsx",
    link: "https://github.com/xHyroM/lsx",
    desc: "My attempt to create alternatives for **ls** and **dir**, mainly for windows. Using Rust.",
  },
  {
    name: "Mashe",
    link: "https://github.com/xHyroM/mashe",
    desc: "Simple event bus written in Java. Using LambdaMetafactory and also Reflections.",
  },
  {
    name: "Message Scraper",
    link: "https://github.com/xHyroM/message-scraper",
    desc: "Fast and versatile tool to extract discord channel messages into HTML, Markdown, or TXT.",
  },
  {
    name: "Peddler's Pocket",
    link: "https://github.com/xHyroM/peddlerspocket",
    desc: "A user-friendly plugin that makes the process of selling items easier and boosts your server's economy.",
  },
  {
    name: "Roles Bot",
    link: "https://github.com/xHyroM/roles-bot",
    desc: "Simplify role assignment with interactive buttons and dropdowns in Discord. Using Cloudflare Workers.",
  },
  {
    name: "Roomblom",
    link: "https://github.com/xHyroM/roomblom",
    desc: "Roomblom is a simple discord bot for music. Built on top of LavaPlayer, JDA and Kotlin.",
  },
  {
    name: "setup-bun",
    link: "https://github.com/oven-sh/setup-bun",
    desc: "Set up your GitHub Actions workflow with a specific version of Bun.",
  },
  {
    name: "shortener",
    link: "https://github.com/xHyroM/shortener",
    desc: "Modern shortener using Astro, Svelte, TypeScript built on top of Cloudflare Pages, Page Functions, D1 and KV",
  },
  {
    name: "Slovensko v Grafoch",
    link: "https://github.com/xHyroM/slovensko-v-grafoch",
    desc: "Slovensko v Grafoch is a website that shows data about Slovakia in graphs.",
  },
] as {
  name: string;
  link: string;
  desc: string;
  stats?: {
    forks: number;
    stars: number;
  };
}[];
