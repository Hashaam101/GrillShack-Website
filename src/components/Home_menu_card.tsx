import React, { forwardRef, useCallback, useEffect, useImperativeHandle, useRef, useState } from 'react';
import Image from 'next/image';
import MediaPreloader from './MediaPreloader';
import FavoriteStarIcon from './FavoriteStarIcon';

import placeholderImg from "@/../public/Images/menu.png";
import type { Product as MenuItem } from '@/data/products';

export interface ScrollableMenuRef {
  scrollNext: () => void;
}

interface ScrollableMenuCardsProps {
  menuItems: MenuItem[];
  onScrollEndChange?: (isAtEnd: boolean) => void;
  /**
   * Card-specific theme, independent of app theme. Defaults to light.
   */
  cardTheme?: 'light' | 'dark';
}

const ScrollableMenuCards = forwardRef<ScrollableMenuRef, ScrollableMenuCardsProps>(
  ({ menuItems, onScrollEndChange, cardTheme = 'light' }, ref) => {

    const isDarkCard = cardTheme === 'dark';
    const [favorites, setFavorites] = useState<Record<string | number, boolean>>({});

    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [isAtEnd, setIsAtEnd] = useState(false);
    // Store the timeout ID to clear it if component unmounts during scroll debounce
    const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);
    const isDragging = useRef(false);
    const startX = useRef(0);
    const scrollLeft = useRef(0);

    // --- Function to scroll to the next card or loop back ---
    const scrollNext = useCallback(() => {
      const container = scrollContainerRef.current;
      if (!container || menuItems.length === 0) return;

      const { scrollLeft, scrollWidth, clientWidth } = container;

      const firstCard = container.children[0] as HTMLElement | undefined;
      const cardWidth = firstCard?.offsetWidth ?? clientWidth; 
      const gap = 16; 
      const scrollAmount = cardWidth + gap; 
      const threshold = 10;
      const isNearEnd = scrollLeft + clientWidth >= scrollWidth - threshold;

      if (isNearEnd) {
        container.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }, [menuItems.length]); 

    useImperativeHandle(ref, () => ({
      scrollNext,
    }));

    const checkScrollPosition = useCallback(() => {
        const container = scrollContainerRef.current;
        if (!container) return;

        const { scrollLeft, scrollWidth, clientWidth } = container;
        const threshold = 10;
        const currentIsAtEnd = scrollLeft + clientWidth >= scrollWidth - threshold;

        setIsAtEnd(prevIsAtEnd => {
            if (prevIsAtEnd !== currentIsAtEnd) {
                if (onScrollEndChange) {
                    onScrollEndChange(currentIsAtEnd);
                }
                return currentIsAtEnd;
            }
            return prevIsAtEnd;
        });

    }, [onScrollEndChange]); 


     const handleScroll = useCallback(() => {
        if (scrollTimeoutRef.current) {
            clearTimeout(scrollTimeoutRef.current);
        }
        scrollTimeoutRef.current = setTimeout(() => {
            checkScrollPosition();
        }, 150);
     }, [checkScrollPosition]);



    useEffect(() => {
      const container = scrollContainerRef.current;
      if (!container) return;

      container.addEventListener('scroll', handleScroll);

      // Only check scroll position after mount, not during render
      setTimeout(() => {
        checkScrollPosition();
      }, 0);

      return () => {
        container.removeEventListener('scroll', handleScroll);
        if (scrollTimeoutRef.current) {
            clearTimeout(scrollTimeoutRef.current);
        }
      };
    }, [menuItems, handleScroll, checkScrollPosition]); // Rerun if items or handlers change

    useEffect(() => {
      const storedFavorites = localStorage.getItem('menuFavorites');
      if (storedFavorites) {
        try {
          setFavorites(JSON.parse(storedFavorites));
        } catch (e) {
          console.error('Failed to parse favorites from localStorage:', e);
        }
      }
    }, []);

    const toggleFavorite = (itemId: string | number) => {
      setFavorites(prev => {
        const updated = { ...prev, [itemId]: !prev[itemId] };
        localStorage.setItem('menuFavorites', JSON.stringify(updated));
        return updated;
      });
    };

  return (
    <div className="w-full bg-primary-dark text-white pl-4 pr-0 py-0">

      {/* Scrollable Cards Section */}
      <div
        ref={scrollContainerRef}
        className="flex overflow-x-auto gap-4 scrollbar-hide cursor-grab active:cursor-grabbing pr-0"
        onMouseDown={e => {
          // Only start drag if not on selectable text
          if ((e.target as HTMLElement).closest('.selectable-text')) return;
          isDragging.current = true;
          startX.current = e.pageX - (scrollContainerRef.current?.getBoundingClientRect().left || 0);
          scrollLeft.current = scrollContainerRef.current?.scrollLeft || 0;
          document.body.style.userSelect = "none";
        }}
        onMouseLeave={() => {
          isDragging.current = false;
          document.body.style.userSelect = "";
        }}
        onMouseUp={() => {
          isDragging.current = false;
          document.body.style.userSelect = "";
        }}
        onMouseMove={e => {
          if (!isDragging.current) return;
          e.preventDefault();
          const x = e.pageX - (scrollContainerRef.current?.getBoundingClientRect().left || 0);
          const walk = (x - startX.current) * 1;
          if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollLeft = scrollLeft.current - walk;
          }
        }}
      >
        {menuItems.map((item) => (
          <div 
            key={item.id} 
            className="w-[300px] sm:w-[386px] rounded-[12px] overflow-hidden flex-shrink-0"
          >
            {/* Card Image */}
            <div className="relative w-full cursor-grab active:cursor-grabbing" style={{ maxHeight: '239.99px', height: '239.99px' }}>
              {/* Preloader overlays the image until loaded, matching shape and fill */}
              <MediaPreloader
                src={item.image}
                alt={item.name}
                className="absolute top-0 left-0 w-full h-full object-cover rounded-[12px]"
                style={{ borderRadius: '12px', maxHeight: '239.99px', height: '239.99px' }}
              />
              <Image 
                src={item.image}
                alt={item.name}
                fill
                className="object-cover rounded-[12px]"
                style={{ borderRadius: '12px' }}
                draggable={false}
              />

              {/* overlays */}
              <div className="absolute top-3 left-3 flex items-center gap-2">
                <span className={`${isDarkCard ? 'bg-[rgba(176,12,19,0.85)] text-white' : 'bg-[rgba(176,12,19,0.12)] text-[var(--tt-brand-color-500,#B00C13)] border border-[rgba(176,12,19,0.25)]'} px-3 py-1 rounded-full text-xs font-semibold tracking-tight`}>
                  {item.badge ?? 'Best Seller'}
                </span>
              </div>
              <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/45 to-transparent" />
            </div>

            {/* Card Content */}
            <div
              className={`mt-[-12px] z-10 relative rounded-[12px] pb-[16px] pt-[10px] px-[16px] border ${isDarkCard ? 'bg-[#0d0d0d] border-[#1f1f1f] text-white shadow-[0_16px_40px_rgba(0,0,0,0.45)]' : 'bg-white border-black/5 text-black shadow-[0_16px_40px_rgba(0,0,0,0.06)]'}`}
            >
              <div className="flex items-start justify-between">
                <div className={`text-[20px] font-semibold selectable-text`} style={{ cursor: "text", userSelect: "text", color: isDarkCard ? '#f5f5f5' : '#1f1f1f' }}>{item.name}</div>
                <button 
                  type="button" 
                  aria-label="favorite" 
                  className="p-1 text-[var(--tt-brand-color-500,#B00C13)] hover:opacity-80 transition-opacity"
                  onClick={() => toggleFavorite(item.id)}
                >
                  <FavoriteStarIcon size={20} className="text-[var(--tt-brand-color-500,#B00C13)]" filled={favorites[item.id] ?? false} />
                </button>
              </div>

              <div className={`mt-1 text-[14px] font-semibold ${isDarkCard ? 'text-[var(--tt-brand-color-500,#B00C13)]' : 'text-[var(--tt-brand-color-500,#B00C13)]'}`}>
                {item.priceM ? `M $ ${item.priceM.toFixed(2)}` : ''}
                {item.priceM && item.priceL ? ' · ' : ''}
                {item.priceL ? `L $ ${item.priceL.toFixed(2)}` : ''}
                {(item.priceM || item.priceL) && item.points ? ' · ' : ''}
                {(!item.priceM && !item.priceL) ? `$ ${item.price.toFixed(2)}` : ''}
                {item.points ? `+${item.points} points` : ''}
              </div>

              <div className={`mt-2 text-[15px] selectable-text ${isDarkCard ? 'text-[#bfbfbf]' : 'text-black/70'}`} style={{ cursor: "text", userSelect: "text" }}>{item.description}</div>

              <div className="mt-3">
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag, idx) => (
                    <span 
                      key={idx} 
                      className={`text-normal4 px-[12px] py-[6px] rounded-full selectable-text ${isDarkCard ? 'bg-[#1f1f1f] text-[#9c9c9c]' : 'bg-[rgba(176,12,19,0.08)] text-[rgba(60,60,60,1)] border border-[rgba(176,12,19,0.18)]'}`}
                      style={{ cursor: "text", userSelect: "text" }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-4">
                <button
                  type="button"
                  className={`${isDarkCard
                    ? 'w-full inline-flex items-center justify-center gap-1 text-base text-white bg-[#1d1d1d] rounded-full px-4 py-3 hover:bg-[var(--tt-brand-color-500,#B00C13)] hover:text-white transition-colors'
                    : 'w-full inline-flex items-center justify-center gap-1 text-base text-[var(--tt-brand-color-500,#B00C13)] bg-[rgba(176,12,19,0.06)] rounded-full px-4 py-3 hover:bg-[var(--tt-brand-color-500,#B00C13)] hover:text-white transition-colors'
                  }`}
                >
                  Read More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style jsx>
        {`
        .scrollbar-hide {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;     /* Firefox */
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;             /* Chrome, Safari and Opera */
        }
      `}
      </style>

    </div>
  );
}
);

export default ScrollableMenuCards;