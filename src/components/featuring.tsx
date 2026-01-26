"use client";

import React, { ReactNode, useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import MediaPreloader from './MediaPreloader';


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
      {/* Featured Dishes */}
      <FeaturedDishSection
        imageSrc={[
          "/Images/featuring/Smashing burgers/Smashing burgers - 0.png",
          "/Images/featuring/Smashing burgers/Smashing burgers - 1.png",
          "/Images/featuring/Smashing burgers/Smashing burgers - 2.png",
          "/Images/featuring/Smashing burgers/Smashing burgers - 3.png",
          "/Images/featuring/Smashing burgers/Smashing burgers - 4.png",
        ]}
        alt="Smashing burgers"
        title="Smashing burgers"
        description={
          <>
            Premium beef smashed onto a scorching hot grill, creating crispy crusts with juicy centers. Double patties as standard, topped with fresh ingredients and signature sauces. Customize with extra patties or premium toppings.
            <br />
            <br />
            <br />
            <span className="font-bold">Fully Loaded Smash - £9.99</span>
            <br />
            Double beef patty, cheese, lettuce, pickles, caramelized onions, turkey rashers, onion rings, finished with mayo & classic burger sauce.
            <br />
            <br />
            <span className="font-bold">BBQ Feast Burger - £7.49</span>
            <br />
            Double beef patty, cheese, lettuce, caramelized onions, pickles, finished with mayo & BBQ sauce.
            <br />
            <br />
            <span className="font-bold">Halloumi Fun - £7.49</span>
            <br />
            Double beef patty, cheese, lettuce, onions, halloumi slices, pickles, finished with mayo & classic burger sauce.
            <br />
            <br />
            <span className="font-bold">Classic Cheese Burger - £7.49</span>
            <br />
            Double beef patty with cheese, lettuce, pickles, caramelized onions finished with mayo & classic burger sauce.
          </>
        }
        reverse={false}
      />

      <FeaturedDishSection
        imageSrc={[
          "/Images/featuring/Shack Style Boxes/Shack Style Boxes - 0.png",
          "/Images/featuring/Shack Style Boxes/Shack Style Boxes - 1.png",
          "/Images/featuring/Shack Style Boxes/Shack Style Boxes - 2.png",
          "/Images/featuring/Shack Style Boxes/Shack Style Boxes - 3.png",
        ]}
        alt="Shack Style Boxes"
        title="Shack Style Boxes"
        description={
          <>
            Freshly prepared Shack Style Boxes with unbeatable value to money, try anything from ranging from our Mixed Shack-Style Meat, Smash Donner Box, Hunger Buster Box, and Wing Wing Box. All of which come with a side and a drink.
            <br />
            <br />
            <span className="font-bold">Mixed Shack-Style Meat - £11.99</span>
            <br />
            Shack-style lamb donner / grilled chicken, or mix topped with mix salad, coleslaw & finished with signature garlic and chilli sauce.
            <br />
            <br />
            <span className="font-bold">Smash Donner Box - £14.99</span>
            <br />
            Served with signature burger, tender lamb donner, 3 grilled wings/3 Fried Tenders, a side, and a drink.
            <br />
            <br />
            <span className="font-bold">Hunger Buster Box - £11.99</span>
            <br />
            Half Chicken, 3 Grilled Wings, Pitta Bread, Mix Salad, Coleslaw and Drink
            <br />
            <br />
            <span className="font-bold">Wing Wing Box - £11.99</span>
            <br />
            15 Grilled wings, Rice or chips, Mix Salad, Coleslaw and Drink
            <br />
          </>
        }
        imagePriority={true}
        reverse={true}
      />

      <FeaturedDishSection
        imageSrc={[
          "/Images/featuring/Lets Get Grilling/Lets Get Grilling - 0.png",
          "/Images/featuring/Lets Get Grilling/Lets Get Grilling - 1.png",
          "/Images/featuring/Lets Get Grilling/Lets Get Grilling - 2.png",
          "/Images/featuring/Lets Get Grilling/Lets Get Grilling - 3.png",
          "/Images/featuring/Lets Get Grilling/Lets Get Grilling - 4.png"
        ]}
        alt="Let's Get Grilling"
        title="Let's Get Grilling"
        description={
          <>
            Fire up your taste buds with our signature grilled selection! Every piece is cooked to perfection over an open flame, delivering bold, smoky flavors. From tender wings to juicy chicken and mouthwatering burgers, choose your heat level – Lemon to X-Hot – and experience chicken done right: charred, succulent, and packed with flavor.
            <br />
            <br />
            <span className="font-bold">Shack Wrap - £4.99</span>
            <br />
            Grilled chicken strips with lettuce, mayo & sweet chili sauce.
            <br />
            <br />
            <span className="font-bold">Shack Grilled Burger - £4.99</span>
            <br />
            Grilled fillet breast served with lettuce, mayo, cheese & hash brown.
            <br />
            <br />
            <span className="font-bold">Chicken & Rice - £5.99</span>
            <br />
            Grilled chicken strips with Rice.
            <br />
            <br />
            <span className="font-bold">Grilled Chicken</span>
            <br />
            1/4 Piece Chicken - £4.50<br /> 1/2 Piece Chicken - £6.99<br /> Whole Chicken - £11.99
            <br />
            <br />
            <span className="italic"><span className="text-primary">*</span> Make it a meal for £2.50 only.</span>
          </>
        }
        imagePriority={true}
        reverse={false}
      />

      <FeaturedDishSection
        imageSrc="/Images/featuring/Meal Options for everyone/Meal Options for everyone - 0.png"
        alt="Meal Options for everyone"
        title="Meal Options for everyone"
        description={
          <>
            Quality steak burgers and cheeseburgers in smaller portions. Real food for real kids—no mystery meat.
            <br />
            <br />
            <a className="font-bold cursor-pointer" href="/menu">View our full menu to see more details</a>
          </>
        }
        imagePriority={true}
        reverse={true}
      />

      <FeaturedDishSection
        imageSrc={[
          "/Images/featuring/Sides & Add-ons/Sides & Add-ons - 0.png",
          "/Images/featuring/Sides & Add-ons/Sides & Add-ons - 1.png",
          "/Images/featuring/Sides & Add-ons/Sides & Add-ons - 2.png",
          "/Images/featuring/Sides & Add-ons/Sides & Add-ons - 3.png",
        ]}
        alt="Sides & Add-ons"
        title="Sides & Add-ons"
        description={
          <>
            Fresh accompaniments from classic fries to crispy wedges, onion rings, mozzarella sticks, mac & cheese bites, and more. Perfect complements to any meal.
            <br />
            <br />
            <a className="font-bold cursor-pointer" href="/menu">View our full menu to see more details</a>
          </>
        }
        imagePriority={true}
        reverse={false}
      />
      <FeaturedDishSection
        imageSrc={[
          "/Images/featuring/Desserts & Drinks/Desserts & Drinks - 0.png",
          "/Images/featuring/Desserts & Drinks/Desserts & Drinks - 1.png",
          "/Images/featuring/Desserts & Drinks/Desserts & Drinks - 5.png",
          "/Images/featuring/Desserts & Drinks/Desserts & Drinks - 2.png",
          "/Images/featuring/Desserts & Drinks/Desserts & Drinks - 3.png",
          "/Images/featuring/Desserts & Drinks/Desserts & Drinks - 4.png",
        ]}
        alt="Desserts & Drinks"
        title="Desserts & Drinks"
        description={
          <>
            Decadent milk cakes, classic chocolate and carrot cakes, traditional Kulfi, and Ben & Jerry&apos;s tubs. Sweet endings that match our quality standards.
            <br />
            <br />
            <a className="font-bold cursor-pointer" href="/menu">View our full menu to see more details</a>
          </>
        }
        imagePriority={true}
        reverse={true}
      />

    </div>
  );
}

export default Featuring;
