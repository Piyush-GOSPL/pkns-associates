export interface PracticeArea {
  id: string;
  title: string;
  category: 'direct-tax' | 'indirect-tax' | 'audit' | 'corporate' | 'advisory' | 'rera';
  categoryLabel: string;
  tagline: string;
  description: string;
  statutoryAct: string;
  keyDeliverables: string[];
  scopeItems: string[];
  documentsNeeded: string[];
  image: string;
}

export interface TaxDeadline {
  day: string;
  monthOrFreq: string;
  title: string;
  category: 'Income Tax' | 'GST' | 'TDS' | 'ROC/MCA';
  description: string;
  importance: 'High' | 'Regular' | 'Crucial';
}

export const firmDetails = {
  name: 'PKNS & Associates',
  subtitle: 'Chartered Accountants',
  firmType: 'Chartered Accountancy Firm',
  leadPartner: 'CA Pradeep Kumar Sharma',
  membershipNo: '531404',
  membershipType: 'Fellow / Associate Member (ICAI)',
  icaiRegistrationNote: 'Public Professional Register ICAI M.No. 531404',
  phone: '+91 87506 72670',
  phoneHref: 'tel:+918750672670',
  whatsapp: '918750672670',
  whatsappHref: 'https://wa.me/918750672670',
  email: 'itscapradeepsharma@gmail.com',
  emailHref: 'mailto:itscapradeepsharma@gmail.com',
  address: {
    unit: 'Unit No. 607 & 608, 6th Floor, AVS City Square',
    area: 'Gulmohar Chauraha, near Shiv Mandir, Raj Nagar Extension',
    city: 'Ghaziabad',
    state: 'Uttar Pradesh',
    pincode: '201003',
    country: 'India',
    full: 'Unit No. 607 & 608, AVS City Square, Gulmohar Chauraha, near Shiv Mandir, Raj Nagar Extension, Ghaziabad, Uttar Pradesh 201003',
  },
  landmarks: 'AVS City Square is strategically located at Gulmohar Chauraha, near Shiv Mandir in Raj Nagar Extension. Conveniently accessible from NH-58, Meerut Road, and Modinagar.',
  googleMapsUrl: 'https://maps.google.com/?q=AVS+City+Square+Raj+Nagar+Extension+Ghaziabad+201003',
  workingHours: 'Monday – Saturday: 10:00 AM – 7:30 PM (Sunday by Prior Appointment)',
  consultationFeePolicy: 'Engagement fees are discussed transparently based on statutory scope, volume, and complexity prior to commencement.',
  confidentialityPledge: 'All financial data, ledgers, and identity records are strictly confidential and governed by the ICAI Code of Ethics.',
};

export const photos = {
  homeHero: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1400&q=85',
  servicesHero: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1600&q=85',
  aboutHero: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=85',
  whyUsHero: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1600&q=85',
  complianceHero: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1600&q=85',
  contactHero: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=85',
  partnerPortrait: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=85',
  taxDocs: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80',
  auditDiscussion: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80',
  corporateSigning: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80',
  strategyMeeting: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80',
  modernRealEstate: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
  financialLedger: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
};

