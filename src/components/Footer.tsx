import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

const quickLinks = [
  { id: 'home', label: 'Home', href: '/' },
  { id: 'services', label: 'Our Services', href: '/services' },
  { id: 'program', label: '30-Day Program', href: '/program' },
  { id: 'pricing', label: 'Pricing Plans', href: '/pricing' },
  { id: 'blog', label: 'Blog', href: '/blog' },
  { id: 'contact', label: 'Contact Us', href: '/contact' },
  { id: 'about', label: 'About Us', href: '/about' },
];

const legalLinks = [
  { id: 'privacy', label: 'Privacy Policy', href: '/privacy-policy' },
  { id: 'terms', label: 'Terms & Conditions', href: '/terms' },
  { id: 'refund', label: 'Refund Policy', href: '/refund-policy' },
  { id: 'shipping', label: 'Shipping & Delivery', href: '/shipping-policy' },
  { id: 'disclaimer', label: 'Disclaimer', href: '/disclaimer' },
];

export default function Footer({ onNavigate }: FooterProps) {
  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, page: string) => {
    e.preventDefault();
    onNavigate(page);
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-6xl mx-auto px-4 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div>
                <p className="font-black text-white text-base leading-none">Gem Portal Assist</p>
                <p className="text-xs text-gray-400 leading-none">Expert Consultancy</p>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              End-to-end GeM Portal support — from registration to getting your first government order in 30 days.
            </p>
            <div className="mt-4 flex gap-3">
              <a
                href="https://wa.me/918520082707"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-green-600 hover:bg-green-500 rounded-lg flex items-center justify-center transition-colors"
              >
                <MessageCircle size={16} className="text-white" />
              </a>
              <a
                href="tel:8520082707"
                className="w-9 h-9 bg-blue-600 hover:bg-blue-500 rounded-lg flex items-center justify-center transition-colors"
              >
                <Phone size={16} className="text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNav(e, link.id)}
                    className="text-sm text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-bold mb-4">Legal</h4>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNav(e, link.id)}
                    className="text-sm text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <Phone size={15} className="mt-0.5 text-blue-400 shrink-0" />
                <a href="tel:8520082707" className="text-sm text-gray-400 hover:text-white transition-colors">
                  +91 8520082707
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MessageCircle size={15} className="mt-0.5 text-green-400 shrink-0" />
                <a
                  href="https://wa.me/918520082707"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  WhatsApp Us
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail size={15} className="mt-0.5 text-blue-400 shrink-0" />
                <a href="mailto:sales@gemportalassist.in" className="text-sm text-gray-400 hover:text-white transition-colors break-all">
                  sales@gemportalassist.in
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin size={15} className="mt-0.5 text-red-400 shrink-0" />
                <span className="text-sm text-gray-400">
                  Jaya Enclave, New Bowenpally,<br />Hyderabad
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 py-5">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} Gem Portal Assist. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            {legalLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleNav(e, link.id)}
                className="text-xs text-gray-500 hover:text-gray-300 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
