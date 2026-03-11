"use client";
import { useState, useEffect } from "react";

const words = ["Empires", "Revenue", "Results", "Legacies"];

export default function HeroCyclingWord() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex(prev => (prev + 1) % words.length);
        setVisible(true);
      }, 300);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <span style={{
      color: "#E8440A",
      display: "inline-block",
      transition: "opacity 0.3s ease, transform 0.3s ease",
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(-12px)",
    }}>
      {words[index]}
    </span>
  );
}
