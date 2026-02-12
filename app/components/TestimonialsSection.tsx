"use client";

import { useState } from "react";

const testimonials = [
  {
    image: "/pictures/testimonial-1.png",
    name: "The Chen Family",
    location: "Brooklyn",
    quote: "Sorora renovated our Park Slope brownstone. They managed impossible Landmarks Commission approvals, stayed on budget, and the quality is extraordinary. They are the only contractors I'll recommend in NYC.",
  },
  {
    image: "/pictures/testimonial-2.png",
    name: "Eleanor R, ",
    location: "Retail Business Owner",
    quote: "Our West Village boutique needed a complete overhaul on a tight deadline. Sorora’s team was professional, precise, and delivered a stunning space that has increased our foot traffic. Exceptional.",
  },
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="w-[90%] max-w-[1760px] mx-auto mb-[100px]">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-8 md:mb-12 gap-6">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight px-12">
          <span className="text-[#E20D6E]">Trusted</span>
          <span className="text-gray-900"> by the city</span>
          <br />
          <span className="text-gray-900">that never sleep</span>
        </h2>

        {/* Navigation Arrows */}
        <div className="flex gap-3">
          <button
            onClick={goToPrevious}
            className="w-12 h-12 bg-[#E20D6E] hover:bg-[#c40b5e] rounded-full flex items-center justify-center transition-colors"
            aria-label="Previous testimonial"
          >
            <svg
              className="w-5 h-5 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={goToNext}
            className="w-12 h-12 bg-[#E20D6E] hover:bg-[#c40b5e] rounded-full flex items-center justify-center transition-colors"
            aria-label="Next testimonial"
          >
            <svg
              className="w-5 h-5 text-white"
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
          </button>
        </div>
      </div>

      {/* Testimonial Card */}
      <div className="bg-[#F7F8F8] rounded-[65px] p-6 md:p-10">
        <div className="relative overflow-hidden">
          {/* Carousel Container */}
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="w-full flex-shrink-0 flex flex-col md:flex-row items-center gap-8 md:gap-12"
              >
                {/* Image */}
                <div className="md:w-3/5">
                  <div className="relative w-full h-[200px] md:h-[280px] lg:h-[320px] rounded-[65px] overflow-hidden">
                    <img
                      src={testimonial.image}
                      alt={`${testimonial.name} project`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Quote Content */}
                <div className="md:w-2/5 flex flex-col justify-center relative">
                  {/* Large Quote Mark */}
                  <div className="absolute top-0 right-0 text-[#E20D6E]/20 pointer-events-none">
                    <img src="/pictures/quote.svg" alt="Quote" className="w-24 h-24 md:w-32 md:h-32" />
                  </div>

                  {/* Name & Location */}
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                    {testimonial.name},
                    <br />
                    {testimonial.location}
                  </h3>

                  {/* Quote Text */}
                  <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                    {testimonial.quote}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Carousel Dots */}
      <div className="flex justify-center gap-2 mt-8">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentIndex
                ? "bg-[#E20D6E]"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
