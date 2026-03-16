"use client";

import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";

export default function ContactForm() {
  const availableServices = [
    "SEO & Content",
    "Meta & Google Ads",
    "Graphic Design",
    "Web Development",
    "Influencer & UGC",
    "ORM",
  ];

  const [formData, setFormData] = useState({
    fullName: "",
    businessName: "",
    phone: "",
    email: "",
    budget: "",
    message: "",
    services: [] as string[],
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Full Name is required";
    if (!formData.businessName.trim()) newErrors.businessName = "Business Name is required";
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone Number is required";
    } else if (!/^\+?[0-9\s\-()]{7,15}$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Work Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.budget) newErrors.budget = "Please select a budget range";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitting(true);
    setSubmitError('');
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, services: formData.services.join(', ') })
      });
      if (response.ok) {
        setSubmitted(true);
      } else {
        setSubmitError('Something went wrong. Please WhatsApp us at +91-6026767767');
      }
    } catch {
      setSubmitError('Something went wrong. Please WhatsApp us at +91-6026767767');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleServiceToggle = (service: string) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }));
  };

  if (submitted) {
    return (
      <div className="text-center py-20 px-8">
        <div className="text-[72px] mb-6">✅</div>
        <h2 className="font-sans font-black text-[36px] text-[#0D0D0D] mb-4 tracking-tight">
          Request Received!
        </h2>
        <p className="font-sans text-[18px] text-[#4A4A4A] max-w-[480px] mx-auto leading-[1.6]">
          Divyam will personally review your brand within 24 hours and reach out to schedule your free audit.
        </p>
      </div>
    );
  }

  const inputClass = (field: string) =>
    `w-full px-4 py-3 rounded-xl border ${errors[field] ? 'border-red-500' : 'border-[#E0DDD6]'} bg-white focus:outline-none focus:border-[#E8440A] focus:ring-1 focus:ring-[#E8440A] transition-colors font-sans text-[15px] text-[#0D0D0D] placeholder:text-[#888888]`;

  return (
    <form onSubmit={handleSubmit} className="space-y-6">

      {/* Full Name */}
      <div>
        <label className="block font-sans text-[14px] font-bold text-[#0D0D0D] mb-2">Full Name *</label>
        <input
          type="text"
          value={formData.fullName}
          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
          className={inputClass('fullName')}
          placeholder="John Doe"
        />
        {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>}
      </div>

      {/* Business + Phone */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block font-sans text-[14px] font-bold text-[#0D0D0D] mb-2">Business Name *</label>
          <input
            type="text"
            value={formData.businessName}
            onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
            className={inputClass('businessName')}
            placeholder="Acme Corp"
          />
          {errors.businessName && <p className="text-red-500 text-xs mt-1">{errors.businessName}</p>}
        </div>
        <div>
          <label className="block font-sans text-[14px] font-bold text-[#0D0D0D] mb-2">Phone Number *</label>
          <input
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className={inputClass('phone')}
            placeholder="+91 98765 43210"
          />
          {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
        </div>
      </div>

      {/* Email */}
      <div>
        <label className="block font-sans text-[14px] font-bold text-[#0D0D0D] mb-2">Work Email *</label>
        <input
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className={inputClass('email')}
          placeholder="john@company.com"
        />
        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
      </div>

      {/* Budget */}
      <div>
        <label className="block font-sans text-[14px] font-bold text-[#0D0D0D] mb-2">Monthly Marketing Budget *</label>
        <select
          value={formData.budget}
          onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
          className={inputClass('budget')}
        >
          <option value="">Select a range...</option>
          <option value="under-5k">Under $5K</option>
          <option value="5k-25k">$5K – $25K</option>
          <option value="25k-120k">$25K – $120K</option>
          <option value="120k-plus">$120K+</option>
        </select>
        {errors.budget && <p className="text-red-500 text-xs mt-1">{errors.budget}</p>}
      </div>

      {/* Services — FIXED CHECKBOXES */}
      <div>
        <label className="block font-sans text-[14px] font-bold text-[#0D0D0D] mb-3">Services Interested In</label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {availableServices.map((service) => {
            const isChecked = formData.services.includes(service);
            return (
              <button
                type="button"
                key={service}
                onClick={() => handleServiceToggle(service)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl border transition-all duration-200 text-left w-full ${
                  isChecked
                    ? 'border-[#E8440A] bg-[#E8440A]/5'
                    : 'border-[#E0DDD6] bg-white hover:border-[#E8440A]/50'
                }`}
              >
                {/* Custom checkbox */}
                <div className={`w-5 h-5 rounded-md border-2 flex items-center justify-center flex-shrink-0 transition-all duration-200 ${
                  isChecked
                    ? 'bg-[#E8440A] border-[#E8440A]'
                    : 'bg-white border-[#E0DDD6]'
                }`}>
                  {isChecked && <Check size={12} className="text-white" strokeWidth={3} />}
                </div>
                <span className={`font-sans text-[15px] transition-colors ${
                  isChecked ? 'text-[#E8440A] font-medium' : 'text-[#4A4A4A]'
                }`}>
                  {service}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Message */}
      <div>
        <label className="block font-sans text-[14px] font-bold text-[#0D0D0D] mb-2">Message (Optional)</label>
        <textarea
          rows={4}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full px-4 py-3 rounded-xl border border-[#E0DDD6] bg-white focus:outline-none focus:border-[#E8440A] focus:ring-1 focus:ring-[#E8440A] transition-colors resize-none font-sans text-[15px] text-[#0D0D0D] placeholder:text-[#888888]"
          placeholder="Tell us about your current challenges and goals..."
        />
      </div>

      {submitError && (
        <p className="text-red-500 text-[14px]">{submitError}</p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full h-[60px] bg-[#0D0D0D] text-white font-sans font-bold text-[15px] uppercase tracking-[2px] rounded-xl hover:bg-[#E8440A] transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 group"
      >
        {isSubmitting ? "Sending..." : <>Request Free Audit <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" /></>}
      </button>

    </form>
  );
}
