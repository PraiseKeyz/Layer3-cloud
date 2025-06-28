import Link from 'next/link';
import Image from 'next/image';
import footerLogo from '@/assets/footer-logo.png'

export default function Footer() {
  return (
    <footer className="bg-[#f4f6fc] text-gray-800 pt-16 pb-8 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Logo & Contact */}
        <div className="flex flex-col gap-4">
          {/* Logo */}
          <div className="mb-2">
            {/* Replace with your logo image if available */}
            <Image src={footerLogo} alt="Layer3Cloud Logo" width={160} height={40} className="mb-2" />
          </div>
          <div className="text-sm font-medium mb-2">#1 Leading Cloud Provider in Nigeria</div>
          <div className="flex items-center gap-2 text-sm mb-1">
            {/* Phone icon */}
            <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h2.28a2 2 0 011.94 1.515l.3 1.2a2 2 0 01-.45 1.95l-.7.7a16.001 16.001 0 006.36 6.36l.7-.7a2 2 0 011.95-.45l1.2.3A2 2 0 0121 18.72V21a2 2 0 01-2 2h-1C7.163 23 1 16.837 1 9V8a2 2 0 012-2z" /></svg>
            +234 (0) 908 529 3734
          </div>
          <div className="flex items-center gap-2 text-sm">
            {/* Email icon */}
            <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M16 12l-4 4-4-4m8-4H4a2 2 0 00-2 2v8a2 2 0 002 2h16a2 2 0 002-2v-8a2 2 0 00-2-2z" /></svg>
            help@layer3.com.ng
          </div>
        </div>
        {/* Products */}
        <div>
          <div className="font-bold mb-4">Products</div>
          <ul className="space-y-2 text-sm">
            <li><Link href="#" className="hover:underline">Virtual Data Center</Link></li>
            <li><Link href="#" className="hover:underline">Virtual Server</Link></li>
            <li><Link href="#" className="hover:underline">Backup as a Service</Link></li>
            <li><Link href="#" className="hover:underline">Object Storage</Link></li>
            <li><Link href="#" className="hover:underline">Disaster Recovery as a Service</Link></li>
            <li><Link href="#" className="hover:underline">Kubernetes Services</Link></li>
            <li><Link href="#" className="hover:underline">Platform as a Service</Link></li>
          </ul>
        </div>
        {/* Resources */}
        <div>
          <div className="font-bold mb-4">Resources</div>
          <ul className="space-y-2 text-sm">
            <li><Link href="#" className="hover:underline">Pricing</Link></li>
            <li><Link href="#" className="hover:underline">Pricing Calculator</Link></li>
            <li><Link href="#" className="hover:underline">Developer's Document</Link></li>
            <li><Link href="#" className="hover:underline">FAQs</Link></li>
            <li><Link href="#" className="hover:underline">Knowledge Base</Link></li>
            <li><Link href="#" className="hover:underline">Industry Solutions</Link></li>
          </ul>
        </div>
        {/* Company */}
        <div>
          <div className="font-bold mb-4">Company</div>
          <ul className="space-y-2 text-sm">
            <li><Link href="#" className="hover:underline">About Us</Link></li>
            <li><Link href="#" className="hover:underline">Data Center</Link></li>
            <li><Link href="#" className="hover:underline">Blogs</Link></li>
            <li><Link href="#" className="hover:underline">Careers</Link></li>
            <li><Link href="#" className="hover:underline">Partner Programs</Link></li>
            <li><Link href="#" className="hover:underline">Customer Support</Link></li>
            <li><Link href="#" className="hover:underline">Client Testimonials</Link></li>
            <li><Link href="#" className="hover:underline">Contact Us</Link></li>
          </ul>
        </div>
      </div>
      {/* Divider */}
      <div className="border-t border-gray-200 my-8"></div>
      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-xs text-gray-500">Layer3cloud 2025. All right reserved</div>
        {/* Social Icons */}
        <div className="flex gap-4 text-red-600 text-xl">
          <a href="#" aria-label="Facebook"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0"/></svg></a>
          <a href="#" aria-label="Instagram"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.241 1.308 3.608.058 1.266.069 1.646.069 4.85s-.011 3.584-.069 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.241 1.246-3.608 1.308-1.266.058-1.646.069-4.85.069s-3.584-.011-4.85-.069c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.241-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608C4.515 2.497 5.782 2.225 7.148 2.163 8.414 2.105 8.794 2.094 12 2.094m0-2.163C8.741 0 8.332.012 7.052.07 5.771.128 4.635.4 3.661 1.374c-.974.974-1.246 2.241-1.308 3.608C2.175 8.414 2.163 8.794 2.163 12c0 3.206.012 3.586.07 4.85.062 1.366.334 2.633 1.308 3.608.974.974 2.241 1.246 3.608 1.308 1.266.058 1.646.069 4.85.069s3.584-.011 4.85-.069c1.366-.062 2.633-.334 3.608-1.308.974-.974 1.246-2.241 1.308-3.608.058-1.266.069-1.646.069-4.85s-.011-3.584-.069-4.85c-.062-1.366-.334-2.633-1.308-3.608-.974-.974-2.241-1.246-3.608-1.308C15.647 2.175 15.267 2.163 12 2.163z"/><path d="M12 5.838A6.162 6.162 0 0 0 5.838 12 6.162 6.162 0 0 0 12 18.162 6.162 6.162 0 0 0 18.162 12 6.162 6.162 0 0 0 12 5.838zm0 10.324A4.162 4.162 0 1 1 16.162 12 4.162 4.162 0 0 1 12 16.162z"/><circle cx="18.406" cy="5.594" r="1.44"/></svg></a>
          <a href="#" aria-label="LinkedIn"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.841-1.563 3.039 0 3.602 2.002 3.602 4.604v5.592zm0 0"/></svg></a>
          <a href="#" aria-label="YouTube"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a2.994 2.994 0 0 0-2.112-2.112C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.386.574a2.994 2.994 0 0 0-2.112 2.112C0 8.072 0 12 0 12s0 3.928.502 5.814a2.994 2.994 0 0 0 2.112 2.112C4.5 20.5 12 20.5 12 20.5s7.5 0 9.386-.574a2.994 2.994 0 0 0 2.112-2.112C24 15.928 24 12 24 12s0-3.928-.502-5.814zM9.545 15.568V8.432l6.545 3.568-6.545 3.568z"/></svg></a>
          <a href="#" aria-label="X"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.53 2.47a.75.75 0 0 1 1.06 1.06l-5.72 5.72 5.72 5.72a.75.75 0 0 1-1.06 1.06l-5.72-5.72-5.72 5.72a.75.75 0 0 1-1.06-1.06l5.72-5.72-5.72-5.72A.75.75 0 0 1 6.79 2.47l5.72 5.72 5.72-5.72z"/></svg></a>
        </div>
        {/* Policy Links */}
        <div className="flex gap-4 text-xs text-gray-500">
          <Link href="#" className="hover:underline">Privacy Policy</Link>
          <span className="hidden md:inline-block">|</span>
          <Link href="#" className="hover:underline">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
} 