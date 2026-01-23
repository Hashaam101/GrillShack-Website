"use client";

import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MediaPreloader from "@/components/MediaPreloader";
import HeroImg from "@/../public/Images/hero.webp";

const MenuPage = React.memo(function MenuPage() {
  const [heroLoaded, setHeroLoaded] = React.useState(false);


  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };



  return (
    <div className="p-[10px]">
      <Header onClick={() => { }} />

      <div className="sm:h-[20px]" />

      {/* hero section */}
      <div id="MenuHero" className="h-[320px] sm:h-[380px] md:h-[420px] w-full overflow-hidden rounded-[36px] relative">
        <div className="px-[20px] pb-8 sm:px-[40px] h-full flex flex-col items-start justify-end gap-2.5 bg-black/55 backdrop-blur-[13px]">
          <div className="text-normal1 sm:text-normal2 sm:font-bold border-l-3 border-primary-dark pl-[20px]">
            Explore Our Full Menu
          </div>
          <div className="text-[32px] sm:text-h2 sm:font-medium leading-[1.2]" style={{ fontFamily: 'var(--font-southern-barn)' }}>
            Smash Burgers, Donner Meat & Grill Platters
            <br />
            Freshly Prepared Whilst You Wait
          </div>
          <MediaPreloader
            src={typeof HeroImg === "string" ? HeroImg : (HeroImg.src ?? "")}
            alt="Menu Page Image"
            className="absolute top-0 left-0 w-full h-full object-cover rounded-[36px] -z-10"
            onLoaded={() => setHeroLoaded(true)}
          />
          {heroLoaded && (
            <>
              <div className="absolute bg-black/20 top-0 left-0 w-full h-full object-cover rounded-[36px] -z-9" />
              <div
                className="absolute top-0 left-0 w-full h-full object-cover rounded-[36px] -z-9"
                style={{
                  background:
                    "linear-gradient(59deg, rgb(13 13 13 / 30%) 20%, rgb(13 13 13 / 20%) 40%, rgb(13 13 13 / 15%) 60%, rgba(0, 0, 0, 0) 100%)",
                }}
              />
            </>
          )}
        </div>
      </div>

      <div className="h-[80px]" />

      {/* Order Now Section */}
      <div id="OrderNow" className="w-full flex items-center justify-center text-center flex-col">
        <div className="text-h3 sm:text-h2 w-full">
          Order Now
        </div>
        <div className="text-normal mt-[12px] max-w-[900px] mx-auto" style={{ color: 'var(--tt-color-text-gray)' }}>
          Can&apos;t decide where to start? Our Classic Cheeseburger with its double beef patties and crispy edges has earned its legendary status, while our Wing Wing Box delivers perfectly grilled wings that&apos;ll have you licking your fingers. From our flame-grilled chicken to loaded fries piled high with toppings, these bestsellers showcase exactly what Grill Shack is all about.

        </div>
      </div>

      <div className="h-[40px]" />

      {/* Order iframe */}
      <div className="w-full rounded-[36px] overflow-hidden bg-[#0d0d0d]">
        <iframe
          src="https://www.food-order.net/index.php/web_orders/home/S1BLQ0FH?uid=667592c917cdc"
          id="outer_frame"
          width="100%"
          style={{
            height: '900px',
            filter: 'invert(1) hue-rotate(182deg)',
          }}
          allow="payment"
          className="border-0"
        />
      </div>

      <div className="h-[80px]" />

      <Footer scrollToSection={scrollToSection} />
    </div>
  );
});

export default MenuPage;
