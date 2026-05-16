import { CheckCircle, ArrowRight, MessageCircle, Phone, Star, BarChart2, ExternalLink } from 'lucide-react';

interface PricingPageProps {
  onNavigate: (page: string) => void;
}

const plans = [
  {
    id: 'basic',
    name: 'Basic Plan',
    tagline: 'Just Getting Started',
    badge: null,
    price: '₹2,500',
    priceNote: 'Offer price (MRP ₹5,000)',
    color: 'border-gray-200',
    headerBg: 'bg-gray-50',
    buttonBg: 'bg-blue-600 hover:bg-blue-700',
    badgeBg: null,
    features: [
      'GeM Seller Registration',
      'Aadhaar & PAN verification',
      'Bank account linking',
      'Basic profile completion',
      'Email support for 7 days',
    ],
    notIncluded: [
      'Product listing',
      'Bid support',
      'Compliance documents',
      'Dedicated manager',
    ],
    ideal: 'Ideal for individuals who want basic registration only.',
  },
  {
    id: 'growth',
    name: 'Growth Plan',
    tagline: 'List & Get Visible',
    badge: null,
    price: '₹7,500',
    priceNote: 'Offer price (MRP ₹10,000)',
    color: 'border-blue-200',
    headerBg: 'bg-blue-50',
    buttonBg: 'bg-blue-600 hover:bg-blue-700',
    badgeBg: null,
    features: [
      'Everything in Basic',
      'Product catalog listing (5 products)',
      'Catalog optimization',
      'Category selection guidance',
      'Basic pricing strategy',
      'Compliance document checklist',
      'WhatsApp support for 15 days',
      'Additional 5 products @ ₹2,500',
    ],
    notIncluded: [
      'Bid participation',
      'Dedicated manager',
      'End-to-end execution',
    ],
    ideal: 'Ideal for sellers who want to get listed and start receiving direct orders.',
  },
  {
    id: 'professional',
    name: 'Professional Plan',
    tagline: 'Register + Bid + Win',
    badge: 'Popular',
    price: '₹15,000',
    priceNote: 'Offer price (MRP ₹20,000)',
    color: 'border-amber-400',
    headerBg: 'bg-gradient-to-br from-amber-50 to-amber-100',
    buttonBg: 'bg-amber-500 hover:bg-amber-600',
    badgeBg: 'bg-amber-400 text-white',
    features: [
      'Everything in Growth',
      'Product listing (up to 20 products)',
      'Full compliance & document setup',
      'Bid participation training',
      'L1 price strategy',
      'WhatsApp support for 45 days',
      'Weekly review calls',
    ],
    notIncluded: [
      'First order guarantee',
      'Dedicated account manager',
    ],
    ideal: 'Ideal for MSMEs and traders who want complete setup and bid support.',
  },
  {
    id: 'premium',
    name: 'Premium Plan',
    tagline: 'Complete Execution Until First Order',
    badge: 'Best Value',
    price: 'Get Quote',
    priceNote: 'Call for exact pricing',
    color: 'border-blue-600',
    headerBg: 'bg-gradient-to-br from-blue-700 to-blue-600',
    buttonBg: 'bg-white hover:bg-blue-50',
    badgeBg: 'bg-green-500 text-white',
    features: [
      'Everything in Professional',
      'Dedicated relationship manager',
      'Vendor assessment completion',
      'OEM panel setup',
      'Unlimited catalog updates',
      'Daily bid monitoring & participation',
      'Order execution guidance',
      'Payment tracking support',
      'Seller rating optimization',
      '60 days WhatsApp + call support',
      'First order targeting program',
    ],
    notIncluded: [],
    ideal: 'Ideal for beginners and those who want guaranteed results with full hand-holding.',
    isHighlight: true,
  },
];

const addons = [
  { name: 'Brand Approval Fast-Track', desc: 'Expedited brand registration and approval on GeM' },
  { name: 'Account Suspension Resolution', desc: 'Emergency support for suspended GeM accounts' },
  { name: 'GeM Contract Troubleshooting', desc: 'Resolution of contract disputes and issues' },
  { name: 'Service Category Activation', desc: 'Activation of new service categories on your account' },
  { name: 'Additional Product Listings', desc: 'Listing of additional products beyond plan limit' },
  { name: 'Advanced OEM Approval Support', desc: 'Full OEM certification fast-track process' },
];

