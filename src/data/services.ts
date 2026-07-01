export type Service = {
  slug: string;
  title: string;
  description: string;
  intro: string;
  features: string[];
  steps: string[];
  faqs: { q: string; a: string }[];
  pricing?: { item: string; price: string }[];
  whyChooseUsTitle?: string;
  whyChooseUs?: string[];
  whyChooseUsIntro?: string;
  whyChooseUsClosing?: string;
  introSection?: { title: string; paragraph: string };
  whyEssential?: { title: string; intro: string; causes?: string[]; closing?: string };
  getStarted?: { title?: string; intro: string; steps: { title: string; text: string }[] };
  whoNeedsIt?: { title: string; intro: string; list?: string[]; safetyNote?: string };
  beyondJumpstart?: { title: string; intro: string; services: string[]; closing?: string };
  whyPartner?: { title: string; intro: string; points?: string[]; closing?: string };
  vehicleTypes?: { title: string; intro: string; list: string[] };
  serviceHighlights?: { title: string; intro?: string; items: { icon: string; title: string; description: string }[] };
  costFactorsTitle?: string;
  costFactorsParagraph?: string;
  costFactors?: string[];
  costFactorsDetailed?: { icon: string; title: string; description: string; image?: string }[];
  pricingTitle?: string;
  pricingNote?: string;
  pricingIntro?: { title: string; paragraphs: string[] };
  testimonials?: { name: string; area: string; quote: string }[];
  showBrands?: boolean;
  showAreas?: boolean;
  heroImage?: string;
};

