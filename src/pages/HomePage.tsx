import React, { useState } from 'react';
import {
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  FileText,
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  Award,
  ChevronRight,
} from 'lucide-react';
import { firmDetails, photos, practiceAreas, clientScenarios } from '../data/firmData';
import { useScrollReveal, useStaggerReveal } from '../hooks/useScrollReveal';

interface HomePageProps {
  onNavigate: (view: string, serviceId?: string) => void;
  onOpenConsultation?: (serviceName?: string) => void;
}

export default function HomePage({ onNavigate }: HomePageProps) {
  const [formName, setFormName] = useState('');
  const [formMobile, setFormMobile] = useState('');
  const [formService, setFormService] = useState('');
  const [formMessage, setFormMessage] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Scroll reveal refs for each section
  const pillarsRef = useStaggerReveal<HTMLDivElement>();
  const practiceHeaderRef = useScrollReveal<HTMLDivElement>();
  const practiceGridRef = useStaggerReveal<HTMLDivElement>();
  const partnerRef = useScrollReveal<HTMLDivElement>();
  const processHeaderRef = useScrollReveal<HTMLDivElement>();
  const processGridRef = useStaggerReveal<HTMLDivElement>();
  const scenarioHeaderRef = useScrollReveal<HTMLDivElement>();
  const scenarioGridRef = useStaggerReveal<HTMLDivElement>();
  const contactSectionRef = useScrollReveal<HTMLDivElement>();

  const trackAction = (eventName: string) => {
    window.dispatchEvent(new CustomEvent('lead_event', { detail: eventName }));
  };

  const handleQuickFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    trackAction('homepage_consultation_form_submit');
    setFormSubmitted(true);
  };

  return (
    <div className="w-full">
      {/* 1. HERO SECTION: Clean, Prestigious, Minimalist Corporate Composition */}
      <section className="bg-white border-b border-[#E2E8F0] pt-12 pb-16 md:py-24 relative overflow-hidden">
        {/* Decorative floating shapes */}
        <div className="deco-shape deco-shape-1" />
        <div className="deco-shape deco-shape-3" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
            {/* Left Copy: 7 Cols */}
            <div className="lg:col-span-7 space-y-6 text-left">
              {/* Eyebrow Tag */}
              <div className="animate-hero-eyebrow inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-100 border border-[#E2E8F0] text-[#0F172A] text-[13px] font-semibold">
                <ShieldCheck size={16} className="text-[#D97706] icon-hover-rotate" />
                <span>ICAI Registered Practice · Ghaziabad · M.No. {firmDetails.membershipNo}</span>
              </div>

              {/* Strict Typography: 52-64px Hero Heading */}
              <h1 className="hero-title text-[#0F172A] animate-hero-title">
                Financial Precision.{' '}
                <span className="text-[#D97706] block sm:inline">
                  Strategic Integrity.
                </span>
              </h1>

              {/* Clear, Professional Body Copy: 16-18px */}
              <p className="text-[17px] text-[#64748B] leading-relaxed max-w-2xl font-normal animate-hero-subtitle">
                Led by <strong className="text-[#0F172A] font-semibold">{firmDetails.leadPartner}</strong>, PKNS & Associates delivers authoritative taxation, statutory audit, RERA project certification, and corporate compliance counsel for enterprises and esteemed individuals.
              </p>

              {/* Action Buttons: 15-16px, weight 600, 12px radii */}
              <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4 animate-hero-cta">
                <a
                  href={`${firmDetails.whatsappHref}?text=${encodeURIComponent(
                    'Hello CA Pradeep Kumar Sharma, I would like to schedule a professional consultation.'
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => trackAction('hero_whatsapp_click')}
                  className="btn-secondary animate-pulse-glow"
                >
                  <MessageCircle size={18} />
                  <span>Consult on WhatsApp</span>
                </a>

                <a
                  href={firmDetails.phoneHref}
                  onClick={() => trackAction('hero_phone_click')}
                  className="btn-outline"
                >
                  <Phone size={17} className="text-[#D97706]" />
                  <span>Call: {firmDetails.phone}</span>
                </a>
              </div>

              {/* Trust Badges */}
              <div className="pt-4 border-t border-[#E2E8F0] flex flex-wrap items-center gap-y-2 gap-x-6 text-[14px] text-[#64748B] animate-hero-badges">
                <span className="flex items-center gap-1.5 text-[#1E293B] font-medium">
                  <CheckCircle2 size={16} className="text-emerald-600 shrink-0" />
                  <span>Direct Partner Oversight</span>
                </span>
                <span className="flex items-center gap-1.5 text-[#1E293B] font-medium">
                  <CheckCircle2 size={16} className="text-emerald-600 shrink-0" />
                  <span>Strict ICAI Code of Ethics</span>
                </span>
                <span className="flex items-center gap-1.5 text-[#1E293B] font-medium">
                  <CheckCircle2 size={16} className="text-emerald-600 shrink-0" />
                  <span>Raj Nagar Extension Chambers</span>
                </span>
              </div>
            </div>

            {/* Right Visual: 5 Cols Authentic Photography with consistent aspect ratio */}
            <div className="lg:col-span-5 animate-hero-image">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="relative rounded-2xl overflow-hidden border border-[#E2E8F0] bg-slate-100 shadow-md img-hover-zoom">
                  <img
                    src={photos.homeHero}
                    alt="Chartered Accountant client consultation in Raj Nagar Extension"
                    className="w-full aspect-[4/3] object-cover object-center"
                    loading="eager"
                  />
                  <div className="p-5 bg-white border-t border-[#E2E8F0] text-left">
                    <div className="flex items-center justify-between gap-2">
                      <div>
                        <div className="text-[17px] font-bold text-[#0F172A] leading-tight font-sans">
                          CA Pradeep Kumar Sharma
                        </div>
                        <p className="text-[13px] text-[#64748B] mt-0.5">
                          Partner · ICAI Membership No. 531404
                        </p>
                      </div>
                      <span className="px-2.5 py-1 bg-amber-50 text-[#D97706] text-[11px] font-bold rounded-lg border border-amber-200 tag-hover">
                        Partner-Led
                      </span>
                    </div>
                    <div className="mt-3 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[12px] text-[#64748B]">
                      <MapPin size={13} className="text-[#D97706] shrink-0" />
                      <span>Unit 607 & 608, AVS City Square, Raj Nagar Ext., Ghaziabad</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. STATUTORY PILLARS: Clean Professional 4-Column Bar */}
      <section className="bg-[#F8FAFC] border-b border-[#E2E8F0] py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={pillarsRef}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4 divide-y sm:divide-y-0 sm:divide-x divide-slate-200">
            <div className="flex items-center gap-3.5 pt-4 sm:pt-0 sm:px-4" data-reveal-child>
              <div className="w-10 h-10 rounded-xl bg-white border border-[#E2E8F0] text-[#0F172A] flex items-center justify-center shrink-0 shadow-sm">
                <ShieldCheck size={20} className="text-[#D97706] icon-hover-rotate" />
              </div>
              <div className="text-left">
                <div className="text-[13px] font-bold text-[#0F172A] uppercase tracking-wider">ICAI Standards</div>
                <div className="text-[13px] text-[#64748B]">Statutory Audits & Assurance</div>
              </div>
            </div>

            <div className="flex items-center gap-3.5 pt-4 sm:pt-0 sm:px-4" data-reveal-child>
              <div className="w-10 h-10 rounded-xl bg-white border border-[#E2E8F0] text-[#0F172A] flex items-center justify-center shrink-0 shadow-sm">
                <FileText size={20} className="text-[#D97706] icon-hover-rotate" />
              </div>
              <div className="text-left">
                <div className="text-[13px] font-bold text-[#0F172A] uppercase tracking-wider">Direct & Indirect Tax</div>
                <div className="text-[13px] text-[#64748B]">Income Tax & GST Compliance</div>
              </div>
            </div>

            <div className="flex items-center gap-3.5 pt-4 sm:pt-0 sm:px-4" data-reveal-child>
              <div className="w-10 h-10 rounded-xl bg-white border border-[#E2E8F0] text-[#0F172A] flex items-center justify-center shrink-0 shadow-sm">
                <Award size={20} className="text-[#D97706] icon-hover-rotate" />
              </div>
              <div className="text-left">
                <div className="text-[13px] font-bold text-[#0F172A] uppercase tracking-wider">RERA Certification</div>
                <div className="text-[13px] text-[#64748B]">Form 3 & Form 5 Project Audits</div>
              </div>
            </div>

            <div className="flex items-center gap-3.5 pt-4 sm:pt-0 sm:px-4" data-reveal-child>
              <div className="w-10 h-10 rounded-xl bg-white border border-[#E2E8F0] text-[#0F172A] flex items-center justify-center shrink-0 shadow-sm">
                <Clock size={20} className="text-[#D97706] icon-hover-rotate" />
              </div>
              <div className="text-left">
                <div className="text-[13px] font-bold text-[#0F172A] uppercase tracking-wider">Timely Filings</div>
                <div className="text-[13px] text-[#64748B]">Zero Statutory Default Mindset</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CORE PRACTICE DISCIPLINES: Elegant Cards with 10-16px Radii */}
      <section className="py-20 md:py-24 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6" ref={practiceHeaderRef}>
            <div className="max-w-2xl text-left" data-reveal>
              <span className="text-xs font-bold uppercase tracking-wider text-[#D97706]">
                Core Practice Disciplines
              </span>
              <h2 className="section-title mt-2 accent-line-animated">
                Professional Chartered Accountancy Services
              </h2>
              <p className="text-[16px] text-[#64748B] mt-4 leading-relaxed">
                Structured around applicable Indian statutes, meticulous bookkeeping, and proactive compliance to safeguard your business.
              </p>
            </div>

            <button
              onClick={() => onNavigate('services')}
              className="inline-flex items-center gap-2 text-[15px] font-semibold text-[#0F172A] hover:text-[#D97706] transition group self-start md:self-end link-hover-underline"
              data-reveal
            >
              <span>Explore all 8 practice areas</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Practice Cards: 6 featured cards with consistent 16:9 photo thumbnails */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7" ref={practiceGridRef}>
            {practiceAreas.slice(0, 6).map((pa) => (
              <article
                key={pa.id}
                className="agency-card flex flex-col justify-between overflow-hidden text-left"
                data-reveal-child
              >
                <div>
                  {/* Photo Header: Clean 16:9 aspect ratio */}
                  <div className="relative aspect-[16/9] overflow-hidden bg-slate-100 border-b border-[#E2E8F0] img-hover-zoom">
                    <img
                      src={pa.image}
                      alt={pa.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 rounded-md bg-white/95 text-[#0F172A] font-bold text-[11px] shadow-sm tag-hover">
                        {pa.categoryLabel}
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6">
                    <span className="text-[12px] font-semibold text-[#D97706] block mb-1">
                      {pa.statutoryAct}
                    </span>
                    <h3 className="card-title text-[#0F172A]">
                      {pa.title}
                    </h3>
                    <p className="text-[14px] text-[#64748B] mt-2 line-clamp-3 leading-relaxed">
                      {pa.description}
                    </p>

                    {/* Deliverables snippet */}
                    <div className="mt-4 pt-3 border-t border-slate-100 space-y-1.5">
                      {pa.keyDeliverables.slice(0, 2).map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-[13px] text-[#1E293B]">
                          <CheckCircle2 size={14} className="text-emerald-600 shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Footer */}
                <div className="px-6 pb-6 pt-2 flex items-center justify-between border-t border-slate-100 mt-2">
                  <button
                    onClick={() => onNavigate('services', pa.id)}
                    className="text-[13px] font-bold text-[#0F172A] hover:text-[#D97706] flex items-center gap-1 transition link-hover-underline"
                  >
                    <span>Scope & Checklist</span>
                    <ChevronRight size={14} />
                  </button>

                  <a
                    href={`${firmDetails.whatsappHref}?text=${encodeURIComponent(
                      `Hello PKNS & Associates, I would like to enquire about ${pa.title}.`
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => trackAction(`practice_${pa.id}_whatsapp_click`)}
                    className="p-2 rounded-lg bg-emerald-50 text-emerald-700 hover:bg-emerald-100 transition icon-hover-rotate"
                    aria-label={`Enquire about ${pa.title} on WhatsApp`}
                  >
                    <MessageCircle size={16} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 4. LEAD PARTNER SPOTLIGHT: Clean Corporate Section */}
      <section className="py-20 md:py-24 bg-[#F8FAFC] border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={partnerRef}>
          <div className="bg-white rounded-2xl border border-[#E2E8F0] shadow-sm overflow-hidden" data-reveal="scale">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
              {/* Partner Portrait Photo: 5 Cols */}
              <div className="lg:col-span-5 relative h-80 lg:h-full min-h-[380px] bg-slate-100 border-b lg:border-b-0 lg:border-r border-[#E2E8F0] img-hover-zoom">
                <img
                  src={photos.partnerPortrait}
                  alt="CA Pradeep Kumar Sharma, Partner at PKNS & Associates"
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />
              </div>

              {/* Partner Profile Bio: 7 Cols */}
              <div className="lg:col-span-7 p-8 sm:p-12 text-left space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-50 text-[#D97706] text-xs font-bold uppercase tracking-wider border border-amber-200 tag-hover">
                  <Award size={14} className="icon-hover-rotate" />
                  <span>Leadership Profile</span>
                </div>

                <h2 className="section-title text-[#0F172A] accent-line-animated revealed">
                  CA Pradeep Kumar Sharma
                </h2>

                <p className="text-[14px] font-semibold text-[#D97706] uppercase tracking-wider">
                  Associate / Fellow Member, The Institute of Chartered Accountants of India (ICAI)
                </p>

                <p className="text-[16px] text-[#64748B] leading-relaxed">
                  As partner at PKNS & Associates, CA Pradeep Kumar Sharma oversees corporate and individual direct taxation, GST advisory, statutory audits, and real-estate certifications in Ghaziabad and the National Capital Region.
                </p>

                <p className="text-[14px] text-[#64748B] leading-relaxed">
                  Public professional records identify the firm's presence on critical project certification documentation, statutory attestations, and corporate reporting. Every engagement is executed with adherence to the ICAI Code of Ethics, confidentiality, and technical exactitude.
                </p>

                {/* Badges */}
                <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 text-[13px] text-[#1E293B]">
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-[#E2E8F0] flex items-start gap-2.5 tag-hover">
                    <MapPin size={16} className="text-[#D97706] shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-[#0F172A]">Chambers Location</strong>
                      <span className="text-[#64748B]">AVS City Square, Raj Nagar Extension</span>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-50 border border-[#E2E8F0] flex items-start gap-2.5 tag-hover">
                    <ShieldCheck size={16} className="text-[#D97706] shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-[#0F172A]">Professional Register</strong>
                      <span className="text-[#64748B]">ICAI Membership No. 531404</span>
                    </div>
                  </div>
                </div>

                {/* Consultation Trigger */}
                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <a
                    href={`${firmDetails.whatsappHref}?text=${encodeURIComponent(
                      'Hello CA Pradeep Kumar Sharma, I would like to schedule a conference at your Raj Nagar Extension chambers.'
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => trackAction('partner_whatsapp_click')}
                    className="btn-secondary"
                  >
                    <MessageCircle size={16} />
                    <span>Schedule In-Chambers Conference</span>
                  </a>

                  <button
                    onClick={() => onNavigate('about')}
                    className="btn-outline"
                  >
                    <span>Read Firm Philosophy</span>
                    <ChevronRight size={14} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. STRUCTURED 4-STAGE ENGAGEMENT JOURNEY */}
      <section className="py-20 md:py-24 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14" ref={processHeaderRef}>
            <span className="text-xs font-bold uppercase tracking-wider text-[#D97706]" data-reveal>
              Structured Methodology
            </span>
            <h2 className="section-title mt-2" data-reveal>
              From Inquiry to Certified Compliance
            </h2>
            <p className="text-[16px] text-[#64748B] mt-2" data-reveal>
              We eliminate ambiguity with a systematic, transparent workflow that respects statutory deadlines.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" ref={processGridRef}>
            {[
              {
                step: '01',
                title: 'Discovery & Requirement Scoping',
                desc: 'Initial conference via phone, WhatsApp, or in-office at AVS City Square to understand your transactions, entity type, and statutory mandates.',
              },
              {
                step: '02',
                title: 'Document Intake & Vetting',
                desc: 'Collection of required books, vouchers, 26AS/AIS records, or bank statements via encrypted, verified channels with strict confidentiality.',
              },
              {
                step: '03',
                title: 'Technical Computation & Review',
                desc: 'Thorough scrutiny under relevant tax sections or auditing standards with direct partner review to identify legitimate deductions and eliminate errors.',
              },
              {
                step: '04',
                title: 'Statutory Filing & Acknowledgement',
                desc: 'Submission on official government portals (Income Tax, GST, MCA, UP RERA) with UDIN generation and delivery of official filing acknowledgements.',
              },
            ].map((st) => (
              <div
                key={st.step}
                className="bg-[#F8FAFC] rounded-2xl border border-[#E2E8F0] p-6 sm:p-7 text-left flex flex-col justify-between group hover:border-[#D97706]/30 transition-colors duration-300"
                data-reveal-child
              >
                <div>
                  <div className="text-2xl font-black text-[#D97706] mb-3 font-sans step-number">
                    {st.step}
                  </div>
                  <h3 className="card-title text-[#0F172A] mb-2">
                    {st.title}
                  </h3>
                  <p className="text-[14px] text-[#64748B] leading-relaxed">
                    {st.desc}
                  </p>
                </div>
                <div className="mt-6 pt-3 border-t border-slate-200 flex items-center gap-1.5 text-[12px] font-semibold text-[#0F172A]">
                  <CheckCircle2 size={14} className="text-emerald-600" />
                  <span>Documented Milestones</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. REAL CLIENT ADVISORY SCENARIOS */}
      <section className="py-20 md:py-24 bg-[#F8FAFC] border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl text-left mb-12" ref={scenarioHeaderRef}>
            <span className="text-xs font-bold uppercase tracking-wider text-[#D97706]" data-reveal>
              Representative Case Scenarios
            </span>
            <h2 className="section-title mt-2" data-reveal>
              Practical Solutions for Ghaziabad & NCR Businesses
            </h2>
            <p className="text-[16px] text-[#64748B] mt-2" data-reveal>
              How our partner-led approach resolves real-world compliance and taxation obstacles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7" ref={scenarioGridRef}>
            {clientScenarios.map((cs, i) => (
              <div
                key={i}
                className="agency-card p-6 sm:p-7 text-left flex flex-col justify-between"
                data-reveal-child
              >
                <div className="space-y-3">
                  <span className="inline-block px-2.5 py-1 rounded-md bg-[#0F172A] text-white text-[11px] font-bold uppercase tracking-wider tag-hover">
                    {cs.type}
                  </span>
                  <h3 className="card-title text-[#0F172A]">
                    {cs.title}
                  </h3>
                  <div className="pt-2 text-[14px] text-[#64748B]">
                    <strong className="text-[#1E293B] block mb-1">Challenge:</strong>
                    <p className="leading-relaxed">{cs.situation}</p>
                  </div>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-100 text-[14px]">
                  <strong className="text-emerald-800 block mb-1 flex items-center gap-1 text-[13px]">
                    <CheckCircle2 size={14} className="text-emerald-600" />
                    <span>Resolution & Impact:</span>
                  </strong>
                  <p className="text-[#1E293B] leading-relaxed text-[13px]">{cs.outcome}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. QUICK CONSULTATION INQUIRY DESK */}
      <section className="py-20 md:py-24 bg-white relative overflow-hidden">
        {/* Decorative shapes */}
        <div className="deco-shape deco-shape-2" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={contactSectionRef}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Copy: 6 Cols */}
            <div className="lg:col-span-6 space-y-5 text-left" data-reveal="left">
              <span className="text-xs font-bold uppercase tracking-wider text-[#D97706]">
                Direct Engagement Desk
              </span>
              <h2 className="section-title text-[#0F172A] accent-line-animated revealed">
                Have an Income Tax, GST or Audit Requirement?
              </h2>
              <p className="text-[16px] text-[#64748B] leading-relaxed">
                Connect directly with our Raj Nagar Extension office. We will assess your documents and outline the exact statutory roadmap before any commitment.
              </p>

              <div className="space-y-3 pt-2 text-[14px] text-[#1E293B]">
                <div className="flex items-center gap-3 tag-hover rounded-xl p-2 -ml-2">
                  <div className="w-9 h-9 rounded-xl bg-slate-100 flex items-center justify-center text-[#D97706]">
                    <Phone size={16} />
                  </div>
                  <div>
                    <span className="text-[#64748B] block text-[11px] uppercase font-bold">Direct Phone</span>
                    <a href={firmDetails.phoneHref} className="text-[#0F172A] font-bold hover:underline">
                      {firmDetails.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 tag-hover rounded-xl p-2 -ml-2">
                  <div className="w-9 h-9 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600">
                    <MessageCircle size={16} />
                  </div>
                  <div>
                    <span className="text-[#64748B] block text-[11px] uppercase font-bold">Official WhatsApp</span>
                    <span className="text-[#0F172A] font-bold">+91 87506 72670</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 tag-hover rounded-xl p-2 -ml-2">
                  <div className="w-9 h-9 rounded-xl bg-slate-100 flex items-center justify-center text-[#D97706]">
                    <MapPin size={16} />
                  </div>
                  <div>
                    <span className="text-[#64748B] block text-[11px] uppercase font-bold">Chambers</span>
                    <span className="text-[#0F172A]">Unit 607 & 608, AVS City Square, Raj Nagar Extension</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Form: 6 Cols */}
            <div className="lg:col-span-6" data-reveal="right">
              <div className="bg-[#F8FAFC] border border-[#E2E8F0] p-6 sm:p-8 rounded-2xl shadow-sm text-left">
                <h3 className="card-title text-[#0F172A]">
                  Request a Professional Callback
                </h3>
                <p className="text-[13px] text-[#64748B] mt-1 mb-5">
                  Share brief details. We treat all submissions with complete client confidentiality.
                </p>

                {formSubmitted ? (
                  <div className="p-6 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-sm space-y-3 accordion-content">
                    <div className="flex items-center gap-2 font-bold text-emerald-800">
                      <CheckCircle2 size={18} className="text-emerald-600" />
                      <span>Thank you, {formName || 'Sir/Madam'}.</span>
                    </div>
                    <p className="text-xs text-emerald-800 leading-relaxed">
                      Your enquiry regarding <strong>{formService || 'Professional Services'}</strong> has been recorded. Our office will contact you on <strong>{formMobile}</strong> shortly.
                    </p>
                    <div className="pt-2">
                      <a
                        href={`${firmDetails.whatsappHref}?text=${encodeURIComponent(
                          `Hello PKNS & Associates, I submitted an enquiry for ${formService || 'General Consultancy'}. Name: ${formName}`
                        )}`}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 text-xs font-bold text-emerald-800 hover:underline"
                      >
                        <MessageCircle size={14} />
                        <span>Need faster response? Connect instantly on WhatsApp →</span>
                      </a>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleQuickFormSubmit} className="space-y-4">
                    <div>
                      <label className="block text-xs font-bold text-[#1E293B] mb-1">
                        Full Name / Business Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formName}
                        onChange={(e) => setFormName(e.target.value)}
                        placeholder="e.g. Rajesh Kumar / M/s ABC Enterprises"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#E2E8F0] text-sm focus:border-[#0F172A]"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-[#1E293B] mb-1">
                          Mobile Number *
                        </label>
                        <input
                          type="tel"
                          required
                          pattern="[0-9+ -]{10,15}"
                          value={formMobile}
                          onChange={(e) => setFormMobile(e.target.value)}
                          placeholder="10-digit mobile number"
                          className="w-full px-3.5 py-2.5 rounded-xl border border-[#E2E8F0] text-sm focus:border-[#0F172A]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-[#1E293B] mb-1">
                          Service Required *
                        </label>
                        <select
                          required
                          value={formService}
                          onChange={(e) => setFormService(e.target.value)}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-[#E2E8F0] text-sm focus:border-[#0F172A] bg-white"
                        >
                          <option value="">Select a discipline</option>
                          {practiceAreas.map((p) => (
                            <option key={p.id} value={p.title}>
                              {p.title}
                            </option>
                          ))}
                          <option value="General Consultation">Other / General Consultation</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#1E293B] mb-1">
                        Brief Requirement Note (Optional)
                      </label>
                      <textarea
                        rows={3}
                        value={formMessage}
                        onChange={(e) => setFormMessage(e.target.value)}
                        placeholder="e.g. Need ITR filing for FY 24-25 with capital gains, or GST notice clarification."
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#E2E8F0] text-sm focus:border-[#0F172A]"
                      />
                    </div>

                    <button
                      type="submit"
                      className="btn-primary w-full py-3"
                    >
                      <span>Submit Consultation Request</span>
                      <ArrowRight size={16} />
                    </button>

                    <p className="text-[12px] text-[#64748B] text-center pt-1">
                      Protected by ICAI client confidentiality · Zero spam policy.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
