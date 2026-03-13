"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

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
        body: JSON.stringify({
          ...formData,
          services: formData.services.join(', ')
        })
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
        <h2 className="font-sans font-black text-[36px] text-primary-text mb-4 tracking-tight">
          Request Received!
        </h2>
        <p className="font-sans text-[18px] text-secondary-text max-w-[480px] mx-auto leading-[1.6]">
          Divyam will personally review your brand within 24 hours and reach out to schedule your free audit.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="fullName" className="block font-sans text-[14px] font-bold text-primary-text mb-2">Full Name *</label>
        <input
          type="text"
          id="fullName"
          value={formData.fullName}
          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
          className={`w-full px-4 py-3 rounded-xl border bg-primary-bg ${errors.fullName ? 'border-red-500' : 'border-border-glass'} focus:outline-none focus:border-brand-action focus:ring-1 focus:ring-brand-action transition-colors font-sans text-[15px] text-primary-text placeholder:text-muted-text`}
          placeholder="John Doe"
        />
        {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="businessName" className="block font-sans text-[14px] font-bold text-primary-text mb-2">Business Name *</label>
          <input
            type="text"
            id="businessName"
            value={formData.businessName}
            onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
            className={`w-full px-4 py-3 rounded-xl border bg-primary-bg ${errors.businessName ? 'border-red-500' : 'border-border-glass'} focus:outline-none focus:border-brand-action focus:ring-1 focus:ring-brand-action transition-colors font-sans text-[15px] text-primary-text placeholder:text-muted-text`}
            placeholder="Acme Corp"
          />
          {errors.businessName && <p className="text-red-500 text-xs mt-1">{errors.businessName}</p>}
        </div>
        <div>
          <label htmlFor="phone" className="block font-sans text-[14px] font-bold text-primary-text mb-2">Phone Number *</label>
          <input
            type="tel"
            id="phone"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className={`w-full px-4 py-3 rounded-xl border bg-primary-bg ${errors.phone ? 'border-red-500' : 'border-border-glass'} focus:outline-none focus:border-brand-action focus:ring-1 focus:ring-brand-action transition-colors font-sans text-[15px] text-primary-text placeholder:text-muted-text`}
            placeholder="+91 98765 43210"
          />
          {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block font-sans text-[14px] font-bold text-primary-text mb-2">Work Email *</label>
        <input
          type="email"
          id="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className={`w-full px-4 py-3 rounded-xl border bg-primary-bg ${errors.email ? 'border-red-500' : 'border-border-glass'} focus:outline-none focus:border-brand-action focus:ring-1 focus:ring-brand-action transition-colors font-sans text-[15px] text-primary-text placeholder:text-muted-text`}
          placeholder="john@company.com"
        />
        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
      </div>

      <div>
        <label htmlFor="budget" className="block font-sans text-[14px] font-bold text-primary-text mb-2">Monthly Marketing Budget *</label>
        <select
          id="budget"
          value={formData.budget}
          onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
          className={`w-full px-4 py-3 rounded-xl border bg-primary-bg ${errors.budget ? 'border-red-500' : 'border-border-glass'} focus:outline-none focus:border-brand-action focus:ring-1 focus:ring-brand-action transition-colors font-sans text-[15px] text-primary-text`}
        >
          <option value="">Select a range...</option>
          <option value="under-50k">Under $5K</option>
          <option value="50k-2l">$5K – $25K</option>
          <option value="2l-10l">$25K – $120K</option>
          <option value="10l-plus">$120K+</option>
        </select>
        {errors.budget && <p className="text-red-500 text-xs mt-1">{errors.budget}</p>}
      </div>

      <div>
        <label className="block font-sans text-[14px] font-bold text-primary-text mb-3">Services Interested In</label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {availableServices.map((service, index) => (
            <label key={index} className="flex items-center gap-3 cursor-pointer group">
              <div className="relative flex items-center justify-center">
                <input
                  type="checkbox"
                  checked={formData.services.includes(service)}
                  onChange={() => handleServiceToggle(service)}
                  className="peer appearance-none w-5 h-5 border border-border-glass rounded-sm checked:bg-brand-action checked:border-brand-action transition-colors cursor-pointer bg-primary-bg"
                />
                <CheckCircle2 size={14} className="absolute text-white opacity-0 peer-checked:opacity-100 pointer-events-none" />
              </div>
              <span className="font-sans text-[15px] text-secondary-text group-hover:text-primary-text transition-colors">{service}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block font-sans text-[14px] font-bold text-primary-text mb-2">Message (Optional)</label>
        <textarea
          id="message"
          rows={4}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full px-4 py-3 rounded-xl border border-border-glass bg-primary-bg focus:outline-none focus:border-brand-action focus:ring-1 focus:ring-brand-action transition-colors resize-none font-sans text-[15px] text-primary-text placeholder:text-muted-text"
          placeholder="Tell us about your current challenges and goals..."
        ></textarea>
      </div>

      {submitError && (
        <p className="text-red-500 mt-3 text-[14px]">
          {submitError}
        </p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full h-[60px] bg-primary-text text-primary-bg font-sans font-bold text-[16px] uppercase tracking-[2px] rounded-xl hover:scale-[1.02] hover:bg-brand-action hover:text-white transition-all duration-200 ease-out flex items-center justify-center gap-2 disabled:opacity-70 disabled:hover:scale-100 disabled:hover:bg-primary-text disabled:hover:text-primary-bg"
      >
        {isSubmitting ? "Sending..." : "Request Free Audit →"}
      </button>
    </form>
  );
}
