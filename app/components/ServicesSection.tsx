"use client";

import { useState } from "react";
import Link from "next/link";

const services = [
  {
    number: "01",
    title: "Residential Renovations",
    description: "Full-scale apartment overhauls, kitchen & bathroom remodels, brownstone restoration, and custom luxury interiors. Make your NYC home a reflection of you.",
    image: "/pictures/hero-1.png",
  },
  {
    number: "02",
    title: "Commercial Build-Outs",
    description: "Efficient, code-compliant spaces for retail, offices, restaurants, and healthcare. We minimize downtime and build for your business's success.",
    image: "/pictures/hero-2.png",
  },
  {
    number: "03",
    title: "Building Restoration & Facades",
    description: "Specialized work for NYC exteriors, masonry, roofing, and landmarked properties, ensuring safety, compliance, and aesthetic integrity.",
    image: "/pictures/hero-3.png",
  },
  {
    number: "04",
    title: "Space Planning & Pre-Construction",
    description: "Not sure where to start? Our in-house team helps visualize your project, plan feasibility, and establish a realistic budget before the first hammer swings.",
    image: "/pictures/hero-4.png",
  },
];

export default function ServicesSection() {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <section className="w-[90%] max-w-[1760px] bg-[#F7F8F8] rounded-[65px] p-8 md:p-12 mx-auto lg:py-8 mb-[100px]">
      {/* Section Header */}
      <div className="flex items-center gap-4 mb-8 md:mb-12">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
          Services
        </h2>
        <Link
          href="/services"
          className="w-10 h-10 bg-[#E20D6E] hover:bg-[#E20D6E] rounded-full flex items-center justify-center transition-colors group"
          aria-label="View all services"
        >
          <svg
            className="w-5 h-5 text-white transform group-hover:translate-x-0.5 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </Link>
      </div>

      {/* Services Cards - Desktop */}
      <div className="hidden lg:flex gap-4 h-[320px]">
        {services.map((service, index) => {
          const isActive = activeIndex === index;

          return (
            <div
              key={index}
              className={`relative rounded-[24px] p-6 cursor-pointer overflow-hidden ${
                isActive
                  ? "bg-[#E20D6E] flex-[2]"
                  : "bg-white flex-1 hover:shadow-lg"
              }`}
              style={{
                transition: "all 700ms cubic-bezier(0.4, 0, 0.2, 1)",
              }}
              onMouseEnter={() => setActiveIndex(index)}
            >
              {isActive ? (
                /* Active Card - Content Left, Image Right */
                <div 
                  className="flex h-full gap-4"
                  style={{
                    animation: "fadeIn 500ms cubic-bezier(0.4, 0, 0.2, 1)",
                  }}
                >
                  {/* Content */}
                  <div className="flex flex-col justify-between w-1/2 pr-2">
                    <div>
                      <span 
                        className="text-4xl font-bold text-white/90 block mb-2"
                        style={{
                          transition: "all 400ms cubic-bezier(0.4, 0, 0.2, 1)",
                        }}
                      >
                        {service.number}
                      </span>
                      <h3 
                        className="text-xl font-bold text-white mb-3"
                        style={{
                          transition: "all 400ms cubic-bezier(0.4, 0, 0.2, 1) 50ms",
                        }}
                      >
                        {service.title}
                      </h3>
                    </div>
                    <p 
                      className="text-sm leading-relaxed text-white/90"
                      style={{
                        transition: "all 400ms cubic-bezier(0.4, 0, 0.2, 1) 100ms",
                      }}
                    >
                      {service.description}
                    </p>
                  </div>

                  {/* Image */}
                  <div 
                    className="w-1/2 h-full rounded-[16px] overflow-hidden"
                    style={{
                      animation: "slideInRight 600ms cubic-bezier(0.4, 0, 0.2, 1)",
                    }}
                  >
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                  </div>
                </div>
              ) : (
                /* Inactive Card - Content Only */
                <div className="flex flex-col h-full">
                  <span 
                    className="text-4xl font-bold text-[#E20D6E] block mb-3"
                    style={{
                      transition: "all 400ms cubic-bezier(0.4, 0, 0.2, 1)",
                    }}
                  >
                    {service.number}
                  </span>
                  <h3 
                    className="text-lg font-bold text-gray-900 mb-3"
                    style={{
                      transition: "all 400ms cubic-bezier(0.4, 0, 0.2, 1)",
                    }}
                  >
                    {service.title}
                  </h3>
                  <p 
                    className="text-sm leading-relaxed text-gray-600"
                    style={{
                      transition: "all 400ms cubic-bezier(0.4, 0, 0.2, 1)",
                    }}
                  >
                    {service.description}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Services Cards - Mobile/Tablet */}
      <div className="flex flex-col gap-4 lg:hidden">
        {services.map((service, index) => {
          const isActive = activeIndex === index;

          return (
            <div
              key={index}
              className={`relative rounded-[24px] p-6 cursor-pointer overflow-hidden ${
                isActive ? "bg-[#E20D6E]" : "bg-white"
              }`}
              style={{
                transition: "all 600ms cubic-bezier(0.4, 0, 0.2, 1)",
              }}
              onClick={() => setActiveIndex(index)}
            >
              {isActive ? (
                /* Active Card - Content Top, Image Bottom */
                <div 
                  className="flex flex-col gap-4"
                  style={{
                    animation: "fadeIn 400ms cubic-bezier(0.4, 0, 0.2, 1)",
                  }}
                >
                  {/* Content */}
                  <div>
                    <span 
                      className="text-3xl font-bold text-white/90 block mb-2"
                      style={{
                        transition: "all 300ms cubic-bezier(0.4, 0, 0.2, 1)",
                      }}
                    >
                      {service.number}
                    </span>
                    <h3 
                      className="text-xl font-bold text-white mb-2"
                      style={{
                        transition: "all 300ms cubic-bezier(0.4, 0, 0.2, 1) 50ms",
                      }}
                    >
                      {service.title}
                    </h3>
                    <p 
                      className="text-sm leading-relaxed text-white/90"
                      style={{
                        transition: "all 300ms cubic-bezier(0.4, 0, 0.2, 1) 100ms",
                      }}
                    >
                      {service.description}
                    </p>
                  </div>

                  {/* Image */}
                  <div 
                    className="w-full h-[200px] rounded-[16px] overflow-hidden"
                    style={{
                      animation: "slideUp 500ms cubic-bezier(0.4, 0, 0.2, 1)",
                    }}
                  >
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              ) : (
                /* Inactive Card - Content Only */
                <div className="flex flex-col">
                  <span 
                    className="text-3xl font-bold text-[#E20D6E] block mb-2"
                    style={{
                      transition: "all 300ms cubic-bezier(0.4, 0, 0.2, 1)",
                    }}
                  >
                    {service.number}
                  </span>
                  <h3 
                    className="text-lg font-bold text-gray-900 mb-2"
                    style={{
                      transition: "all 300ms cubic-bezier(0.4, 0, 0.2, 1)",
                    }}
                  >
                    {service.title}
                  </h3>
                  <p 
                    className="text-sm leading-relaxed text-gray-600"
                    style={{
                      transition: "all 300ms cubic-bezier(0.4, 0, 0.2, 1)",
                    }}
                  >
                    {service.description}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
