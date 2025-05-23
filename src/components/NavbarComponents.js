"use client";

import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const NavbarComponent = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [token, setToken] = useState(null);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const match = document.cookie.match(/(^| )token=([^;]+)/);
    setToken(match ? match[2] : null);
  }, []);

  const handleAuthClick = () => {
    if (token) {
      document.cookie =
        "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      document.cookie = "role=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      setToken(null);
      router.push("/");
    } else {
      router.push("/login");
    }
    setSidebarOpen(false);
  };

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Our Menu", path: "/menu" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
          scrolled ? "bg-[#008a2f]/70 backdrop-blur-md" : "bg-[#008a2f]"
        }`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center py-5">
          <p className="text-2xl font-bold text-white">
            <span className="text-orange-400">Dimas</span>akin.
          </p>

          <nav>
            <ul className="hidden sm:flex gap-10">
              {menuItems.map((item) => (
                <li
                  key={item.path}
                  className={`${
                    pathname === item.path ? "text-orange-400" : "text-white"
                  } font-semibold cursor-pointer hover:text-orange-400 transition-colors duration-300`}
                  onClick={() => setSidebarOpen(false)}
                >
                  <Link href={item.path}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Login Desktop */}
          <button
            onClick={handleAuthClick}
            className="hidden sm:block bg-orange-400 py-1 px-3 rounded text-white font-semibold hover:bg-orange-500 transition-colors"
          >
            {token ? "Logout" : "Login"}
          </button>

          {/* Menu Mobile */}
          <button
            className="sm:hidden text-white"
            onClick={() => setSidebarOpen(true)}
            aria-label="Open Menu"
          >
            <Menu size={32} />
          </button>
        </div>
      </header>

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${
          sidebarOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setSidebarOpen(false)}
      />

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 w-64 h-full bg-[#4cad6d] z-50 transform transition-transform duration-500 ease-in-out shadow-xl rounded-r-lg flex flex-col p-8 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
          className="self-end mb-10 text-white hover:text-orange-300 transition-colors"
          onClick={() => setSidebarOpen(false)}
          aria-label="Close Menu"
        >
          <X size={32} />
        </button>

        <nav>
          <ul className="flex flex-col gap-10 text-white font-semibold text-lg">
            {menuItems.map((item) => (
              <li
                key={item.path}
                className="cursor-pointer hover:text-orange-400 transition-colors duration-300"
                onClick={() => setSidebarOpen(false)}
              >
                <Link href={item.path}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex-grow" />

        <button
          onClick={handleAuthClick}
          className="bg-orange-400 py-3 rounded-full text-white font-semibold hover:bg-orange-500 transition-colors duration-300"
        >
          {token ? "Logout" : "Login"}
        </button>
      </aside>
    </>
  );
};

export default NavbarComponent;
