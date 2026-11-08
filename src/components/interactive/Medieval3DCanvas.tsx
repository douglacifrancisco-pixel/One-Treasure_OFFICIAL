"use client";

import { useEffect, useRef } from "react";

interface CanvasProps {
  atmosphere?: "mihara" | "thassalar" | "tavern";
}

export default function Medieval3DCanvas({ atmosphere = "mihara" }: CanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 450);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };
    window.addEventListener("resize", handleResize);

    // Partículas de Magia / Poeira Mística / Tochas Medievais
    const particleCount = atmosphere === "thassalar" ? 80 : 50;
    const particles = Array.from({ length: particleCount }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 2.5 + 0.8,
      speedX: (Math.random() - 0.5) * 0.4,
      speedY: -Math.random() * 0.6 - 0.2,
      opacity: Math.random() * 0.7 + 0.2,
      pulse: Math.random() * 0.05,
    }));

    const render = (time: number) => {
      ctx.clearRect(0, 0, width, height);

      // Efeito de Fundo Atmosférico 3D com Degradê Profundo
      const gradient = ctx.createRadialGradient(
        width / 2,
        height * 0.4,
        50,
        width / 2,
        height * 0.5,
        width * 0.75
      );

      if (atmosphere === "thassalar") {
        gradient.addColorStop(0, "rgba(143, 29, 44, 0.22)");
        gradient.addColorStop(0.5, "rgba(7, 21, 34, 0.6)");
        gradient.addColorStop(1, "rgba(3, 7, 11, 0.95)");
      } else if (atmosphere === "tavern") {
        gradient.addColorStop(0, "rgba(215, 168, 62, 0.25)");
        gradient.addColorStop(0.6, "rgba(18, 12, 6, 0.7)");
        gradient.addColorStop(1, "rgba(5, 3, 2, 0.95)");
      } else {
        // Mihara (Ouro e Azul Arcana)
        gradient.addColorStop(0, "rgba(12, 53, 80, 0.45)");
        gradient.addColorStop(0.4, "rgba(215, 168, 62, 0.12)");
        gradient.addColorStop(1, "rgba(3, 7, 11, 0.95)");
      }

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      // Grid Isométrico de Pedra Medieval em Perspectiva 3D
      ctx.save();
      ctx.strokeStyle = atmosphere === "thassalar" ? "rgba(143, 29, 44, 0.12)" : "rgba(215, 168, 62, 0.1)";
      ctx.lineWidth = 1;

      const horizon = height * 0.45;
      const step = 45;

      // Linhas de perspectiva (Ruas de Mihara convergindo ao horizonte)
      for (let x = -width; x < width * 2; x += step * 2) {
        ctx.beginPath();
        ctx.moveTo(x, height);
        ctx.lineTo(width / 2 + (x - width / 2) * 0.15, horizon);
        ctx.stroke();
      }

      // Linhas horizontais com profundidade
      for (let y = horizon; y <= height; y += (y - horizon + 10) * 0.28) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }
      ctx.restore();

      // Partículas em Suspensão (Ember / Brilho Místico)
      particles.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;

        if (p.y < 0) {
          p.y = height;
          p.x = Math.random() * width;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);

        if (atmosphere === "thassalar") {
          ctx.fillStyle = `rgba(220, 60, 60, ${p.opacity})`;
        } else if (atmosphere === "tavern") {
          ctx.fillStyle = `rgba(244, 215, 122, ${p.opacity})`;
        } else {
          ctx.fillStyle = `rgba(215, 168, 62, ${p.opacity})`;
        }

        ctx.shadowBlur = 8;
        ctx.shadowColor = atmosphere === "thassalar" ? "#8F1D2C" : "#D7A83E";
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [atmosphere]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
    />
  );
}
