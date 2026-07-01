import SectionTitle from "../Common/SectionTitle";
import FAQAccordion from "../Common/FAQAccordion";

const faqs = [
  { q: "How long does it take to replace a car battery?", a: "Our technicians arrive within 30-45 minutes and replace the battery on-site in under 15 minutes." },
  { q: "Can I order a car battery online in Dubai for same-day installation?", a: "Yes — book online and we will deliver and install same day across Dubai." },
  { q: "Which German car battery do you recommend for Dubai?", a: "Varta — built in Germany with AGM technology, popular for European cars with start-stop systems." },
  { q: "Are your batteries genuine and do they come with warranty?", a: "Yes — all batteries come with 12, 18, or 24 month warranty and 1 time free replacement." },
  { q: "Is there a charge for on-site diagnostics?", a: "No call-out fee. Diagnostics are free if you proceed with a replacement." },
  { q: "Do you provide emergency services during holidays?", a: "Yes — we are available 24/7, 365 days a year, including all UAE public holidays." },
  { q: "Do you offer a warranty?", a: "Yes — 12 to 24 months depending on the battery brand and model you choose." },
  { q: "What if my alternator is the issue, not the battery?", a: "Our technicians perform a full diagnostics check before recommending any replacement." },
];

const FAQ = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Common Questions About Car Battery Services in Dubai"
          paragraph=""
          center
        />
        <FAQAccordion faqs={faqs} />
      </div>
    </section>
  );
};

export default FAQ;
