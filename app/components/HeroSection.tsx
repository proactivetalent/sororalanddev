"use client";

import Link from "next/link";
import { useState, useEffect, useCallback, useRef } from "react";

// Add your hero images here
const heroImages = [
  { src: "/pictures/hero-1.png", alt: "Modern luxury home 1" },
  { src: "/pictures/hero-2.png", alt: "Modern luxury home 2" },
  { src: "/pictures/hero-3.png", alt: "Modern luxury home 3" },
  { src: "/pictures/hero-4.png", alt: "Modern luxury home 4" },
  { src: "/pictures/hero-5.png", alt: "Modern luxury home 5" },
];

const AUTOPLAY_INTERVAL = 3000; // 3 seconds per slide
const CROSSFADE_DURATION = 500; // 1 second crossfade

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  // Custom cursor state
  const [showCustomCursor, setShowCustomCursor] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [smoothCursorPosition, setSmoothCursorPosition] = useState({ x: 0, y: 0 });
  const [isLeftHalf, setIsLeftHalf] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  
  const carouselRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number | null>(null);

  // Detect touch device
  useEffect(() => {
    setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
  }, []);

  // Smooth cursor animation with easing
  useEffect(() => {
    if (!showCustomCursor) return;

    const animate = () => {
      setSmoothCursorPosition(prev => ({
        x: prev.x + (cursorPosition.x - prev.x) * 0.15,
        y: prev.y + (cursorPosition.y - prev.y) * 0.15,
      }));
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [showCustomCursor, cursorPosition]);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (isTouchDevice || !carouselRef.current) return;

    const rect = carouselRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    setCursorPosition({ x, y });
    setIsLeftHalf(x < rect.width / 2);
  }, [isTouchDevice]);

  const handleMouseEnter = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (isTouchDevice) return;
    
    setIsPaused(true);
    setShowCustomCursor(true);
    
    // Initialize cursor position immediately
    if (carouselRef.current) {
      const rect = carouselRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      setCursorPosition({ x, y });
      setSmoothCursorPosition({ x, y });
      setIsLeftHalf(x < rect.width / 2);
    }
  }, [isTouchDevice]);

  const handleMouseLeave = useCallback(() => {
    setIsPaused(false);
    setShowCustomCursor(false);
  }, []);

  const handleCarouselClick = useCallback(() => {
    if (isTouchDevice || isTransitioning) return;
    
    if (isLeftHalf) {
      // Go to previous slide
      setIsTransitioning(true);
      setCurrentIndex((prev) => (prev - 1 + heroImages.length) % heroImages.length);
      setTimeout(() => setIsTransitioning(false), CROSSFADE_DURATION);
    } else {
      // Go to next slide
      setIsTransitioning(true);
      setCurrentIndex((prev) => (prev + 1) % heroImages.length);
      setTimeout(() => setIsTransitioning(false), CROSSFADE_DURATION);
    }
  }, [isTouchDevice, isTransitioning, isLeftHalf]);

  const goToSlide = useCallback((index: number) => {
    if (index === currentIndex || isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(index);
    setTimeout(() => setIsTransitioning(false), CROSSFADE_DURATION);
  }, [currentIndex, isTransitioning]);

  const nextSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    setTimeout(() => setIsTransitioning(false), CROSSFADE_DURATION);
  }, [isTransitioning]);

  // Autoplay
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      nextSlide();
    }, AUTOPLAY_INTERVAL);

    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  return (
    <section className="w-[90%] max-w-[1760px] mx-auto mb-[100px] mt-10">
      <div className="bg-[#F7F8F8] rounded-[65px] p-8 md:p-12 lg:px-16 lg:py-8">
        {/* Top Content */}
        <div className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-16 mb-10 md:mb-8">
          {/* Left - Heading */}
          <div className="lg:w-1/2">
            <h1 className="pl-10 text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-gray-900">
              Built for<br />New York
            </h1>
          </div>

          {/* Right - Description & CTA */}
          <div className="lg:w-1/2 flex flex-col justify-center">
            <p className="text-sm md:text-base font-medium text-gray-900 mb-2">
              Precision General Contracting for NYC&apos;s all four boroughs.
            </p>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-6">
              At Sorora, we transform the complexity of New York City construction into a
              seamless, trusted process. From brownstone renovations to commercial build-outs, we deliver exceptional craftsmanship, transparent communication, and
              peace of mind.
            </p>
            <Link
              href="/contact"
              className="self-start bg-[#E20D6E] hover:bg-pink-700 text-white text-sm md:text-base font-medium px-8 py-3.5 rounded-[8px] transition-colors"
            >
              Get Your Free Consultation
            </Link>
          </div>
        </div>

        {/* Hero Image Carousel with Crossfade & Parallax */}
        <div 
          ref={carouselRef}
          className="relative w-full aspect-[16/9] md:aspect-[2.5/1] rounded-[45px] overflow-hidden bg-gray-300"
          style={{ cursor: showCustomCursor ? 'none' : 'default' }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onMouseMove={handleMouseMove}
          onClick={handleCarouselClick}
        >
          {/* Custom Cursor - Desktop Only */}
          {showCustomCursor && !isTouchDevice && (
            <div
              className="pointer-events-none absolute z-20 transition-transform duration-150"
              style={{
                left: smoothCursorPosition.x,
                top: smoothCursorPosition.y,
                transform: `translate(-50%, -50%) scaleX(${isLeftHalf ? -1 : 1})`,
              }}
            >
              <svg 
                className="w-12 h-12 md:w-16 md:h-16 drop-shadow-lg" 
                fill="none" 
                stroke="white" 
                viewBox="0 0 24 24"
                style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))' }}
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2.5} 
                  d="M9 5l7 7-7 7" 
                />
              </svg>
            </div>
          )}

          {/* Stacked Images with Crossfade */}
          {heroImages.map((image, index) => (
            <div
              key={index}
              className="absolute inset-0 transition-opacity ease-in-out"
              style={{
                opacity: index === currentIndex ? 1 : 0,
                transitionDuration: `${CROSSFADE_DURATION}ms`,
                zIndex: index === currentIndex ? 1 : 0,
              }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover pointer-events-none"
                style={{
                  transform: index === currentIndex ? "scale(1.05)" : "scale(1)",
                  transition: `transform ${AUTOPLAY_INTERVAL}ms ease-out`,
                }}
                draggable="false"
              />
            </div>
          ))}

          {/* Navigation Dots - Right Side */}
          <div className="absolute right-6 top-1/2 -translate-y-1/2 flex flex-col gap-2 z-10">
            {heroImages.map((_, index) => (
              <button
                key={index}
                onClick={(e) => {
                  e.stopPropagation();
                  goToSlide(index);
                }}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? "bg-pink-500 scale-110" 
                    : "bg-white/70 hover:bg-white hover:scale-110"
                }`}
                style={{ cursor: 'pointer' }}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
