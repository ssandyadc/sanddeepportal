import {
  CheckCircle,
  ArrowRight,
  Star,
  Phone,
  MessageCircle,
  Users,
  TrendingUp,
  Shield,
  Award,
  Clock,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';
import { useState } from 'react';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

const stats = [
  { value: '500+', label: 'Sellers Registered' },
  { value: '30', label: 'Days to First Order' },
  { value: '95%', label: 'Success Rate' },
  { value: '8+', label: 'Years Experience' },
];

const audiences = [
  {
    icon: Users,
    title: 'Graduates & Housewives',
    desc: 'Start a profitable home-based business with zero prior experience. We guide you step by step.',
    color: 'bg-blue-50 border-blue-100',
    iconBg: 'bg-blue-100 text-blue-600',
  },
  {
    icon: TrendingUp,
    title: 'MSMEs & Traders',
    desc: 'Scale your existing business by tapping into lakhs of crores worth of government procurement.',
    color: 'bg-green-50 border-green-100',
    iconBg: 'bg-green-100 text-green-600',
  },
  {
    icon: Award,
    title: 'Manufacturers',
    desc: 'Get OEM approval, list your products, and start winning government tenders directly.',
    color: 'bg-amber-50 border-amber-100',
    iconBg: 'bg-amber-100 text-amber-600',
  },
  {
    icon: Shield,
    title: 'Service Providers',
    desc: 'Register your service category on GeM and bid for government contracts with our expert support.',
    color: 'bg-red-50 border-red-100',
    iconBg: 'bg-red-100 text-red-600',
  },
];

const problems = [
  'Confused about GeM registration process?',
  "Don't know which products/services to list?",
  'Struggling with compliance documents?',
  'Never participated in a government bid before?',
  'Worried about getting your first order?',
];

const testimonials = [
  {
    name: 'Priya Sharma',
    role: 'Housewife, Hyderabad',
    text: 'I had zero business experience. GemPro5IT registered me, listed 10 products, and I got my first government order within 28 days! Life-changing experience.',
    rating: 5,
    avatar: 'PS',
  },
  {
    name: 'Ramesh Kumar',
    role: 'Trader, Secunderabad',
    text: 'Was hesitant about government portals. The team handled everything — from registration to my first bid win. Highly professional and supportive.',
    rating: 5,
    avatar: 'RK',
  },
  {
    name: 'Anitha Reddy',
    role: 'MSME Owner, Hyderabad',
    text: 'Got OEM approval and 3 orders in the first month! The expertise and hand-holding they provide is unmatched. Worth every rupee invested.',
    rating: 5,
    avatar: 'AR',
  },
  {
    name: 'Mohammed Farhan',
    role: 'Graduate, Beginner',
    text: 'Started with no idea about GeM. After joining their 30-day program, I am now an active seller with regular government orders. Excellent guidance!',
    rating: 5,
    avatar: 'MF',
  },
];

const faqs = [
  {
    q: 'What is GeM Portal?',
    a: 'GeM (Government e-Marketplace) is the official online platform of the Government of India for procurement of goods and services. Sellers can register and sell directly to all government departments, ministries, and PSUs.',
  },
  {
    q: 'Do I need any prior business experience to register on GeM?',
    a: 'No! GeM is open to individuals, sole proprietors, MSMEs, companies, and even housewives with basic business registration. We help complete beginners get started from scratch.',
  },
  {
    q: 'How long does registration take?',
    a: 'With our support, GeM seller registration is completed within 3-5 working days, and the full setup including catalog and first bid is done within 30 days.',
  },
  {
    q: 'What documents do I need?',
    a: 'Basic documents include Aadhaar, PAN, Bank details, and business registration (UDYAM/GST). We guide you on every document and help prepare them correctly.',
  },
  {
    q: 'Can I sell services on GeM, not just products?',
    a: 'Yes! GeM has a large services section. You can offer IT services, manpower, consulting, printing, transport, and many more categories. We activate the right service categories for you.',
  },
  {
    q: 'Is there a guarantee of getting orders?',
    a: 'We guarantee to set you up with the right catalog, compliance, and bid participation strategy to maximize your chances. Most clients get their first order within 30 days of our program completion.',
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-4 text-left bg-white hover:bg-gray-50 transition-colors"
      >
        <span className="font-semibold text-gray-800 text-sm md:text-base">{q}</span>
        {open ? (
          <ChevronUp size={18} className="text-blue-600 shrink-0 ml-3" />
        ) : (
          <ChevronDown size={18} className="text-gray-400 shrink-0 ml-3" />
        )}
      </button>
      {open && (
        <div className="px-5 pb-4 text-sm text-gray-600 leading-relaxed border-t border-gray-100 bg-gray-50">
          <p className="pt-3">{a}</p>
        </div>
      )}
    </div>
  );
}

export default function HomePage({ onNavigate }: HomePageProps) {
  const handleNav = (page: string) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div>
      {/* HERO */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-72 h-72 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-400 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-6xl mx-auto px-4 pt-28 pb-20 md:pt-36 md:pb-28">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-amber-400/20 border border-amber-400/40 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" />
              <span className="text-amber-300 text-sm font-medium">Trusted by 500+ GeM Sellers Across India</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black leading-tight mb-5">
              Start Your GeM Seller Journey
              <span className="text-amber-400 block mt-1">in 30 Days</span>
            </h1>
            <p className="text-lg md:text-xl text-blue-100 leading-relaxed mb-8 max-w-2xl">
              Complete support from registration to your <strong className="text-white">first government order</strong>.
              We handle everything — so you can focus on growing your business.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => handleNav('contact')}
                className="bg-amber-400 hover:bg-amber-300 text-blue-900 font-black px-7 py-3.5 rounded-xl text-base transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center gap-2"
              >
                Start Selling on GeM Today
                <ArrowRight size={18} />
              </button>
              <a
                href="https://wa.me/919100011053?text=Hi%2C%20I%20want%20to%20know%20more%20about%20GeM%20registration"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-400 text-white font-bold px-7 py-3.5 rounded-xl text-base transition-all duration-200 shadow-lg flex items-center gap-2"
              >
                <MessageCircle size={18} />
                WhatsApp Us
              </a>
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              {['Free Consultation', 'No Hidden Charges', '30-Day Guarantee', 'Expert Support'].map((item) => (
                <div key={item} className="flex items-center gap-1.5">
                  <CheckCircle size={16} className="text-green-400" />
                  <span className="text-sm text-blue-100">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="relative bg-blue-950/50 border-t border-blue-600/30">
          <div className="max-w-6xl mx-auto px-4 py-6 grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-2xl md:text-3xl font-black text-amber-400">{stat.value}</p>
                <p className="text-xs md:text-sm text-blue-200">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO WE HELP */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-blue-600 font-bold text-sm uppercase tracking-widest">Who We Help</span>
            <h2 className="text-2xl md:text-4xl font-black text-gray-900 mt-2">
              GeM Is for Everyone — We Make It Easy
            </h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto">
              Whether you are a complete beginner or an established business, we have the right solution for you.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {audiences.map((a) => (
              <div key={a.title} className={`border rounded-2xl p-6 ${a.color} transition-all duration-200 hover:-translate-y-1 hover:shadow-md`}>
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${a.iconBg}`}>
                  <a.icon size={22} />
                </div>
                <h3 className="font-bold text-gray-800 mb-2">{a.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROBLEM-SOLUTION */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-red-500 font-bold text-sm uppercase tracking-widest">The Challenge</span>
              <h2 className="text-2xl md:text-4xl font-black text-gray-900 mt-2 mb-6">
                GeM Is Profitable — But Complex Without Guidance
              </h2>
              <div className="space-y-3">
                {problems.map((p) => (
                  <div key={p} className="flex items-start gap-3 p-3 bg-red-50 border border-red-100 rounded-lg">
                    <span className="w-5 h-5 rounded-full bg-red-100 text-red-500 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">!</span>
                    <span className="text-sm text-gray-700">{p}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <span className="text-green-600 font-bold text-sm uppercase tracking-widest">Our Solution</span>
              <h2 className="text-2xl md:text-4xl font-black text-gray-900 mt-2 mb-6">
                We Handle Everything — You Just Sell
              </h2>
              <div className="space-y-4">
                {[
                  { step: '01', title: 'Complete Registration', desc: 'We do your GeM registration, brand approval, and vendor assessment.' },
                  { step: '02', title: 'Product Catalog Setup', desc: 'Professional product listing with optimized pricing strategy.' },
                  { step: '03', title: 'Compliance & Documents', desc: 'All certificates, undertakings, and authorizations handled.' },
                  { step: '04', title: 'Bid & Win Orders', desc: 'Training on L1 strategy, live bid participation, reverse auction support.' },
                ].map((item) => (
                  <div key={item.step} className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-xl bg-blue-600 text-white font-black text-sm flex items-center justify-center shrink-0">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800">{item.title}</h4>
                      <p className="text-sm text-gray-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <button
                onClick={() => handleNav('program')}
                className="mt-8 bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3 rounded-xl flex items-center gap-2 transition-colors"
              >
                See Our 30-Day Timeline <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* PROMISE BANNER */}
      <section className="py-12 bg-gradient-to-r from-amber-400 to-amber-500">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Clock size={24} className="text-amber-900" />
            <h2 className="text-2xl md:text-3xl font-black text-amber-900">
              Our 30-Day Promise
            </h2>
          </div>
          <p className="text-amber-800 text-base md:text-lg font-medium max-w-2xl mx-auto">
            From Day 1 of registration to getting your first government order — we commit to completing the full process in <strong>30 days or less</strong>.
          </p>
          <button
            onClick={() => handleNav('program')}
            className="mt-5 bg-amber-900 hover:bg-amber-800 text-white font-bold px-6 py-3 rounded-xl inline-flex items-center gap-2 transition-colors"
          >
            See the Full Timeline <ArrowRight size={16} />
          </button>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-blue-600 font-bold text-sm uppercase tracking-widest">What We Offer</span>
            <h2 className="text-2xl md:text-4xl font-black text-gray-900 mt-2">
              End-to-End GeM Services
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Registration & Setup',
                color: 'border-t-blue-600',
                items: ['GeM Seller Registration', 'Brand Approval Support', 'OEM Panel Setup', 'Vendor Assessment'],
              },
              {
                title: 'Catalog & Compliance',
                color: 'border-t-green-500',
                items: ['Product Listing', 'Catalog Optimization', 'Document Preparation', 'Authorization Setup'],
              },
              {
                title: 'Bid & Growth Support',
                color: 'border-t-amber-500',
                items: ['Bid Participation Training', 'L1 Price Strategy', 'Order Execution Help', 'Seller Rating Growth'],
              },
            ].map((cat) => (
              <div key={cat.title} className={`border-t-4 ${cat.color} border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow`}>
                <h3 className="font-black text-gray-800 text-lg mb-4">{cat.title}</h3>
                <ul className="space-y-2.5">
                  {cat.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle size={15} className="text-green-500 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <button
              onClick={() => handleNav('services')}
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-bold px-6 py-3 rounded-xl transition-all duration-200 inline-flex items-center gap-2"
            >
              View All Services <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-blue-600 font-bold text-sm uppercase tracking-widest">Success Stories</span>
            <h2 className="text-2xl md:text-4xl font-black text-gray-900 mt-2">
              Real Sellers, Real Results
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} size={16} className="text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <p className="text-gray-700 text-sm leading-relaxed mb-5">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white font-bold text-sm">
                    {t.avatar}
                  </div>
                  <div>
                    <p className="font-bold text-gray-800 text-sm">{t.name}</p>
                    <p className="text-xs text-gray-500">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-10">
            <span className="text-blue-600 font-bold text-sm uppercase tracking-widest">FAQs</span>
            <h2 className="text-2xl md:text-4xl font-black text-gray-900 mt-2">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="space-y-3">
            {faqs.map((faq) => (
              <FAQItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-4xl font-black mb-4">
            Ready to Start Selling on GeM?
          </h2>
          <p className="text-blue-200 mb-8 text-lg">
            Book a free consultation today. No commitment, no pressure — just expert guidance.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => handleNav('contact')}
              className="bg-amber-400 hover:bg-amber-300 text-blue-900 font-black px-7 py-3.5 rounded-xl transition-all duration-200 flex items-center gap-2"
            >
              Get Free Consultation <ArrowRight size={18} />
            </button>
            <a
              href="https://wa.me/919100011053?text=Hi%2C%20I%20want%20to%20start%20selling%20on%20GeM"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-400 text-white font-bold px-7 py-3.5 rounded-xl transition-all duration-200 flex items-center gap-2"
            >
              <MessageCircle size={18} /> WhatsApp Now
            </a>
            <a
              href="tel:9100011053"
              className="border-2 border-white/40 hover:border-white text-white font-bold px-7 py-3.5 rounded-xl transition-all duration-200 flex items-center gap-2"
            >
              <Phone size={18} /> Call Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
