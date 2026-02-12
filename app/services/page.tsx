"use client";

import React, { useState } from 'react'

const processSteps = [
  {
    number: "1",
    title: "Discover & Consult",
    description: "We listen to your goals, constraints, and vision.",
  },
  {
    number: "2",
    title: "Plan & Scope",
    description: "We develop a fixes-price proposal with transparent timelines.",
  },
  {
    number: "3",
    title: "Permit & Prep",
    description: "We secure all NYC approvals and mobilize our vetted crews.",
  },
  {
    number: "4",
    title: "Build & Communicate",
    description: "Your Project Manager provides daily oversight and updates.",
  },
  {
    number: "5",
    title: "Finalize & Warranty",
    description: "We ensure perfection and stand behind our work.",
  },
];

const residentialImages = [
  { src: "/pictures/services/res1.png", alt: "Modern residential building exterior" },
  { src: "/pictures/services/res2.png", alt: "Luxury apartment interior" },
  { src: "/pictures/services/res3.png", alt: "Contemporary home design" },
];

const commercialImages = [
  { src: "/pictures/services/comm1.png", alt: "Commercial building exterior" },
  { src: "/pictures/services/comm2.png", alt: "Office interior" },
  { src: "/pictures/services/comm3.png", alt: "Retail space design" },
];

const restorationImages = [
  { src: "/pictures/services/restore1.png", alt: "Building restoration" },
  { src: "/pictures/services/restore2.png", alt: "Facade repair" },
  { src: "/pictures/services/restore3.png", alt: "Exterior work" },
];

const consultingImages = [
  { src: "/pictures/services/con1.png", alt: "Pre-construction planning" },
  { src: "/pictures/services/con2.png", alt: "Design collaboration" },
  { src: "/pictures/services/con3.png", alt: "Project consulting" },
];

