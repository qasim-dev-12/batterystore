import Link from "next/link";
import SectionTitle from "../Common/SectionTitle";
import services from "@/data/services";

const featured = services.filter((s) =>
  [
    "car-battery-replacement",
    "battery-diagnostics-jumpstart",
    "emergency-fuel-delivery",
    "flat-tyre-replacement",
    "car-towing-recovery",
    "roadside-assistance",
    "car-recovery-dubai",
    "alternator-dynamo-repair",
  ].includes(s.slug),
);

const ServicesGrid = () => {
  return (
    <section className="bg-gray-light dark:bg-bg-color-dark py-10 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Emergency Mobile Battery Replacement in Dubai & Roadside Services"
          paragraph="Battery Store provides complete roadside assistance across Dubai. Our mobile units are stocked for every common emergency, not just battery replacement."
          center
        />
        <div className="grid grid-cols-1 gap-x-8 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
          {featured.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="block rounded-lg bg-white p-6 shadow-one hover:shadow-two dark:bg-dark dark:shadow-three"
            >
              <h3 className="mb-3 text-lg font-bold text-black dark:text-white">
                {service.title}
              </h3>
              <p className="mb-4 text-sm text-body-color">{service.description}</p>
              <span className="text-sm font-semibold text-primary">
                Learn More →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
