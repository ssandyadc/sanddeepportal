import { CheckCircle, ArrowRight, MessageCircle, Phone } from 'lucide-react';

interface ServicesPageProps {
  onNavigate: (page: string) => void;
}

const serviceCategories = [
  {
    id: 'basic',
    badge: 'Foundation',
    badgeColor: 'bg-blue-100 text-[#1a3a8f]',
    title: 'Basic Registration Services',
    subtitle: 'Everything you need to get started on GeM Portal',
    headerColor: 'from-[#1a3a8f] to-[#2563eb]',
    borderColor: 'border-blue-200',
    accentColor: 'text-[#1a3a8f]',
    services: [
      { name: 'GeM Seller Registration', desc: 'Complete account creation on the GeM Portal with all required verifications.' },
      { name: 'Brand Approval Support', desc: 'Assistance with brand registration and approval process on GeM.' },
      { name: 'Vendor Assessment Guidance', desc: 'Help with completing vendor assessment tests required on the platform.' },
      { name: 'OEM Panel Setup', desc: 'Setup of Original Equipment Manufacturer panel for direct product selling.' },
    ],
  },
  {
    id: 'catalog',
    badge: 'Visibility',
    badgeColor: 'bg-green-100 text-[#2a7a2a]',
    title: 'Catalog Services',
    subtitle: 'Get found by government buyers with optimized listings',
    headerColor: 'from-[#2a7a2a] to-[#3a9a3a]',
    borderColor: 'border-green-200',
    accentColor: 'text-[#2a7a2a]',
    services: [
      { name: 'Product Listing', desc: 'Professional creation of product listings with correct specifications and images.' },
      { name: 'Catalog Optimization', desc: 'Optimization of existing catalog for better visibility and search ranking.' },
      { name: 'Category Selection Support', desc: 'Expert guidance on selecting the right product/service category.' },
      { name: 'Pricing Strategy', desc: 'Market-based L1 pricing strategy to win bids competitively.' },
    ],
  },
  {
    id: 'compliance',
    badge: 'Compliance',
    badgeColor: 'bg-amber-100 text-amber-800',
    title: 'Compliance Support',
    subtitle: 'All documents and certificates handled professionally',
    headerColor: 'from-[#d97706] to-[#f59e0b]',
    borderColor: 'border-amber-200',
    accentColor: 'text-[#d97706]',
    services: [
      { name: 'Document Preparation', desc: 'Preparation and verification of all mandatory documents for GeM compliance.' },
      { name: 'Authorization Setup', desc: 'Setup of required authorizations from OEMs and principals.' },
      { name: 'Undertakings Completion', desc: 'Assistance with all undertaking declarations required on the platform.' },
      { name: 'Experience Certificate Guidance', desc: 'Help with obtaining and submitting experience certificates for service bids.' },
    ],
  },
  {
    id: 'bid',
    badge: 'Revenue',
    badgeColor: 'bg-orange-100 text-orange-700',
    title: 'Bid Support',
    subtitle: 'Win government contracts with expert bidding strategy',
    headerColor: 'from-[#ea580c] to-[#f97316]',
    borderColor: 'border-orange-200',
    accentColor: 'text-[#ea580c]',
    services: [
      { name: 'Bid Participation Training', desc: 'Hands-on training for participating in GeM bids and tenders effectively.' },
      { name: 'Bid Search Assistance', desc: 'Daily search and alert setup for relevant bids matching your products/services.' },
      { name: 'L1 Price Strategy', desc: 'Expert strategy to quote the lowest price (L1) and win bids profitably.' },
      { name: 'Reverse Auction Support', desc: 'Live assistance during reverse auction sessions to win contracts.' },
    ],
  },
  {
    id: 'growth',
    badge: 'Growth',
    badgeColor: 'bg-sky-100 text-sky-700',
    title: 'Growth Support',
    subtitle: 'Scale your GeM business and improve your seller performance',
    headerColor: 'from-[#0369a1] to-[#0284c7]',
    borderColor: 'border-sky-200',
    accentColor: 'text-[#0369a1]',
    services: [
      { name: 'Order Execution Guidance', desc: 'Support in executing orders correctly including delivery and invoice submission.' },
      { name: 'Payment Tracking Help', desc: 'Assistance in tracking pending payments and resolving delay issues.' },
      { name: 'Contract Extension Support', desc: 'Help with extending existing contracts and managing renewals.' },
      { name: 'Seller Rating Improvement', desc: 'Strategy to improve your seller rating and move to higher tiers.' },
    ],
  },
  {
    id: 'advanced',
    badge: 'Premium',
    badgeColor: 'bg-gray-100 text-gray-700',
    title: 'Advanced Services',
    subtitle: 'High-value solutions for complex GeM challenges',
    headerColor: 'from-[#0d1f4f] to-[#1a3a8f]',
    borderColor: 'border-gray-200',
    accentColor: 'text-[#1a3a8f]',
    services: [
      { name: 'Vendor Assessment Completion', desc: 'Full management of vendor assessment process for higher certification levels.' },
      { name: 'OEM Approval Fast-Track Support', desc: 'Expedited assistance for getting OEM status approved on GeM.' },
      { name: 'Service Category Activation', desc: 'Activation and setup of new service categories for expanded selling.' },
      { name: 'GeM Contract Troubleshooting', desc: 'Expert resolution of issues with existing GeM contracts and disputes.' },
      { name: 'Account Suspension Resolution', desc: 'Immediate action team for resolving GeM account suspension cases.' },
    ],
  },
];

