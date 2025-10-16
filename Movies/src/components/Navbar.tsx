import React from "react";
import { useState, useRef, useEffect } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { HiX } from "react-icons/hi";
import { motion, AnimatePresence } from "motion/react";
const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const Refbutton = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isMenuOpen &&
        Refbutton.current &&
        !Refbutton.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);
  return (
    <nav className="navbar top-0 z-50 ">
      <div className="container flex justify-between items-center">
        <div className="navbar-brand flex items-center gap-2">
          <a href="/">
            <img src="/assets/images/" className="w-5 h-5" alt="movie-logo" />
          </a>
          <a href="/">
            <img src="/assets/images" className="w-5 h-5" alt="" />
          </a>
        </div>
        <div className="hidden md:flex justify-between gap-4 items-center">
          <ul className="navbar-menu ">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/movies">Movies</a>
            </li>
            <li>
              <a href="/tv-shows">TV Shows</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
          </ul>
        </div>
        {/* Hamburger menu button */}
        <button>
          {isMenuOpen ? (
            <HiX size={48} onClick={toggleMenu} color="#ffffff" />
          ) : (
            <RxHamburgerMenu size={48} onClick={toggleMenu} color="#ffffff" />
          )}
        </button>
      </div>
      {/* Dropdown menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.ul
            className="absolute h-100 top-20 w-full flex flex-col items-center justify-around shadow-lg text-center bg-[#030303]"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            style={{ padding: "24px" }}
          >
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/movies">Movies</a>
            </li>
            <li>
              <a href="/tv-shows">TV Shows</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
