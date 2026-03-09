"use client";

import { useState, useEffect } from "react";

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      const timer = setTimeout(() => setShowBanner(true), 100);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "true");
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        width: "100%",
        backgroundColor: "white",
        borderTop: "1px solid #e5e5e5",
        padding: "16px 24px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        zIndex: 9999,
        fontFamily: "var(--font-dm-sans), sans-serif",
        boxShadow: "0 -4px 10px rgba(0,0,0,0.05)",
      }}
      className="md:flex-row gap-4"
    >
      <p style={{ margin: 0, color: "#333", fontSize: "14px", flex: 1 }}>
        We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.
      </p>
      <div style={{ display: "flex", gap: "12px" }}>
        <button
          onClick={() => {}}
          style={{
            padding: "8px 16px",
            backgroundColor: "transparent",
            color: "#1B2D5B",
            border: "1px solid #1B2D5B",
            borderRadius: "4px",
            cursor: "pointer",
            fontWeight: 500,
            fontSize: "14px",
          }}
        >
          Learn More
        </button>
        <button
          onClick={handleAccept}
          style={{
            padding: "8px 16px",
            backgroundColor: "#E8440A",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            fontWeight: 500,
            fontSize: "14px",
          }}
        >
          Accept All
        </button>
      </div>
    </div>
  );
}
