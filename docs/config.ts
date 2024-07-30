/**
 * @license
 * Copyright (c) 2022 Jozef Steinhübl
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <https://www.gnu.org/licenses/>.
 */

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
