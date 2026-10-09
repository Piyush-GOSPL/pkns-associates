import { firmDetails, firmFaqs, practiceAreas } from './firmData';

export const business = {
  name: firmDetails.name,
  shortName: 'PKNS & Associates',
  subtitle: firmDetails.subtitle,
  phone: firmDetails.phone,
  phoneHref: firmDetails.phoneHref,
  whatsapp: firmDetails.whatsapp,
  whatsappHref: firmDetails.whatsappHref,
  email: firmDetails.email,
  address: firmDetails.address.full,
  serviceArea: 'Ghaziabad, Modinagar, Raj Nagar Extension & Delhi-NCR',
  hours: firmDetails.workingHours,
  website: 'https://pknsassociates.example/',
  whatsappMessage: 'Hello PKNS & Associates, I would like to discuss a professional accounting, taxation or compliance requirement.',
};

export const serviceGroups = practiceAreas.map((p) => ({
  title: p.title,
  items: p.scopeItems.map((item, idx) => [item, p.keyDeliverables[idx % p.keyDeliverables.length] || p.tagline]),
}));

export const faqs = firmFaqs.map((f) => [f.q, f.a]);

export const testimonials = [
  {
    name: 'Industrial Manufacturer, Ghaziabad',
    service: 'Tax Audit & GST Advisory',
    review: 'CA Pradeep Kumar Sharma and his team resolved our complex GST credit reconciliations with immense technical accuracy.',
    rating: 5,
  },
  {
    name: 'Real Estate Developer, Raj Nagar Extension',
    service: 'UP RERA Certification',
    review: 'Prompt and highly meticulous RERA Form 3 and Form 5 verification. Their office in AVS City Square is very accessible.',
    rating: 5,
  },
  {
    name: 'Consulting Firm Partner',
    service: 'Direct Tax & Corporate ROC',
    review: 'Exceptional professionalism. Direct partner access and clear guidance on Section 44ADA without unnecessary jargon.',
    rating: 5,
  },
];
