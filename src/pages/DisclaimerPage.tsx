import { AlertTriangle } from 'lucide-react';

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <div className="bg-gradient-to-br from-blue-800 to-blue-600 text-white py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-14 h-14 bg-white/15 rounded-2xl mb-5">
            <AlertTriangle size={28} />
          </div>
          <h1 className="text-3xl md:text-4xl font-black mb-3">Disclaimer</h1>
          <p className="text-blue-100 text-sm">Please read this disclaimer carefully before using our services</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 py-14">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12 space-y-8">

          <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
            <p className="text-amber-800 text-sm font-semibold leading-relaxed">
              GemPortalAssist.in is an <strong>independent</strong> consulting and research platform. We are <strong>not affiliated with, endorsed by, or officially connected to</strong> the Government e Marketplace (GeM) or any government authority.
            </p>
          </div>

          <div className="space-y-6 text-gray-600 leading-relaxed">
            <p>
              All trademarks, logos, and references to GeM belong to their respective owners and are used only for identification and reference purposes.
            </p>
            <p>
              The reports and services provided by GemPortalAssist.in are based on research, publicly available information, and analytical interpretation intended to help sellers make informed business decisions.
            </p>
            <p>
              We <strong className="text-gray-800">do not guarantee</strong> tender awards, sales growth, or specific business outcomes. Results may vary based on individual business circumstances, market conditions, and government procurement decisions that are beyond our control.
            </p>
            <p>
              Users of our services are solely responsible for how they apply the research, reports, and guidance provided. GemPortalAssist.in shall not be held liable for any business losses, missed opportunities, or adverse outcomes arising from the use of our materials.
            </p>
          </div>

          <div className="border-t border-gray-100 pt-6">
            <p className="text-sm text-gray-500">
              For questions about this disclaimer, contact us at{' '}
              <a href="mailto:sales@gemportalassist.in" className="text-blue-600 hover:underline">
                sales@gemportalassist.in
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
