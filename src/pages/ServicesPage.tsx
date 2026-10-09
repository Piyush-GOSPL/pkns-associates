import { useState } from 'react';
import {
  FileText,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  MessageCircle,
  Copy,
  Check,
  FolderOpen,
} from 'lucide-react';
import { firmDetails, photos, practiceAreas, PracticeArea } from '../data/firmData';
import { useScrollReveal, useStaggerReveal } from '../hooks/useScrollReveal';

interface ServicesPageProps {
  onNavigate: (view: string) => void;
  selectedServiceId?: string;
}

export default function ServicesPage({ onNavigate, selectedServiceId }: ServicesPageProps) {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [expandedDocService, setExpandedDocService] = useState<string | null>(
    selectedServiceId || null
  );
  const [selectedChecklistService, setSelectedChecklistService] = useState<PracticeArea>(
    practiceAreas[0]
  );
  const [copiedChecklist, setCopiedChecklist] = useState(false);

  // Animation refs
  const practiceGridRef = useStaggerReveal<HTMLDivElement>();
  const checklistRef = useScrollReveal<HTMLDivElement>();
  const ctaRef = useScrollReveal<HTMLDivElement>();

  const categories = [
    { id: 'all', label: 'All Practices' },
    { id: 'direct-tax', label: 'Direct Taxation & ITR' },
    { id: 'indirect-tax', label: 'GST & Indirect Tax' },
    { id: 'audit', label: 'Audit & Assurance' },
    { id: 'corporate', label: 'Corporate & ROC' },
    { id: 'advisory', label: 'Advisory & Certificates' },
    { id: 'rera', label: 'RERA Certification' },
  ];

  const filteredPractices =
    activeCategory === 'all'
      ? practiceAreas
      : practiceAreas.filter((p) => p.category === activeCategory);

  const trackAction = (eventName: string) => {
    window.dispatchEvent(new CustomEvent('lead_event', { detail: eventName }));
  };

  const handleCopyChecklist = () => {
    const text = `Document Checklist for ${selectedChecklistService.title} (PKNS & Associates):\n` +
      selectedChecklistService.documentsNeeded.map((d, i) => `${i + 1}. ${d}`).join('\n') +
      `\n\nOffice: Unit 607 & 608, AVS City Square, Raj Nagar Extension, Ghaziabad\nPhone: +91 87506 72670`;
    navigator.clipboard.writeText(text);
    setCopiedChecklist(true);
    setTimeout(() => setCopiedChecklist(false), 2500);
  };

  return (
    <div className="w-full">
      {/* 1. UNIQUE HERO: Editorial Navy Banner with Authentic Ledger Imagery */}
      <section className="relative bg-[#0F172A] text-white py-16 md:py-24 overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 z-0">
          <img
            src={photos.servicesHero}
            alt="Chartered accountant auditing ledger books and financial statements"
            className="w-full h-full object-cover object-center opacity-20 filter grayscale contrast-125"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A] via-[#0F172A]/90 to-[#0F172A]/80" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
          <div className="max-w-3xl space-y-4">
            <div className="animate-hero-eyebrow inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/10 text-amber-300 text-xs font-bold uppercase tracking-wider border border-white/10">
              <FileText size={14} className="text-[#D97706]" />
              <span>Practice Disciplines · PKNS & Associates</span>
            </div>

            <h1 className="hero-title text-white animate-hero-title">
              Comprehensive Practice Disciplines & Statutory Scope
            </h1>

            <p className="text-[17px] text-slate-300 leading-relaxed font-normal animate-hero-subtitle">
              Every engagement is led by qualified Chartered Accountants adhering to the standards of the Institute of Chartered Accountants of India (ICAI), the Income Tax Act, 1961, CGST Act, 2017, and the Companies Act, 2013.
            </p>
          </div>

          {/* Category Filter Pills: 12px radii, clean agency styling */}
          <div className="mt-8 flex flex-wrap gap-2 pt-2 animate-hero-cta">
            {categories.map((cat) => {
              const active = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => {
                    setActiveCategory(cat.id);
                    trackAction(`filter_category_${cat.id}`);
                  }}
                  className={`px-4 py-2 rounded-xl text-[13px] font-semibold transition-all duration-300 ${
                    active
                      ? 'bg-[#D97706] text-white shadow-sm scale-105'
                      : 'bg-white/10 text-slate-300 hover:bg-white/15 hover:text-white border border-white/10 hover:scale-105'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* 2. PRACTICE AREAS DETAILED GRID */}
      <section className="py-20 md:py-24 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-left mb-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h2 className="section-title text-[#0F172A]">
                {activeCategory === 'all'
                  ? 'Complete Suite of Professional Disciplines'
                  : categories.find((c) => c.id === activeCategory)?.label}
              </h2>
              <p className="text-[14px] text-[#64748B] mt-1">
                Showing {filteredPractices.length} professional practice area{filteredPractices.length > 1 ? 's' : ''}.
              </p>
            </div>

            <button
              onClick={() => onNavigate('contact')}
              className="text-[14px] font-semibold text-[#0F172A] hover:text-[#D97706] self-start sm:self-auto flex items-center gap-1.5 link-hover-underline"
            >
              <span>Need bespoke engagement scope? Contact Office →</span>
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-7" ref={practiceGridRef}>
            {filteredPractices.map((pa) => {
              const isDocOpen = expandedDocService === pa.id;
              return (
                <article
                  key={pa.id}
                  id={pa.id}
                  className="agency-card p-6 sm:p-8 text-left flex flex-col justify-between"
                  data-reveal-child
                >
                  <div className="space-y-4">
                    {/* Top Meta Header */}
                    <div className="flex items-center justify-between gap-3 flex-wrap">
                      <span className="px-3 py-1 rounded-md bg-[#0F172A] text-white font-bold text-[11px] uppercase tracking-wider tag-hover">
                        {pa.categoryLabel}
                      </span>
                      <span className="text-[12px] font-semibold text-[#D97706] bg-amber-50 px-2.5 py-1 rounded-md border border-amber-200 tag-hover">
                        {pa.statutoryAct}
                      </span>
                    </div>

                    <h3 className="card-title text-[#0F172A]">
                      {pa.title}
                    </h3>

                    <p className="text-[15px] text-[#64748B] leading-relaxed font-normal">
                      {pa.description}
                    </p>

                    {/* Key Deliverables Block */}
                    <div className="pt-2">
                      <h4 className="text-[12px] font-bold text-[#0F172A] uppercase tracking-wider mb-2">
                        Key Statutory Deliverables:
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[13px]">
                        {pa.keyDeliverables.map((kd, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-[#1E293B] bg-slate-50 p-2.5 rounded-lg border border-[#E2E8F0] tag-hover">
                            <CheckCircle2 size={15} className="text-emerald-600 shrink-0 mt-0.5" />
                            <span className="font-medium">{kd}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Scope Items */}
                    <div className="pt-2">
                      <h4 className="text-[12px] font-bold text-[#0F172A] uppercase tracking-wider mb-2">
                        Scope of Engagement:
                      </h4>
                      <ul className="space-y-1.5 text-[14px] text-[#64748B]">
                        {pa.scopeItems.map((si, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#D97706] mt-2 shrink-0" />
                            <span>{si}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Collapsible Documents Needed Checklist */}
                    <div className="pt-2">
                      <button
                        onClick={() => setExpandedDocService(isDocOpen ? null : pa.id)}
                        className="w-full flex items-center justify-between text-[13px] font-semibold text-[#0F172A] bg-slate-100 hover:bg-slate-200/80 p-3 rounded-xl transition"
                      >
                        <span className="flex items-center gap-2">
                          <FolderOpen size={16} className="text-[#D97706] icon-hover-rotate" />
                          <span>Required Documents Checklist ({pa.documentsNeeded.length} items)</span>
                        </span>
                        {isDocOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                      </button>

                      {isDocOpen && (
                        <div className="mt-2 p-4 bg-white rounded-xl border border-[#E2E8F0] text-[13px] text-[#1E293B] space-y-2 accordion-content">
                          <p className="font-semibold text-[#0F172A] pb-1 border-b border-slate-100">
                            Please prepare the following before the consultation:
                          </p>
                          <ul className="space-y-1.5">
                            {pa.documentsNeeded.map((doc, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <span className="font-bold text-[#D97706]">{idx + 1}.</span>
                                <span>{doc}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Card Bottom CTA Strip */}
                  <div className="mt-6 pt-5 border-t border-[#E2E8F0] flex flex-wrap items-center justify-between gap-3">
                    <a
                      href={`${firmDetails.whatsappHref}?text=${encodeURIComponent(
                        `Hello CA Pradeep Kumar Sharma, I would like to discuss an engagement for: ${pa.title}.`
                      )}`}
                      target="_blank"
                      rel="noreferrer"
                      onClick={() => trackAction(`services_page_${pa.id}_whatsapp`)}
                      className="btn-secondary py-2 px-3.5 text-[13px]"
                    >
                      <MessageCircle size={15} />
                      <span>Discuss on WhatsApp</span>
                    </a>

                    <button
                      onClick={() => onNavigate('contact')}
                      className="btn-outline py-2 px-3.5 text-[13px]"
                    >
                      <span>Book Consultation</span>
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. INTERACTIVE PRE-MEETING DOCUMENT CHECKLIST ASSISTANT */}
      <section id="checklist-generator" className="py-20 md:py-24 bg-[#F8FAFC] border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={checklistRef}>
          <div className="max-w-3xl text-left mb-10" data-reveal>
            <span className="text-xs font-bold uppercase tracking-wider text-[#D97706]">
              Client Efficiency Tool
            </span>
            <h2 className="section-title mt-1 accent-line-animated">
              Pre-Meeting Document Checklist Assistant
            </h2>
            <p className="text-[16px] text-[#64748B] mt-2">
              Select your required engagement to view the mandatory records to bring to our Raj Nagar Extension chambers or share via secure channels.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-[#E2E8F0] p-6 sm:p-8 shadow-sm" data-reveal="scale">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Selector: 5 Cols */}
              <div className="lg:col-span-5 text-left space-y-3">
                <label className="block text-xs font-bold text-[#0F172A] uppercase tracking-wider">
                  Select Engagement Discipline:
                </label>
                <div className="space-y-1.5">
                  {practiceAreas.map((p) => {
                    const isSelected = selectedChecklistService.id === p.id;
                    return (
                      <button
                        key={p.id}
                        onClick={() => {
                          setSelectedChecklistService(p);
                          setCopiedChecklist(false);
                        }}
                        className={`w-full text-left p-3 rounded-xl text-[13px] font-semibold transition-all duration-300 flex items-center justify-between ${
                          isSelected
                            ? 'bg-[#0F172A] text-white shadow-sm scale-[1.02]'
                            : 'bg-slate-50 hover:bg-slate-100 text-[#1E293B] border border-[#E2E8F0] hover:scale-[1.01]'
                        }`}
                      >
                        <span className="truncate">{p.title}</span>
                        <span className={`text-[10px] px-2 py-0.5 rounded font-bold ${
                          isSelected ? 'bg-[#D97706] text-white' : 'bg-white text-[#64748B]'
                        }`}>
                          {p.categoryLabel}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Right Checklist Display: 7 Cols */}
              <div className="lg:col-span-7 bg-[#F8FAFC] rounded-xl border border-[#E2E8F0] p-6 sm:p-7 text-left">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[#E2E8F0] gap-3">
                  <div>
                    <h3 className="card-title text-[#0F172A]">
                      {selectedChecklistService.title} Checklist
                    </h3>
                    <div className="text-[13px] text-[#D97706] font-semibold mt-0.5">
                      Statutory Framework: {selectedChecklistService.statutoryAct}
                    </div>
                  </div>

                  <button
                    onClick={handleCopyChecklist}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white hover:bg-slate-100 text-[#1E293B] text-[13px] font-semibold transition border border-[#E2E8F0] self-start sm:self-auto"
                  >
                    {copiedChecklist ? <Check size={14} className="text-emerald-600" /> : <Copy size={14} />}
                    <span>{copiedChecklist ? 'Checklist Copied!' : 'Copy Checklist'}</span>
                  </button>
                </div>

                <div className="py-4 space-y-3">
                  <p className="text-[14px] font-semibold text-[#0F172A]">
                    Required records for verification & statutory computation:
                  </p>
                  <div className="space-y-2">
                    {selectedChecklistService.documentsNeeded.map((doc, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-3 p-3 rounded-lg bg-white border border-[#E2E8F0] text-[14px] text-[#1E293B] tag-hover"
                        style={{ animationDelay: `${i * 80}ms` }}
                      >
                        <span className="w-5 h-5 rounded-full bg-[#0F172A] text-white flex items-center justify-center font-bold text-[11px] shrink-0">
                          {i + 1}
                        </span>
                        <span className="font-medium">{doc}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-[#E2E8F0] flex flex-wrap items-center justify-between gap-3">
                  <span className="text-[12px] text-[#64748B]">
                    Documents are safeguarded under ICAI confidentiality rules.
                  </span>

                  <a
                    href={`${firmDetails.whatsappHref}?text=${encodeURIComponent(
                      `Hello PKNS & Associates, I am preparing documents for ${selectedChecklistService.title} and have a quick query.`
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-[13px] font-bold text-emerald-700 hover:underline"
                  >
                    <MessageCircle size={15} />
                    <span>Send Documents on WhatsApp →</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. ASSURANCE BAND */}
      <section className="py-14 bg-[#0F172A] text-white" ref={ctaRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6" data-reveal="fade">
          <div className="space-y-1">
            <h3 className="section-title text-white">
              Ready to Discuss Your Specific Requirement?
            </h3>
            <p className="text-[15px] text-slate-300">
              Speak directly with CA Pradeep Kumar Sharma or visit our chambers at AVS City Square.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={firmDetails.phoneHref}
              className="btn-outline text-slate-900"
            >
              Call {firmDetails.phone}
            </a>

            <button
              onClick={() => onNavigate('contact')}
              className="btn-secondary"
            >
              Book In-Office Conference
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
