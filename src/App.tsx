import { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import BeginnerProgramPage from './pages/BeginnerProgramPage';
import PricingPage from './pages/PricingPage';
import ContactPage from './pages/ContactPage';

type Page = 'home' | 'services' | 'program' | 'pricing' | 'contact';

export default function App() {
  const [activePage, setActivePage] = useState<Page>('home');

  const renderPage = () => {
    switch (activePage) {
      case 'home': return <HomePage onNavigate={setActivePage} />;
      case 'services': return <ServicesPage onNavigate={setActivePage} />;
      case 'program': return <BeginnerProgramPage onNavigate={setActivePage} />;
      case 'pricing': return <PricingPage onNavigate={setActivePage} />;
      case 'contact': return <ContactPage onNavigate={setActivePage} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar activePage={activePage} onNavigate={setActivePage} />
      <main className="flex-1">
        {renderPage()}
      </main>
      <Footer onNavigate={setActivePage} />

      {/* Floating WhatsApp button */}
      <a
        href="https://wa.me/919100011053?text=Hi%2C%20I%20want%20to%20know%20more%20about%20GeM%20registration%20and%20services."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 hover:bg-green-400 text-white rounded-full flex items-center justify-center shadow-2xl hover:shadow-green-500/40 transition-all duration-200 hover:scale-110"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={26} />
      </a>
    </div>
  );
}
