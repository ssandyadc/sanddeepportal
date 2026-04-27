import {
  CheckCircle,
  ArrowRight,
  MessageCircle,
  Phone,
  Target,
  BookOpen,
  ShoppingBag,
  TrendingUp,
  Star,
  Clock,
} from 'lucide-react';

interface BeginnerProgramPageProps {
  onNavigate: (page: string) => void;
}

const weeks = [
  {
    week: 'Week 1',
    icon: BookOpen,
    title: 'Registration & Setup',
    color: 'bg-[#1a3a8f]',
    lightColor: 'bg-blue-50 border-blue-200',
    textColor: 'text-[#1a3a8f]',
    tasks: [
      'GeM Seller account creation',
      'Aadhaar & PAN verification',
      'Bank account linking',
      'UDYAM/GST registration guidance',
      'Brand approval application',
      'OEM panel setup (if applicable)',
    ],
    outcome: 'Your GeM seller profile is live and verified!',
  },
  {
    week: 'Week 2',
    icon: ShoppingBag,
    title: 'Catalog Listing',
    color: 'bg-[#2a7a2a]',
    lightColor: 'bg-green-50 border-green-200',
    textColor: 'text-[#2a7a2a]',
    tasks: [
      'Product/service category selection',
      'Professional product listing creation',
      'High-quality image setup',
      'Specification & description writing',
      'Competitive pricing research',
      'Compliance documents upload',
    ],
    outcome: 'Your products are live and visible to government buyers!',
  },
  {
    week: 'Week 3',
    icon: Target,
    title: 'Bid Participation',
    color: 'bg-[#d97706]',
    lightColor: 'bg-amber-50 border-amber-200',
    textColor: 'text-[#d97706]',
    tasks: [
      'Bid alert setup for your category',
      'Live bid identification & shortlisting',
      'L1 price strategy training',
      'Bid application process (hands-on)',
      'Reverse auction participation',
      'Technical bid requirements review',
    ],
    outcome: 'You are actively bidding on live government tenders!',
  },
  {
    week: 'Week 4',
    icon: TrendingUp,
    title: 'First Order Targeting',
    color: 'bg-[#ea580c]',
    lightColor: 'bg-orange-50 border-orange-200',
    textColor: 'text-[#ea580c]',
    tasks: [
      'Aggressive bid participation on suitable tenders',
      'Direct order monitoring & follow-up',
      'Order acceptance process training',
      'Invoice & delivery guidance',
      'Payment tracking setup',
      'Seller rating optimization',
    ],
    outcome: 'Target: Get your FIRST government order!',
  },
];

const inclusions = [
  { icon: CheckCircle, text: 'Complete GeM registration handled by our experts' },
  { icon: CheckCircle, text: 'Professional catalog listing (up to 10 products/services)' },
  { icon: CheckCircle, text: 'Full compliance and document preparation' },
  { icon: CheckCircle, text: 'Live bid participation training (hands-on)' },
  { icon: CheckCircle, text: 'WhatsApp support throughout the 30-day period' },
  { icon: CheckCircle, text: 'Dedicated relationship manager assigned' },
  { icon: CheckCircle, text: 'Weekly progress review calls' },
  { icon: CheckCircle, text: 'Post-order execution guidance included' },
];

const testimonials = [
  {
    name: 'Sunita Verma',
    role: 'Housewife, Hyderabad',
    text: 'I thought GeM was only for big businesses. But the 30-day program made it simple. Got my first order for office supplies on Day 26!',
    rating: 5,
    avatar: 'SV',
  },
  {
    name: 'Kiran Babu',
    role: 'Recent Graduate, Beginner',
    text: 'Zero experience, zero business background. Completed the program and got first order in exactly 30 days. This is real and it works!',
    rating: 5,
    avatar: 'KB',
  },
  {
    name: 'Lakshmi Devi',
    role: 'Home-based Seller',
    text: 'Best investment I made this year. From complete beginner to active GeM seller in one month. Thank you GemPro5IT!',
    rating: 5,
    avatar: 'LD',
  },
];