export default function ServicesPage({ onNavigate }: ServicesPageProps) {
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
            Complete GeM Support
          </span>
          <h1 className="text-3xl md:text-5xl font-black mb-4">
            All GeM Services Under One Roof
          </h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto mb-8">
            From Day 1 registration to winning your first order — we provide complete, end-to-end support at every step of your GeM journey.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => handleNav('contact')}
              className="bg-[#f59e0b] hover:bg-[#d97706] text-[#0d1f4f] font-black px-6 py-3 rounded-xl flex items-center gap-2 transition-colors"
            >
              Get a Free Consultation <ArrowRight size={16} />
            </button>
            <a
              href="https://wa.me/919100011053?text=Hi%2C%20I%20want%20to%20know%20about%20GeM%20services"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#2a7a2a] hover:bg-[#1f5c1f] text-white font-bold px-6 py-3 rounded-xl flex items-center gap-2 transition-colors"
            >
              <MessageCircle size={16} /> WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* Service categories */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="space-y-8">
            {serviceCategories.map((cat) => (
              <div key={cat.id} className={`bg-white border ${cat.borderColor} rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow`}>
                {/* Category header */}
                <div className={`bg-gradient-to-r ${cat.headerColor} px-6 py-5 flex flex-col md:flex-row md:items-center justify-between gap-3`}>
                  <div>
                    <span className={`inline-block ${cat.badgeColor} text-xs font-bold px-3 py-1 rounded-full mb-2`}>
                      {cat.badge}
                    </span>
                    <h2 className="text-xl md:text-2xl font-black text-white">{cat.title}</h2>
                    <p className="text-white/80 text-sm mt-0.5">{cat.subtitle}</p>
                  </div>
                  <button
                    onClick={() => handleNav('contact')}
                    className="shrink-0 bg-white/20 hover:bg-white/30 text-white font-semibold px-4 py-2 rounded-lg text-sm transition-colors border border-white/30 flex items-center gap-2"
                  >
                    Enquire Now <ArrowRight size={14} />
                  </button>
                </div>

                {/* Services grid */}
                <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                  {cat.services.map((service) => (
                    <div key={service.name} className="flex gap-3">
                      <CheckCircle size={18} className={`${cat.accentColor} shrink-0 mt-0.5`} />
                      <div>
                        <p className="font-semibold text-[#0d1f4f] text-sm">{service.name}</p>
                        <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">{service.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-black text-[#0d1f4f]">Why Choose GemPro5IT?</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {[
              { value: '500+', label: 'Sellers Helped', sub: 'Across India', color: 'text-[#1a3a8f]' },
              { value: '30', label: 'Days Promise', sub: 'Reg to First Order', color: 'text-[#f59e0b]' },
              { value: '95%', label: 'Success Rate', sub: 'Client Satisfaction', color: 'text-[#2a7a2a]' },
              { value: '24/7', label: 'Support', sub: 'WhatsApp & Call', color: 'text-[#f97316]' },
            ].map((stat) => (
              <div key={stat.label} className="text-center border border-gray-100 rounded-2xl p-5 bg-gray-50">
                <p className={`text-3xl font-black ${stat.color}`}>{stat.value}</p>
                <p className="font-bold text-[#0d1f4f] text-sm mt-1">{stat.label}</p>
                <p className="text-xs text-gray-400">{stat.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-gradient-to-r from-[#0d1f4f] to-[#1a3a8f] text-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-black mb-3">Not Sure Which Service You Need?</h2>
          <p className="text-blue-200 mb-6">Book a free 15-minute consultation and our experts will guide you.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:9100011053"
              className="bg-white text-[#1a3a8f] font-black px-6 py-3 rounded-xl flex items-center gap-2 hover:bg-blue-50 transition-colors"
            >
              <Phone size={16} /> Call: 9100011053
            </a>
            <a
              href="https://wa.me/919100011053?text=Hi%2C%20I%20need%20help%20choosing%20the%20right%20GeM%20service"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#2a7a2a] hover:bg-[#1f5c1f] text-white font-bold px-6 py-3 rounded-xl flex items-center gap-2 transition-colors"
            >
              <MessageCircle size={16} /> WhatsApp for Free Advice
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
