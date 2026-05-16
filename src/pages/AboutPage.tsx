import { Target, BarChart2, BookOpen, Users, TrendingUp, Search } from 'lucide-react';

const offerings = [
  { icon: BarChart2, title: 'Catalog Intelligence Reports', desc: 'Data-driven reports to identify profitable product categories on GeM.' },
  { icon: Search, title: 'Category Research', desc: 'Deep-dive analysis into high-demand, lower-competition segments.' },
  { icon: BookOpen, title: 'GeM Catalog Guidance', desc: 'Step-by-step assistance for creating and optimising product listings.' },
  { icon: Users, title: 'Seller Consulting Support', desc: 'One-on-one guidance tailored to your business goals on GeM.' },
  { icon: TrendingUp, title: 'Product Opportunity Analysis', desc: 'Spot emerging government procurement trends before your competitors.' },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <div className="bg-gradient-to-br from-blue-800 to-blue-600 text-white py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-14 h-14 bg-white/15 rounded-2xl mb-5">
            <Target size={28} />
          </div>
          <h1 className="text-3xl md:text-4xl font-black mb-4">About Us</h1>
          <p className="text-blue-100 leading-relaxed max-w-2xl mx-auto">
            GemPortalAssist.in helps GeM sellers identify profitable categories, optimise catalog listings, and improve direct sales opportunities using data-driven category intelligence.
          </p>
        </div>
      </div>

      {/* Mission */}
      <div className="max-w-3xl mx-auto px-4 py-14 space-y-12">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12">
          <h2 className="text-2xl font-black text-gray-900 mb-4">Our Goal</h2>
          <p className="text-gray-600 leading-relaxed">
            Our goal is to help sellers make smarter decisions on the Government e Marketplace (GeM) platform by identifying high-demand and lower-competition opportunities — so you can grow your government business with confidence.
          </p>
        </div>

        {/* Offerings */}
        <div>
          <h2 className="text-2xl font-black text-gray-900 mb-8">What We Provide</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {offerings.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 flex gap-4 hover:shadow-md transition-shadow">
                <div className="shrink-0 w-11 h-11 bg-blue-50 rounded-xl flex items-center justify-center">
                  <Icon size={20} className="text-blue-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12">
          <h2 className="text-xl font-black text-gray-900 mb-5">Contact Us</h2>
          <div className="text-gray-600 space-y-2">
            <p>Email: <a href="mailto:sales@gemportalassist.in" className="text-blue-600 hover:underline">sales@gemportalassist.in</a></p>
            <p>Phone: <a href="tel:+918520082707" className="text-blue-600 hover:underline">+91 8520082707</a></p>
            <p>Website: <span className="text-gray-800 font-medium">gemportalassist.in</span></p>
          </div>
        </div>
      </div>
    </div>
  );
}
