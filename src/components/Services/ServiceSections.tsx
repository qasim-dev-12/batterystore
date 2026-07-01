import Image from "next/image";
import SectionTitle from "@/components/Common/SectionTitle";

/** Light/dark image pair. `base` is the filename without "-dark.svg"/".svg", e.g. "about-image" or "about-image-2". */
export const BrandImage = ({ base, alt }: { base: string; alt: string }) => (
  <>
    <Image src={`/images/about/${base}.svg`} alt={alt} width={500} height={400} className="mx-auto dark:hidden" />
    <Image src={`/images/about/${base}-dark.svg`} alt={alt} width={500} height={400} className="mx-auto hidden dark:block" />
  </>
);

/** Standard `<section><div className="container">` shell with an optional centered SectionTitle. */
export const Section = ({
  className = "py-16",
  title,
  paragraph,
  center = true,
  mb,
  children,
}: {
  className?: string;
  title?: string;
  paragraph?: string;
  center?: boolean;
  mb?: string;
  children?: React.ReactNode;
}) => (
  <section className={className}>
    <div className="container">
      {title && <SectionTitle title={title} paragraph={paragraph ?? ""} center={center} mb={mb} />}
      {children}
    </div>
  </section>
);

/** Image (5/12) + content (7/12) split, used by every "image beside text" section for visual symmetry. */
export const SplitContent = ({
  imageBase,
  imageSrc,
  imageAlt,
  imageSide = "left",
  badge,
  children,
}: {
  imageBase?: string;
  imageSrc?: string;
  imageAlt: string;
  imageSide?: "left" | "right";
  badge?: React.ReactNode;
  children: React.ReactNode;
}) => (
  <div className="-mx-4 flex flex-wrap items-center">
    <div className={`w-full px-4 lg:w-5/12 ${imageSide === "right" ? "lg:order-2" : ""}`}>
      <div className="relative">
        {imageSrc ? (
          <div className="relative h-[300px] w-full overflow-hidden rounded-lg shadow-one">
            <Image src={imageSrc} alt={imageAlt} fill className="object-cover" />
          </div>
        ) : (
          <BrandImage base={imageBase!} alt={imageAlt} />
        )}
        {badge}
      </div>
    </div>
    <div className="w-full px-4 lg:w-7/12">{children}</div>
  </div>
);

export const PrimaryButton = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a
    href={href}
    className="inline-block rounded-xs bg-primary px-8 py-3 text-sm font-bold tracking-wide text-white duration-300 ease-in-out hover:bg-primary/80"
  >
    {children}
  </a>
);

/** Simple dot-bullet list, one column, centered (e.g. causes / reasons). */
export const DotList = ({ items }: { items: string[] }) => (
  <ul className="mx-auto mb-6 max-w-[700px] space-y-2">
    {items.map((item) => (
      <li key={item} className="flex items-center gap-3 text-base text-body-color">
        <span className="h-2 w-2 shrink-0 rounded-full bg-primary"></span>
        {item}
      </li>
    ))}
  </ul>
);

/** Checkmark-circle list in a responsive grid (e.g. guarantees / who-it's-for). */
export const CheckGrid = ({ items, light }: { items: string[]; light?: boolean }) => (
  <div className="mb-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
    {items.map((item) => (
      <div
        key={item}
        className={
          light
            ? "flex items-center gap-3 rounded-lg bg-white/10 px-4 py-3 text-base text-white"
            : "flex items-center gap-3 rounded-lg bg-primary/5 px-4 py-3 text-base font-medium text-body-color transition-colors duration-300 hover:bg-primary/10"
        }
      >
        <span className="h-2 w-2 shrink-0 rounded-full bg-primary"></span>
        {item}
      </div>
    ))}
  </div>
);

export const costFactorIcons: Record<string, string> = {
  location: "M12 21s7-7.58 7-12A7 7 0 0 0 5 9c0 4.42 7 12 7 12Z M12 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z",
  clock: "M12 8v4l3 3 M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z",
  car: "M3 13l1.5-4.5A2 2 0 0 1 6.4 7h11.2a2 2 0 0 1 1.9 1.5L21 13v5a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-1H6v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-5Z M5 13h14",
  battery: "M7 7h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2Z M10 4h4v3h-4z M9 12h6",
  building: "M4 21V7l8-4 8 4v14 M9 21v-4h6v4 M9 11h.01 M15 11h.01 M9 15h.01 M15 15h.01",
  wrench: "M14.7 6.3a4 4 0 0 0-5.4 5.4L4 17l3 3 5.3-5.3a4 4 0 0 0 5.4-5.4l-2 2-2-2 2-2Z",
  fuel: "M3 22V6a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v16 M3 22h10 M15 8h2l3 3v7a2 2 0 0 1-2 2h0 M15 6V4h2",
  truck: "M3 17V7a1 1 0 0 1 1-1h9v11 M13 10h4l3 3v4h-2 M3 17h2 M9 17a2 2 0 1 0 4 0 M17 17a2 2 0 1 0 4 0",
};

export const CostFactorIcon = ({ name }: { name: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-7 w-7 text-primary">
    <path d={costFactorIcons[name]} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/** Left-accent-border card list (e.g. included features / additional services). */
export const BorderList = ({ items }: { items: string[] }) => (
  <div className="mx-auto max-w-[700px] space-y-3">
    {items.map((item) => (
      <div
        key={item}
        className="flex items-start gap-3 rounded-lg border-l-4 border-primary bg-white p-4 text-base text-body-color shadow-one transition-all duration-300 hover:translate-x-1 hover:shadow-md dark:bg-dark dark:shadow-three"
      >
        <span className="mt-1 text-primary">✓</span>
        {item}
      </div>
    ))}
  </div>
);
