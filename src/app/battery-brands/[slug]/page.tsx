import Link from "next/link";
import FAQAccordion from "@/components/Common/FAQAccordion";
import EmergencyCTA from "@/components/Home/EmergencyCTA";
import AreasCovered from "@/components/Home/AreasCovered";
import Image from "next/image";
import { BrandImage, Section, SplitContent, PrimaryButton, DotList } from "@/components/Services/ServiceSections";
import batteryBrands from "@/data/batteryBrands";
import { notFound } from "next/navigation";

const PHONE = "+971556253749";
const WHATSAPP = "https://wa.me/971556253749";

export function generateStaticParams() {
  return batteryBrands.map((brand) => ({ slug: brand.slug }));
}

const BatteryBrandPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const brand = batteryBrands.find((b) => b.slug === slug);
  if (!brand) return notFound();

  return (
    <>
      {/* Hero */}
      <section className="relative z-10 overflow-hidden pt-28 lg:pt-[150px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 md:w-7/12">
              <div className="mb-8 max-w-[570px] md:mb-0">
                <h1 className="mb-5 text-2xl font-bold text-black dark:text-white sm:text-3xl">
                  {brand.intro ? `Reliable ${brand.title} Replacement in Dubai` : brand.title}
                </h1>
                {(brand.intro ?? brand.description).split("\n\n").map((para) => (
                  <p key={para} className="mb-4 text-base font-medium leading-relaxed text-body-color">
                    {para}
                  </p>
                ))}
                <div className="flex flex-wrap items-center gap-4">
                  <a
                    href={`tel:${PHONE}`}
                    className="rounded-xs bg-primary px-6 py-3 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
                  >
                    Call Now
                  </a>
                  <a
                    href={WHATSAPP}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block rounded-xs bg-[#25D366] px-6 py-3 text-base font-semibold text-white duration-300 ease-in-out hover:bg-[#25D366]/90"
                  >
                    WhatsApp Us
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full px-4 md:w-5/12">
              {brand.image ? (
                <div className="relative h-[300px] w-full overflow-hidden rounded-lg shadow-one">
                  <Image src={brand.image} alt={`${brand.title} replacement by a Battery Store technician in Dubai`} fill className="object-cover" />
                </div>
              ) : (
                <BrandImage base="about-image" alt={brand.title} />
              )}
            </div>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-between gap-4 rounded-lg bg-primary/5 p-4">
            <p className="text-base font-medium text-body-color">
              Get answers to all your questions from our team of experts
            </p>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block shrink-0 rounded-xs bg-[#25D366] px-6 py-3 text-base font-semibold text-white duration-300 ease-in-out hover:bg-[#25D366]/90"
            >
              WhatsApp Now
            </a>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      {brand.stats && (
        <Section className="pt-16 pb-8">
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
            {brand.stats.map((s) => (
              <div key={s.label} className="rounded-lg bg-primary/5 px-4 py-6 text-center dark:bg-white/5">
                <p className="mb-1 text-3xl font-bold text-primary">{s.value}</p>
                <p className="text-sm text-body-color">{s.label}</p>
              </div>
            ))}
          </div>
        </Section>
      )}

      {/* Service highlights */}
      {brand.serviceHighlights && (
        <Section title={brand.serviceHighlights.title} paragraph={brand.serviceHighlights.intro}>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {brand.serviceHighlights.items.map((item) => (
              <div
                key={item.title}
                className="rounded-lg bg-white p-6 text-center shadow-one transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:bg-dark dark:shadow-three"
              >
                <h3 className="mb-2 text-base font-bold text-black dark:text-white">{item.title}</h3>
                <p className="text-sm text-body-color">{item.description}</p>
              </div>
            ))}
          </div>
        </Section>
      )}

      {/* Get started / order process */}
      {brand.getStarted && (
        <Section title={brand.getStarted.title} paragraph={brand.getStarted.intro} mb="50px">
          <div className="relative flex flex-wrap justify-center gap-10">
            {brand.getStarted.steps.map((s, index) => (
              <div key={s.title} className="relative w-full text-center sm:w-[calc(33.333%-1.7rem)]">
                <span className="relative z-10 mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full border-4 border-gray-light bg-primary text-lg font-bold text-white dark:border-bg-color-dark">
                  {index + 1}
                </span>
                <h3 className="mb-2 text-lg font-bold text-black dark:text-white">{s.title}</h3>
                <p className="text-sm text-body-color">{s.text}</p>
              </div>
            ))}
          </div>
        </Section>
      )}

      {/* Why choose us */}
      {brand.whyChooseUs && (
        <Section className="bg-gray-light py-16 dark:bg-bg-color-dark">
          <SplitContent
            imageBase="about-image-2"
            imageSrc={brand.image}
            imageAlt={brand.whyChooseUsTitle ?? "Why Choose Battery Store"}
            badge={
              <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-primary px-5 py-2 text-sm font-semibold text-white shadow-lg lg:left-0 lg:translate-x-0">
                10+ Years Experience
              </span>
            }
          >
            <h2 className="mb-4 text-2xl font-bold leading-tight text-black dark:text-white sm:text-3xl">
              {brand.whyChooseUsTitle ?? "Why Choose Battery Store?"}
            </h2>
            <p className="mb-6 text-base leading-relaxed text-body-color">{brand.whyChooseUsIntro}</p>
            <ul className="mb-6 space-y-3 border-l-2 border-primary/20 pl-5">
              {brand.whyChooseUs.map((item) => (
                <li key={item} className="relative text-base text-body-color">
                  <span className="absolute -left-[27px] top-1.5 h-2.5 w-2.5 rounded-full bg-primary"></span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="mb-6 text-base font-medium text-body-color">{brand.whyChooseUsClosing}</p>
            <PrimaryButton href={`tel:${PHONE}`}>DISCOVER MORE</PrimaryButton>
          </SplitContent>
        </Section>
      )}

      {/* Signs battery needs replacement */}
      {brand.signs && (
        <Section title={brand.signs.title} paragraph={brand.signs.intro}>
          <DotList items={brand.signs.list} />
        </Section>
      )}

      {/* All brands — flip cards */}
      <Section className="bg-gray-light py-16 dark:bg-bg-color-dark" title="All Battery Brands We Offer" paragraph="Hover a brand to see what it's known for.">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {batteryBrands.map((b) => (
              <div key={b.slug} className="h-44 [perspective:1000px]">
                <Link
                  href={`/battery-brands/${b.slug}`}
                  className="group relative block h-full w-full [transform-style:preserve-3d] transition-transform duration-500 hover:[transform:rotateY(180deg)]"
                >
                  <div className="absolute inset-0 flex items-center justify-center rounded-lg bg-white p-4 text-center shadow-one [backface-visibility:hidden] dark:bg-dark dark:shadow-three">
                    <h3 className="text-base font-bold text-black dark:text-white">{b.title}</h3>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center rounded-lg bg-primary p-4 text-center text-white [backface-visibility:hidden] [transform:rotateY(180deg)]">
                    <p className="text-sm leading-relaxed">{b.description}</p>
                  </div>
                </Link>
              </div>
            ))}
        </div>
      </Section>

      {brand.showAreas && <AreasCovered />}

      {/* Testimonials */}
      {brand.testimonials && (
        <Section title="Customer Reviews">
          <div className="grid grid-cols-1 gap-x-8 gap-y-8 md:grid-cols-3">
            {brand.testimonials.map((t) => (
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
      )}

      {/* FAQ */}
      {brand.faqs && (
        <Section className="py-16 md:py-20 lg:py-28" title="Frequently Asked Questions">
          <FAQAccordion faqs={brand.faqs} />
        </Section>
      )}

      <EmergencyCTA />
    </>
  );
};

export default BatteryBrandPage;
