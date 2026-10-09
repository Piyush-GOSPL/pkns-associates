import { useState } from 'react';
import {
  Calendar,
  Search,
  ChevronDown,
  AlertCircle,
  MessageCircle,
  Clock,
} from 'lucide-react';
import { firmDetails, photos, taxDeadlines, firmFaqs } from '../data/firmData';

interface CompliancePageProps {
  onNavigate: (view: string) => void;
}

export default function CompliancePage({ onNavigate }: CompliancePageProps) {
  const [calendarFilter, setCalendarFilter] = useState<string>('all');
  const [faqSearch, setFaqSearch] = useState<string>('');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const trackAction = (eventName: string) => {
    window.dispatchEvent(new CustomEvent('lead_event', { detail: eventName }));
  };

  const filteredDeadlines =
    calendarFilter === 'all'
      ? taxDeadlines
      : taxDeadlines.filter((td) => td.category.toLowerCase().includes(calendarFilter.toLowerCase()));

  const filteredFaqs = firmFaqs.filter(
    (f) =>
      f.q.toLowerCase().includes(faqSearch.toLowerCase()) ||
      f.a.toLowerCase().includes(faqSearch.toLowerCase())
  );

  return (
    <div className="w-full">
      {/* 1. UNIQUE HERO: Legal & Compliance Research Photographic Banner */}
      <section className="relative bg-[#0F172A] text-white py-16 md:py-24 overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 z-0">
          <img
            src={photos.complianceHero}
            alt="Statutory legal and tax research library"
            className="w-full h-full object-cover object-center opacity-20 filter grayscale contrast-125"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A] via-[#0F172A]/90 to-[#0F172A]/80" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/10 text-amber-300 text-xs font-bold uppercase tracking-wider border border-white/10">
              <Calendar size={14} className="text-[#D97706]" />
              <span>Compliance Knowledge Desk · PKNS & Associates</span>
            </div>

            <h1 className="hero-title text-white">
              Indian Statutory Calendar & Client Knowledge Hub
            </h1>

            <p className="text-[17px] text-slate-300 leading-relaxed font-normal">
              Stay ahead of mandatory regulatory due dates under the Income Tax Act, Goods & Services Tax (GST), and MCA frameworks to avoid punitive interest, late fees, and scrutiny notices.
            </p>
          </div>
        </div>
      </section>

      {/* 2. INTERACTIVE STATUTORY COMPLIANCE CALENDAR */}
      <section className="py-20 md:py-24 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6 text-left">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#D97706]">
                Statutory Due Dates
              </span>
              <h2 className="section-title text-[#0F172A] mt-1">
                Mandatory Indian Tax Compliance Deadlines
              </h2>
              <p className="text-[15px] text-[#64748B] mt-2">
                Critical recurring due dates for taxpayers, LLPs, companies, and registered business entities.
              </p>
            </div>

            {/* Calendar Filter Pills */}
            <div className="flex flex-wrap gap-2">
              {[
                { id: 'all', label: 'All Dates' },
                { id: 'income tax', label: 'Income Tax' },
                { id: 'gst', label: 'GST' },
                { id: 'tds', label: 'TDS' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => {
                    setCalendarFilter(tab.id);
                    trackAction(`calendar_filter_${tab.id}`);
                  }}
                  className={`px-3.5 py-1.5 rounded-xl text-[13px] font-semibold transition ${
                    calendarFilter === tab.id
                      ? 'bg-[#0F172A] text-white shadow-sm'
                      : 'bg-[#F8FAFC] text-[#1E293B] hover:bg-slate-200 border border-[#E2E8F0]'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Calendar Grid: Clean cards with 14px radius */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredDeadlines.map((td, idx) => (
              <div
                key={idx}
                className="agency-card p-6 flex flex-col justify-between text-left"
              >
                <div>
                  {/* Date Badge */}
                  <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                    <span className="text-[12px] font-semibold text-[#D97706] bg-amber-50 px-2 py-0.5 rounded-md border border-amber-200">
                      {td.category}
                    </span>
                    <span
                      className={`text-[11px] font-bold px-2 py-0.5 rounded ${
                        td.importance === 'Crucial'
                          ? 'bg-rose-50 text-rose-700 border border-rose-200'
                          : td.importance === 'High'
                          ? 'bg-amber-50 text-amber-700 border border-amber-200'
                          : 'bg-slate-100 text-slate-600'
                      }`}
                    >
                      {td.importance}
                    </span>
                  </div>

                  <div className="pt-3">
                    <div className="text-3xl font-extrabold text-[#0F172A] font-sans">
                      {td.day}
                    </div>
                    <div className="text-[12px] font-semibold text-[#64748B] mb-2">
                      {td.monthOrFreq}
                    </div>

                    <h3 className="card-title text-[#0F172A] mb-2">
                      {td.title}
                    </h3>
                    <p className="text-[14px] text-[#64748B] leading-relaxed font-normal">
                      {td.description}
                    </p>
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-100 text-[12px] text-[#64748B] flex items-center gap-1.5">
                  <Clock size={13} className="text-[#D97706]" />
                  <span>Proactive filing prevents late interest</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] flex flex-col sm:flex-row items-center justify-between text-[14px] text-[#64748B] gap-3 text-left">
            <span className="flex items-center gap-2">
              <AlertCircle size={16} className="text-amber-600 shrink-0" />
              <span>
                Need assistance ensuring timely compliance before an impending deadline? Connect with our Raj Nagar Extension office.
              </span>
            </span>
            <a
              href={`${firmDetails.whatsappHref}?text=${encodeURIComponent(
                'Hello PKNS & Associates, I need assistance with an upcoming statutory filing deadline.'
              )}`}
              target="_blank"
              rel="noreferrer"
              className="font-bold text-emerald-700 hover:underline shrink-0"
            >
              Verify Your Deadline on WhatsApp →
            </a>
          </div>
        </div>
      </section>

      {/* 3. SEARCHABLE FAQ ACCORDION */}
      <section className="py-20 md:py-24 bg-[#F8FAFC] border-b border-[#E2E8F0]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#D97706]">
              Frequently Asked Questions
            </span>
            <h2 className="section-title text-[#0F172A] mt-1">
              Clear Answers Before You Engage
            </h2>
            <p className="text-[16px] text-[#64748B] mt-2">
              Transparency in qualifications, location, fee structure, and document handling.
            </p>

            {/* Live FAQ Search Input */}
            <div className="mt-6 max-w-md mx-auto relative">
              <Search size={16} className="absolute left-3.5 top-3.5 text-slate-400" />
              <input
                type="text"
                value={faqSearch}
                onChange={(e) => setFaqSearch(e.target.value)}
                placeholder="Search FAQs (e.g. fees, GST, office, scrutiny)..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[#E2E8F0] text-sm focus:border-[#0F172A] shadow-sm bg-white"
              />
            </div>
          </div>

          {/* Accordion List */}
          <div className="divide-y divide-[#E2E8F0] rounded-2xl border border-[#E2E8F0] bg-white overflow-hidden shadow-sm">
            {filteredFaqs.length === 0 ? (
              <div className="p-8 text-center text-[#64748B] text-sm">
                No matching questions found for "{faqSearch}". Contact the firm directly via WhatsApp or phone.
              </div>
            ) : (
              filteredFaqs.map((faq, index) => {
                const isOpen = openFaqIndex === index;
                return (
                  <div key={index} className="transition-colors">
                    <button
                      onClick={() => {
                        setOpenFaqIndex(isOpen ? null : index);
                        trackAction(`faq_toggle_${index}`);
                      }}
                      className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 focus:outline-none hover:bg-slate-50 transition"
                      aria-expanded={isOpen}
                    >
                      <span className="card-title text-[#0F172A] text-[16px] sm:text-[18px]">
                        {faq.q}
                      </span>
                      <ChevronDown
                        size={18}
                        className={`text-slate-400 shrink-0 transition-transform duration-200 ${
                          isOpen ? 'rotate-180 text-[#D97706]' : ''
                        }`}
                      />
                    </button>

                    {isOpen && (
                      <div className="px-5 sm:px-6 pb-6 pt-1 text-[15px] text-[#64748B] leading-relaxed text-left border-t border-slate-100 bg-[#F8FAFC]/50 animate-fadeIn font-normal">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })
            )}
          </div>

          {/* Still Have Questions Box */}
          <div className="mt-10 p-6 rounded-2xl bg-white border border-[#E2E8F0] flex flex-col sm:flex-row items-center justify-between gap-4 text-left shadow-sm">
            <div>
              <h3 className="card-title text-[#0F172A]">
                Have a specific tax notice or unique transaction?
              </h3>
              <p className="text-[14px] text-[#64748B] mt-0.5">
                Speak directly with CA Pradeep Kumar Sharma for confidential counsel.
              </p>
            </div>

            <a
              href={`${firmDetails.whatsappHref}?text=${encodeURIComponent(
                'Hello CA Pradeep Kumar Sharma, I have a specific tax query not listed in the FAQ.'
              )}`}
              target="_blank"
              rel="noreferrer"
              onClick={() => trackAction('faq_ask_whatsapp')}
              className="btn-secondary py-2.5 px-4 text-[14px] shrink-0"
            >
              <MessageCircle size={15} />
              <span>Ask on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
