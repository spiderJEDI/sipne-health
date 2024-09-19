"use client";

import React from "react";
import Header from "./../components/Header";
import HeroSection from "./../components/HeroSection";
import AboutSection from "./../components/AboutSection";
import ServicesSection from "./../components/ServicesSection";
import WhyChooseUsSection from "./../components/WhyChooseUsSection";
import HowItWorksSection from "./../components/HowItWorksSection";
import TestimonialsSection from "./../components/TestimonialsSection";
import ContactSection from "./../components/ContactSection";
import FAQSection from "./../components/FAQSection";
import Footer from "./../components/Footer";

function HomePageComponent() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <WhyChooseUsSection />
        <HowItWorksSection />
        <TestimonialsSection />
        <ContactSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
}

export default HomePageComponent;
