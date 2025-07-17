"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-violet-500 shadow-md fixed top-0 w-full z-50">
      <div className="mx-auto px-10 md:px-15 py-5 flex justify-between items-center">
        <div className="text-xl font-bold text-white">Wisma Violet</div>

        {/* Hamburger Icon (Mobile) */}
        <button className="md:hidden text-white" onClick={toggleMenu}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Menu (Desktop) */}
        <nav className="hidden md:flex space-x-10 text-xl font-bold text-white">
          <Link
            href="#kamar"
            className="hover:text-orange-300 transition duration-300"
          >
            Kamar
          </Link>
          <Link
            href="#fasilitas"
            className="hover:text-orange-300 transition duration-300"
          >
            Fasilitas
          </Link>
          <Link
            href="#kontak"
            className="hover:text-orange-300 transition duration-300"
          >
            Kontak
          </Link>
        </nav>
      </div>

      {/* Menu (Mobile) */}
      {isOpen && (
        <nav className="md:hidden flex flex-col bg-white shadow px-4 py-3 space-y-3 text-gray-700">
          <Link
            href="#kamar"
            onClick={toggleMenu}
            className="hover:text-violet-500"
          >
            Kamar
          </Link>
          <Link
            href="#fasilitas"
            onClick={toggleMenu}
            className="hover:text-violet-500"
          >
            Fasilitas
          </Link>
          <Link
            href="#kontak"
            onClick={toggleMenu}
            className="hover:text-violet-500"
          >
            Kontak
          </Link>
        </nav>
      )}
    </header>
  );
}