const services: Service[] = [
  {
    slug: "car-battery-replacement",
    heroImage: "/images/about/battery-rep (2).png",
    title: "Car Battery Replacement",
    description:
      "Fast on-site car battery replacement with genuine, warrantied batteries delivered and fitted at your home, office, or roadside location.",
    intro:
      "Need an online or emergency car battery replacement in Dubai? We deliver and install genuine Amaron, Varta, and Bosch batteries at your location in 30-45 minutes or less, 24/7.",
    features: [
      "Free delivery & installation at your location",
      "Genuine Amaron, Varta, and Bosch batteries with full warranty",
      "30-45 minute average response time across Dubai",
      "Free battery and alternator diagnostics before replacement",
      "Transparent pricing with no hidden charges",
      "Old battery collected and recycled per UAE environmental standards",
    ],
    steps: [
      "Call or book online with your location and vehicle details",
      "Share your live location via WhatsApp or the booking form",
      "Technician arrives within 30-45 minutes and diagnoses first",
      "Genuine battery fitted on the spot with warranty documentation",
    ],
    faqs: [
      { q: "How long does it take to replace a car battery?", a: "Our technicians arrive within 30-45 minutes and replace the battery on-site in under 15 minutes." },
      { q: "Are your batteries genuine and do they come with warranty?", a: "Yes — all batteries come with 12, 18, or 24 month warranty and 1 time free replacement." },
      { q: "Is there a charge for on-site diagnostics?", a: "No call-out fee. Diagnostics are free if you proceed with a replacement." },
      { q: "Do you provide emergency services during holidays?", a: "Yes — we are available 24/7, 365 days a year, including all UAE public holidays." },
    ],
  },
  {
    slug: "battery-diagnostics-jumpstart",
    heroImage: "/images/about/jumpstart.png",
    title:
      "Car Jumpstart Service in Dubai – Fast, Safe & On-Demand jumpstart packages start at just AED 99",
    description:
      "Full battery health diagnostics and emergency jumpstart service to get your car running again in minutes.",
    intro:
      "A Car Jumpstart Service is one of the fastest roadside helping services that can start your vehicle in case it dies. It charges the engine with external energy and helps you get back on the road without having to change the battery. It is necessary when your auto does not start because of a damaged or low battery.\n\nBattery Store will assist in car jumpstarting services across all locations in Dubai quickly and safely. All it takes is one call to have your car back to life and yourself back on the road. You can safely rely on us.",
    whyEssential: {
      title: "Why Is a Car Jumpstart Essential?",
      intro:
        "A dead battery can strike anytime, especially during the hot Dubai summers or after long hours of vehicle inactivity. A jumpstart is often the quickest and most effective solution to restart your engine without the need for a full battery replacement.",
      causes: [
        "Leaving headlights or cabin lights on",
        "Long periods of vehicle inactivity",
        "Extreme weather conditions",
        "Faulty alternator (yes, we check that too!)",
        "Corroded battery terminals",
      ],
      closing:
        "Ignoring a dead battery could leave you stranded in unsafe locations or miss important commitments. That's why our fast and reliable jumpstart service is essential — so you're never left waiting.",
    },
    getStarted: {
      title: "Get Started in 3 Easy Steps",
      intro: "You don't need an app or wait for hours. Getting help is as easy as:",
      steps: [
        { title: "Call or Contact Us", text: "Reach out to our hotline or WhatsApp for instant service." },
        { title: "Share Your Location", text: "Tell us where you are in Dubai — home, mall, office, or roadside." },
        { title: "Sit Back and Relax", text: "Our technician will be on the way with all the tools needed to jumpstart your car." },
      ],
    },
    whoNeedsIt: {
      title: "Who Needs a Jumpstart? Is It Safe?",
      intro: "Anyone driving a car, SUV, van, or even a luxury vehicle can face a dead battery — it's more common than you think.",
      list: ["Daily commuters", "Rideshare drivers", "Tourists using rental cars", "Fleet vehicles", "Car owners with aging batteries"],
      safetyNote: "And yes — it's completely safe when done professionally. Our team follows all the necessary steps to avoid short circuits or damage to your electrical components.",
    },
    beyondJumpstart: {
      title: "Beyond Jumpstarts – Complete Battery Support",
      intro: "A jumpstart might not be enough if your battery is damaged or your alternator isn't charging properly. That's why Battery Store offers more than just jumpstarting:",
      services: [
        "Car Battery Replacement – On-site installation with premium brands.",
        "Car Alternator Repair – Faulty alternators are common culprits for dead batteries.",
        "Emergency Fuel Delivery – Ran out of fuel? We bring it to you.",
        "Flat Tire Assistance – Quick repair or replacement on the spot.",
        "Battery Diagnostics – Digital reports and performance checks.",
      ],
      closing: "We're not just a jumpstart service — we're your complete vehicle rescue partner in Dubai.",
    },
    whyPartner: {
      title: "Why Battery Store Dubai is Your Go-To Jumpstart Partner",
      intro: "In a city like Dubai, every minute counts. Whether you're heading to a meeting, airport, or just out for errands, a dead battery can disrupt your day.\n\nWith Battery Store, you're guaranteed:",
      points: [
        "24/7 Emergency Service",
        "Trained, friendly technicians",
        "Fast arrival times",
        "Accurate diagnostics",
        "Affordable pricing",
        "Full vehicle support beyond jumpstarts",
      ],
      closing: "Our commitment is to keep you moving, safely and reliably — anytime, anywhere.",
    },
    features: [
      "24/7 availability, including weekends and holidays",
      "30-minute average response time",
      "Professional-grade equipment for zero-damage jumpstarts",
      "Free battery and alternator health check included",
      "Transparent pricing with no hidden charges",
    ],
    steps: [
      "Arrival and Assessment — We reach your location, inspect the battery, and check for visible damage or leakage.",
      "Safety Setup — Our technicians use insulated cables and professional-grade power sources to prevent any sparks or short circuits.",
      "Battery Jumpstart — We connect your battery with the jump pack and carefully bring it to life.",
      "System Check — Post-jumpstart, we check alternator health and battery performance to ensure everything's working.",
      "Customer Guidance — If we detect a failing battery or alternator, we advise you on the next steps — repair or replacement, at your convenience.",
    ],
    faqs: [
      { q: "What is the response time?", a: "Generally 30-45 minutes depending on traffic and location." },
      { q: "Is the jumpstart process safe for my car?", a: "Yes, the professional process is safe and follows manufacturer guidelines." },
      { q: "What if my car won't start after the jumpstart?", a: "We run diagnostic testing to identify the root cause and recommend further service if needed." },
      { q: "Is a membership required?", a: "No — it's a pay-as-you-go service available the moment you call." },
      { q: "Are you available at night or on holidays?", a: "Yes, 24/7, 365 days a year." },
    ],
    pricingIntro: {
      title: "Affordable Jumpstart Packages – No Surprises",
      paragraphs: [
        "We believe in transparent, competitive pricing for all our services. Our jumpstart packages start at just AED 99, depending on the vehicle and location.",
        "You won't be overcharged or upsold — just honest help when you need it most.",
      ],
    },
    pricing: [
      { item: "Standard jumpstart", price: "From AED 99" },
      { item: "Budget call-out", price: "AED 80-100" },
      { item: "Night / weekend / holiday call-out", price: "AED 200+" },
      { item: "Alternator check or electrical diagnosis add-on", price: "Added to the line price" },
    ],
    whyChooseUsTitle: "Why Choose Battery Store's Car Jumpstart Service?",
    whyChooseUsIntro:
      "There are plenty of car service providers in Dubai — but Battery Store stands out because we specialize in immediate roadside support, especially jumpstarts.",
    whyChooseUs: [
      "24/7 Availability – Anytime, any day, including weekends and holidays.",
      "30-Minute Response – We reach you fast and get you moving even faster.",
      "Experienced Technicians – No guesswork, just expert service.",
      "Safe Jumpstart Process – We use professional-grade equipment to ensure zero damage.",
      "Battery Health Check – We inspect your battery and alternator to diagnose deeper issues.",
      "Transparent Pricing – No hidden charges, no surprises.",
    ],
    whyChooseUsClosing:
      "Our goal is simple: to make sure you're never left stuck because of a dead battery.",
    costFactorsTitle: "What Affects the Cost of a Car Jumpstart Service in Dubai?",
    costFactorsParagraph:
      "When it comes to jumpstarting a vehicle, pricing isn't always one-size-fits-all. Several key factors influence how much you'll pay for a car jumpstart service in Dubai:",
    costFactorsDetailed: [
      {
        icon: "location",
        title: "Site of the Breakdown",
        description:
          "Your car can stall in a busy place or outside the city center, such as Downtown Dubai, JLT, and Business Bay, and extra traveling will attract extra charges. The more the technician must travel, the higher the service cost may be.",
        image: "/images/about/site of breakdown.png",
      },
      {
        icon: "clock",
        title: "Service Time (Day or Night)",
        description:
          "The late-night or weekend, or holiday emergency jumpstart call might have surge pricing. The reason is that many of the providers are open 24/7, but they charge an extra cost when their services are off-peak.",
        image: "/images/about/day-or-night.png",
      },
      {
        icon: "car",
        title: "Vehicle Type",
        description:
          "The overall price might be affected by the fact that bigger vehicles like the SUV, 4x4, or luxurious vehicles might need specialized equipment or a more powerful capacity booster.",
        image: "/images/about/vehicle-type.png",
      },
      {
        icon: "battery",
        title: "Battery Condition",
        description:
          "In the event of a dead battery or one that cannot be rejuvenated at all, it is possible that a jump start alone is not a cure. Where this occurs, a replacement of the battery may be suggested by the technician, which will end up requiring extra cash.",
        image: "/images/about/battery-condition.png",
      },
      {
        icon: "building",
        title: "Service Provider",
        description:
          "Different organizations propose various levels of prices depending on the brand popularity and technician experience, as well as some extras (e.g., warranty, diagnostics free of charge, after-repair services). Budget services can begin at AED 80-100, and the top end of the spectrum of emergency services can reach AED 200 and above, depending on the situation.",
      },
      {
        icon: "wrench",
        title: "Additional Services",
        description:
          "In case your car requires additional service that may include an alternator check, electrical diagnosis, and other minor mechanical work, these items can be added to the standard line jumpstart price.",
      },
    ],
    testimonials: [
      { name: "Khalid", area: "Downtown Dubai", quote: "Called late at night when my car wouldn't start at the mall. They arrived in about 25 minutes and got me moving again — quick and professional." },
      { name: "Sara", area: "Dubai Marina", quote: "Reliable and reasonably priced. The technician also checked my alternator and flagged it needed replacing soon — appreciated the honesty." },
      { name: "Omar", area: "Dubai Sports City", quote: "Best jumpstart experience I've had in Dubai. Pricing was upfront and the team was friendly throughout." },
    ],
    showBrands: true,
    showAreas: true,
  },
  {
    slug: "tyre-replacement",
    heroImage: "/images/about/tyre replacement.png",
    title: "Tyre Replacement Dubai – We Reach You in 30-45 Minutes",
    description:
      "On-site tyre replacement with a wide range of tyre brands and sizes, fitted at your location.",
    intro:
      "Flat tyre change in Dubai, starting from AED 99, in just 30 minutes. We fit a new tyre or your spare at your location — home, work, or the roadside — no towing needed.\n\nOur mobile tyre fitment vans carry a wide range of brands and sizes, so whether you need a single tyre swapped or a full set replaced, Battery Store handles it on-site, 24/7.",
    introSection: {
      title: "Mobile Tyre Replacement, Wherever You Are",
      paragraph:
        "Worn out, damaged, or blown tyres don't have to mean a trip to the workshop. Our technicians arrive within 30-45 minutes anywhere in Dubai, carrying a stock of common tyre sizes and brands, and fit a new tyre or your spare on the spot — so you can get back on the road safely without towing.",
    },
    serviceHighlights: {
      title: "Our Complete Roadside & Car Service in Dubai",
      intro: "While we're at your location, we can also take care of:",
      items: [
        { icon: "wrench", title: "Tyre Fitting", description: "New tyre or spare fitted, balanced, and pressure-checked on the spot." },
        { icon: "car", title: "Roadside Assistance", description: "Breakdowns and minor issues handled wherever you're parked or stranded." },
        { icon: "battery", title: "Battery Replacement", description: "Genuine batteries delivered and installed if your battery also needs replacing." },
        { icon: "clock", title: "Car Diagnostics", description: "Quick health checks on tyres, battery, and alternator while on-site." },
      ],
    },
    getStarted: {
      title: "How Our Tyre Replacement Works",
      intro: "Getting a new tyre fitted is simple:",
      steps: [
        { title: "Call or Book Online", text: "Share your location, vehicle, and tyre size." },
        { title: "We Dispatch Immediately", text: "A mobile tyre van reaches you in 30-45 minutes." },
        { title: "Tyre Fitted On-Site", text: "We mount, balance, and check pressure on the spot." },
        { title: "Drive Away Safely", text: "You're back on the road — no towing required." },
      ],
    },
    vehicleTypes: {
      title: "All You Need in One Place",
      intro: "Our mobile units are equipped to handle:",
      list: [
        "Sedans, SUVs, and 4x4s",
        "Commercial vans and light trucks",
        "Standard and run-flat tyres",
        "Battery jumpstart and replacement add-ons",
        "Emergency fuel delivery if needed",
        "Towing assistance for serious issues",
      ],
    },
    whyPartner: {
      title: "The Best Tyre Solution for Your Car",
      intro: "Whatever you drive, we carry the right tyre options and tools to get it done properly the first time.",
      points: [
        "Wide stock of tyre brands and sizes carried on every van",
        "Technicians trained across vehicle classes, from sedans to 4x4s",
        "Honest guidance — repair when possible, replace when necessary",
        "Service backed by warranty on fitment and workmanship",
      ],
    },
    whyChooseUsTitle: "Why Choose Battery Store?",
    whyChooseUsIntro: "Here's why drivers across Dubai trust us for tyre replacement:",
    whyChooseUs: [
      "24/7 availability — flat tyre at 2 AM? We're ready",
      "Mobile tyre fitment vans equipped to handle all vehicle types",
      "Fast response, typically at your location in 30-45 minutes",
      "Expert technicians for cars, SUVs, 4x4s, and commercial vehicles",
      "Transparent pricing with no hidden charges",
      "Citywide coverage across Dubai",
    ],
    costFactors: [
      "Tyre brand and size selected",
      "Number of tyres being replaced",
      "Vehicle type — sedan, SUV, 4x4, or commercial",
      "Time of call-out — standard hours vs night/holiday",
    ],
    pricingNote: "Tyre replacement starts from AED 99 — we confirm exact pricing for your tyre size and brand before starting.",
    features: [
      "24/7 availability — flat tyre at 2 AM? We're ready",
      "Mobile tyre fitment vans equipped to handle all vehicle types",
      "Fast response, typically at your location in 30-45 minutes",
      "Expert technicians for cars, SUVs, 4x4s, and commercial vehicles",
      "Transparent pricing with no hidden charges",
      "Citywide coverage across Dubai",
    ],
    steps: [
      "Call Battery Store or book online",
      "Technician arrives within 30-45 minutes",
      "Tyre changed — drive away safely",
    ],
    faqs: [
      { q: "What's the response time?", a: "Average of 30-45 minutes across Dubai, available 24/7 including weekends and holidays." },
      { q: "What vehicle types are served?", a: "Commercial vehicles, 4x4s, SUVs, sedans, and standard or run-flat tyres." },
      { q: "What if I have no spare tyre?", a: "Our mobile units stock quality replacement options to fit your vehicle and budget." },
      { q: "What payment methods do you accept?", a: "Cash, credit/debit cards, and online payments." },
      { q: "Do you replace more than one tyre at a time?", a: "Yes, our vans carry stock for full-set replacements, not just single tyres." },
    ],
    showBrands: true,
    showAreas: true,
  },
  {
    slug: "tyre-repair",
    heroImage: "/images/about/tyre-repair.png",
    title: "Tyre Repair Dubai – On-Site in 30-45 Minutes",
    description:
      "Professional tyre puncture repair to get you safely back on the road without a full replacement.",
    intro:
      "Flat tyre repair in Dubai — we come to you, 24/7. Our technicians arrive quickly to fix tyres on-site so you can resume your journey without delays or towing.\n\nMost punctures can be plugged or patched on the spot, saving you the cost of a full replacement, while our vans also carry spares for the cases where a patch isn't enough.",
    introSection: {
      title: "Mobile Tyre Repair, Wherever You Are",
      paragraph:
        "A nail, screw, or sharp debris can puncture a tyre anywhere — at home, at work, or mid-drive. Battery Store's mobile repair vans reach you in 30-45 minutes anywhere in Dubai, inspect the damage, and patch or plug the puncture so you're back on the road without needing a tow.",
    },
    serviceHighlights: {
      title: "Our Complete Roadside & Car Service in Dubai",
      intro: "While we're fixing your tyre, we can also take care of:",
      items: [
        { icon: "wrench", title: "Tyre Fitting", description: "Puncture repair, patching, or spare/replacement tyre fitting on the spot." },
        { icon: "car", title: "Roadside Assistance", description: "Lockouts, breakdowns, and minor repairs handled wherever you're stranded." },
        { icon: "battery", title: "Battery Replacement", description: "Genuine batteries delivered and fitted at your location if your battery also needs it." },
        { icon: "clock", title: "Car Diagnostics", description: "Quick checks on battery, alternator, and tyre health while we're already there." },
      ],
    },
    getStarted: {
      title: "Repair Process Explained",
      intro: "Here's how we fix your tyre, step by step:",
      steps: [
        { title: "Inspection", text: "We examine the tyre to locate the puncture and assess the damage." },
        { title: "Repair or Patch", text: "The puncture is plugged or patched using professional-grade tools." },
        { title: "Reinflate & Balance", text: "Tyre is reinflated, balanced, and checked for correct pressure." },
        { title: "Final Safety Check", text: "We confirm the repair is roadworthy before you drive off." },
      ],
    },
    vehicleTypes: {
      title: "All You Need in One Place",
      intro: "From punctures to full roadside support, we cover:",
      list: [
        "Tyre puncture repair and patching",
        "Spare tyre fitting",
        "Battery jumpstart and replacement",
        "On-site roadside diagnostics",
        "Emergency fuel delivery",
        "Towing assistance if needed",
      ],
    },
    whyPartner: {
      title: "The Best Tyre Solution for Your Car",
      intro: "Whether it's a sedan, SUV, or commercial vehicle, our technicians carry the right tools and replacement options for a lasting repair.",
      points: [
        "Quality plug and patch materials built to last",
        "Technicians trained on all tyre types and vehicle classes",
        "Honest advice — repair when safe, replacement when necessary",
        "Service backed by warranty on labour and parts",
      ],
    },
    whyChooseUsTitle: "Why Choose Battery Store?",
    whyChooseUsIntro: "Here's why Dubai drivers trust us for tyre repair:",
    whyChooseUs: [
      "24/7 availability, including weekends and holidays",
      "Quick response — mobile repair vans typically arrive within 30-45 minutes",
      "On-site service wherever you're located",
      "Professional technicians equipped for various tyre issues",
      "Transparent pricing, no hidden charges",
      "Covers all Dubai areas, including underground parking",
    ],
    costFactors: [
      "Severity and location of the puncture",
      "Tyre size and vehicle type",
      "Time of day — night or holiday call-outs",
      "Whether a patch is sufficient or a spare/new tyre is needed",
    ],
    pricingNote: "Most punctures are repaired affordably on the spot — we always confirm the price before starting work.",
    features: [
      "24/7 availability, including weekends and holidays",
      "Quick response — mobile repair vans typically arrive within 30-45 minutes",
      "On-site service wherever you're located",
      "Professional technicians equipped for various tyre issues",
      "Transparent pricing, no hidden charges",
      "Covers all Dubai areas, including underground parking",
    ],
    steps: [
      "Call or book online — share your location and tyre issue",
      "Fully equipped tyre van dispatched to your area",
      "Inspect tyre, locate the puncture, repair or patch it",
      "Reinflate, balance, and verify tyre pressure",
      "Care advice given and completed work documented",
    ],
    faqs: [
      { q: "Can punctures be repaired instead of replaced?", a: "Yes, minor punctures can typically be repaired on-site without replacement." },
      { q: "How long does a repair take?", a: "Most repairs take 20-30 minutes including pressure checks and safety validation." },
      { q: "What if I have no spare tyre?", a: "Not an issue — technicians carry replacement tyres for common makes and sizes." },
      { q: "Is the repair guaranteed?", a: "Yes, labour and parts are guaranteed for plug or patch repairs." },
      { q: "What's the response time?", a: "Average of 30-45 minutes across Dubai, available 24/7 including weekends and holidays." },
    ],
    showBrands: true,
    showAreas: true,
  },
  {
    slug: "flat-tyre-replacement",
    heroImage: "/images/about/flat-tyre-rep.png",
    title: "Flat Tyre Change Service in Dubai – starts from AED 99, in just 30 minutes",
    description:
      "Quick flat tyre replacement service that gets you back on the road safely with minimal downtime.",
    intro:
      "Flat Tyre Change Service is an emergency roadside assistance service that assists in fitting a new tyre or patching a punctured tyre to your vehicle on the spot - at your home or work, or on the road. It provides quick, convenient, and professional assistance without periodically bringing your vehicle to the workshop on a tow truck.\n\nThe issue of a flat tyre can be devastating at the most inconvenient time, when you are going to work, regular family outing, or in the middle of a busy road. We realize how stressful and hazardous this situation may be at Battery Store Dubai. This is what drives us to provide a quick tyre replacement service throughout Dubai, so that you can feel safe and go on the road immediately.\n\nWhether tyre change in Dubai, flat tyre service, or professional mobile tyre fitting anywhere, any time, we still find the time and place to help you.",
    introSection: {
      title: "What Is Our Flat Tyre Change Service?",
      paragraph:
        "Our flat tyre service is designed to get you moving again without the hassle of towing your vehicle. Whether your tyre is punctured, worn out, or completely deflated, our trained team will inspect the damage thoroughly, replace the tyre with your spare or a new one if needed, check wheel alignment if applicable, ensure proper air pressure and safety standards, and offer you tyre purchase options if your spare is missing or unusable. We also assist customers who have lost wheel nuts, damaged rims, or require emergency flat tire help in parking garages or basements.",
    },
    whyEssential: {
      title: "Our Mobile Tyre Fitment Van – A Garage On Wheels",
      intro: "Our mobile tyre fitment vans are fully loaded with:",
      causes: ["Tyre mounting and balancing machines", "Air compressors", "Torque wrenches", "Spare tyres and branded replacements", "Puncture repair kits", "Tyre inflators"],
      closing: "This mobile setup allows us to handle most tyre issues on-site—be it at home, office, roadside, parking garage, or desert track.",
    },
    whyChooseUsTitle: "Why Choose Battery Store's Tyre Change Service?",
    whyChooseUsIntro: "When it comes to mobile tyre services, not all companies are created equal. Here's why Battery Store stands out as your trusted tyre change partner in Dubai:",
    whyChooseUs: [
      "24/7 Availability – Flat tyre at 2 AM? We're ready.",
      "Mobile Tyre Fitment Vans – We come equipped to handle all types of tyre changes on the spot.",
      "Fast Response Time – Typically at your location in 30 minutes or less.",
      "Transparent Pricing – No hidden charges, ever.",
      "Expert Technicians – We handle cars, SUVs, 4x4s, and even commercial vehicles.",
      "Citywide Coverage – From Downtown Dubai to JLT, JVC, and beyond.",
    ],
    getStarted: {
      title: "How Our Tyre Change Service in Dubai Works",
      intro: "Here's how simple it is to get your tyre changed with Battery Store:",
      steps: [
        { title: "Call or Book Online", text: "Reach out to us with your location and vehicle details." },
        { title: "We Dispatch Immediately", text: "Our mobile tyre van will arrive within 30-45 minutes." },
        { title: "Quick Tyre Change On Spot", text: "We'll replace the flat, secure the wheel, and check your tyre pressure." },
        { title: "Get Back on the Road", text: "You're ready to drive again, stress-free." },
      ],
    },
    whyPartner: {
      title: "What You Can Expect from Our Flat Tyre Service in Dubai",
      intro: "Here's what sets our service apart:",
      points: [
        "Speed & Reliability – Our average response time is under 40 minutes.",
        "Professionalism – Clean, trained, uniformed technicians.",
        "Quality Tyres – Choose from top brands like Bridgestone, Michelin, Dunlop, and Pirelli.",
        "Affordable Rates – Competitive and fair pricing with upfront quotes.",
      ],
      closing: "Customer First Approach – We believe in doing the job once and doing it right.",
    },
    whoNeedsIt: {
      title: "Why Flat Tyre Service Matters in Dubai",
      intro: "Driving with a flat or underinflated tyre is risky and can damage your wheel or suspension. Quick tyre change ensures:",
      list: ["Safety for you and others", "Better fuel efficiency", "Extended tyre lifespan", "Smooth ride comfort", "Peace of mind"],
      safetyNote: "In a Hurry to have Flat Tyre Services in Dubai? A flat tyre should not be a hitch. Depending on where you are, such as at home, on the highway, or even in the parking lot, Battery Store Dubai can conveniently bring the service of a seasoned tyre changer to meet you wherever you are. Call us now or fill out our quick service form to get help within minutes.",
    },
    beyondJumpstart: {
      title: "Roadside Assistance For Flat Tyres – Always Ready",
      intro: "At Battery Store, we don't just change tyres—we offer full roadside assistance in Dubai. No need to wait hours or get stuck in the heat—our team responds fast and gets the job done right.",
      services: ["Flat Tyre Replacement", "Puncture Repair", "Jumpstart Services", "Battery Replacement", "Towing Services", "Fuel Delivery"],
    },
    features: [
      "Thorough inspection of the damage",
      "Tyre replacement with your spare or a new one if needed",
      "Wheel alignment check where applicable",
      "Proper air pressure and safety standards ensured",
      "Help with lost wheel nuts, damaged rims, and tricky locations",
      "Citywide coverage, 24/7",
    ],
    steps: [
      "Call Battery Store or book online",
      "Technician arrives within 30-45 minutes",
      "Tyre changed — drive away safely",
    ],
    costFactorsTitle: "Pricing Factors – What Affects Tyre Change Cost in Dubai?",
    costFactorsParagraph: "Several variables affect the cost of your tyre change service:",
    costFactors: [
      "Type of vehicle (sedan, SUV, 4x4, etc.)",
      "Number of tyres to be replaced",
      "Brand and size of tyres",
      "Emergency vs scheduled service",
      "Location (standard roadside or hard-to-access areas)",
    ],
    pricingNote: "On average, tyre change services start from AED 99, and can go higher depending on tyre replacement requirements.",
    faqs: [
      { q: "What can I do when I have a flat tyre in Dubai?", a: "Call or book Battery Store online and our mobile team will reach your location to fit a new tyre or your spare on the spot." },
      { q: "What is the response time of your mobile team?", a: "Typically 30-45 minutes anywhere in Dubai, 24/7." },
      { q: "Do you offer tyre changing services at night or on weekends?", a: "Yes, we're available 24/7 including nights, weekends, and public holidays." },
      { q: "Do you repair any kind of tyres and vehicles?", a: "We handle sedans, SUVs, 4x4s, and commercial vehicles, with both standard and run-flat tyres." },
      { q: "What happens when I do not have a spare tyre?", a: "Our mobile units carry replacement tyre options so we can still get you moving." },
      { q: "What payment methods do you accept?", a: "Cash, credit/debit cards, and online payments." },
      { q: "How can I book a tyre change service?", a: "Call us directly, use the website form, or message us on WhatsApp for 24/7 service." },
    ],
    showBrands: true,
    showAreas: true,
  },
  {
    slug: "flat-tyre-repair",
    heroImage: "/images/about/flat-tyre-rep-1.png",
    title: "Flat Tyre Repair Dubai – Battery Store Comes to You 24/7",
    description:
      "On-the-spot flat tyre patching and repair so you can avoid a costly replacement when possible.",
    intro:
      "Flat tyre repair in Dubai — we come to you, 24/7. Expert technicians arrive quickly to fix tyres on-site so you can resume your journey without delays or towing.\n\nWith over 10 years of experience, Battery Store repairs punctures, patches damaged tyres, and gets you safely back on the road wherever you are in Dubai.",
    introSection: {
      title: "24/7 Tyre Repair Service in Dubai",
      paragraph:
        "A flat tyre rarely happens at a convenient time. Battery Store's mobile tyre repair vans reach you at home, work, or the roadside — inspecting the damage, patching or plugging the puncture, and checking pressure and balance before you drive off, day or night.",
    },
    serviceHighlights: {
      title: "Our Complete Roadside & Car Service in Dubai",
      intro: "Beyond tyre repair, our technicians arrive ready to handle whatever else your car needs:",
      items: [
        { icon: "wrench", title: "Tyre Fitting", description: "Puncture repair, patching, and spare or replacement tyre fitting on the spot." },
        { icon: "car", title: "Roadside Assistance", description: "Lockouts, breakdowns, and minor repairs handled wherever you're stranded." },
        { icon: "battery", title: "Battery Replacement", description: "Genuine batteries delivered and fitted at your location if your battery is also due." },
        { icon: "clock", title: "Car Diagnostics", description: "Quick checks on battery, alternator, and tyre health while we're already on-site." },
      ],
    },
    getStarted: {
      title: "Repair Process Explained",
      intro: "Here's how we get your tyre fixed, step by step:",
      steps: [
        { title: "Inspection", text: "We examine the tyre to locate the puncture and assess the damage." },
        { title: "Repair or Patch", text: "The puncture is plugged or patched using professional-grade tools." },
        { title: "Reinflate & Balance", text: "Tyre is reinflated, balanced, and checked for correct pressure." },
        { title: "Final Safety Check", text: "We confirm the repair is roadworthy before you drive off." },
      ],
    },
    vehicleTypes: {
      title: "All You Need in One Place",
      intro: "From punctures to full roadside support, we cover:",
      list: [
        "Tyre puncture repair and patching",
        "Spare tyre fitting",
        "Battery jumpstart and replacement",
        "On-site roadside diagnostics",
        "Emergency fuel delivery",
        "Towing assistance if needed",
      ],
    },
    whyPartner: {
      title: "The Best Tyre Solution for Your Car",
      intro: "Whether it's a sedan, SUV, or commercial vehicle, our technicians carry the right tools and replacement options for a lasting repair.",
      points: [
        "Quality plug and patch materials built to last",
        "Technicians trained on all tyre types and vehicle classes",
        "Honest advice — repair when safe, replacement when necessary",
        "Service backed by warranty on labour and parts",
      ],
    },
    whyChooseUsTitle: "Why Choose Battery Store?",
    whyChooseUsIntro: "Thousands of Dubai drivers trust Battery Store for fast, reliable tyre repair:",
    whyChooseUs: [
      "24/7 availability, year-round including holidays",
      "Quick response — mobile repair vans typically arrive within 30 minutes",
      "On-site repair or replacement wherever you're located",
      "Comprehensive solutions beyond tyres: battery, jumpstart, fuel, towing",
      "Transparent pricing, multiple payment options accepted",
      "Wide coverage including underground parking",
    ],
    costFactors: [
      "Severity and location of the puncture",
      "Tyre size and vehicle type",
      "Time of day — night or holiday call-outs",
      "Whether a patch is sufficient or a spare/new tyre is needed",
    ],
    pricingNote: "Most punctures are repaired affordably on the spot — we always confirm the price before starting work.",
    features: [
      "24/7 availability, year-round including holidays",
      "Quick response — mobile repair vans typically arrive within 30 minutes",
      "On-site repair or replacement wherever you're located",
      "Comprehensive solutions beyond tyres: battery, jumpstart, fuel, towing",
      "Transparent pricing, multiple payment options accepted",
      "Wide coverage including underground parking",
    ],
    steps: [
      "Call or book online — share your location and tyre issue",
      "Fully equipped tyre van dispatched to your area",
      "Inspect tyre, locate the puncture, repair or patch it",
      "Reinflate, balance, and verify tyre pressure",
      "Care advice given and completed work documented",
    ],
    faqs: [
      { q: "Can punctures be repaired instead of replaced?", a: "Yes, minor punctures can typically be repaired on-site without replacement." },
      { q: "How long does a repair take?", a: "Most repairs take 20-30 minutes including pressure checks and safety validation." },
      { q: "Is underground parking accessible?", a: "Yes, mobile vans can access most basement and multi-level parking areas." },
      { q: "Is the repair guaranteed?", a: "Yes, labour and parts are guaranteed for plug or patch repairs." },
      { q: "Are you available for emergency tyre repair at night?", a: "Yes, we operate 24/7 across Dubai, including weekends and public holidays." },
    ],
    showBrands: true,
    showAreas: true,
  },
  {
    slug: "roadside-assistance",
    heroImage: "/images/about/road-side-assist.png",
    title: "Stuck on the Road? Call Battery Store for 24/7 Roadside Help in Dubai",
    description:
      "24/7 roadside assistance covering breakdowns, lockouts, and minor repairs wherever you are.",
    intro:
      "Roadside emergencies are stressful; no one wants a flat tire, a dead battery, or to run out of fuel. This is where Battery Store Dubai roadside rescue saves your day. You can reach us 24/7, and we are fully equipped and one call away from getting you back on the road safe and fast.\n\nAll our technicians are trained to deal with car breakdowns, jumpstarts, flat tire changes, fuel delivery, and others with an excellent response time and reasonable prices.",
    introSection: {
      title: "Who Are We?",
      paragraph:
        "Battery Store is a reliable company to replace a car battery and provide roadside assistance in Dubai. Built on over a decade of experience, we have assisted thousands of drivers who have been stranded on the road and put them back on route safely.\n\nWe provide top-notch services with unrivaled reliability in the areas of Dubai and beyond. We begin to assist when your car comes to a standstill.",
    },
    whyChooseUsTitle: "Why Choose Battery Store Roadside Assistance?",
    whyChooseUsIntro: "We're not just another car support company. Battery Store stands out because we put drivers first.",
    whyChooseUs: [
      "Quick Response Time – Our arrival is within 30 minutes or less, long wait and delays.",
      "Low, Transparent Pricing – No need to worry about the hidden charges. All services have upfront pricing.",
      "Open 24/7 – Breakdowns are not 9-5, nor are we. Whether it is day or night, rain or shine, we are here to assist.",
      "Qualified Technicians – Our technicians are skilled, experienced, and well-mannered, thus you will feel secure and supported.",
      "On-Site Service – We go to where you are in Dubai; at home, office, roadside, or parking lot.",
    ],
    serviceHighlights: {
      title: "How Can We Assist You?",
      intro: "Our roadside assistance services cover a wide range of emergency car problems across Dubai. Here's how we help you:",
      items: [
        { icon: "battery", title: "Replacing or jumpstarting a car battery", description: "Regardless, whether your car battery is no longer running or simply in need of a boost, we provide immediate jumpstart or car battery replacement at your place." },
        { icon: "car", title: "Flat tyre change", description: "Got a flat tyre? Our roadside assistance comes promptly with the equipment to change your flat tire or install your spare—in a flash, and safely." },
        { icon: "fuel", title: "Emergency Fuel Supply", description: "Ran out of fuel? We bring gas, diesel, or petrol to you wherever you are." },
        { icon: "truck", title: "Towing Car Services", description: "We also have tow truck services in case your car breaks down and cannot be fixed at the roadside, we tow it to a garage that is nearest or any other place that you would like it." },
      ],
    },
    vehicleTypes: {
      title: "Comprehensive Roadside Services — All in One Place",
      intro: "Battery Store isn't limited to just one type of help. We deliver a complete roadside solution, including:",
      list: [
        "Jumpstart Service – Battery dead? Get a quick boost at your spot.",
        "Car Battery Replacement – Get a new premium battery installed instantly.",
        "Flat Tyre Change – We change your tire fast and safely.",
        "Emergency Fuel Delivery – Petrol or diesel delivered when you run out.",
        "Towing Services – For serious issues, we tow to a safe location.",
        "Lockout Assistance – Locked out? We help without damaging your car.",
      ],
    },
    whyEssential: {
      title: "Key Benefits Of Our Roadside Assistance In Dubai",
      intro: "",
      causes: ["Peace of mind on every drive", "Quick service across all Dubai locations", "Support for all vehicle makes & models", "Safe handling and an experienced crew", "No towing unless necessary"],
    },
    whoNeedsIt: {
      title: "Why Roadside Assistance Is Essential In Dubai",
      intro: "Dubai roads can be unpredictable. Extreme heat, traffic delays, or even simple wear and tear can cause unexpected issues. Here's why having a roadside service provider like Battery Store matters:",
      list: ["Long drives or road trips", "Heat-related car breakdowns", "Running out of fuel in remote areas", "Unexpected tire bursts"],
    },
    getStarted: {
      title: "How It Works — Quick & Easy",
      intro: "Getting help is just three simple steps:",
      steps: [
        { title: "Call or Book Online", text: "Contact us via phone or website to request service." },
        { title: "Share Your Location", text: "Our GPS-enabled system ensures we reach you fast." },
        { title: "We Arrive & Fix the Issue", text: "A skilled technician will assist on the spot or arrange towing if needed." },
      ],
    },
    beyondJumpstart: {
      title: "Work Process: We Keep It Simple",
      intro: "Your safety and satisfaction are always our priorities.",
      services: ["Diagnose the problem on arrival", "Repair, replace, or assist as needed", "Ensure your car is ready to drive", "Or tow it to a garage if necessary"],
    },
    whyPartner: {
      title: "Don't Wait on the Road — Call Battery Store Now",
      intro: "We're always ready to help—anytime, anywhere in Dubai.",
      points: ["Call us now for instant roadside help", "Or book a service online in seconds", "We'll reach you in 30 minutes or less"],
    },
    testimonials: [
      { name: "Ahmad", area: "Downtown", quote: "Battery Store helped me within 25 minutes. My tire blew on Sheikh Zayed Road and I was panicking. They arrived fast and handled it professionally." },
      { name: "Fatima", area: "Al Nahda", quote: "I ran out of fuel late at night. Battery Store came with petrol in 20 minutes. Super fast and affordable!" },
      { name: "Hassan", area: "Downtown Dubai", quote: "They replaced my dead car battery on the spot. No extra charges and the technician was very polite." },
    ],
    showBrands: true,
    showAreas: true,
    features: [
      "Arrival within 30 minutes or less",
      "Available 24/7, 365 days a year, across all Dubai locations",
      "Skilled, experienced, well-mannered technicians",
      "Transparent, upfront pricing with no hidden charges",
      "Support for all vehicle makes and models",
      "Battery replacement, towing, fuel delivery, and tyre services",
    ],
    steps: [
      "Call or book online to request service",
      "Share your location for GPS-enabled rapid dispatch",
      "We arrive and fix the issue on-site or arrange towing",
    ],
    faqs: [
      { q: "How fast can you reach me in Dubai?", a: "Typically within 30 minutes, depending on your location and traffic." },
      { q: "Do you provide fuel delivery?", a: "Yes, diesel and petrol delivery is available throughout Dubai." },
      { q: "Do you replace car batteries on-site?", a: "Yes, with premium batteries and warranty coverage if a replacement is needed on-site." },
      { q: "Can you help if I'm locked out?", a: "Yes, our technicians are trained in non-damaging unlocking techniques." },
      { q: "How do I pay?", a: "Cash, card, or online transfer." },
    ],
  },
  {
    slug: "car-towing-recovery",
    heroImage: "/images/about/car towing.png",
    title: "Car Towing Service Dubai",
    description:
      "Professional car towing and recovery for accidents, breakdowns, or vehicles stuck off-road.",
    intro:
      "Battery Store UAE provides efficient and expert towing and roadside assistance services. Our committed team is available around the clock to ensure you receive hassle-free help whenever you need it.",
    introSection: {
      title: "About Battery Store's Tow Truck Service in Dubai",
      paragraph:
        "Battery Store is the one-stop service provider of emergency tow truck Dubai and roadside assistance in the United Arab Emirates. We provide quick, smooth, and professional car towing services. Regardless of whether your battery is dead, your tyre is flat, or you have met with an accident, or are stuck somewhere. Our mobile services are ready 24/7. When you need support, we provide a reliable source.",
    },
    whyChooseUsTitle: "Why Choose Our Tow Truck Dubai Service?",
    whyChooseUs: [
      "Full Range of Recovery Services – We provide more than towing: flat tyre change, battery boost, fuel delivery, car unlocking, basement or sand pull-out, and specialized services for sports and luxury vehicles.",
      "24/7 Rapid Response – Available any time, day or night, our tow truck Dubai team reaches you within 30 to 45 minutes. No waiting, no hassle.",
      "Skilled & Certified Technicians – Our operators are trained in safe vehicle handling, lift operations, and towing protocols. Licensed for accident and breakdown recovery in Dubai.",
      "State-of-the-Art Towing – Fleet from flatbeds to heavy-duty tow trucks, our equipment handles sedans, SUVs, motorcycles, luxury cars, and off-road vehicles with precision and care.",
      "Affordable & Transparent Pricing – We offer upfront quotes, no hidden fees, and flexible payment methods accepted on-site or online.",
    ],
    serviceHighlights: {
      title: "Our Comprehensive Tow Truck Dubai Services",
      items: [
        { icon: "truck", title: "Standard Tow Truck Services", description: "Our core service: professional towing either on flatbed or wheel-lift. Need towing services in Dubai, just because of a mechanical failure or a small disaster? Our tow truck Dubai units will provide safe transport to the location of your choice, be it a garage, your home, or the Battery Store workshop." },
        { icon: "clock", title: "Emergency Roadside Assistance", description: "We come to you, wherever you are in Dubai, for services like: flat tyre replacement, battery jumpstart or replacement, emergency fuel delivery, car lockout help, and pull out from sand, basements, or off-road spots." },
        { icon: "car", title: "Sports & Luxury Car Towing", description: "Driving a high-end vehicle? Our technicians and equipment are specially equipped to handle low-clearance or sensitive models carefully, keeping your vehicle scratch-free." },
        { icon: "location", title: "Sand & Desert Recovery", description: "Dubai's roads often include sandy areas and off-road paths. Our desert recovery trucks are specially prepared and certified to tow vehicles stuck in sand." },
        { icon: "building", title: "Basement & Underground Pull Out", description: "Stuck in underground parking or basement garages? Our team can carefully extract your vehicle using safe techniques tailored for tight spaces." },
        { icon: "wrench", title: "Motorcycle Towing & Recovery", description: "We provide secure towing and transport for bikes and scooters using appropriate hitch and cradle systems." },
      ],
    },
    getStarted: {
      title: "How Our Tow Truck Dubai Process Works",
      intro: "From your call to a safe drop-off, here's what happens:",
      steps: [
        { title: "Contact Us", text: "Call or WhatsApp with your issue and location." },
        { title: "Initial Assessment", text: "We verify the issue and dispatch the near tow truck Dubai unit best equipped." },
        { title: "Arrival", text: "Technician arrives with gear, battery, tyre tools, or fuel as needed." },
        { title: "On-Site Assistance", text: "We attempt a fix (jumpstart, tyre change) or start towing securely." },
        { title: "Safe Transport", text: "Your vehicle is towed safely to your preferred location." },
        { title: "Invoice & Warranty", text: "Service invoice includes warranty on parts/labour where applicable." },
      ],
    },
    whyEssential: {
      title: "Safety, Certification & Equipment",
      intro: "All our tow truck operations follow strict safety and equipment standards:",
      causes: [
        "All tow truck Dubai vehicles are licenced and insured for roadside recovery and towing operations.",
        "Technicians receive regular training in vehicle handling, especially for exotic or low-clearance cars.",
        "Our trucks are equipped with air lift jacks, flatbeds, winches, safety lights, and first aid kits.",
        "We follow Dubai safety standards—your vehicle and personal safety are our top priorities.",
      ],
    },
    whyPartner: {
      title: "Customer First: Quality & Trust",
      intro: "Here's why drivers across Dubai keep calling Battery Store back:",
      points: [
        "100% Transparent Costing – You pay what we quote—no hidden charges.",
        "Satisfaction Guarantee – If you're unsatisfied with coverage, we'll return without additional charge.",
        "Repeat & Referral Clients – Over 40% of our business comes via repeat or referred customers across Dubai.",
        "Verified Reviews – Consistent 4.7+ rating on Google and high praise for our tow truck Dubai service.",
      ],
    },
    whoNeedsIt: {
      title: "Helpful Tips When You Need a Tow Truck in Dubai",
      intro: "A few quick tips while you wait for help to arrive:",
      list: [
        "Stay safe, put hazard lights on, and pull over in an easy-to-see and safe area.",
        "Exact location with landmarks or GPS can help in faster dispatches.",
        "Always avoid carrying out roadside repairs when on busy roads—wait until professionals arrive.",
        "Carry an extra can of fuel when in the desert areas; gas stations are very scarce.",
        "Notify attendants of the type of vehicle to issue the right equipment.",
      ],
    },
    beyondJumpstart: {
      title: "Book a Tow Truck Dubai Service Today",
      intro: "No more delays or unsafe handling services — just pick up the phone and call Battery Store Dubai for a fast, trusty tow truck across the city and beyond.",
      services: [
        "Affordable rates, reliable equipment, and good support, every time you call.",
        "Call or WhatsApp us and get help where and when you need it.",
        "Online booking may be done in advance or in case of an emergency.",
        "Their 24/7 service is all year round.",
      ],
    },
    pricingTitle: "Pricing Guide & Turnaround",
    pricingNote: "Prices vary by actual location, traffic, and vehicle type.",
    showBrands: true,
    showAreas: true,
    features: [
      "Professional towing using flatbed or wheel-lift equipment",
      "24/7 rapid response, typically within 30-45 minutes",
      "Licensed and insured tow truck operations",
      "Desert, sand, and basement/underground parking recovery",
      "Motorcycle and luxury vehicle towing",
      "Upfront quotes with no hidden fees",
    ],
    steps: [
      "Contact us by call or WhatsApp with issue and location",
      "Team verifies the problem and dispatches the right equipment",
      "Technician arrives with the necessary tools and supplies",
      "On-site assistance attempted, or towing initiated",
      "Vehicle transported securely to your preferred destination",
      "Invoice and warranty documentation provided",
    ],
    faqs: [
      { q: "How quickly can you dispatch a tow truck in Dubai?", a: "Typically 30-45 minutes across most Dubai areas, 24/7." },
      { q: "What if my car is in a basement or tight garage?", a: "Yes, our specialists use low-profile jacks and winches for safe, tight-space and desert recovery." },
      { q: "Do you offer flat tyre changes and jumpstarts?", a: "Yes, alongside towing we offer flat tyre changes, jumpstarts, and fuel delivery as add-on services." },
      { q: "Can you assist with sports or luxury car towing?", a: "Yes, flatbed trucks and trained operators protect delicate vehicles." },
      { q: "What payment options are available?", a: "Cash, card on-site, or digital payments, charged after service completion." },
      { q: "What payment options are accepted?", a: "Cash, card on-site, or digital payments, charged after service completion." },
      { q: "Do you tow motorcycles?", a: "Yes, dedicated racks and secure transport trailers are available." },
      { q: "Are your tow trucks licensed?", a: "Yes, all trucks comply with official UAE tow operator licensing requirements." },
      { q: "What happens to my old battery?", a: "Old batteries are collected and recycled to UAE environmental standards." },
    ],
    pricing: [
      { item: "Local towing (Dubai city)", price: "From AED 150-200" },
      { item: "Flat tyre / jumpstart add-on", price: "+AED 50-75" },
      { item: "Emergency fuel delivery add-on", price: "+AED 100" },
      { item: "Desert / basement extraction", price: "AED 300-500" },
      { item: "Luxury vehicle surcharge", price: "+AED 150-200" },
    ],
  },
  {
    slug: "car-recovery-dubai",
    heroImage: "/images/about/car-recovery.png",
    title: "24/7 Car Recovery Services in Dubai in Less Than 45 Minutes with Battery Store",
    description:
      "Dedicated car recovery service across Dubai for breakdowns, collisions, and stuck vehicles.",
    intro:
      "You might want to have a reliable car recovery in Dubai, and that is where we, Battery Store Dubai, come in. We will help you with our available experts and capabilities on the road to provide the best assistance on how to get your car out of the jam. If you find your stuck in the middle of nowhere, or you are a victim of a flat tyre, or other road accidents, our team of experts is on the ground 24/7 to restore you to the driving seat, in less time to stay safe.\n\nWe are devoted to delivering immediate assistance, instructional assistance by stage on the phone, and recovery assistance wherever you reside. When you have the Battery Store by your side, you are assured of a calm repose with the knowledge that you can be readily assisted by an expert at any place in Dubai.",
    whyEssential: {
      title: "Key Benefits of Our Car Recovery Service",
      intro: "",
      causes: [
        "Peace of mind: You are never too long out of reach.",
        "Safety is High: All towing services have high standards of safety.",
        "Flexibility: We can service anything and everything.",
        "Full Service Range: From jumpstarts to towing, we're your complete recovery solution.",
        "Trusted by Many: Rated highly by Dubai drivers for reliability and professionalism.",
      ],
    },
    whyChooseUsTitle: "Why Choose Battery Store for Car Recovery in Dubai?",
    whyChooseUsIntro: "Battery Store stands out with:",
    whyChooseUs: [
      "Rapid Response (Typically < 45 minutes)",
      "Experienced, Certified Operators",
      "Modern Recovery Fleet Equipped For All Sizes",
      "Safe and Secure Vehicle Handling",
      "Transparent, Upfront Pricing",
      "Service Available Any Time—Day or Night",
    ],
    serviceHighlights: {
      title: "How Can We Assist You?",
      intro: "Our Car Recovery Dubai services are designed to handle all vehicle emergencies professionally and efficiently:",
      items: [
        { icon: "truck", title: "Emergency Towing", description: "We tow your vehicle safely to your preferred location—home, workshop, or Battery Store center—using flatbed or wheel-lift trucks." },
        { icon: "wrench", title: "Roadside Support", description: "From flat tyres to jumpstarts and battery replacements, we help you on the spot whenever possible." },
        { icon: "car", title: "Breakdown Rescue", description: "If your car fails due to engine, alternator, or fuel issues, we offer comprehensive recovery and diagnostic assistance." },
        { icon: "building", title: "Recovery from Difficult Spots", description: "Stuck in sand or in narrow parking? Our recovery team extracts vehicles safely from basements, dunes, or tight spots." },
      ],
    },
    beyondJumpstart: {
      title: "Our Values",
      intro: "",
      services: [
        "Integrity – Honest service and transparent billing.",
        "Respect – Respect for your time, vehicle, and safety.",
        "Reliability – We deliver on our promise every time.",
        "Expertise – Proficient training and up-to-date equipment.",
      ],
    },
    whyPartner: {
      title: "Our Vision & Mission",
      intro: "Our Vision: To be recognized as the most trusted and responsive car recovery service across Dubai and the UAE.\n\nOur Mission: To ensure every road user receives fast, courteous, and safe recovery support—anytime and anywhere.",
    },
    getStarted: {
      title: "Car Recovery Work Process",
      intro: "",
      steps: [
        { title: "Book Your Service", text: "Call or message with your location and issue." },
        { title: "We Dispatch a Team", text: "GPS-enabled tracking ensures rapid deployment." },
        { title: "On-Site Assessment", text: "We assess your needs—whether tow, jumpstart, tyre fix, or fuel delivery." },
        { title: "Safe Recovery", text: "We tow or fix your vehicle using industry-standard techniques." },
        { title: "Post-Service Support", text: "You receive an invoice, warranty info, and follow-up if needed." },
      ],
    },
    testimonials: [
      { name: "Rehman", area: "Dubai Marina driver", quote: "My car battery kept draining. Battery Store tested the alternator and replaced the regulator on-site. My car is back to normal. Highly recommended!" },
      { name: "Sarah", area: "Dubai Marina", quote: "Battery Store came swiftly when my car overheated near Sheikh Zayed Road. Quick recovery and no damage. Highly recommend!" },
      { name: "Ahmed", area: "Business Bay", quote: "I was stuck downtown at night with a flat tyre. They handled everything in under 40 minutes. Excellent support." },
    ],
    showBrands: true,
    showAreas: true,
    features: [
      "Swift response, typically within 30-45 minutes",
      "Jumpstarts, towing, fuel delivery, tyre repairs, and alternator diagnostics",
      "24/7 availability across all Dubai locations",
      "Professional operators with modern equipment",
      "Transparent pricing with quotes before service begins",
      "Specialized handling for luxury vehicles and difficult extractions",
    ],
    steps: [
      "Book — call or message with your location and vehicle issue",
      "Dispatch — GPS-tracked team deploys rapidly",
      "Assessment — technicians evaluate needs on-site",
      "Recovery — vehicle towed or repaired to industry standards",
      "Follow-up — invoice, warranty details, and support provided",
    ],
    faqs: [
      { q: "How long does recovery in Dubai usually take?", a: "Typically 30-45 minutes." },
      { q: "Do you recover luxury and low-clearance cars?", a: "Yes, our team is trained for sensitive vehicles." },
      { q: "What if my car is stuck in sand or underground parking?", a: "Yes, we're equipped with specialized extraction tools." },
      { q: "How much does car recovery cost in Dubai?", a: "Pricing depends on distance, vehicle type, and complexity — we always quote upfront before starting." },
      { q: "Is payment due right away?", a: "Card, cash, or digital wallets, accepted on-site after service." },
    ],
  },
  {
    slug: "new-battery-dubai",
    heroImage: "/images/about/new battery.png",
    title: "New Car Battery Dubai — Buy & Install Genuine Batteries On-Site",
    description:
      "Buy a brand-new genuine car battery in Dubai and get it installed at your doorstep in 20–30 minutes. Amaron, Varta, Bosch & more.",
    intro:
      "Looking to buy a new car battery in Dubai? Battery Store delivers and fits genuine Amaron, Varta, Bosch, Dynex, and Max batteries straight to your location — home, office, or roadside — within 20–30 minutes.\n\nEvery new battery comes with a full manufacturer warranty of up to 24 months and free on-site installation. No hidden fees, no hassle. Just a fresh battery and you're back on the road.",
    introSection: {
      title: "The Easiest Way to Get a New Battery in Dubai",
      paragraph:
        "Skip the workshop. Our certified technicians bring the battery to you, test your electrical system, fit the new unit, and hand you the warranty card — all in one visit.",
    },
    getStarted: {
      title: "Get a New Battery in 3 Easy Steps",
      intro: "Fast, transparent, and stress-free.",
      steps: [
        { title: "Call or Book Online", text: "Tell us your car make, model, and location. We'll recommend the right battery instantly." },
        { title: "We Deliver & Install", text: "A technician arrives within 20–30 minutes with your battery and all required tools." },
        { title: "Drive Away", text: "Battery fitted, warranty documented, old unit recycled. You're good to go." },
      ],
    },
    whyEssential: {
      title: "Why Buy a New Battery Instead of Recharging?",
      intro: "Recharging only delays the inevitable. A battery that has lost its capacity cannot hold charge reliably — especially in Dubai's extreme heat.",
      causes: [
        "Battery older than 2–3 years",
        "Slow engine cranking or hard starts",
        "Frequent need for jump starts",
        "Battery warning light on dashboard",
        "Swollen or leaking battery case",
      ],
      closing: "A new battery is cheaper than a breakdown — and cheaper than towing fees.",
    },
    features: [
      "Genuine Amaron, Varta, Bosch, Dynex, and Max batteries in stock",
      "Free delivery and on-site installation across Dubai",
      "Up to 24-month manufacturer warranty with 1 free replacement",
      "Free electrical system health check with every new battery",
      "Old battery collected and recycled — zero hassle for you",
      "Transparent pricing — no surprises",
    ],
    steps: [
      "Call or WhatsApp with your vehicle details and location",
      "Technician dispatched with the right battery within minutes",
      "Electrical system tested before installation",
      "New battery fitted and warranty card issued on the spot",
    ],
    vehicleTypes: {
      title: "We Supply New Batteries for All Vehicles",
      intro: "From everyday sedans to heavy-duty trucks and luxury vehicles.",
      list: [
        "Sedans and hatchbacks",
        "SUVs and crossovers",
        "Luxury: BMW, Mercedes, Audi, Porsche, Land Rover",
        "Pickup trucks and commercial vans",
        "Motorcycles and scooters",
        "Hybrid vehicles (auxiliary battery)",
      ],
    },
    serviceHighlights: {
      title: "What's Included With Every New Battery",
      items: [
        { icon: "battery", title: "Genuine Brand Battery", description: "Only OEM-grade Amaron, Varta, Bosch, Dynex, and Max batteries — no clones or refurbished units." },
        { icon: "wrench", title: "Professional Installation", description: "Certified technician fits the battery correctly, resets the BMS if required, and checks terminal connections." },
        { icon: "clock", title: "20–30 Min Delivery", description: "We reach your location across Dubai in 20–30 minutes, any time of day or night." },
        { icon: "building", title: "Warranty Card Issued", description: "You receive a physical warranty card on the spot — valid for up to 24 months with 1 free replacement." },
      ],
    },
    costFactorsTitle: "What Affects New Battery Price in Dubai?",
    costFactorsParagraph: "Battery prices vary based on brand, capacity, and vehicle type. We always quote upfront.",
    costFactorsDetailed: [
      { icon: "car", title: "Vehicle Make & Model", description: "European luxury vehicles often require higher-capacity batteries than standard sedans." },
      { icon: "battery", title: "Battery Brand & Capacity", description: "Amaron and Bosch premium ranges cost more but last longer in Dubai's heat." },
      { icon: "wrench", title: "BMS Reset Required", description: "Some vehicles (BMW, Mercedes) require a battery management system reset — we handle this on-site." },
      { icon: "building", title: "Warranty Duration", description: "12, 18, or 24-month warranty options are available at different price points." },
    ],
    pricing: [
      { item: "Standard sedan battery (Amaron / Dynex)", price: "AED 350–550" },
      { item: "SUV / premium battery (Varta / Bosch)", price: "AED 550–850" },
      { item: "Luxury vehicle battery (BMW / Mercedes)", price: "AED 750–1,200" },
      { item: "Delivery & installation", price: "FREE" },
      { item: "BMS reset (if required)", price: "AED 50" },
    ],
    pricingNote: "All prices include VAT. Final quote confirmed before work begins.",
    whyChooseUsTitle: "Why Buy Your New Battery From Battery Store?",
    whyChooseUsIntro: "We're Dubai's most trusted on-site battery supplier:",
    whyChooseUs: [
      "20–30 minute delivery across all Dubai areas",
      "100% genuine batteries — manufacturer warranty included",
      "500+ Google reviews — rated 4.9 stars",
      "Certified technicians for all vehicle types",
      "24/7 availability including weekends and holidays",
      "Old battery recycled responsibly at no extra charge",
    ],
    testimonials: [
      { name: "Khalid", area: "Jumeirah", quote: "Ordered a new Varta battery online at midnight. Technician arrived in 25 minutes and installed it perfectly. Incredible service!" },
      { name: "Priya", area: "Dubai Marina", quote: "My BMW needed a specific battery. Battery Store had it in stock and reset the BMS on-site. Very professional." },
      { name: "Omar", area: "Business Bay", quote: "Cheapest genuine Amaron I found in Dubai with free installation. Couldn't ask for more." },
    ],
    showBrands: true,
    showAreas: true,
    faqs: [
      { q: "How quickly can you deliver a new battery in Dubai?", a: "We deliver and install within 20–30 minutes anywhere in Dubai, 24/7." },
      { q: "Are your batteries original?", a: "Yes — all batteries are 100% genuine with manufacturer warranty. We never sell refurbished or cloned units." },
      { q: "Is installation free?", a: "Yes, delivery and installation are always free." },
      { q: "Can you replace a battery at night or on weekends?", a: "Yes — we operate 24/7, 365 days a year including UAE public holidays." },
      { q: "What warranty do new batteries come with?", a: "12, 18, or 24 months depending on the battery model, with 1 free replacement included." },
    ],
  },
  {
    slug: "change-battery-dubai",
    heroImage: "/images/about/battery-change.png",
    title: "Car Battery Change Dubai — Fast On-Site Replacement Service",
    description:
      "Professional car battery change service in Dubai. Old battery swapped for a new genuine unit at your location in 20–30 minutes.",
    intro:
      "Need to change your car battery in Dubai? Battery Store makes it effortless. Our certified technicians come to you — wherever you are — swap out the old battery for a certified genuine replacement, and have you back on the road in 20–30 minutes.\n\nWhether your battery is completely dead or just ageing, we handle the full change on-site with no workshop visit needed. Available 24/7 across all Dubai areas.",
    introSection: {
      title: "Same-Day Car Battery Change, Anywhere in Dubai",
      paragraph:
        "No need to push your car to a garage. We bring the right battery to your exact location, perform a full system check, change the battery, and document the warranty — all at your doorstep.",
    },
    getStarted: {
      title: "Change Your Battery in 3 Simple Steps",
      intro: "Quick, hassle-free, and transparent.",
      steps: [
        { title: "Contact Us", text: "Call or WhatsApp with your location and vehicle make/model." },
        { title: "Technician Arrives", text: "We reach you in 20–30 minutes with the correct replacement battery." },
        { title: "Battery Changed", text: "Old battery removed, new unit installed and tested, warranty issued." },
      ],
    },
    whyEssential: {
      title: "Signs You Need a Battery Change Now",
      intro: "Ignoring a failing battery can leave you stranded. Watch for these warning signs:",
      causes: [
        "Engine cranks slowly or struggles to start",
        "Battery warning light on the dashboard",
        "Electrical accessories behaving erratically",
        "Battery older than 2–3 years in Dubai's climate",
        "Frequent jump starts needed",
        "Swollen, corroded, or leaking battery case",
      ],
      closing: "Act before it dies completely — a timely change is always cheaper than emergency recovery.",
    },
    features: [
      "Complete battery change with genuine Amaron, Varta, Bosch, Dynex, or Max units",
      "On-site service — no towing, no workshop visit",
      "Free alternator and charging system check with every change",
      "Up to 24-month warranty with 1 free replacement",
      "Old battery disposed of responsibly per UAE regulations",
      "24/7 availability across all Dubai areas",
    ],
    steps: [
      "Call or book online — share your vehicle details and location",
      "Technician arrives within 20–30 minutes with the right battery",
      "Old battery removed and electrical system checked",
      "New battery fitted, terminals secured, system tested",
    ],
    vehicleTypes: {
      title: "We Change Batteries for Every Vehicle Type",
      intro: "Our technicians are trained to handle all makes and models.",
      list: [
        "Sedans, hatchbacks, and crossovers",
        "SUVs and 4x4 vehicles",
        "Luxury and European cars (BMW, Mercedes, Audi, Porsche)",
        "Japanese and Korean vehicles (Toyota, Nissan, Hyundai, Kia)",
        "Pickup trucks and commercial vehicles",
        "Motorcycles and light commercial vans",
      ],
    },
    serviceHighlights: {
      title: "Everything Included in Our Battery Change Service",
      items: [
        { icon: "wrench", title: "Full Battery Swap", description: "Old battery removed safely, new genuine battery installed with correct torque specs and terminal protection." },
        { icon: "battery", title: "System Health Check", description: "We test the alternator, charging voltage, and starter motor before and after the change — at no extra cost." },
        { icon: "clock", title: "20–30 Min Response", description: "Fast deployment across Dubai — from Downtown to Deira, JBR to Al Quoz." },
        { icon: "building", title: "Warranty Documentation", description: "Physical warranty card issued on-site. Valid 12–24 months with 1 free replacement." },
      ],
    },
    costFactorsTitle: "What Affects the Battery Change Cost in Dubai?",
    costFactorsParagraph: "We always give you a fixed quote before starting. No surprises.",
    costFactorsDetailed: [
      { icon: "car", title: "Vehicle Type", description: "Larger engines and European vehicles may require higher-capacity, higher-cost batteries." },
      { icon: "battery", title: "Battery Brand", description: "Amaron, Bosch Silver, and Varta Blue Dynamic are the most popular mid-range options." },
      { icon: "wrench", title: "Additional Services", description: "BMS reset for BMW/Mercedes or terminal replacement may add a small fee." },
      { icon: "clock", title: "Time of Service", description: "Standard rates apply 24/7 — no premium for late-night or weekend calls." },
    ],
    pricing: [
      { item: "Economy battery change (Dynex / Max)", price: "AED 299–400" },
      { item: "Mid-range battery change (Amaron / Varta)", price: "AED 400–600" },
      { item: "Premium battery change (Bosch / Varta AGM)", price: "AED 600–1,000" },
      { item: "Luxury vehicle surcharge", price: "+AED 100" },
      { item: "Delivery & on-site installation", price: "FREE" },
    ],
    pricingNote: "Prices include VAT. Quote confirmed before work begins — no hidden fees.",
    whyChooseUsTitle: "Why Choose Battery Store for Your Battery Change?",
    whyChooseUsIntro: "Dubai drivers trust us because:",
    whyChooseUs: [
      "Arrive in 20–30 minutes anywhere in Dubai",
      "Only genuine, warranted batteries — never used or cloned",
      "500+ five-star Google reviews",
      "Trained for all vehicle brands including luxury and hybrid",
      "Full transparency — quote upfront, no surprises",
      "24/7 service with no extra charge for nights or weekends",
    ],
    testimonials: [
      { name: "Ahmed", area: "Al Barsha", quote: "My car wouldn't start in the morning. Battery Store arrived in 22 minutes and changed the battery on my driveway. Amazing!" },
      { name: "Sara", area: "Jumeirah Lakes Towers", quote: "They changed my Corolla battery in the parking garage at my office. Quick, tidy, and great value." },
      { name: "Faisal", area: "Dubai Silicon Oasis", quote: "Changed a Bosch battery in my Land Cruiser. Technician also checked the alternator — very thorough and professional." },
    ],
    showBrands: true,
    showAreas: true,
    faqs: [
      { q: "How long does a battery change take on-site?", a: "The physical swap takes 10–15 minutes. Total time including diagnostics is around 20–30 minutes." },
      { q: "Do I need to come to a workshop?", a: "No — we come to you at home, office, mall parking, or roadside anywhere in Dubai." },
      { q: "What brands do you carry for battery changes?", a: "Amaron, Varta, Bosch, Dynex, and Max Gold — all genuine with manufacturer warranty." },
      { q: "Is the old battery taken away?", a: "Yes, we collect and recycle the old battery at no extra charge, in line with UAE environmental regulations." },
      { q: "Do you change batteries for electric or hybrid cars?", a: "We service the 12V auxiliary battery in hybrids and EVs. For traction battery issues, please contact us for a specialist referral." },
    ],
  },
];

export default services;
