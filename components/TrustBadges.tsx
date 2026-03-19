"use client";

import { motion } from "motion/react";

const badges = [
  {
    id: "google",
    content: (
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        {/* Google G icon */}
        <svg width="28" height="28" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
          <path fill="#4285F4" d="M24 9.5c3.1 0 5.8 1.1 8 2.8l6-6C34.4 3.5 29.5 1.5 24 1.5 14.8 1.5 6.9 7 3.2 14.9l7 5.4C12 14.6 17.5 9.5 24 9.5z"/>
          <path fill="#34A853" d="M46.1 24.5c0-1.6-.1-3.1-.4-4.5H24v8.5h12.5c-.5 2.8-2.1 5.1-4.5 6.7l7 5.4c4.1-3.8 6.5-9.4 6.5-16.1z"/>
          <path fill="#FBBC04" d="M10.2 28.6A14.5 14.5 0 0 1 9.5 24c0-1.6.3-3.2.7-4.6l-7-5.4A22.5 22.5 0 0 0 1.5 24c0 3.6.9 7 2.5 10l6.2-5.4z"/>
          <path fill="#EA4335" d="M24 46.5c5.4 0 10-1.8 13.3-4.8l-7-5.4c-1.8 1.2-4 1.9-6.3 1.9-6.5 0-12-5.1-13.8-11.6l-6.2 5.4C6.9 41 14.8 46.5 24 46.5z"/>
        </svg>
        <div>
          <div style={{ fontSize: "11px", color: "#5F6368", fontFamily: "Arial, sans-serif", lineHeight: 1 }}>Google</div>
          <div style={{ fontSize: "15px", fontWeight: 700, color: "#202124", fontFamily: "Arial, sans-serif", lineHeight: 1.2 }}>Partner</div>
        </div>
      </div>
    ),
    borderColor: "#4285F4",
  },
  {
    id: "meta",
    content: (
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        {/* Meta f icon */}
        <div style={{ width: 28, height: 28, background: "#1877F2", borderRadius: 6, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
            <path d="M24 12.073C24 5.404 18.627 0 12 0S0 5.404 0 12.073C0 18.1 4.388 23.1 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.886v2.267h3.328l-.532 3.49h-2.796V24C19.612 23.1 24 18.1 24 12.073z"/>
          </svg>
        </div>
        <div>
          <div style={{ fontSize: "11px", color: "#65676B", fontFamily: "Arial, sans-serif", lineHeight: 1 }}>Meta</div>
          <div style={{ fontSize: "15px", fontWeight: 700, color: "#1C1E21", fontFamily: "Arial, sans-serif", lineHeight: 1.2 }}>Marketing Partners</div>
        </div>
      </div>
    ),
    borderColor: "#1877F2",
  },
  {
    id: "bing",
    content: (
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        {/* Bing icon */}
        <div style={{ width: 28, height: 28, background: "#008272", borderRadius: 4, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 3v14.3l4.5 2.5 7-4-4-2.2 3.2-1.8L5 3zM5 3l6 3.5-1.5 4.5 5.7 2.5L19 9l-8-6H5z"/>
          </svg>
        </div>
        <div>
          <div style={{ fontSize: "11px", color: "#555", fontFamily: "Arial, sans-serif", lineHeight: 1 }}>Bing</div>
          <div style={{ fontSize: "15px", fontWeight: 700, color: "#1C1E21", fontFamily: "Arial, sans-serif", lineHeight: 1.2 }}>Partner</div>
        </div>
      </div>
    ),
    borderColor: "#008272",
  },
  {
    id: "nasscom",
    content: (
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <div style={{ fontSize: "20px", fontWeight: 900, color: "#C0392B", fontFamily: "Arial Black, Arial, sans-serif", letterSpacing: "-0.5px" }}>NASSCOM</div>
        <div style={{ fontSize: "11px", color: "#555", fontFamily: "Arial, sans-serif", borderLeft: "1px solid #ddd", paddingLeft: 10 }}>Member</div>
      </div>
    ),
    borderColor: "#C0392B",
  },
  {
    id: "iso",
    content: (
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        {/* ISO circle badge */}
        <div style={{ width: 34, height: 34, borderRadius: "50%", border: "2.5px solid #1B2D5B", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
          <div style={{ fontSize: "8px", fontWeight: 700, color: "#1B2D5B", lineHeight: 1, fontFamily: "Arial, sans-serif" }}>ISO</div>
          <div style={{ fontSize: "6px", color: "#1B2D5B", lineHeight: 1, fontFamily: "Arial, sans-serif" }}>CERTIFIED</div>
        </div>
        <div>
          <div style={{ fontSize: "11px", color: "#555", fontFamily: "Arial, sans-serif", lineHeight: 1 }}>Certified</div>
          <div style={{ fontSize: "15px", fontWeight: 700, color: "#1B2D5B", fontFamily: "Arial, sans-serif", lineHeight: 1.2 }}>ISO Company</div>
        </div>
      </div>
    ),
    borderColor: "#1B2D5B",
  },
  {
    id: "dmca",
    content: (
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        {/* DMCA lock icon */}
        <div style={{ width: 28, height: 28, background: "#27AE60", borderRadius: 4, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 1C8.676 1 6 3.676 6 7v1H4v15h16V8h-2V7c0-3.324-2.676-6-6-6zm0 2c2.276 0 4 1.724 4 4v1H8V7c0-2.276 1.724-4 4-4zm0 9a2 2 0 1 1 0 4 2 2 0 0 1 0-4z"/>
          </svg>
        </div>
        <div>
          <div style={{ fontSize: "11px", color: "#27AE60", fontFamily: "Arial, sans-serif", lineHeight: 1, fontWeight: 700 }}>DMCA</div>
          <div style={{ fontSize: "15px", fontWeight: 700, color: "#1C1E21", fontFamily: "Arial, sans-serif", lineHeight: 1.2 }}>PROTECTED</div>
        </div>
      </div>
    ),
    borderColor: "#27AE60",
  },
];

export default function TrustBadges() {
  return (
    <section
      style={{
        background: "#F2EFE9",
        borderTop: "1px solid #E0DDD6",
        borderBottom: "1px solid #E0DDD6",
        padding: "28px 0",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 24px",
        }}
      >
        {/* Label */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "20px",
          }}
        >
          <span
            style={{
              fontFamily: "'Inter', Arial, sans-serif",
              fontSize: "12px",
              fontWeight: 600,
              color: "#888888",
              textTransform: "uppercase",
              letterSpacing: "4px",
            }}
          >
            Certified &amp; Recognised By
          </span>
        </div>

        {/* Badges row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "16px",
            flexWrap: "wrap",
          }}
        >
          {badges.map((badge, i) => (
            <motion.div
              key={badge.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              style={{
                background: "#FFFFFF",
                border: "1px solid #E0DDD6",
                borderTop: `3px solid ${badge.borderColor}`,
                borderRadius: "6px",
                padding: "14px 20px",
                display: "flex",
                alignItems: "center",
                boxShadow: "0 1px 4px rgba(0,0,0,0.05)",
                minWidth: "fit-content",
              }}
            >
              {badge.content}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
