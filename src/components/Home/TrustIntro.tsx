import Link from "next/link";

const TrustIntro = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <h2 className="mb-5 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl">
              Most Trusted Experts for Emergency New Car Battery Replacement
              in Dubai
            </h2>
            <p className="mb-8 text-base leading-relaxed text-body-color">
              Whether you need an emergency car battery replacement in Dubai
              at 3 AM or want to order an online car battery in Dubai with
              same-day installation, Battery Store delivers a seamless
              experience across the UAE. Over 15 years and 100,000+ batteries
              served on time.
            </p>
            <Link
              href="/contact"
              className="inline-block rounded-xs bg-primary px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
            >
              Discover More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustIntro;
