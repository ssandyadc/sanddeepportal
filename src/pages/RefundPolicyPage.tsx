import { RefreshCw, CheckCircle, XCircle } from 'lucide-react';

export default function RefundPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <div className="bg-gradient-to-br from-blue-800 to-blue-600 text-white py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-14 h-14 bg-white/15 rounded-2xl mb-5">
            <RefreshCw size={28} />
          </div>
          <h1 className="text-3xl md:text-4xl font-black mb-3">Refund & Cancellation Policy</h1>
          <p className="text-blue-100 text-sm">Applies to all digital products sold on GemPortalAssist.in</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 py-14">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12 space-y-10">

          <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
            <p className="text-amber-800 text-sm font-medium leading-relaxed">
              All products sold on GemPortalAssist.in are digital products, reports, intelligence files, research data, consulting materials, or downloadable content. Due to the nature of digital products, <strong>all sales are generally final and non-refundable</strong> once access or delivery has been provided.
            </p>
          </div>

          <Section title="Refund Eligibility">
            <p className="text-gray-600 mb-4">Refunds may only be considered in the following cases:</p>
            <div className="space-y-3">
              {[
                'Duplicate payment made by mistake',
                'Technical issue preventing file delivery',
                'Wrong product delivered',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle size={18} className="text-green-500 mt-0.5 shrink-0" />
                  <span className="text-gray-700 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </Section>

          <Section title="Non-Refundable Situations">
            <p className="text-gray-600 mb-4">Refunds will <strong>not</strong> be provided for:</p>
            <div className="space-y-3">
              {[
                'Change of mind after purchase',
                'Lack of usage or understanding',
                'Business outcomes or sales expectations',
                'Failure to read product descriptions before purchase',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <XCircle size={18} className="text-red-400 mt-0.5 shrink-0" />
                  <span className="text-gray-700 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </Section>

          <Section title="Cancellation">
            <p className="text-gray-600">
              Orders for digital products cannot be cancelled once processed and delivered.
            </p>
          </Section>

          <Section title="Contact for Support">
            <div className="text-gray-600 space-y-1">
              <p>Email: <a href="mailto:sales@gemportalassist.in" className="text-blue-600 hover:underline">sales@gemportalassist.in</a></p>
              <p>Phone: <a href="tel:+918520082707" className="text-blue-600 hover:underline">+91 8520082707</a></p>
            </div>
          </Section>
        </div>
      </div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="text-lg font-bold text-gray-900 mb-3 pb-2 border-b border-gray-100">{title}</h2>
      {children}
    </div>
  );
}
