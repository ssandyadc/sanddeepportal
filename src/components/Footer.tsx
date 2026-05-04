import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const handleNav = (page: string) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
                href="https://wa.me/919100011053"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-green-600 hover:bg-green-500 rounded-lg flex items-center justify-center transition-colors"
              >
                <MessageCircle size={16} className="text-white" />
              </a>
              <a
                href="tel:9100011053"
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
              {[
                { id: 'home', label: 'Home' },
                { id: 'services', label: 'Our Services' },
                { id: 'program', label: '30-Day Program' },
                { id: 'pricing', label: 'Pricing Plans' },
                { id: 'contact', label: 'Contact Us' },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => handleNav(link.id)}
                    className="text-sm text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>GeM Seller Registration</li>
              <li>Catalog & Product Listing</li>
              <li>Bid Participation Support</li>
              <li>Compliance & Documents</li>
              <li>OEM Panel Setup</li>
              <li>Account Suspension Help</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <Phone size={15} className="mt-0.5 text-blue-400 shrink-0" />
                <a href="tel:9100011053" className="text-sm text-gray-400 hover:text-white transition-colors">
                  9100011053
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MessageCircle size={15} className="mt-0.5 text-green-400 shrink-0" />
                <a
                  href="https://wa.me/919100011053"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  WhatsApp Us
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail size={15} className="mt-0.5 text-blue-400 shrink-0" />
                <a href="mailto:sanuraproducts@gmail.com" className="text-sm text-gray-400 hover:text-white transition-colors break-all">
                  sanuraproducts@gmail.com
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
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} Gem Portal Assist. All rights reserved.
          </p>
          <p className="text-xs text-gray-500">
            Domain: <span className="text-gray-400">GemPortalAssist.com</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
