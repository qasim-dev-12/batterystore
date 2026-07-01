const stats = [
  { value: "100K+", label: "Happy Clients" },
  { value: "15+", label: "Years Experience" },
  { value: "20-30 Min", label: "Avg. Response" },
  { value: "500+", label: "Monthly Services" },
];

const StatsBar = () => {
  return (
    <section className="bg-gray-light dark:bg-bg-color-dark py-10">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          {stats.map((stat) => (
            <div key={stat.label} className="w-1/2 px-4 text-center md:w-1/4">
              <h3 className="mb-1 text-3xl font-bold text-primary sm:text-4xl">
                {stat.value}
              </h3>
              <p className="text-base font-medium text-body-color">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsBar;
