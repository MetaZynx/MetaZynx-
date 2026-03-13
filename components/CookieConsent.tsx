"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Cookie } from "lucide-react";

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      const timer = setTimeout(() => setShowBanner(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "true");
    setShowBanner(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookieConsent", "false");
    setShowBanner(false);
  };

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 pointer-events-none"
        >
          <div className="max-w-4xl mx-auto bg-card-bg/95 backdrop-blur-md border border-border-glass rounded-xl shadow-2xl p-6 pointer-events-auto relative overflow-hidden">
            {/* Subtle gradient accent */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-action/20 via-brand-action to-brand-action/20"></div>
            
            <button 
              onClick={handleDecline}
              className="absolute top-4 right-4 text-muted-text hover:text-primary-text transition-colors"
              aria-label="Close cookie banner"
            >
              <X size={20} />
            </button>

            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-brand-action/10 shrink-0">
                <Cookie className="text-brand-action" size={24} />
              </div>
              
              <div className="flex-grow">
                <h3 className="font-sans font-semibold text-[16px] text-primary-text mb-2 flex items-center gap-2">
                  <Cookie className="md:hidden text-brand-action" size={18} />
                  We value your privacy
                </h3>
                <p className="font-sans text-[14px] text-secondary-text leading-relaxed">
                  We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our traffic. By clicking &quot;Accept All&quot;, you consent to our use of cookies.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0 mt-4 md:mt-0">
                <button
                  onClick={handleDecline}
                  className="px-5 py-2.5 rounded-md font-sans font-medium text-[13px] text-primary-text bg-transparent border border-border-glass hover:bg-secondary-bg transition-colors w-full sm:w-auto text-center"
                >
                  Decline
                </button>
                <button
                  onClick={handleAccept}
                  className="px-5 py-2.5 rounded-md font-sans font-medium text-[13px] text-primary-bg bg-primary-text hover:scale-[1.02] transition-transform w-full sm:w-auto text-center"
                >
                  Accept All
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