export default function PricingPage({ onNavigate }: PricingPageProps) {
  const handleNav = (page: string) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white pt-28 pb-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <span className="inline-block bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-sm font-medium text-blue-200 mb-4">
            Transparent Pricing
          </span>
          <h1 className="text-3xl md:text-5xl font-black mb-4">
            Simple Plans, Real Results
          </h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto mb-6">
            Choose the plan that fits your needs. All plans include expert GeM consultancy from our experienced team.
          </p>
          <p className="text-amber-300 font-semibold">
            Limited-time offer prices available now. Contact us to get started today.
          </p>
        </div>
      </section>

      {/* Catalog Intelligence Product */}
      <section className="py-14 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-8">
            <span className="inline-block bg-emerald-100 text-emerald-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">Digital Product — Instant Delivery</span>
            <h2 className="text-2xl md:text-3xl font-black text-gray-900 mt-3 mb-2">GeM Category Intelligence Report</h2>
            <p className="text-gray-500 max-w-xl mx-auto">Data-driven category analysis to identify the most profitable products to list on GeM Portal.</p>
          </div>

          <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-blue-900 rounded-3xl overflow-hidden shadow-2xl">
            <div className="grid md:grid-cols-2">
              <div className="p-8 md:p-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-amber-400/20 border border-amber-400/30 rounded-xl flex items-center justify-center">
                    <BarChart2 size={22} className="text-amber-400" />
                  </div>
                  <div>
                    <p className="text-white font-black text-lg leading-tight">Category Intelligence</p>
                    <p className="text-blue-300 text-xs">Customised for your business</p>
                  </div>
                </div>
                <ul className="space-y-3 mb-6">
                  {[
                    'Q1–Q4 category classification for your niche',
                    'Shortlisted high-opportunity categories',
                    'Demand vs supply gap analysis',
                    'Product suggestions within each category',
                    'GeM-ready catalog strategy',
                    'Competition level mapping',
                  ].map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-blue-100">
                      <CheckCircle size={15} className="text-emerald-400 shrink-0 mt-0.5" />
                      {f}
                    </li>
                  ))}
                </ul>
                <p className="text-blue-400 text-xs">Delivered via email / WhatsApp within 24 hours of payment</p>
              </div>

              <div className="bg-white/5 border-t md:border-t-0 md:border-l border-white/10 p-8 md:p-10 flex flex-col items-center justify-center text-center">
                <p className="text-blue-300 text-sm font-semibold uppercase tracking-widest mb-2">One-Time Payment</p>
                <span className="text-5xl font-black text-amber-400">₹3,500</span>
                <p className="text-blue-400 text-xs mt-1 mb-8 line-through">MRP ₹5,000</p>

                <a
                  href="https://superprofile.bio/vp/gem-category-intelligence-report"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-amber-400 hover:bg-amber-300 text-slate-900 font-black px-6 py-4 rounded-xl text-base transition-all duration-200 shadow-lg hover:shadow-amber-400/30 hover:scale-105 mb-3"
                >
                  Buy Now <ExternalLink size={16} />
                </a>
                <p className="text-blue-400 text-xs mb-6">Secure payment via SuperProfile</p>

                <a
                  href="https://wa.me/918520082707?text=Hi%2C%20I%20want%20to%20know%20more%20about%20the%20Category%20Intelligence%20Report"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-green-500/20 hover:bg-green-500/30 border border-green-500/40 text-green-300 font-semibold px-4 py-2 rounded-lg text-xs transition-colors"
                >
                  <MessageCircle size={14} /> Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing cards */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {plans.map((plan) => (
              <div
                key={plan.id}
                className={`relative border-2 ${plan.color} rounded-2xl overflow-hidden flex flex-col ${
                  plan.isHighlight ? 'shadow-2xl scale-[1.02]' : 'shadow-sm'
                } bg-white transition-transform duration-200 hover:scale-[1.02]`}
              >
                {plan.badge && (
                  <div className={`absolute top-4 right-4 ${plan.badgeBg} text-xs font-black px-3 py-1 rounded-full z-10`}>
                    {plan.badge}
                  </div>
                )}

                {/* Header */}
                <div className={`${plan.headerBg} px-5 py-5 ${plan.isHighlight ? 'text-white' : ''}`}>
                  <p className={`text-xs font-bold uppercase tracking-widest mb-1 ${plan.isHighlight ? 'text-blue-200' : 'text-gray-400'}`}>
                    {plan.tagline}
                  </p>
                  <h3 className={`text-xl font-black ${plan.isHighlight ? 'text-white' : 'text-gray-800'}`}>
                    {plan.name}
                  </h3>
                  <div className="mt-3">
                    <span className={`text-2xl font-black ${plan.isHighlight ? 'text-amber-300' : 'text-blue-700'}`}>
                      {plan.price}
                    </span>
                    <p className={`text-xs mt-0.5 ${plan.isHighlight ? 'text-blue-200' : 'text-gray-400'}`}>
                      {plan.priceNote}
                    </p>
                  </div>
                </div>

                {/* Features */}
                <div className="p-5 flex-1">
                  <p className="text-xs text-gray-500 mb-3 font-semibold uppercase tracking-wider">Included</p>
                  <ul className="space-y-2 mb-4">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-gray-700">
                        <CheckCircle size={15} className="text-green-500 shrink-0 mt-0.5" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  {plan.notIncluded.length > 0 && (
                    <>
                      <p className="text-xs text-gray-400 mb-2 mt-4 font-semibold uppercase tracking-wider">Not Included</p>
                      <ul className="space-y-1.5">
                        {plan.notIncluded.map((f) => (
                          <li key={f} className="flex items-start gap-2 text-xs text-gray-400">
                            <span className="w-3.5 h-3.5 rounded-full border border-gray-300 flex items-center justify-center shrink-0 mt-0.5">
                              <span className="w-1.5 h-0.5 bg-gray-300 rounded" />
                            </span>
                            {f}
                          </li>
                        ))}
                      </ul>
                    </>
                  )}

                  <p className="text-xs text-gray-500 mt-4 italic border-t border-gray-100 pt-3">{plan.ideal}</p>
                </div>

                {/* CTA */}
                <div className="p-5 border-t border-gray-100">
                  <button
                    onClick={() => handleNav('contact')}
                    className={`w-full ${plan.buttonBg} ${plan.isHighlight ? 'text-blue-800' : 'text-white'} font-bold py-2.5 rounded-xl flex items-center justify-center gap-2 transition-colors text-sm`}
                  >
                    Get Started <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-sm text-gray-500 mt-8">
            Offer prices are limited-time. Contact us for free consultation and to avail the best rate for your business.
          </p>
        </div>
      </section>

      {/* Add-ons */}
      <section className="py-14 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-10">
            <span className="text-blue-600 font-bold text-sm uppercase tracking-widest">Optional Add-Ons</span>
            <h2 className="text-2xl md:text-3xl font-black text-gray-900 mt-2">
              Enhance Your Plan with Add-Ons
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {addons.map((addon) => (
              <div key={addon.name} className="border border-gray-100 rounded-xl p-4 bg-gray-50 flex gap-3">
                <CheckCircle size={16} className="text-blue-500 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-800 text-sm">{addon.name}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{addon.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantee */}
      <section className="py-12 bg-gradient-to-r from-green-600 to-green-700 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
              <Star size={22} className="text-white fill-white" />
            </div>
            <h2 className="text-2xl md:text-3xl font-black">Our Service Guarantee</h2>
          </div>
          <p className="text-green-100 text-lg max-w-2xl mx-auto">
            With our Premium Plan, we guarantee to complete the entire setup process and target your first government order within <strong className="text-white">30 days</strong>. If we fail to deliver, we continue support at no extra cost until you succeed.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-gray-900 text-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-black mb-3">Ready to Choose Your Plan?</h2>
          <p className="text-gray-400 mb-6">
            Not sure which plan is right? Talk to our experts for a free personalized recommendation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:8520082707"
              className="bg-blue-600 hover:bg-blue-500 text-white font-black px-7 py-3.5 rounded-xl flex items-center gap-2 transition-colors"
            >
              <Phone size={18} /> Call: 8520082707
            </a>
            <a
              href="https://wa.me/918520082707?text=Hi%2C%20I%20want%20to%20know%20about%20GeM%20pricing%20plans"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-400 text-white font-bold px-7 py-3.5 rounded-xl flex items-center gap-2 transition-colors"
            >
              <MessageCircle size={18} /> WhatsApp Us
            </a>
            <button
              onClick={() => handleNav('contact')}
              className="border-2 border-gray-600 hover:border-gray-400 text-gray-300 hover:text-white font-bold px-7 py-3.5 rounded-xl flex items-center gap-2 transition-all"
            >
              Fill Enquiry Form <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