export default function BeginnerProgramPage({ onNavigate }: BeginnerProgramPageProps) {
  const handleNav = (page: string) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0d1f4f] via-[#1a3a8f] to-[#1a5fa8] text-white pt-28 pb-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="max-w-3xl">
            <span className="inline-block bg-amber-400/20 border border-amber-400/40 rounded-full px-4 py-1.5 text-sm font-medium text-amber-300 mb-4">
              Our Most Popular Program
            </span>
            <h1 className="text-3xl md:text-5xl font-black leading-tight mb-4">
              Start Earning from GeM
              <span className="text-amber-400 block">in 30 Days Program</span>
            </h1>
            <p className="text-blue-100 text-lg mb-6 leading-relaxed max-w-2xl">
              Designed for <strong className="text-white">complete beginners</strong> — graduates, housewives, first-time entrepreneurs.
              We guide you from scratch to your first government order in exactly 30 days.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              {['Zero Experience Needed', 'Work from Home', 'Government Orders', '30-Day Guarantee'].map((tag) => (
                <div key={tag} className="flex items-center gap-1.5 bg-white/10 rounded-full px-3 py-1.5">
                  <CheckCircle size={14} className="text-green-400" />
                  <span className="text-sm text-white">{tag}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => handleNav('contact')}
                className="bg-[#f59e0b] hover:bg-[#d97706] text-[#0d1f4f] font-black px-7 py-3.5 rounded-xl flex items-center gap-2 transition-all shadow-lg"
              >
                Enroll Now <ArrowRight size={18} />
              </button>
              <a
                href="https://wa.me/919100011053?text=Hi%2C%20I%20want%20to%20join%20the%2030-Day%20GeM%20Program"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#2a7a2a] hover:bg-[#1f5c1f] text-white font-bold px-7 py-3.5 rounded-xl flex items-center gap-2 transition-colors"
              >
                <MessageCircle size={18} /> WhatsApp for Details
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* What is this program */}
      <section className="py-14 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-[#1a3a8f] font-bold text-sm uppercase tracking-widest">About the Program</span>
              <h2 className="text-2xl md:text-3xl font-black text-[#0d1f4f] mt-2 mb-4">
                Complete Beginner to Active GeM Seller — In Just 30 Days
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Our 30-Day Beginner Success Program is the most comprehensive hands-on training and execution program for new GeM sellers. We do not just teach — we do it with you.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Whether you are a housewife looking for a home business, a fresh graduate wanting to earn independently, or someone who has never done business before — this program is designed for you.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { num: '30', label: 'Day Program' },
                  { num: '10+', label: 'Products Listed' },
                  { num: '1-on-1', label: 'Expert Support' },
                  { num: '95%', label: 'Success Rate' },
                ].map((item) => (
                  <div key={item.label} className="bg-blue-50 border border-blue-100 rounded-xl p-4 text-center">
                    <p className="text-2xl font-black text-[#1a3a8f]">{item.num}</p>
                    <p className="text-sm text-gray-600">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 rounded-2xl p-6">
              <h3 className="font-black text-gray-800 text-lg mb-5">What's Included</h3>
              <div className="space-y-3">
                {inclusions.map((item) => (
                  <div key={item.text} className="flex gap-3">
                    <CheckCircle size={18} className="text-green-500 shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">{item.text}</span>
                  </div>
                ))}
              </div>
              <button
                onClick={() => handleNav('pricing')}
                className="mt-6 w-full bg-[#1a3a8f] hover:bg-[#0d1f4f] text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2 transition-colors"
              >
                View Pricing <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4-Week Timeline */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-[#2a7a2a] font-bold text-sm uppercase tracking-widest">The Journey</span>
            <h2 className="text-2xl md:text-4xl font-black text-[#0d1f4f] mt-2">
              Your 30-Day GeM Success Timeline
            </h2>
            <p className="text-gray-500 mt-3 max-w-lg mx-auto">
              A structured, week-by-week execution plan with our experts holding your hand at every step.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {weeks.map((week, idx) => (
              <div key={week.week} className={`border ${week.lightColor} rounded-2xl overflow-hidden`}>
                {/* Week header */}
                <div className={`${week.color} px-5 py-4`}>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-white/80 text-xs font-semibold uppercase tracking-widest">{week.week}</span>
                    <span className="w-7 h-7 bg-white/20 rounded-lg flex items-center justify-center">
                      <week.icon size={14} className="text-white" />
                    </span>
                  </div>
                  <h3 className="text-white font-black text-base">{week.title}</h3>
                </div>

                {/* Tasks */}
                <div className="p-5 bg-white">
                  <ul className="space-y-2 mb-4">
                    {week.tasks.map((task) => (
                      <li key={task} className="flex items-start gap-2 text-xs text-gray-600">
                        <span className={`w-1.5 h-1.5 rounded-full ${week.color} mt-1.5 shrink-0`} />
                        {task}
                      </li>
                    ))}
                  </ul>
                  <div className={`border ${week.lightColor} rounded-lg p-3`}>
                    <div className="flex items-start gap-2">
                      <Target size={14} className={`${week.textColor} shrink-0 mt-0.5`} />
                      <p className={`text-xs font-semibold ${week.textColor}`}>{week.outcome}</p>
                    </div>
                  </div>
                </div>

                {idx < weeks.length - 1 && (
                  <div className="hidden lg:flex justify-end pr-0 items-center absolute" />
                )}
              </div>
            ))}
          </div>

          {/* Arrow connector for desktop */}
          <div className="hidden lg:flex items-center justify-center mt-8 gap-2">
            <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-full px-6 py-3 shadow-sm">
              <Clock size={16} className="text-[#1a3a8f]" />
              <span className="text-sm font-bold text-gray-700">Week 1</span>
              <ArrowRight size={14} className="text-gray-400" />
              <span className="text-sm font-bold text-gray-700">Week 2</span>
              <ArrowRight size={14} className="text-gray-400" />
              <span className="text-sm font-bold text-gray-700">Week 3</span>
              <ArrowRight size={14} className="text-gray-400" />
              <span className="text-sm font-bold text-amber-600">First Order</span>
              <Target size={16} className="text-amber-500" />
            </div>
          </div>
        </div>
      </section>

      {/* Who is this for */}
      <section className="py-14 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-black text-[#0d1f4f]">This Program Is Perfect For</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {[
              {
                title: 'Housewives',
                desc: 'Earn from home while managing household responsibilities. Work on your own time and schedule.',
                emoji: '🏠',
              },
              {
                title: 'Fresh Graduates',
                desc: 'Start your entrepreneurial journey with government-backed income without any initial capital.',
                emoji: '🎓',
              },
              {
                title: 'Early Retirees',
                desc: 'Use your experience to earn steady income by selling products/services to government buyers.',
                emoji: '💼',
              },
              {
                title: 'Part-Time Workers',
                desc: 'Supplement your income with GeM selling as a profitable side business from home.',
                emoji: '⏰',
              },
              {
                title: 'Small Traders',
                desc: 'Expand your customer base to include all government departments, PSUs, and institutions.',
                emoji: '🛒',
              },
              {
                title: 'Home Manufacturers',
                desc: 'Sell your handmade or manufactured products directly to government without middlemen.',
                emoji: '🏭',
              },
            ].map((item) => (
              <div key={item.title} className="border border-gray-100 rounded-2xl p-5 bg-gray-50 hover:shadow-md transition-shadow">
                <div className="text-3xl mb-3">{item.emoji}</div>
                <h3 className="font-bold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-black text-[#0d1f4f]">What Our Beginners Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} size={14} className="text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#1a3a8f] to-[#2563eb] flex items-center justify-center text-white font-bold text-sm">
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

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-[#0d1f4f] to-[#1a3a8f] text-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-black mb-3">
            Ready to Start Your GeM Journey?
          </h2>
          <p className="text-blue-200 mb-8">
            Limited seats per batch. Book your spot today and start earning from government orders in 30 days.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => handleNav('contact')}
              className="bg-[#f59e0b] hover:bg-[#d97706] text-[#0d1f4f] font-black px-7 py-3.5 rounded-xl flex items-center gap-2 transition-all shadow-lg"
            >
              Enroll in 30-Day Program <ArrowRight size={18} />
            </button>
            <a
              href="https://wa.me/919100011053?text=Hi%2C%20I%20want%20to%20join%20the%2030-Day%20GeM%20Beginner%20Program"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#2a7a2a] hover:bg-[#1f5c1f] text-white font-bold px-7 py-3.5 rounded-xl flex items-center gap-2 transition-colors"
            >
              <MessageCircle size={18} /> Chat on WhatsApp
            </a>
            <a
              href="tel:9100011053"
              className="border-2 border-white/40 hover:border-white text-white font-bold px-7 py-3.5 rounded-xl flex items-center gap-2 transition-all"
            >
              <Phone size={18} /> Call Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
