export type BatteryBrand = {
  slug: string;
  title: string;
  description: string;
  image?: string;
  intro?: string;
  stats?: { value: string; label: string }[];
  serviceHighlights?: { title: string; intro?: string; items: { icon: string; title: string; description: string }[] };
  getStarted?: { title: string; intro?: string; steps: { title: string; text: string }[] };
  whyChooseUsTitle?: string;
  whyChooseUsIntro?: string;
  whyChooseUs?: string[];
  whyChooseUsClosing?: string;
  signs?: { title: string; intro?: string; list: string[] };
  testimonials?: { name: string; area: string; quote: string }[];
  faqs?: { q: string; a: string }[];
  showAreas?: boolean;
};

const serviceHighlights = {
  title: "Our Complete Roadside & Car Service in Dubai",
  intro: "While we're at your location fitting your battery, we can also take care of:",
  items: [
    { icon: "wrench", title: "Tyre Fitting", description: "Puncture repair, patching, and spare or replacement tyre fitting on the spot." },
    { icon: "car", title: "Roadside Assistance", description: "Lockouts, breakdowns, and minor repairs handled wherever you're stranded." },
    { icon: "battery", title: "Battery Replacement", description: "Genuine batteries delivered and fitted at your location, 24/7." },
    { icon: "clock", title: "Car Diagnostics", description: "Quick checks on battery, alternator, and tyre health while we're already there." },
  ],
};

const getStarted = {
  title: "How to Get Your Battery Replaced",
  intro: "Getting a new battery fitted is simple:",
  steps: [
    { title: "Call or Book Online", text: "Share your location, vehicle, and battery brand preference." },
    { title: "We Dispatch Immediately", text: "A technician reaches you in 30-45 minutes." },
    { title: "Fitted On-Site", text: "Battery tested, fitted, and old one recycled — you're ready to drive." },
  ],
};

const stats = [
  { value: "10+", label: "Years Experience" },
  { value: "50+", label: "Vehicles Serviced Daily" },
  { value: "500+", label: "Happy Customers" },
  { value: "4.9", label: "Customer Rating" },
];

