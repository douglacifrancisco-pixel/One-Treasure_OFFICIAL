"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { 
  Compass, 
  MapPin, 
  Shield, 
  Beer, 
  Landmark, 
  Coins, 
  BookOpen, 
  Skull, 
  ArrowUp, 
  ArrowDown, 
  ArrowLeft, 
  ArrowRight,
  Maximize2,
  X,
  Volume2
} from "lucide-react";

interface BuildingZone {
  id: string;
  name: string;
  subtitle: string;
  x: number;
  z: number;
  radius: number;
  color: string;
  roofColor: string;
  href: string;
  doorDirection: "N" | "S" | "E" | "W";
  banner: string;
  description: string;
  interiorType: "tavern" | "guild" | "townhall" | "portal";
}

export default function MiharaMMORPGWorld() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Estado do Jogador
  const [playerPos, setPlayerPos] = useState({ x: 0, z: 40 });
  const [playerRot, setPlayerRot] = useState(0);
  const [nearBuilding, setNearBuilding] = useState<BuildingZone | null>(null);
  const [inInterior, setInInterior] = useState<BuildingZone | null>(null);
  const [moedas, setMoedas] = useState(120);

  // Zonas e Casas de Mihara
  const buildings: BuildingZone[] = [
    {
      id: "tavern",
      name: "Taberna do Corvo Torto",
      subtitle: "Bebidas, Hidromel e Sussurros",
      x: 140,
      z: -40,
      radius: 45,
      color: "#2b180d",
      roofColor: "#d35400",
      href: "/taberna",
      doorDirection: "W",
      banner: "ENTRADA LIVRE",
      description: "Uma taberna aconchegante com fogueira, canecas de madeira e o mural de fofocas de Mihara.",
      interiorType: "tavern"
    },
    {
      id: "guild",
      name: "Guilda de Ferro",
      subtitle: "Quartel de Caçadas e Contratos",
      x: -140,
      z: -40,
      radius: 50,
      color: "#162330",
      roofColor: "#D7A83E",
      href: "/guilda",
      doorDirection: "E",
      banner: "MURAL DE QUESTS",
      description: "Onde guerreiros registram caçadas e sobem de Rank F para Rank S.",
      interiorType: "guild"
    },
    {
      id: "townhall",
      name: "Prefeitura Real de Mihara",
      subtitle: "Cartório & Registro de Autores",
      x: -120,
      z: 130,
      radius: 55,
      color: "#1f2937",
      roofColor: "#eab308",
      href: "/prefeitura",
      doorDirection: "N",
      banner: "SUBMETER NOVEL",
      description: "A sede burocrática onde novos escritores registram manuscritos canônicos.",
      interiorType: "townhall"
    },
    {
      id: "thassalar_gate",
      name: "Portal do Mar de Thassalar",
      subtitle: "Santuário de One Treasure",
      x: 0,
      z: -180,
      radius: 40,
      color: "#450a0a",
      roofColor: "#dc2626",
      href: "/thassalar",
      doorDirection: "S",
      banner: "ZONA S-RANK PERIGO",
      description: "O portal de ferro ancestral que conecta a capital ao Mar Antigo de Denotas e ao Arquivo 0.",
      interiorType: "portal"
    }
  ];

  // Teclas Pressionadas
  const keysPressed = useRef<{ [key: string]: boolean }>({});

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      keysPressed.current[e.key.toLowerCase()] = true;
      if (e.key === "e" || e.key === "E") {
        if (nearBuilding && !inInterior) {
          setInInterior(nearBuilding);
        }
      }
      if (e.key === "Escape") {
        setInInterior(null);
      }
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      keysPressed.current[e.key.toLowerCase()] = false;
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [nearBuilding, inInterior]);

  // Game Loop de Movimentação e Renderização 3D em Perspectiva Real
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

    let px = playerPos.x;
    let pz = playerPos.z;
    let prot = playerRot;

    const render = () => {
      // 1. Processar Entrada do Jogador se estiver na Rua (Não no interior)
      if (!inInterior) {
        const speed = keysPressed.current["shift"] ? 3.6 : 2.2;
        let moving = false;

        if (keysPressed.current["w"] || keysPressed.current["arrowup"]) {
          px += Math.sin(prot) * speed;
          pz += Math.cos(prot) * speed;
          moving = true;
        }
        if (keysPressed.current["s"] || keysPressed.current["arrowdown"]) {
          px -= Math.sin(prot) * speed;
          pz -= Math.cos(prot) * speed;
          moving = true;
        }
        if (keysPressed.current["a"] || keysPressed.current["arrowleft"]) {
          prot -= 0.045;
        }
        if (keysPressed.current["d"] || keysPressed.current["arrowright"]) {
          prot += 0.045;
        }

        // Limites da Praça Central
        const distFromCenter = Math.sqrt(px * px + pz * pz);
        if (distFromCenter > 280) {
          px = (px / distFromCenter) * 280;
          pz = (pz / distFromCenter) * 280;
        }

        setPlayerPos({ x: px, z: pz });
        setPlayerRot(prot);

        // Detectar Proximidade com as Casas
        let foundZone: BuildingZone | null = null;
        for (const b of buildings) {
          const d = Math.sqrt((px - b.x) * (px - b.x) + (pz - b.z) * (pz - b.z));
          if (d < b.radius + 20) {
            foundZone = b;
            break;
          }
        }
        setNearBuilding(foundZone);
      }

      ctx.clearRect(0, 0, width, height);

      // Câmera em Terceira Pessoa: Segue o Jogador com Rotação
      const cameraDist = 130;
      const cameraHeight = 75;
      const cx = px - Math.sin(prot) * cameraDist;
      const cz = pz - Math.cos(prot) * cameraDist;
      const cy = -cameraHeight;

      const project = (wx: number, wy: number, wz: number) => {
        // Translação relativa à câmera
        const dx = wx - cx;
        const dy = wy - cy;
        const dz = wz - cz;

        // Rotação da câmera
        const cosY = Math.cos(-prot);
        const sinY = Math.sin(-prot);
        const rx = dx * cosY - dz * sinY;
        const rz = dx * sinY + dz * cosY;

        if (rz <= 5) return null; // Clipping plano frontal

        const fov = 420;
        const sx = width / 2 + (rx * fov) / rz;
        const sy = height / 2 + (dy * fov) / rz;

        return { x: sx, y: sy, depth: rz };
      };

      // Desenhar Céu Noturno Medieval e Névoa
      const skyGrad = ctx.createLinearGradient(0, 0, 0, height);
      skyGrad.addColorStop(0, "#030a12");
      skyGrad.addColorStop(0.5, "#081b2a");
      skyGrad.addColorStop(1, "#02070b");
      ctx.fillStyle = skyGrad;
      ctx.fillRect(0, 0, width, height);

      // Chão de Paralelepípedos Reais de Mihara
      const floorTile = 40;
      ctx.strokeStyle = "rgba(215, 168, 62, 0.12)";
      ctx.lineWidth = 1;

      for (let x = -280; x <= 280; x += floorTile) {
        for (let z = -280; z <= 280; z += floorTile) {
          const p1 = project(x, 0, z);
          const p2 = project(x + floorTile, 0, z);
          const p3 = project(x + floorTile, 0, z + floorTile);
          const p4 = project(x, 0, z + floorTile);

          if (p1 && p2 && p3 && p4) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.lineTo(p3.x, p3.y);
            ctx.lineTo(p4.x, p4.y);
            ctx.closePath();
            ctx.fillStyle = (Math.abs(x + z) / floorTile) % 2 === 0 ? "#07131e" : "#050e17";
            ctx.fill();
            ctx.stroke();
          }
        }
      }

      // Desenhar Casas e Monumentos 3D com Portas e Telhados Reais
      const sortedBuildings = [...buildings].sort((a, b) => {
        const da = (a.x - cx) * (a.x - cx) + (a.z - cz) * (a.z - cz);
        const db = (b.x - cx) * (b.x - cx) + (b.z - cz) * (b.z - cz);
        return db - da; // Desenha de trás para frente
      });

      sortedBuildings.forEach((b) => {
        const bw = b.radius * 1.2;
        const bd = b.radius * 1.1;
        const bh = 70;

        // Base da casa
        const b00 = project(b.x - bw / 2, 0, b.z - bd / 2);
        const b10 = project(b.x + bw / 2, 0, b.z - bd / 2);
        const b11 = project(b.x + bw / 2, 0, b.z + bd / 2);
        const b01 = project(b.x - bw / 2, 0, b.z + bd / 2);

        // Topo da parede
        const t00 = project(b.x - bw / 2, -bh, b.z - bd / 2);
        const t10 = project(b.x + bw / 2, -bh, b.z - bd / 2);
        const t11 = project(b.x + bw / 2, -bh, b.z + bd / 2);
        const t01 = project(b.x - bw / 2, -bh, b.z + bd / 2);

        // Cumeeira do Telhado
        const ridge0 = project(b.x - bw / 2, -bh - 35, b.z);
        const ridge1 = project(b.x + bw / 2, -bh - 35, b.z);

        if (b00 && b10 && b11 && b01 && t00 && t10 && t11 && t01 && ridge0 && ridge1) {
          // Parede Frontal
          ctx.beginPath();
          ctx.moveTo(b01.x, b01.y);
          ctx.lineTo(b11.x, b11.y);
          ctx.lineTo(t11.x, t11.y);
          ctx.lineTo(t01.x, t01.y);
          ctx.closePath();
          ctx.fillStyle = b.color;
          ctx.fill();
          ctx.strokeStyle = "rgba(0,0,0,0.6)";
          ctx.stroke();

          // Parede Lateral
          ctx.beginPath();
          ctx.moveTo(b11.x, b11.y);
          ctx.lineTo(b10.x, b10.y);
          ctx.lineTo(t10.x, t10.y);
          ctx.lineTo(t11.x, t11.y);
          ctx.closePath();
          ctx.fillStyle = "#111822";
          ctx.fill();
          ctx.stroke();

          // Telhado Medieval
          ctx.beginPath();
          ctx.moveTo(t01.x, t01.y);
          ctx.lineTo(t11.x, t11.y);
          ctx.lineTo(ridge1.x, ridge1.y);
          ctx.lineTo(ridge0.x, ridge0.y);
          ctx.closePath();
          ctx.fillStyle = b.roofColor;
          ctx.fill();
          ctx.stroke();

          // Placa e Luz da Porta
          const doorCenter = project(b.x, -bh - 45, b.z);
          if (doorCenter) {
            ctx.font = "bold 12px sans-serif";
            ctx.fillStyle = "#F4D77A";
            ctx.textAlign = "center";
            ctx.fillText(b.name, doorCenter.x, doorCenter.y);

            ctx.font = "9px sans-serif";
            ctx.fillStyle = "rgba(215, 168, 62, 0.8)";
            ctx.fillText(b.banner, doorCenter.x, doorCenter.y - 12);
          }
        }
      });

      // 3. Desenhar o Jogador / Aventureiro em 3D
      const playerCenter = project(px, -20, pz);
      const playerHead = project(px, -45, pz);
      const playerFeet = project(px, 0, pz);

      if (playerCenter && playerHead && playerFeet) {
        // Sombra nos pés
        ctx.beginPath();
        ctx.ellipse(playerFeet.x, playerFeet.y, 14, 6, 0, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(0, 0, 0, 0.6)";
        ctx.fill();

        // Corpo / Manto do Aventureiro
        ctx.beginPath();
        ctx.moveTo(playerFeet.x - 10, playerFeet.y);
        ctx.lineTo(playerHead.x - 7, playerHead.y + 12);
        ctx.lineTo(playerHead.x + 7, playerHead.y + 12);
        ctx.lineTo(playerFeet.x + 10, playerFeet.y);
        ctx.closePath();
        ctx.fillStyle = "#0C3550";
        ctx.fill();
        ctx.strokeStyle = "#D7A83E";
        ctx.lineWidth = 1.5;
        ctx.stroke();

        // Cabeça com Capuz Medieval
        ctx.beginPath();
        ctx.arc(playerHead.x, playerHead.y + 4, 8, 0, Math.PI * 2);
        ctx.fillStyle = "#D7A83E";
        ctx.fill();

        // Tag do Jogador
        ctx.font = "bold 10px sans-serif";
        ctx.fillStyle = "#F4D77A";
        ctx.textAlign = "center";
        ctx.fillText("Você (Aventureiro)", playerHead.x, playerHead.y - 10);
      }

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animId);
    };
  }, [playerPos, playerRot, inInterior, nearBuilding]);

  // Controles Virtuais para Celular
  const handleVirtualMove = (direction: "forward" | "back" | "left" | "right") => {
    let px = playerPos.x;
    let pz = playerPos.z;
    let prot = playerRot;
    const speed = 6;

    if (direction === "forward") {
      px += Math.sin(prot) * speed;
      pz += Math.cos(prot) * speed;
    } else if (direction === "back") {
      px -= Math.sin(prot) * speed;
      pz -= Math.cos(prot) * speed;
    } else if (direction === "left") {
      prot -= 0.12;
    } else if (direction === "right") {
      prot += 0.12;
    }

    setPlayerPos({ x: px, z: pz });
    setPlayerRot(prot);
  };

  return (
    <div className="relative w-full rounded-2xl border-2 border-[#D7A83E]/50 bg-[#02070B] overflow-hidden shadow-2xl">
      {/* HUD Superior de Exploração */}
      <div className="absolute top-4 left-4 right-4 z-20 flex flex-wrap items-center justify-between gap-3 pointer-events-none">
        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#03070B]/90 border border-[#D7A83E]/40 backdrop-blur-md pointer-events-auto shadow-xl">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs font-ui font-bold text-[#F4D77A]">
            {inInterior ? `Interior: ${inInterior.name}` : "Ruas da Capital Mihara (Livre Exploração)"}
          </span>
        </div>

        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#071522]/90 border border-[#D7A83E]/30 text-xs font-ui text-[#D7A83E] pointer-events-auto">
          <Coins size={14} className="text-[#D7A83E]" />
          <span><strong>{moedas}</strong> Moedas</span>
        </div>
      </div>

      {/* TELA PRINCIPAL: MUNDO OU INTERIOR */}
      <div className="relative w-full h-[580px]">
        {/* Renderizador de Ruas 3D */}
        <canvas ref={canvasRef} className="w-full h-full block" />

        {/* MODAL DE INTERIOR REAL (ENTRAR NA CASA) */}
        {inInterior && (
          <div className="absolute inset-0 z-30 bg-[#071522]/95 backdrop-blur-md p-6 sm:p-10 flex flex-col justify-between animate-fadeIn overflow-y-auto">
            <div className="flex items-center justify-between border-b border-[#D7A83E]/30 pb-4">
              <div className="flex items-center gap-3">
                {inInterior.interiorType === "tavern" && <Beer size={28} className="text-[#D7A83E]" />}
                {inInterior.interiorType === "guild" && <Shield size={28} className="text-[#D7A83E]" />}
                {inInterior.interiorType === "townhall" && <Landmark size={28} className="text-[#D7A83E]" />}
                {inInterior.interiorType === "portal" && <Skull size={28} className="text-red-500" />}
                <div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-black text-[#F4D77A]">
                    {inInterior.name}
                  </h3>
                  <p className="font-serif italic text-xs text-[rgba(242,233,208,0.7)]">
                    {inInterior.subtitle}
                  </p>
                </div>
              </div>

              <button
                onClick={() => setInInterior(null)}
                className="p-2 rounded-full bg-[#03070B] border border-[#D7A83E]/40 text-[#D7A83E] hover:text-white"
              >
                <X size={20} />
              </button>
            </div>

            {/* Conteúdo Dinâmico do Interior */}
            <div className="my-6 max-w-3xl mx-auto w-full text-center space-y-6">
              <div className="p-6 rounded-xl bg-[#03070B]/80 border border-[#D7A83E]/20 text-left">
                <span className="text-[10px] font-ui uppercase tracking-wider text-[#D7A83E] block mb-2">
                  Ambiente Interno Interativo:
                </span>
                <p className="font-serif text-base text-[rgba(242,233,208,0.9)] leading-relaxed">
                  {inInterior.description}
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link
                  href={inInterior.href}
                  className="px-6 py-3 rounded-lg bg-gradient-to-r from-[#D7A83E] to-[#B8860B] text-[#03070B] font-ui font-bold text-sm hover:brightness-110 transition-all shadow-xl"
                >
                  Acessar Painel Oficial de {inInterior.name}
                </Link>
                <button
                  onClick={() => setInInterior(null)}
                  className="px-6 py-3 rounded-lg border border-[#D7A83E]/40 bg-[#0C3550]/40 text-sm font-ui text-[#F4D77A] hover:bg-[#0C3550] transition-colors"
                >
                  Sair pela Porta e Voltar à Rua
                </button>
              </div>
            </div>

            <div className="text-center text-xs font-ui text-[rgba(242,233,208,0.5)]">
              Pressione <strong>ESC</strong> ou toque no X para sair do edifício
            </div>
          </div>
        )}

        {/* ALERTA FLUTUANTE DE PROXIMIDADE DA PORTA */}
        {nearBuilding && !inInterior && (
          <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-20 px-6 py-3 rounded-full bg-gradient-to-r from-[#D7A83E] to-[#B8860B] text-[#03070B] font-ui font-black text-xs sm:text-sm shadow-2xl flex items-center gap-3 animate-bounce">
            <span>Você está na porta de <strong>{nearBuilding.name}</strong>!</span>
            <button
              onClick={() => setInInterior(nearBuilding)}
              className="px-3 py-1 rounded bg-[#03070B] text-[#F4D77A] hover:bg-black font-bold uppercase text-xs"
            >
              [Entrar - Pressione E]
            </button>
          </div>
        )}
      </div>

      {/* PAINEL DE CONTROLES: TECLADO E JOYSTICK MOBILE */}
      <div className="p-4 bg-[#071522]/95 border-t border-[#D7A83E]/30 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-xs font-ui text-[rgba(242,233,208,0.7)] text-center sm:text-left">
          <span>🎮 Controles no Computador: </span>
          <span className="text-[#F4D77A] font-bold">W, A, S, D</span> para andar e virar • 
          <span className="text-[#F4D77A] font-bold ml-1">SHIFT</span> para correr • 
          <span className="text-[#F4D77A] font-bold ml-1">E</span> para entrar em casas
        </div>

        {/* Joystick na tela para quem usa celular */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => handleVirtualMove("left")}
            className="p-3 rounded bg-[#03070B] border border-[#D7A83E]/30 text-[#D7A83E] active:bg-[#D7A83E] active:text-black"
          >
            <ArrowLeft size={16} />
          </button>
          <div className="flex flex-col gap-2">
            <button
              onClick={() => handleVirtualMove("forward")}
              className="p-3 rounded bg-[#03070B] border border-[#D7A83E]/30 text-[#D7A83E] active:bg-[#D7A83E] active:text-black"
            >
              <ArrowUp size={16} />
            </button>
            <button
              onClick={() => handleVirtualMove("back")}
              className="p-3 rounded bg-[#03070B] border border-[#D7A83E]/30 text-[#D7A83E] active:bg-[#D7A83E] active:text-black"
            >
              <ArrowDown size={16} />
            </button>
          </div>
          <button
            onClick={() => handleVirtualMove("right")}
            className="p-3 rounded bg-[#03070B] border border-[#D7A83E]/30 text-[#D7A83E] active:bg-[#D7A83E] active:text-black"
          >
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
