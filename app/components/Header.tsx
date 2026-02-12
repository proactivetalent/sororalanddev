"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About Us" },
];

export default function Header() {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 10) {
        // Always show header at top of page
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY) {
        // Scrolling down - hide header
        setIsVisible(false);
      } else {
        // Scrolling up - show header
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <div className="fixed top-0 left-0 mt-3 md:mt-[28px] right-0 z-50 flex justify-center">
        <header
          className={`w-full h-[60px] md:h-[85px] header-container bg-[#F7F8F8] shadow-sm rounded-full transition-transform duration-300 ${
            isVisible ? "translate-y-0" : "-translate-y-[calc(100%+2rem)]"
          }`}
        >
          <div className="flex items-stretch justify-between h-full">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 h-full">
              <div className="px-4 md:px-8 flex items-center justify-center h-full">
                <img 
                  src="/pictures/logo.svg" 
                  alt="Sorora Logo" 
                  className="h-[35px] md:h-[50px] w-auto object-contain"
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-10">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative text-sm font-medium transition-colors ${
                      isActive ? "text-gray-900" : "text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-[#E20D6E] rounded-full" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop Contact Button */}
            <Link
              href="/contact"
              className="hidden lg:flex bg-[#E20D6E] hover:bg-pink-700 text-white text-sm font-medium px-8 rounded-r-full rounded-l-sm items-center transition-colors"
            >
              Contact Us
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden flex items-center justify-center w-[60px] h-full rounded-r-full bg-[#E20D6E] hover:bg-[#E20D6E] transition-colors"
              aria-label="Toggle menu"
            >
              <div className="flex flex-col gap-1.5">
                <span 
                  className={`block w-5 h-0.5 bg-white transition-transform duration-300 ${
                    isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
                  }`} 
                />
                <span 
                  className={`block w-5 h-0.5 bg-white transition-opacity duration-300 ${
                    isMobileMenuOpen ? "opacity-0" : ""
                  }`} 
                />
                <span 
                  className={`block w-5 h-0.5 bg-white transition-transform duration-300 ${
                    isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
                  }`} 
                />
              </div>
            </button>
          </div>
        </header>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 lg:hidden ${
          isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Menu Panel */}
      <div
        className={`fixed top-0 right-0 z-40 h-full w-[280px] bg-white shadow-xl transition-transform duration-300 lg:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col pt-24 px-6">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`relative text-lg font-medium py-3 px-4 rounded-lg transition-colors ${
                    isActive 
                      ? "text-[#E20D6E] bg-pink-50" 
                      : "text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <Link
            href="/contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="mt-6 bg-[#E20D6E] hover:bg-[#E20D6E] text-white text-base font-medium px-6 py-3 rounded-full text-center transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </>
  );
}
