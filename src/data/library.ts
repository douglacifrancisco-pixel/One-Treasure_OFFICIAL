import { volume1Info, secoesVolume1 } from "./volume1";
import { volume2Info, secoesVolume2 } from "./volume2";
import { volume3Info, secoesVolume3 } from "./volume3";
import { volume4Info, secoesVolume4 } from "./volume4";

export type VolumeInfo = {
  id: string;
  numero: number;
  slug: string;
  titulo: string;
  subtitulo: string;
  descricao: string;
  status: string;
  totalCapitulos: number;
  totalSecoes: number;
  dataLancamento: string;
};

export const volumeCatalog: VolumeInfo[] = [
  volume1Info,
  volume2Info,
  volume3Info,
  volume4Info,
];

export const sectionsByVolume: Record<number, typeof secoesVolume1> = {
  1: secoesVolume1.map((item) => ({ ...item, volumeNumero: 1 })),
  2: secoesVolume2,
  3: secoesVolume3,
  4: secoesVolume4,
};

export const allSections = volumeCatalog.flatMap(
  (volume) => sectionsByVolume[volume.numero],
);

export const quizByVolume = {
  1: [
    {
      question: "Qual é o lema inicial de Denotas?",
      options: [
        "Um homem que vale 100 homens.",
        "A verdade vale mais que o ouro.",
        "Um é bom… mas mais é melhor.",
      ],
      answer: 0,
    },
    {
      question: "O que realmente move o mundo segundo o Arquivo 0?",
      options: ["A força", "A percepção", "A riqueza"],
      answer: 1,
    },
    {
      question: "O que Denotas procura acima de fama, poder e dinheiro?",
      options: ["A verdade", "Um trono", "A Marinha"],
      answer: 0,
    },
  ],
  2: [
    {
      question: "Como Denotas entra no palácio?",
      options: [
        "Disfarçado como um guarda, tornando-se parte do sistema.",
        "Destruindo os portões principais.",
        "Escondido dentro de uma carroça.",
      ],
      answer: 0,
    },
    {
      question: "O que Denotas rouba além da fruta?",
      options: ["Uma coroa", "Uma espada e um mapa", "Um navio de guerra"],
      answer: 1,
    },
    {
      question: "O que o Almirante de Diamante conclui sobre a invasão?",
      options: [
        "Que foi apenas sorte.",
        "Que houve muitos invasores.",
        "Que Denotas foi permitido a entrar.",
      ],
      answer: 2,
    },
  ],
  3: [
    {
      question: "Onde Denotas desaparece depois do confronto?",
      options: ["No Mar Negro", "Em Valdoria", "Na Biblioteca"],
      answer: 0,
    },
    {
      question: "O que o Almirante de Prata começa a suspeitar?",
      options: [
        "Que Denotas nunca existiu.",
        "Que Denotas pode ter sobrevivido.",
        "Que Kairos era o verdadeiro inimigo.",
      ],
      answer: 1,
    },
    {
      question: "Qual novo lema Denotas assume ao despertar?",
      options: [
        "Um homem que vale cem homens.",
        "O mundo nunca falha.",
        "Um é bom… mas mais é melhor.",
      ],
      answer: 2,
    },
  ],
} as const;

export type QuizQuestion = (typeof quizByVolume)[1][number];