"use client";

import React, { ReactNode, useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import MediaPreloader from './MediaPreloader';
import FeaturingStarIcon from './FeaturingStarIcon';

type FeaturedDishSectionProps = {
  imageSrc: string | string[];
  alt: string;
  title: string;
  description: string | ReactNode;
  imagePriority?: boolean;
  reverse?: boolean;
  imageClass?: string;
  containerClass?: string;
  textClass?: string;
  transitionInterval?: number;
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
  transitionInterval = 4000,
}) => {
  const images = Array.isArray(imageSrc) ? imageSrc : [imageSrc];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState<number | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const nextImage = useCallback(() => {
    if (images.length <= 1) return;

    setIsTransitioning(true);
    setPrevIndex(currentIndex);
    setCurrentIndex((prev) => (prev + 1) % images.length);

    // Reset transition state after animation completes
    setTimeout(() => {
      setIsTransitioning(false);
      setPrevIndex(null);
    }, 700);
  }, [images.length, currentIndex]);

  useEffect(() => {
    if (images.length <= 1) return;

    const interval = setInterval(nextImage, transitionInterval);
    return () => clearInterval(interval);
  }, [images.length, transitionInterval, nextImage]);

  const getSlideStyle = (index: number): React.CSSProperties => {
    if (index === currentIndex) {
      return {
        transform: isTransitioning ? 'translateX(0)' : 'translateX(0)',
        opacity: 1,
        zIndex: 2,
      };
    }
    if (index === prevIndex && isTransitioning) {
      return {
        transform: 'translateX(-100%)',
        opacity: 1,
        zIndex: 1,
      };
    }
    return {
      transform: 'translateX(100%)',
      opacity: 0,
      zIndex: 0,
    };
  };

  return (
    <div
      className={`mt-16 md:mt-[100px] px-4 lg:px-[80px] ${containerClass}`}
    >
      <div className={`mx-auto w-full max-w-[1240px] flex flex-col lg:flex-row lg:justify-between items-center gap-8 lg:gap-0${reverse ? ' lg:flex-row-reverse' : ''}`}>
        <div className={`relative aspect-square max-w-[540px] max-h-[540px] block w-[90%] h-auto lg:w-[400px] lg:h-[400px] xl:w-[540px] xl:h-[540px] shrink-0 rounded-[24px] overflow-hidden ${imageClass}`}>
          {images.map((src, index) => (
            <div
              key={src}
              className="absolute inset-0 transition-transform duration-700 ease-in-out"
              style={getSlideStyle(index)}
            >
              <MediaPreloader
                src={src}
                alt={`${alt} ${index + 1}`}
                borderRadius="24px"
                className="w-full h-full object-cover"
              />
              <Image
                src={src}
                alt={`${alt} ${index + 1}`}
                width={540}
                height={540}
                priority={imagePriority && index === 0}
                className="w-full h-full object-cover rounded-[24px]"
              />
            </div>
          ))}
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
    </div>
  );
};

