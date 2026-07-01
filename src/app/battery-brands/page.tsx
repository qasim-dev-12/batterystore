import Breadcrumb from "@/components/Common/Breadcrumb";
import batteryBrands from "@/data/batteryBrands";
import Link from "next/link";

const BatteryBrandsPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Battery Brands"
        description="Browse all the battery brands we stock and fit, with same-day delivery and fitting."
      />
      <section className="pb-16">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            {batteryBrands.map((brand) => (
              <div key={brand.slug} className="w-full px-4 md:w-1/2 lg:w-1/3">
                <Link
                  href={`/battery-brands/${brand.slug}`}
                  className="mb-8 block rounded-lg bg-white p-6 shadow-one hover:shadow-two dark:bg-dark dark:shadow-three"
                >
                  <h3 className="mb-2 text-lg font-bold text-black dark:text-white">
                    {brand.title}
                  </h3>
                  <p className="text-base text-body-color">{brand.description}</p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default BatteryBrandsPage;
