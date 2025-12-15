'use client';

import React, { useState, useEffect } from 'react';
import { products, Product } from '../data/products';
import MenuProductCard from './MenuProductCard';
import Link from 'next/link'; // Import Link for navigation
import ThemeButton from './ThemeBtn';

interface MenuSectionProps {
  limit?: number;
}

const MenuSection: React.FC<MenuSectionProps> = ({ limit }) => {
  const categories = Array.from(new Set(products.map(p => p.category)));
  const [selectedCategory, setSelectedCategory] = useState<string>('');

  useEffect(() => {
    const savedCategory = localStorage.getItem('selectedCategory');
    if (savedCategory && categories.includes(savedCategory)) {
      setSelectedCategory(savedCategory);
    } else {
      setSelectedCategory(categories[0]);
    }
  }, []);

  useEffect(() => {
    if (selectedCategory) {
      localStorage.setItem('selectedCategory', selectedCategory);
    }
  }, [selectedCategory]);

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
  };

  const filteredProducts = products.filter(product => product.category === selectedCategory);
  const displayedProducts = limit ? filteredProducts.slice(0, limit) : filteredProducts;

  return (
    <section className="flex flex-col gap-[36px] items-center relative py-10 w-full">
      {/* Title */}
      <h2 className="text-h2">MENU</h2>

      {/* Category Filter Buttons */}
      <div className="flex flex-wrap gap-y-2 sm:gap-y-[12px] gap-x-1 sm:gap-x-[12px] items-start justify-center relative w-full max-w-4xl mx-auto px-0 sm:px-4">
        {categories.map((category, index) => (
          <button
            key={index}
            className={`flex items-center justify-center px-4 py-2 sm:px-[22px] sm:py-[8px] relative rounded-full
              ${selectedCategory === category
                ? 'bg-[var(--color-primary-dark)] text-[color:var(--white)]'
                : 'bg-[var(--pure-white-5,rgba(255,255,255,0.05))] text-[color:var(--tt-color-text-gray)]/80 hover:bg-[var(--pure-white-5,rgba(255,255,255,0.02))] transition-colors'
              } font-[var(--default-font-family)] leading-[normal] not-italic text-sm sm:text-[16px]`}
            onClick={() => handleCategoryClick(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div className="flex flex-wrap gap-y-2 sm:gap-y-[12px] gap-x-1 sm:gap-x-[12px] justify-center items-start w-full px-0 sm:px-4">
        {displayedProducts.map(product => (
          <MenuProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* View Full Menu Button */}
      <ThemeButton
        text="View Full Menu"
        href="/menu"
        textClassname="pr-[8px] pl-[14px] text-white"
        className="bg-primary-dark border-2 hover:bg-primary-dark/90 border-primary-dark hover:border-primary-dark/90 transition-colors"
      />
    </section>
  );
};

export default MenuSection;
