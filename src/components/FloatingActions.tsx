import { Phone, MessageCircle, FileText, MapPin } from 'lucide-react';
import { firmDetails } from '../data/firmData';

interface FloatingActionsProps {
  onNavigate: (view: string) => void;
  currentView: string;
}

export default function FloatingActions({ onNavigate, currentView }: FloatingActionsProps) {
  const trackAction = (eventName: string) => {
    window.dispatchEvent(new CustomEvent('lead_event', { detail: eventName }));
  };

  const whatsappMessage = encodeURIComponent(
    'Hello PKNS & Associates, I would like to schedule a professional consultation regarding taxation/accounting.'
  );

  return (
    <>
      {/* Desktop Floating WhatsApp Button */}
      <aside aria-label="Quick contact" className="hidden md:block fixed bottom-6 right-6 z-40">
        <a
          href={`${firmDetails.whatsappHref}?text=${whatsappMessage}`}
          target="_blank"
          rel="noreferrer"
          onClick={() => trackAction('desktop_floating_whatsapp_click')}
          className="group flex items-center gap-3 bg-emerald-600 hover:bg-emerald-700 text-white pl-4 pr-5 py-3 rounded-xl shadow-md transition-all duration-200 hover:-translate-y-0.5 border border-emerald-500"
          aria-label="Direct WhatsApp Consultation with CA Office"
        >
          <div className="relative">
            <MessageCircle size={20} className="text-white" />
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-emerald-300 rounded-full animate-ping" />
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-emerald-200 rounded-full" />
          </div>
          <div className="text-left">
            <div className="text-[13px] font-bold leading-tight font-sans">Consult on WhatsApp</div>
            <div className="text-[11px] text-emerald-100 font-medium">Direct CA Desk</div>
          </div>
        </a>
      </aside>

      {/* Mobile Sticky Bottom Action Bar */}
      <nav aria-label="Mobile quick actions" className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-[#E2E8F0] shadow-md safe-bottom">
        <div className="grid grid-cols-4 h-16 items-stretch">
          {/* Action 1: Call Office */}
          <a
            href={firmDetails.phoneHref}
            onClick={() => trackAction('mobile_bar_call_click')}
            className="flex flex-col items-center justify-center gap-1 text-[#1E293B] hover:text-[#0F172A] active:bg-slate-50 transition py-1"
          >
            <Phone size={17} className="text-[#0F172A]" />
            <span className="text-[11px] font-semibold">Call</span>
          </a>

          {/* Action 2: WhatsApp Chat (Emphasized) */}
          <a
            href={`${firmDetails.whatsappHref}?text=${whatsappMessage}`}
            target="_blank"
            rel="noreferrer"
            onClick={() => trackAction('mobile_bar_whatsapp_click')}
            className="flex flex-col items-center justify-center gap-1 bg-emerald-600 text-white active:bg-emerald-700 transition py-1"
          >
            <MessageCircle size={17} />
            <span className="text-[11px] font-semibold">WhatsApp</span>
          </a>

          {/* Action 3: Services */}
          <button
            onClick={() => onNavigate('services')}
            className={`flex flex-col items-center justify-center gap-1 transition py-1 ${
              currentView === 'services'
                ? 'text-[#0F172A] font-bold bg-slate-100'
                : 'text-[#64748B] hover:text-[#0F172A] active:bg-slate-50'
            }`}
          >
            <FileText size={17} className={currentView === 'services' ? 'text-[#D97706]' : 'text-[#64748B]'} />
            <span className="text-[11px] font-semibold">Services</span>
          </button>

          {/* Action 4: Office Coordinates */}
          <button
            onClick={() => onNavigate('contact')}
            className={`flex flex-col items-center justify-center gap-1 transition py-1 ${
              currentView === 'contact'
                ? 'text-[#0F172A] font-bold bg-slate-100'
                : 'text-[#64748B] hover:text-[#0F172A] active:bg-slate-50'
            }`}
          >
            <MapPin size={17} className={currentView === 'contact' ? 'text-[#0F172A]' : 'text-[#64748B]'} />
            <span className="text-[11px] font-semibold">Office</span>
          </button>
        </div>
      </nav>
    </>
  );
}
