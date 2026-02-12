"use client";

const processSteps = [
  {
    number: "1",
    title: "Consult & Discover",
    description: "We meet to understand your vision, scope, and goals. This is about listening and building a plan.",
  },
  {
    number: "2",
    title: "Design & Plan",
    description: "We collaborate with your architect or our trusted partners to finalize designs, specs, and a transparent, fixed-price proposal.",
  },
  {
    number: "3",
    title: "Permit & Prep",
    description: "Our team handles all NYC permitting and logistics, assembling the right crew and scheduling materials for a smooth start.",
  },
  {
    number: "4",
    title: "Build with Precision",
    description: "Your dedicated project manager oversees daily execution with unmatched craftsmanship, keeping you informed every step of the way.",
  },
  {
    number: "5",
    title: "Final Review & Enjoy",
    description: "We walk you through the finished space, ensure every detail is perfect, and provide all warranties and documentation.",
  },
];

export default function ProcessSection() {
  return (
    <section className="w-[90%] max-w-[1760px] bg-[#F7F8F8] rounded-[65px] p-8 md:p-12 mx-auto lg:py-8 mb-[100px]">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
        {/* Left Side - Heading */}
        <div className="lg:w-1/4 lg:sticky lg:top-32 lg:self-start my-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            <span className="text-gray-900">Our</span>
            <br />
            <span className="text-[#E20D6E]">Process</span>
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
  );
}
