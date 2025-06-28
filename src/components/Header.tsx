'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import logo from '@/assets/logo.png'
import { ChevronDown } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
        setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDropdownEnter = (dropdownName: string) => {
    setActiveDropdown(dropdownName);
  };

  const handleDropdownLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-[#002366]/60 backdrop-blur-md shadow-md' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-gray-900">
              <Image src={logo} alt="Layer3Cloud Logo" width={160} height={40} className="mb-2" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {/* Product Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => handleDropdownEnter('product')}
              onMouseLeave={handleDropdownLeave}
            >
              <div className="flex items-center space-x-1 cursor-pointer hover:text-cyan-400 transition-colors">
                <span>Product</span>
                <ChevronDown size={16} />
              </div>
              {activeDropdown === 'product' && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-4 z-50">
                  <Link href="/virtual-data-center" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-cyan-600 transition-colors">
                    Virtual Data Center
                  </Link>
                  <Link href="/virtual-server" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-cyan-600 transition-colors">
                    Virtual Server
                  </Link>
                  <Link href="/backup-service" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-cyan-600 transition-colors">
                    Backup as a Service
                  </Link>
                  <Link href="/object-storage" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-cyan-600 transition-colors">
                    Object Storage
                  </Link>
                  <Link href="/disaster-recovery" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-cyan-600 transition-colors">
                    Disaster Recovery
                  </Link>
                  <Link href="/kubernetes" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-cyan-600 transition-colors">
                    Kubernetes Services
                  </Link>
                </div>
              )}
            </div>

            {/* Resources Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => handleDropdownEnter('resources')}
              onMouseLeave={handleDropdownLeave}
            >
              <div className="flex items-center space-x-1 cursor-pointer hover:text-cyan-400 transition-colors">
                <span>Resources</span>
                <ChevronDown size={16} />
              </div>
              {activeDropdown === 'resources' && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-4 z-50">
                  <Link href="/pricing" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-cyan-600 transition-colors">
                    Pricing
                  </Link>
                  <Link href="/pricing-calculator" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-cyan-600 transition-colors">
                    Pricing Calculator
                  </Link>
                  <Link href="/documentation" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-cyan-600 transition-colors">
                    Developer Documentation
                  </Link>
                  <Link href="/faqs" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-cyan-600 transition-colors">
                    FAQs
                  </Link>
                  <Link href="/knowledge-base" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-cyan-600 transition-colors">
                    Knowledge Base
                  </Link>
                  <Link href="/industry-solutions" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-cyan-600 transition-colors">
                    Industry Solutions
                  </Link>
                </div>
              )}
            </div>

            {/* Pricing Link */}
            <Link href="/pricing" className="cursor-pointer hover:text-cyan-400 transition-colors">
              <span>Pricing</span>
            </Link>

            {/* Partners Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => handleDropdownEnter('partners')}
              onMouseLeave={handleDropdownLeave}
            >
              <div className="flex items-center space-x-1 cursor-pointer hover:text-cyan-400 transition-colors">
                <span>Partners</span>
                <ChevronDown size={16} />
              </div>
              {activeDropdown === 'partners' && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-4 z-50">
                  <Link href="/partner-programs" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-cyan-600 transition-colors">
                    Partner Programs
                  </Link>
                  <Link href="/become-partner" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-cyan-600 transition-colors">
                    Become a Partner
                  </Link>
                  <Link href="/partner-portal" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-cyan-600 transition-colors">
                    Partner Portal
                  </Link>
                  <Link href="/partner-resources" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-cyan-600 transition-colors">
                    Partner Resources
                  </Link>
                </div>
              )}
            </div>

            {/* Company Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => handleDropdownEnter('company')}
              onMouseLeave={handleDropdownLeave}
            >
              <div className="flex items-center space-x-1 cursor-pointer hover:text-cyan-400 transition-colors">
                <span>Company</span>
                <ChevronDown size={16} />
              </div>
              {activeDropdown === 'company' && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-4 z-50">
                  <Link href="/about" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-cyan-600 transition-colors">
                    About Us
                  </Link>
                  <Link href="/data-center" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-cyan-600 transition-colors">
                    Data Center
                  </Link>
                  <Link href="/blog" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-cyan-600 transition-colors">
                    Blog
                  </Link>
                  <Link href="/careers" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-cyan-600 transition-colors">
                    Careers
                  </Link>
                  <Link href="/customer-support" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-cyan-600 transition-colors">
                    Customer Support
                  </Link>
                  <Link href="/contact" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-cyan-600 transition-colors">
                    Contact Us
                  </Link>
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
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-gray-300 focus:outline-none focus:text-gray-900"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-gray-200">
              <Link href="/" className="text-gray-700 hover:text-gray-900 block px-3 py-2 text-base font-medium">
                Home
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-gray-900 block px-3 py-2 text-base font-medium">
                About
              </Link>
              <Link href="/services" className="text-gray-700 hover:text-gray-900 block px-3 py-2 text-base font-medium">
                Services
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-gray-900 block px-3 py-2 text-base font-medium">
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