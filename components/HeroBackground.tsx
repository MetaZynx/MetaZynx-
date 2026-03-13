"use client";

export default function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden z-[-1] pointer-events-none bg-[#FAFAF8]">
      {/* Orb 1 — very light, transparent orange */}
      <div className="absolute w-[50vw] h-[50vw] min-w-[500px] min-h-[500px] rounded-full bg-[#E8440A] opacity-[0.06] blur-[100px] top-[-15%] left-[-10%] animate-[floatOrb1_18s_ease-in-out_infinite]" />

      {/* Orb 2 — very soft, light navy/grey */}
      <div className="absolute w-[60vw] h-[60vw] min-w-[600px] min-h-[600px] rounded-full bg-[#1B2D5B] opacity-[0.05] blur-[100px] bottom-[-20%] right-[-15%] animate-[floatOrb2_20s_ease-in-out_infinite]" />
    </div>
  );
}
