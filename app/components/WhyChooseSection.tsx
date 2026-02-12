"use client";

const features = [
  {
    icon: (
      <img src="/pictures/icons/time.png" alt="On Time, On Budget. Guaranteed" className="w-full h-full object-contain"/>
    ),
    title: "On Time, On Budget. Guaranteed",
    description: "We provide detailed, fixed-price proposals and realistic timelines. No hidden costs, no nasty surprises—just clear, professional project management from start to finish.",
  },
  {
    icon: (
      <img src="/pictures/icons/vision.png" alt="Your Vision, Our Execution" className="w-full h-full object-contain" />
    ),
    title: "Your Vision, Our Execution",
    description: "We listen first. Our collaborative approach ensures your style, functional needs, and budget are reflected in every tile laid, every wall built, and every finish chosen.",
  },
  {
    icon: (
      <img src="/pictures/icons/partnership.png" alt="Stress-Reduced Partnership" className="w-full h-full object-contain" />
    ),
    title: "Stress-Reduced Partnership",
    description: "You get a dedicated project manager as your single point of contact. Daily updates, premium materials, and a meticulous crew mean you can relax, knowing the job is in expert hands.",
  },
  {
    icon: (
      <img src="/pictures/icons/license.png" alt="Licensed, Insured & NYC-Savvy" className="w-full h-full object-contain" />
    ),
    title: "Licensed, Insured & NYC-Savvy",
    description: "We know the DOB, Landmarks, and Co-op Board requirements inside and out. We secure permits and navigate regulations so you don't have to.",
  },
];

export default function WhyChooseSection() {
  return (
    <section className="w-[80%] max-w-[1590px] mx-auto mb-[100px]">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
        {/* Left Side - Heading */}
        <div className="lg:w-2/5 my-auto">
          <h2 className="text-4xl md:text-5xl lg:text-5xl font-bold leading-tight text-gray-900 mb-6">
            NYC Property Owners & Businesses Choose Sorora
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed">
            Navigating permits, timelines, and countless details in NYC is a full-time job. Sorora is your partner, handling everything with the expertise the city demands.
          </p>
        </div>

        {/* Right Side - Feature Cards */}
        <div className="lg:w-3/5 grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-[#F7F8F8] rounded-[24px] p-6 md:p-8"
            >
              <div className="flex flex-row gap-2">
              {/* Icon */}
              <div className="w-12 h-12 flex-shrink-0 mb-4">
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 leading-tight">
                {feature.title}
              </h3>
              </div>
              {/* Description */}
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
