import { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ShieldCheck,
  Check,
  Copy,
  ExternalLink,
  MessageCircle,
} from 'lucide-react';
import { firmDetails, practiceAreas } from '../data/firmData';

interface FooterProps {
  onNavigate: (view: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const [copied, setCopied] = useState(false);

  const copyAddress = () => {
    navigator.clipboard.writeText(firmDetails.address.full);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const trackAction = (eventName: string) => {
    window.dispatchEvent(new CustomEvent('lead_event', { detail: eventName }));
  };

  return (
    <footer className="bg-[#0F172A] text-slate-300 pt-16 pb-24 md:pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-slate-800">
          {/* Col 1: Firm Overview (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center">
                <span className="font-extrabold text-white text-base font-sans">PK</span>
              </div>
              <div>
                <div className="font-extrabold text-white text-lg tracking-tight font-sans">
                  PKNS & ASSOCIATES
                </div>
                <div className="text-xs font-semibold text-[#D97706] uppercase tracking-wider">
                  Chartered Accountants
                </div>
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Professional accounting, taxation, statutory audit, and compliance counsel led by{' '}
              <strong className="text-white font-medium">{firmDetails.leadPartner}</strong> (ICAI Membership No.{' '}
              {firmDetails.membershipNo}) in Raj Nagar Extension, Ghaziabad.
            </p>

            <div className="pt-1">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-amber-300">
                <ShieldCheck size={14} className="text-[#D97706]" />
                <span>ICAI Member: 531404 · Ethical Practice</span>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={firmDetails.phoneHref}
                onClick={() => trackAction('footer_phone_click')}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-semibold transition"
              >
                <Phone size={13} className="text-[#D97706]" />
                <span>{firmDetails.phone}</span>
              </a>

              <a
                href={`${firmDetails.whatsappHref}?text=${encodeURIComponent(
                  'Hello PKNS & Associates, I would like to enquire about professional services.'
                )}`}
                target="_blank"
                rel="noreferrer"
                onClick={() => trackAction('footer_whatsapp_click')}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-emerald-600/20 hover:bg-emerald-600/30 border border-emerald-500/30 text-emerald-300 text-xs font-semibold transition"
              >
                <MessageCircle size={13} className="text-emerald-400" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Col 2: Practice Areas (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-bold text-white text-xs tracking-wider uppercase text-[#D97706] font-sans">
              Practice Disciplines
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              {practiceAreas.slice(0, 6).map((pa) => (
                <li key={pa.id}>
                  <button
                    onClick={() => onNavigate('services')}
                    className="hover:text-white transition-colors text-left flex items-center gap-1.5"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#D97706]/70" />
                    <span>{pa.title}</span>
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="text-[#D97706] hover:text-amber-300 font-semibold text-xs pt-1 flex items-center gap-1"
                >
                  <span>View all 8 practice areas</span>
                  <ExternalLink size={11} />
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Quick Navigation (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-bold text-white text-xs tracking-wider uppercase text-[#D97706] font-sans">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              {[
                { id: 'home', label: 'Home Page' },
                { id: 'services', label: 'Services & Scope' },
                { id: 'about', label: 'About the Firm' },
                { id: 'why-us', label: 'Why PKNS' },
                { id: 'compliance', label: 'Compliance Desk' },
                { id: 'compliance', label: 'Tax Deadlines' },
                { id: 'contact', label: 'Office Coordinates' },
              ].map((item, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => onNavigate(item.id)}
                    className="hover:text-white transition-colors text-left"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Office Coordinates & Location (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-bold text-white text-xs tracking-wider uppercase text-[#D97706] font-sans">
              Office Coordinates
            </h4>
            <div className="space-y-3 text-xs text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin size={15} className="text-[#D97706] shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-medium">{firmDetails.address.unit}</p>
                  <p>{firmDetails.address.area}</p>
                  <p>{firmDetails.address.city}, {firmDetails.address.state} – {firmDetails.address.pincode}</p>
                  <button
                    onClick={copyAddress}
                    className="inline-flex items-center gap-1.5 mt-2 text-[11px] font-semibold text-amber-300 hover:text-amber-200 bg-white/5 border border-white/10 px-2.5 py-1 rounded-lg transition"
                  >
                    {copied ? <Check size={11} className="text-emerald-400" /> : <Copy size={11} />}
                    <span>{copied ? 'Address Copied!' : 'Copy Office Address'}</span>
                  </button>
                </div>
              </div>

              <div className="flex items-center gap-2.5 pt-1">
                <Clock size={15} className="text-[#D97706] shrink-0" />
                <span>{firmDetails.workingHours}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail size={15} className="text-[#D97706] shrink-0" />
                <a
                  href={firmDetails.emailHref}
                  className="hover:text-white transition break-all"
                >
                  {firmDetails.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ICAI Regulatory Statutory Disclaimer */}
        <div className="py-6 border-b border-slate-800 text-xs text-slate-400 leading-relaxed space-y-2">
          <div className="font-semibold text-slate-300 flex items-center gap-1.5">
            <ShieldCheck size={14} className="text-[#D97706]" />
            <span>Institute of Chartered Accountants of India (ICAI) Regulatory Compliance Note</span>
          </div>
          <p>
            As per the guidelines issued by the Institute of Chartered Accountants of India (ICAI) under the Chartered Accountants Act, 1949, Chartered Accountants are not permitted to solicit work or advertise. This website is hosted solely to provide general information about PKNS & Associates and its partners upon client request. The content herein does not constitute professional advice, legal solicitation, or an advertisement.
          </p>
        </div>

        {/* Bottom Copyright & Rights */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-3">
          <div>
            © {new Date().getFullYear()} PKNS & Associates, Chartered Accountants. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span>Raj Nagar Extension, Ghaziabad · Uttar Pradesh</span>
            <button
              onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-slate-400 hover:text-white transition"
            >
              Back to Top ↑
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
