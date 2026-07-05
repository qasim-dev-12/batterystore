import FAQAccordion from "@/components/Common/FAQAccordion";
import EmergencyCTA from "@/components/Home/EmergencyCTA";
import AreasCovered from "@/components/Home/AreasCovered";
import { BrandImage, Section, SplitContent, DotList } from "@/components/Services/ServiceSections";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Warranty | Battery Store",
  description: "Warranty terms for batteries fitted by Battery Store.",
};

const PHONE = "+971556253749";
const WHATSAPP = "https://wa.me/971556253749";

const warrantyLengths = [
  { value: "3", label: "Months Warranty" },
  { value: "6", label: "Months Warranty" },
  { value: "12", label: "Months Warranty" },
];

const covered = [
  "Manufacturing defects in the battery cell or casing",
  "Premature loss of charge under normal usage",
  "Internal short circuits not caused by misuse",
  "One-time free replacement within the warranty period",
  "Free battery testing and diagnostics during the claim",
];

const notCovered = [
  "Physical damage, cracks, or leakage from misuse",
  "Damage caused by an aftermarket or faulty alternator",
  "Batteries not supplied or fitted by Battery Store",
  "Claims made without proof of purchase or invoice",
  "Normal wear and tear beyond the warranty period",
];

const keepValidTips = [
  "Keep your original invoice or warranty card safe",
  "Have your battery and alternator checked every 6 months",
  "Avoid leaving lights or accessories on when the engine is off",
  "Clean corrosion off terminals regularly",
  "Only get repairs done by authorized Battery Store technicians",
];

const claimSteps = [
  "Call or WhatsApp us with your invoice details and issue",
  "Our technician inspects the battery at your location",
  "If covered, we replace it on the spot — no waiting",
  "Receive an updated warranty card for the new battery",
];

const testimonials = [
  { name: "Adel", area: "Al Barsha", quote: "Battery failed within a year and Battery Store replaced it free of charge in 20 minutes, no questions asked." },
  { name: "Nadia", area: "Mirdif", quote: "Warranty claim was simple — just showed my invoice and the technician swapped the battery on-site." },
  { name: "Salem", area: "Deira", quote: "Honest about what was covered and what wasn't. Appreciated the clear explanation." },
];

const faqs = [
  { q: "How long is the warranty on my battery?", a: "Depending on the brand, batteries come with 3, 6, or 12 months warranty plus a one-time free replacement." },
  { q: "What do I need to make a warranty claim?", a: "Your original invoice or warranty card and the faulty battery for inspection." },
  { q: "Is the warranty valid if I move cities within the UAE?", a: "Yes, as long as it's a battery we supplied and fitted, our warranty is valid across the UAE." },
  { q: "Does the warranty cover damage from an accident?", a: "No, physical damage from accidents or misuse is not covered under warranty." },
  { q: "How quickly can a warranty replacement be done?", a: "Most warranty replacements are completed on-site within 30-45 minutes of our technician arriving." },
];

const WarrantyPage = () => {
  return (
    <>
      {/* Hero */}
      <section className="relative z-10 overflow-hidden pt-28 lg:pt-[150px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 md:w-7/12">
              <div className="mb-8 max-w-[570px] md:mb-0">
                <h1 className="mb-5 text-2xl font-bold text-black dark:text-white sm:text-3xl">
                  Battery Warranty – Battery Store Dubai
                </h1>
                <p className="mb-4 text-base font-medium leading-relaxed text-body-color">
                  All batteries provided by Battery Store come with 3, 6, or 12 months warranty with a one-time free replacement, depending on the battery brand you choose.
                </p>
                <p className="mb-4 text-base font-medium leading-relaxed text-body-color">
                  We stand behind every battery we fit — genuine products, transparent terms, and fast on-site replacement if anything goes wrong.
                </p>
                <div className="flex flex-wrap items-center gap-4">
                  <a href={`tel:${PHONE}`} className="rounded-xs bg-primary px-6 py-3 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80">
                    Call Now
                  </a>
                  <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="inline-block rounded-xs bg-[#25D366] px-6 py-3 text-base font-semibold text-white duration-300 ease-in-out hover:bg-[#25D366]/90">
                    WhatsApp Us
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full px-4 md:w-5/12">
              <BrandImage base="about-image" alt="Battery Warranty" />
            </div>
          </div>
        </div>
      </section>

      {/* Warranty length cards */}
      <Section className="pt-10 md:pt-16 pb-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {warrantyLengths.map((w) => (
            <div key={`${w.value}-${w.label}`} className="rounded-lg bg-primary/5 px-4 py-6 text-center dark:bg-white/5">
              <p className="mb-1 text-3xl font-bold text-primary">{w.value}</p>
              <p className="text-sm text-body-color">{w.label}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* What's covered / not covered */}
      <Section>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="rounded-lg bg-gray-light p-8 dark:bg-bg-color-dark">
            <h3 className="mb-4 text-xl font-bold text-black dark:text-white">What The Warranty Covers</h3>
            <DotList items={covered} />
          </div>
          <div className="rounded-lg bg-gray-light p-8 dark:bg-bg-color-dark">
            <h3 className="mb-4 text-xl font-bold text-black dark:text-white">What The Warranty Does NOT Cover</h3>
            <DotList items={notCovered} />
          </div>
        </div>
      </Section>

      {/* How to keep your warranty valid */}
      <Section title="How to Keep Your Warranty Valid" mb="40px">
        <SplitContent imageBase="about-image" imageAlt="How to keep your warranty valid">
          <p className="mb-4 text-base leading-relaxed text-body-color">
            Your warranty stays valid as long as the battery is used and maintained correctly. A few simple habits go a long way toward avoiding a denied claim:
          </p>
          <DotList items={keepValidTips} />
        </SplitContent>
      </Section>

      {/* Making a warranty claim */}
      <Section className="bg-gray-light py-10 md:py-16 dark:bg-bg-color-dark" title="Making a Warranty Claim — Simple Steps" mb="40px">
        <SplitContent imageBase="about-image-2" imageAlt="Making a warranty claim" imageSide="right">
          <div className="space-y-3">
            {claimSteps.map((step, index) => (
              <div key={step} className="flex items-center gap-4 rounded-lg bg-white px-5 py-4 text-base text-body-color shadow-one dark:bg-dark dark:shadow-three">
                <span className="text-lg font-bold text-primary/40">{String(index + 1).padStart(2, "0")}</span>
                {step}
              </div>
            ))}
          </div>
        </SplitContent>
      </Section>

      <AreasCovered />

      {/* Testimonials banner */}
      <section className="bg-gray-dark py-10">
        <div className="container text-center">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">Testimonials &amp; Feedback</h2>
        </div>
      </section>

      <Section title="What Drivers Commonly Say About Us">
        <div className="grid grid-cols-1 gap-x-8 gap-y-8 md:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.name} className="rounded-lg bg-white p-6 shadow-one dark:bg-dark dark:shadow-three">
              <p className="mb-4 text-sm text-yellow-500">★★★★★</p>
              <p className="mb-4 text-base text-body-color">&ldquo;{t.quote}&rdquo;</p>
              <p className="text-sm font-semibold text-black dark:text-white">
                {t.name} <span className="font-normal text-body-color">— {t.area}</span>
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Quick Tips & FAQs */}
      <Section className="py-10 md:py-20 lg:py-28" title="Quick Tips & FAQs">
        <FAQAccordion faqs={faqs} />
      </Section>

      <EmergencyCTA />
    </>
  );
};

export default WarrantyPage;
