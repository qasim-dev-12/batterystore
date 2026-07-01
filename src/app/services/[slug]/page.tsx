import Image from "next/image";
import Link from "next/link";
import SectionTitle from "@/components/Common/SectionTitle";
import FAQAccordion from "@/components/Common/FAQAccordion";
import EmergencyCTA from "@/components/Home/EmergencyCTA";
import BrandsShowcase from "@/components/Home/BrandsShowcase";
import AreasCovered from "@/components/Home/AreasCovered";
import { BrandImage, Section, SplitContent, PrimaryButton, DotList, CheckGrid, BorderList, CostFactorIcon } from "@/components/Services/ServiceSections";
import services from "@/data/services";
import batteryBrands from "@/data/batteryBrands";
import { notFound } from "next/navigation";

const PHONE = "+971556253749";
const WHATSAPP = "https://wa.me/971556253749";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

const ServicePage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return notFound();

  return (
    <>
      {/* Hero */}
      <section className="relative z-10 overflow-hidden pt-28 lg:pt-[150px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 md:w-7/12">
              <div className="mb-8 max-w-[570px] md:mb-0">
                <h1 className="mb-5 text-2xl font-bold text-black dark:text-white sm:text-3xl">
                  {service.title}
                </h1>
                {service.intro.split("\n\n").map((para) => (
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
              {service.heroImage ? (
                <div className="relative mx-auto overflow-hidden rounded-2xl ring-1 ring-stroke-dark shadow-[0_12px_40px_rgba(52,235,229,0.12)] h-[420px]">
                  <Image src={service.heroImage} alt={service.title} fill className="object-cover" />
                  <div className="absolute inset-0 rounded-2xl ring-inset ring-1 ring-primary/20 pointer-events-none" />
                </div>
              ) : (
                <BrandImage base="about-image" alt={service.title} />
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

      {/* Lead intro */}
      {service.introSection && (
        <Section title={service.introSection.title} paragraph={service.introSection.paragraph} />
      )}

      {/* Get Started / Work Process timeline */}
      {service.getStarted && (
        <Section title={service.getStarted.title ?? "Get Started in 3 Easy Steps"} paragraph={service.getStarted.intro} mb="50px">
          <div className="relative flex flex-wrap justify-center gap-10">
            {service.getStarted.steps.map((s, index) => (
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

      {/* Why essential / What's included / How it works */}
      <Section className="pt-16">
        {service.whyEssential && (
          <div className="mb-16 rounded-lg bg-gray-light p-8 dark:bg-bg-color-dark">
            <SectionTitle title={service.whyEssential.title} paragraph={service.whyEssential.intro} center mb="30px" />
            {!!service.whyEssential.causes?.length && <DotList items={service.whyEssential.causes} />}
            {service.whyEssential.closing && (
              <p className="mx-auto max-w-[700px] text-center text-base font-medium text-body-color">
                {service.whyEssential.closing}
              </p>
            )}
          </div>
        )}

        <div className="mb-16">
          <SectionTitle title="What's Included" paragraph="" mb="40px" center />
          <BorderList items={service.features} />
        </div>

        <div>
          <SectionTitle title="How It Works" paragraph="" mb="40px" center />
          <div className="relative flex flex-wrap justify-center gap-6">
            {service.steps.map((step, index) => (
              <div
                key={step}
                className="group relative flex w-full flex-col items-center rounded-lg bg-primary/5 p-6 text-center text-base text-body-color transition-all duration-300 hover:-translate-y-2 hover:bg-primary/10 dark:bg-white/5 sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]"
              >
                <span className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-bold text-white transition-transform duration-300 group-hover:scale-110">
                  {index + 1}
                </span>
                {step}
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Service type photo cards */}
      {service.serviceHighlights && (
        <Section title={service.serviceHighlights.title} paragraph={service.serviceHighlights.intro}>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {service.serviceHighlights.items.map((item) => (
              <div
                key={item.title}
                className="overflow-hidden rounded-lg bg-white text-center shadow-one transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:bg-dark dark:shadow-three"
              >
                <div className="relative h-40 w-full bg-primary/5">
                  <Image src="/images/about/about-image.png" alt={item.title} fill className="object-cover dark:hidden" />
                  <Image src="/images/about/about-image.png" alt={item.title} fill className="hidden object-cover dark:block" />
                </div>
                <div className="p-6">
                  <span className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                    <CostFactorIcon name={item.icon} />
                  </span>
                  <h3 className="mb-2 text-lg font-bold text-black dark:text-white">{item.title}</h3>
                  <p className="text-sm text-body-color">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Section>
      )}

      {/* Vehicle types covered */}
      {service.vehicleTypes && (
        <Section title={service.vehicleTypes.title} paragraph={service.vehicleTypes.intro}>
          <CheckGrid items={service.vehicleTypes.list} />
        </Section>
      )}

      {/* Why choose us */}
      {service.whyChooseUs && (
        <Section>
          <SplitContent
            imageSrc="/images/about/jump-start-image.png"
            imageAlt="Why Choose Battery Store"
            badge={
              <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-primary px-5 py-2 text-sm font-semibold text-white shadow-lg lg:left-0 lg:translate-x-0">
                11+ Years Experience
              </span>
            }
          >
            <h2 className="mb-4 text-2xl font-bold leading-tight text-black dark:text-white sm:text-3xl">
              {service.whyChooseUsTitle ?? "Why Choose Battery Store?"}
            </h2>
            <p className="mb-6 text-base leading-relaxed text-body-color">{service.whyChooseUsIntro}</p>
            <ul className="mb-6 space-y-3 border-l-2 border-primary/20 pl-5">
              {service.whyChooseUs.map((item) => (
                <li key={item} className="relative text-base text-body-color">
                  <span className="absolute -left-[27px] top-1.5 h-2.5 w-2.5 rounded-full bg-primary"></span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="mb-6 text-base font-medium text-body-color">{service.whyChooseUsClosing}</p>
            <PrimaryButton href={`tel:${PHONE}`}>DISCOVER MORE</PrimaryButton>
          </SplitContent>
        </Section>
      )}

      {/* Who needs it / is it safe */}
      {service.whoNeedsIt && (
        <section className="relative overflow-hidden bg-gray-dark py-16">
          <Image src="/images/about/about-image-2-dark.svg" alt={service.whoNeedsIt.title} fill className="object-cover opacity-10" />
          <div className="container relative">
            <SectionTitle title={service.whoNeedsIt.title} paragraph={service.whoNeedsIt.intro} center />
            {!!service.whoNeedsIt.list?.length && <CheckGrid items={service.whoNeedsIt.list} light />}
            {service.whoNeedsIt.safetyNote && (
              <p className="mx-auto max-w-[700px] text-center text-base font-medium text-white/80">
                {service.whoNeedsIt.safetyNote}
              </p>
            )}
          </div>
        </section>
      )}

      {/* Beyond jumpstart */}
      {service.beyondJumpstart && (
        <Section title={service.beyondJumpstart.title} paragraph={service.beyondJumpstart.intro} mb="40px">
          <BorderList items={service.beyondJumpstart.services} />
          {service.beyondJumpstart.closing && (
            <p className="mx-auto mt-6 max-w-[700px] text-center text-base font-medium text-body-color">
              {service.beyondJumpstart.closing}
            </p>
          )}
        </Section>
      )}

      {/* Why partner */}
      {service.whyPartner && (
        <Section>
          <SplitContent imageSrc="/images/about/jump-start-2.png" imageAlt={service.whyPartner.title}>
            <h2 className="mb-4 text-2xl font-bold leading-tight text-black dark:text-white sm:text-3xl">
              {service.whyPartner.title}
            </h2>
            {service.whyPartner.intro.split("\n\n").map((para) => (
              <p key={para} className="mb-4 text-base leading-relaxed text-body-color">
                {para}
              </p>
            ))}
            {!!service.whyPartner.points?.length && <CheckGrid items={service.whyPartner.points} />}
            {service.whyPartner.closing && (
              <p className="mb-6 text-base font-medium text-body-color">{service.whyPartner.closing}</p>
            )}
            <PrimaryButton href={`tel:${PHONE}`}>DISCOVER MORE</PrimaryButton>
          </SplitContent>
        </Section>
      )}

      {/* Other services — flip cards */}
      <Section className="bg-gray-light py-16 dark:bg-bg-color-dark" title="Our Other Services" paragraph="Hover a service to see what it covers.">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services
            .filter((s) => s.slug !== service.slug)
            .slice(0, 8)
            .map((s) => (
              <div key={s.slug} className="h-44 [perspective:1000px]">
                <Link
                  href={`/services/${s.slug}`}
                  className="group relative block h-full w-full [transform-style:preserve-3d] transition-transform duration-500 hover:[transform:rotateY(180deg)]"
                >
                  <div className="absolute inset-0 flex items-center justify-center rounded-lg bg-white p-4 text-center shadow-one [backface-visibility:hidden] dark:bg-dark dark:shadow-three">
                    <h3 className="text-base font-bold text-black dark:text-white">{s.title}</h3>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center rounded-lg bg-primary p-4 text-center text-white [backface-visibility:hidden] [transform:rotateY(180deg)]">
                    <p className="text-sm leading-relaxed">{s.description}</p>
                  </div>
                </Link>
              </div>
            ))}
        </div>
      </Section>

      {/* Battery brands */}
      <Section title="Car Batteries We Offer in Dubai" paragraph="Genuine, warrantied batteries from the brands UAE drivers trust.">
        <div className="flex flex-wrap justify-center gap-8">
          {batteryBrands.map((brand) => (
            <div
              key={brand.slug}
              className="flex w-full flex-col rounded-lg bg-white p-6 text-center shadow-one transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:bg-dark dark:shadow-three sm:w-[calc(50%-1rem)] lg:w-[calc(25%-1.5rem)]"
            >
              <h3 className="mb-3 text-lg font-bold text-black dark:text-white">{brand.title}</h3>
              <p className="mb-5 flex-1 text-sm text-body-color">{brand.description}</p>
              <Link
                href={`/battery-brands/${brand.slug}`}
                className="inline-block rounded-xs bg-primary px-5 py-2 text-sm font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
              >
                Read More
              </Link>
            </div>
          ))}
        </div>
      </Section>

      {/* What affects the price */}
      {service.costFactorsDetailed ? (
        <Section
          className="bg-gray-light py-16 dark:bg-bg-color-dark"
          title={service.costFactorsTitle ?? "What Affects the Price?"}
          paragraph={service.costFactorsParagraph ?? "Pricing isn't one-size-fits-all. A few key factors influence what you'll pay:"}
          mb="40px"
        >
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {service.costFactorsDetailed.map((factor) => (
              <div
                key={factor.title}
                className="overflow-hidden rounded-lg bg-white text-center shadow-one transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:bg-dark dark:shadow-three"
              >
                <div className="p-6">
                  <span className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                    <CostFactorIcon name={factor.icon} />
                  </span>
                  <h3 className="mb-2 text-lg font-bold text-black dark:text-white">{factor.title}</h3>
                  <p className="text-sm text-body-color">{factor.description}</p>
                </div>
                <div className="relative h-40 w-full bg-primary/5">
                  <Image src={factor.image ?? "/images/about/about-image.svg"} alt={`${factor.title} - technician at work`} fill className="object-cover" />
                </div>
              </div>
            ))}
          </div>
        </Section>
      ) : (
        service.costFactors && (
          <Section className="bg-gray-light py-16 dark:bg-bg-color-dark">
            <SplitContent imageBase="about-image-2" imageAlt="What Affects the Price">
              <SectionTitle title="What Affects the Price" paragraph="Pricing isn't one-size-fits-all. A few key factors influence what you'll pay." mb="30px" />
              <div className="space-y-3">
                {service.costFactors.map((factor, index) => (
                  <div
                    key={factor}
                    className="flex items-center gap-4 rounded-lg bg-white px-5 py-4 text-base text-body-color shadow-one transition-colors duration-300 hover:bg-primary/5 dark:bg-dark dark:shadow-three"
                  >
                    <span className="text-lg font-bold text-primary/40">{String(index + 1).padStart(2, "0")}</span>
                    {factor}
                  </div>
                ))}
              </div>
            </SplitContent>
          </Section>
        )
      )}

      {/* Pricing intro band */}
      {service.pricingIntro && (
        <Section>
          <SplitContent imageBase="about-image-2" imageAlt={service.pricingIntro.title} imageSide="right">
            <h2 className="mb-4 text-2xl font-bold leading-tight text-black dark:text-white sm:text-3xl">
              {service.pricingIntro.title}
            </h2>
            {service.pricingIntro.paragraphs.map((para) => (
              <p key={para} className="mb-4 text-base leading-relaxed text-body-color">
                {para}
              </p>
            ))}
          </SplitContent>
        </Section>
      )}

      {/* Pricing table */}
      {service.pricing && (
        <Section title={service.pricingTitle ?? "Pricing Guide"} mb="40px">
          <div className="overflow-hidden rounded-lg bg-white shadow-one dark:bg-dark dark:shadow-three">
            {service.pricing.map((row) => (
              <div key={row.item} className="flex items-center justify-between border-b border-body-color/10 px-6 py-4 last:border-0">
                <span className="text-base text-body-color">{row.item}</span>
                <span className="text-base font-semibold text-black dark:text-white">{row.price}</span>
              </div>
            ))}
          </div>
          {service.pricingNote && (
            <p className="mt-6 text-center text-base font-medium text-body-color">{service.pricingNote}</p>
          )}
        </Section>
      )}

      {/* Testimonials */}
      {service.testimonials && (
        <Section className="bg-gray-light py-16 dark:bg-bg-color-dark" title="Customer Reviews">
          <div className="grid grid-cols-1 gap-x-8 gap-y-8 md:grid-cols-3">
            {service.testimonials.map((t) => (
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

      {service.showBrands && <BrandsShowcase />}
      {service.showAreas && <AreasCovered />}

      <Section className="py-16 md:py-20 lg:py-28" title="Frequently Asked Questions">
        <FAQAccordion faqs={service.faqs} />
      </Section>

      <EmergencyCTA />
    </>
  );
};

export default ServicePage;
