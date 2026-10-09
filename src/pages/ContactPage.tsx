import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  Copy,
  Check,
  Navigation,
  ShieldCheck,
  CheckCircle2,
} from 'lucide-react';
import { firmDetails, photos, practiceAreas } from '../data/firmData';

export default function ContactPage() {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [service, setService] = useState('');
  const [mode, setMode] = useState('In-Office Conference');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [copiedAddress, setCopiedAddress] = useState(false);

  const trackAction = (eventName: string) => {
    window.dispatchEvent(new CustomEvent('lead_event', { detail: eventName }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    trackAction('contact_page_form_submit');
    setSubmitted(true);
  };

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(firmDetails.address.full);
    setCopiedAddress(true);
    setTimeout(() => setCopiedAddress(false), 2500);
  };

  return (
    <div className="w-full">
      {/* 1. UNIQUE HERO: Commercial Architectural Photographic Banner */}
      <section className="relative bg-[#0F172A] text-white py-16 md:py-24 overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 z-0">
          <img
            src={photos.contactHero}
            alt="Modern commercial corporate tower in Raj Nagar Extension"
            className="w-full h-full object-cover object-center opacity-20 filter grayscale contrast-125"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A] via-[#0F172A]/90 to-[#0F172A]/80" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/10 text-amber-300 text-xs font-bold uppercase tracking-wider border border-white/10">
              <MapPin size={14} className="text-[#D97706]" />
              <span>Chambers & Consultation Desk</span>
            </div>

            <h1 className="hero-title text-white">
              Visit Our Raj Nagar Extension Chambers or Connect Digitally
            </h1>

            <p className="text-[17px] text-slate-300 leading-relaxed font-normal">
              We welcome prospective and existing clients for in-person conferences at AVS City Square. Prior appointments are recommended to ensure relevant partner availability and file preparation.
            </p>
          </div>
        </div>
      </section>

      {/* 2. DIRECT CONTACT CHANNELS STRIP */}
      <section className="bg-white border-b border-[#E2E8F0] py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            {/* Phone */}
            <div className="p-5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-white border border-[#E2E8F0] text-[#0F172A] flex items-center justify-center shrink-0 shadow-sm">
                <Phone size={18} className="text-[#D97706]" />
              </div>
              <div>
                <span className="text-[11px] font-bold text-[#64748B] uppercase tracking-wider block">
                  Direct Telephone
                </span>
                <a
                  href={firmDetails.phoneHref}
                  onClick={() => trackAction('contact_card_phone_click')}
                  className="font-bold text-[#0F172A] text-sm hover:text-[#D97706] transition block mt-0.5"
                >
                  {firmDetails.phone}
                </a>
                <span className="text-[11px] text-[#64748B]">Direct Partner Desk</span>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="p-5 rounded-xl bg-emerald-50/50 border border-emerald-200/80 flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-sm">
                <MessageCircle size={18} />
              </div>
              <div>
                <span className="text-[11px] font-bold text-emerald-800 uppercase tracking-wider block">
                  Official WhatsApp
                </span>
                <a
                  href={`${firmDetails.whatsappHref}?text=${encodeURIComponent(
                    'Hello PKNS & Associates, I would like to initiate an enquiry.'
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => trackAction('contact_card_whatsapp_click')}
                  className="font-bold text-emerald-900 text-sm hover:underline block mt-0.5"
                >
                  +91 87506 72670
                </a>
                <span className="text-[11px] text-emerald-700">Quick Document Exchange</span>
              </div>
            </div>

            {/* Email */}
            <div className="p-5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-white border border-[#E2E8F0] text-[#0F172A] flex items-center justify-center shrink-0 shadow-sm">
                <Mail size={18} className="text-[#D97706]" />
              </div>
              <div>
                <span className="text-[11px] font-bold text-[#64748B] uppercase tracking-wider block">
                  Official Email
                </span>
                <a
                  href={firmDetails.emailHref}
                  className="font-bold text-[#0F172A] text-xs sm:text-sm hover:text-[#D97706] transition block mt-0.5 break-all"
                >
                  {firmDetails.email}
                </a>
                <span className="text-[11px] text-[#64748B]">Formal Correspondence</span>
              </div>
            </div>

            {/* Operating Hours */}
            <div className="p-5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-white border border-[#E2E8F0] text-[#0F172A] flex items-center justify-center shrink-0 shadow-sm">
                <Clock size={18} className="text-[#D97706]" />
              </div>
              <div>
                <span className="text-[11px] font-bold text-[#64748B] uppercase tracking-wider block">
                  Chambers Hours
                </span>
                <div className="font-bold text-[#0F172A] text-xs mt-0.5">
                  Mon – Sat: 10:00 AM – 7:30 PM
                </div>
                <span className="text-[11px] text-[#64748B]">Sunday by Prior Appointment</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CONSULTATION FORM & OFFICE LANDMARKS GUIDE */}
      <section className="py-20 md:py-24 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: 7 Cols Consultation Form */}
            <div className="lg:col-span-7 bg-white rounded-2xl border border-[#E2E8F0] p-7 sm:p-10 shadow-sm text-left">
              <span className="text-xs font-bold uppercase tracking-wider text-[#D97706]">
                Confidential Inquiry
              </span>
              <h2 className="section-title text-[#0F172A] mt-1">
                Schedule a Professional Conference
              </h2>
              <p className="text-[15px] text-[#64748B] mt-2 mb-6">
                Submit your requirement. We review submissions promptly and communicate the required documentation before your visit.
              </p>

              {submitted ? (
                <div className="p-6 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-sm space-y-3">
                  <div className="flex items-center gap-2 font-bold text-emerald-800">
                    <CheckCircle2 size={20} className="text-emerald-600" />
                    <span>Inquiry Received Successfully</span>
                  </div>
                  <p className="text-xs text-emerald-800 leading-relaxed">
                    Thank you, <strong>{name}</strong>. Your request for <strong>{service || 'General Scoping'}</strong> via <strong>{mode}</strong> has been logged. Our office will reach out to you on <strong>{mobile}</strong> shortly.
                  </p>
                  <div className="pt-3 border-t border-emerald-200">
                    <a
                      href={`${firmDetails.whatsappHref}?text=${encodeURIComponent(
                        `Hello PKNS & Associates, I submitted a consultation form for ${service || 'Chartered Accountancy Service'}. Name: ${name}`
                      )}`}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-bold text-emerald-800 hover:underline"
                    >
                      <MessageCircle size={15} />
                      <span>Prefer instant coordination? Message CA Office on WhatsApp →</span>
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#1E293B] mb-1">
                        Full Name / Business Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Anand Verma / ABC Builders"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#E2E8F0] text-sm focus:border-[#0F172A]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#1E293B] mb-1">
                        Mobile Number *
                      </label>
                      <input
                        type="tel"
                        required
                        pattern="[0-9+ -]{10,15}"
                        value={mobile}
                        onChange={(e) => setMobile(e.target.value)}
                        placeholder="10-digit mobile number"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#E2E8F0] text-sm focus:border-[#0F172A]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#1E293B] mb-1">
                        Email Address (Optional)
                      </label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="e.g. anand@example.com"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#E2E8F0] text-sm focus:border-[#0F172A]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#1E293B] mb-1">
                        Service Discipline *
                      </label>
                      <select
                        required
                        value={service}
                        onChange={(e) => setService(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#E2E8F0] text-sm focus:border-[#0F172A] bg-white"
                      >
                        <option value="">Select a discipline</option>
                        {practiceAreas.map((p) => (
                          <option key={p.id} value={p.title}>
                            {p.title}
                          </option>
                        ))}
                        <option value="Notice Reply / Scrutiny">Notice Reply / Department Scrutiny</option>
                        <option value="General Consultation">Other / General Advisory</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#1E293B] mb-1">
                      Preferred Mode of Consultation
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                      {[
                        'In-Office Conference',
                        'Telephone Consultation',
                        'WhatsApp Exchange',
                      ].map((m) => (
                        <button
                          key={m}
                          type="button"
                          onClick={() => setMode(m)}
                          className={`p-2.5 rounded-xl text-xs font-semibold border transition ${
                            mode === m
                              ? 'bg-[#0F172A] text-white border-[#0F172A]'
                              : 'bg-white text-[#1E293B] border-[#E2E8F0] hover:bg-slate-50'
                          }`}
                        >
                          {m}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#1E293B] mb-1">
                      Brief Description of Requirement / Financial Year
                    </label>
                    <textarea
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Please mention transaction nature, entity structure (Proprietorship / LLP / Pvt Ltd), or specific notices received."
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#E2E8F0] text-sm focus:border-[#0F172A]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-primary w-full py-3"
                  >
                    <span>Submit Consultation Request</span>
                  </button>

                  <div className="flex items-center justify-center gap-2 text-[12px] text-[#64748B] pt-1">
                    <ShieldCheck size={14} className="text-[#D97706]" />
                    <span>Protected by ICAI client confidentiality guidelines. Zero spam.</span>
                  </div>
                </form>
              )}
            </div>

            {/* Right Column: 5 Cols Office Location & Landmark Guide */}
            <div className="lg:col-span-5 space-y-6 text-left">
              <div className="bg-white rounded-2xl border border-[#E2E8F0] p-7 shadow-sm space-y-5">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#D97706]">
                    Chambers Location
                  </span>
                  <h3 className="card-title text-[#0F172A] mt-1">
                    AVS City Square, Raj Nagar Extension
                  </h3>
                </div>

                <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-[13px] text-[#1E293B] space-y-2">
                  <p className="font-bold text-[#0F172A] text-[14px]">
                    {firmDetails.address.unit}
                  </p>
                  <p>{firmDetails.address.area}</p>
                  <p>{firmDetails.address.city}, {firmDetails.address.state} – {firmDetails.address.pincode}</p>
                  <p className="text-[12px] text-[#64748B] pt-1 border-t border-slate-200">
                    Lead Partner: <strong>{firmDetails.leadPartner}</strong> (ICAI M.No. {firmDetails.membershipNo})
                  </p>
                </div>

                {/* Copy Address Button */}
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={handleCopyAddress}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-[#1E293B] text-xs font-bold transition border border-[#E2E8F0]"
                  >
                    {copiedAddress ? <Check size={14} className="text-emerald-600" /> : <Copy size={14} />}
                    <span>{copiedAddress ? 'Address Copied!' : 'Copy Full Address'}</span>
                  </button>

                  <a
                    href={firmDetails.googleMapsUrl}
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => trackAction('contact_google_maps_click')}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl bg-[#0F172A] hover:bg-[#1E293B] text-white text-xs font-bold transition"
                  >
                    <Navigation size={14} className="text-[#D97706]" />
                    <span>Get Directions</span>
                  </a>
                </div>

                {/* Landmark Details */}
                <div className="pt-2 border-t border-slate-100 space-y-2.5 text-[13px] text-[#64748B]">
                  <h4 className="font-bold text-[#0F172A] uppercase tracking-wider text-[11px]">
                    Landmark Guide & Connectivity:
                  </h4>
                  <p className="leading-relaxed">
                    <strong>Primary Landmark:</strong> Located at <em>Gulmohar Chauraha</em>, right next to <em>Shiv Mandir</em> in Raj Nagar Extension.
                  </p>
                  <p className="leading-relaxed">
                    <strong>Road Connectivity:</strong> Seamless access via NH-58, Meerut Road, and Mohan Nagar.
                  </p>
                  <p className="leading-relaxed">
                    <strong>Transit Access:</strong> Conveniently accessible from the Namo Bharat / RRTS Ghaziabad Corridor.
                  </p>
                </div>
              </div>

              {/* Direct Partner Accessibility Card */}
              <div className="bg-[#0F172A] text-white rounded-2xl p-6 border border-slate-800 space-y-2">
                <div className="text-xs font-bold text-[#D97706] uppercase tracking-wider">
                  Important Prior Notice
                </div>
                <h4 className="card-title text-white">
                  Planning an In-Person Visit?
                </h4>
                <p className="text-[14px] text-slate-300 leading-relaxed font-normal">
                  To ensure that CA Pradeep Kumar Sharma is not committed in scheduled statutory hearings or audits, please send a brief WhatsApp or call <strong>{firmDetails.phone}</strong> prior to departure.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
