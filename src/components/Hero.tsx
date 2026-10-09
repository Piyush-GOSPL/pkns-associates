import { BadgeCheck, BriefcaseBusiness, FileText, GraduationCap, Laptop, ShieldCheck, Sparkles } from 'lucide-react'
import { CallButton, QuoteButton, WhatsAppButton } from './Common'

export default function Hero(){
  const cats=[[FileText,'Digital Services'],[ShieldCheck,'Citizen Assistance'],[BriefcaseBusiness,'Business Support'],[GraduationCap,'Job & Career'],[Laptop,'Online Assistance']]
  return <section id="home" className="relative overflow-hidden bg-gradient-to-br from-white via-slate-50 to-blue-50 py-16 md:py-24">
    <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-orange-200/40 blur-3xl"/>
    <div className="section-shell relative grid items-center gap-12 lg:grid-cols-[1.08fr_.92fr]">
      <div><div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 text-sm font-bold text-blue-800 shadow-sm"><Sparkles size={16}/> Local help. Professional service.</div>
        <h1 className="max-w-3xl text-4xl font-black leading-tight tracking-tight text-slate-950 sm:text-5xl md:text-6xl">Your Trusted Partner for <span className="text-blue-700">Digital & Business Services</span></h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">Fast, reliable and hassle-free digital and business services for individuals, families, students, job seekers and local businesses.</p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row"><WhatsAppButton/><CallButton/><QuoteButton/></div>
        <p className="mt-5 text-sm font-bold text-slate-500">Quick Service • Transparent Pricing • Local Support</p>
        <div className="mt-8 grid gap-3 sm:grid-cols-2">{['Experienced Service','Transparent Pricing','Quick Response','Customer Support'].map(x=><div key={x} className="flex items-center gap-2 font-semibold text-slate-700"><BadgeCheck className="text-emerald-600" size={19}/>{x}</div>)}</div>
      </div>
      <div className="rounded-[2rem] border border-white bg-slate-950 p-5 shadow-soft md:p-7"><div className="mb-5 flex items-center justify-between"><div><p className="text-sm font-bold uppercase tracking-[.18em] text-orange-400">Services at a glance</p><h2 className="mt-2 text-2xl font-black text-white">One place. Multiple solutions.</h2></div><div className="rounded-2xl bg-white/10 p-3 text-orange-400"><ShieldCheck/></div></div>
        <div className="grid gap-3 sm:grid-cols-2">{cats.map(([Icon,label]: any)=><div key={label} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 text-white"><span className="rounded-xl bg-orange-400/10 p-2.5 text-orange-400"><Icon size={20}/></span><span className="font-semibold">{label}</span></div>)}</div>
        <div className="mt-5 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-700 p-5 text-white"><p className="text-sm font-semibold text-blue-100">Need help choosing the right service?</p><p className="mt-1 text-lg font-black">Tell us what you need. We’ll guide you.</p></div>
      </div>
    </div>
  </section>
}
