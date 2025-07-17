"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <header className="bg-violet-500 fixed top-0 w-full z-50">
        <div className="mx-auto px-10 md:px-15 py-5 flex justify-between items-center z-30">
          <div className="text-xl font-bold text-white">Wisma Violet</div>

          {/* Hamburger Icon (Mobile) */}
          <button className="md:hidden text-white" onClick={toggleMenu}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Menu (Desktop) */}
          <nav className="hidden md:flex space-x-10 text-xl font-bold text-white">
            <Link
              href="#fasilitas"
              className="hover:text-orange-300 transition duration-300"
            >
              Fasilitas
            </Link>
            <Link
              href="#kamar"
              className="hover:text-orange-300 transition duration-300"
            >
              Kamar
            </Link>
            <Link
              href="#kontak"
              className="hover:text-orange-300 transition duration-300"
            >
              Kontak
            </Link>
          </nav>
        </div>
      </header>

      {/* Menu (Mobile) */}
      <div
        className={`md:hidden fixed top-16 z-30 left-0 w-full bg-white transition-transform duration-300 ease-in-out
        ${
          isOpen
            ? "translate-y-0 opacity-100"
            : "-translate-y-50 opacity-0 pointer-events-none"
        }
        flex flex-col items-start px-10 py-6 space-y-4 shadow-md text-violet-500 text-lg font-semibold`}
      >
        <Link
          href="#fasilitas"
          onClick={toggleMenu}
          className="hover:text-orange-300 transition duration-300"
        >
          Fasilitas
        </Link>
        <Link
          href="#kamar"
          onClick={toggleMenu}
          className="hover:text-orange-300 transition duration-300"
        >
          Kamar
        </Link>
        <Link
          href="#kontak"
          onClick={toggleMenu}
          className="hover:text-orange-300 transition duration-300"
        >
          Kontak
        </Link>
      </div>
    </>
  );
}
