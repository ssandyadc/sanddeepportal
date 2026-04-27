import { CheckCircle, ArrowRight, MessageCircle, Phone, Star } from 'lucide-react';

interface PricingPageProps {
  onNavigate: (page: string) => void;
}

const plans = [
  {
    id: 'starter',
    name: 'Starter Plan',
    tagline: 'Just Getting Started',
    badge: null,
    price: 'Get Quote',
    priceNote: 'Call for exact pricing',
    color: 'border-gray-200',
    headerBg: 'bg-gray-50',
    buttonBg: 'bg-[#1a3a8f] hover:bg-[#0d1f4f]',
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
    price: 'Get Quote',
    priceNote: 'Call for exact pricing',
    color: 'border-blue-200',
    headerBg: 'bg-blue-50',
    buttonBg: 'bg-[#1a3a8f] hover:bg-[#0d1f4f]',
    badgeBg: null,
    features: [
      'Everything in Starter',
      'Product catalog listing (5 products)',
      'Catalog optimization',
      'Category selection guidance',
      'Basic pricing strategy',
      'Compliance document checklist',
      'WhatsApp support for 15 days',
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
    price: 'Get Quote',
    priceNote: 'Call for exact pricing',
    color: 'border-amber-400',
    headerBg: 'bg-gradient-to-br from-amber-50 to-amber-100',
    buttonBg: 'bg-[#d97706] hover:bg-[#b45309]',
    badgeBg: 'bg-[#f59e0b] text-[#0d1f4f]',
    features: [
      'Everything in Growth',
      'Product listing (up to 10 products)',
      'Full compliance & document setup',
      'Authorization & undertakings',
      'Bid participation training',
      'L1 price strategy',
      'Reverse auction support',
      'WhatsApp support for 30 days',
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
    color: 'border-[#1a3a8f]',
    headerBg: 'bg-gradient-to-br from-[#0d1f4f] to-[#1a3a8f]',
    buttonBg: 'bg-[#f59e0b] hover:bg-[#d97706]',
    badgeBg: 'bg-[#2a7a2a] text-white',
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
      <section className="bg-gradient-to-br from-[#0d1f4f] via-[#1a3a8f] to-[#1a5fa8] text-white pt-28 pb-16">
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
            Call or WhatsApp for exact pricing — customized to your business needs.
          </p>
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
                    <span className={`text-2xl font-black ${plan.isHighlight ? 'text-[#f59e0b]' : 'text-[#1a3a8f]'}`}>
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
                    className={`w-full ${plan.buttonBg} ${plan.isHighlight ? 'text-[#0d1f4f]' : 'text-white'} font-bold py-2.5 rounded-xl flex items-center justify-center gap-2 transition-colors text-sm`}
                  >
                    Get Started <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-sm text-gray-500 mt-8">
            All prices are customized based on your specific business needs. Contact us for a free consultation and exact quote.
          </p>
        </div>
      </section>

      {/* Add-ons */}
      <section className="py-14 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-10">
            <span className="text-[#2a7a2a] font-bold text-sm uppercase tracking-widest">Optional Add-Ons</span>
            <h2 className="text-2xl md:text-3xl font-black text-[#0d1f4f] mt-2">
              Enhance Your Plan with Add-Ons
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {addons.map((addon) => (
              <div key={addon.name} className="border border-gray-100 rounded-xl p-4 bg-gray-50 flex gap-3">
                <CheckCircle size={16} className="text-[#2a7a2a] shrink-0 mt-0.5" />
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
      <section className="py-12 bg-gradient-to-r from-[#2a7a2a] to-[#1f5c1f] text-white">
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
              href="tel:9100011053"
              className="bg-[#1a3a8f] hover:bg-[#2563eb] text-white font-black px-7 py-3.5 rounded-xl flex items-center gap-2 transition-colors"
            >
              <Phone size={18} /> Call: 9100011053
            </a>
            <a
              href="https://wa.me/919100011053?text=Hi%2C%20I%20want%20to%20know%20about%20GeM%20pricing%20plans"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#2a7a2a] hover:bg-[#1f5c1f] text-white font-bold px-7 py-3.5 rounded-xl flex items-center gap-2 transition-colors"
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
