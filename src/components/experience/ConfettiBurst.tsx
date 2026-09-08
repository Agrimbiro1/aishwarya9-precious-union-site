import { useEffect, useRef } from "react";

// Design token palette (maroon, blush, cream, warm gold)
const PALETTE = [
  "oklch(0.39 0.147 26.5)",  // deep maroon (--accent-primary)
  "oklch(0.694 0.069 15.4)", // muted blush (--accent-secondary)
  "oklch(0.99 0.008 84)",    // cream/off-white (--surface)
  "oklch(0.82 0.11 80)",     // warm gold (tieback gold)
];

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  gravity: number;
  drag: number;
  rotation: number;
  rotationSpeed: number;
  wobble: number;
  wobbleSpeed: number;
  type: "ribbon" | "petal";
  color: string;
  width: number;
  height: number;
  life: number;
  maxLife: number;
}

export function ConfettiBurst({ active }: { active: boolean }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const hasFiredRef = useRef(false);

  useEffect(() => {
    if (!active || hasFiredRef.current) return;

    // Skip entirely if user prefers reduced motion
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    hasFiredRef.current = true;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let width = 0;
    let height = 0;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      width = rect.width;
      height = rect.height;
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
    };

    resize();
    const resizeObserver = new ResizeObserver(() => resize());
    resizeObserver.observe(canvas);

    // 180 micro confetti particles originating across the top curtain seam
    const particleCount = 180;
    const particles: Particle[] = [];
    const originX = width * 0.5;
    const originY = height * 0.18;

    for (let i = 0; i < particleCount; i++) {
      const isRibbon = Math.random() < 0.6; // 60% micro ribbons, 40% mini dots/petals
      const color = PALETTE[Math.floor(Math.random() * PALETTE.length)] ?? "oklch(0.39 0.147 26.5)";
      const maxLife = 110 + Math.random() * 50; // ~1.8s - 2.7s

      const angle = (Math.random() - 0.5) * Math.PI * 1.1; // wider arc spread
      const speed = 2.0 + Math.random() * 5.5;
      const vx = Math.sin(angle) * speed + (Math.random() - 0.5) * 1.5;
      const vy = -Math.cos(angle) * speed * 0.35 - Math.random() * 2.2;

      particles.push({
        x: originX + (Math.random() - 0.5) * (width * 0.65), // natural horizontal burst distribution
        y: originY + (Math.random() - 0.5) * 30,
        vx,
        vy,
        gravity: 0.05 + Math.random() * 0.05,
        drag: 0.984,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.16,
        wobble: Math.random() * Math.PI * 2,
        wobbleSpeed: 0.06 + Math.random() * 0.1,
        type: isRibbon ? "ribbon" : "petal",
        color,
        width: isRibbon ? 1.6 + Math.random() * 1.2 : 1.4 + Math.random() * 1.0,
        height: isRibbon ? 4.5 + Math.random() * 3.5 : 2.0 + Math.random() * 1.5,
        life: 0,
        maxLife,
      });
    }

    let activeParticlesCount = particles.length;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      activeParticlesCount = 0;

      for (const p of particles) {
        if (p.life >= p.maxLife) continue;

        p.life++;
        activeParticlesCount++;

        // Particle physics
        p.vx *= p.drag;
        p.vy = (p.vy + p.gravity) * p.drag;
        p.x += p.vx;
        p.y += p.vy;
        p.rotation += p.rotationSpeed;
        p.wobble += p.wobbleSpeed;

        // Smooth fade out over last 30% of lifetime
        const fadeStart = p.maxLife * 0.7;
        let alpha = 1;
        if (p.life > fadeStart) {
          alpha = Math.max(0, (p.maxLife - p.life) / (p.maxLife - fadeStart));
        }

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);
        ctx.globalAlpha = alpha;
        ctx.fillStyle = p.color;

        if (p.type === "ribbon") {
          const scaleX = Math.cos(p.wobble);
          ctx.scale(scaleX, 1);
          ctx.fillRect(-p.width / 2, -p.height / 2, p.width, p.height);
        } else {
          ctx.beginPath();
          ctx.ellipse(0, 0, p.width, p.height, 0, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.restore();
      }

      if (activeParticlesCount > 0) {
        animId = requestAnimationFrame(render);
      } else {
        ctx.clearRect(0, 0, width, height);
      }
    };

    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
      resizeObserver.disconnect();
      if (ctx) ctx.clearRect(0, 0, width, height);
    };
  }, [active]);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 z-25 h-full w-full"
      aria-hidden="true"
    />
  );
}
