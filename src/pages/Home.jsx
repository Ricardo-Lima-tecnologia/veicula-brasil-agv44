import { useEffect } from "react";
import Header from "../components/landing/Header";
import HeroSection from "../components/landing/HeroSection";
import TrustSection from "../components/landing/TrustSection";
import BenefitsSection from "../components/landing/BenefitsSection";
import QuoteForm from "../components/landing/QuoteForm";
import VehiclesSection from "../components/landing/VehiclesSection";
import TestimonialsSection from "../components/landing/TestimonialsSection";
import FAQSection from "../components/landing/FAQSection";
import FinalCTA from "../components/landing/FinalCTA";
import Footer from "../components/landing/Footer";
import FloatingWhatsApp from "../components/landing/FloatingWhatsApp";
import MobileStickyBar from "../components/landing/MobileStickyBar";
import { pixelEvents } from "../utils/metaPixel";

export default function Home() {
  useEffect(() => {
    pixelEvents.viewContent({
      content_name: "Landing Page Universo AGV — Proteção Veicular",
    });
  }, []);

  return (
    <div className="min-h-screen bg-background font-body">
      <Header />
      <HeroSection />
      <TrustSection />
      <QuoteForm />
      <VehiclesSection />
      <BenefitsSection />
      <TestimonialsSection />
      <FAQSection />
      <FinalCTA />
      <Footer />
      <FloatingWhatsApp />
      <MobileStickyBar />
    </div>
  );
}