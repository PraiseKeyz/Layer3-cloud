"use client";
import Link from "next/link";

export const Partners = () => {
  return (
    <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-4 z-50">
      <Link
        href="/partner-programs"
        className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-cyan-600 transition-colors"
      >
        Partner Programs
      </Link>
      <Link
        href="/become-partner"
        className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-cyan-600 transition-colors"
      >
        Become a Partner
      </Link>
      <Link
        href="/partner-portal"
        className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-cyan-600 transition-colors"
      >
        Partner Portal
      </Link>
      <Link
        href="/partner-resources"
        className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-cyan-600 transition-colors"
      >
        Partner Resources
      </Link>
    </div>
  );
};

export const Company = () => {
  return (
    <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-4 z-50">
      <Link
        href="/about"
        className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-cyan-600 transition-colors"
      >
        About Us
      </Link>
      <Link
        href="/data-center"
        className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-cyan-600 transition-colors"
      >
        Data Center
      </Link>
      <Link
        href="/blog"
        className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-cyan-600 transition-colors"
      >
        Blog
      </Link>
      <Link
        href="/careers"
        className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-cyan-600 transition-colors"
      >
        Careers
      </Link>
      <Link
        href="/customer-support"
        className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-cyan-600 transition-colors"
      >
        Customer Support
      </Link>
      <Link
        href="/contact"
        className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-cyan-600 transition-colors"
      >
        Contact Us
      </Link>
    </div>
  );
};

export const Product = () => {
  return (
    <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-4 z-50">
      <Link
        href="/virtual-data-center"
        className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-cyan-600 transition-colors"
      >
        Virtual Data Center
      </Link>
      <Link
        href="/virtual-server"
        className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-cyan-600 transition-colors"
      >
        Virtual Server
      </Link>
      <Link
        href="/backup-service"
        className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-cyan-600 transition-colors"
      >
        Backup as a Service
      </Link>
      <Link
        href="/object-storage"
        className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-cyan-600 transition-colors"
      >
        Object Storage
      </Link>
      <Link
        href="/disaster-recovery"
        className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-cyan-600 transition-colors"
      >
        Disaster Recovery
      </Link>
      <Link
        href="/platform-as-a-service"
        className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-cyan-600 transition-colors"
      >
        Platform as a Service (PaaS)
      </Link>
      <Link
        href="/kubernetes"
        className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-cyan-600 transition-colors"
      >
        Kubernetes Services
      </Link>
    </div>
  );
};

export const Resources = () => {
  return (
    <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-4 z-50">
      <Link
        href="/pricing"
        className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-cyan-600 transition-colors"
      >
        Pricing
      </Link>
      <Link
        href="/pricing-calculator"
        className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-cyan-600 transition-colors"
      >
        Pricing Calculator
      </Link>
      <Link
        href="/documentation"
        className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-cyan-600 transition-colors"
      >
        Developer Documentation
      </Link>
      <Link
        href="/faqs"
        className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-cyan-600 transition-colors"
      >
        FAQs
      </Link>
      <Link
        href="/knowledge-base"
        className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-cyan-600 transition-colors"
      >
        Knowledge Base
      </Link>
      <Link
        href="/industry-solutions"
        className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-cyan-600 transition-colors"
      >
        Industry Solutions
      </Link>
    </div>
  );
};
