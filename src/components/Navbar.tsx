import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

interface NavbarProps {
  activePage: string;
  onNavigate: (page: string) => void;
}

const navLinks = [
  { id: 'home', label: 'Home', href: '/' },
  { id: 'services', label: 'Services', href: '/services' },
  { id: 'category', label: 'Catalog Intel', href: '/catalog-intel' },
  { id: 'program', label: '30-Day Program', href: '/program' },
  { id: 'pricing', label: 'Pricing', href: '/pricing' },
  { id: 'contact', label: 'Contact', href: '/contact' },
];

export default function Navbar({ activePage, onNavigate }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, page: string) => {
    e.preventDefault();
    onNavigate(page);
    setMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-white/95 backdrop-blur-sm py-3'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <a href="/" onClick={(e) => handleNav(e, 'home')} className="flex items-center gap-2 group">
          <div className="text-left">
            <p className="font-black text-blue-800 text-base leading-none">Gem Portal Assist</p>
            <p className="text-xs text-gray-500 leading-none">Expert Consultancy</p>
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={(e) => handleNav(e, link.id)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                link.id === 'category'
                  ? activePage === 'category'
                    ? 'bg-emerald-600 text-white shadow-md shadow-emerald-200 ring-2 ring-emerald-400 ring-offset-1'
                    : 'bg-emerald-500 text-white font-bold hover:bg-emerald-600 shadow-sm shadow-emerald-200 ring-1 ring-emerald-400 animate-pulse'
                  : activePage === link.id
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-700 hover:bg-blue-50 hover:text-blue-700'
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="/contact"
            onClick={(e) => handleNav(e, 'contact')}
            className="bg-amber-500 hover:bg-amber-600 text-white rounded-lg transition-all duration-200 shadow-sm hover:shadow-md px-4 py-1.5 text-left"
          >
            <p className="text-sm font-bold leading-tight">Get Free Consultation</p>
            <span
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-1 text-xs font-semibold text-amber-100 hover:text-white transition-colors leading-tight mt-0.5"
            >
              <Phone size={11} />
              <a href="tel:8520082707" onClick={(e) => e.stopPropagation()}>8520082707</a>
            </span>
          </a>
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
            <a
              key={link.id}
              href={link.href}
              onClick={(e) => handleNav(e, link.id)}
              className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                link.id === 'category'
                  ? activePage === 'category'
                    ? 'bg-emerald-600 text-white font-bold'
                    : 'bg-emerald-500 text-white font-bold hover:bg-emerald-600'
                  : activePage === link.id
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-700 hover:bg-blue-50'
              }`}
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2 border-t border-gray-100 mt-1">
            <a
              href="/contact"
              onClick={(e) => handleNav(e, 'contact')}
              className="block w-full bg-amber-500 text-white rounded-lg px-4 py-2.5"
            >
              <p className="text-sm font-bold leading-tight">Get Free Consultation</p>
              <span className="flex items-center gap-1 text-xs font-semibold text-amber-100 leading-tight mt-0.5">
                <Phone size={11} />
                <a href="tel:8520082707" onClick={(e) => e.stopPropagation()}>8520082707</a>
              </span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
