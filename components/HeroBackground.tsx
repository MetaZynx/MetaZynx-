"use client";

export default function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
      {/* Orb 1 — large orange glow top left */}
      <div className="absolute w-[300px] h-[300px] md:w-[600px] md:h-[600px] rounded-full bg-[radial-gradient(circle,rgba(232,68,10,0.08)_0%,transparent_70%)] -top-[50px] md:-top-[100px] -left-[50px] md:-left-[100px] animate-[floatOrb1_12s_ease-in-out_infinite]" />

      {/* Orb 2 — large navy glow top right */}
      <div className="absolute w-[350px] h-[350px] md:w-[700px] md:h-[700px] rounded-full bg-[radial-gradient(circle,rgba(27,45,91,0.06)_0%,transparent_70%)] -top-[100px] md:-top-[200px] -right-[75px] md:-right-[150px] animate-[floatOrb2_15s_ease-in-out_infinite]" />

      {/* Orb 3 — medium orange glow bottom center */}
      <div className="absolute w-[250px] h-[250px] md:w-[500px] md:h-[500px] rounded-full bg-[radial-gradient(circle,rgba(232,68,10,0.06)_0%,transparent_70%)] -bottom-[25px] md:-bottom-[50px] left-1/2 -translate-x-1/2 animate-[floatOrb3_10s_ease-in-out_infinite]" />

      {/* Floating dots grid */}
      <svg className="absolute inset-0 w-full h-full opacity-40">
        <defs>
          <pattern id="dots" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.2" fill="#1B2D5B" opacity="0.15"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dots)"/>
      </svg>
    </div>
  );
}
