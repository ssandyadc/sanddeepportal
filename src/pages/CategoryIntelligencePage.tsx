import { CheckCircle, Download, Phone, MessageCircle, ArrowRight, TrendingUp, AlertTriangle, Target, BarChart2, ShieldCheck, Zap } from 'lucide-react';

interface CategoryIntelligencePageProps {
  onNavigate: (page: string) => void;
}

const quadrants = [
  {
    id: 'q1',
    label: 'Q1',
    title: 'High Opportunity',
    desc: 'Low competition, high demand. Best entry point for new sellers.',
    bg: 'bg-emerald-50',
    border: 'border-emerald-300',
    badge: 'bg-emerald-500',
    icon: TrendingUp,
    iconColor: 'text-emerald-600',
    highlight: true,
  },
  {
    id: 'q2',
    label: 'Q2',
    title: 'Balanced Growth',
    desc: 'Moderate competition with steady demand. Good for established sellers.',
    bg: 'bg-blue-50',
    border: 'border-blue-300',
    badge: 'bg-blue-500',
    icon: BarChart2,
    iconColor: 'text-blue-600',
    highlight: false,
  },
  {
    id: 'q3',
    label: 'Q3',
    title: 'High Competition',
    desc: 'Large seller base. Difficult to win without a strong price advantage.',
    bg: 'bg-amber-50',
    border: 'border-amber-300',
    badge: 'bg-amber-500',
    icon: AlertTriangle,
    iconColor: 'text-amber-600',
    highlight: false,
  },
  {
    id: 'q4',
    label: 'Q4',
    title: 'Saturated / Risky',
    desc: 'Overcrowded market with limited opportunity. Avoid unless differentiated.',
    bg: 'bg-red-50',
    border: 'border-red-300',
    badge: 'bg-red-500',
    icon: ShieldCheck,
    iconColor: 'text-red-600',
    highlight: false,
  },
];

const tableData = [
  { type: 'Q1 Category', typeColor: 'text-emerald-700 font-bold', rowBg: 'bg-emerald-50', categories: '159', products: '3,579', sellers: '364', oem: '345', tag: 'Best Opportunity', tagColor: 'bg-emerald-100 text-emerald-700' },
  { type: 'Q2 Category', typeColor: 'text-blue-700 font-bold', rowBg: 'bg-blue-50', categories: '2,694', products: '6,35,816', sellers: '1,50,855', oem: '21,739', tag: 'Balanced', tagColor: 'bg-blue-100 text-blue-700' },
  { type: 'Q3 Category', typeColor: 'text-amber-700 font-bold', rowBg: 'bg-amber-50', categories: '5,502', products: '9,27,572', sellers: '15,98,799', oem: '16,840', tag: 'Competitive', tagColor: 'bg-amber-100 text-amber-700' },
  { type: 'Q4 Category', typeColor: 'text-red-700 font-bold', rowBg: 'bg-red-50', categories: '684', products: '90,003', sellers: '5,10,834', oem: '1,330', tag: 'Saturated', tagColor: 'bg-red-100 text-red-700' },
  { type: 'Q6 Category', typeColor: 'text-gray-700 font-bold', rowBg: '', categories: '546', products: '1,090', sellers: '134', oem: '100', tag: 'Niche', tagColor: 'bg-gray-100 text-gray-600' },
  { type: 'Upgraded/Expired', typeColor: 'text-gray-500', rowBg: '', categories: '1,143', products: '18,128', sellers: '51,203', oem: '1,014', tag: '', tagColor: '' },
  { type: 'Total', typeColor: 'text-gray-900 font-black', rowBg: 'bg-gray-100', categories: '10,728', products: '16,76,188', sellers: '23,12,189', oem: '41,368', tag: '', tagColor: '' },
];

const deliverables = [
  { icon: Target, text: 'Shortlisted profitable categories for your business type' },
  { icon: CheckCircle, text: 'Product suggestions within each selected category' },
  { icon: BarChart2, text: 'Demand vs supply gap analysis per category' },
  { icon: TrendingUp, text: 'Competition level mapping (Q1–Q4 classification)' },
  { icon: Zap, text: 'GeM-ready strategy to list winning products fast' },
  { icon: ShieldCheck, text: 'Customized report — not generic, built for your business' },
];

