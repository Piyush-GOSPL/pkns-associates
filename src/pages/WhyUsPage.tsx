import {
  ShieldCheck,
  CheckCircle2,
  XCircle,
  Clock,
  IndianRupee,
  MessageCircle,
  FileCheck2,
} from 'lucide-react';
import { firmDetails, photos, clientScenarios } from '../data/firmData';

interface WhyUsPageProps {
  onNavigate: (view: string) => void;
}

export default function WhyUsPage({ onNavigate }: WhyUsPageProps) {
  const trackAction = (eventName: string) => {
    window.dispatchEvent(new CustomEvent('lead_event', { detail: eventName }));
  };

  const comparisonRows = [
    {
      feature: 'Direct Partner Supervision',
      pkns: 'Direct scrutiny by CA Pradeep Kumar Sharma (M.No. 531404)',
      aggregator: 'Automated algorithms or junior interns without partner sign-off',
      unqualified: 'No formal CA qualification; high risk of misclassification',
    },
    {
      feature: 'Tax Scrutiny & Notice Support',
      pkns: 'Formal drafting of replies under Sec 143(1), 148, or GST DRC-01',
      aggregator: 'Additional steep charges or redirected to outside lawyers',
      unqualified: 'Unable to provide certified legal defense or representation',
    },
    {
      feature: 'UDIN Authentication',
      pkns: 'Mandatory Unique Document Identification Number on all certificates',
      aggregator: 'Rarely provides UDIN unless expensive add-on is purchased',
      unqualified: 'Cannot generate ICAI UDIN; rejected by banks & authorities',
    },
    {
      feature: 'Physical Chambers Consultation',
      pkns: 'AVS City Square, Raj Nagar Extension office open for face-to-face review',
      aggregator: 'Strictly call-center or chatbot-based; no physical accountability',
      unqualified: 'Temporary storefronts with uncertain longevity',
    },
    {
      feature: 'Legitimate Tax Optimization',
      pkns: 'Strategic analysis of Sec 44ADA, 54, 80C/80D, and capital gains',
      aggregator: 'Mechanical data entry without strategic evaluation',
      unqualified: 'Often uses aggressive, invalid claims leading to IT notices',
    },
  ];

  return (
    <div className="w-full">
      {/* 1. UNIQUE HERO: High-impact Photographic Banner with Team Review */}
      <section className="relative bg-[#0F172A] text-white py-16 md:py-24 overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 z-0">
          <img
            src={photos.whyUsHero}
            alt="Collaborative financial audit and tax planning team meeting"
            className="w-full h-full object-cover object-center opacity-20 filter grayscale contrast-125"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A] via-[#0F172A]/90 to-[#0F172A]/80" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/10 text-amber-300 text-xs font-bold uppercase tracking-wider border border-white/10">
              <ShieldCheck size={14} className="text-[#D97706]" />
              <span>Assurance Philosophy · PKNS & Associates</span>
            </div>

            <h1 className="hero-title text-white">
              Why Discerning Enterprises Retain PKNS & Associates
            </h1>

            <p className="text-[17px] text-slate-300 leading-relaxed font-normal">
              In an environment of automated tax scrutiny, faceless e-assessments, and aggressive GST reconciliations, the choice of your Chartered Accountant is a fundamental business risk decision.
            </p>
          </div>
        </div>
      </section>

      {/* 2. COMPARATIVE EVALUATION MATRIX */}
      <section className="py-20 md:py-24 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-[#D97706]">
              Objective Comparison
            </span>
            <h2 className="section-title mt-2">
              The Real Difference in Professional Standard
            </h2>
            <p className="text-[16px] text-[#64748B] mt-2">
              How our partner-led approach compares to generic mass-filing apps and informal intermediaries.
            </p>
          </div>

          {/* Clean Agency Comparison Table with 14px Radii */}
          <div className="overflow-x-auto rounded-2xl border border-[#E2E8F0] shadow-sm bg-white">
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead>
                <tr className="border-b border-[#E2E8F0]">
                  <th className="p-5 text-xs font-bold text-[#64748B] uppercase tracking-wider bg-[#F8FAFC] w-1/4">
                    Assurance Dimension
                  </th>
                  <th className="p-5 text-sm font-bold text-white bg-[#0F172A] w-1/3">
                    <div className="flex items-center gap-2 font-sans">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#D97706]" />
                      <span>PKNS & Associates (CA-Led)</span>
                    </div>
                  </th>
                  <th className="p-5 text-xs font-semibold text-[#64748B] bg-[#F8FAFC] w-1/4">
                    Generic Online Aggregators
                  </th>
                  <th className="p-5 text-xs font-semibold text-[#64748B] bg-[#F8FAFC] w-1/4">
                    Unqualified Filing Shops
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs text-[#1E293B]">
                {comparisonRows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/70 transition">
                    <td className="p-5 font-bold text-[#0F172A] bg-slate-50/50 text-[13px]">
                      {row.feature}
                    </td>
                    <td className="p-5 bg-[#0F172A]/5 font-semibold text-[#0F172A] text-[13px]">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                        <span>{row.pkns}</span>
                      </div>
                    </td>
                    <td className="p-5 text-[#64748B] text-[13px]">
                      <div className="flex items-start gap-2">
                        <XCircle size={15} className="text-rose-500 shrink-0 mt-0.5" />
                        <span>{row.aggregator}</span>
                      </div>
                    </td>
                    <td className="p-5 text-[#64748B] text-[13px]">
                      <div className="flex items-start gap-2">
                        <XCircle size={15} className="text-rose-500 shrink-0 mt-0.5" />
                        <span>{row.unqualified}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 3. FOUR CORE OPERATIONAL COMMITMENTS */}
      <section className="py-20 md:py-24 bg-[#F8FAFC] border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-[#D97706]">
              Foundational Commitments
            </span>
            <h2 className="section-title mt-2">
              Our Practice Operating Principles
            </h2>
            <p className="text-[16px] text-[#64748B] mt-2">
              We stand behind every computation and filing with clear accountability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="agency-card p-6 sm:p-7 text-left flex flex-col justify-between">
              <div>
                <div className="w-11 h-11 rounded-xl bg-slate-100 text-[#0F172A] flex items-center justify-center mb-5">
                  <ShieldCheck size={22} className="text-[#D97706]" />
                </div>
                <h3 className="card-title text-[#0F172A] mb-2">
                  Direct Partner Access
                </h3>
                <p className="text-[14px] text-[#64748B] leading-relaxed">
                  You are not handed over to an inexperienced junior. CA Pradeep Kumar Sharma is directly accessible for your critical strategic questions.
                </p>
              </div>
              <div className="mt-6 pt-3 border-t border-slate-100 text-[12px] font-semibold text-[#D97706]">
                Direct Accountability
              </div>
            </div>

            <div className="agency-card p-6 sm:p-7 text-left flex flex-col justify-between">
              <div>
                <div className="w-11 h-11 rounded-xl bg-slate-100 text-[#0F172A] flex items-center justify-center mb-5">
                  <IndianRupee size={22} className="text-[#D97706]" />
                </div>
                <h3 className="card-title text-[#0F172A] mb-2">
                  Transparent Upfront Scope
                </h3>
                <p className="text-[14px] text-[#64748B] leading-relaxed">
                  We determine the exact statutory scope and professional fee prior to commencing work. Zero hidden hourly escalations or unannounced billings.
                </p>
              </div>
              <div className="mt-6 pt-3 border-t border-slate-100 text-[12px] font-semibold text-[#D97706]">
                Ethical Pricing
              </div>
            </div>

            <div className="agency-card p-6 sm:p-7 text-left flex flex-col justify-between">
              <div>
                <div className="w-11 h-11 rounded-xl bg-slate-100 text-[#0F172A] flex items-center justify-center mb-5">
                  <Clock size={22} className="text-[#D97706]" />
                </div>
                <h3 className="card-title text-[#0F172A] mb-2">
                  Zero Default Mindset
                </h3>
                <p className="text-[14px] text-[#64748B] leading-relaxed">
                  We track statutory deadlines proactively — whether Advance Tax, GSTR-3B, or 44AB audits — guarding our clients from punitive interest and penalties.
                </p>
              </div>
              <div className="mt-6 pt-3 border-t border-slate-100 text-[12px] font-semibold text-[#D97706]">
                Calendar Vigilance
              </div>
            </div>

            <div className="agency-card p-6 sm:p-7 text-left flex flex-col justify-between">
              <div>
                <div className="w-11 h-11 rounded-xl bg-slate-100 text-[#0F172A] flex items-center justify-center mb-5">
                  <FileCheck2 size={22} className="text-[#D97706]" />
                </div>
                <h3 className="card-title text-[#0F172A] mb-2">
                  Legitimate Tax Defense
                </h3>
                <p className="text-[14px] text-[#64748B] leading-relaxed">
                  We optimize your taxes strictly within legal statutory deductions. We build solid documentation trails that withstand income tax department scrutiny.
                </p>
              </div>
              <div className="mt-6 pt-3 border-t border-slate-100 text-[12px] font-semibold text-[#D97706]">
                Audit Trail Integrity
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. EXPANDED CLIENT SCENARIOS & ADVISORY EXPERIENCES */}
      <section className="py-20 md:py-24 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl text-left mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#D97706]">
              Client Advisory Case Studies
            </span>
            <h2 className="section-title mt-2">
              Demonstrated Impact in Critical Situations
            </h2>
            <p className="text-[16px] text-[#64748B] mt-2">
              Explore how our rigorous scrutiny resolved high-stakes compliance bottlenecks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {clientScenarios.map((cs, i) => (
              <div
                key={i}
                className="agency-card p-7 text-left flex flex-col justify-between"
              >
                <div>
                  <span className="px-2.5 py-1 rounded-md bg-[#0F172A] text-white text-[11px] font-bold uppercase tracking-wider inline-block mb-3">
                    {cs.type}
                  </span>
                  <h3 className="card-title text-[#0F172A] mb-3">
                    {cs.title}
                  </h3>
                  <div className="p-3.5 bg-slate-50 rounded-xl border border-[#E2E8F0] text-[13px] text-[#64748B] leading-relaxed mb-4">
                    <strong className="text-rose-700 block mb-1">Issue:</strong>
                    {cs.situation}
                  </div>
                </div>

                <div className="pt-4 border-t border-[#E2E8F0] text-[13px]">
                  <strong className="text-emerald-800 block mb-1 flex items-center gap-1 font-bold">
                    <CheckCircle2 size={14} className="text-emerald-600" />
                    <span>Resolution by PKNS & Associates:</span>
                  </strong>
                  <p className="text-[#1E293B] leading-relaxed">{cs.outcome}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CALL TO ACTION BANNER */}
      <section className="py-14 bg-[#0F172A] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <h3 className="section-title text-white">
              Consult with CA Pradeep Kumar Sharma Today
            </h3>
            <p className="text-[15px] text-slate-300 mt-1">
              Begin with an initial review of your records before deciding on engagement.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={`${firmDetails.whatsappHref}?text=${encodeURIComponent(
                'Hello PKNS & Associates, I would like to schedule a conference regarding accounting/taxation.'
              )}`}
              target="_blank"
              rel="noreferrer"
              onClick={() => trackAction('why_us_whatsapp_cta')}
              className="btn-secondary"
            >
              <MessageCircle size={16} />
              <span>WhatsApp Initial Scoping</span>
            </a>

            <button
              onClick={() => onNavigate('contact')}
              className="btn-outline text-slate-900"
            >
              Office Coordinates
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
