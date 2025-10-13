"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  const scrollContact = () => {
    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
      window.scrollTo({
        top: document.body.scrollHeight - 860,
        behavior: "smooth",
      });
    }
  };

  const scrollHome = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }
  const scrollAbout = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({
        top: window.innerHeight * 2.5,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    if (typeof window === 'undefined') return;
    
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
  className={`fixed top-0 left-1/2 transform -translate-x-1/2 z-50 rounded-full mt-4 shadow-lg transition-all duration-300 overflow-hidden ${
    scrolled
      ? "backdrop-blur-lg bg-black/60 border-b border-white/10 rounded-4xl ring-white/10 w-[90%] sm:w-[60%]"
      : "bg-gradient-to-r from-transparent via-black/40 to-black/60 w-[90%] sm:w-[89%]"
  }`}
  style={{
    boxShadow: scrolled
      ? "0 4px 24px 0 rgba(255, 0, 128, 0.08)"
      : "0 2px 8px 0 rgba(255,255,255,0.04)",
  }}
>

        <div className="max-w-9xl mx-auto px-4 sm:px-9 py-3 flex justify-between  items-center ">
          {/* Logo */}
          <Link
            href="/"
            onClick={scrollHome }
            className={`font-extrabold tracking-tight bg-gradient-to-r from-pink-400 via-fuchsia-400 to-blue-400 bg-clip-text text-transparent flex items-center gap-1 transition-all duration-300 ${
              scrolled ? "text-xl sm:text-2xl" : "text-2xl sm:text-3xl"
            }`}
          >
            Dhruv
          </Link>

          {/* Nav Links */}
          <div
            className={`flex flex-wrap sm:flex-nowrap items-center justify-center space-x-2 sm:space-x-4 md:space-x-8 text-white font-medium transition-all duration-300 ${
              scrolled
                ? "text-xs sm:text-sm md:text-base"
                : "text-sm sm:text-base md:text-lg"
            }`}
          >
            <Link
              href="/"
              className="relative px-1 sm:px-2 py-1 transition duration-200 hover:text-pink-400 
                after:content-[''] after:block after:h-0.5 after:bg-pink-400 after:scale-x-0 
                hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left"
            >
              Home
            </Link>
            {/* <Link
              href="/videoeditor"
              className="relative px-1 sm:px-2 py-1 transition duration-200 hover:text-pink-400 
                after:content-[''] after:block after:h-0.5 after:bg-pink-400 after:scale-x-0 
                hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left"
            >
              Editor
            </Link> */}
            <button
              onClick={scrollAbout}
              className="relative px-1 sm:px-2 py-1 transition duration-200 hover:text-pink-400 
                after:content-[''] after:block after:h-0.5 after:bg-pink-400 after:scale-x-0 
                hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left"
            >
              About
            </button>
            <button
              onClick={scrollContact}
              className="relative px-1 sm:px-2 py-1 transition duration-200 hover:text-pink-400 
                after:content-[''] after:block after:h-0.5 after:bg-pink-400 after:scale-x-0 
                hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left"
            >
              Contact
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
