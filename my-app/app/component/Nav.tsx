"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoIosArrowDown, IoMdArrowDropdown } from "react-icons/io";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import { motion } from "framer-motion";
import { FaBars, FaMoon, FaSun, FaTimes, FaWifi, FaChevronDown } from "react-icons/fa";

export default function Hkb_nav() {
  const headerNav = [
    { id: 1, title: "Home", href: "/" },
    { id: 2, title: "About Us", href: "/about_us" },
    { id: 3, title: "Packages", href: "/packages" },
    { id: 4, title: "Services", href: "/services" },
    { id: 5, title: "Contact Us", href: "/contact_us" },
  ];

  const cities = ["Kabul", "Herat", "Mazar", "Jawzjan"];

  const pathname = usePathname();
  const [active, setActive] = useState<string>(pathname);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [dropOpen, setDropOpen] = useState<boolean>(false);
  const [dark, setDark] = useState<boolean>(false);

  useEffect(() => {
    if (localStorage.getItem("theme") === "dark") {
      setDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  const linkClass = (href: string) =>
    active === href
      ? "border-b-2 border-blue-600 py-1 text-sm font-bold text-blue-700"
      : "border-b-2 border-transparent py-1 text-sm font-medium text-slate-600 hover:text-blue-600 dark:text-slate-300";

  return (
    <div className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/90 backdrop-blur dark:border-slate-700 dark:bg-slate-900/90">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <Link
          href="/"
          onClick={() => setActive("/")}
          className="flex items-center gap-2 text-xl font-extrabold"
        >
          <div className="flex flex-row items-center gap-3">
          <Image src={"/logo_alone.svg"} alt="logo" height={100} width={130}/>
          Hindukush Bridge
          </div>
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          {headerNav.slice(0, 2).map((item) => (
            <Link
              key={item.id}
              href={item.href}
              onClick={() => setActive(item.href)}
              className={linkClass(item.href)}
            >
              {item.title}
            </Link>
          ))}

          <div
            className="relative"
            onMouseEnter={() => setDropOpen(true)}
            onMouseLeave={() => setDropOpen(false)}
          >
            <Link
              href="/packages"
              onClick={() => setActive("/packages")}
              className={`flex items-center gap-2 ${linkClass("/packages")}`}
            >
              Packages
              <FaChevronDown className="text-xs" />
            </Link>
            {dropOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="absolute left-0 top-full w-48 rounded-xl border border-slate-200 bg-white py-2 shadow-xl dark:border-slate-700 dark:bg-slate-800"
              >
                {cities.map((city) => (
                  <Link
                    key={city}
                    href="/packages"
                    onClick={() => {
                      setActive("/packages");
                      setDropOpen(false);
                    }}
                    className="block px-5 py-2 text-sm text-slate-600 hover:bg-teal-50 hover:text-blue-700 dark:text-slate-300 dark:hover:bg-slate-700"
                  >
                    {city}
                  </Link>
                ))}
              </motion.div>
            )}
          </div>

          {headerNav.slice(3).map((item) => (
            <Link
              key={item.id}
              href={item.href}
              onClick={() => setActive(item.href)}
              className={linkClass(item.href)}
            >
              {item.title}
            </Link>
          ))}
          <motion.a
            href="https://movieland.af"
            whileHover={{ scale: 1.05 }}
            className="rounded-full bg-blue-800 px-5 py-2 text-sm font-semibold text-white"
          >
            Movieland
          </motion.a>
        </div>

        <div className="flex items-center gap-3">
          <motion.button
            aria-label="Toggle theme"
            onClick={toggleTheme}
            whileHover={{ scale: 1.1 }}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 dark:border-slate-600 text-slate-600 dark:text-slate-300"
          >
            {dark ? <FaSun /> : <FaMoon />}
          </motion.button>
          <button
            aria-label="Menu"
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-2xl lg:hidden text-slate-600 dark:text-slate-300"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="overflow-hidden border-t border-slate-200 bg-white lg:hidden dark:border-slate-700 dark:bg-slate-900"
        >
          <div className="flex flex-col px-5 py-3">
            {headerNav.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                onClick={() => {
                  setActive(item.href);
                  setMenuOpen(false);
                }}
                className={`border-b border-slate-100 py-3 text-sm dark:border-slate-800 ${
                  active === item.href ? "font-bold text-blue-400" : "font-medium text-slate-600 dark:text-slate-300"
                }`}
              >
                {item.title}
              </Link>
            ))}
            <a
              href="https://movieland.af"
              className="my-4 rounded-full bg-blue-800 py-3 text-center text-sm font-semibold text-white"
            >
              Movieland
            </a>
          </div>
        </motion.div>
      )}
    </div>
  );
}
