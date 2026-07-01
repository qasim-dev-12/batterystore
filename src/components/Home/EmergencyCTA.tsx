const EmergencyCTA = () => {
  return (
    <section className="bg-gray-dark py-16 text-center md:py-20">
      <div className="container">
        <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-wide text-primary">
          Emergency Service
        </span>
        <h2 className="mx-auto mb-4 max-w-[700px] text-2xl font-bold text-white sm:text-3xl">
          Need Emergency Car Battery Replacement in Dubai?
        </h2>
        <p className="mx-auto mb-8 max-w-[600px] text-base text-white/70">
          Don&apos;t get stranded. Our mobile technicians are on standby 24/7
          across Dubai with genuine Amaron, Varta, and Bosch batteries ready
          to install at your location.
        </p>
        <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
          <a
            href="tel:+971556253749"
            className="rounded-xs bg-primary px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
          >
            Call Us Today
          </a>
          <a
            href="https://wa.me/971556253749"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-xs bg-[#25D366] px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-[#25D366]/90"
          >
            WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default EmergencyCTA;
