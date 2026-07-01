import Link from "next/link";
import SectionTitle from "../Common/SectionTitle";
import batteryBrands from "@/data/batteryBrands";

const BrandsShowcase = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Not Your Average Battery Shop in Dubai — We Install On-Site"
          paragraph="As a trusted battery shop in Dubai, we supply only certified, authentic batteries from the world's leading automotive brands. Every purchase includes a full manufacturer warranty and professional installation at your location."
          center
        />
        <div className="grid grid-cols-2 gap-6 md:grid-cols-3">
          {batteryBrands.map((brand, i) => (
            <Link
              key={brand.slug}
              href={`/battery-brands/${brand.slug}`}
              style={{ animationDelay: `${i * 100}ms` }}
              className="group flex flex-col items-center gap-4 rounded-2xl bg-dark p-6 text-center ring-1 ring-stroke-dark transition-all duration-300 hover:-translate-y-2 hover:ring-primary hover:shadow-[0_12px_40px_rgba(52,235,229,0.15)] animate-[fadeInUp_0.5s_ease_both]"
            >
              <div className="h-64 w-full overflow-hidden rounded-xl bg-white">
                <img
                  src={`/images/battery-brands/${brand.slug}.png`}
                  alt={brand.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <span className="text-lg font-bold text-white transition-colors duration-300 group-hover:text-primary">
                {brand.title.replace(" Battery", "")}
              </span>
              <span className="text-xs text-body-color-dark">View Models →</span>
            </Link>
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-body-color">
          All batteries provided by Battery Store come with 12, 18, or 24
          months warranty with 1 time replacement.{" "}
          <Link href="/warranty" className="text-primary">
            Terms and conditions apply.
          </Link>
        </p>
      </div>
    </section>
  );
};

export default BrandsShowcase;