export const practiceAreas: PracticeArea[] = [
  {
    id: 'income-tax-itr',
    title: 'Income Tax & ITR Compliance',
    category: 'direct-tax',
    categoryLabel: 'Direct Taxation',
    tagline: 'Accurate tax computation, return preparation, and scrutiny advisory.',
    description: 'Comprehensive direct tax services for salaried individuals, professionals, HUFs, partnership firms, and corporate entities. We ensure full compliance under the Income Tax Act with legitimate tax planning.',
    statutoryAct: 'Income Tax Act, 1961',
    keyDeliverables: [
      'ITR-1 to ITR-7 Return Preparation & Filing',
      'Computation of Total Income & Tax Liability',
      'Advance Tax & Self-Assessment Calculations',
      'Tax Scrutiny, Notice Response & Rectifications (u/s 143(1), 148)',
    ],
    scopeItems: [
      'Presumptive taxation under Sec 44AD / 44ADA',
      'Capital gains analysis from property, shares & mutual funds',
      'Foreign income reporting and double taxation relief (DTAA)',
      'TDS mismatch reconciliation with Form 26AS & AIS/TIS',
    ],
    documentsNeeded: [
      'PAN & Aadhaar Card',
      'Form 16 / 16A (TDS Certificates)',
      'Annual Information Statement (AIS) & Form 26AS',
      'Bank Account Statements (All operative accounts for the FY)',
      'Proof of investments & deductions (Sec 80C, 80D, etc.)',
    ],
    image: photos.taxDocs,
  },
  {
    id: 'gst-services',
    title: 'GST Advisory & Filings',
    category: 'indirect-tax',
    categoryLabel: 'Indirect Taxation',
    tagline: 'End-to-end Goods & Services Tax compliance, ITC optimization & return filing.',
    description: 'Holistic GST consultancy catering to trading, manufacturing, and service businesses in Ghaziabad, Modinagar, and Delhi-NCR. We ensure flawless return filing, e-invoicing compliance, and ITC matching.',
    statutoryAct: 'Central Goods & Services Tax Act, 2017',
    keyDeliverables: [
      'New GST Registration & Amendment filings',
      'Monthly/Quarterly GSTR-1, GSTR-3B & IFF Returns',
      'GSTR-2B vs. Books Reconciliation for maximum ITC',
      'Annual Returns (GSTR-9) and Reconciliation Statements (GSTR-9C)',
    ],
    scopeItems: [
      'E-Way Bill generation and E-Invoicing guidance',
      'GST Department notice assistance & representation',
      'Export refunds and inverted duty structure claims',
      'Composition Scheme advisory and compliance',
    ],
    documentsNeeded: [
      'PAN, Aadhaar & Business Address Proof (Electricity bill / Rent agreement)',
      'Bank statement / cancelled cheque',
      'Sales and purchase registers with HSN/SAC codes',
      'Input Tax Credit invoices from suppliers',
    ],
    image: photos.corporateSigning,
  },
  {
    id: 'audit-assurance',
    title: 'Audit & Assurance Services',
    category: 'audit',
    categoryLabel: 'Audit & Assurance',
    tagline: 'Objective examination of financial records adhering to ICAI standards.',
    description: 'Independent audit and assurance engagements conducted in strict compliance with the Standards on Auditing (SAs) formulated by the Institute of Chartered Accountants of India. Delivering clarity to stakeholders.',
    statutoryAct: 'Sec 44AB of Income Tax Act & Companies Act, 2013',
    keyDeliverables: [
      'Tax Audit Reports (Form 3CA / 3CB and Form 3CD)',
      'Statutory Audit of Private & Public Limited Companies',
      'Internal & Management Audits for operational risk control',
      'Stock, Inventory & Revenue Assurance Audits',
    ],
    scopeItems: [
      'Testing internal financial controls (IFCoFR)',
      'Statutory depreciation and allowance verifications',
      'Related party transaction review (Sec 40A(2)(b))',
      'Verification of statutory dues compliance (PF, ESI, GST, TDS)',
    ],
    documentsNeeded: [
      'Trial balance, Profit & Loss Account, and Balance Sheet',
      'General ledgers, cash book & bank reconciliation statements',
      'Fixed asset register and inventory valuation sheets',
      'Statutory payment challans (GST, TDS, Advance Tax)',
    ],
    image: photos.auditDiscussion,
  },
  {
    id: 'accounting-bookkeeping',
    title: 'Accounting & Financial Reporting',
    category: 'advisory',
    categoryLabel: 'Financial Reporting',
    tagline: 'Structured bookkeeping and balance sheet preparation for reliable decisions.',
    description: 'Clean financial books are the foundation of legal peace of mind. We maintain systematic, compliant accounting records on modern software (Tally Prime, Zoho Books, Busy) tailored to your operational workflow.',
    statutoryAct: 'ICAI Accounting Standards (AS / Ind AS)',
    keyDeliverables: [
      'Periodic ledger maintenance and bank reconciliation',
      'Preparation of Balance Sheet, P&L, and Cash Flow Statements',
      'Debtors and Creditors Ageing Analysis reports',
      'MIS reports for management decision-making',
    ],
    scopeItems: [
      'Chart of Accounts structuring tailored to business model',
      'Periodic inventory and journal voucher postings',
      'Fixed asset accounting and depreciation schedules',
      'Year-end financial closure and audit readiness',
    ],
    documentsNeeded: [
      'Monthly sales & purchase invoices',
      'Bank statements of all active current & credit accounts',
      'Expense vouchers and payment slips',
      'Loan account sanction letters and repayment schedules',
    ],
    image: photos.financialLedger,
  },
  {
    id: 'business-roc-compliance',
    title: 'Corporate & MCA Compliance',
    category: 'corporate',
    categoryLabel: 'Corporate Law',
    tagline: 'Company incorporation, LLP setup, and annual ROC statutory filings.',
    description: 'Assisting entrepreneurs and established enterprises through Ministry of Corporate Affairs (MCA) compliance. From entity selection to statutory annual filings, we safeguard your business from penalties.',
    statutoryAct: 'Companies Act, 2013 & LLP Act, 2008',
    keyDeliverables: [
      'Private Limited Company & LLP Incorporation',
      'Annual ROC Filings (Form AOC-4, MGT-7/7A)',
      'Director Annual KYC (Form DIR-3 KYC)',
      'MSME / Udyam Registration & Certifications',
    ],
    scopeItems: [
      'Alteration of MOA/AOA (Name, Object, Capital change)',
      'Appointment and resignation of Directors / Partners',
      'Preparation of Board meeting minutes & statutory registers',
      'Strike-off / closure of defunct entities (Form STK-2)',
    ],
    documentsNeeded: [
      'Director / Partner PAN, Aadhaar & Passport photos',
      'Digital Signature Certificate (DSC)',
      'Registered office address proof with utility bill and NOC',
      'Audited balance sheet and Director’s report for ROC filings',
    ],
    image: photos.strategyMeeting,
  },
  {
    id: 'tax-business-advisory',
    title: 'Tax Planning & Business Advisory',
    category: 'advisory',
    categoryLabel: 'Advisory & Strategy',
    tagline: 'Strategic tax optimization and financial structuring for growth.',
    description: 'Proactive financial counsel designed to help enterprises make informed decisions. We analyze business transactions, capital expansions, and entity structures to legally minimize statutory tax burdens.',
    statutoryAct: 'Income Tax Act & Commercial Regulations',
    keyDeliverables: [
      'Capital Gains restructuring & reinvestment roadmaps (Sec 54/54EC)',
      'Entity restructuring (Proprietorship to Private Limited / LLP)',
      'Business Project Reports & CMA Data for Bank Financing',
      'Cash flow forecasting and working capital advisory',
    ],
    scopeItems: [
      'Family settlement and asset transfer tax advisory',
      'Start-up tax incentives and DPIIT registration guidance',
      'Commercial contract review from a tax withholding angle',
      'Direct partner review of high-stakes financial commitments',
    ],
    documentsNeeded: [
      'Past 3 years’ financial statements and ITRs',
      'Projected business plans and cost estimates',
      'Existing loan schedules and debt profiles',
      'Draft transaction agreements or MOUs',
    ],
    image: photos.servicesHero,
  },
  {
    id: 'rera-project-certification',
    title: 'RERA & Project Certification',
    category: 'rera',
    categoryLabel: 'Real Estate & Infrastructure',
    tagline: 'CA certification for real estate developers and project escrow accounts.',
    description: 'Chartered Accountant certification support for real-estate builders, developers, and project promoters in Uttar Pradesh. Public professional records verify our experience with project-related certification documentation.',
    statutoryAct: 'Real Estate (Regulation and Development) Act, 2016 (UP RERA)',
    keyDeliverables: [
      'CA Certificate for Project Account Withdrawals (UP RERA Form 3)',
      'Annual Audit of Project Escrow Account (UP RERA Form 5)',
      'Cost incurred vs. cost to complete certification',
      'Quarterly progress compliance financial vetting',
    ],
    scopeItems: [
      'Escrow 70% account inflow and outflow verification',
      'Land cost and construction expenditure certification',
      'Percentage completion method (POCM) financial checks',
      'Reconciliation of collections from allottees',
    ],
    documentsNeeded: [
      'RERA Registration details and sanctioned plans',
      'Architect and Engineer certificates (Form 1 & Form 2)',
      'Dedicated RERA bank account statements',
      'Contractor bills, material purchase vouchers, and muster rolls',
    ],
    image: photos.modernRealEstate,
  },
  {
    id: 'statutory-certificates-networth',
    title: 'Certificates & Net Worth Reports',
    category: 'advisory',
    categoryLabel: 'Statutory Certificates',
    tagline: 'Official CA certifications, UDIN-generated net worth and turnover reports.',
    description: 'Issuance of official Chartered Accountant certificates with Unique Document Identification Number (UDIN) for banks, visa authorities, government tenders, and statutory bodies where permitted and applicable.',
    statutoryAct: 'ICAI UDIN Guidelines & Applicable Frameworks',
    keyDeliverables: [
      'Net Worth Certificates for Visa, Immigration & Education',
      'Turnover Certificates for Government & Corporate Tenders',
      'Foreign Remittance Certificates (Form 15CB)',
      'Utilization Certificates for Grants and Project Subsidies',
    ],
    scopeItems: [
      'Independent verification of asset ownership and valuation',
      'Verification of liquid assets, bank balances, and investments',
      'Tax residency status and withholding tax computation for 15CB',
      'Mandatory UDIN generation on every official certificate',
    ],
    documentsNeeded: [
      'Identity and address proofs of applicant',
      'Title deeds, registry copies, or valuation reports of immovable assets',
      'Bank balance certificates and mutual fund/share holding statements',
      'Vehicle RC, gold valuation, or other movable asset proofs',
    ],
    image: photos.aboutHero,
  },
];

