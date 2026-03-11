"use client";

export default function HeroBackground() {
  return (
    <div style={{
      position: "absolute",
      inset: 0,
      overflow: "hidden",
      zIndex: 0,
      pointerEvents: "none"
    }}>
      {/* Orb 1 — large orange glow top left */}
      <div style={{
        position: "absolute",
        width: "600px",
        height: "600px",
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(232,68,10,0.08) 0%, transparent 70%)",
        top: "-100px",
        left: "-100px",
        animation: "floatOrb1 12s ease-in-out infinite"
      }}/>

      {/* Orb 2 — large navy glow top right */}
      <div style={{
        position: "absolute",
        width: "700px",
        height: "700px",
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(27,45,91,0.06) 0%, transparent 70%)",
        top: "-200px",
        right: "-150px",
        animation: "floatOrb2 15s ease-in-out infinite"
      }}/>

      {/* Orb 3 — medium orange glow bottom center */}
      <div style={{
        position: "absolute",
        width: "500px",
        height: "500px",
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(232,68,10,0.06) 0%, transparent 70%)",
        bottom: "-50px",
        left: "50%",
        transform: "translateX(-50%)",
        animation: "floatOrb3 10s ease-in-out infinite"
      }}/>

      {/* Floating dots grid */}
      <svg
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          opacity: 0.4
        }}
      >
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
