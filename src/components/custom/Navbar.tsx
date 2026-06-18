// TopGlassNav.jsx
import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import { NavLink } from "react-router";

const navItems = [
  {
    label: "Home",
    to: "/",
    icon: "mdi:home-outline",
  },
  {
    label: "Projects",
    to: "/projects",
    icon: "mdi:briefcase-outline",
  },
  {
    label: "Contact",
    to: "/contact",
    icon: "mdi:email-outline",
  },
];

export default function TopGlassNav() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    const initialTheme = savedTheme || (systemDark ? "dark" : "light");

    setTheme(initialTheme);
    document.documentElement.classList.toggle("dark", initialTheme === "dark");
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";

    setTheme(nextTheme);
    localStorage.setItem("theme", nextTheme);
    document.documentElement.classList.toggle("dark", nextTheme === "dark");
  };

  return (
    <nav
      className="
        fixed left-1/2 top-4 z-50 -translate-x-1/2
        rounded-full border border-black/10 bg-white/20
        px-2 py-1.5
        shadow-[0_8px_30px_rgba(0,0,0,0.08)]
        backdrop-blur-2xl backdrop-saturate-150
        dark:border-white/10 dark:bg-white/4
        dark:shadow-[0_8px_30px_rgba(0,0,0,0.35)]
      "
      style={{
        width: "min(88vw, 300px)",
      }}
    >
      <div
        className="
          pointer-events-none absolute inset-0 rounded-full
          bg-linear-to-b from-white/30 to-white/3
          dark:from-white/10 dark:to-white/1
        "
      />

      <div
        className="
          pointer-events-none absolute inset-x-5 top-0 h-px
          bg-linear-to-r from-transparent via-white/45 to-transparent
          dark:via-white/20
        "
      />

      <div className="relative grid grid-cols-4 gap-1">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.to === "/"}
            aria-label={item.label}
            className={({ isActive }) =>
              `
                group relative flex h-10 items-center justify-center rounded-full
                transition-all duration-200 ease-out
                ${
                  isActive
                    ? "bg-black/10 text-black dark:bg-white/15 dark:text-white"
                    : "text-black/55 hover:bg-black/5 hover:text-black dark:text-white/55 dark:hover:bg-white/10 dark:hover:text-white"
                }
              `
            }
          >
            <Icon
              icon={item.icon}
              width="21"
              height="21"
              className="transition-all duration-200 group-hover:-translate-y-0.5"
            />
          </NavLink>
        ))}

        <button
          type="button"
          onClick={toggleTheme}
          aria-label="Toggle theme"
          className="
            group relative flex h-10 items-center justify-center rounded-full
            text-black/55 transition-all duration-200 ease-out
            hover:bg-black/5 hover:text-black
            dark:text-white/55 dark:hover:bg-white/10 dark:hover:text-white
          "
        >
          <Icon
            icon={theme === "dark" ? "mdi:white-balance-sunny" : "mdi:moon-waning-crescent"}
            width="21"
            height="21"
            className="transition-all duration-200 group-hover:-translate-y-0.5"
          />
        </button>
      </div>
    </nav>
  );
}