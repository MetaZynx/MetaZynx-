'use client';

import { motion, AnimatePresence } from 'motion/react';
import { Phone, X } from 'lucide-react';
import { useState } from 'react';

export default function CallButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-24 right-5 z-50 flex flex-col items-end gap-3">
      {/* Popup options */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            transition={{ duration: 0.2, ease: [0.33, 1, 0.68, 1] }}
            className="bg-white rounded-2xl shadow-2xl border border-[#E0DDD6] p-4 w-[220px]"
          >
            <p className="font-sans font-bold text-[13px] text-[#888888] uppercase tracking-[1px] mb-3">
              Call Us
            </p>
            <a
              href="tel:+916026767767"
              className="flex items-center gap-3 p-3 rounded-xl bg-[#1B2D5B] hover:bg-[#E8440A] transition-colors duration-200 group"
            >
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                <Phone size={15} className="text-white" />
              </div>
              <div>
                <p className="font-sans font-bold text-[13px] text-white">+91-6026767767</p>
                <p className="font-sans text-[11px] text-white/70">Mon–Sat 9AM–6PM</p>
              </div>
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="w-14 h-14 rounded-full bg-[#1B2D5B] shadow-lg shadow-[#1B2D5B]/30 flex items-center justify-center relative"
        aria-label="Call us"
      >
        {/* Pulse ring */}
        {!isOpen && (
          <motion.div
            animate={{ scale: [1, 1.5, 1], opacity: [0.4, 0, 0.4] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute inset-0 rounded-full bg-[#1B2D5B]"
          />
        )}
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          {isOpen
            ? <X size={22} className="text-white" />
            : <Phone size={22} className="text-white" />
          }
        </motion.div>
      </motion.button>
    </div>
  );
}