export default function CategoryIntelligencePage({ onNavigate }: CategoryIntelligencePageProps) {
  const handleNav = (page: string) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSampleDownload = async () => {
    const res = await fetch('/sample_file_2026.xlsx');
    const blob = await res.blob();
    const url = URL.createObjectURL(new Blob([blob], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' }));
    const link = document.createElement('a');
    link.href = url;
    link.download = 'GemPortalAssist-Sample-Category-Analysis.xlsx';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen">

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-950 to-blue-900 text-white pt-28 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(59,130,246,0.15),_transparent_60%)]" />
        <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
          <span className="inline-block bg-amber-400/20 border border-amber-400/40 text-amber-300 text-xs font-bold px-4 py-1.5 rounded-full mb-5 tracking-wide uppercase">
            Category Intelligence Service
          </span>
          <h1 className="text-3xl md:text-5xl font-black leading-tight mb-4">
            Struggling to Select the Right<br className="hidden md:block" />
            <span className="text-amber-400"> Categories on GeM Portal?</span>
          </h1>
          <p className="text-blue-200 text-lg md:text-xl max-w-3xl mx-auto mb-3 leading-relaxed">
            We Help You Identify Profitable Categories — <span className="text-white font-bold">Data Driven.</span>
          </p>
          <p className="text-blue-300 text-base max-w-2xl mx-auto mb-10">
            GeM Portal has <strong className="text-white">10,000+ categories.</strong> Most sellers upload random products and get zero orders. We change that.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={handleSampleDownload}
              className="flex items-center gap-2 bg-amber-400 hover:bg-amber-300 text-slate-900 font-black px-7 py-3.5 rounded-xl transition-all duration-200 shadow-lg hover:shadow-amber-400/30 hover:scale-105"
            >
              <Download size={18} /> Download Free Sample Excel
            </button>
            <a
              href="https://superprofile.bio/vp/gem-category-intelligence-report"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold px-7 py-3.5 rounded-xl transition-all duration-200"
            >
              Buy Full Report <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Problem */}
            <div>
              <span className="inline-block bg-red-100 text-red-700 text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wide">The Problem</span>
              <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-5 leading-tight">
                For a new seller, it's almost impossible to:
              </h2>
              <div className="space-y-3">
                {[
                  'Understand which category to choose',
                  'Identify high-demand products',
                  'Avoid overcrowded categories',
                  'Plan profitable catalog listings',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 p-3.5 bg-red-50 border border-red-100 rounded-xl">
                    <span className="text-red-500 font-black text-base leading-none mt-0.5">✗</span>
                    <p className="text-gray-800 text-sm font-medium">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Most sellers vs Our approach */}
            <div className="space-y-5">
              <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6">
                <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-3">Most Sellers Do This</p>
                <div className="space-y-2">
                  {[
                    'Upload random products',
                    'Face zero orders for months',
                    'Waste time and money on wrong categories',
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2.5 text-sm text-gray-600">
                      <span className="text-red-400 font-black">❌</span> {item}
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6">
                <p className="text-xs font-bold text-emerald-700 uppercase tracking-wide mb-3">Our Clients Do This</p>
                <div className="space-y-2">
                  {[
                    'Enter only high-opportunity categories',
                    'List products with real demand',
                    'Win orders within 30 days',
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2.5 text-sm text-gray-700">
                      <span className="text-emerald-500 font-black">✓</span> {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quadrant Analysis */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block bg-blue-100 text-blue-700 text-xs font-bold px-3 py-1 rounded-full mb-3 uppercase tracking-wide">Our Methodology</span>
            <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-3">
              Category Intelligence Service
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We use <strong>real GeM data analysis</strong> to classify every category into four quadrants — so you know exactly where to enter.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {quadrants.map((q) => (
              <div
                key={q.id}
                className={`relative rounded-2xl border-2 ${q.border} ${q.bg} p-6 ${q.highlight ? 'ring-2 ring-emerald-400 ring-offset-2' : ''}`}
              >
                {q.highlight && (
                  <span className="absolute -top-3 left-5 bg-emerald-500 text-white text-xs font-bold px-3 py-0.5 rounded-full">
                    Recommended Entry Point
                  </span>
                )}
                <div className="flex items-start gap-4">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${q.badge} bg-opacity-15`}>
                    <q.icon size={20} className={q.iconColor} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className={`text-xs font-black px-2 py-0.5 rounded-md text-white ${q.badge}`}>{q.label}</span>
                      <h3 className="font-black text-gray-900 text-base">{q.title}</h3>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed">{q.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-sm text-gray-500 mt-6 font-medium">
            We don't guess. We use real GeM data to place every category in the right quadrant.
          </p>
        </div>
      </section>

      {/* Data Table */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-10">
            <span className="inline-block bg-blue-100 text-blue-700 text-xs font-bold px-3 py-1 rounded-full mb-3 uppercase tracking-wide">GeM Market Reality</span>
            <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-3">Real Data From GeM Portal</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Out of <strong>10,728 total categories</strong>, only a small percentage offers real opportunity. Here's the breakdown:
            </p>
          </div>

          {/* Desktop Table */}
          <div className="hidden md:block overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="text-left px-5 py-3.5 font-bold">Category Type</th>
                  <th className="text-right px-4 py-3.5 font-bold">Total Categories</th>
                  <th className="text-right px-4 py-3.5 font-bold">Products</th>
                  <th className="text-right px-4 py-3.5 font-bold">Sellers</th>
                  <th className="text-right px-4 py-3.5 font-bold">OEM</th>
                  <th className="text-center px-4 py-3.5 font-bold">Signal</th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((row, i) => (
                  <tr key={i} className={`border-t border-gray-100 ${row.rowBg}`}>
                    <td className={`px-5 py-3.5 ${row.typeColor}`}>{row.type}</td>
                    <td className="text-right px-4 py-3.5 text-gray-700 font-medium">{row.categories}</td>
                    <td className="text-right px-4 py-3.5 text-gray-700 font-medium">{row.products}</td>
                    <td className="text-right px-4 py-3.5 text-gray-700 font-medium">{row.sellers}</td>
                    <td className="text-right px-4 py-3.5 text-gray-700 font-medium">{row.oem}</td>
                    <td className="text-center px-4 py-3.5">
                      {row.tag && (
                        <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${row.tagColor}`}>{row.tag}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <div className="md:hidden space-y-3">
            {tableData.map((row, i) => (
              <div key={i} className={`rounded-xl border border-gray-200 p-4 ${row.rowBg}`}>
                <div className="flex items-center justify-between mb-2">
                  <p className={`text-sm ${row.typeColor}`}>{row.type}</p>
                  {row.tag && (
                    <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${row.tagColor}`}>{row.tag}</span>
                  )}
                </div>
                <div className="grid grid-cols-2 gap-1 text-xs text-gray-600">
                  <span>Categories: <strong>{row.categories}</strong></span>
                  <span>Products: <strong>{row.products}</strong></span>
                  <span>Sellers: <strong>{row.sellers}</strong></span>
                  <span>OEM: <strong>{row.oem}</strong></span>
                </div>
              </div>
            ))}
          </div>

          {/* Key Insight */}
          <div className="mt-8 bg-amber-50 border border-amber-200 rounded-2xl p-6">
            <div className="flex items-start gap-3">
              <AlertTriangle size={20} className="text-amber-600 shrink-0 mt-0.5" />
              <div>
                <p className="font-black text-gray-900 mb-1">What This Means For You</p>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Out of 10,728 categories, <strong>most are overcrowded, low demand, or hard to win.</strong> Only Q1 categories with 159 entries offer a genuine entry window with 364 sellers vs high demand. That's why <strong>category selection = success or failure</strong> on GeM.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-10">
            <span className="inline-block bg-blue-100 text-blue-700 text-xs font-bold px-3 py-1 rounded-full mb-3 uppercase tracking-wide">Deliverables</span>
            <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-2">What You Get From Our Service</h2>
            <p className="text-gray-600">You don't just list products. <strong>You list winning products.</strong></p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {deliverables.map((item, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm flex gap-4 items-start hover:shadow-md transition-shadow">
                <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center shrink-0">
                  <item.icon size={18} className="text-blue-600" />
                </div>
                <p className="text-sm font-semibold text-gray-800 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-gradient-to-r from-blue-900 to-blue-800 rounded-2xl p-7 text-white text-center">
            <p className="text-lg font-black mb-1">We don't help you just register on GeM.</p>
            <p className="text-2xl font-black text-amber-400">We help you WIN on GeM.</p>
          </div>
        </div>
      </section>

      {/* Free Sample Download */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-gradient-to-br from-slate-900 to-blue-950 rounded-3xl p-8 md:p-12 text-white text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(251,191,36,0.08),_transparent_60%)]" />
            <div className="relative z-10">
              <span className="inline-block bg-amber-400/20 border border-amber-400/40 text-amber-300 text-xs font-bold px-4 py-1.5 rounded-full mb-4 uppercase tracking-wide">
                Free Sample
              </span>
              <h2 className="text-2xl md:text-3xl font-black mb-3">Try Before You Buy</h2>
              <p className="text-blue-200 text-base mb-2">
                Download a Sample Category Analysis Excel File
              </p>
              <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-blue-300 mb-8">
                {['Category classification', 'Demand insights', 'Sample product mapping'].map((f) => (
                  <span key={f} className="flex items-center gap-1.5">
                    <CheckCircle size={14} className="text-emerald-400" /> {f}
                  </span>
                ))}
              </div>
              <button
                onClick={handleSampleDownload}
                className="inline-flex items-center gap-2.5 bg-amber-400 hover:bg-amber-300 text-slate-900 font-black px-8 py-4 rounded-xl text-base transition-all duration-200 shadow-xl hover:shadow-amber-400/30 hover:scale-105"
              >
                <Download size={20} /> Download Sample Excel
              </button>
              <p className="text-blue-400 text-xs mt-4">Free download — no registration required</p>
            </div>
          </div>
        </div>
      </section>

      {/* Buy Now CTA */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-2">Like the Sample?</h2>
            <p className="text-gray-600 text-lg">Get your <strong>Complete Category Intelligence Report</strong></p>
          </div>

          <div className="bg-white border-2 border-blue-200 rounded-3xl p-8 md:p-10 shadow-sm">
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {[
                { icon: Target, label: 'Customized for your business', color: 'bg-blue-50 text-blue-600' },
                { icon: CheckCircle, label: 'Ready for GeM catalog upload', color: 'bg-emerald-50 text-emerald-600' },
                { icon: TrendingUp, label: 'High-conversion category selection', color: 'bg-amber-50 text-amber-600' },
              ].map((f) => (
                <div key={f.label} className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${f.color}`}>
                    <f.icon size={18} />
                  </div>
                  <p className="font-semibold text-gray-800 text-sm">{f.label}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://superprofile.bio/vp/gem-category-intelligence-report"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-blue-700 hover:bg-blue-600 text-white font-black px-8 py-4 rounded-xl text-base transition-all duration-200 shadow-md hover:shadow-lg hover:scale-105"
              >
                Buy Now <ArrowRight size={18} />
              </a>
              <a
                href="tel:8520082707"
                className="flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-900 font-bold px-8 py-4 rounded-xl text-base transition-colors"
              >
                <Phone size={18} /> Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-14 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-black mb-2">Need Help? Talk to Us Directly</h2>
          <p className="text-blue-200 mb-8">Our GeM experts are available Mon–Sat, 9 AM – 7 PM</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:8520082707"
              className="flex items-center gap-2 bg-white text-blue-900 font-black px-6 py-3 rounded-xl hover:bg-blue-50 transition-colors"
            >
              <Phone size={16} /> Call: 8520082707
            </a>
            <a
              href="https://wa.me/918520082707?text=Hi%2C%20I%20want%20to%20know%20about%20the%20Category%20Intelligence%20Service"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-6 py-3 rounded-xl transition-colors"
            >
              <MessageCircle size={16} /> WhatsApp Us
            </a>
            <a
              href="mailto:support@gemportalassist.in"
              className="flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold px-6 py-3 rounded-xl transition-colors"
            >
              Email Us
            </a>
          </div>
          <p className="text-blue-300 text-sm mt-6">
            Website: <span className="text-white font-semibold">GemPortalAssist.in</span>
          </p>
        </div>
      </section>
    </div>
  );
}
