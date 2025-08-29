"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
      <div className="w-full flex justify-center">
        <nav
          className={`fixed top-0 left-1/2 transform -translate-x-1/2 z-50  rounded-full mt-4 shadow-lg transition-all duration-300 ${
            scrolled
              ? "backdrop-blur-lg bg-black/60 border-b border-white/10 rounede-4xl ring-white/10 w-[60%] "
              : "bg-gradient-to-r from-transparent  via-black/40 to-black/60 w-[89%]"
          }`}
          style={{
            boxShadow: scrolled
              ? "0 4px 24px 0 rgba(255, 0, 128, 0.08)"
              : "0 2px 8px 0 rgba(255,255,255,0.04)",
            border: "1px solid rgba(0,0,0,0.1)",
          }}
        >
          <div className="max-w-9xl mx-auto px-6 py-4 flex justify-between items-center">
            {/* Logo */}
            <Link
              href="/"
              className="text-2xl font-extrabold tracking-tight bg-gradient-to-r from-pink-400 via-fuchsia-400 to-blue-400 bg-clip-text text-transparent flex items-center gap-1"
            >
              Dhruv_
              <span className="text-pink-400 font-bold text-lg align-super">Edits</span>
            </Link>

            {/* Nav Links */}
            <div className="flex space-x-4 md:space-x-8 text-white font-medium">
              <Link
                href="/"
                className="relative px-2 py-1 transition duration-200 hover:text-pink-400 after:content-[''] after:block after:h-0.5 after:bg-pink-400 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left"
              >
                Home
              </Link>
              <Link
                href="/videoeditor"
                className="relative px-2 py-1 transition duration-200 hover:text-pink-400 after:content-[''] after:block after:h-0.5 after:bg-pink-400 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left"
              >
                Editor
              </Link>
              <Link
                href="/about"
                className="relative px-2 py-1 transition duration-200 hover:text-pink-400 after:content-[''] after:block after:h-0.5 after:bg-pink-400 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="relative px-2 py-1 transition duration-200 hover:text-pink-400 after:content-[''] after:block after:h-0.5 after:bg-pink-400 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left"
              >
                Contact
              </Link>
            </div>
          </div>
        </nav>
      </div>
    
  );
};

export default Navbar;