export const taxDeadlines: TaxDeadline[] = [
  {
    day: '7th',
    monthOrFreq: 'Every Month',
    title: 'TDS / TCS Payment Deposit',
    category: 'TDS',
    description: 'Challan 281 deposit for tax deducted/collected at source for the preceding month.',
    importance: 'High',
  },
  {
    day: '11th',
    monthOrFreq: 'Every Month',
    title: 'GSTR-1 Monthly Return',
    category: 'GST',
    description: 'Details of outward supplies of goods and services for regular taxpayers with turnover > ₹5 Cr or monthly filers.',
    importance: 'Regular',
  },
  {
    day: '20th',
    monthOrFreq: 'Every Month',
    title: 'GSTR-3B Summary Return & Tax',
    category: 'GST',
    description: 'Summary return of inward/outward supplies, ITC claim, and net tax payment. Critical to avoid per-day late fees.',
    importance: 'Crucial',
  },
  {
    day: '15th',
    monthOrFreq: 'Jun / Sep / Dec / Mar',
    title: 'Advance Tax Installments',
    category: 'Income Tax',
    description: 'Due dates: 15% by June 15, 45% by Sept 15, 75% by Dec 15, and 100% by March 15 for liable taxpayers.',
    importance: 'High',
  },
  {
    day: '31st',
    monthOrFreq: 'July (Annual)',
    title: 'ITR Filing (Non-Audit Cases)',
    category: 'Income Tax',
    description: 'Due date for salaried individuals, professionals, and non-audit business entities for the preceding financial year.',
    importance: 'Crucial',
  },
  {
    day: '30th',
    monthOrFreq: 'September (Annual)',
    title: 'Tax Audit Report (Form 3CD)',
    category: 'Income Tax',
    description: 'Filing of Tax Audit Report u/s 44AB for businesses and professionals crossing prescribed turnover thresholds.',
    importance: 'Crucial',
  },
  {
    day: '31st',
    monthOrFreq: 'October (Annual)',
    title: 'Corporate & Audit ITR Filing',
    category: 'Income Tax',
    description: 'Filing of Income Tax returns for companies and entities required to undergo tax audit under any Indian statute.',
    importance: 'High',
  },
  {
    day: '31st',
    monthOrFreq: 'December (Annual)',
    title: 'GSTR-9 & 9C Annual Returns',
    category: 'GST',
    description: 'Annual GST Return and self-certified reconciliation statement for registered businesses.',
    importance: 'High',
  },
];

