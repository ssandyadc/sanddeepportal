import { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import BeginnerProgramPage from './pages/BeginnerProgramPage';
import PricingPage from './pages/PricingPage';
import ContactPage from './pages/ContactPage';
import CategoryIntelligencePage from './pages/CategoryIntelligencePage';
import BlogPage from './pages/BlogPage';
import BlogAdminPage from './pages/BlogAdminPage';

type Page = 'home' | 'services' | 'program' | 'pricing' | 'contact' | 'category' | 'blog' | 'blog-admin';

function getPageFromPath(path: string): { page: Page; slug?: string } {
  if (path === '/') return { page: 'home' };
  if (path === '/services') return { page: 'services' };
  if (path === '/program') return { page: 'program' };
  if (path === '/pricing') return { page: 'pricing' };
  if (path === '/contact') return { page: 'contact' };
  if (path === '/catalog-intel') return { page: 'category' };
  if (path === '/blog/admin') return { page: 'blog-admin' };
  if (path === '/blog') return { page: 'blog' };
  if (path.startsWith('/blog/')) return { page: 'blog', slug: path.slice(6) };
  return { page: 'home' };
}

const pageToPath: Record<Page, string> = {
  home: '/',
  services: '/services',
  program: '/program',
  pricing: '/pricing',
  contact: '/contact',
  category: '/catalog-intel',
  blog: '/blog',
  'blog-admin': '/blog/admin',
};

export default function App() {
  const [activePage, setActivePage] = useState<Page>(() =>
    getPageFromPath(window.location.pathname).page
  );
  const [blogSlug, setBlogSlug] = useState<string | undefined>(() =>
    getPageFromPath(window.location.pathname).slug
  );

  useEffect(() => {
    const onPopState = () => {
      const { page, slug } = getPageFromPath(window.location.pathname);
      setActivePage(page);
      setBlogSlug(slug);
    };
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  const navigate = (page: string) => {
    const p = page as Page;
    const path = pageToPath[p] ?? '/';
    window.history.pushState(null, '', path);
    setActivePage(p);
    setBlogSlug(undefined);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const hideBlogChrome = activePage === 'blog-admin';

  const renderPage = () => {
    switch (activePage) {
      case 'home': return <HomePage onNavigate={navigate} />;
      case 'services': return <ServicesPage onNavigate={navigate} />;
      case 'program': return <BeginnerProgramPage onNavigate={navigate} />;
      case 'pricing': return <PricingPage onNavigate={navigate} />;
      case 'contact': return <ContactPage onNavigate={navigate} />;
      case 'category': return <CategoryIntelligencePage onNavigate={navigate} />;
      case 'blog': return <BlogPage onNavigate={navigate} initialSlug={blogSlug} />;
      case 'blog-admin': return <BlogAdminPage />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar activePage={activePage} onNavigate={navigate} />
      <main className="flex-1">
        {renderPage()}
      </main>
      {!hideBlogChrome && <Footer onNavigate={navigate} />}

      <a
        href="https://wa.me/918520082707?text=Hi%2C%20I%20want%20to%20know%20more%20about%20GeM%20registration%20and%20services."
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
