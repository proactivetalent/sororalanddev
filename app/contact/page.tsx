"use client";

import React, { useState } from 'react'

const Page = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    });
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [statusMessage, setStatusMessage] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');
        setStatusMessage('');

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ...formData, source: 'contact' }),
            });

            const data = await res.json();

            if (res.ok) {
                setStatus('success');
                setStatusMessage('Your message has been sent successfully! We\'ll get back to you soon.');
                setFormData({ firstName: '', lastName: '', email: '', phone: '', message: '' });
            } else {
                setStatus('error');
                setStatusMessage(data.error || 'Something went wrong. Please try again.');
            }
        } catch {
            setStatus('error');
            setStatusMessage('Network error. Please check your connection and try again.');
        }
    };

    return (
        <div>
            {/* Contact Section */}
            <section className="w-[90%] max-w-[1760px] mx-auto mb-12 md:mb-[100px] mt-6 md:mt-10">
                <div className="bg-[#F7F8F8] rounded-[32px] md:rounded-[65px] p-6 md:p-12 lg:p-16">
                    <div className="flex flex-col lg:flex-row gap-10 lg:gap-20">
                        {/* Left Side - Heading & Description */}
                        <div className="lg:w-2/5 flex flex-col justify-center">
                            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight text-gray-900 mb-6">
                                Let's Build<br />Your Vision
                            </h1>
                            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                                Every exceptional New York City project starts with a conversation. Whether you're planning a full-scale renovation, a commercial build-out, or simply have questions about where to begin, the Sorora team is here to listen, guide, and provide clarity.
                            </p>
                        </div>

                        {/* Right Side - Contact Form */}
                        <div className="lg:w-3/5">
                            <form onSubmit={handleSubmit} className="space-y-4">
                                {/* First Name & Last Name Row */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <input
                                        type="text"
                                        name="firstName"
                                        placeholder="First Name*"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-5 py-4 bg-white border border-gray-200 rounded-[12px] text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#E20D6E]/20 focus:border-[#E20D6E] transition-all"
                                    />
                                    <input
                                        type="text"
                                        name="lastName"
                                        placeholder="Last Name*"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-5 py-4 bg-white border border-gray-200 rounded-[12px] text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#E20D6E]/20 focus:border-[#E20D6E] transition-all"
                                    />
                                </div>

                                {/* Email */}
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email*"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-5 py-4 bg-white border border-gray-200 rounded-[12px] text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#E20D6E]/20 focus:border-[#E20D6E] transition-all"
                                />

                                {/* Phone Number */}
                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder="Phone Number*"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-5 py-4 bg-white border border-gray-200 rounded-[12px] text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#E20D6E]/20 focus:border-[#E20D6E] transition-all"
                                />

                                {/* Message */}
                                <textarea
                                    name="message"
                                    placeholder="Your message..."
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={5}
                                    className="w-full px-5 py-4 bg-white border border-gray-200 rounded-[12px] text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#E20D6E]/20 focus:border-[#E20D6E] transition-all resize-y"
                                />

                                {/* Status Message */}
                                {status === 'success' && (
                                    <div className="bg-green-50 border border-green-200 text-green-700 px-5 py-4 rounded-[12px] text-sm">
                                        {statusMessage}
                                    </div>
                                )}
                                {status === 'error' && (
                                    <div className="bg-red-50 border border-red-200 text-red-700 px-5 py-4 rounded-[12px] text-sm">
                                        {statusMessage}
                                    </div>
                                )}

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    disabled={status === 'loading'}
                                    className="w-full bg-[#E20D6E] hover:bg-pink-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-medium py-4 px-8 rounded-full transition-colors"
                                >
                                    {status === 'loading' ? 'Sending...' : 'Send Message'}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Info & Service Area Section */}
            <section className="w-[90%] max-w-[1760px] mx-auto mb-12 md:mb-[100px]">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
                    {/* Left Card - Let's talk with us */}
                    <div className="bg-[#F7F8F8] rounded-[24px] md:rounded-[65px] p-5 md:p-10">
                        <h2 className="text-xl md:text-3xl lg:text-5xl font-bold text-gray-900 mb-3 md:mb-4">
                            Let's talk with us
                        </h2>
                        <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-6 md:mb-8">
                            Questions, comments, or suggestions? Simply fill in the form and we'll be in touch shortly.
                        </p>

                        {/* Contact Info */}
                        <div className="space-y-3 md:space-y-4">
                            {/* Address */}
                            <div className="flex items-start gap-3">
                                <svg className="w-4 h-4 md:w-5 md:h-5 text-[#E20D6E] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <div>
                                    <p className="text-sm md:text-base text-gray-900 font-medium">131 Docks Corner Road</p>
                                    <p className="text-sm md:text-base text-gray-900 font-medium">Dayton, NJ 08810</p>
                                </div>
                            </div>

                            {/* Phone */}
                            <a href="tel:+12016338855" className="flex items-center gap-3 hover:opacity-70 transition-opacity">
                                <svg className="w-4 h-4 md:w-5 md:h-5 text-[#E20D6E] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                <p className="text-sm md:text-base text-gray-900 font-medium">+1 (201) 633-8855</p>
                            </a>

                            {/* Email */}
                            <a href="mailto:info@sororalanddev.com" className="flex items-center gap-3 hover:opacity-70 transition-opacity">
                                <svg className="w-4 h-4 md:w-5 md:h-5 text-[#E20D6E] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <p className="text-sm md:text-base text-gray-900 font-medium">info@sororalanddev.com</p>
                            </a>
                        </div>
                    </div>

                    {/* Right Card - Service Area */}
                    <div className="bg-[#F7F8F8] rounded-[24px] md:rounded-[65px] p-5 md:p-10">
                        <div className="flex flex-col gap-4 md:gap-6">
                            {/* Text Content */}
                            <div>
                                <h2 className="text-xl md:text-3xl lg:text-5xl font-bold text-gray-900 mb-3 md:mb-4">
                                    Service Area
                                </h2>
                                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                                    We are proud to serve the greater New York City metropolitan area, bringing our expertise and process to all five boroughs and select surrounding communities.
                                </p>
                            </div>

                            {/* Boroughs List & Map */}
                            <div className="flex flex-col sm:flex-row items-start sm:items-center sm:justify-between gap-4 md:gap-6">
                                {/* Boroughs List */}
                                <div>
                                    <ul className="space-y-1 md:space-y-2">
                                        <li className="flex items-center gap-2 text-sm md:text-base text-gray-900">
                                            <span className="w-1.5 h-1.5 bg-gray-900 rounded-full flex-shrink-0"></span>
                                            Manhattan
                                        </li>
                                        <li className="flex items-center gap-2 text-sm md:text-base text-gray-900">
                                            <span className="w-1.5 h-1.5 bg-gray-900 rounded-full flex-shrink-0"></span>
                                            Brooklyn
                                        </li>
                                        <li className="flex items-center gap-2 text-sm md:text-base text-gray-900">
                                            <span className="w-1.5 h-1.5 bg-gray-900 rounded-full flex-shrink-0"></span>
                                            Queens
                                        </li>
                                        <li className="flex items-center gap-2 text-sm md:text-base text-gray-900">
                                            <span className="w-1.5 h-1.5 bg-gray-900 rounded-full flex-shrink-0"></span>
                                            The Bronx
                                        </li>
                                        <li className="flex items-center gap-2 text-sm md:text-base text-gray-900">
                                            <span className="w-1.5 h-1.5 bg-gray-900 rounded-full flex-shrink-0"></span>
                                            Staten Island
                                        </li>
                                    </ul>
                                </div>

                                {/* Map Image */}
                                <div className="w-full sm:w-auto flex justify-center sm:justify-end">
                                    <img
                                        src="/pictures/contact/maps.png"
                                        alt="NYC Service Area Map"
                                        className="w-full max-w-[200px] sm:max-w-[250px] md:max-w-[300px] lg:max-w-[350px] h-auto object-contain"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Page
