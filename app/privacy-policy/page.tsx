import React from 'react'

const Page = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="w-[90%] max-w-[1760px] mx-auto mb-12 md:mb-[100px] mt-10 md:mt-20">
        <div className="bg-[#F7F8F8] rounded-[32px] md:rounded-[65px] p-8 md:p-12 lg:px-16 lg:py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 mb-6 md:mb-8">
              Privacy Policy
            </h1>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
              This Privacy Policy is issued by Sorora General Contracting LLC ("we," "us," or "our"), a licensed general contracting firm operating in New York, NY, USA. This document outlines our practices regarding the collection, use, and protection of your personal information when you engage with our services, website, or communications.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="w-[90%] max-w-[1760px] mx-auto mb-12 md:mb-[100px] px-10">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">
          {/* Left Side - Text Content */}
          <div className="lg:w-1/2">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-6">
              Introduction
            </h2>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
              Sorora respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your data when you visit our website{' '}
              <a 
                href="https://www.sororanyc.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-900 underline hover:text-[#E20D6E] transition-colors"
              >
                https://www.sororanyc.com/
              </a>
              {' '}(or related subdomains), contact us for services, or become a client. By using our services or website, you consent to the practices described herein.
            </p>
          </div>

          {/* Right Side - Image */}
          <div className="lg:w-1/2">
            <div className="rounded-[24px] md:rounded-[32px] overflow-hidden">
              <img
                src="/pictures/privacy-policy/intro.png"
                alt="Business handshake"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Information We Collect Section */}
      <section className="w-[90%] max-w-[1760px] mx-auto mb-12 md:mb-[100px]">
        <div className="bg-[#F7F8F8] rounded-[32px] md:rounded-[65px] p-6 md:p-12 lg:p-16">
          {/* Section Header */}
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
              Information We Collect
            </h2>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed max-w-3xl mx-auto">
              We collect information that identifies, relates to, or could reasonably be linked to you:<br />
              Personal Information:
            </p>
          </div>

          {/* Cards Grid */}
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Left Card - Personal Information */}
            <div className="lg:w-1/2 bg-white rounded-[24px] p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">
                Personal<br />Information
              </h3>
              
              <ul className="space-y-4">
                <li>
                  <h4 className="text-sm md:text-base font-bold text-gray-900 mb-1 flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-gray-900 rounded-full mt-2 flex-shrink-0"></span>
                    Identifiers
                  </h4>
                  <p className="text-sm text-gray-600 leading-relaxed pl-4">
                    Name, email address, phone number, residential or commercial property address.
                  </p>
                </li>
                
                <li>
                  <h4 className="text-sm md:text-base font-bold text-gray-900 mb-1 flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-gray-900 rounded-full mt-2 flex-shrink-0"></span>
                    Project Details
                  </h4>
                  <p className="text-sm text-gray-600 leading-relaxed pl-4">
                    Project scope, architectural plans, specifications, photos or videos of existing spaces (if provided for consultations or proposals).
                  </p>
                </li>
                
                <li>
                  <h4 className="text-sm md:text-base font-bold text-gray-900 mb-1 flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-gray-900 rounded-full mt-2 flex-shrink-0"></span>
                    Financial Information
                  </h4>
                  <p className="text-sm text-gray-600 leading-relaxed pl-4">
                    Billing address and transaction history (processed securely via third-party payment gateways).
                  </p>
                </li>
              </ul>
            </div>

            {/* Right Column - Two Stacked Cards */}
            <div className="lg:w-1/2 flex flex-col gap-6">
              {/* Sources of Information Card */}
              <div className="bg-white rounded-[24px] p-6 md:p-8 flex-1">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                  Sources of Information
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="w-1.5 h-1.5 bg-gray-900 rounded-full mt-1.5 flex-shrink-0"></span>
                    Contact forms, service inquiry submissions, and newsletter sign-ups on our website.
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="w-1.5 h-1.5 bg-gray-900 rounded-full mt-1.5 flex-shrink-0"></span>
                    Signed service agreements, proposals, or change orders.
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="w-1.5 h-1.5 bg-gray-900 rounded-full mt-1.5 flex-shrink-0"></span>
                    Phone, email, or in-person consultations.
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="w-1.5 h-1.5 bg-gray-900 rounded-full mt-1.5 flex-shrink-0"></span>
                    Project management and communication platforms used during active projects.
                  </li>
                </ul>
              </div>

              {/* Usage Data Card */}
              <div className="bg-white rounded-[24px] p-6 md:p-8 flex-1">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                  Usage Data
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="w-1.5 h-1.5 bg-gray-900 rounded-full mt-1.5 flex-shrink-0"></span>
                    IP address, browser type, device information, pages visited, and interaction patterns collected via cookies and similar technologies (see Section 4).
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Use Your Information Section */}
      <section className="w-[90%] max-w-[1760px] mx-auto mb-12 md:mb-[100px] px-10">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">
          {/* Left Side - Image */}
          <div className="lg:w-1/2">
            <div className="rounded-[24px] md:rounded-[32px] overflow-hidden">
              <img
                src="/pictures/privacy-policy/info.png"
                alt="Digital checklist"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Right Side - Text Content */}
          <div className="lg:w-1/2">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-6">
              How We Use Your<br />Information
            </h2>
            <p className="text-sm md:text-base text-gray-900 font-medium mb-4">
              Your information is used to:
            </p>
            
            <ul className="space-y-2 mb-6">
              <li className="flex items-start gap-2 text-sm md:text-base text-gray-600">
                <span className="w-1.5 h-1.5 bg-gray-900 rounded-full mt-2 flex-shrink-0"></span>
                Provide general contracting services, project consultations, and detailed proposals.
              </li>
              <li className="flex items-start gap-2 text-sm md:text-base text-gray-600">
                <span className="w-1.5 h-1.5 bg-gray-900 rounded-full mt-2 flex-shrink-0"></span>
                Schedule inspections, manage subcontractors, and coordinate project timelines.
              </li>
              <li className="flex items-start gap-2 text-sm md:text-base text-gray-600">
                <span className="w-1.5 h-1.5 bg-gray-900 rounded-full mt-2 flex-shrink-0"></span>
                Process payments and maintain project records for warranty and service purposes.
              </li>
              <li className="flex items-start gap-2 text-sm md:text-base text-gray-600">
                <span className="w-1.5 h-1.5 bg-gray-900 rounded-full mt-2 flex-shrink-0"></span>
                Improve website functionality, user experience, and content relevance.
              </li>
              <li className="flex items-start gap-2 text-sm md:text-base text-gray-600">
                <span className="w-1.5 h-1.5 bg-gray-900 rounded-full mt-2 flex-shrink-0"></span>
                Communicate project updates, safety notices, or company news (with your consent where required).
              </li>
              <li className="flex items-start gap-2 text-sm md:text-base text-gray-600">
                <span className="w-1.5 h-1.5 bg-gray-900 rounded-full mt-2 flex-shrink-0"></span>
                Comply with New York City and State building codes, regulations, and legal obligations.
              </li>
            </ul>

            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
              We do not sell, trade, or rent your personal information to third parties for marketing purposes.
            </p>
          </div>
        </div>
      </section>

      {/* Policy Details Grid Section */}
      <section className="w-[90%] max-w-[1760px] mx-auto mb-12 md:mb-[100px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {/* Card 1 - Cookies & Tracking Technologies */}
          <div className="bg-[#F7F8F8] rounded-[24px] md:rounded-[65px] p-6 md:p-8">
            <div className="flex items-center gap-3 mb-4">
              {/* Icon Placeholder */}
              <div className="w-10 h-10 md:w-12 md:h-12">
                <img src="/pictures/icons/cookies.svg" alt="Cookies icon" className="w-full h-full object-contain" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                Cookies & Tracking<br />Technologies
              </h3>
            </div>
            
            <p className="text-sm md:text-base text-gray-600 mb-4">
              We use cookies and similar tracking technologies to:
            </p>
            
            <ul className="space-y-2 mb-4">
              <li className="flex items-start gap-2 text-sm text-gray-600">
                <span className="w-1.5 h-1.5 bg-gray-900 rounded-full mt-1.5 flex-shrink-0"></span>
                Analyze website traffic and popular service pages.
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-600">
                <span className="w-1.5 h-1.5 bg-gray-900 rounded-full mt-1.5 flex-shrink-0"></span>
                Remember user preferences (e.g., location for service area verification).
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-600">
                <span className="w-1.5 h-1.5 bg-gray-900 rounded-full mt-1.5 flex-shrink-0"></span>
                Enhance site security, performance, and functionality.
              </li>
            </ul>
            
            <p className="text-sm text-gray-600">
              You may disable cookies through your browser settings, but please note that some features of our website may not function properly as a result.
            </p>
          </div>

          {/* Card 2 - Third-Party Services */}
          <div className="bg-[#F7F8F8] rounded-[24px] md:rounded-[65px] p-6 md:p-8">
            <div className="flex items-center gap-3 mb-4">
              {/* Icon Placeholder */}
              <div className="w-10 h-10 md:w-12 md:h-12">
                <img src="/pictures/icons/services.svg" alt="Third party icon" className="w-full h-full object-contain" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                Third-Party Services
              </h3>
            </div>
            
            <p className="text-sm md:text-base text-gray-600 mb-4">
              We engage trusted third-party providers to support our operations:
            </p>
            
            <ul className="space-y-2 mb-4">
              <li className="flex items-start gap-2 text-sm text-gray-600">
                <span className="w-1.5 h-1.5 bg-gray-900 rounded-full mt-1.5 flex-shrink-0"></span>
                Payment Processing: Secure transaction services (e.g., Stripe, Bank transfers).
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-600">
                <span className="w-1.5 h-1.5 bg-gray-900 rounded-full mt-1.5 flex-shrink-0"></span>
                Analytics: Tools like Google Analytics to understand website usage.
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-600">
                <span className="w-1.5 h-1.5 bg-gray-900 rounded-full mt-1.5 flex-shrink-0"></span>
                Project Management: Software for scheduling, client communication, and documentation.
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-600">
                <span className="w-1.5 h-1.5 bg-gray-900 rounded-full mt-1.5 flex-shrink-0"></span>
                Cloud Storage: Secure platforms for project plans, contracts, and photos.
              </li>
            </ul>
            
            <p className="text-sm text-gray-600">
              These providers access data only to perform tasks on our behalf under strict confidentiality and data processing agreements.
            </p>
          </div>

          {/* Card 3 - Data Security */}
          <div className="bg-[#F7F8F8] rounded-[24px] md:rounded-[65px] p-6 md:p-8">
            <div className="flex items-center gap-3 mb-4">
              {/* Icon Placeholder */}
              <div className="w-10 h-10 md:w-12 md:h-12">
                <img src="/pictures/icons/security.svg" alt="Security icon" className="w-full h-full object-contain" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                Data Security
              </h3>
            </div>
            
            <p className="text-sm md:text-base text-gray-600">
              We implement reasonable and industry-standard measures—including encryption, access controls, and secure servers—to protect your personal information against unauthorized access, alteration, or disclosure. Please note that no method of digital transmission or storage is 100% secure, and we cannot guarantee absolute security.
            </p>
          </div>

          {/* Card 4 - Your Privacy Rights */}
          <div className="bg-[#F7F8F8] rounded-[24px] md:rounded-[65px] p-6 md:p-8">
            <div className="flex items-center gap-3 mb-4">
              {/* Icon Placeholder */}
              <div className="w-10 h-10 md:w-12 md:h-12">
                <img src="/pictures/icons/privacy.svg" alt="Privacy rights icon" className="w-full h-full object-contain" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                Your Privacy Rights
              </h3>
            </div>
            
            <p className="text-sm md:text-base text-gray-600 mb-4">
              As a resident of New York or other applicable jurisdictions, you may have the right to:
            </p>
            
            <ul className="space-y-2">
              <li className="flex items-start gap-2 text-sm text-gray-600">
                <span className="w-1.5 h-1.5 bg-gray-900 rounded-full mt-1.5 flex-shrink-0"></span>
                Request access to or correction of your personal data.
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-600">
                <span className="w-1.5 h-1.5 bg-gray-900 rounded-full mt-1.5 flex-shrink-0"></span>
                Request deletion of your personal information, subject to legal or contractual retention requirements.
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-600">
                <span className="w-1.5 h-1.5 bg-gray-900 rounded-full mt-1.5 flex-shrink-0"></span>
                Opt out of marketing communications by using the "unsubscribe" link in emails or contacting us directly.
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-600">
                <span className="w-1.5 h-1.5 bg-gray-900 rounded-full mt-1.5 flex-shrink-0"></span>
                Object to or restrict certain data processing activities.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Data Retention Section */}
      <section className="w-[90%] max-w-[1760px] mx-auto mb-12 md:mb-[100px]">
        <div className="bg-[#F7F8F8] rounded-[24px] md:rounded-[65px] p-6 md:p-10 flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Left Content */}
          <div className="lg:w-1/2">
            <div className="flex items-center gap-3 mb-6">
              {/* Icon Placeholder */}
              <div className="w-10 h-10 md:w-12 md:h-12">
                <img src="/pictures/icons/retention.svg" alt="Data retention icon" className="w-full h-full object-contain" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                Data Retention
              </h2>
            </div>
            
            <p className="text-sm md:text-base text-gray-600 mb-4">
              We retain personal information only as long as necessary to:
            </p>
            
            <ul className="space-y-2">
              <li className="flex items-start gap-2 text-sm md:text-base text-gray-600">
                <span className="w-1.5 h-1.5 bg-gray-900 rounded-full mt-2 flex-shrink-0"></span>
                Fulfill the purposes for which it was collected, including ongoing projects and warranty periods.
              </li>
              <li className="flex items-start gap-2 text-sm md:text-base text-gray-600">
                <span className="w-1.5 h-1.5 bg-gray-900 rounded-full mt-2 flex-shrink-0"></span>
                Comply with legal obligations (e.g., NYC building code records, tax, insurance, or liability requirements).
              </li>
              <li className="flex items-start gap-2 text-sm md:text-base text-gray-600">
                <span className="w-1.5 h-1.5 bg-gray-900 rounded-full mt-2 flex-shrink-0"></span>
                Resolve disputes and enforce our agreements.
              </li>
            </ul>
          </div>

          {/* Right Image */}
          <div className="lg:w-1/2">
            <img 
              src="/pictures/privacy-policy/data.png" 
              alt="Data retention illustration" 
              className="w-full h-full object-cover rounded-[16px] md:rounded-[24px]"
            />
          </div>
        </div>
      </section>


      {/* Policy Updates Section */}
      <section className="w-[90%] max-w-[1760px] mx-auto mb-12 md:mb-[100px]">
        <div className="bg-[#F7F8F8] rounded-[24px] md:rounded-[65px] p-6 md:p-10 flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Left Image */}
          <div className="lg:w-1/2">
            <img 
              src="/pictures/privacy-policy/updates.png" 
              alt="Policy updates illustration" 
              className="w-full h-full object-cover rounded-[16px] md:rounded-[24px]"
            />
          </div>
          {/* Right Content */}
          <div className="lg:w-1/2">
            <div className="flex items-center gap-3 mb-6">
              {/* Icon Placeholder */}
              <div className="w-10 h-10 md:w-12 md:h-12">
                <img src="/pictures/icons/updates.svg" alt="Policy updates icon" className="w-full h-full object-contain" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                Policy Updates
              </h2>
            </div>
            
            <p className="text-sm md:text-base text-gray-600 mb-4">
              We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or services. The updated version will be posted on this page with a revised "Last Updated" date. Material changes will be communicated via email or a prominent notice on our website.
            </p>
            
          </div>

        </div>
      </section>
    </div>
  )
}

export default Page
