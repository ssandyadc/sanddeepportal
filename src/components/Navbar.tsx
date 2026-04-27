import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import logo from '../assets/ChatGPT_Image_Apr_28,_2026,_01_06_40_AM.png';

interface NavbarProps {
  activePage: string;
  onNavigate: (page: string) => void;
}

const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'services', label: 'Services' },
  { id: 'program', label: '30-Day Program' },
  { id: 'pricing', label: 'Pricing' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar({ activePage, onNavigate }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNav = (page: string) => {
    onNavigate(page);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-1' : 'bg-white/97 backdrop-blur-sm py-2'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <button onClick={() => handleNav('home')} className="flex items-center gap-2 group">
          <img
            src={logo}
            alt="GemPro5IT Logo"
            className="h-12 w-auto object-contain"
          />
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNav(link.id)}
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                activePage === link.id
                  ? 'bg-[#1a3a8f] text-white'
                  : 'text-[#1a3a8f] hover:bg-blue-50 hover:text-[#1a3a8f]'
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="tel:9100011053"
            className="flex items-center gap-1.5 text-sm font-bold text-[#1a3a8f] hover:text-[#2a7a2a] transition-colors"
          >
            <Phone size={15} />
            9100011053
          </a>
          <button
            onClick={() => handleNav('contact')}
            className="bg-[#2a7a2a] hover:bg-[#1f5c1f] text-white text-sm font-bold px-4 py-2 rounded-lg transition-all duration-200 shadow-sm hover:shadow-md"
          >
            Get Free Consultation
          </button>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden p-2 rounded-lg text-[#1a3a8f] hover:bg-gray-100"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg px-4 py-3 flex flex-col gap-1">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNav(link.id)}
              className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-semibold transition-colors ${
                activePage === link.id
                  ? 'bg-[#1a3a8f] text-white'
                  : 'text-[#1a3a8f] hover:bg-blue-50'
              }`}
            >
              {link.label}
            </button>
          ))}
          <div className="pt-2 border-t border-gray-100 mt-1 flex flex-col gap-2">
            <a
              href="tel:9100011053"
              className="flex items-center gap-2 px-4 py-2 text-sm font-bold text-[#1a3a8f]"
            >
              <Phone size={15} /> 9100011053
            </a>
            <button
              onClick={() => handleNav('contact')}
              className="bg-[#2a7a2a] text-white font-bold px-4 py-2.5 rounded-lg text-sm"
            >
              Get Free Consultation
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
