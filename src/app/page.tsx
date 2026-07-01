import ScrollUp from "@/components/Common/ScrollUp";
import Hero from "@/components/Hero";
import StatsBar from "@/components/Home/StatsBar";
import TrustIntro from "@/components/Home/TrustIntro";
import WhyChooseUs from "@/components/Home/WhyChooseUs";
import ServicesGrid from "@/components/Home/ServicesGrid";
import BrandsShowcase from "@/components/Home/BrandsShowcase";
import HowItWorks from "@/components/Home/HowItWorks";
import BulletSection from "@/components/Home/BulletSection";
import AreasCovered from "@/components/Home/AreasCovered";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/Home/FAQ";
import EmergencyCTA from "@/components/Home/EmergencyCTA";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Battery Store | Car Battery Replacement Dubai",
  description:
    "Trusted provider for car battery change in Dubai. Amaron, Varta & Bosch batteries delivered and installed in 30-45 minutes, 24/7.",
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <BrandsShowcase />
      <HowItWorks />
      <BulletSection
        eyebrow="Vehicle Types"
        title="Battery Installation for All Vehicle Types"
        bullets={[
          "Sedans, SUVs, and crossovers",
          "Luxury: BMW, Mercedes-Benz, Audi, Porsche, Jaguar, Land Rover",
          "Pickup trucks and commercial vans",
          "Motorcycles and scooters",
          "Commercial vehicles and fleet cars",
          "Hybrid and electric vehicles (auxiliary battery services)",
        ]}
      />
      <StatsBar />
      <TrustIntro />
      <WhyChooseUs />
      <ServicesGrid />
      <BulletSection
        eyebrow="Battery Care Tips"
        title="Extend Your Battery Life in Dubai"
        reverse
        bullets={[
          "Start your car regularly, even when not in daily use",
          "Turn off lights, AC, and infotainment before shutting the engine",
          "Keep terminals clean and corrosion-free",
          "Avoid relying solely on short trips that prevent full charging",
          "Schedule a free battery health test every 6 months with Battery Store",
        ]}
      />
      <BulletSection
        eyebrow="Warning Signs"
        title="Does Your Car Need a New Battery in Dubai?"
        bullets={[
          "Slow engine turnover when starting",
          "Dim or flickering headlights",
          "Trouble starting, especially in the mornings",
          "Dashboard warning lights appearing",
          "Battery age over 2-3 years",
        ]}
      />
      <AreasCovered />
      <Testimonials />
      <FAQ />
      <EmergencyCTA />
    </>
  );
}
