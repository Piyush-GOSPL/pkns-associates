import { FormEvent, useState } from 'react'
import { CheckCircle2, Mail, MapPin, MessageCircle, Phone } from 'lucide-react'
import { business, serviceGroups } from '../data/siteData'
import { track, WhatsAppButton, CallButton, whatsappUrl } from './Common'

function FacebookIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}

function InstagramIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}

export function ContactForm(){
  const [sent,setSent]=useState(false)
  const services=serviceGroups.flatMap(g=>g.items.map(i=>i[0]))
  function submit(e:FormEvent<HTMLFormElement>){e.preventDefault(); const form=e.currentTarget; if(!form.checkValidity()){form.reportValidity();return} track('contact_form_submit'); setSent(true); form.reset()}
  return <section id="contact" className="py-20"><div className="section-shell grid gap-8 lg:grid-cols-[.85fr_1.15fr]"><div><p className="text-sm font-bold uppercase tracking-[.18em] text-orange-600">Contact</p><h2 className="mt-3 text-4xl font-black">Let's Get Your Work Done</h2><p className="mt-4 max-w-xl leading-7 text-slate-600">Have a question or need help with a digital service? Contact us today.</p><div className="mt-7 flex flex-wrap gap-3"><WhatsAppButton/><CallButton/></div><div className="mt-8 space-y-3 text-sm"><p className="flex gap-3"><Phone size={18} className="text-blue-700"/><span>{business.phone}</span></p><p className="flex gap-3"><MessageCircle size={18} className="text-emerald-600"/><span>{business.whatsapp}</span></p><p className="flex gap-3"><Mail size={18} className="text-blue-700"/><span>{business.email}</span></p><p className="flex gap-3"><MapPin size={18} className="text-blue-700"/><span>{business.address}</span></p></div></div>
    <form onSubmit={submit} className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-soft md:p-8"><div className="grid gap-5 sm:grid-cols-2"><label className="text-sm font-bold">Full Name<input required name="name" className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 font-normal outline-none focus:border-blue-600" placeholder="Your name"/></label><label className="text-sm font-bold">Mobile Number<input required name="mobile" inputMode="tel" pattern="[0-9+ -]{8,15}" className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 font-normal outline-none focus:border-blue-600" placeholder="Mobile number"/></label></div><label className="mt-5 block text-sm font-bold">Service Required<select required name="service" className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 font-normal"><option value="">Select a service</option>{services.map(s=><option key={s}>{s}</option>)}</select></label><label className="mt-5 block text-sm font-bold">Message<textarea required name="message" rows={5} className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 font-normal outline-none focus:border-blue-600" placeholder="Tell us what you need help with"/></label><button className="mt-5 w-full rounded-xl bg-blue-700 px-5 py-3.5 font-black text-white hover:bg-blue-800">Submit Enquiry</button>{sent&&<div role="status" className="mt-4 flex items-center gap-2 rounded-xl bg-emerald-50 p-3 text-sm font-semibold text-emerald-800"><CheckCircle2 size={18}/> Enquiry received successfully. Connect this form to your preferred backend/email service before launch.</div>}</form>
  </div></section>
}

export function Footer(){return <footer className="bg-slate-950 pb-24 pt-14 text-slate-300 md:pb-8"><div className="section-shell grid gap-10 md:grid-cols-2 lg:grid-cols-4"><div><h2 className="text-xl font-black text-white">{business.name}</h2><p className="mt-4 text-sm leading-6 text-slate-400">Reliable local assistance for digital, documentation and business-support needs.</p><div className="mt-5 flex gap-2"><a href="#" aria-label="Facebook" className="rounded-lg bg-white/10 p-2"><FacebookIcon size={18}/></a><a href="#" aria-label="Instagram" className="rounded-lg bg-white/10 p-2"><InstagramIcon size={18}/></a></div></div><div><h3 className="font-black text-white">Quick Links</h3><div className="mt-4 grid gap-2 text-sm">{[['Home','#home'],['Services','#services'],['About','#about'],['Contact','#contact'],['FAQ','#faq'],['Privacy Policy','#'],['Terms & Conditions','#']].map(([l,h])=><a key={l} href={h} className="hover:text-white">{l}</a>)}</div></div><div><h3 className="font-black text-white">Contact</h3><div className="mt-4 grid gap-2 text-sm"><p>{business.phone}</p><p>{business.whatsapp}</p><p>{business.email}</p><p>{business.address}</p><p>{business.hours}</p></div></div><div><h3 className="font-black text-white">Need help now?</h3><p className="mt-4 text-sm text-slate-400">Send a quick WhatsApp message and tell us what service you need.</p><a href={whatsappUrl()} onClick={()=>track('whatsapp_click',{location:'footer'})} className="mt-4 inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-4 py-3 font-bold text-white"><MessageCircle size={18}/> Chat on WhatsApp</a></div></div><div className="section-shell mt-10 border-t border-white/10 pt-6 text-center text-xs text-slate-500">© 2026 Shri Balaji Digital & Business Services. All Rights Reserved.</div></footer>}

export function FloatingActions(){return <><a href={whatsappUrl()} onClick={()=>track('whatsapp_click',{location:'floating'})} className="fixed bottom-24 right-4 z-40 hidden items-center gap-2 rounded-full bg-emerald-600 px-4 py-3 font-bold text-white shadow-xl md:flex"><MessageCircle size={20}/> Chat on WhatsApp</a><nav className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-4 border-t border-slate-200 bg-white md:hidden"><a href="#home" className="py-3 text-center text-xs font-bold">Home</a><a href="#services" className="py-3 text-center text-xs font-bold">Services</a><a href={whatsappUrl()} onClick={()=>track('whatsapp_click',{location:'mobile_bar'})} className="bg-emerald-600 py-3 text-center text-xs font-black text-white">WhatsApp</a><a href={business.phoneHref || '#contact'} onClick={()=>track('phone_click',{location:'mobile_bar'})} className="bg-slate-950 py-3 text-center text-xs font-black text-white">Call</a></nav></>}
