import { useState, useEffect } from 'react';
import {
  Phone,
  MessageCircle,
  Menu,
  X,
  MapPin,
  Clock,
  ShieldCheck,
  ChevronRight,
} from 'lucide-react';
import { firmDetails } from '../data/firmData';

interface HeaderProps {
  currentView: string;
  onNavigate: (view: string) => void;
  onOpenConsultation?: () => void;
}

export default function Header({ currentView, onNavigate, onOpenConsultation }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'about', label: 'About Firm' },
    { id: 'why-us', label: 'Why Us' },
    { id: 'compliance', label: 'Compliance & FAQs' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileOpen(false);
  };

  const trackAction = (eventName: string) => {
    window.dispatchEvent(new CustomEvent('lead_event', { detail: eventName }));
  };

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-200">
      {/* Top Utility Ribbon in Deep Navy #0F172A */}
      <div className="hidden lg:block bg-[#0F172A] text-slate-300 border-b border-slate-800 text-[13px] py-2 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2 text-slate-300">
              <MapPin size={14} className="text-[#D97706]" />
              <span>Unit 607 & 608, AVS City Square, Raj Nagar Extension, Ghaziabad</span>
            </span>
            <span className="flex items-center gap-2 text-slate-400">
              <Clock size={14} className="text-[#D97706]" />
              <span>Mon – Sat: 10:00 AM – 7:30 PM</span>
            </span>
          </div>

          <div className="flex items-center gap-5">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md text-[11px] font-semibold bg-white/5 border border-white/10 text-amber-300">
              <ShieldCheck size={13} className="text-[#D97706]" />
              <span>ICAI Reg. M.No. {firmDetails.membershipNo}</span>
            </span>
            <a
              href={firmDetails.phoneHref}
              onClick={() => trackAction('top_ribbon_phone_click')}
              className="text-slate-200 hover:text-white font-medium transition flex items-center gap-1.5"
            >
              <Phone size={13} className="text-[#D97706]" />
              <span>{firmDetails.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div
        className={`w-full transition-all duration-200 border-b ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-[#E2E8F0] py-3'
            : 'bg-white border-[#E2E8F0] py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Monogram & Identity */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 text-left focus:outline-none group"
            aria-label="PKNS & Associates Home"
          >
            <div className="relative w-11 h-11 rounded-xl bg-[#0F172A] border border-slate-700 flex items-center justify-center shadow-sm group-hover:border-[#D97706] transition-colors">
              <span className="font-extrabold text-white text-base tracking-wider font-sans">PK</span>
              <span className="absolute -bottom-1 -right-1 px-1.5 py-0.2 bg-[#D97706] text-white font-bold text-[9px] rounded-md shadow-sm">
                CA
              </span>
            </div>
            <div>
              <div className="font-extrabold text-[17px] tracking-tight text-[#0F172A] leading-tight font-sans">
                PKNS & ASSOCIATES
              </div>
              <div className="text-[11px] font-semibold uppercase tracking-wider text-[#64748B] flex items-center gap-1.5 mt-0.5">
                <span>Chartered Accountants</span>
                <span className="w-1 h-1 rounded-full bg-[#D97706] inline-block"></span>
                <span className="text-[#1E293B] font-medium">Ghaziabad</span>
              </div>
            </div>
          </button>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = currentView === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`px-3.5 py-2 rounded-lg text-[14px] font-semibold transition-colors duration-150 relative ${
                    isActive
                      ? 'text-[#0F172A] bg-slate-100 font-bold'
                      : 'text-[#64748B] hover:text-[#0F172A] hover:bg-slate-50'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-[#D97706] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`${firmDetails.whatsappHref}?text=${encodeURIComponent(
                'Hello PKNS & Associates, I would like to schedule a professional consultation.'
              )}`}
              target="_blank"
              rel="noreferrer"
              onClick={() => trackAction('header_whatsapp_click')}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-[14px] font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 rounded-xl transition"
            >
              <MessageCircle size={16} className="text-emerald-600" />
              <span>WhatsApp</span>
            </a>

            <button
              onClick={() => {
                trackAction('header_consult_click');
                if (onOpenConsultation) {
                  onOpenConsultation();
                } else {
                  handleNavClick('contact');
                }
              }}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-[14px] font-semibold text-white bg-[#0F172A] hover:bg-[#1E293B] rounded-xl shadow-sm transition border border-[#0F172A]"
            >
              <span>Consult CA</span>
              <ChevronRight size={14} className="text-amber-400" />
            </button>
          </div>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-xl text-slate-700 hover:text-[#0F172A] hover:bg-slate-100 transition focus:outline-none"
            aria-label="Toggle Navigation Menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-b border-[#E2E8F0] shadow-lg px-4 pt-3 pb-6 animate-fadeIn">
          <div className="space-y-1">
            {navLinks.map((link) => {
              const isActive = currentView === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`w-full text-left px-4 py-3 rounded-xl text-base font-semibold flex items-center justify-between ${
                    isActive
                      ? 'bg-[#0F172A] text-white font-bold'
                      : 'text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  <span>{link.label}</span>
                  <ChevronRight size={16} className={isActive ? 'text-[#D97706]' : 'text-slate-400'} />
                </button>
              );
            })}
          </div>

          <div className="mt-5 pt-4 border-t border-[#E2E8F0] space-y-2.5">
            <div className="text-xs text-[#64748B] px-1 font-medium">
              Lead Partner: <strong className="text-[#0F172A]">{firmDetails.leadPartner}</strong> (M.No. {firmDetails.membershipNo})
            </div>

            <div className="grid grid-cols-2 gap-2 pt-1">
              <a
                href={firmDetails.phoneHref}
                onClick={() => trackAction('mobile_menu_call')}
                className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-slate-100 text-slate-800 text-sm font-semibold border border-[#E2E8F0]"
              >
                <Phone size={15} className="text-[#0F172A]" />
                <span>Call Now</span>
              </a>

              <a
                href={`${firmDetails.whatsappHref}?text=${encodeURIComponent(
                  'Hello PKNS & Associates, I would like to schedule a consultation.'
                )}`}
                target="_blank"
                rel="noreferrer"
                onClick={() => trackAction('mobile_menu_whatsapp')}
                className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-emerald-600 text-white text-sm font-semibold shadow-sm"
              >
                <MessageCircle size={15} />
                <span>WhatsApp</span>
              </a>
            </div>

            <button
              onClick={() => {
                setMobileOpen(false);
                if (onOpenConsultation) {
                  onOpenConsultation();
                } else {
                  handleNavClick('contact');
                }
              }}
              className="w-full mt-2 py-3 rounded-xl bg-[#0F172A] text-white text-sm font-semibold text-center block"
            >
              Schedule In-Office Meeting
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
