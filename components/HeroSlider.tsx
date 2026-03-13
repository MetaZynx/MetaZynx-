"use client";
import { useEffect, useRef, useState } from "react";

const SLIDE_DURATION = 4000;
const FADE_DURATION = 800;

export default function HeroSlider() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [currentScene, setCurrentScene] = useState(0);
  const [opacity, setOpacity] = useState(1);
  const sceneRef = useRef(0);
  const animRef = useRef<number | undefined>(undefined);
  const timeRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // ============================================
    // SCENE 1 — Rising ROAS Graph (Paid Ads)
    // ============================================
    const drawScene1 = (t: number) => {
      const w = canvas.width;
      const h = canvas.height;
      ctx.clearRect(0, 0, w, h);

      // Cream base
      ctx.fillStyle = "#FAFAF8";
      ctx.fillRect(0, 0, w, h);

      // Grid lines
      ctx.strokeStyle = "rgba(27,45,91,0.06)";
      ctx.lineWidth = 1;
      for (let x = 0; x < w; x += 80) {
        ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, h); ctx.stroke();
      }
      for (let y = 0; y < h; y += 80) {
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(w, y); ctx.stroke();
      }

      // Animated rising line chart
      const points = 12;
      const startX = w * 0.05;
      const endX = w * 0.95;
      const baseY = h * 0.75;
      const progress = Math.min((t % 3000) / 3000, 1);

      // Orange rising line
      ctx.beginPath();
      ctx.strokeStyle = "rgba(232,68,10,0.25)";
      ctx.lineWidth = 3;
      ctx.lineJoin = "round";
      for (let i = 0; i <= points * progress; i++) {
        const x = startX + (endX - startX) * (i / points);
        const y = baseY - (h * 0.45) * (i / points) - Math.sin(i * 0.8) * 30;
        i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
      }
      ctx.stroke();

      // Fill under line
      const lastI = Math.floor(points * progress);
      const lastX = startX + (endX - startX) * (lastI / points);
      ctx.lineTo(lastX, baseY);
      ctx.lineTo(startX, baseY);
      ctx.closePath();
      ctx.fillStyle = "rgba(232,68,10,0.04)";
      ctx.fill();

      // Navy secondary line
      ctx.beginPath();
      ctx.strokeStyle = "rgba(27,45,91,0.15)";
      ctx.lineWidth = 2;
      for (let i = 0; i <= points * progress; i++) {
        const x = startX + (endX - startX) * (i / points);
        const y = baseY - (h * 0.25) * (i / points) + Math.cos(i * 1.2) * 25;
        i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
      }
      ctx.stroke();

      // Bar chart in background
      const barCount = 10;
      for (let i = 0; i < barCount; i++) {
        const bx = w * 0.1 + (w * 0.8 / barCount) * i;
        const bh = (h * 0.3 + Math.sin(i * 1.5) * h * 0.1) * Math.min(progress * 1.5, 1);
        ctx.fillStyle = `rgba(27,45,91,0.04)`;
        ctx.fillRect(bx, baseY - bh, w * 0.06, bh);
      }

      // ROAS label floating
      ctx.font = "bold 18px DM Sans, sans-serif";
      ctx.fillStyle = "rgba(232,68,10,0.3)";
      ctx.fillText("8.4x ROAS", w * 0.75, h * 0.25);
      ctx.fillStyle = "rgba(27,45,91,0.2)";
      ctx.fillText("+312% Traffic", w * 0.1, h * 0.3);
    };

    // ============================================
    // SCENE 2 — Network Nodes (SEO/Content)
    // ============================================
    const nodes: { x: number; y: number; vx: number; vy: number; r: number }[] = [];
    for (let i = 0; i < 35; i++) {
      nodes.push({
        x: Math.random() * (typeof window !== "undefined" ? window.innerWidth : 1200),
        y: Math.random() * (typeof window !== "undefined" ? window.innerHeight : 800),
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        r: Math.random() * 4 + 2
      });
    }

    const drawScene2 = (t: number) => {
      const w = canvas.width;
      const h = canvas.height;
      ctx.clearRect(0, 0, w, h);
      ctx.fillStyle = "#FAFAF8";
      ctx.fillRect(0, 0, w, h);

      nodes.forEach(n => {
        n.x += n.vx; n.y += n.vy;
        if (n.x < 0 || n.x > w) n.vx *= -1;
        if (n.y < 0 || n.y > h) n.vy *= -1;
      });

      // Connections
      nodes.forEach((n1, i) => {
        nodes.slice(i + 1).forEach(n2 => {
          const d = Math.hypot(n1.x - n2.x, n1.y - n2.y);
          if (d < 180) {
            ctx.beginPath();
            ctx.moveTo(n1.x, n1.y);
            ctx.lineTo(n2.x, n2.y);
            ctx.strokeStyle = `rgba(27,45,91,${0.08 * (1 - d / 180)})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        });
      });

      // Nodes
      nodes.forEach((n, i) => {
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fillStyle = i % 3 === 0 ? "rgba(232,68,10,0.2)" : "rgba(27,45,91,0.12)";
        ctx.fill();
      });

      // Pulse rings on some nodes
      nodes.filter((_, i) => i % 7 === 0).forEach(n => {
        const pulseR = n.r + 10 + Math.sin(t * 0.003) * 8;
        ctx.beginPath();
        ctx.arc(n.x, n.y, pulseR, 0, Math.PI * 2);
        ctx.strokeStyle = "rgba(232,68,10,0.08)";
        ctx.lineWidth = 1.5;
        ctx.stroke();
      });
    };

    // ============================================
    // SCENE 3 — Floating Social Cards (Influencer)
    // ============================================
    const drawScene3 = (t: number) => {
      const w = canvas.width;
      const h = canvas.height;
      ctx.clearRect(0, 0, w, h);
      ctx.fillStyle = "#FAFAF8";
      ctx.fillRect(0, 0, w, h);

      const cards = [
        { x: w * 0.1, y: h * 0.15, label: "3M+ Views", offset: 0 },
        { x: w * 0.75, y: h * 0.1, label: "+310% Engagement", offset: 1 },
        { x: w * 0.05, y: h * 0.6, label: "50+ Creators", offset: 2 },
        { x: w * 0.8, y: h * 0.65, label: "97% Retention", offset: 3 },
        { x: w * 0.4, y: h * 0.08, label: "$6M+ Managed", offset: 4 },
      ];

      cards.forEach(card => {
        const floatY = Math.sin(t * 0.001 + card.offset * 1.2) * 12;
        const cx = card.x;
        const cy = card.y + floatY;
        const cw = 180;
        const ch = 60;

        // Card shadow
        ctx.shadowColor = "rgba(27,45,91,0.08)";
        ctx.shadowBlur = 20;
        ctx.shadowOffsetY = 8;

        // Card background
        ctx.fillStyle = "rgba(255,255,255,0.85)";
        ctx.beginPath();
        ctx.roundRect(cx, cy, cw, ch, 12);
        ctx.fill();

        // Left accent bar
        ctx.shadowBlur = 0;
        ctx.fillStyle = "#E8440A";
        ctx.beginPath();
        ctx.roundRect(cx, cy, 4, ch, [12, 0, 0, 12]);
        ctx.fill();

        // Card text
        ctx.fillStyle = "#1B2D5B";
        ctx.font = "bold 14px DM Sans, sans-serif";
        ctx.fillText(card.label, cx + 16, cy + 36);

        ctx.shadowColor = "transparent";
      });

      // Background dots
      for (let i = 0; i < 30; i++) {
        const x = (i * 137) % w;
        const y = (i * 97) % h;
        ctx.beginPath();
        ctx.arc(x, y, 2, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(27,45,91,0.06)";
        ctx.fill();
      }
    };

    // ============================================
    // SCENE 4 — City Skyline (360° Agency)
    // ============================================
    const drawScene4 = (t: number) => {
      const w = canvas.width;
      const h = canvas.height;
      ctx.clearRect(0, 0, w, h);

      // Sky gradient
      const sky = ctx.createLinearGradient(0, 0, 0, h);
      sky.addColorStop(0, "#FAFAF8");
      sky.addColorStop(0.6, "#F2EFE9");
      sky.addColorStop(1, "#E8E4DC");
      ctx.fillStyle = sky;
      ctx.fillRect(0, 0, w, h);

      // Buildings
      const buildings = [
        { x: 0.05, w: 0.06, h: 0.35 }, { x: 0.12, w: 0.04, h: 0.5 },
        { x: 0.17, w: 0.07, h: 0.4 }, { x: 0.25, w: 0.05, h: 0.6 },
        { x: 0.31, w: 0.08, h: 0.45 }, { x: 0.4, w: 0.06, h: 0.7 },
        { x: 0.47, w: 0.09, h: 0.55 }, { x: 0.57, w: 0.05, h: 0.65 },
        { x: 0.63, w: 0.07, h: 0.42 }, { x: 0.71, w: 0.06, h: 0.58 },
        { x: 0.78, w: 0.08, h: 0.38 }, { x: 0.87, w: 0.05, h: 0.48 },
        { x: 0.93, w: 0.07, h: 0.32 },
      ];

      buildings.forEach((b, i) => {
        const bx = b.x * w;
        const bw = b.w * w;
        const bh = b.h * h * 0.7;
        const by = h - bh;

        // Building body
        ctx.fillStyle = i % 3 === 0
          ? "rgba(27,45,91,0.12)"
          : i % 3 === 1
          ? "rgba(27,45,91,0.08)"
          : "rgba(27,45,91,0.06)";
        ctx.fillRect(bx, by, bw, bh);

        // Windows
        const floors = Math.floor(bh / 20);
        for (let f = 0; f < floors; f++) {
          for (let c = 0; c < 2; c++) {
            if (Math.sin(i * 7 + f * 3 + c * 11 + t * 0.0005) > 0.2) {
              ctx.fillStyle = "rgba(232,68,10,0.15)";
              ctx.fillRect(bx + 4 + c * (bw / 2 - 4), by + 6 + f * 20, bw / 2 - 8, 10);
            }
          }
        }
      });

      // Orange glow on horizon
      const glow = ctx.createRadialGradient(w / 2, h, 0, w / 2, h, w * 0.6);
      glow.addColorStop(0, "rgba(232,68,10,0.06)");
      glow.addColorStop(1, "rgba(232,68,10,0)");
      ctx.fillStyle = glow;
      ctx.fillRect(0, 0, w, h);
    };

    // ============================================
    // SCENE 5 — Data Stream (Performance)
    // ============================================
    const streamParticles: { x: number; y: number; speed: number; size: number; color: string }[] = [];
    for (let i = 0; i < 60; i++) {
      streamParticles.push({
        x: Math.random() * (typeof window !== "undefined" ? window.innerWidth : 1200),
        y: Math.random() * (typeof window !== "undefined" ? window.innerHeight : 800),
        speed: Math.random() * 2 + 0.5,
        size: Math.random() * 3 + 1,
        color: Math.random() > 0.5 ? "232,68,10" : "27,45,91"
      });
    }

    const drawScene5 = (t: number) => {
      const w = canvas.width;
      const h = canvas.height;
      ctx.clearRect(0, 0, w, h);
      ctx.fillStyle = "#FAFAF8";
      ctx.fillRect(0, 0, w, h);

      // Diagonal streams
      streamParticles.forEach(p => {
        p.y += p.speed;
        p.x += p.speed * 0.3;
        if (p.y > h) { p.y = -10; p.x = Math.random() * w; }

        // Trail
        const grad = ctx.createLinearGradient(p.x, p.y - 30, p.x, p.y);
        grad.addColorStop(0, `rgba(${p.color},0)`);
        grad.addColorStop(1, `rgba(${p.color},0.15)`);
        ctx.strokeStyle = grad;
        ctx.lineWidth = p.size;
        ctx.beginPath();
        ctx.moveTo(p.x, p.y - 30);
        ctx.lineTo(p.x, p.y);
        ctx.stroke();

        // Dot
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size / 2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.color},0.2)`;
        ctx.fill();
      });

      // Circular data rings
      [0.25, 0.5, 0.75].forEach((cx, i) => {
        const r = 60 + i * 40;
        const angle = t * 0.001 * (i % 2 === 0 ? 1 : -1);
        ctx.beginPath();
        ctx.arc(cx * w, h * 0.5, r, angle, angle + Math.PI * 1.5);
        ctx.strokeStyle = `rgba(232,68,10,${0.06 - i * 0.015})`;
        ctx.lineWidth = 1.5;
        ctx.stroke();
      });
    };

    const scenes = [drawScene1, drawScene2, drawScene3, drawScene4, drawScene5];
    let sceneIndex = 0;
    let lastSwitch = 0;
    let fadingOut = false;
    let fadeStart = 0;
    let globalOpacity = 1;

    const draw = (timestamp: number) => {
      timeRef.current = timestamp;

      // Handle scene switching with fade
      if (!lastSwitch) lastSwitch = timestamp;
      const elapsed = timestamp - lastSwitch;

      if (!fadingOut && elapsed > SLIDE_DURATION - FADE_DURATION) {
        fadingOut = true;
        fadeStart = timestamp;
      }

      if (fadingOut) {
        const fadeElapsed = timestamp - fadeStart;
        if (fadeElapsed < FADE_DURATION / 2) {
          globalOpacity = 1 - (fadeElapsed / (FADE_DURATION / 2));
        } else if (fadeElapsed >= FADE_DURATION / 2 && fadeElapsed < FADE_DURATION) {
          if (globalOpacity <= 0.05) {
            sceneIndex = (sceneIndex + 1) % scenes.length;
            setCurrentScene(sceneIndex);
          }
          globalOpacity = (fadeElapsed - FADE_DURATION / 2) / (FADE_DURATION / 2);
        } else {
          globalOpacity = 1;
          fadingOut = false;
          lastSwitch = timestamp;
        }
      }

      canvas.style.opacity = String(Math.max(0, Math.min(1, globalOpacity)));
      scenes[sceneIndex](timestamp);

      animRef.current = requestAnimationFrame(draw);
    };

    animRef.current = requestAnimationFrame(draw);

    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />
      {/* Scene indicator dots */}
      <div style={{
        position: "absolute",
        bottom: "24px",
        left: "50%",
        transform: "translateX(-50%)",
        display: "flex",
        gap: "8px",
        zIndex: 2
      }}>
        {[0,1,2,3,4].map(i => (
          <div key={i} style={{
            width: i === currentScene ? "24px" : "8px",
            height: "8px",
            borderRadius: "4px",
            background: i === currentScene ? "#E8440A" : "rgba(27,45,91,0.2)",
            transition: "all 0.4s ease"
          }}/>
        ))}
      </div>
    </>
  );
}
