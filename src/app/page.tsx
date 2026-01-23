"use client";

import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/../public/Images/hero.png";
import Image from "next/image";
import ThemeButton from "@/components/ThemeBtn";
import InstagramComponent from "@/components/InstagramComponent";
import Reviews from "@/components/Reviews";
import FAQSection from "@/components/FAQ_section";
import LocationComponent from "@/components/OurLocation";
import Featuring from "@/components/featuring";

const Home = React.memo(function Home() {
  React.useEffect(() => {
    // Simple analytics: log page load
    if (typeof window !== 'undefined') {
      (window as unknown as Window & { __pageLoaded?: boolean }).__pageLoaded = true;
      // You could send analytics here
    }
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      console.warn(`Scroll target not found: #${sectionId}`);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };
  return (
    <div className="p-[10px]">
      <Header onClick={() => { /* handle header click here or leave empty */ }} />

      <div className="sm:h-[20px]" />

      {/* hero img section */}
      <div id="Home" className="h-[500px] sm:h-[500px] w-full relative flex flex-row items-center">
        {/* Hero background image - Mobile */}
        <div className="absolute inset-0 w-full h-full -z-10 sm:hidden">
          <Image
            src="/Images/featuring/Section1.png"
            alt="Home Page Image Mobile"
            fill
            className="object-cover rounded-[24px]"
          />
        </div>
        {/* Hero background image - Desktop */}
        <div className="hidden sm:block absolute pt-4 mr-[-10px] right-0 h-[125%] w-1/2 -z-10">
          <Image
            src={Hero}
            alt="Home Page Image"
            fill
            className="object-contain object-right"
          />
        </div>
        <div className="text-left pl-2 sm:pl-[60px] pb-8 flex flex-col items-start justify-center gap-2.5 relative z-10">
          <div className="text-normal1 sm:text-normal2 sm:font-bold border-l-3 border-primary-dark pl-[20px]">
            Best Grilled Chicken in West Drayton -
          </div>
          <div className="text-[32px] sm:text-h2 lg:text-h1 sm:font-medium leading-[1.2]" style={{ fontFamily: 'var(--font-southern-barn)' }}>
            Smash Burgers, Donner Meat &
            <br />
            Grill Platters - Freshly Prepared
            <br />
            Whilst You Wait
          </div>
        </div>
      </div>

      <div className="h-[100px]" />

      {/* section 2 */}
      <div id="Menu" className="w-full flex items-center justify-center text-center flex-col">
        <div className="text-h3 sm:text-h2 w-full">
          Try our most popular items
        </div>

        {/* Featuring and Story */}
        <div id="Featuring">
          <Featuring />
        </div>
        {/* Story section now included in Featuring */}

        <div className="h-[80px]" />
        <div className="text-normal mt-[20px]" style={{ color: 'var(--tt-color-text-gray)' }}>
          Treat yourself with our must-try dishes that everyone in Drayton is talking about.
        </div>
        <div className="mt-[20px] gap-[20px] flex flex-col sm:flex-row items-center justify-center">
          <ThemeButton
            text="Get Directions"
            href="https://share.google/802y7XFGGWC7hiIxT"
            textClassname="pr-[8px] pl-[14px] text-white"
            className="bg-primary-dark border-2 hover:bg-primary-dark/90 border-primary-dark hover:border-primary-dark/90 transition-colors"
          />

          <ThemeButton
            text="Our Menu"
            textClassname="pr-[8px] pl-[14px]"
            textColor="text-[var(--tt-color-text-gray)]"
            className="bg-transparent border-2 transition-all duration-200 hover:bg-primary-dark hover:text-white border-white/10 hover:border-primary-dark"
            iconBgColor="bg-white/10"
            iconBgHoverColor="border-primary-dark"
            iconColor="text-white"
            iconHoverColor="text-white"
            href="/menu"
          />


        </div>
      </div>

      <div className="h-[100px]" />

      {/* Instagram Section */}
      <InstagramComponent />

      {/* reviews */}
      <div className="h-[100px]" />
      <div id="Reviews">
        <Reviews />
      </div>


      <div className="h-[100px]" />
      {/* FAQ */}
      <div id="FAQ's">
        <FAQSection />
      </div>

      <div className="h-[100px]" />
      {/* OUR LOCATION */}

      <div id="Location">
        <LocationComponent />
      </div>

      <div className="h-[100px]" />
      <Footer scrollToSection={scrollToSection} />
    </div>
  );
});

export default Home;