const batteryBrands: BatteryBrand[] = [
  {
    slug: "amaron",
    image: "/images/battery-brands/amaron.png",
    title: "Amaron Battery",
    description:
      "Amaron batteries deliver zero-maintenance, long-lasting starting power trusted by drivers across the UAE.",
    intro:
      "Looking for a reliable Amaron battery replacement in Dubai? Amaron batteries are known for zero-maintenance design and consistent starting power, making them a popular choice for sedans, SUVs, and daily commuters across the UAE.\n\nBattery Store delivers and fits genuine Amaron batteries at your home, office, or roadside location — fast, on-site, and backed by full warranty.",
    stats,
    serviceHighlights,
    getStarted,
    whyChooseUsTitle: "Why Choose Battery Store for Amaron Battery Replacement?",
    whyChooseUsIntro: "Here's why drivers across Dubai trust us for genuine Amaron battery fitment:",
    whyChooseUs: [
      "100% genuine Amaron batteries with full manufacturer warranty",
      "Free on-site delivery and installation, 24/7",
      "Free battery and alternator diagnostics before replacement",
      "30-45 minute average response time across Dubai",
      "Transparent pricing with no hidden charges",
      "Old battery collected and recycled per UAE environmental standards",
    ],
    whyChooseUsClosing: "Our goal is simple: get you a genuine Amaron battery, fitted fast, at a fair price.",
    signs: {
      title: "Common Signs Your Amaron Battery Needs Replacement",
      intro: "Watch out for these warning signs before you're left stranded:",
      list: [
        "Slow or struggling engine crank on startup",
        "Dashboard battery warning light staying on",
        "Dim headlights or interior lights",
        "Battery older than 2-3 years",
        "Swelling, corrosion, or leakage on the case or terminals",
      ],
    },
    testimonials: [
      { name: "Yusuf", area: "Al Barsha", quote: "Got my Amaron battery replaced at home within 40 minutes. Genuine product, fair price, and the old battery was taken away for recycling." },
      { name: "Mariam", area: "Jumeirah", quote: "Quick and professional service. The technician tested my alternator too before fitting the new Amaron battery." },
      { name: "Faisal", area: "Al Qusais", quote: "Booked online late at night and the team still arrived within 45 minutes with a genuine Amaron battery. Great experience." },
    ],
    faqs: [
      { q: "Are your Amaron batteries genuine?", a: "Yes, 100% genuine Amaron batteries with full manufacturer warranty." },
      { q: "How long does installation take?", a: "Most replacements take under 15 minutes once the technician arrives." },
      { q: "Do you offer warranty on Amaron batteries?", a: "Yes, 12-24 month warranty depending on the model." },
      { q: "Can you fit an Amaron battery for any car model?", a: "Yes, we stock sizes for sedans, SUVs, and most popular models in the UAE." },
      { q: "Do you offer doorstep delivery for Amaron batteries?", a: "Yes, we deliver and fit at your home, office, or roadside location, 24/7." },
      { q: "What happens to my old Amaron battery?", a: "We collect and recycle it according to UAE environmental standards, free of charge." },
    ],
    showAreas: true,
  },
  {
    slug: "bosch",
    image: "/images/battery-brands/bosch.jpg",
    title: "Bosch Battery",
    description:
      "Bosch batteries combine German engineering with high cranking power for reliable starts in any weather.",
    intro:
      "Need a Bosch battery replacement in Dubai? Bosch batteries are engineered in Germany for high cranking power and dependable starts, even in extreme heat — a top choice for both everyday cars and performance vehicles.\n\nBattery Store fits genuine Bosch batteries at your location across Dubai, with free diagnostics and same-day service.",
    stats,
    serviceHighlights,
    getStarted,
    whyChooseUsTitle: "Why Choose Battery Store for Bosch Battery Replacement?",
    whyChooseUsIntro: "Here's what sets our Bosch battery service apart:",
    whyChooseUs: [
      "Genuine Bosch batteries with full manufacturer warranty",
      "High cranking power suited to Dubai's summer heat",
      "Free on-site delivery and installation, 24/7",
      "Free battery and alternator diagnostics before replacement",
      "30-45 minute average response time across Dubai",
      "Transparent pricing with no hidden charges",
    ],
    whyChooseUsClosing: "German engineering, fitted at your doorstep — that's the Battery Store promise.",
    signs: {
      title: "Common Signs Your Bosch Battery Needs Replacement",
      intro: "Don't wait for a complete breakdown — look out for:",
      list: [
        "Slow or struggling engine crank on startup",
        "Dashboard battery warning light staying on",
        "Dim headlights or interior lights",
        "Battery older than 2-3 years",
        "Swelling, corrosion, or leakage on the case or terminals",
      ],
    },
    testimonials: [
      { name: "Daniel", area: "Dubai Marina", quote: "Bosch battery fitted within the hour. Technician was knowledgeable and the price was upfront with no surprises." },
      { name: "Aisha", area: "Mirdif", quote: "Reliable service — my car starts perfectly even in summer heat now." },
      { name: "Imran", area: "Al Warqa", quote: "Called Battery Store after my car wouldn't start. Bosch battery fitted in 35 minutes, no issues since." },
    ],
    faqs: [
      { q: "Are your Bosch batteries genuine?", a: "Yes, 100% genuine Bosch batteries with full manufacturer warranty." },
      { q: "Why choose Bosch over other brands?", a: "Bosch batteries offer high cranking power and reliable performance in extreme heat." },
      { q: "Do you offer warranty on Bosch batteries?", a: "Yes, 12-24 month warranty depending on the model." },
      { q: "Can you fit a Bosch battery for luxury cars?", a: "Yes, we stock sizes for sedans, SUVs, and most luxury models." },
      { q: "Do you deliver Bosch batteries to my home or office?", a: "Yes, we deliver and fit at your location, 24/7, anywhere in Dubai." },
      { q: "What happens to my old Bosch battery?", a: "We collect and recycle it free of charge per UAE environmental standards." },
    ],
    showAreas: true,
  },
  {
    slug: "varta",
    image: "/images/battery-brands/varta.jpg",
    title: "Varta Battery",
    description:
      "Varta batteries offer premium AGM and calcium technology for vehicles with high electrical demand.",
    intro:
      "Need a Varta battery replacement in Dubai? Varta batteries use premium AGM and calcium technology, built for vehicles with high electrical demand — including Start-Stop systems and cars loaded with electronics.\n\nBattery Store delivers and fits genuine Varta batteries at your location, 24/7, with free diagnostics before every replacement.",
    stats,
    serviceHighlights,
    getStarted,
    whyChooseUsTitle: "Why Choose Battery Store for Varta Battery Replacement?",
    whyChooseUsIntro: "Here's why Varta owners across Dubai choose us:",
    whyChooseUs: [
      "Genuine Varta AGM and calcium batteries with full warranty",
      "Specialist fitment for Start-Stop and high-electrical-demand vehicles",
      "Free on-site delivery and installation, 24/7",
      "Free battery and alternator diagnostics before replacement",
      "30-45 minute average response time across Dubai",
      "Transparent pricing with no hidden charges",
    ],
    whyChooseUsClosing: "Premium AGM power, fitted properly — so your vehicle's electronics stay protected.",
    signs: {
      title: "Common Signs Your Varta Battery Needs Replacement",
      intro: "Watch for these warning signs, especially on Start-Stop vehicles:",
      list: [
        "Start-Stop system disabling itself frequently",
        "Slow or struggling engine crank on startup",
        "Dashboard battery warning light staying on",
        "Battery older than 2-3 years",
        "Swelling, corrosion, or leakage on the case or terminals",
      ],
    },
    testimonials: [
      { name: "Hamad", area: "Business Bay", quote: "My car's Start-Stop kept failing. Battery Store diagnosed it as the battery and fitted a genuine Varta AGM on the spot." },
      { name: "Lina", area: "Downtown Dubai", quote: "Professional service, genuine Varta battery, and the technician explained everything clearly." },
      { name: "Khalifa", area: "Dubai Hills", quote: "My SUV is loaded with electronics — Varta AGM was the right call and Battery Store fitted it same day." },
    ],
    faqs: [
      { q: "Are your Varta batteries genuine?", a: "Yes, 100% genuine Varta batteries including AGM and calcium technology, with full warranty." },
      { q: "Is Varta suitable for Start-Stop vehicles?", a: "Yes, Varta AGM batteries are specifically designed for Start-Stop systems and high electrical loads." },
      { q: "Do you offer warranty on Varta batteries?", a: "Yes, 12-24 month warranty depending on the model." },
      { q: "Can you fit a Varta battery for any car model?", a: "Yes, including vehicles with Start-Stop and high electrical demand." },
      { q: "Do you deliver Varta batteries to my home or office?", a: "Yes, we deliver and fit at your location, 24/7, anywhere in Dubai." },
      { q: "What happens to my old Varta battery?", a: "We collect and recycle it free of charge per UAE environmental standards." },
    ],
    showAreas: true,
  },
  {
    slug: "dynex",
    image: "/images/battery-brands/dynex.jpg",
    title: "Dynex Battery",
    description:
      "Dynex batteries provide dependable everyday performance at a competitive price point.",
    intro:
      "Need a Dynex battery replacement in Dubai? Dynex batteries offer dependable everyday performance at a competitive price — a smart choice for drivers who want reliability without overspending.\n\nBattery Store delivers and fits genuine Dynex batteries at your location, 24/7, with free diagnostics before every replacement.",
    stats,
    serviceHighlights,
    getStarted,
    whyChooseUsTitle: "Why Choose Battery Store for Dynex Battery Replacement?",
    whyChooseUsIntro: "Here's why budget-conscious drivers across Dubai choose us:",
    whyChooseUs: [
      "Genuine Dynex batteries with full manufacturer warranty",
      "Dependable everyday performance at a competitive price",
      "Free on-site delivery and installation, 24/7",
      "Free battery and alternator diagnostics before replacement",
      "30-45 minute average response time across Dubai",
      "Transparent pricing with no hidden charges",
    ],
    whyChooseUsClosing: "Reliable power without the premium price tag — fitted at your doorstep.",
    signs: {
      title: "Common Signs Your Dynex Battery Needs Replacement",
      intro: "Watch out for these warning signs before you're left stranded:",
      list: [
        "Slow or struggling engine crank on startup",
        "Dashboard battery warning light staying on",
        "Dim headlights or interior lights",
        "Battery older than 2-3 years",
        "Swelling, corrosion, or leakage on the case or terminals",
      ],
    },
    testimonials: [
      { name: "Karim", area: "Al Nahda", quote: "Affordable Dynex battery, fitted quickly. Great option if you don't want to overspend but still want reliability." },
      { name: "Noor", area: "Deira", quote: "Good value for money and the technician was polite and fast." },
      { name: "Bilal", area: "Al Mizhar", quote: "Needed a budget-friendly replacement fast. Dynex battery fitted within 30 minutes, no complaints." },
    ],
    faqs: [
      { q: "Are your Dynex batteries genuine?", a: "Yes, 100% genuine Dynex batteries with full manufacturer warranty." },
      { q: "Is Dynex a budget option?", a: "Yes, Dynex offers dependable performance at a more competitive price point." },
      { q: "Do you offer warranty on Dynex batteries?", a: "Yes, 12-18 month warranty depending on the model." },
      { q: "Can you fit a Dynex battery for any car model?", a: "Yes, we stock sizes for sedans, SUVs, and most popular models." },
      { q: "Do you deliver Dynex batteries to my home or office?", a: "Yes, we deliver and fit at your location, 24/7, anywhere in Dubai." },
      { q: "What happens to my old Dynex battery?", a: "We collect and recycle it free of charge per UAE environmental standards." },
    ],
    showAreas: true,
  },
  {
    slug: "max-gold",
    image: "/images/battery-brands/max-gold.jpg",
    title: "Max Gold Battery",
    description:
      "Max Gold batteries are built for durability and consistent performance in extreme temperatures.",
    intro:
      "Need a Max Gold battery replacement in Dubai? Max Gold batteries are built for durability and consistent performance in extreme temperatures — ideal for Dubai's harsh summer heat.\n\nBattery Store delivers and fits genuine Max Gold batteries at your location, 24/7, with free diagnostics before every replacement.",
    stats,
    serviceHighlights,
    getStarted,
    whyChooseUsTitle: "Why Choose Battery Store for Max Gold Battery Replacement?",
    whyChooseUsIntro: "Here's why drivers across Dubai trust us for Max Gold fitment:",
    whyChooseUs: [
      "Genuine Max Gold batteries with full manufacturer warranty",
      "Built for durability in extreme heat conditions",
      "Free on-site delivery and installation, 24/7",
      "Free battery and alternator diagnostics before replacement",
      "30-45 minute average response time across Dubai",
      "Transparent pricing with no hidden charges",
    ],
    whyChooseUsClosing: "Built tough for Dubai's heat, fitted fast at your location.",
    signs: {
      title: "Common Signs Your Max Gold Battery Needs Replacement",
      intro: "Watch out for these warning signs before you're left stranded:",
      list: [
        "Slow or struggling engine crank on startup",
        "Dashboard battery warning light staying on",
        "Dim headlights or interior lights",
        "Battery older than 2-3 years",
        "Swelling, corrosion, or leakage on the case or terminals",
      ],
    },
    testimonials: [
      { name: "Rashid", area: "Al Quoz", quote: "Max Gold battery has held up well through the summer. Fast installation and fair pricing." },
      { name: "Sana", area: "Al Barsha", quote: "Technician explained why Max Gold suited my car and fitted it within 30 minutes." },
      { name: "Omar", area: "Jebel Ali", quote: "Max Gold battery still going strong after the peak summer heat. Good advice from the technician on which model to pick." },
    ],
    faqs: [
      { q: "Are your Max Gold batteries genuine?", a: "Yes, 100% genuine Max Gold batteries with full manufacturer warranty." },
      { q: "Is Max Gold good for hot climates?", a: "Yes, it's built specifically for durability and performance in extreme temperatures." },
      { q: "Do you offer warranty on Max Gold batteries?", a: "Yes, 12-24 month warranty depending on the model." },
      { q: "Can you fit a Max Gold battery for any car model?", a: "Yes, we stock sizes for sedans, SUVs, and most popular models." },
      { q: "Do you deliver Max Gold batteries to my home or office?", a: "Yes, we deliver and fit at your location, 24/7, anywhere in Dubai." },
      { q: "What happens to my old Max Gold battery?", a: "We collect and recycle it free of charge per UAE environmental standards." },
    ],
    showAreas: true,
  },
  {
    slug: "max-part",
    image: "/images/battery-brands/max-part.jpg",
    title: "Max Part Battery",
    description:
      "Max Part batteries deliver reliable starting power with a full manufacturer warranty.",
    intro:
      "Need a Max Part battery replacement in Dubai? Max Part batteries deliver reliable starting power backed by a full manufacturer warranty — a solid everyday choice for UAE drivers.\n\nBattery Store delivers and fits genuine Max Part batteries at your location, 24/7, with free diagnostics before every replacement.",
    stats,
    serviceHighlights,
    getStarted,
    whyChooseUsTitle: "Why Choose Battery Store for Max Part Battery Replacement?",
    whyChooseUsIntro: "Here's why drivers across Dubai trust us for Max Part fitment:",
    whyChooseUs: [
      "Genuine Max Part batteries with full manufacturer warranty",
      "Reliable starting power for everyday driving",
      "Free on-site delivery and installation, 24/7",
      "Free battery and alternator diagnostics before replacement",
      "30-45 minute average response time across Dubai",
      "Transparent pricing with no hidden charges",
    ],
    whyChooseUsClosing: "Reliable starts, backed by full warranty, fitted at your doorstep.",
    signs: {
      title: "Common Signs Your Max Part Battery Needs Replacement",
      intro: "Watch out for these warning signs before you're left stranded:",
      list: [
        "Slow or struggling engine crank on startup",
        "Dashboard battery warning light staying on",
        "Dim headlights or interior lights",
        "Battery older than 2-3 years",
        "Swelling, corrosion, or leakage on the case or terminals",
      ],
    },
    testimonials: [
      { name: "Tariq", area: "Jumeirah Village Circle", quote: "Max Part battery fitted same day. Reliable so far and the warranty gives peace of mind." },
      { name: "Huda", area: "Al Karama", quote: "Good honest service, fair price, and quick installation." },
      { name: "Salim", area: "International City", quote: "Booked online, technician arrived within 40 minutes and fitted a Max Part battery at a fair price." },
    ],
    faqs: [
      { q: "Are your Max Part batteries genuine?", a: "Yes, 100% genuine Max Part batteries with full manufacturer warranty." },
      { q: "Do you offer warranty on Max Part batteries?", a: "Yes, 12-18 month warranty depending on the model." },
      { q: "Can you fit a Max Part battery for any car model?", a: "Yes, we stock sizes for sedans, SUVs, and most popular models." },
      { q: "How fast is installation?", a: "Most replacements take under 15 minutes once the technician arrives." },
      { q: "Do you deliver Max Part batteries to my home or office?", a: "Yes, we deliver and fit at your location, 24/7, anywhere in Dubai." },
      { q: "What happens to my old Max Part battery?", a: "We collect and recycle it free of charge per UAE environmental standards." },
    ],
    showAreas: true,
  },
];

export default batteryBrands;
