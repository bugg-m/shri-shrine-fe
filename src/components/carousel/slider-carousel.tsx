import React, { useEffect, useRef, useState, useCallback } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

interface ResponsiveBreakpoint {
  breakpoint: number;
  items: number;
}

interface SliderCarouselProps<T> {
  data: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
  responsive?: ResponsiveBreakpoint[];
  className?: string;
}

const defaultResponsive: ResponsiveBreakpoint[] = [
  { breakpoint: 1200, items: 4 },
  { breakpoint: 768, items: 2 },
  { breakpoint: 480, items: 1 },
];

export default function SliderCarousel<T>({
  data,
  renderItem,
  responsive = defaultResponsive,
  className = '',
}: SliderCarouselProps<T>) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(responsive[0]?.items || 3);
  const [isHovered, setIsHovered] = useState(false);

  const timerRef = useRef<NodeJS.Timeout>(null);
  const totalItems = data.length;

  const updateItemsToShow = useCallback(() => {
    const width = window.innerWidth;
    const breakpoint = responsive.find((bp) => width >= bp.breakpoint);
    setItemsToShow(
      breakpoint?.items || responsive[responsive.length - 1]?.items || 3
    );
  }, [responsive]);

  useEffect(() => {
    updateItemsToShow();
    window.addEventListener('resize', updateItemsToShow);
    return () => window.removeEventListener('resize', updateItemsToShow);
  }, [updateItemsToShow]);

  const startAutoPlay = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    if (!isHovered && totalItems > 0) {
      timerRef.current = setInterval(() => {
        setCurrentIndex((prev) => {
          if (prev >= totalItems - 1) {
            setTimeout(() => setCurrentIndex(0), 50);
            return totalItems;
          }
          return prev + 1;
        });
      }, 3000);
    }
  }, [isHovered, totalItems]);

  const stopAutoPlay = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  useEffect(() => {
    startAutoPlay();
    return stopAutoPlay;
  }, [startAutoPlay, stopAutoPlay]);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => {
      if (prev >= totalItems - 1) {
        setTimeout(() => setCurrentIndex(0), 50);
        return totalItems;
      }
      return prev + 1;
    });
  }, [totalItems]);

  const goToPrev = useCallback(() => {
    setCurrentIndex((prev) => {
      if (prev <= 0) {
        return totalItems - 1;
      }
      return prev - 1;
    });
  }, [totalItems]);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  if (totalItems === 0) return null;

  const gap = 16;
  const itemWidth = `calc((100% - ${gap * (itemsToShow - 1)}px) / ${itemsToShow})`;

  const getTransformValue = () => {
    if (totalItems <= itemsToShow) return 0;

    const itemWidthPercent = 100 / itemsToShow;
    const gapWidthPercent = (gap / (window.innerWidth || 1200)) * 100;
    const totalItemWidth = itemWidthPercent + gapWidthPercent;

    return currentIndex * totalItemWidth;
  };

  return (
    <div
      className={`relative w-full ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        onClick={goToPrev}
        className="absolute z-20 left-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
        aria-label="Previous slide"
      >
        <FaChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={goToNext}
        className="absolute z-20 right-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
        aria-label="Next slide"
      >
        <FaChevronRight className="w-5 h-5" />
      </button>

      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(calc(-${currentIndex} * (${itemWidth} + ${gap}px)))`,
            gap: `${gap}px`,
          }}
        >
          {[...data, ...data.slice(0, itemsToShow)].map((item, index) => (
            <div
              key={`${index % totalItems}-${Math.floor(index / totalItems)}`}
              className="flex-shrink-0"
              style={{
                width: itemWidth,
              }}
            >
              {renderItem(item, index % totalItems)}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
