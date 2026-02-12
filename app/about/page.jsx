import React from 'react';
import Link from "next/link";


const page = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="w-[90%] max-w-[1760px] mx-auto mb-12 md:mb-[100px] mt-6 md:mt-10">
        <div className="bg-[#F7F8F8] rounded-[32px] md:rounded-[65px] p-6 md:p-12 lg:px-16 lg:py-20">
          <div className="lg:w-full text-center">
            <p className="text-base md:text-3xl font-bold underline text-gray-900 mb-4 md:mb-8">
              About Us
            </p>
            <h1 className="px-0 md:px-12 lg:px-48 text-3xl md:text-5xl lg:text-7xl font-bold leading-tight text-gray-900">
              Building New York's Future, with Integrity
            </h1>
          </div>
        </div>
      </section>

      {/* Building Partners Section */}
      <section className="w-[90%] max-w-[1760px] mx-auto mb-12 md:mb-[100px] px-0 md:px-10">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">
          {/* Left Side - Text Content */}
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-gray-900 mb-6 md:mb-8">
              We're Your Building<br />Partners.
            </h2>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-6">
              In a city that never stops evolving, building and renovation require more than skill—              they demand partnership, foresight, and an unwavering commitment to excellence.
              Sorora was founded on a simple belief: the construction process in New York City
              should be transparent, predictable, and even enjoyable.
            </p>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
              We are a team of licensed general contractors, master craftsmen, and project
              managers united by a shared ethos. We bridge the gap between visionary
              architects, discerning clients, and the complex reality of NYC building codes. Sorora
              isn't just about constructing spaces; it's about building trust, one project at a time.
            </p>
          </div>

          {/* Right Side - Image with Blue Frame */}
          <div className="lg:w-1/2 relative">
            
            {/* Image */}
            <div className="relative rounded-[24px] md:rounded-[32px] overflow-hidden">
              <img
                src="/pictures/about/img1.png"
                alt="Modern luxury home"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="w-[90%] max-w-[1760px] mx-auto mb-12 md:mb-[100px]">
        <div className="bg-[#F7F8F8] rounded-[32px] md:rounded-[65px] p-6 md:p-12 lg:p-16">
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-16">
            {/* Left Side - Heading */}
            <div className="lg:w-1/4">
              <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                <span className="text-gray-900">Our</span><br />
                <span className="text-[#E20D6E]">Story</span>
              </h2>
            </div>

            {/* Right Side - Text Content */}
            <div className="lg:w-3/4">
              <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-6">
                Sorora's roots are deeply embedded in the diverse fabric of New York City. Our founders combined decades of experience in high-end residential remodeling and large-scale commercial build-outs. They saw a common thread in the industry: homeowners and business owners felt overwhelmed, kept in the dark, and frustrated by delays and ballooning budgets. In response, Sorora was born—a general contracting firm built on the principles of clarity, communication, and craftsmanship.
              </p>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                A collaborative, familial approach to what is often an adversarial process. We are in your corner, advocating for your project as if it were our own.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Core Principles Section */}
      <section className="w-[90%] max-w-[1760px] mx-auto mb-12 md:mb-[100px] px-0 md:px-10">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-16">
          {/* Left Side - Heading */}
          <div className="lg:w-1/5 lg:flex lg:items-center">
            <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-2 lg:mb-0">
              <span className="text-gray-900">Our Core</span><br />
              <span className="text-[#E20D6E]">Principles</span>
            </h2>
          </div>

          {/* Right Side - Principles Cards */}
          <div className="lg:w-4/5">
            {/* Top Row - 3 Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              {/* Card 1 */}
              <div className="bg-[#F7F8F8] rounded-[20px] md:rounded-[24px] p-5 md:p-6 relative overflow-hidden">
                <span className="absolute top-2 right-2 md:top-4 md:right-4 text-[100px] md:text-[160px] font-bold text-[#E20D6E]/5 leading-none select-none">1</span>
                <div className="relative z-10">
                  <h3 className="text-base md:text-lg font-bold text-gray-900 mb-2 md:mb-3">NYC Expertise is Non-Negotiable</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    We don't just work in New York; we understand its unique ecosystem. Our team's deep knowledge of the Department of Buildings (DOB), Landmarks Preservation Commission, Co-op/Condo board requirements, and building management protocols is baked into our planning. We navigate the red tape so you can focus on the vision.
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-[#F7F8F8] rounded-[20px] md:rounded-[24px] p-5 md:p-6 relative overflow-hidden">
                <span className="absolute top-2 right-2 md:top-4 md:right-4 text-[100px] md:text-[160px] font-bold text-[#E20D6E]/5 leading-none select-none">2</span>
                <div className="relative z-10">
                  <h3 className="text-base md:text-lg font-bold text-gray-900 mb-2 md:mb-3">The Power of a Fixed-Price Promise</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Surprises have no place in your project. We invest extraordinary effort in our pre-construction phase, providing detailed, line-item proposals. When we give you a price, we stand by it. Your budget is a cornerstone, not a moving target.
                  </p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-[#F7F8F8] rounded-[20px] md:rounded-[24px] p-5 md:p-6 relative overflow-hidden">
                <span className="absolute top-2 right-2 md:top-4 md:right-4 text-[100px] md:text-[160px] font-bold text-[#E20D6E]/5 leading-none select-none">3</span>
                <div className="relative z-10">
                  <h3 className="text-base md:text-lg font-bold text-gray-900 mb-2 md:mb-3">Your Dedicated Concierge</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Forget calling multiple foremen or trades. From day one, you are assigned a dedicated Project Manager who becomes your single point of contact. They are your advocate, communicator, and problem-solver, providing daily updates and ensuring seamless execution.
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Row - 2 Cards Centered */}
            <div className="flex flex-col md:flex-row gap-4 md:justify-center">
              {/* Card 4 */}
              <div className="bg-[#F7F8F8] rounded-[20px] md:rounded-[24px] p-5 md:p-6 relative overflow-hidden md:w-[calc(33.333%-0.5rem)]">
                <span className="absolute top-2 right-2 md:top-4 md:right-4 text-[100px] md:text-[160px] font-bold text-[#E20D6E]/5 leading-none select-none">4</span>
                <div className="relative z-10">
                  <h3 className="text-base md:text-lg font-bold text-gray-900 mb-2 md:mb-3">Craftsmen, Not Just Laborers</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    We partner with and employ the finest tradespeople in the tri-state area—electricians, plumbers, carpenters, and finishers who take pride in their work. We believe the beauty is in the details, and our finished projects speak to a standard of quality that is unmistakable.
                  </p>
                </div>
              </div>

              {/* Card 5 */}
              <div className="bg-[#F7F8F8] rounded-[20px] md:rounded-[24px] p-5 md:p-6 relative overflow-hidden md:w-[calc(33.333%-0.5rem)]">
                <span className="absolute top-2 right-2 md:top-4 md:right-4 text-[100px] md:text-[160px] font-bold text-[#E20D6E]/5 leading-none select-none">5</span>
                <div className="relative z-10">
                  <h3 className="text-base md:text-lg font-bold text-gray-900 mb-2 md:mb-3">A Collaborative Mindset</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    We see ourselves as an extension of your team. We listen intently, communicate proactively, and respect the collaborative triangle between client, architect, and builder. Our goal is to bring your vision to life, not just to follow a set of plans.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Credentials & Community Section */}
      <section className="w-[90%] max-w-[1760px] mx-auto mb-12 md:mb-[100px]">
        <div className="bg-[#F7F8F8] rounded-[32px] p-6 md:p-12 lg:py-8 lg:px-16">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
            {/* Left Side - Text Content */}
            <div className="lg:w-2/5">
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight text-gray-900 mb-6 md:mb-8">
                Our Credentials &<br />Community
              </h2>
              
              <ul className="space-y-2">
                <li>
                  <h3 className="text-base font-bold text-gray-900 mb-1 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-gray-900 rounded-full"></span>
                    Fully Licensed & Insured
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed pl-4">
                    We carry comprehensive general liability, workers' compensation, and umbrella policies for your absolute protection.
                  </p>
                </li>
                
                <li>
                  <h3 className="text-base font-bold text-gray-900 mb-1 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-gray-900 rounded-full"></span>
                    Safety First
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed pl-4">
                    Our sites adhere to the highest OSHA standards and NYC Site Safety Protocols.
                  </p>
                </li>
                
                <li>
                  <h3 className="text-base font-bold text-gray-900 mb-1 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-gray-900 rounded-full"></span>
                    Sustainable Building Practices
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed pl-4">
                    We are committed to reducing waste, sourcing sustainable materials where possible, and implementing energy-efficient solutions for a greener New York.
                  </p>
                </li>
                
                <li>
                  <h3 className="text-base font-bold text-gray-900 mb-1 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-gray-900 rounded-full"></span>
                    Giving Back
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed pl-4">
                    We are proud to contribute time and resources to local NYC initiatives, including (e.g., Habitat for Humanity NYC, building community gardens, etc.). Our city has given us so much; we are dedicated to building it up in return.
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

export default page
