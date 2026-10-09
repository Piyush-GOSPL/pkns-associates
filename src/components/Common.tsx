import { Phone, MessageCircle, ArrowRight } from 'lucide-react'
import { business } from '../data/siteData'

export function track(event: string, params: Record<string, string> = {}) {
  const w = window as typeof window & { gtag?: (...args: unknown[]) => void }
  w.gtag?.('event', event, params)
}

export function whatsappUrl() {
  if (!business.whatsappHref) return '#contact'
  return `${business.whatsappHref}?text=${encodeURIComponent(business.whatsappMessage)}`
}

export function WhatsAppButton({ label = 'WhatsApp Us', className = '' }: { label?: string; className?: string }) {
  return <a href={whatsappUrl()} onClick={() => track('whatsapp_click')} className={`inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 font-semibold text-white shadow-lg transition hover:bg-emerald-700 ${className}`} aria-label={label}><MessageCircle size={20} />{label}</a>
}

export function CallButton({ label = 'Call Now', className = '' }: { label?: string; className?: string }) {
  return <a href={business.phoneHref || '#contact'} onClick={() => track('phone_click')} className={`inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 font-semibold text-slate-900 transition hover:border-slate-400 hover:bg-slate-50 ${className}`} aria-label={label}><Phone size={20} />{label}</a>
}

export function SectionTitle({ eyebrow, title, text }: { eyebrow?: string; title: string; text?: string }) {
  return <div className="mx-auto mb-10 max-w-3xl text-center">{eyebrow && <p className="mb-2 text-sm font-bold uppercase tracking-[0.2em] text-orange-600">{eyebrow}</p>}<h2 className="text-3xl font-black tracking-tight text-slate-950 md:text-4xl">{title}</h2>{text && <p className="mt-4 text-base leading-7 text-slate-600 md:text-lg">{text}</p>}</div>
}

export function QuoteButton() {
  return <a href="#contact" onClick={() => track('quote_request')} className="inline-flex items-center justify-center gap-2 rounded-xl bg-orange-500 px-5 py-3 font-semibold text-white transition hover:bg-orange-600">Get a Free Quote <ArrowRight size={18}/></a>
}