const Page = () => {
  // Independent state for each carousel
  const [residentialIndex, setResidentialIndex] = useState(0);
  const [commercialIndex, setCommercialIndex] = useState(0);
  const [restorationIndex, setRestorationIndex] = useState(0);
  const [consultingIndex, setConsultingIndex] = useState(0);

  // Residential carousel controls
  const nextResidential = () => {
    setResidentialIndex((prev) => (prev + 1) % residentialImages.length);
  };
  const prevResidential = () => {
    setResidentialIndex((prev) => (prev - 1 + residentialImages.length) % residentialImages.length);
  };

  // Commercial carousel controls
  const nextCommercial = () => {
    setCommercialIndex((prev) => (prev + 1) % commercialImages.length);
  };
  const prevCommercial = () => {
    setCommercialIndex((prev) => (prev - 1 + commercialImages.length) % commercialImages.length);
  };

  // Restoration carousel controls
  const nextRestoration = () => {
    setRestorationIndex((prev) => (prev + 1) % restorationImages.length);
  };
  const prevRestoration = () => {
    setRestorationIndex((prev) => (prev - 1 + restorationImages.length) % restorationImages.length);
  };

  // Consulting carousel controls
  const nextConsulting = () => {
    setConsultingIndex((prev) => (prev + 1) % consultingImages.length);
  };
  const prevConsulting = () => {
    setConsultingIndex((prev) => (prev - 1 + consultingImages.length) % consultingImages.length);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="w-[90%] max-w-[1760px] mx-auto mb-12 md:mb-[100px] mt-6 md:mt-10">
        <div className="bg-[#F7F8F8] rounded-[32px] md:rounded-[65px] p-6 md:p-12 lg:px-16 lg:py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 mb-6 md:mb-8">
              Precision-Built Solutions for New York's Unique Spaces
            </h1>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed max-w-3xl mx-auto">
              At Sorora, we specialize in managing the complexity of New York City construction. From navigating historic district regulations to executing flawless finishes in high-rise buildings, our comprehensive services are designed to turn your vision into a seamlessly delivered reality. Every project is backed by our fixed-price promise, dedicated project management, and deep NYC expertise.
            </p>
          </div>
        </div>
      </section>

      {/* Residential Renovation Section */}
      <section className="w-[90%] max-w-[1760px] mx-auto mb-12 md:mb-[100px]">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">
          {/* Left Side - Image Carousel with Thumbnail Preview */}
          <div className="lg:w-1/2 relative">
            {/* Main Image */}
            <div className="rounded-[24px] md:rounded-[32px] overflow-hidden">
              <img
                src={residentialImages[residentialIndex].src}
                alt={residentialImages[residentialIndex].alt}
                className="w-full h-auto object-cover transition-opacity duration-500"
              />
            </div>
            
            {/* Thumbnail Strip - Shows All Images */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 md:bottom-8 flex items-center gap-2">
              
              {/* Nav button */}
              <button 
                onClick={prevResidential}
                className="w-8 h-8 md:w-10 md:h-10 bg-[#E20D6E] hover:bg-pink-700 rounded-full flex items-center justify-center shadow-lg transition-colors ml-1"
                aria-label="Previous image"
              >
                <svg className="w-4 h-4 md:w-5 md:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              {/* Preview thumbnails */}
              <div className="flex gap-2">
                {residentialImages.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setResidentialIndex(index)}
                    className={`rounded-[8px] md:rounded-[12px] overflow-hidden transition-all duration-300 ${
                      index === residentialIndex 
                        ? "ring-2 ring-[#E20D6E] ring-offset-2 scale-105" 
                        : "opacity-70 hover:opacity-100"
                    }`}
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-16 h-12 md:w-24 md:h-16 object-cover"
                    />
                  </button>
                ))}
              </div>
              
              {/* Nav button */}
              <button 
                onClick={nextResidential}
                className="w-8 h-8 md:w-10 md:h-10 bg-[#E20D6E] hover:bg-pink-700 rounded-full flex items-center justify-center shadow-lg transition-colors ml-1"
                aria-label="Next image"
              >
                <svg className="w-4 h-4 md:w-5 md:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            
          </div>

          {/* Right Side - Content */}
          <div className="lg:w-1/2">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-6">
              Residential Renovation & Remodeling
            </h2>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-6 md:mb-8">
              Transform your home with a partner who understands the intricacies of NYC living. We deliver beauty, function, and value, respecting your space and your schedule.
            </p>

            <ul className="space-y-4 md:space-y-2">
              <li>
                <h3 className="text-sm md:text-base font-bold text-gray-900 mb-1 flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-gray-900 rounded-full mt-2 flex-shrink-0"></span>
                  Full Apartment/House Renovations
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed pl-4">
                  Complete gut renovations and redesigns, handling everything from structural adjustments to final finishes.
                </p>
              </li>

              <li>
                <h3 className="text-sm md:text-base font-bold text-gray-900 mb-1 flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-gray-900 rounded-full mt-2 flex-shrink-0"></span>
                  Kitchen & Bathroom Remodeling
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed pl-4">
                  Custom cabinetry, premium fixture installation, tile work, and lighting design—the heart of your home, perfected.
                </p>
              </li>

              <li>
                <h3 className="text-sm md:text-base font-bold text-gray-900 mb-1 flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-gray-900 rounded-full mt-2 flex-shrink-0"></span>
                  Luxury Condo & Co-op Alterations
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed pl-4">
                  Experienced in navigating strict building board approvals, elevator scheduling, and high-floor logistics.
                </p>
              </li>

              <li>
                <h3 className="text-sm md:text-base font-bold text-gray-900 mb-1 flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-gray-900 rounded-full mt-2 flex-shrink-0"></span>
                  Custom Interiors & Millwork
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed pl-4">
                  Built-in shelving, custom closets, wainscoting, and other detailed carpentry to elevate your space.
                </p>
              </li>

              <li>
                <h3 className="text-sm md:text-base font-bold text-gray-900 mb-1 flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-gray-900 rounded-full mt-2 flex-shrink-0"></span>
                  Sustainable & Smart Home Upgrades
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed pl-4">
                  Integration of energy-efficient systems, smart home technology, and eco-friendly materials.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Commercial Construction & Build-Outs */}
      <section className="w-[90%] max-w-[1760px] mx-auto mb-12 md:mb-[100px]">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">

          {/* Left Side - Content */}
          <div className="lg:w-1/2">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-6">
                Commercial Construction & Build-Outs
            </h2>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-6 md:mb-8">
            We build spaces that support your business goals, minimize downtime, and impress your clients. Compliant, efficient, and on brand.
            </p>

            <ul className="space-y-4 md:space-y-2">
              <li>
                <h3 className="text-sm md:text-base font-bold text-gray-900 mb-1 flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-gray-900 rounded-full mt-2 flex-shrink-0"></span>
                  Office & Retail Build-Outs
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed pl-4">
                Turn-key construction for new offices, showrooms, and retail stores, from raw space to grand opening
                </p>
              </li>

              <li>
                <h3 className="text-sm md:text-base font-bold text-gray-900 mb-1 flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-gray-900 rounded-full mt-2 flex-shrink-0"></span>
                  Restaurant & Hospitality
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed pl-4">
                Full-service kitchen installation, bar builds, ADA compliance, and creating immersive atmospheres.
                </p>
              </li>

              <li>
                <h3 className="text-sm md:text-base font-bold text-gray-900 mb-1 flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-gray-900 rounded-full mt-2 flex-shrink-0"></span>
                  Medical & Professional Suites
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed pl-4">
                Specialized construction meeting strict code, hygiene, and operational flow requirements.
                </p>
              </li>

              <li>
                <h3 className="text-sm md:text-base font-bold text-gray-900 mb-1 flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-gray-900 rounded-full mt-2 flex-shrink-0"></span>
                  Commercial Interiors & Tenant Improvements
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed pl-4">
                Reconfiguring existing spaces to improve workflow, aesthetics, and functionality.
                </p>
              </li>

              <li>
                <h3 className="text-sm md:text-base font-bold text-gray-900 mb-1 flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-gray-900 rounded-full mt-2 flex-shrink-0"></span>
                  Licensed & Expedited Permit Acquisition
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed pl-4">
                We handle all NYC DOB, DOT, and Landmarks filings to keep your project moving forward.
                </p>
              </li>
            </ul>
          </div>
          {/* Right Side - Image Carousel with Thumbnail Preview */}
          <div className="lg:w-1/2 relative">
            {/* Main Image */}
            <div className="rounded-[24px] md:rounded-[32px] overflow-hidden">
              <img
                src={commercialImages[commercialIndex].src}
                alt={commercialImages[commercialIndex].alt}
                className="w-full h-auto object-cover transition-opacity duration-500"
              />
            </div>
            
            {/* Thumbnail Strip - Shows All Images */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 md:bottom-8 flex items-center gap-2">
              
              {/* Nav button */}
              <button 
                onClick={prevCommercial}
                className="w-8 h-8 md:w-10 md:h-10 bg-[#E20D6E] hover:bg-pink-700 rounded-full flex items-center justify-center shadow-lg transition-colors ml-1"
                aria-label="Previous image"
              >
                <svg className="w-4 h-4 md:w-5 md:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              {/* Preview thumbnails */}
              <div className="flex gap-2">
                {commercialImages.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCommercialIndex(index)}
                    className={`rounded-[8px] md:rounded-[12px] overflow-hidden transition-all duration-300 ${
                      index === commercialIndex 
                        ? "ring-2 ring-[#E20D6E] ring-offset-2 scale-105" 
                        : "opacity-70 hover:opacity-100"
                    }`}
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-16 h-12 md:w-24 md:h-16 object-cover"
                    />
                  </button>
                ))}
              </div>
              
              {/* Nav button */}
              <button 
                onClick={nextCommercial}
                className="w-8 h-8 md:w-10 md:h-10 bg-[#E20D6E] hover:bg-pink-700 rounded-full flex items-center justify-center shadow-lg transition-colors ml-1"
                aria-label="Next image"
              >
                <svg className="w-4 h-4 md:w-5 md:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            
          </div>
        </div>
      </section>

      {/* Building Restoration & Exteriors */}
      <section className="w-[90%] max-w-[1760px] mx-auto mb-12 md:mb-[100px]">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">
          {/* Left Side - Image Carousel with Thumbnail Preview */}
          <div className="lg:w-1/2 relative">
            {/* Main Image */}
            <div className="rounded-[24px] md:rounded-[32px] overflow-hidden">
              <img
                src={restorationImages[restorationIndex].src}
                alt={restorationImages[restorationIndex].alt}
                className="w-full h-auto object-cover transition-opacity duration-500"
              />
            </div>
            
            {/* Thumbnail Strip - Shows All Images */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 md:bottom-8 flex items-center gap-2">
              
              {/* Nav button */}
              <button 
                onClick={prevRestoration}
                className="w-8 h-8 md:w-10 md:h-10 bg-[#E20D6E] hover:bg-pink-700 rounded-full flex items-center justify-center shadow-lg transition-colors ml-1"
                aria-label="Previous image"
              >
                <svg className="w-4 h-4 md:w-5 md:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              {/* Preview thumbnails */}
              <div className="flex gap-2">
                {restorationImages.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setRestorationIndex(index)}
                    className={`rounded-[8px] md:rounded-[12px] overflow-hidden transition-all duration-300 ${
                      index === restorationIndex 
                        ? "ring-2 ring-[#E20D6E] ring-offset-2 scale-105" 
                        : "opacity-70 hover:opacity-100"
                    }`}
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-16 h-12 md:w-24 md:h-16 object-cover"
                    />
                  </button>
                ))}
              </div>
              
              {/* Nav button */}
              <button 
                onClick={nextRestoration}
                className="w-8 h-8 md:w-10 md:h-10 bg-[#E20D6E] hover:bg-pink-700 rounded-full flex items-center justify-center shadow-lg transition-colors ml-1"
                aria-label="Next image"
              >
                <svg className="w-4 h-4 md:w-5 md:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            
          </div>

          {/* Right Side - Content */}
          <div className="lg:w-1/2">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-6">
            Building Restoration & Exteriors
            </h2>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-6 md:mb-8">
            Protect and enhance your property’s value and safety with our specialized exterior and structural services. Facade Inspection & Safety Program (FISP) / Local Law 11: Expert compliance, repairs, and restoration for brick, stone, and terra cotta facades.
            </p>

            <ul className="space-y-4 md:space-y-2">
              <li>
                <h3 className="text-sm md:text-base font-bold text-gray-900 mb-1 flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-gray-900 rounded-full mt-2 flex-shrink-0"></span>
                  Masonry & Pointing Repair
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed pl-4">
                Tuckpointing, brick replacement, and stone restoration to address weather damage and aging.
                </p>
              </li>

              <li>
                <h3 className="text-sm md:text-base font-bold text-gray-900 mb-1 flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-gray-900 rounded-full mt-2 flex-shrink-0"></span>
                  Roofing & Waterproofing
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed pl-4">
                Flat roof systems, slate & tile roof repair, terrace waterproofing, and leak remediation.
                </p>
              </li>

              <li>
                <h3 className="text-sm md:text-base font-bold text-gray-900 mb-1 flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-gray-900 rounded-full mt-2 flex-shrink-0"></span>
                  Window & Entryway Restoration/Replacement
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed pl-4">
                Historic window refurbishment, energy-efficient window installations, and secure entryway updates.
                </p>
              </li>

              <li>
                <h3 className="text-sm md:text-base font-bold text-gray-900 mb-1 flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-gray-900 rounded-full mt-2 flex-shrink-0"></span>
                  Structural Repairs & Steel Work
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed pl-4">
                Foundation stabilization, lintel replacement, and other critical structural interventions.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Pre-Construction & Consulting Services */}
      <section className="w-[90%] max-w-[1760px] mx-auto mb-12 md:mb-[100px]">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">

          {/* Left Side - Content */}
          <div className="lg:w-1/2">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-6">
                Pre-Construction & Consulting Services
            </h2>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-6 md:mb-8">
            Start your project on solid ground. Our pre-construction services eliminate guesswork and set the stage for success.
            </p>

            <ul className="space-y-4 md:space-y-2">
              <li>
                <h3 className="text-sm md:text-base font-bold text-gray-900 mb-1 flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-gray-900 rounded-full mt-2 flex-shrink-0"></span>
                  Feasibility Analysis & Budget Forecasting
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed pl-4">
                Realistic cost modeling and timeline assessment before you commit.
                </p>
              </li>

              <li>
                <h3 className="text-sm md:text-base font-bold text-gray-900 mb-1 flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-gray-900 rounded-full mt-2 flex-shrink-0"></span>
                  Detailed Scope & Bid Development
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed pl-4">
                Comprehensive project definitions for accurate contractor bidding and comparisons.
                </p>
              </li>

              <li>
                <h3 className="text-sm md:text-base font-bold text-gray-900 mb-1 flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-gray-900 rounded-full mt-2 flex-shrink-0"></span>
                  Design Collaboration & Constructability Review
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed pl-4">
                We work with your architect to ensure plans are buildable, efficient, and within budget.
                </p>
              </li>

              <li>
                <h3 className="text-sm md:text-base font-bold text-gray-900 mb-1 flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-gray-900 rounded-full mt-2 flex-shrink-0"></span>
                  Phasing & Logistics Planning
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed pl-4">
                Crucial for occupied buildings, we create detailed plans to minimize disruption to residents or ongoing business operations.
                </p>
              </li>

            </ul>
          </div>
          {/* Right Side - Image Carousel with Thumbnail Preview */}
          <div className="lg:w-1/2 relative">
            {/* Main Image */}
            <div className="rounded-[24px] md:rounded-[32px] overflow-hidden">
              <img
                src={consultingImages[consultingIndex].src}
                alt={consultingImages[consultingIndex].alt}
                className="w-full h-auto object-cover transition-opacity duration-500"
              />
            </div>
            
            {/* Thumbnail Strip - Shows All Images */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 md:bottom-8 flex items-center gap-2">
              
              {/* Nav button */}
              <button 
                onClick={prevConsulting}
                className="w-8 h-8 md:w-10 md:h-10 bg-[#E20D6E] hover:bg-pink-700 rounded-full flex items-center justify-center shadow-lg transition-colors ml-1"
                aria-label="Previous image"
              >
                <svg className="w-4 h-4 md:w-5 md:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              {/* Preview thumbnails */}
              <div className="flex gap-2">
                {consultingImages.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setConsultingIndex(index)}
                    className={`rounded-[8px] md:rounded-[12px] overflow-hidden transition-all duration-300 ${
                      index === consultingIndex 
                        ? "ring-2 ring-[#E20D6E] ring-offset-2 scale-105" 
                        : "opacity-70 hover:opacity-100"
                    }`}
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-16 h-12 md:w-24 md:h-16 object-cover"
                    />
                  </button>
                ))}
              </div>
              
              {/* Nav button */}
              <button 
                onClick={nextConsulting}
                className="w-8 h-8 md:w-10 md:h-10 bg-[#E20D6E] hover:bg-pink-700 rounded-full flex items-center justify-center shadow-lg transition-colors ml-1"
                aria-label="Next image"
              >
                <svg className="w-4 h-4 md:w-5 md:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            
          </div>
        </div>
      </section>

      {/* We deliver section */}
      <section className="w-[90%] max-w-[1760px] bg-[#F7F8F8] rounded-[65px] p-8 md:p-12 mx-auto lg:py-8 mb-[100px]">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
        {/* Left Side - Heading */}
        <div className="lg:w-1/4 lg:sticky lg:top-32 lg:self-start my-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            <span className="text-gray-900">We</span>
            <span className="text-[#E20D6E]">Deliver</span>
            <br />
            <span className="text-gray-900">Differently</span>

          </h2>
        </div>

        {/* Right Side - Process Steps */}
        <div className="lg:w-3/4">
          {/* Top Row - 3 cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            {processSteps.slice(0, 3).map((step, index) => (
              <div
                key={index}
                className="relative bg-white rounded-[24px] p-6 md:p-8 overflow-hidden min-h-[180px]"
              >
                {/* Large Background Number */}
                <span className="absolute top-2 right-4 text-[120px] md:text-[140px] font-bold text-gray-200/80 leading-none select-none pointer-events-none">
                  {step.number}
                </span>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Row - 2 cards centered */}
          <div className="flex flex-col md:flex-row gap-4 md:justify-center">
            {processSteps.slice(3, 5).map((step, index) => (
              <div
                key={index + 3}
                className="relative bg-white rounded-[24px] p-6 md:p-8 overflow-hidden min-h-[180px] md:w-[calc(33.333%-0.5rem)]"
              >
                {/* Large Background Number */}
                <span className="absolute top-2 right-4 text-[120px] md:text-[140px] font-bold text-gray-200/80 leading-none select-none pointer-events-none">
                  {step.number}
                </span>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* NYC Projects */}
    <section className="w-[90%] max-w-[1760px] mx-auto mb-12 md:mb-[100px]">
        <div className="bg-[#F7F8F8] rounded-[32px] p-6 md:p-12 lg:py-8 lg:px-16">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
            {/* Left Side - Text Content */}
            <div className="lg:w-2/5">
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight text-gray-900 mb-6 md:mb-8">
                Trusted Choice for NYC Projects
              </h2>
              
              <ul className="space-y-2">
                <li>
                  <h3 className="text-base font-bold text-gray-900 mb-1 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-gray-900 rounded-full"></span>
                    NYC-Centric Expertise
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed pl-4">
                    Mastery of local codes, permits, and co-op/condo board protocols.
                  </p>
                </li>
                
                <li>
                  <h3 className="text-base font-bold text-gray-900 mb-1 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-gray-900 rounded-full"></span>
                    Fixed-Price Contracts
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed pl-4">
                    Your budget is protected with detailed, upfront pricing.
                  </p>
                </li>
                
                <li>
                  <h3 className="text-base font-bold text-gray-900 mb-1 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-gray-900 rounded-full"></span>
                    Dedicated Project Management
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed pl-4">
                    A single, professional point of contact from start to finish.
                  </p>
                </li>
                
                <li>
                  <h3 className="text-base font-bold text-gray-900 mb-1 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-gray-900 rounded-full"></span>
                    Vetted Master Craftspeople
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed pl-4">
                    We work with long-term trade partners known for quality and reliability.
                  </p>
                </li>

                <li>
                  <h3 className="text-base font-bold text-gray-900 mb-1 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-gray-900 rounded-full"></span>
                    Stress-Reduced Experience
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed pl-4">
                    We handle the complexities so you can foxus on the outcome.
                  </p>
                </li>
              </ul>
            </div>

            {/* Right Side - Image Grid */}
            <div className="lg:w-3/5">
              <img src="/pictures/about/testimonial.png" alt="Testimonial" className="w-full h-full object-contain" />
            </div>
          </div>
        </div>
      </section>


    

    </div>
  )
}

export default Page
