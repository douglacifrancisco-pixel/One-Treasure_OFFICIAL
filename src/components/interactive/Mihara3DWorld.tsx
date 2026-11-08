"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { 
  Compass, 
  MapPin, 
  Eye, 
  Maximize2, 
  ChevronRight, 
  Shield, 
  Beer, 
  Landmark, 
  Coins, 
  BookOpen, 
  Skull, 
  Volume2, 
  VolumeX,
  Sparkles
} from "lucide-react";

interface Building3D {
  id: string;
  name: string;
  subtitle: string;
  x: number;
  z: number;
  width: number;
  depth: number;
  height: number;
  color: string;
  roofColor: string;
  href: string;
  icon: string;
  glow: string;
  description: string;
  banner: string;
}

export default function Mihara3DWorld() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [selectedBuilding, setSelectedBuilding] = useState<Building3D | null>(null);
  const [cameraAngle, setCameraAngle] = useState(0.45);
  const [cameraZoom, setCameraZoom] = useState(1);
  const [isRotating, setIsRotating] = useState(true);

  // Lista dos edifícios monumentais da capital Mihara
  const buildings: Building3D[] = [
    {
      id: "guild",
      name: "Guilda de Ferro",
      subtitle: "Quartel de Caçadas e Contratos",
      x: -160,
      z: -60,
      width: 75,
      depth: 70,
      height: 95,
      color: "#1a2c3d",
      roofColor: "#D7A83E",
      href: "/guilda",
      icon: "Shield",
      glow: "rgba(215, 168, 62, 0.5)",
      description: "Onde guerreiros e sábios aceitam missões canônicas, ganham ouro e sobem seus Ranks de aventureiro.",
      banner: "RANK F -> S"
    },
    {
      id: "tavern",
      name: "Taberna do Corvo Torto",
      subtitle: "Bebidas, Sussurros e Teorias",
      x: 160,
      z: -50,
      width: 80,
      depth: 65,
      height: 75,
      color: "#2c1c11",
      roofColor: "#e67e22",
      href: "/taberna",
      icon: "Beer",
      glow: "rgba(230, 126, 34, 0.5)",
      description: "Fogueira crepitando, hidromel na caneca e um quadro aberto para teorizar sobre o mundo com outros leitores.",
      banner: "CHAT AO VIVO"
    },
    {
      id: "townhall",
      name: "Prefeitura Real",
      subtitle: "Cartório & Registro de Autores",
      x: -130,
      z: 140,
      width: 90,
      depth: 80,
      height: 110,
      color: "#243342",
      roofColor: "#f39c12",
      href: "/prefeitura",
      icon: "Landmark",
      glow: "rgba(243, 156, 18, 0.5)",
      description: "Submeta seus próprios manuscritos de light novels para avaliação e receba contato direto do Conselho.",
      banner: "REGISTRO DE OBRAS"
    },
    {
      id: "market",
      name: "Mercado das Relíquias",
      subtitle: "Bazar de Câmbio & Moedas",
      x: 140,
      z: 130,
      width: 85,
      depth: 70,
      height: 70,
      color: "#1c2b22",
      roofColor: "#27ae60",
      href: "/guilda",
      icon: "Coins",
      glow: "rgba(39, 174, 96, 0.5)",
      description: "Compre moedas de ouro para patrocinar autores e desbloquear acessos canônicos antecipados.",
      banner: "M-PESA / COINS"
    },
    {
      id: "thassalar_portal",
      name: "Portal de Thassalar",
      subtitle: "Ala Proibida de One Treasure",
      x: 0,
      z: -200,
      width: 100,
      depth: 60,
      height: 130,
      color: "#421217",
      roofColor: "#c0392b",
      href: "/thassalar",
      icon: "Skull",
      glow: "rgba(192, 57, 43, 0.7)",
      description: "O portal que leva ao oceano proibido da Broken Line e à história de Denotas (Arquivo 0 e Volume 1).",
      banner: "SANTUÁRIO RESTRIÇÃO TOTAL"
    },
    {
      id: "library",
      name: "Grande Biblioteca",
      subtitle: "Acervo de Todas as Crônicas",
      x: 0,
      z: 220,
      width: 110,
      depth: 75,
      height: 100,
      color: "#1e1e38",
      roofColor: "#8e44ad",
      href: "/volumes",
      icon: "BookOpen",
      glow: "rgba(142, 68, 173, 0.5)",
      description: "Corredores infinitos de estantes de carvalho guardando tomos, pistas, mapas e árvores de personagens.",
      banner: "TODOS OS VOLUMES"
    }
  ];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 900);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 560);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };
    window.addEventListener("resize", handleResize);

    // Sistema de projeção isométrica 3D em perspectiva real
    const project = (x: number, y: number, z: number, angle: number) => {
      // Rotação Y
      const cos = Math.cos(angle);
      const sin = Math.sin(angle);
      const rx = x * cos - z * sin;
      const rz = x * sin + z * cos;

      // Perspectiva 3D com câmera inclinada
      const pitchCos = Math.cos(0.55); // Inclinação da câmera
      const pitchSin = Math.sin(0.55);
      const py = y * pitchCos - rz * pitchSin;
      const pz = y * pitchSin + rz * pitchCos + 520; // Distância do observador

      const fov = 480 * cameraZoom;
      const screenX = width / 2 + (rx * fov) / pz;
      const screenY = height / 2 + 30 + (py * fov) / pz;

      return { x: screenX, y: screenY, depth: pz };
    };

    let currentAngle = cameraAngle;

    // Render loop a 60 FPS
    const render = () => {
      if (isRotating) {
        currentAngle += 0.0035;
      }

      ctx.clearRect(0, 0, width, height);

      // Céu Noturno / Atmosfera Arcana da Capital
      const skyGrad = ctx.createRadialGradient(
        width / 2,
        height * 0.35,
        20,
        width / 2,
        height * 0.5,
        width * 0.8
      );
      skyGrad.addColorStop(0, "#0c283d");
      skyGrad.addColorStop(0.4, "#061522");
      skyGrad.addColorStop(1, "#02070b");
      ctx.fillStyle = skyGrad;
      ctx.fillRect(0, 0, width, height);

      // Chão de Pedra Circular de Mihara (A Grande Praça Arcana)
      const plazaPoints: { x: number; y: number }[] = [];
      const plazaRadius = 320;
      const segments = 36;
      for (let i = 0; i < segments; i++) {
        const theta = (i / segments) * Math.PI * 2;
        const px = Math.cos(theta) * plazaRadius;
        const pz = Math.sin(theta) * plazaRadius;
        plazaPoints.push(project(px, 0, pz, currentAngle));
      }

      ctx.beginPath();
      plazaPoints.forEach((pt, i) => {
        if (i === 0) ctx.moveTo(pt.x, pt.y);
        else ctx.lineTo(pt.x, pt.y);
      });
      ctx.closePath();
      ctx.fillStyle = "rgba(10, 22, 34, 0.95)";
      ctx.fill();
      ctx.strokeStyle = "rgba(215, 168, 62, 0.35)";
      ctx.lineWidth = 2;
      ctx.stroke();

      // Círculo Rúnico Dourado no Centro
      const runeRadius = 70;
      ctx.beginPath();
      for (let i = 0; i <= 24; i++) {
        const theta = (i / 24) * Math.PI * 2;
        const pt = project(Math.cos(theta) * runeRadius, 0, Math.sin(theta) * runeRadius, currentAngle);
        if (i === 0) ctx.moveTo(pt.x, pt.y);
        else ctx.lineTo(pt.x, pt.y);
      }
      ctx.strokeStyle = "rgba(215, 168, 62, 0.7)";
      ctx.lineWidth = 1.5;
      ctx.stroke();

      // Obelisco / Fonte de Luz Central em Mihara
      const obeliskBase = project(0, 0, 0, currentAngle);
      const obeliskTip = project(0, -60, 0, currentAngle);
      ctx.beginPath();
      ctx.moveTo(obeliskBase.x, obeliskBase.y);
      ctx.lineTo(obeliskTip.x, obeliskTip.y);
      ctx.strokeStyle = "rgba(244, 215, 122, 0.8)";
      ctx.lineWidth = 4;
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(obeliskTip.x, obeliskTip.y, 6, 0, Math.PI * 2);
      ctx.fillStyle = "#F4D77A";
      ctx.shadowBlur = 15;
      ctx.shadowColor = "#D7A83E";
      ctx.fill();
      ctx.shadowBlur = 0;

      // Ordenar edifícios por profundidade para renderizar o que está atrás primeiro (Painter's Algorithm)
      const sortedBuildings = [...buildings].map((b) => {
        const center = project(b.x, 0, b.z, currentAngle);
        return { ...b, projDepth: center.depth, center };
      }).sort((a, b) => b.projDepth - a.projDepth);

      // Renderizar cada edifício 3D (Cubo volumétrico com teto chanfrado)
      sortedBuildings.forEach((b) => {
        const hw = b.width / 2;
        const hd = b.depth / 2;
        const h = b.height;

        // 8 vértices do bloco do edifício
        const b00 = project(b.x - hw, 0, b.z - hd, currentAngle);
        const b10 = project(b.x + hw, 0, b.z - hd, currentAngle);
        const b11 = project(b.x + hw, 0, b.z + hd, currentAngle);
        const b01 = project(b.x - hw, 0, b.z + hd, currentAngle);

        const t00 = project(b.x - hw, -h, b.z - hd, currentAngle);
        const t10 = project(b.x + hw, -h, b.z - hd, currentAngle);
        const t11 = project(b.x + hw, -h, b.z + hd, currentAngle);
        const t01 = project(b.x - hw, -h, b.z + hd, currentAngle);

        // Pico do telhado
        const roofPeak = project(b.x, -h - 25, b.z, currentAngle);

        // Paredes
        const drawFace = (pts: { x: number; y: number }[], fillColor: string, strokeColor = "rgba(0,0,0,0.5)") => {
          ctx.beginPath();
          pts.forEach((pt, i) => (i === 0 ? ctx.moveTo(pt.x, pt.y) : ctx.lineTo(pt.x, pt.y)));
          ctx.closePath();
          ctx.fillStyle = fillColor;
          ctx.fill();
          ctx.strokeStyle = strokeColor;
          ctx.lineWidth = 1;
          ctx.stroke();
        };

        // Parede Frente/Trás/Laterais
        drawFace([b01, b11, t11, t01], b.color);
        drawFace([b11, b10, t10, t11], b.color);
        drawFace([b00, b10, t10, t00], "rgba(10, 15, 20, 0.8)");
        drawFace([b00, b01, t01, t00], "rgba(10, 15, 20, 0.8)");

        // Telhado (Telhas Medievais)
        drawFace([t01, t11, roofPeak], b.roofColor);
        drawFace([t11, t10, roofPeak], b.roofColor);
        drawFace([t10, t00, roofPeak], "rgba(0,0,0,0.3)");
        drawFace([t00, t01, roofPeak], "rgba(0,0,0,0.4)");

        // Efeito de Brilho / Aura do Edifício
        const isSelected = selectedBuilding?.id === b.id;
        ctx.beginPath();
        ctx.arc(roofPeak.x, roofPeak.y - 12, isSelected ? 8 : 4, 0, Math.PI * 2);
        ctx.fillStyle = isSelected ? "#F4D77A" : b.roofColor;
        ctx.shadowBlur = isSelected ? 20 : 10;
        ctx.shadowColor = b.glow;
        ctx.fill();
        ctx.shadowBlur = 0;

        // Banner flutuante com nome do local
        ctx.font = "bold 11px system-ui, sans-serif";
        ctx.fillStyle = isSelected ? "#F4D77A" : "#FFFFFF";
        ctx.textAlign = "center";
        ctx.fillText(b.name, roofPeak.x, roofPeak.y - 22);

        ctx.font = "8px system-ui, sans-serif";
        ctx.fillStyle = "rgba(215, 168, 62, 0.85)";
        ctx.fillText(b.banner, roofPeak.x, roofPeak.y - 33);
      });

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animId);
    };
  }, [cameraAngle, cameraZoom, isRotating, selectedBuilding]);

  return (
    <div className="relative w-full rounded-xl border-2 border-[#D7A83E]/40 bg-[#02070B] overflow-hidden shadow-2xl">
      {/* HUD Superior de Controles 3D */}
      <div className="absolute top-4 left-4 right-4 z-20 flex flex-wrap items-center justify-between gap-3 pointer-events-none">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#03070B]/90 border border-[#D7A83E]/40 backdrop-blur-md pointer-events-auto">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs font-ui font-semibold text-[#F4D77A]">
            Mundo 3D em Tempo Real • Capital Mihara
          </span>
        </div>

        <div className="flex items-center gap-2 pointer-events-auto">
          <button
            onClick={() => setIsRotating(!isRotating)}
            className="px-3 py-1.5 rounded bg-[#071522]/90 border border-[#D7A83E]/30 text-xs font-ui text-[#D7A83E] hover:border-[#D7A83E] transition-all"
          >
            {isRotating ? "Pausar Giro" : "Girar Mundo"}
          </button>
          <button
            onClick={() => setCameraZoom((z) => (z >= 1.3 ? 0.85 : z + 0.15))}
            className="px-3 py-1.5 rounded bg-[#071522]/90 border border-[#D7A83E]/30 text-xs font-ui text-[#D7A83E] hover:border-[#D7A83E] transition-all"
          >
            Zoom ({cameraZoom.toFixed(1)}x)
          </button>
        </div>
      </div>

      {/* Canvas 3D */}
      <div className="relative w-full h-[540px]">
        <canvas ref={canvasRef} className="w-full h-full block cursor-grab active:cursor-grabbing" />
      </div>

      {/* Seletor Rápido de Locais no Chão do HUD */}
      <div className="p-4 bg-[#071522]/95 border-t border-[#D7A83E]/30 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
        {buildings.map((b) => (
          <button
            key={b.id}
            onClick={() => setSelectedBuilding(b)}
            className={`p-2.5 rounded text-left transition-all border ${
              selectedBuilding?.id === b.id
                ? "bg-[#D7A83E]/20 border-[#D7A83E] shadow-md shadow-[#D7A83E]/20"
                : "bg-[#03070B]/60 border-[#D7A83E]/15 hover:border-[#D7A83E]/40"
            }`}
          >
            <span className="text-[10px] font-ui font-bold text-[#D7A83E] block truncate">
              {b.banner}
            </span>
            <span className="text-xs font-serif font-bold text-[#F4D77A] block truncate">
              {b.name}
            </span>
          </button>
        ))}
      </div>

      {/* Card Flutuante de Informação do Local Selecionado */}
      {selectedBuilding && (
        <div className="p-5 bg-gradient-to-r from-[#03070B] to-[#071522] border-t border-[#D7A83E]/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 animate-fadeIn">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2 py-0.5 rounded bg-[#D7A83E]/20 text-[#D7A83E] text-[10px] font-ui font-bold">
                DESTINO SELECIONADO
              </span>
              <span className="text-xs font-ui text-[rgba(242,233,208,0.5)]">
                {selectedBuilding.subtitle}
              </span>
            </div>
            <h4 className="font-serif text-xl font-bold text-[#F4D77A]">
              {selectedBuilding.name}
            </h4>
            <p className="font-serif italic text-xs text-[rgba(242,233,208,0.8)] mt-1 max-w-xl">
              {selectedBuilding.description}
            </p>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
            <button
              onClick={() => setSelectedBuilding(null)}
              className="px-3 py-2 text-xs font-ui text-[rgba(242,233,208,0.6)] hover:text-white"
            >
              Fechar
            </button>
            <Link
              href={selectedBuilding.href}
              className="px-5 py-2.5 rounded bg-[#D7A83E] hover:bg-[#B8860B] text-[#03070B] text-xs font-ui font-bold transition-all shadow flex items-center gap-1.5 whitespace-nowrap"
            >
              <span>Entrar no Edifício</span>
              <ChevronRight size={14} />
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
