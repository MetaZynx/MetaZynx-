"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function ContactForm() {
  const services = [
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
    selectedServices: [] as string[],
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

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
    if (validate()) {
      setIsSubmitting(true);
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({
        fullName: "",
        businessName: "",
        phone: "",
        email: "",
        budget: "",
        message: "",
        selectedServices: [],
      });
      setTimeout(() => setIsSuccess(false), 5000);
    }
  };

  const handleServiceToggle = (service: string) => {
    setFormData((prev) => ({
      ...prev,
      selectedServices: prev.selectedServices.includes(service)
        ? prev.selectedServices.filter((s) => s !== service)
        : [...prev.selectedServices, service],
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {isSuccess && (
        <div className="bg-green-50 border border-green-200 text-green-800 rounded-md p-4 mb-6 flex items-center gap-3">
          <CheckCircle2 size={20} className="text-green-600" />
          <p className="font-sans text-[14px] font-medium">Thank you! Your request has been received. We will be in touch shortly.</p>
        </div>
      )}

      <div>
        <label htmlFor="fullName" className="block font-sans text-[14px] font-bold text-brand-navy mb-2">Full Name *</label>
        <input
          type="text"
          id="fullName"
          value={formData.fullName}
          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
          className={`w-full px-4 py-3 rounded-md border ${errors.fullName ? 'border-red-500' : 'border-border-warm'} focus:outline-none focus:border-accent-orange focus:ring-1 focus:ring-accent-orange transition-colors font-sans text-[15px]`}
          placeholder="John Doe"
        />
        {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="businessName" className="block font-sans text-[14px] font-bold text-brand-navy mb-2">Business Name *</label>
          <input
            type="text"
            id="businessName"
            value={formData.businessName}
            onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
            className={`w-full px-4 py-3 rounded-md border ${errors.businessName ? 'border-red-500' : 'border-border-warm'} focus:outline-none focus:border-accent-orange focus:ring-1 focus:ring-accent-orange transition-colors font-sans text-[15px]`}
            placeholder="Acme Corp"
          />
          {errors.businessName && <p className="text-red-500 text-xs mt-1">{errors.businessName}</p>}
        </div>
        <div>
          <label htmlFor="phone" className="block font-sans text-[14px] font-bold text-brand-navy mb-2">Phone Number *</label>
          <input
            type="tel"
            id="phone"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className={`w-full px-4 py-3 rounded-md border ${errors.phone ? 'border-red-500' : 'border-border-warm'} focus:outline-none focus:border-accent-orange focus:ring-1 focus:ring-accent-orange transition-colors font-sans text-[15px]`}
            placeholder="+91 98765 43210"
          />
          {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block font-sans text-[14px] font-bold text-brand-navy mb-2">Work Email *</label>
        <input
          type="email"
          id="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className={`w-full px-4 py-3 rounded-md border ${errors.email ? 'border-red-500' : 'border-border-warm'} focus:outline-none focus:border-accent-orange focus:ring-1 focus:ring-accent-orange transition-colors font-sans text-[15px]`}
          placeholder="john@company.com"
        />
        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
      </div>

      <div>
        <label htmlFor="budget" className="block font-sans text-[14px] font-bold text-brand-navy mb-2">Monthly Marketing Budget *</label>
        <select
          id="budget"
          value={formData.budget}
          onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
          className={`w-full px-4 py-3 rounded-md border ${errors.budget ? 'border-red-500' : 'border-border-warm'} focus:outline-none focus:border-accent-orange focus:ring-1 focus:ring-accent-orange transition-colors bg-white font-sans text-[15px]`}
        >
          <option value="">Select a range...</option>
          <option value="under-50k">Under ₹50K</option>
          <option value="50k-2l">₹50K – ₹2L</option>
          <option value="2l-10l">₹2L – ₹10L</option>
          <option value="10l-plus">₹10L+</option>
        </select>
        {errors.budget && <p className="text-red-500 text-xs mt-1">{errors.budget}</p>}
      </div>

      <div>
        <label className="block font-sans text-[14px] font-bold text-brand-navy mb-3">Services Interested In</label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {services.map((service, index) => (
            <label key={index} className="flex items-center gap-3 cursor-pointer group">
              <div className="relative flex items-center justify-center">
                <input
                  type="checkbox"
                  checked={formData.selectedServices.includes(service)}
                  onChange={() => handleServiceToggle(service)}
                  className="peer appearance-none w-5 h-5 border border-border-warm rounded-sm checked:bg-accent-orange checked:border-accent-orange transition-colors cursor-pointer"
                />
                <CheckCircle2 size={14} className="absolute text-white opacity-0 peer-checked:opacity-100 pointer-events-none" />
              </div>
              <span className="font-sans text-[15px] text-secondary-text group-hover:text-brand-navy transition-colors">{service}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block font-sans text-[14px] font-bold text-brand-navy mb-2">Message (Optional)</label>
        <textarea
          id="message"
          rows={4}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full px-4 py-3 rounded-md border border-border-warm focus:outline-none focus:border-accent-orange focus:ring-1 focus:ring-accent-orange transition-colors resize-none font-sans text-[15px]"
          placeholder="Tell us about your current challenges and goals..."
        ></textarea>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full h-[60px] bg-accent-orange text-white font-sans font-bold text-[16px] uppercase tracking-[2px] rounded-md hover:scale-[1.03] hover:shadow-lg hover:shadow-accent-orange/20 transition-all duration-200 ease-out flex items-center justify-center gap-2 disabled:opacity-70 disabled:hover:scale-100"
      >
        {isSubmitting ? "Submitting..." : "Request Free Audit"} <ArrowRight size={20} />
      </button>
    </form>
  );
}
