"use client";

import Link from "next/link";
import { useState } from "react";

const footerLinks = [
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact us" },
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms & Conditions" },
];

export default function Footer() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setStatusMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, source: "footer" }),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("success");
        setStatusMessage("Message sent successfully! We'll be in touch soon.");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setStatus("error");
        setStatusMessage(data.error || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setStatusMessage("Network error. Please check your connection and try again.");
    }
  };

  return (
    <footer className="bg-black text-white footer-container rounded-[64px] mb-[50px]">
      {/* Contact Form Section */}
      <div className="w-[90%] max-w-[1760px] mx-auto py-16 md:py-24">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          {/* Left Side - Text */}
          <div className="lg:w-2/5">
            <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-6">
              Tell us about your vision, and let&apos;s discuss how Sorora can bring clarity,
              quality, and confidence to your construction project.
            </p>
            <p className="text-white text-base md:text-lg font-medium">
              Schedule Your Free, No-Obligation Consultation Today
            </p>
          </div>

          {/* Right Side - Form */}
          <div className="lg:w-3/5">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="NAME"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-gray-600 py-3 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-[#E20D6E] transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="EMAIL"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-gray-600 py-3 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-[#E20D6E] transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="PHONE"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-gray-600 py-3 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-[#E20D6E] transition-colors"
                  />
                </div>
              </div>
              <div>
                <textarea
                  name="message"
                  placeholder="MESSAGE"
                  rows={3}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-gray-600 py-3 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-[#E20D6E] transition-colors resize-none"
                />
              </div>
              {/* Status Message */}
              {status === "success" && (
                <div className="text-green-400 text-sm py-2">
                  {statusMessage}
                </div>
              )}
              {status === "error" && (
                <div className="text-red-400 text-sm py-2">
                  {statusMessage}
                </div>
              )}

              <div>
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="bg-[#E20D6E] hover:bg-pink-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white text-sm font-medium px-8 py-3 rounded-full transition-colors"
                >
                  {status === "loading" ? "Sending..." : "Send a message"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="w-[90%] max-w-[1760px] mx-auto pb-6">
        <div className="bg-[#1a1a1a] rounded-full px-6 md:px-10 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img 
              src="/pictures/logo.svg" 
              alt="Sorora Logo" 
              className="h-[40px] md:h-[50px] w-auto object-contain brightness-0 invert"
            />
          </Link>

          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center gap-4 md:gap-8">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-300 hover:text-white text-xs md:text-sm transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center py-6">
        <p className="text-gray-500 text-xs md:text-sm">
          Copyright © {new Date().getFullYear()} Sorora. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
