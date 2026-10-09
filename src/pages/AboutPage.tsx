import {
  ShieldCheck,
  Award,
  MapPin,
  Lock,
  CheckCircle2,
  Phone,
  MessageCircle,
} from 'lucide-react';
import { firmDetails, photos } from '../data/firmData';

interface AboutPageProps {
  onNavigate: (view: string) => void;
}

export default function AboutPage({ onNavigate }: AboutPageProps) {
  const trackAction = (eventName: string) => {
    window.dispatchEvent(new CustomEvent('lead_event', { detail: eventName }));
  };

  const ethicalPillars = [
    {
      title: 'Integrity',
      desc: 'Straightforward, honest professional counsel in all financial verifications and tax positions.',
    },
    {
      title: 'Objectivity',
      desc: 'Free from bias, conflict of interest, or undue influence of third parties during audits and attestations.',
    },
    {
      title: 'Professional Competence & Due Care',
      desc: 'Continuing professional education ensuring full command of evolving GST, Income Tax, and ROC notifications.',
    },
    {
      title: 'Confidentiality',
      desc: 'Strict non-disclosure of client information acquired during professional and business relationships.',
    },
    {
      title: 'Professional Behaviour',
      desc: 'Strict adherence to relevant laws and avoidance of any conduct that discredits the profession.',
    },
  ];

  return (
    <div className="w-full">
      {/* 1. UNIQUE HERO: Split Presentation with Executive Library Imagery */}
      <section className="bg-white border-b border-[#E2E8F0] py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Copy: 7 Cols */}
            <div className="lg:col-span-7 space-y-5 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-slate-100 border border-[#E2E8F0] text-[#0F172A] text-xs font-semibold">
                <ShieldCheck size={14} className="text-[#D97706]" />
                <span>Firm Profile & Ethics · PKNS & Associates</span>
              </div>

              <h1 className="hero-title text-[#0F172A]">
                Principled Chartered Accountancy Rooted in Precision & Local Trust
              </h1>

              <p className="text-[17px] text-[#64748B] leading-relaxed max-w-2xl font-normal">
                Serving the commercial, industrial, and entrepreneurial community of Ghaziabad, Modinagar, and the wider Delhi-NCR with uncompromising statutory diligence and direct partner accountability.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-3 text-[13px] text-[#1E293B]">
                <div className="px-3.5 py-2 rounded-xl bg-slate-50 border border-[#E2E8F0] flex items-center gap-2">
                  <Award size={15} className="text-[#D97706]" />
                  <span>Lead Partner: <strong>{firmDetails.leadPartner}</strong></span>
                </div>
                <div className="px-3.5 py-2 rounded-xl bg-slate-50 border border-[#E2E8F0] flex items-center gap-2">
                  <ShieldCheck size={15} className="text-[#D97706]" />
                  <span>ICAI Membership: <strong>531404</strong></span>
                </div>
              </div>
            </div>

            {/* Right Visual: 5 Cols Executive Chambers Library with consistent aspect ratio */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border border-[#E2E8F0] bg-slate-100 shadow-md">
                <img
                  src={photos.aboutHero}
                  alt="Modern corporate chambers and financial library"
                  className="w-full aspect-[4/3] object-cover"
                />
                <div className="p-4 bg-white border-t border-[#E2E8F0] text-left">
                  <div className="text-[11px] font-bold text-[#D97706] uppercase tracking-wider">Chambers Headquarters</div>
                  <div className="text-[15px] font-bold text-[#0F172A] mt-0.5">AVS City Square, Raj Nagar Extension</div>
                  <div className="text-[12px] text-[#64748B]">Unit No. 607 & 608, Gulmohar Chauraha, Ghaziabad</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. LEAD PARTNER IN-DEPTH PROFILE */}
      <section className="py-20 md:py-24 bg-[#F8FAFC] border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Photo: 4 Cols */}
            <div className="lg:col-span-4 text-center sm:text-left">
              <div className="relative mx-auto max-w-sm rounded-2xl overflow-hidden border border-[#E2E8F0] bg-white shadow-sm">
                <img
                  src={photos.partnerPortrait}
                  alt="CA Pradeep Kumar Sharma, Chartered Accountant"
                  className="w-full aspect-[4/5] object-cover object-top"
                />
                <div className="p-5 bg-white text-left border-t border-[#E2E8F0]">
                  <div className="text-[18px] font-bold text-[#0F172A] leading-tight font-sans">
                    CA Pradeep Kumar Sharma
                  </div>
                  <div className="text-[13px] text-[#D97706] font-semibold mt-1">
                    Partner · PKNS & Associates
                  </div>
                  <div className="text-[12px] text-[#64748B] mt-0.5">
                    ICAI Membership No. 531404
                  </div>
                </div>
              </div>
            </div>

            {/* Right Biography & Credentials: 8 Cols */}
            <div className="lg:col-span-8 text-left space-y-5">
              <span className="text-xs font-bold uppercase tracking-wider text-[#D97706]">
                Partner's Background & Credentials
              </span>

              <h2 className="section-title text-[#0F172A]">
                Direct Partner Supervision on Every Engagement
              </h2>

              <p className="text-[16px] text-[#1E293B] leading-relaxed">
                <strong>PKNS & Associates</strong> is a Chartered Accountancy practice associated with professional accounting, taxation consultancy, and statutory audit in the Ghaziabad–Modinagar region and throughout Delhi-NCR.
              </p>

              <p className="text-[15px] text-[#64748B] leading-relaxed">
                Public professional records verify <strong>CA Pradeep Kumar Sharma (Membership No. 531404)</strong> as a partner of the firm. Under his stewardship, the firm has appeared on professional certification records for high-value real-estate projects, statutory corporate audits, and direct representation before taxation authorities.
              </p>

              <div className="bg-white rounded-xl border border-[#E2E8F0] p-6 space-y-2 shadow-sm">
                <h3 className="card-title text-[#0F172A]">
                  Partner's Professional Statement:
                </h3>
                <blockquote className="text-[14px] italic text-[#64748B] leading-relaxed border-l-2 border-[#D97706] pl-4">
                  "In an era where algorithmic filing portals have depersonalized tax compliance, we believe accounting and audit remain fundamentally human trust disciplines. Every balance sheet, audit certificate, and tax computation carries direct partner accountability. We do not treat compliance as a routine mechanical form — we treat it as the legal safeguard of our clients' hard-earned wealth."
                </blockquote>
              </div>

              <div className="pt-2 flex flex-wrap gap-3">
                <a
                  href={`${firmDetails.whatsappHref}?text=${encodeURIComponent(
                    'Hello CA Pradeep Kumar Sharma, I would like to schedule an in-office discussion.'
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => trackAction('about_partner_whatsapp_click')}
                  className="btn-secondary"
                >
                  <MessageCircle size={16} />
                  <span>Connect on WhatsApp</span>
                </a>

                <a
                  href={firmDetails.phoneHref}
                  onClick={() => trackAction('about_partner_call_click')}
                  className="btn-outline"
                >
                  <Phone size={15} className="text-[#D97706]" />
                  <span>Call Chambers Directly</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. ICAI CODE OF ETHICS & PROFESSIONAL STANDARDS */}
      <section className="py-20 md:py-24 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-[#D97706]">
              Ethical Pillars
            </span>
            <h2 className="section-title mt-2">
              The ICAI Code of Ethics in Action
            </h2>
            <p className="text-[16px] text-[#64748B] mt-2">
              As members of the Institute of Chartered Accountants of India, our conduct and opinions are strictly governed by statutory independence and technical veracity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ethicalPillars.map((ep, i) => (
              <div
                key={i}
                className="agency-card p-6 text-left"
              >
                <div className="w-8 h-8 rounded-lg bg-slate-100 text-[#0F172A] flex items-center justify-center font-bold text-xs mb-4">
                  0{i + 1}
                </div>
                <h3 className="card-title text-[#0F172A] mb-2">
                  {ep.title}
                </h3>
                <p className="text-[14px] text-[#64748B] leading-relaxed">
                  {ep.desc}
                </p>
              </div>
            ))}

            {/* Non-Solicitation Note */}
            <div className="bg-[#0F172A] text-white rounded-2xl border border-slate-800 p-6 text-left shadow-sm flex flex-col justify-between">
              <div>
                <ShieldCheck size={26} className="text-[#D97706] mb-3" />
                <h3 className="card-title text-white mb-2">
                  Statutory Non-Solicitation
                </h3>
                <p className="text-[14px] text-slate-300 leading-relaxed">
                  We do not engage in aggressive marketing or unsolicited cold calls. Our growth is built upon institutional reputation and client referrals.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-800 text-[12px] text-amber-300 font-semibold">
                Chartered Accountants Act, 1949
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CLIENT DATA CONFIDENTIALITY & INFRASTRUCTURE */}
      <section className="py-20 md:py-24 bg-[#F8FAFC] border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Copy: 7 Cols */}
            <div className="lg:col-span-7 text-left space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#D97706]">
                Data Sovereignty & Protection
              </span>
              <h2 className="section-title text-[#0F172A]">
                Institutional Security for Sensitive Financial Records
              </h2>
              <p className="text-[15px] text-[#64748B] leading-relaxed">
                In accounting and taxation, your data includes sensitive employee salaries, vendor margins, PAN/Aadhaar numbers, and banking statements. We enforce stringent confidentiality protocols to prevent data leaks.
              </p>

              <div className="space-y-3 pt-2">
                {[
                  'Strict zero third-party disclosure under ICAI disciplinary rules.',
                  'Encrypted cloud and local archival of Tally Prime, Zoho Books, and audit workpapers.',
                  'Two-factor authentication on all official Income Tax, GST, and MCA portal credentials.',
                  'Physical document custody in secure chambers at AVS City Square.',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-[14px] text-[#1E293B]">
                    <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Card: 5 Cols */}
            <div className="lg:col-span-5">
              <div className="bg-white border border-[#E2E8F0] rounded-2xl p-6 sm:p-8 text-left space-y-4 shadow-sm">
                <div className="w-11 h-11 rounded-xl bg-slate-100 text-[#0F172A] flex items-center justify-center">
                  <Lock size={22} className="text-[#D97706]" />
                </div>
                <h3 className="card-title text-[#0F172A]">
                  Client Confidentiality Pledge
                </h3>
                <p className="text-[14px] text-[#64748B] leading-relaxed">
                  Every document entrusted to PKNS & Associates is handled solely for the agreed statutory scope. We execute non-disclosure undertakings where required for corporate clients.
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => onNavigate('contact')}
                    className="btn-primary w-full"
                  >
                    Discuss Corporate Scoping
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. STRATEGIC REGIONAL ACCESSIBILITY */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-2 p-6 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]">
              <div className="text-[12px] font-bold text-[#D97706] uppercase tracking-wider">Raj Nagar Extension</div>
              <h4 className="card-title text-[#0F172A]">Commercial Epicenter</h4>
              <p className="text-[14px] text-[#64748B] leading-relaxed">
                Unit 607 & 608, AVS City Square at Gulmohar Chauraha. Centrally situated amidst Ghaziabad's fastest growing commercial corridor.
              </p>
            </div>

            <div className="space-y-2 p-6 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]">
              <div className="text-[12px] font-bold text-[#D97706] uppercase tracking-wider">Modinagar & Meerut Road</div>
              <h4 className="card-title text-[#0F172A]">Industrial Belt Access</h4>
              <p className="text-[14px] text-[#64748B] leading-relaxed">
                Convenient direct road connectivity via Meerut Road (NH-58) for industrial manufacturing units, traders, and institutional firms.
              </p>
            </div>

            <div className="space-y-2 p-6 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]">
              <div className="text-[12px] font-bold text-[#D97706] uppercase tracking-wider">Delhi & NCR Regions</div>
              <h4 className="card-title text-[#0F172A]">Hybrid Consultation</h4>
              <p className="text-[14px] text-[#64748B] leading-relaxed">
                Seamless digital coordination via secure communication channels alongside in-person boardroom conferences at our Ghaziabad office.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
