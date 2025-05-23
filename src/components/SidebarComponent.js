"use client";

import React from "react";
import { X } from "lucide-react";
import Link from "next/link";

const SidebarComponent = ({ open, onClose, menuItems }) => {
  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={onClose}
      />

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 w-64 h-full bg-[#4cad6d] z-50 transform transition-transform duration-500 ease-in-out shadow-xl rounded-r-lg flex flex-col p-8 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Tombol tutup */}
        <button
          className="self-end mb-10 text-white hover:text-orange-300 transition-colors"
          onClick={onClose}
          aria-label="Close Menu"
        >
          <X size={32} />
        </button>

        {/* Menu Mobile */}
        <nav>
          <ul className="hidden sm:flex gap-10 ">
            {menuItems.map((item) => (
              <li key={item.path}>
                <Link
                  href={item.path}
                  className={`cursor-pointer hover:text-orange-400 ${
                    pathname === item.path ? "text-orange-400" : "text-white"
                  } transition-colors duration-300`}
                  onClick={onClose}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Spacer */}
        <div className="flex-grow" />

        {/* Tombol login */}
        <button
          className="bg-orange-400 py-3 rounded-full text-white font-semibold hover:bg-orange-500 transition-colors duration-300"
          onClick={onClose}
        >
          Login
        </button>
      </aside>
    </>
  );
};

export default SidebarComponent;
