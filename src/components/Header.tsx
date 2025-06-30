"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import logo from "@/assets/logo.png";
import logo2 from "@/assets/footer-logo.png";
import { ChevronDown } from "lucide-react";
import { Company, Partners, Product, Resources } from "./HeaderDropdown";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [closeTimeout, setCloseTimeout] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDropdownEnter = (dropdownName: string) => {
    if (closeTimeout) {
      clearTimeout(closeTimeout);
      setCloseTimeout(null);
    }
    setActiveDropdown(dropdownName);
  };

  const handleDropdownLeave = () => {
    const timeout = setTimeout(() => setActiveDropdown(null), 150);
    setCloseTimeout(timeout);
  };
  const pathname = usePathname();
  const isObjectStorage =
    pathname === "/object-storage" ||
    pathname === "/virtual-data-center" ||
    pathname === "/virtual-server" ||
    pathname === "/platform-as-a-service";

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? isObjectStorage
            ? "bg-white/80 backdrop-blur-md shadow-md"
            : "bg-[#002366]/60 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-gray-900">
              <Image
                src={isObjectStorage ? logo2 : logo}
                alt="Layer3Cloud Logo"
                width={160}
                height={40}
                className="mb-2"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div
            className={`hidden lg:flex items-center space-x-8 ${isObjectStorage ? "text-black" : "text-white"}`}
          >
            {/* Product Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleDropdownEnter("product")}
              onMouseLeave={handleDropdownLeave}
            >
              <div className="flex items-center space-x-1 cursor-pointer hover:text-cyan-400 transition-colors">
                <span>Product</span>
                <ChevronDown size={16} />
              </div>
              {activeDropdown === "product" && (
                <div className="absolute left-0 top-full z-50 -mt-1">
                  <Product />
                </div>
              )}
            </div>

            {/* Resources Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleDropdownEnter("resources")}
              onMouseLeave={handleDropdownLeave}
            >
              <div className="flex items-center space-x-1 cursor-pointer hover:text-cyan-400 transition-colors">
                <span>Resources</span>
                <ChevronDown size={16} />
              </div>
              {activeDropdown === "resources" && (
                <div className="absolute left-0 top-full z-50 -mt-1">
                  <Resources />
                </div>
              )}
            </div>

            {/* Pricing Link */}
            <Link
              href="/pricing"
              className="cursor-pointer hover:text-cyan-400 transition-colors"
            >
              <span>Pricing</span>
            </Link>

            {/* Partners Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleDropdownEnter("partners")}
              onMouseLeave={handleDropdownLeave}
            >
              <div className="flex items-center space-x-1 cursor-pointer hover:text-cyan-400 transition-colors">
                <span>Partners</span>
                <ChevronDown size={16} />
              </div>
              {activeDropdown === "partners" && (
                <div className="absolute left-0 top-full z-50 -mt-1">
                  <Partners />
                </div>
              )}
            </div>

            {/* Company Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleDropdownEnter("company")}
              onMouseLeave={handleDropdownLeave}
            >
              <div className="flex items-center space-x-1 cursor-pointer hover:text-cyan-400 transition-colors">
                <span>Company</span>
                <ChevronDown size={16} />
              </div>
              {activeDropdown === "company" && (
                <div className="absolute left-0 top-full z-50 -mt-1">
                  <Company />
                </div>
              )}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-2">
            <Link
              href="/login"
              className="text-red-600 font-medium px-4 py-2 rounded-lg hover:bg-red-50 transition"
            >
              Log In
            </Link>
            <Link
              href="/signup"
              className="bg-red-600 hover:bg-red-700 text-white font-semibold px-3 py-2 rounded-lg flex items-center transition shadow"
            >
              Sign Up
              <svg
                className="w-4 h-4 ml-1"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Link
              href="/login"
              className="text-red-600 font-medium px-4 py-2 rounded-lg hover:bg-red-50 transition"
            >
              Log In
            </Link>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={` ${isObjectStorage ? "text-black" : "text-white hover:text-gray-300 focus:outline-none focus:text-gray-900"}`}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-gray-200">
              <Link
                href="/"
                className="text-gray-700 hover:text-gray-900 block px-3 py-2 text-base font-medium"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-gray-700 hover:text-gray-900 block px-3 py-2 text-base font-medium"
              >
                About
              </Link>
              <Link
                href="/services"
                className="text-gray-700 hover:text-gray-900 block px-3 py-2 text-base font-medium"
              >
                Services
              </Link>
              <Link
                href="/contact"
                className="text-gray-700 hover:text-gray-900 block px-3 py-2 text-base font-medium"
              >
                Contact
              </Link>
              <div className="pt-4">
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
