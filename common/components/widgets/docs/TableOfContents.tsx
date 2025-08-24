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

import type { MarkdownHeading } from "astro";
import type { FunctionalComponent } from "preact";
import { useState, useEffect, useRef } from "preact/hooks";

type ItemOffsets = {
  id: string;
  topOffset: number;
};

const parseDepth = (depth: number) => {
  switch (depth) {
    case 1:
      return "ml-0";
    case 2:
      return "ml-4";
    case 3:
      return "ml-8";
    case 4:
      return "ml-12";
    case 5:
      return "ml-16";
    case 6:
      return "ml-20";
    default:
      return "ml-0";
  }
};

const TableOfContents: FunctionalComponent<{ headings: MarkdownHeading[] }> = ({
  headings = [],
}) => {
  const toc = useRef<HTMLUListElement>(null);
  const onThisPageId = "on-this-page-heading";
  const itemOffsets = useRef<ItemOffsets[]>([]);
  const [currentId, setCurrentId] = useState("overview");
  useEffect(() => {
    const getItemOffsets = () => {
      const titles = document.querySelectorAll("article :is(h1, h2, h3, h4)");
      itemOffsets.current = Array.from(titles).map((title) => ({
        id: title.id,
        topOffset: title.getBoundingClientRect().top + window.scrollY,
      }));
    };

    getItemOffsets();
    window.addEventListener("resize", getItemOffsets);

    return () => {
      window.removeEventListener("resize", getItemOffsets);
    };
  }, []);

  useEffect(() => {
    if (!toc.current) return;

    const setCurrent: IntersectionObserverCallback = (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          const { id } = entry.target;
          if (id === onThisPageId) continue;
          setCurrentId(entry.target.id);
          break;
        }
      }
    };

    const observerOptions: IntersectionObserverInit = {
      rootMargin: "-100px 0% -66%",
      threshold: 1,
    };

    const headingsObserver = new IntersectionObserver(
      setCurrent,
      observerOptions,
    );

    // Observe all the headings in the main page content.
    document
      .querySelectorAll("article :is(h1,h2,h3)")
      .forEach((h) => headingsObserver.observe(h));

    // Stop observing when the component is unmounted.
    return () => headingsObserver.disconnect();
  }, [toc.current]);

  const onLinkClick = (e: MouseEvent) => {
    setCurrentId(
      (e.target as HTMLButtonElement)!.getAttribute("href")!.replace("#", ""),
    );
  };

  return (
    <ul ref={toc} className={"border-l border-dark-500"}>
      <li id={onThisPageId} className="mt-4 pl-4 font-semibold text-white">
        On this page
      </li>
      {headings.map(({ slug, text, depth }) => {
        return (
          <li
            className={`border-l py-1 ${
              currentId === slug
                ? "border-gold-500 text-gold-500"
                : "border-transparent text-gray-500 hover:text-gray-400"
            }`}
          >
            <a
              className={parseDepth(depth)}
              href={`#${slug}`}
              onClick={onLinkClick}
            >
              {text}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default TableOfContents;
