import { BrowserRouter, Routes, Route, useNavigate, useLocation, useParams } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import ServicesPage from './pages/ServicesPage'
import CategoryIntelligencePage from './pages/CategoryIntelligencePage'
import BeginnerProgramPage from './pages/BeginnerProgramPage'
import PricingPage from './pages/PricingPage'
import BlogPage from './pages/BlogPage'
import ContactPage from './pages/ContactPage'
import AboutPage from './pages/AboutPage'
import BlogAdminPage from './pages/BlogAdminPage'
import PrivacyPolicyPage from './pages/PrivacyPolicyPage'
import TermsPage from './pages/TermsPage'
import RefundPolicyPage from './pages/RefundPolicyPage'
import ShippingPolicyPage from './pages/ShippingPolicyPage'
import DisclaimerPage from './pages/DisclaimerPage'

const PAGE_ROUTES: Record<string, string> = {
  home: '/',
  services: '/services',
  category: '/catalog-intel',
  program: '/program',
  pricing: '/pricing',
  blog: '/blog',
  contact: '/contact',
  about: '/about',
  privacy: '/privacy-policy',
  terms: '/terms',
  refund: '/refund-policy',
  shipping: '/shipping-policy',
  disclaimer: '/disclaimer',
};

function pageIdFromPath(pathname: string): string {
  for (const [id, path] of Object.entries(PAGE_ROUTES)) {
    if (pathname === path) return id;
  }
  if (pathname.startsWith('/blog')) return 'blog';
  return 'home';
}

function BlogPostWrapper({ onNavigate }: { onNavigate: (page: string) => void }) {
  const { slug } = useParams<{ slug: string }>();
  return <BlogPage onNavigate={onNavigate} initialSlug={slug} />;
}

function AppShell() {
  const navigate = useNavigate();
  const location = useLocation();
  const activePage = pageIdFromPath(location.pathname);

  function handleNavigate(page: string) {
    const route = PAGE_ROUTES[page] ?? '/';
    navigate(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  const isAdminPage = location.pathname === '/blog-admin';
  const isBlogPost = location.pathname.startsWith('/blog/') && location.pathname !== '/blog';

  if (isAdminPage) {
    return (
      <Routes>
        <Route path="/blog-admin" element={<BlogAdminPage />} />
      </Routes>
    );
  }

  return (
    <>
      <Navbar activePage={activePage} onNavigate={handleNavigate} />
      <Routes>
        <Route path="/" element={<HomePage onNavigate={handleNavigate} />} />
        <Route path="/services" element={<ServicesPage onNavigate={handleNavigate} />} />
        <Route path="/catalog-intel" element={<CategoryIntelligencePage onNavigate={handleNavigate} />} />
        <Route path="/program" element={<BeginnerProgramPage onNavigate={handleNavigate} />} />
        <Route path="/pricing" element={<PricingPage onNavigate={handleNavigate} />} />
        <Route path="/blog" element={<BlogPage onNavigate={handleNavigate} />} />
        <Route path="/blog/:slug" element={<BlogPostWrapper onNavigate={handleNavigate} />} />
        <Route path="/contact" element={<ContactPage onNavigate={handleNavigate} />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/refund-policy" element={<RefundPolicyPage />} />
        <Route path="/shipping-policy" element={<ShippingPolicyPage />} />
        <Route path="/disclaimer" element={<DisclaimerPage />} />
      </Routes>
      {!isBlogPost && <Footer onNavigate={handleNavigate} />}
    </>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <AppShell />
      </BrowserRouter>
    </AuthProvider>
  );
}