function Featuring() {
  return (
    <div className='w-full'>
      <div className='w-full max-w-[1000px] mx-auto px-4 md:px-0'>
        <div className='text-center text-h2 mb-12 md:mb-[80px]'>
          <div className=''>Featuring</div>
        </div>
        <div className="grid grid-cols-2 gap-x-4 gap-y-8 md:flex md:justify-between md:items-center md:gap-0 self-stretch text-[var(--tt-color-text-gray)] group">
          <div className='flex flex-col items-center gap-[10px] w-full group'>
            <div className="h-[22px] w-[22px] aspect-square transition-colors duration-300 group-hover:text-[#FFD84D]">
              <FeaturingStarIcon size={22} className='text-current' hoverRays />
            </div>
            <div className='text-normal3 text-center'>Groups & Catering</div>
          </div>
          <div className='h-[80px] w-[1px] hidden md:block transition-all duration-300 group-hover:rotate-8 group-hover:scale-y-110 group-hover:bg-[#FFD84D]/50' style={{ background: 'color-mix(in oklab, var(--color-white) 25%, transparent)' }}></div>
          <div className='flex flex-col items-center gap-[10px] w-full group'>
            <div className="h-[22px] w-[22px] aspect-square transition-colors duration-300 group-hover:text-[#FFD84D]">
              <FeaturingStarIcon size={22} className='text-current' hoverRays />
            </div>
            <div className='text-normal3 text-center'>Crispiest Chicken</div>
          </div>
          <div className="col-span-2 md:hidden"></div>
          <div className='h-[80px] w-[1px] hidden md:block transition-all duration-300 group-hover:rotate-8 group-hover:scale-y-110 group-hover:bg-[#FFD84D]/50' style={{ background: 'color-mix(in oklab, var(--color-white) 25%, transparent)' }}></div>
          <div className='flex flex-col items-center gap-[10px] w-full group'>
            <div className="h-[22px] w-[22px] aspect-square transition-colors duration-300 group-hover:text-[#FFD84D]">
              <FeaturingStarIcon size={22} className='text-current' hoverRays />
            </div>
            <div className='text-normal3 text-center'>Family Friendly</div>
          </div>
          <div className='h-[80px] w-[1px] hidden md:block transition-all duration-300 group-hover:rotate-8 group-hover:scale-y-110 group-hover:bg-[#FFD84D]/50' style={{ background: 'color-mix(in oklab, var(--color-white) 25%, transparent)' }}></div>
          <div className='flex flex-col items-center gap-[10px] w-full group'>
            <div className="h-[22px] w-[22px] aspect-square transition-colors duration-300 group-hover:text-[#FFD84D]">
              <FeaturingStarIcon size={22} className='text-current' hoverRays />
            </div>
            <div className='text-normal3 text-center'>Dine-in & Take Away</div>
          </div>
        </div>
      </div>

      <div className="h-[100px] mb-6 lg:mb-0" />
      <div className='text-center mb-12 md:mb-[80px]'>
        <div className='text-h2'>Best Fried Chicken Honolulu & Waikiki Beach</div>
        <div className='text-normal mt-1 mx-2x'>Juicy fried chicken and fish & chips made fresh daily — a fast food favorite near you!</div>
      </div>

      {/* Featured Dishes */}
      <FeaturedDishSection
        imageSrc={[
          "/Images/featuring/Smashing burgers/Smashing burgers - 0.png",
          "/Images/featuring/Smashing burgers/Smashing burgers - 1.png",
          "/Images/featuring/Smashing burgers/Smashing burgers - 2.png",
          "/Images/featuring/Smashing burgers/Smashing burgers - 3.png",
        ]}
        alt="Smashing burgers"
        title="Smashing burgers"
        description="
        Feature the single/main burgers here. Specifically the Beef Smash burgers.
        "
        reverse={false}
      />

      <FeaturedDishSection
        imageSrc={[
          "/Images/featuring/The Shack Box/The Shack Box - 0.png",
          "/Images/featuring/The Shack Box/The Shack Box - 1.png",
          "/Images/featuring/The Shack Box/The Shack Box - 2.png",
        ]}
        alt="The Shack Box"
        title="The Shack Box"
        description='Marketing Angle: Push this as "Great Value for Money". Specific Items to list: "Smash on a Box," "Mix Meat Box," "Hunger Buster Box," and "Wing Wing Box".'
        imagePriority={true}
        reverse={true}
      />

      <FeaturedDishSection
        imageSrc={[
          "/Images/featuring/Lets Get Grilling/Lets Get Grilling - 0.png",
          "/Images/featuring/Lets Get Grilling/Lets Get Grilling - 1.png",
        ]}
        alt="Grill Items"
        title="Grill Items"
        description="Items: Chicken, Platters, Wings, Strips, Rice, and Loaded Fries."
        reverse={false}
      />

      <FeaturedDishSection
        imageSrc={[
          "/Images/featuring/Desserts & Drinks/Desserts & Drinks - 0.png",
          "/Images/featuring/Desserts & Drinks/Desserts & Drinks - 1.png",
          "/Images/featuring/Desserts & Drinks/Desserts & Drinks - 2.png",
          "/Images/featuring/Desserts & Drinks/Desserts & Drinks - 3.png",
          "/Images/featuring/Desserts & Drinks/Desserts & Drinks - 4.png",
          "/Images/featuring/Desserts & Drinks/Desserts & Drinks - 5.png",
        ]}
        alt="Desserts & Drinks"
        title="Desserts & Drinks"
        description='Milkshakes: Introduce the dessert range here. Upsell Feature: Explicitly mention the option to "Upgrade your drink to a shake" for 250 on regular/limited meals.'
        imagePriority={true}
        reverse={true}
      />

      <FeaturedDishSection
        imageSrc="/Images/featuring/Meal Options for everyone/Meal Options for everyone - 0.png"
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
            Visit us and experience our passion for Southeast Asian cuisine: we know you'll love it!
          </>
        }
        reverse={false}
      />

      <FeaturedDishSection
        imageSrc="/Images/featuring/Sides & Add-ons/Sides & Add-ons - 0.png"
        alt="Sides & Add-ons"
        title="Sides & Add-ons"
        description='Highlight the specific fry options: Loaded Chicken Fries, Cheesy Fries, and Peri Fries.'
        imagePriority={true}
        reverse={true}
      />
    </div>
  );
}

export default Featuring;
