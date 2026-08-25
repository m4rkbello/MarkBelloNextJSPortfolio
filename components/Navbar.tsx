"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // The sections we want to link to
  const links = ["About", "Skills", "Projects", "Experience", "Contact"];

  // Change navbar styling when scrolling down
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Desktop & Mobile Top Bar */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 md:top-6 w-full md:w-[85%] md:left-[7.5%] z-50 transition-all duration-300 ${
          scrolled || isOpen
            ? "bg-black/60 md:bg-white/5 backdrop-blur-xl border-b md:border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] md:rounded-full"
            : "bg-transparent border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          
          {/* 2. Replaced text with your Logo Image */}
          <a href="#home" className="z-50 block">
            <Image 
              src="/logo.png" 
              alt="Mark Bello Logo" 
              width={150} 
              height={50} 
              className="h-10 w-auto object-contain"
              priority 
            />
          </a>
          
          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a 
                key={link} 
                href={`#${link.toLowerCase()}`} 
                className="text-sm font-medium text-gray-300 hover:text-white transition-colors relative group"
              >
                {link}
                {/* Underline hover effect updated to green */}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-green-500 transition-all duration-300 group-hover:w-full rounded-full"></span>
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <a 
              href="#contact" 
              className="px-6 py-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-sm font-medium text-white transition-all shadow-[0_0_15px_rgba(255,255,255,0.05)] hover:border-green-500/50"
            >
              Let's Talk
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-white z-50 p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} className="text-green-400" /> : <Menu size={28} className="text-green-400" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-3xl flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {links.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className="text-3xl font-bold text-gray-300 hover:text-green-400 transition-colors"
              >
                {link}
              </a>
            ))}
            <a 
              href="#contact" 
              onClick={() => setIsOpen(false)}
              className="mt-4 px-8 py-4 rounded-full bg-green-500/20 border border-green-500/50 text-xl font-medium text-green-400 transition-all"
            >
              Let's Talk
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}