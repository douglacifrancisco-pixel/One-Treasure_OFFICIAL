export interface Quest {
  id: string;
  titulo: string;
  categoria: "leitura" | "exploracao" | "enigma" | "lore";
  recompensaMoedas: number;
  recompensaXp: number;
  dificuldade: "F" | "E" | "D" | "C" | "B" | "A" | "S";
  descricao: string;
  progressoMax: number;
  link: string;
}

export interface Cidade {
  id: string;
  nome: string;
  genero: string;
  descricao: string;
  clima: string;
  nivelRecomendado: string;
  icone: string;
  cor: string;
  destaqueNovel: string;
  link: string;
}

export interface TabernaMensagem {
  id: string;
  autor: string;
  classe: string;
  cargo: string;
  mensagem: string;
  tempo: string;
  curtidas: number;
}

export const CIDADES_DO_REINO: Cidade[] = [
  {
    id: "mihara",
    nome: "Mihara (Capital Central)",
    genero: "Hub Principal & Guildas",
    descricao: "O coração de Aethel-Pages. Onde todos os aventureiros iniciam suas jornadas, pegam contratos na Guilda e debatem estratégias na Taberna.",
    clima: "Aconchegante e movimentado",
    nivelRecomendado: "Todos os Ranks",
    icone: "Castle",
    cor: "#D7A83E",
    destaqueNovel: "O Ponto de Encontro dos Contadores de Histórias",
    link: "/mihara"
  },
  {
    id: "thassalar",
    nome: "Continente de Thassalar",
    genero: "Dark Fantasy / Mistério / Conspiração",
    descricao: "Um continente amaldiçoado cercado por tempestades e enganos. Onde reside o lendário santuário de 'One Treasure: O Homem que Enganou o Mundo'.",
    clima: "Névoa densa e tempestades oceânicas",
    nivelRecomendado: "Rank S — Cuidado Extremo",
    icone: "Skull",
    cor: "#8F1D2C",
    destaqueNovel: "One Treasure: O Homem que Enganou o Mundo",
    link: "/thassalar"
  },
  {
    id: "valkengard",
    nome: "Fortaleza de Valkengard",
    genero: "Alta Fantasia & Épico Medieval",
    descricao: "Castelos colossais erguidos nas montanhas geladas, lendas de reis antigos, dragões milenares e guerreiros juramentados pela honra.",
    clima: "Ventos gélidos e neve perpétua",
    nivelRecomendado: "Rank B a A",
    icone: "Shield",
    cor: "#3B82F6",
    destaqueNovel: "Crônicas da Coroa de Ferro",
    link: "/cidades/valkengard"
  },
  {
    id: "lunafell",
    nome: "Vales de Lunafell",
    genero: "Romance de Época, Magia & Drama",
    descricao: "Jardins floridos iluminados por luas eternas, intrigas da nobreza imperial, bailes de máscaras e pactos românticos proibidos.",
    clima: "Noites estreladas e brisa floral",
    nivelRecomendado: "Rank D a C",
    icone: "Heart",
    cor: "#EC4899",
    destaqueNovel: "Sob o Sussurro das Luas de Quartzo",
    link: "/cidades/lunafell"
  },
  {
    id: "cyber-aethel",
    nome: "Submundo de Neoverse",
    genero: "Sci-Fi, Cyberpunk & LitRPG",
    descricao: "Um setor mecânico secreto sob as ruínas medievais. Luzes de neon se fundem com runas cibernéticas e inteligências artificiais arcanas.",
    clima: "Chuva ácida e néon pulsante",
    nivelRecomendado: "Rank A a S",
    icone: "Zap",
    cor: "#06B6D4",
    destaqueNovel: "Protocolo Arcano: 2099",
    link: "/cidades/neoverse"
  }
];

export const MISSOES_GUILDA: Quest[] = [
  {
    id: "q1",
    titulo: "O Despertar do Observador",
    categoria: "leitura",
    recompensaMoedas: 100,
    recompensaXp: 250,
    dificuldade: "F",
    descricao: "Acesse o 'Arquivo 0' em Thassalar e descubra a primeira lei sobre como a percepção molda o mundo de Denotas.",
    progressoMax: 1,
    link: "/arquivo-0"
  },
  {
    id: "q2",
    titulo: "A Peça no Tabuleiro",
    categoria: "leitura",
    recompensaMoedas: 150,
    recompensaXp: 350,
    dificuldade: "E",
    descricao: "Leia o Prólogo e o Capítulo 1 de 'One Treasure' para desvendar os primeiros passos nas rotas da Broken Line.",
    progressoMax: 2,
    link: "/ler/capitulo-1"
  },
  {
    id: "q3",
    titulo: "A Face das Sombras",
    categoria: "lore",
    recompensaMoedas: 250,
    recompensaXp: 500,
    dificuldade: "C",
    descricao: "Visite o Quadro de Pistas e responda ao Quiz Canônico para provar que você não foi enganado pela história.",
    progressoMax: 1,
    link: "/pistas"
  },
  {
    id: "q4",
    titulo: "A Voz da Taberna",
    categoria: "exploracao",
    recompensaMoedas: 80,
    recompensaXp: 180,
    dificuldade: "F",
    descricao: "Converse com os outros aventureiros na Taberna do Corvo Torto e compartilhe sua teoria sobre o tesouro.",
    progressoMax: 1,
    link: "/taberna"
  },
  {
    id: "q5",
    titulo: "Selo de Escritor Real",
    categoria: "enigma",
    recompensaMoedas: 500,
    recompensaXp: 1200,
    dificuldade: "A",
    descricao: "Apresente uma proposta de manuscrito na Prefeitura de Mihara para registrar sua própria novel no reino.",
    progressoMax: 1,
    link: "/prefeitura"
  }
];

export const MENSAGENS_TABERNA: TabernaMensagem[] = [
  {
    id: "t1",
    autor: "Kaelen_O_SemNome",
    classe: "Mago Andarilho",
    cargo: "Rank B",
    mensagem: "Estive em Thassalar ontem... aquele Arquivo 0 não é uma sinopse qualquer, é um aviso psicológico. Quem é esse Denotas?",
    tempo: "Há 12 min",
    curtidas: 14
  },
  {
    id: "t2",
    autor: "Lady_Vespera",
    classe: "Barda de Lunafell",
    cargo: "Rank A",
    mensagem: "O taverneiro acabou de colocar uma caneca de hidromel na minha mesa. Se alguém estiver procurando equipe pra desvendar pistas, me chama!",
    tempo: "Há 35 min",
    curtidas: 8
  },
  {
    id: "t3",
    autor: "Garrick_MarteloDeFerro",
    classe: "Ferreiro de Valkengard",
    cargo: "Rank S",
    mensagem: "Não confiem nas cartas que vêm das rotas da Broken Line. O ouro de lá não compra comida, compra segredos.",
    tempo: "Há 1 hora",
    curtidas: 29
  }
];
