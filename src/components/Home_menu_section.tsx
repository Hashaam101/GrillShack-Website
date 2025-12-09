"use client";

import { useCallback, useRef, useState } from 'react'

import Image from 'next/image';

import arrow from '@/../public/Svgs/Arrow.svg';
import ScrollableMenuCards, { ScrollableMenuRef } from './Home_menu_card';
import { products } from '@/data/products';

type HomeMenuSectionProps = {
  /**
   * Theme for the product cards shown in this section. Independent of site theme.
   */
  cardTheme?: 'light' | 'dark';
};

export default function Home_menu_section({ cardTheme = 'dark' }: HomeMenuSectionProps) {
  // Pull a subset of products for the homepage
  const popularItems = products.filter(p => p.showOnHomepage);


  const scrollableMenuRef = useRef<ScrollableMenuRef>(null);
  const [isMenuAtEnd, setIsMenuAtEnd] = useState(false);

  const handleScrollEndChange = useCallback((isAtEnd: boolean) => {
    console.log("Parent received isAtEnd:", isAtEnd);
    setIsMenuAtEnd(isAtEnd);
  }, []); // Empty dependency array means this function identity is stable

  // Function to trigger scroll in the child component
  const handleNextClick = () => {
    if (scrollableMenuRef.current) {
      scrollableMenuRef.current.scrollNext();
    }
  };

  const [isHovering, setIsHovering] = useState(false);

  return (
    <div className='relative w-full h-fit overflow-visible rounded-[12px] bg-primary-dark flex flex-col sm:flex-row py-[20px] pl-[20px] pr-0 group'>
      <div className='flex px-[8px] py-[26px] flex-col z-10'>
        <div className='text-h3 text-white text-start leading-[1.2]'>
          Smashing delicious
          <br />
          Fast Foods
        </div>
        <div className='text-white/50 text-normal1 mt-[5px]'>
          Treat yourself to our must-try list that has everyone talking.
        </div>

        <div className='flex-1' />

        <div className='text-normal3 text-white'>
          Scroll through to explore our best-sellers
        </div>
        <div className='hover:bg-white/20 group-hover:translate-x-5 transition-all duration-400 rounded-full w-fit aspect-square flex items-center justify-center'
          onClick={handleNextClick}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          style={{
            rotate: isMenuAtEnd ? '180deg' : '0deg',
          }}
        >
          <Image
            src={arrow}
            alt="Arrow"
            className="w-[24px] h-[24px] m-[10px] cursor-pointer"
          />
        </div>
      </div>

      <div className='overflow-x-hidden h-fit flex justify-center'>
        <ScrollableMenuCards
          ref={scrollableMenuRef}
          menuItems={popularItems}
          onScrollEndChange={handleScrollEndChange}
          cardTheme={cardTheme}
        />
      </div>
    </div>
  )
}

// Removed unused local component to reduce duplication