export const firmFaqs = [
  {
    q: 'What professional services does PKNS & Associates provide?',
    a: 'PKNS & Associates provides end-to-end Chartered Accountancy services including Income Tax planning and return filing (ITR), Goods & Services Tax (GST) compliance, Statutory & Tax Audits (Sec 44AB), Bookkeeping & Financial Reporting, ROC/MCA corporate filings, RERA project certifications (Form 3 & 5), and UDIN-authenticated statutory net worth/turnover certificates.',
  },
  {
    q: 'Who heads the firm and what are their qualifications?',
    a: 'The practice is led by CA Pradeep Kumar Sharma, Chartered Accountant with ICAI Membership No. 531404. He brings extensive experience in taxation, audit, and real estate certification documentation across Ghaziabad, Modinagar, and the wider Delhi-NCR industrial belt.',
  },
  {
    q: 'Where is the firm’s office located in Ghaziabad?',
    a: 'Our office is at Unit No. 607 & 608, 6th Floor, AVS City Square, Gulmohar Chauraha, near Shiv Mandir, Raj Nagar Extension, Ghaziabad, Uttar Pradesh 201003. We are easily accessible from Meerut Road, NH-58, and all sectors of Raj Nagar Extension.',
  },
  {
    q: 'Can I discuss my taxation or audit requirement before visiting the office?',
    a: 'Yes, absolutely. We encourage prospective clients to initiate contact via WhatsApp (+91 87506 72670) or direct phone call. We can conduct an initial scoping discussion to let you know the exact documents needed before an in-person conference.',
  },
  {
    q: 'How are professional fees determined for an assignment?',
    a: 'As per ICAI guidelines and ethical professional practice, fees depend on the nature, technical complexity, volume of transactions, and time required for the engagement. We provide a transparent, upfront quotation with zero hidden surprises before commencing any work.',
  },
  {
    q: 'Do you handle income tax scrutiny notices and GST departmental appeals?',
    a: 'Yes. We assist clients in drafting well-substantiated legal replies to notices issued under Section 143(1), 143(2), 148, or Section 263 of the Income Tax Act, as well as GST DRC-01 notices and departmental audit requisitions.',
  },
  {
    q: 'Are CA certificates issued with UDIN (Unique Document Identification Number)?',
    a: 'Yes, strictly. Every certificate, audit report, and attestation issued by CA Pradeep Kumar Sharma carries a verified UDIN generated on the official ICAI portal, ensuring immediate authenticity verification for banks, embassies, and authorities.',
  },
  {
    q: 'How is client financial data and confidentiality secured?',
    a: 'Client data security is paramount. All physical documents and digital accounts (Tally, Zoho, income tax & GST credentials) are maintained under strict confidentiality protocols compliant with the ICAI Code of Ethics. Documents are never shared with unverified third parties.',
  },
];

export const clientScenarios = [
  {
    type: 'Corporate & SME',
    title: 'Manufacturing SME in Ghaziabad Industrial Area',
    situation: 'Facing heavy GST Input Tax Credit mismatch in GSTR-2B vs. books, leading to working capital blockage and a departmental notice.',
    outcome: 'Conducted line-by-line vendor reconciliation, rectified credit claims, responded formally to the notice, and established streamlined monthly accounting procedures.',
  },
  {
    type: 'Real Estate Developer',
    title: 'Residential Project Promoter in Raj Nagar Extension',
    situation: 'Required UP RERA Form 3 certification for phased escrow account withdrawals and annual Form 5 compliance.',
    outcome: 'Verified expenditure ledgers, verified architect/engineer ratios, and issued compliant CA certificates with UDIN within the strict regulatory deadline.',
  },
  {
    type: 'Professional & Business',
    title: 'Consulting Firm & Senior Medical Professionals',
    situation: 'Complex multi-source income including capital gains, professional fees, and dividend earnings seeking optimal tax planning.',
    outcome: 'Calculated tax liability under presumptive taxation Sec 44ADA with detailed capital gain reinvestment analysis, ensuring zero scrutiny discrepancy.',
  },
];
