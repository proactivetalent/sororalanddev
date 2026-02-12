import React from 'react'

const Page = () => {
  return (
    <div className="pt-10 md:pt-20">
      {/* Hero Section */}
      <section className="w-[90%] max-w-[1760px] mx-auto mb-12 md:mb-[100px]">
        <div className="bg-[#F7F8F8] rounded-[24px] md:rounded-[65px] py-12 md:py-20 px-6 md:px-12 text-center">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 md:mb-6">
            Terms & Conditions
          </h1>
          <p className="text-sm md:text-base lg:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            These Terms of Service ("Terms") govern your engagement with Sorora General Contracting LLC ("Company," "we," "us," or "our"), a licensed general contracting firm operating from New York, NY, USA. By accessing our website or utilizing our services, you expressly agree to be bound by these legally binding terms.
          </p>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="w-[90%] max-w-[1760px] mx-auto mb-12 md:mb-[100px]">
        <div className="bg-[#F7F8F8] rounded-[24px] md:rounded-[65px] py-12 md:py-16 px-6 md:px-12 text-center">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
            Services Overview
          </h2>
          <p className="text-sm md:text-base text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8 md:mb-10">
            We provide licensed general contracting and construction management services to residential and commercial clients throughout New York City and surrounding areas, including but not limited to:
          </p>

          {/* Service Tags */}
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-8 md:mb-10 max-w-4xl mx-auto">
            <div className="bg-white font-bold rounded-lg px-4 md:px-6 py-3 md:py-4 text-sm md:text-base text-gray-700 shadow-sm">
              Residential renovations<br />and remodels
            </div>
            <div className="bg-white font-bold rounded-lg px-4 md:px-6 py-3 md:py-4 text-sm md:text-base text-gray-700 shadow-sm">
              Commercial build-outs and<br />tenant improvements
            </div>
            <div className="bg-white font-bold rounded-lg px-4 md:px-6 py-3 md:py-4 text-sm md:text-base text-gray-700 shadow-sm">
              Building restoration and<br />facade work
            </div>
            <div className="bg-white font-bold rounded-lg px-4 md:px-6 py-3 md:py-4 text-sm md:text-base text-gray-700 shadow-sm">
              Pre-construction consulting<br />and project planning
            </div>
            <div className="bg-white font-bold rounded-lg px-4 md:px-6 py-3 md:py-4 text-sm md:text-base text-gray-700 shadow-sm">
              Historic preservation and<br />landmark compliance work
            </div>
          </div>

          {/* Disclaimer */}
          <p className="text-xs md:text-sm text-gray-500 max-w-3xl mx-auto leading-relaxed">
            Service scope, pricing, and availability are subject to change. All work complies with applicable NYC Building Codes, Department of Buildings (DOB) regulations, and industry standards.
          </p>
        </div>
      </section>

      {/* Website Use Conditions Section */}
      <section className="w-[90%] max-w-[1760px] mx-auto mb-12 md:mb-[100px] px-0 md:px-10">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">
          {/* Left Image */}
          <div className="w-full lg:w-1/2">
            <img 
              src="/pictures/terms/terms.png" 
              alt="Website use conditions" 
              className="w-full h-auto rounded-[24px] md:rounded-[32px] object-cover"
            />
          </div>

          {/* Right Content */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
              Website Use Conditions
            </h2>
            
            <p className="text-sm md:text-base text-gray-600 mb-2">
              You agree to:
            </p>
            
            <ul className="">
              <li className="flex items-start gap-2 text-sm md:text-base text-gray-600">
                <span className="w-1.5 h-1.5 bg-gray-900 rounded-full mt-2 flex-shrink-0"></span>
                Use this site solely for legitimate service inquiries and information gathering
              </li>
              <li className="flex items-start gap-2 text-sm md:text-base text-gray-600">
                <span className="w-1.5 h-1.5 bg-gray-900 rounded-full mt-2 flex-shrink-0"></span>
                Refrain from reverse engineering, scraping, data mining, or disrupting site functionality
              </li>
              <li className="flex items-start gap-2 text-sm md:text-base text-gray-600">
                <span className="w-1.5 h-1.5 bg-gray-900 rounded-full mt-2 flex-shrink-0"></span>
                Respect our intellectual property rights (all content © Sorora General Contracting LLC 2025)
              </li>
              <li className="flex items-start gap-2 text-sm md:text-base text-gray-600">
                <span className="w-1.5 h-1.5 bg-gray-900 rounded-full mt-2 flex-shrink-0"></span>
                Not use site content for unauthorized commercial purposes
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Proposals & Pricing Structure Section */}
      <section className="w-[90%] max-w-[1760px] mx-auto mb-12 md:mb-[100px]">
        <div className="bg-[#F7F8F8] rounded-[24px] md:rounded-[65px] p-6 md:p-10 flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">
          {/* Left Content - Icon and Title */}
          <div className="w-full lg:w-2/5 flex items-center gap-4">
            {/* Icon Placeholder */}
            <div className="w-12 h-12 md:w-16 md:h-16 flex-shrink-0">
              <img src="/pictures/icons/proposal.svg" alt="Proposals icon" className="w-full h-full object-contain" />
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
              Proposals &<span className="hidden md:inline"><br /></span><span className="md:hidden"> </span>Pricing Structure
            </h2>
          </div>

          {/* Right Content */}
          <div className="w-full lg:w-3/5 space-y-4">
            <p className="text-sm md:text-base text-gray-600">
              <span className="font-semibold text-gray-900">Preliminary Estimates:</span> Initial budgetary estimates are non-binding and valid for 30 days from issue date.
            </p>
            
            <div>
              <p className="text-sm md:text-base text-gray-600 mb-2">
                <span className="font-semibold text-gray-900">Final Pricing:</span> Determined after thorough site evaluation, plan review, and may vary due to:
              </p>
              <ul className="space-y-1 ml-4">
                <li className="flex items-start gap-2 text-sm md:text-base text-gray-600">
                  <span className="w-1.5 h-1.5 bg-gray-900 rounded-full mt-2 flex-shrink-0"></span>
                  Unforeseen structural or site conditions discovered during work
                </li>
                <li className="flex items-start gap-2 text-sm md:text-base text-gray-600">
                  <span className="w-1.5 h-1.5 bg-gray-900 rounded-full mt-2 flex-shrink-0"></span>
                  Code compliance or Department of Buildings requirements
                </li>
                <li className="flex items-start gap-2 text-sm md:text-base text-gray-600">
                  <span className="w-1.5 h-1.5 bg-gray-900 rounded-full mt-2 flex-shrink-0"></span>
                  Changes in material costs or availability
                </li>
                <li className="flex items-start gap-2 text-sm md:text-base text-gray-600">
                  <span className="w-1.5 h-1.5 bg-gray-900 rounded-full mt-2 flex-shrink-0"></span>
                  Client-requested modifications to scope or specifications
                </li>
              </ul>
            </div>
            
            <p className="text-sm md:text-base text-gray-600">
              <span className="font-semibold text-gray-900">Change Orders:</span> Any modification to the agreed-upon scope, schedule, or budget requires a written Change Order signed by both parties before work proceeds.
            </p>
          </div>
        </div>
      </section>

      {/* Policy Grid Section */}
      <section className="w-[90%] max-w-[1760px] mx-auto mb-12 md:mb-[100px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* Card 1 - Governing Law & Dispute Resolution */}
          <div className="bg-[#F7F8F8] rounded-[24px] md:rounded-[65px] p-6 md:p-10">
            <div className="flex items-start gap-3 mb-4">
              {/* Icon Placeholder */}
              <div className="w-10 h-10 md:w-12 md:h-12 flex-shrink-0">
                <img src="/pictures/icons/law.svg" alt="Governing law icon" className="w-full h-full object-contain" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                Governing Law & Dispute<span className="hidden md:inline"><br /></span><span className="md:hidden"> </span>Resolution
              </h3>
            </div>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
              These Terms are governed by the laws of the State of New York. Any disputes shall first be addressed through good-faith negotiation. If unresolved, disputes shall be submitted to binding arbitration in New York County, NY, in accordance with the American Arbitration Association's Construction Industry Rules.
            </p>
          </div>

          {/* Card 2 - Scheduling & Site Access Policy */}
          <div className="bg-[#F7F8F8] rounded-[24px] md:rounded-[65px] p-6 md:p-10">
            <div className="flex items-start gap-3 mb-4">
              {/* Icon Placeholder */}
              <div className="w-10 h-10 md:w-12 md:h-12 flex-shrink-0">
                <img src="/pictures/icons/policy.svg" alt="Scheduling icon" className="w-full h-full object-contain" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                Scheduling & Site<span className="hidden md:inline"><br /></span><span className="md:hidden"> </span>Access Policy
              </h3>
            </div>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
              <span className="italic">Scheduling:</span> Consultations and site visits are available via our website contact form, email at hello@sororanyc.com, or phone at (212) 555-1000 during business hours (Monday–Friday, 8:00 AM—6:00 PM ET).
            </p>
          </div>

          {/* Card 3 - Third-Party Resources */}
          <div className="bg-[#F7F8F8] rounded-[24px] md:rounded-[65px] p-6 md:p-10">
            <div className="flex items-start gap-3 mb-4">
              {/* Icon Placeholder */}
              <div className="w-10 h-10 md:w-12 md:h-12 flex-shrink-0">
                <img src="/pictures/icons/services.svg" alt="Third party resources icon" className="w-full h-full object-contain" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                Third-Party Resources
              </h3>
            </div>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
              We implement reasonable and industry-standard measures—including encryption, access controls, and secure servers—to protect your personal information against unauthorized access, alteration, or disclosure. Please note that no method of digital transmission or storage is 100% secure, and we cannot guarantee absolute security.
            </p>
          </div>

          {/* Card 4 - Policy Updates */}
          <div className="bg-[#F7F8F8] rounded-[24px] md:rounded-[65px] p-6 md:p-10">
            <div className="flex items-start gap-3 mb-4">
              {/* Icon Placeholder */}
              <div className="w-10 h-10 md:w-12 md:h-12 flex-shrink-0">
                <img src="/pictures/icons/updates1.svg" alt="Policy updates icon" className="w-full h-full object-contain" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                Policy Updates
              </h3>
            </div>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
              We reserve the right to modify these Terms. Continued use of our services or website after 30 days of posting revised Terms constitutes acceptance. Material changes affecting active clients will be communicated directly.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Page
