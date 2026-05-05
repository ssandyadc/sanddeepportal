import { useState } from 'react';
import { Phone, Mail, MapPin, MessageCircle, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { submitLead } from '../lib/supabase';

interface ContactPageProps {
  onNavigate: (page: string) => void;
}

const businessTypes = [
  'Housewife / Home-based Seller',
  'Graduate / Student',
  'Trader / Retailer',
  'Manufacturer / OEM',
  'MSME Owner',
  'Service Provider',
  'Other',
];

export default function ContactPage({ onNavigate: _onNavigate }: ContactPageProps) {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    business_type: '',
    message: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim()) {
      setError('Name and phone number are required.');
      return;
    }
    setSubmitting(true);
    setError('');
    try {
      const { error: dbError } = await submitLead({ ...form, source: 'contact_page' });
      if (dbError) throw dbError;
      setSuccess(true);
      setForm({ name: '', phone: '', email: '', business_type: '', message: '' });
    } catch {
      setError('Something went wrong. Please try calling or WhatsApp us directly.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white pt-28 pb-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <span className="inline-block bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-sm font-medium text-blue-200 mb-4">
            Free Consultation
          </span>
          <h1 className="text-3xl md:text-5xl font-black mb-4">
            Let's Start Your GeM Journey
          </h1>
          <p className="text-blue-200 text-lg max-w-xl mx-auto">
            Reach out via phone, WhatsApp, email, or fill the form below. Our experts will contact you within 2 hours.
          </p>
        </div>
      </section>

      {/* Contact section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-5">
              <div>
                <h2 className="text-2xl font-black text-gray-800 mb-2">Get in Touch</h2>
                <p className="text-gray-500 text-sm leading-relaxed">
                  We are available 6 days a week (Mon–Sat, 9 AM – 7 PM). WhatsApp is the fastest way to reach us.
                </p>
              </div>

              <div className="space-y-4">
                {/* Phone */}
                <a
                  href="tel:8520082707"
                  className="flex items-start gap-4 bg-white border border-gray-100 rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow group"
                >
                  <div className="w-11 h-11 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="font-bold text-gray-800 text-sm">Call Us</p>
                    <p className="text-blue-600 font-semibold">8520082707</p>
                    <p className="text-xs text-gray-400">Mon–Sat, 9 AM – 7 PM</p>
                  </div>
                </a>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/918520082707?text=Hi%2C%20I%20want%20to%20start%20selling%20on%20GeM.%20Please%20guide%20me."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 bg-white border border-gray-100 rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow group"
                >
                  <div className="w-11 h-11 bg-green-100 text-green-600 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-green-600 group-hover:text-white transition-colors">
                    <MessageCircle size={20} />
                  </div>
                  <div>
                    <p className="font-bold text-gray-800 text-sm">WhatsApp</p>
                    <p className="text-green-600 font-semibold">Chat with Us</p>
                    <p className="text-xs text-gray-400">Fastest response — usually within 30 mins</p>
                  </div>
                </a>

                {/* Email */}
                <a
                  href="mailto:support@gemportalassist.in"
                  className="flex items-start gap-4 bg-white border border-gray-100 rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow group"
                >
                  <div className="w-11 h-11 bg-amber-100 text-amber-600 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-amber-500 group-hover:text-white transition-colors">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="font-bold text-gray-800 text-sm">Email Us</p>
                    <p className="text-amber-600 font-semibold text-sm break-all">support@gemportalassist.in</p>
                    <p className="text-xs text-gray-400">Response within 24 hours</p>
                  </div>
                </a>

                {/* Address */}
                <div className="flex items-start gap-4 bg-white border border-gray-100 rounded-2xl p-4 shadow-sm">
                  <div className="w-11 h-11 bg-red-100 text-red-500 rounded-xl flex items-center justify-center shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="font-bold text-gray-800 text-sm">Office Address</p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Jaya Enclave, New Bowenpally,<br />Hyderabad, Telangana
                    </p>
                    <p className="text-xs text-gray-400 mt-0.5">GemPortalAssist.in</p>
                  </div>
                </div>
              </div>

              {/* Quick CTA */}
              <div className="bg-gradient-to-br from-blue-700 to-blue-600 rounded-2xl p-5 text-white">
                <h3 className="font-black text-base mb-1">Need Immediate Help?</h3>
                <p className="text-blue-200 text-sm mb-4">Call or WhatsApp us right now for instant guidance.</p>
                <div className="flex gap-3">
                  <a
                    href="tel:8520082707"
                    className="flex-1 bg-white text-blue-700 font-bold py-2.5 rounded-lg text-sm text-center hover:bg-blue-50 transition-colors"
                  >
                    Call Now
                  </a>
                  <a
                    href="https://wa.me/918520082707"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-green-500 hover:bg-green-400 text-white font-bold py-2.5 rounded-lg text-sm text-center transition-colors"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>

            {/* Lead Form */}
            <div className="lg:col-span-3">
              <div className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden">
                <div className="bg-gradient-to-r from-blue-800 to-blue-700 px-6 py-5">
                  <h2 className="text-xl font-black text-white">Send Us Your Enquiry</h2>
                  <p className="text-blue-200 text-sm mt-1">Fill in your details and we'll call you back within 2 hours.</p>
                </div>

                <div className="p-6">
                  {success ? (
                    <div className="text-center py-12">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <CheckCircle size={32} className="text-green-500" />
                      </div>
                      <h3 className="text-xl font-black text-gray-800 mb-2">Enquiry Submitted!</h3>
                      <p className="text-gray-500 mb-6">
                        Thank you! Our team will contact you within 2 hours. For immediate help, WhatsApp us now.
                      </p>
                      <a
                        href="https://wa.me/918520082707?text=Hi%2C%20I%20just%20submitted%20an%20enquiry%20on%20your%20website."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-6 py-3 rounded-xl transition-colors"
                      >
                        <MessageCircle size={18} /> Chat on WhatsApp
                      </a>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                            Full Name <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            placeholder="Your full name"
                            required
                            className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                            Phone Number <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            value={form.phone}
                            onChange={handleChange}
                            placeholder="10-digit mobile number"
                            required
                            className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                          Email Address
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          placeholder="your@email.com (optional)"
                          className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                          I am a / Business Type
                        </label>
                        <select
                          name="business_type"
                          value={form.business_type}
                          onChange={handleChange}
                          className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white"
                        >
                          <option value="">Select your business type</option>
                          {businessTypes.map((bt) => (
                            <option key={bt} value={bt}>{bt}</option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                          Your Query / Message
                        </label>
                        <textarea
                          name="message"
                          value={form.message}
                          onChange={handleChange}
                          rows={4}
                          placeholder="Tell us what you need — registration, catalog listing, bid support, or anything else..."
                          className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                        />
                      </div>

                      {error && (
                        <div className="flex items-start gap-2 bg-red-50 border border-red-200 rounded-lg px-4 py-3 text-sm text-red-600">
                          <AlertCircle size={16} className="shrink-0 mt-0.5" />
                          {error}
                        </div>
                      )}

                      <button
                        type="submit"
                        disabled={submitting}
                        className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-black py-3.5 rounded-xl flex items-center justify-center gap-2 transition-colors text-sm"
                      >
                        {submitting ? (
                          <>
                            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            Submitting...
                          </>
                        ) : (
                          <>
                            <Send size={16} /> Submit Enquiry
                          </>
                        )}
                      </button>

                      <p className="text-center text-xs text-gray-400">
                        By submitting, you agree to be contacted by our team. No spam, ever.
                      </p>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map-like banner */}
      <section className="py-10 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 text-white text-center">
            <MapPin size={28} className="text-red-400 mx-auto mb-3" />
            <h3 className="font-black text-xl mb-1">Visit Our Office</h3>
            <p className="text-gray-300 mb-2">Jaya Enclave, New Bowenpally, Hyderabad, Telangana</p>
            <p className="text-gray-400 text-sm">By appointment only. Call or WhatsApp to schedule a visit.</p>
            <div className="mt-4 flex flex-wrap justify-center gap-4">
              <a
                href="tel:8520082707"
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold px-5 py-2.5 rounded-xl text-sm transition-colors"
              >
                <Phone size={15} /> Book Appointment
              </a>
              <a
                href="https://wa.me/918520082707?text=Hi%2C%20I%20want%20to%20visit%20your%20office.%20Please%20help%20me%20schedule."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white font-bold px-5 py-2.5 rounded-xl text-sm transition-colors"
              >
                <MessageCircle size={15} /> WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
