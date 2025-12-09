
"use client";
import React, { ReactNode, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import MediaPreloader from './MediaPreloader';
import FeaturingStarIcon from './FeaturingStarIcon';

type FeaturedDishSectionProps = {
  imageSrc: string;
  alt: string;
  title: string;
  description: string | ReactNode;
  imagePriority?: boolean;
  reverse?: boolean;
  imageClass?: string;
  containerClass?: string;
  textClass?: string;
};

const FeaturedDishSection: React.FC<FeaturedDishSectionProps> = ({
  imageSrc,
  alt,
  title,
  description,
  imagePriority = false,
  reverse = false,
  imageClass = '',
  containerClass = '',
  textClass = '',
}) => {
  return (
    <motion.div
      className={`mt-16 md:mt-[100px] px-4 lg:px-[80px] ${containerClass}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={sectionVariants}
    >
      <div className={`mx-auto w-full max-w-[1240px] flex flex-col lg:flex-row lg:justify-between items-center gap-8 lg:gap-0${reverse ? ' lg:flex-row-reverse' : ''}`}>
        <div className={`relative aspect-square max-w-[540px] max-h-[540px] block w-[90%] h-auto lg:w-[400px] lg:h-[400px] xl:w-[540px] xl:h-[540px] shrink-0 rounded-[24px] object-cover ${imageClass}`}>
          <MediaPreloader
            src={imageSrc}
            alt={alt}
            borderRadius="24px"
            className="w-full h-full object-cover"
          />
          <Image
            src={imageSrc}
            alt={alt}
            width={540} height={540} priority={imagePriority}
            className="w-full h-full object-cover rounded-[24px]"
          />
        </div>
        <div className={`flex w-full lg:w-fit max-w-[560px] flex-col items-center lg:items-start gap-0 md:gap-[20px] mt-0 lg:mt-0 mb-6 lg:mb-0 lg:pl-8 ${textClass}`}>
          <div className="self-stretch text-h3 xl:text-h2 text-center lg:text-left mb-0 -mt-2">
            {title}
          </div>
          <div className="text-normal4 md:text-normal3 text-[var(--tt-color-text-gray)] text-center lg:text-left">
            {description}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// Animation variants for framer-motion
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};



function Featuring() {
  // Mobile scroll activation for star icons
  const starsContainerRef = useRef<HTMLDivElement | null>(null);
  const [starsActive, setStarsActive] = useState(false);

  useEffect(() => {
    const el = starsContainerRef.current;
    if (!el) return;

    let ticking = false;
    const update = () => {
      ticking = false;
      const rect = el.getBoundingClientRect();
      const viewportH = window.innerHeight;
      const viewportCenter = viewportH / 2;
      // Activation band: +/- 20% of viewport height around center
      const band = viewportH * 0.2;
      const elementCenter = rect.top + rect.height / 2;
      const withinBand = Math.abs(elementCenter - viewportCenter) <= band && rect.top < viewportH && rect.bottom > 0;
      setStarsActive(withinBand);
    };

    const onScrollOrResize = () => {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener('scroll', onScrollOrResize, { passive: true });
    window.addEventListener('resize', onScrollOrResize);
    return () => {
      window.removeEventListener('scroll', onScrollOrResize);
      window.removeEventListener('resize', onScrollOrResize);
    };
  }, []);

  return (
    <div className='w-full'>
      <motion.div
        className='w-full max-w-[1000px] mx-auto px-4 md:px-0'
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={sectionVariants}
      >
        <div className='text-center text-h2 mb-12 md:mb-[80px]'>
          <div className=''>Featuring</div>
        </div>
        <div ref={starsContainerRef} className={`grid grid-cols-2 gap-x-4 gap-y-8 md:flex md:justify-between md:items-center md:gap-0 self-stretch text-[var(--tt-color-text-gray)] group ${starsActive ? 'text-[#FFD84D]' : ''}`}>
          <div className='flex flex-col items-center gap-[10px] w-full group'>
            <div className={`h-[22px] w-[22px] aspect-square transition-colors duration-300 ${starsActive ? 'text-[#FFD84D]' : 'text-[var(--tt-color-text-gray)] group-hover:text-[#FFD84D]'}`}>
              <FeaturingStarIcon size={22} className='text-current' hoverRays active={starsActive} />
            </div>
            <div className='text-normal3 text-center'>Groups & Catering</div>
          </div>
          <div className='h-[80px] w-[1px] hidden md:block transition-all duration-300 group-hover:rotate-8 group-hover:scale-y-110 group-hover:bg-[#FFD84D]/50' style={{ background: 'color-mix(in oklab, var(--color-white) 25%, transparent)' }}></div>
          <div className='flex flex-col items-center gap-[10px] w-full group'>
            <div className={`h-[22px] w-[22px] aspect-square transition-colors duration-300 ${starsActive ? 'text-[#FFD84D]' : 'text-[var(--tt-color-text-gray)] group-hover:text-[#FFD84D]'}`}>
              <FeaturingStarIcon size={22} className='text-current' hoverRays active={starsActive} />
            </div>
            <div className='text-normal3 text-center'>Crispiest Chicken</div>
          </div>
          <div className="col-span-2 md:hidden"></div>
          <div className='h-[80px] w-[1px] hidden md:block transition-all duration-300 group-hover:rotate-8 group-hover:scale-y-110 group-hover:bg-[#FFD84D]/50' style={{ background: 'color-mix(in oklab, var(--color-white) 25%, transparent)' }}></div>
          <div className='flex flex-col items-center gap-[10px] w-full group'>
            <div className={`h-[22px] w-[22px] aspect-square transition-colors duration-300 ${starsActive ? 'text-[#FFD84D]' : 'text-[var(--tt-color-text-gray)] group-hover:text-[#FFD84D]'}`}>
              <FeaturingStarIcon size={22} className='text-current' hoverRays active={starsActive} />
            </div>
            <div className='text-normal3 text-center'>Family Friendly</div>
          </div>
          <div className='h-[80px] w-[1px] hidden md:block transition-all duration-300 group-hover:rotate-8 group-hover:scale-y-110 group-hover:bg-[#FFD84D]/50' style={{ background: 'color-mix(in oklab, var(--color-white) 25%, transparent)' }}></div>
          <div className='flex flex-col items-center gap-[10px] w-full group'>
            <div className={`h-[22px] w-[22px] aspect-square transition-colors duration-300 ${starsActive ? 'text-[#FFD84D]' : 'text-[var(--tt-color-text-gray)] group-hover:text-[#FFD84D]'}`}>
              <FeaturingStarIcon size={22} className='text-current' hoverRays active={starsActive} />
            </div>
            <div className='text-normal3 text-center'>Dine-in & Take Away</div>
          </div>
        </div>
      </motion.div>

      <div className="h-[100px] mb-6 lg:mb-0" />
      <div className='text-center mb-12 md:mb-[80px]'>
        <div className='text-h2'>Best Fried Chicken Honolulu & Waikiki Beach</div>
        <div className='text-normal mt-1 mx-2x'>Juicy fried chicken and fish & chips made fresh daily — a fast food favorite near you!</div>
      </div>

      {/* Featured Dishes */}
      <FeaturedDishSection
        imageSrc="/Images/featuring/Smashing burgers.png"
        alt="Smashing burgers"
        title="Smashing burgers"
        description="
        Feature the single/main burgers here. Specifically the Beef Smash burgers.
        "
        reverse={false}
      />

      <FeaturedDishSection
        imageSrc="/Images/featuring/The Shack Box.png"
        alt="The Shack Box"
        title="The Shack Box"
        description='Marketing Angle: Push this as "Great Value for Money". Specific Items to list: "Smash on a Box," "Mix Meat Box," "Hunger Buster Box," and "Wing Wing Box".'
        imagePriority={true}
        reverse={true}
      />

      <FeaturedDishSection
        imageSrc="/Images/featuring/Grill Items.png"
        alt="Grill Items"
        title="Grill Items"
        description="Items: Chicken, Platters, Wings, Strips, Rice, and Loaded Fries."
        reverse={false}
      />

      <FeaturedDishSection
        imageSrc="/Images/featuring/Desserts & Drinks.png"
        alt="Desserts & Drinks"
        title="Desserts & Drinks"
        description='Milkshakes: Introduce the dessert range here. Upsell Feature: Explicitly mention the option to "Upgrade your drink to a shake" for 250 on regular/limited meals.'
        imagePriority={true}
        reverse={true}
      />

      <FeaturedDishSection
        imageSrc="/Images/featuring/Meal Options for everyone.png"
        alt="Meal Options for everyone"
        title="Meal Options for everyone"
        description={
          <>
            La Lune Restaurant for many years has been one of the most popular Cambodian restaurants in town. Building on the family tradition, brothers Michael, Sean and Tommy Saing launched Grill Shack.
            <br /><br />
            The brothers learned the restaurant business from their father, Sokchheng Saing, who owns La Lune, and have incorporated his valuable direction in the dishes at Grill Shack. The menu features popular Cambodian, Thai and Vietnamese Shack dishes along with refreshing beverages like Grill Iced Coffee, Thai Iced Tea and young fresh coconut.
            <br /><br />
            Grill Shack takes its name from the once ubiquitous bicycle pedicabs found in Southeast Asia, and you can see one on our patio.
            <br /><br />
            Visit us and experience our passion for Southeast Asian cuisine: we know you’ll love it!
          </>
        }
        reverse={false}
      />

      <FeaturedDishSection
        imageSrc="/Images/featuring/Sides & Add-ons.png"
        alt="Sides & Add-ons"
        title="Sides & Add-ons"
        description='Highlight the specific fry options: Loaded Chicken Fries, Cheesy Fries, and Peri Fries.'
        imagePriority={true}
        reverse={true}
      />

    </div>
  )
}

export default Featuring;