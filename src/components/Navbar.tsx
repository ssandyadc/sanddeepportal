import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

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
        scrolled ? 'bg-white shadow-md py-2' : 'bg-white/95 backdrop-blur-sm py-3'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <button onClick={() => handleNav('home')} className="flex items-center gap-2 group">
          <div className="text-left">
            <p className="font-black text-blue-800 text-base leading-none">Gem Portal Assist</p>
            <p className="text-xs text-gray-500 leading-none">Expert Consultancy</p>
          </div>
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNav(link.id)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                activePage === link.id
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-700 hover:bg-blue-50 hover:text-blue-700'
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
            className="flex items-center gap-1.5 text-sm font-semibold text-blue-700 hover:text-blue-900 transition-colors"
          >
            <Phone size={15} />
            9100011053
          </a>
          <button
            onClick={() => handleNav('contact')}
            className="bg-amber-500 hover:bg-amber-600 text-white text-sm font-bold px-4 py-2 rounded-lg transition-all duration-200 shadow-sm hover:shadow-md"
          >
            Get Free Consultation
          </button>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100"
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
              className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                activePage === link.id
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-700 hover:bg-blue-50'
              }`}
            >
              {link.label}
            </button>
          ))}
          <div className="pt-2 border-t border-gray-100 mt-1 flex flex-col gap-2">
            <a
              href="tel:9100011053"
              className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-blue-700"
            >
              <Phone size={15} /> 9100011053
            </a>
            <button
              onClick={() => handleNav('contact')}
              className="bg-amber-500 text-white font-bold px-4 py-2.5 rounded-lg text-sm"
            >
              Get Free Consultation
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
