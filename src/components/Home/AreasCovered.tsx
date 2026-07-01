import Link from "next/link";
import SectionTitle from "../Common/SectionTitle";
import areas from "@/data/areas";

const AreasCovered = () => {
  const preview = areas.slice(0, 12);
  return (
    <section className="bg-gray-light dark:bg-bg-color-dark py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Areas We Serve Across Dubai"
          paragraph="No matter where you are in the city, Battery Store is ready to reach you."
          center
        />
        <div className="-mx-4 flex flex-wrap">
          {preview.map((area, index) => (
            <div key={area} className="w-1/2 px-4 py-2 sm:w-1/3 md:w-1/4">
              <span
                style={{ animationDelay: `${(index % 6) * 0.15}s` }}
                className="inline-block w-full animate-[float_3s_ease-in-out_infinite] rounded-lg bg-white px-4 py-3 text-center text-base font-medium text-body-color shadow-one transition-all duration-300 hover:-translate-y-1 hover:text-primary hover:shadow-lg dark:bg-dark dark:shadow-three"
              >
                {area}
              </span>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            href="/areas"
            className="inline-block rounded-xs bg-primary px-8 py-3 text-sm font-bold tracking-wide text-white duration-300 ease-in-out hover:-translate-y-0.5 hover:bg-primary/80"
          >
            DISCOVER MORE
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AreasCovered;
