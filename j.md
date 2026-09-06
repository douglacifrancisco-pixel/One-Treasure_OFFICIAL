cd ~ && rm -rf One-Treasure_OFFICIAL && npx create-next-app@latest One-Treasure_OFFICIAL --typescript --tailwind --eslint --app --src-dir --import-alias "@/*" --no-git && cd One-Treasure_OFFICIAL && npm install framer-motion lucide-react && mkdir -p src/app/volumes src/app/personagens src/app/poderes src/app/locais src/app/cronologia src/app/frases src/app/pistas src/app/buscar src/app/sobre src/app/admin src/components/ui src/components/layout src/components/reader src/lib src/data && cat > src/data/mock.ts << 'MOCKEOF'
export const volumes = [
  { id: "v1", numero: 1, slug: "o-homem-que-enganou-o-mundo", titulo: "O Homem que Enganou o Mundo", subtitulo: "A origem de tudo que o mundo acredita ser verdade", descricao: "O primeiro volume apresenta Alphonse del Cart D., um homem que aprendeu que a maior arma do mundo não é uma espada — é a história que todos acreditam.", capa: "/capas/v1.jpg", status: "disponivel", ordem: 1, capitulos: [] },
  { id: "v3", numero: 3, slug: "o-leao-ainda-vive", titulo: "O Leão Ainda Vive", subtitulo: "Alguns mortos se recusam a desaparecer", descricao: "Rumores percorrem os mares: algo que deveria estar morto ainda respira. E se respira, planeja.", capa: "/capas/v3.jpg", status: "disponivel", ordem: 2, capitulos: [] },
  { id: "v4", numero: 4, slug: "o-que-nunca-foi-contado", titulo: "O Que Nunca Foi Contado", subtitulo: "Toda história oficial esconde outra", descricao: "O Volume 4 revela o que foi apagado dos registros oficiais. El Denotas avança para o Mar Antigo enquanto o Governo Mundial acelera seus planos.", capa: "/capas/v4.jpg", status: "em-andamento", ordem: 3, capitulos: ["cap-v4-1","cap-v4-2"] }
];

export const capitulos = [
  { id: "cap-v4-1", volumeId: "v4", numero: 1, slug: "o-mundo-em-colapso", titulo: "O Mundo em Colapso", resumo: "As estruturas que sustentavam o equilíbrio dos mares começam a rachar. El Denotas observa de longe — e sorri.", conteudo: `<p>O mar não estava tempestuoso. Estava com raiva.</p><p>Havia uma diferença, e El Denotas conhecia as duas muito bem.</p><p>Ele ficou parado na proa do navio sem nome — ele nunca nomeava os navios, pois nomear era criar apego, e apego era uma fraqueza que outros podiam explorar — e observou o horizonte com a expressão de alguém que já sabia o que ia encontrar lá.</p><div class="flashback"><span class="flashback-label">REGISTRO RECUPERADO</span><p>Seis meses antes, numa sala que não existia em nenhum mapa oficial, um homem que se chamava a si mesmo de Conselheiro disse a Alphonse del Cart D. que o Mar Antigo estava fechado para sempre. Que nenhum navio chegaria lá. Que a rota havia sido apagada.</p><p>Alphonse tinha sorrido. Era o mesmo sorriso que usava quando alguém lhe dizia que algo era impossível.</p></div><p>O sorriso que usava agora era diferente. Era o sorriso de quem já chegou.</p><p class="quote-importante">— Então — disse ele para ninguém em particular — o mundo ainda não percebeu o que aconteceu.</p><p>Kairos apareceu ao seu lado sem fazer barulho. Era uma das coisas que Denotas apreciava nele: a capacidade de existir num espaço sem anunciá-lo.</p><p>— Os sinais chegaram — disse Kairos, sem preâmbulo. — Evans se moveu. Francis também.</p><p>— Claro que se moveram — disse Denotas. — Eu precisava que eles se movessem.</p><p>Havia uma pausa. Kairos havia aprendido a interpretar essas pausas.</p><p>— Você os está usando como isca — disse ele. — Ou como escudo.</p><p>— As duas coisas — disse Denotas. — Não são excludentes.</p><p>O mar continuava com raiva. Denotas não ligava. Ele tinha planos para a raiva do mar também.</p>`, status: "publicado", spoilerLevel: 1, duracaoEstimada: "8 min", dataPublicacao: "2024-01-15" },
  { id: "cap-v4-2", volumeId: "v4", numero: 2, slug: "o-eco-que-cruza-os-mares", titulo: "O Eco Que Cruza os Mares", resumo: "Uma mensagem atravessa oceanos sem remetente identificável. Quem a enviou sabe que será encontrada — e calculou exatamente por quem.", conteudo: `<p>A mensagem chegou em três lugares ao mesmo tempo.</p><p>Isso era impossível. E ainda assim aconteceu.</p><p>No Forte da Marinha, Francis del Láguas Negras encontrou o papel dobrado dentro de um arquivo que ele mesmo havia trancado três dias antes. Sem marcas de entrada. Sem assinatura. Apenas uma frase:</p><p class="quote-importante"><em>"Você está procurando a pessoa errada. Mas continue. É importante para o plano."</em></p><p>Em Valdoria, um mensageiro entregou um envelope lacrado a Christofer Evans com o selo de uma organização que havia sido dissolvida há quarenta anos. Dentro, uma coordenada e uma data.</p><p>A data era daqui a três dias.</p><p>No Mar Negro, Magnus D. Kraken — que não recebia visitas, não aceitava mensagens e havia construído sua existência inteira em torno da invisibilidade — acordou com um papel na mão. Não se lembrava de ter pego. Não havia ninguém a bordo além dele.</p><div class="flashback"><span class="flashback-label">REGISTRO RECUPERADO</span><p>El Denotas tinha explicado uma vez, para alguém que não estava mais vivo para repetir, que a arte de uma mensagem não estava no que ela dizia. Estava em quando chegava, para quem chegava, e no que a pessoa fazia depois de ler.</p><p>— Informação é arquitetura — havia dito ele. — Você constrói o espaço onde a outra pessoa vai pensar. Depois, as conclusões dela são delas. Mas o espaço era seu.</p></div><p>Os três leram suas mensagens separadamente, em continentes diferentes, sem saber dos outros dois.</p><p>Os três tomaram decisões.</p><p>Todas as decisões eram exatamente o que Denotas precisava que fossem.</p>`, status: "publicado", spoilerLevel: 1, duracaoEstimada: "7 min", dataPublicacao: "2024-02-01" }
];

export const personagens = [
  { id: "p1", nome: "El Denotas", nomeVerdadeiro: "Alphonse del Cart D.", slug: "el-denotas", aliases: ["Alphonse del Cart D.", "Jhon Tailor", "Ryoiter Kinsaki"], titulo: "O Homem que Enganou o Mundo", descricao: "Um estrategista sem igual que transformou a própria identidade em arma. Ninguém sabe ao certo quantas versões de El Denotas existem — ou qual delas é real.", descricaoSpoilers: "Alphonse del Cart D. entrou para o sistema da Marinha não para servir, mas para aprender. Cada informação que coletou foi usada para construir uma narrativa que o mundo inteiro acreditou.", personalidade: "Irônico, teatral, calculista. Nunca age sem três planos de contingência. Sorri quando outros achariam que deveriam chorar.", aparencia: "Feições que mudam conforme a persona que adota. O único traço constante é o olhar: observa tudo como quem lê um mapa que só ele enxerga.", poderes: ["Ki", "Akuma no Mi"], armas: ["Sandai Kitetsu"], faccao: "Independente", status: "ativo", ameaca: 5, primeiraAparicao: "Volume 1, Capítulo 1", frases: ["A verdade é a versão que sobrevive.", "Nunca confie em mapas perfeitos.", "O mundo lembra da versão errada. Eu prefiro assim."], versaoOficial: "Criminoso procurado. Identidade instável. Perigoso.", versaoSuspeita: "Pode ser o arquiteto de eventos que moldaram os últimos vinte anos da história dos mares." },
  { id: "p2", nome: "Kairos", slug: "kairos", aliases: ["Storm Engineer", "O Engenheiro"], titulo: "Storm Engineer", descricao: "Engenheiro do caos. Especialista em sistemas, mecanismos e sabotagem. Aparece onde ninguém esperava e conserta — ou destrói — o que ninguém conseguia.", descricaoSpoilers: "Sua relação com Denotas é mais antiga do que ambos admitem publicamente.", personalidade: "Econômico nas palavras, preciso nas ações. Não desperdiça movimento nem frase.", aparencia: "Vestes funcionais, sempre com ferramentas ocultas. Mãos marcadas por trabalho técnico.", poderes: [], armas: ["Ferramentas de engenharia", "Explosivos personalizados"], faccao: "Aliado de Denotas", status: "ativo", ameaca: 4, primeiraAparicao: "Volume 3", frases: ["Um sistema tem sempre um ponto de ruptura. Basta encontrar."], versaoOficial: "Mercenário técnico. Sem afiliação conhecida.", versaoSuspeita: "Pode ter construído os mecanismos que tornaram o plano de Denotas possível." },
  { id: "p3", nome: "Kael Tempest", slug: "kael-tempest", aliases: ["Governante do Mar das Tempestades"], titulo: "Senhor das Tempestades", descricao: "Veterano dos mares com poder sobre tempestades. Chama Denotas de novato — o que diz mais sobre o respeito que tem por ele do que parece.", descricaoSpoilers: "Seu território, o Mar das Tempestades, guarda segredos que o Governo Mundial prefere que permaneçam submersos.", personalidade: "Direto, autoritário, surpreendentemente honesto para alguém de seu nível de poder.", aparencia: "Imponente. Cabelos e barba em desalinho permanente, como se a tempestade vivesse nele.", poderes: ["Storm Storm no Mi"], armas: [], faccao: "Independente", status: "ativo", ameaca: 5, primeiraAparicao: "Volume 3", frases: ["Novato, o mar não respeita planos. Respeita força."], versaoOficial: "Senhor territorial. Neutro nas guerras dos mares.", versaoSuspeita: "Sua neutralidade pode ser o maior truque político dos últimos trinta anos." },
  { id: "p4", nome: "Francis del Láguas Negras", slug: "francis-del-laguas-negras", aliases: ["Almirante das Águas Negras"], titulo: "Almirante", descricao: "Rival direto de Denotas e um dos poucos que o conheceu antes das máscaras. Carrega informações sobre o passado de Alphonse que poucos suspeitam existir.", descricaoSpoilers: "A rivalidade entre Francis e Denotas pode ter raízes mais pessoais do que institucionais.", personalidade: "Metódico, orgulhoso, perturbado pela ideia de que Denotas pode estar sempre um passo à frente.", aparencia: "Uniforme impecável. Expressão permanentemente tensa.", poderes: [], armas: ["Espada de almirante"], faccao: "Governo Mundial / Marinha", status: "ativo", ameaca: 4, primeiraAparicao: "Volume 1", frases: ["Eu sei quem você é, Alphonse. E vou provar para o mundo."], versaoOficial: "Almirante dedicado. Comprometido com a ordem dos mares.", versaoSuspeita: "Pode saber coisas sobre o passado de Denotas que o transformariam de vilão em algo mais complicado." },
  { id: "p5", nome: "Christofer Evans", slug: "christofer-evans", aliases: ["Almirante de Diamante"], titulo: "Almirante de Diamante", descricao: "Segundo no comando do Governo Mundial. Opera com precisão cirúrgica e nunca aparece onde não deveria — o que levanta a questão do que faz quando não é visto.", descricaoSpoilers: "Suas decisões nos bastidores podem ter consequências que ninguém calculou ainda.", personalidade: "Frio, estratégico, nunca reativo. Age sempre antes que a crise chegue.", aparencia: "Elegante. Diamantes reais na insígnia do uniforme.", poderes: [], armas: ["Autoridade institucional", "Informação"], faccao: "Governo Mundial", status: "ativo", ameaca: 5, primeiraAparicao: "Volume 4", frases: ["O Governo Mundial não reage. Nós preparamos."], versaoOficial: "Pilar da estabilidade do Governo Mundial.", versaoSuspeita: "Pode estar preparando algo que nem a Marinha conhece." },
  { id: "p6", nome: "Magnus D. Kraken", slug: "magnus-d-kraken", aliases: ["O Kraken"], titulo: "Figura do Submundo", descricao: "Presença lendária no submundo pirata. Ligado a DownsThalassar de formas que nenhum documento oficial reconhece.", descricaoSpoilers: "O que acontece quando Denotas e Kraken finalmente se encontram pode redefinir o equilíbrio do submundo.", personalidade: "Imprevisível. Pode ser brutal ou hospitaleiro dependendo de critérios que ninguém entende completamente.", aparencia: "Grande, marcado, com uma presença que muda o peso de qualquer sala.", poderes: [], armas: ["Reputação", "Rede do submundo"], faccao: "Submundo / DownsThalassar", status: "ativo", ameaca: 4, primeiraAparicao: "Volume 3", frases: ["Ninguém chega a DownsThalassar por acidente."], versaoOficial: "Criminoso procurado. Localização desconhecida.", versaoSuspeita: "Pode ser o guardião de uma informação que tanto Denotas quanto o Governo Mundial precisam." }
];

export const personas = [
  { id: "per1", personagemId: "p1", nome: "Jhon Tailor", slug: "jhon-tailor", funcao: "O Ativista", aparencia: "Homem carinhoso e acessível. Camisa clara com mangas dobradas, colete verde-oliva, bolsa com suprimentos, sorriso caloroso, barba bem cuidada.", comportamento: "Faz doações, ajuda feridos, conversa com todos, organiza comida e remédios. Parece incapaz de trair alguém.", objetivoAparente: "Ajudar comunidades vulneráveis nos portos e ilhas mais pobres.", objetivoReal: "Mapear rotas, relações, segredos e sistemas sociais enquanto constrói confiança irrestrita.", pistas: ["Nunca aceita presentes.", "Sempre sabe o nome de cada pessoa que encontrou antes.", "As rotas de entrega de remédios coincidem com pontos estratégicos."], risco: 2 },
  { id: "per2", personagemId: "p1", nome: "Ryoiter Kinsaki", slug: "ryoiter-kinsaki", funcao: "O Espadachim de DownsThalassar", aparencia: "Vestes escuras, capa desgastada, postura silenciosa, cicatrizes discretas, presença ameaçadora. Carrega a Sandai Kitetsu. Olhar frio, movimentos econômicos.", comportamento: "Fala pouco, nunca explica seu passado, aparece em locais impossíveis. É tratado como lenda no submundo.", objetivoAparente: "Espadachim mercenário sem afiliação permanente.", objetivoReal: "Controlar o submundo de DownsThalassar e acessar informações que só circulam entre criminosos de alto nível.", pistas: ["A Sandai Kitetsu é reconhecida por alguns veteranos.", "Seus trabalhos nunca resultam em mortes desnecessárias.", "Sempre desaparece antes que alguém possa fazer perguntas detalhadas."], risco: 4 }
];

export const locais = [
  { id: "l1", nome: "Mar Negro", slug: "mar-negro", descricao: "Um trecho de oceano onde a luz parece se comportar de forma diferente. Navios entram e nem sempre saem. Os que voltam raramente explicam o que viram.", clima: "Permanentemente nebuloso. Tempestades sem chuva.", habitantes: ["Piratas experientes", "Criaturas não catalogadas"], faccoes: ["Submundo pirata", "Entidades desconhecidas"], perigos: ["Desorientação por névoa", "Criaturas nas profundezas", "Rotas que mudam"], personagens: ["El Denotas", "Magnus D. Kraken"], nivelMisterio: 5, versaoOficial: "Zona de navegação proibida por riscos climáticos.", versaoSuspeita: "O Governo Mundial sabe o que há lá. Por isso proibiu." },
  { id: "l2", nome: "Mar Antigo", slug: "mar-antigo", descricao: "Parte do oceano que os mapas oficiais deixaram de registrar há gerações. Dizem que quem navega lá encontra ilhas que não existem nos registros — ou encontra o que foi esquecido de propósito.", clima: "Variável. Calm artificialmente calmo em certas regiões.", habitantes: ["Desconhecidos"], faccoes: ["Desconhecidas"], perigos: ["Ilhas instáveis", "História viva", "Verdades perigosas"], personagens: ["El Denotas", "O Velho da Ilha"], nivelMisterio: 5, versaoOficial: "Região sem dados cartográficos confiáveis. Navegação não recomendada.", versaoSuspeita: "Os mapas existem. Alguém os apagou." },
  { id: "l3", nome: "DownsThalassar", slug: "downsthalassar", descricao: "Uma cidade que não aparece em nenhum mapa oficial mas que todo pirata experiente conhece. Centro do submundo marítimo e ponto de encontro de informações que o mundo preferiria que não circulassem.", clima: "Úmido, permanentemente noturno na região central.", habitantes: ["Piratas", "Mercenários", "Informantes", "Refugiados"], faccoes: ["Magnus D. Kraken", "Guildas independentes"], perigos: ["Traição constante", "Informação incorreta deliberada", "Violência calculada"], personagens: ["Magnus D. Kraken", "Ryoiter Kinsaki"], nivelMisterio: 4, versaoOficial: "Local não reconhecido. Possivelmente fictício.", versaoSuspeita: "É real, funcional, e o Governo Mundial sabe as coordenadas há décadas." }
];

export const poderes = [
  { id: "pow1", nome: "Ki", categoria: "Energia Interna", origem: "Treino e autodisciplina", descricao: "Energia interna que serve de base para técnica, movimento, resistência, percepção corporal e controle. Denotas se encaixa naturalmente no Ki.", limitacoes: "Uso excessivo gera desgaste físico, dor, perda de precisão e exaustão progressiva.", custo: "Físico e mental — quanto mais intenso o uso, mais longo o tempo de recuperação.", usuarios: ["El Denotas"] },
  { id: "pow2", nome: "Haki", categoria: "Poder da Vontade", origem: "Força interior da vontade individual", descricao: "Poder ligado à força da vontade. Não é automaticamente superior a todos os outros sistemas.", limitacoes: "Denotas não pode usar Haki por causa da natureza de sua vontade — não por fraqueza, mas por uma razão que ainda não foi completamente explicada.", custo: "Varia por categoria e usuário.", usuarios: ["Kael Tempest", "Francis del Láguas Negras", "Christofer Evans"] },
  { id: "pow3", nome: "Akuma no Mi", categoria: "Fruta do Diabo", origem: "Frutas raras de origem desconhecida", descricao: "Poderes únicos concedidos por frutas especiais. Cada fruta possui habilidade, limitações e custo específicos. A fruta não substitui experiência, técnica ou inteligência.", limitacoes: "Usuários perdem a capacidade de nadar. A fruta não torna ninguém invencível.", custo: "Permanente — a incapacidade de nadar dura para sempre.", usuarios: ["Kael Tempest (Storm Storm no Mi)", "El Denotas"] }
];

export const pistas = [
  { id: "pis1", titulo: "A Mensagem Sem Remetente", descricao: "No Capítulo 2 do Volume 4, três figuras recebem mensagens simultaneamente em locais impossíveis. A coordenada enviada a Evans pode ser o local de uma reunião — ou uma armadilha.", capituloId: "cap-v4-2", status: "suspeita", spoilerLevel: 1, tags: ["El Denotas", "Evans", "Francis", "Kraken"], personagens: ["El Denotas", "Christofer Evans", "Francis del Láguas Negras", "Magnus D. Kraken"] },
  { id: "pis2", titulo: "O Sorriso no Horizonte", descricao: "No Capítulo 1 do Volume 4, Denotas sorri ao ver o Mar Antigo. Kairos observa e não comenta — o que sugere que ele já sabe algo que o leitor ainda não sabe.", capituloId: "cap-v4-1", status: "suspeita", spoilerLevel: 1, tags: ["El Denotas", "Kairos", "Mar Antigo"], personagens: ["El Denotas", "Kairos"] }
];

export const frases = [
  { id: "fr1", texto: "A verdade é a versão que sobrevive.", personagem: "El Denotas", volume: "Volume 1" },
  { id: "fr2", texto: "Num mundo onde toda verdade pode ser uma mentira, a maior arma não é uma espada. É a história que todos acreditam.", personagem: "El Denotas", volume: "Volume 1" },
  { id: "fr3", texto: "Nunca confie em mapas perfeitos.", personagem: "El Denotas", volume: "Desconhecido" },
  { id: "fr4", texto: "O mundo lembra da versão errada. Eu prefiro assim.", personagem: "El Denotas", volume: "Volume 3" },
  { id: "fr5", texto: "Novato, o mar não respeita planos. Respeita força.", personagem: "Kael Tempest", volume: "Volume 3" },
  { id: "fr6", texto: "Um sistema tem sempre um ponto de ruptura. Basta encontrar.", personagem: "Kairos", volume: "Volume 3" },
  { id: "fr7", texto: "Eu sei quem você é, Alphonse. E vou provar para o mundo.", personagem: "Francis del Láguas Negras", volume: "Volume 1" },
  { id: "fr8", texto: "Ninguém chega a DownsThalassar por acidente.", personagem: "Magnus D. Kraken", volume: "Volume 3" }
];

export const microtextos = [
  "Você tem certeza de que esta página é verdadeira?",
  "Algumas histórias foram editadas.",
  "O mundo lembra da versão errada.",
  "Esta informação pode estar incompleta.",
  "Não confie em mapas perfeitos.",
  "O leitor também faz parte do plano.",
  "Você encontrou uma pista. Ou foi encontrado por ela."
];

export const cronologia = [
  { id: "ev1", titulo: "Infância de Alphonse del Cart", descricao: "Registros escassos. O que se sabe foi contado por pessoas que talvez não devessem saber.", volume: "Volume 1", spoilerLevel: 2 },
  { id: "ev2", titulo: "Entrada no Sistema da Marinha", descricao: "Alphonse del Cart D. ingressa no sistema. Por qual motivo real, ainda é questão em aberto.", volume: "Volume 1", spoilerLevel: 1 },
  { id: "ev3", titulo: "Roubo da Narrativa", descricao: "O evento que transformou Alphonse em El Denotas — e o mundo ainda não sabe que aconteceu.", volume: "Volume 1", spoilerLevel: 2 },
  { id: "ev4", titulo: "Queda no Mar Negro", descricao: "Denotas desaparece no Mar Negro. O mundo acredita que morreu. O Volume 3 sugere outra coisa.", volume: "Volume 3", spoilerLevel: 1 },
  { id: "ev5", titulo: "Surgimento de Kairos", descricao: "O Storm Engineer aparece sem história oficial. Seus primeiros registros são todos contraditórios.", volume: "Volume 3", spoilerLevel: 1 },
  { id: "ev6", titulo: "Retorno de Denotas", descricao: "Algo volta do Mar Negro. Ainda não confirmado oficialmente.", volume: "Volume 3", spoilerLevel: 2 },
  { id: "ev7", titulo: "Chegada de Kael Tempest", descricao: "O Senhor das Tempestades entra na narrativa. Ninguém o convidou.", volume: "Volume 3", spoilerLevel: 1 },
  { id: "ev8", titulo: "Entrada no Mar Antigo", descricao: "Volume 4. Denotas e Kairos navegam para onde os mapas terminam.", volume: "Volume 4", spoilerLevel: 1 },
  { id: "ev9", titulo: "As Mensagens Simultâneas", descricao: "Evans, Francis e Kraken recebem mensagens no mesmo instante. Denotas não assina. Não precisa.", volume: "Volume 4", spoilerLevel: 1 }
];
MOCKEOF

cat > src/lib/progress.ts << 'PROGEOF'
const PREFIX = "ot_";

export function getProgress(capituloId: string): number {
  if (typeof window === "undefined") return 0;
  return parseFloat(localStorage.getItem(`${PREFIX}prog_${capituloId}`) || "0");
}

export function saveProgress(capituloId: string, pct: number) {
  if (typeof window === "undefined") return;
  localStorage.setItem(`${PREFIX}prog_${capituloId}`, String(pct));
  localStorage.setItem(`${PREFIX}last`, capituloId);
}

export function getLastRead(): string | null {
  if (typeof window === "undefined") return null;
  return localStorage.getItem(`${PREFIX}last`);
}

export function isFavorite(tipo: string, id: string): boolean {
  if (typeof window === "undefined") return false;
  const favs = JSON.parse(localStorage.getItem(`${PREFIX}favs`) || "[]");
  return favs.some((f: {tipo:string;id:string}) => f.tipo === tipo && f.id === id);
}

export function toggleFavorite(tipo: string, id: string): boolean {
  if (typeof window === "undefined") return false;
  const favs: {tipo:string;id:string}[] = JSON.parse(localStorage.getItem(`${PREFIX}favs`) || "[]");
  const idx = favs.findIndex(f => f.tipo === tipo && f.id === id);
  if (idx >= 0) { favs.splice(idx, 1); localStorage.setItem(`${PREFIX}favs`, JSON.stringify(favs)); return false; }
  favs.push({tipo, id}); localStorage.setItem(`${PREFIX}favs`, JSON.stringify(favs)); return true;
}

export function isRead(capituloId: string): boolean {
  if (typeof window === "undefined") return false;
  return localStorage.getItem(`${PREFIX}read_${capituloId}`) === "1";
}

export function markRead(capituloId: string) {
  if (typeof window === "undefined") return;
  localStorage.setItem(`${PREFIX}read_${capituloId}`, "1");
}

export function getDiscoveries(): string[] {
  if (typeof window === "undefined") return [];
  return JSON.parse(localStorage.getItem(`${PREFIX}discoveries`) || "[]");
}

export function addDiscovery(id: string) {
  if (typeof window === "undefined") return;
  const d = getDiscoveries();
  if (!d.includes(id)) { d.push(id); localStorage.setItem(`${PREFIX}discoveries`, JSON.stringify(d)); }
}
PROGEOF

cat > src/app/globals.css << 'CSSEOF'
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400&family=EB+Garamond:ital,wght@0,400;0,500;1,400&family=Inter:wght@300;400;500;600&display=swap');
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --navy: #071522;
  --ocean: #0C3550;
  --abyss: #03070B;
  --gold: #D7A83E;
  --gold-light: #F4D77A;
  --red: #8F1D2C;
  --red-dark: #42121B;
  --paper: #D8C39A;
  --text: #F2E9D0;
  --olive: #5a6e3a;
}

* { box-sizing: border-box; margin: 0; padding: 0; }

html { scroll-behavior: smooth; }

body {
  background-color: var(--navy);
  color: var(--text);
  font-family: 'EB Garamond', Georgia, serif;
  font-size: 1.125rem;
  line-height: 1.8;
  min-height: 100vh;
}

h1,h2,h3,h4,h5,h6 {
  font-family: 'Playfair Display', Georgia, serif;
  color: var(--gold-light);
  line-height: 1.2;
}

.font-ui { font-family: 'Inter', sans-serif; }

.text-gold { color: var(--gold); }
.text-gold-light { color: var(--gold-light); }
.text-paper { color: var(--paper); }
.text-text { color: var(--text); }
.bg-navy { background-color: var(--navy); }
.bg-ocean { background-color: var(--ocean); }
.bg-abyss { background-color: var(--abyss); }
.border-gold { border-color: var(--gold); }

.card-volume {
  background: linear-gradient(135deg, rgba(12,53,80,0.8) 0%, rgba(7,21,34,0.95) 100%);
  border: 1px solid rgba(215,168,62,0.25);
  border-radius: 4px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}
.card-volume::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(215,168,62,0.05) 0%, transparent 60%);
  opacity: 0;
  transition: opacity 0.3s ease;
}
.card-volume:hover { border-color: rgba(215,168,62,0.6); transform: translateY(-2px); box-shadow: 0 8px 32px rgba(0,0,0,0.4), 0 0 0 1px rgba(215,168,62,0.1); }
.card-volume:hover::before { opacity: 1; }

.btn-primary {
  background: linear-gradient(135deg, var(--gold) 0%, #b8862a 100%);
  color: var(--abyss);
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  padding: 0.75rem 1.75rem;
  border-radius: 2px;
  border: none;
  cursor: pointer;
  transition: all 0.25s ease;
  text-decoration: none;
  display: inline-block;
  letter-spacing: 0.02em;
}
.btn-primary:hover { background: linear-gradient(135deg, var(--gold-light) 0%, var(--gold) 100%); transform: translateY(-1px); box-shadow: 0 4px 16px rgba(215,168,62,0.3); }

.btn-ghost {
  background: transparent;
  color: var(--gold);
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  padding: 0.75rem 1.75rem;
  border-radius: 2px;
  border: 1px solid rgba(215,168,62,0.4);
  cursor: pointer;
  transition: all 0.25s ease;
  text-decoration: none;
  display: inline-block;
  letter-spacing: 0.02em;
}
.btn-ghost:hover { border-color: var(--gold); background: rgba(215,168,62,0.08); }

.divider-gold {
  border: none;
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--gold), transparent);
  margin: 2rem 0;
}

.flashback {
  background: rgba(216,195,154,0.08);
  border-left: 3px solid var(--gold);
  padding: 1.5rem 1.5rem 1.5rem 2rem;
  margin: 2rem 0;
  position: relative;
  border-radius: 0 4px 4px 0;
}
.flashback-label {
  display: inline-block;
  font-family: 'Inter', sans-serif;
  font-size: 0.6rem;
  font-weight: 600;
  letter-spacing: 0.15em;
  color: var(--gold);
  background: rgba(215,168,62,0.12);
  padding: 0.2rem 0.6rem;
  border-radius: 2px;
  margin-bottom: 1rem;
  text-transform: uppercase;
}

.quote-importante {
  font-style: italic;
  color: var(--gold-light);
  font-size: 1.15em;
  padding: 0.5rem 1rem;
  border-left: 2px solid rgba(215,168,62,0.4);
  margin: 1rem 0;
}

.vision-block {
  background: rgba(3,7,11,0.8);
  border: 1px solid rgba(215,168,62,0.2);
  padding: 1.5rem;
  margin: 2rem 0;
  position: relative;
}

.microtexto {
  font-family: 'Inter', sans-serif;
  font-size: 0.7rem;
  color: rgba(215,168,62,0.45);
  letter-spacing: 0.08em;
  text-align: right;
  font-style: italic;
}

.nav-link {
  font-family: 'Inter', sans-serif;
  font-size: 0.8rem;
  font-weight: 500;
  letter-spacing: 0.06em;
  color: rgba(242,233,208,0.7);
  text-decoration: none;
  transition: color 0.2s;
  text-transform: uppercase;
}
.nav-link:hover { color: var(--gold); }

.status-badge {
  font-family: 'Inter', sans-serif;
  font-size: 0.65rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  padding: 0.2rem 0.6rem;
  border-radius: 2px;
}
.status-disponivel { background: rgba(90,110,58,0.25); color: #8aad5a; border: 1px solid rgba(90,110,58,0.4); }
.status-andamento { background: rgba(215,168,62,0.15); color: var(--gold); border: 1px solid rgba(215,168,62,0.3); }
.status-bloqueado { background: rgba(66,18,27,0.4); color: rgba(242,233,208,0.4); border: 1px solid rgba(66,18,27,0.6); }

.reader-content p { margin-bottom: 1.4rem; }
.reader-content .flashback p { margin-bottom: 1rem; }

.threat-dot { width: 8px; height: 8px; border-radius: 50%; display: inline-block; }

.persona-card {
  background: linear-gradient(135deg, rgba(12,53,80,0.6) 0%, rgba(7,21,34,0.9) 100%);
  border: 1px solid rgba(215,168,62,0.2);
  border-radius: 4px;
  padding: 1.5rem;
  transition: all 0.3s ease;
}
.persona-card:hover { border-color: rgba(215,168,62,0.5); }

.timeline-item { position: relative; padding-left: 2rem; margin-bottom: 2rem; }
.timeline-item::before { content: ''; position: absolute; left: 0; top: 0.5rem; width: 8px; height: 8px; border-radius: 50%; background: var(--gold); }
.timeline-item::after { content: ''; position: absolute; left: 3.5px; top: 1.2rem; width: 1px; height: calc(100% + 0.5rem); background: rgba(215,168,62,0.2); }
.timeline-item:last-child::after { display: none; }

.pista-card {
  border: 1px solid rgba(215,168,62,0.15);
  border-radius: 4px;
  padding: 1.5rem;
  background: rgba(7,21,34,0.8);
  position: relative;
}

.censored { background: rgba(3,7,11,0.9); color: transparent; border-radius: 2px; cursor: default; }

@keyframes wave { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-8px); } }
.wave-anim { animation: wave 4s ease-in-out infinite; }
@media (prefers-reduced-motion: reduce) { .wave-anim, * { animation: none !important; transition: none !important; } }

.hero-gradient {
  background: linear-gradient(180deg, rgba(3,7,11,0.3) 0%, rgba(7,21,34,0.7) 60%, var(--navy) 100%);
}

.skip-link { position: absolute; top: -100px; left: 1rem; background: var(--gold); color: var(--abyss); padding: 0.5rem 1rem; border-radius: 2px; font-family: 'Inter', sans-serif; font-weight: 600; text-decoration: none; z-index: 9999; }
.skip-link:focus { top: 1rem; }

*:focus-visible { outline: 2px solid var(--gold); outline-offset: 2px; }

::-webkit-scrollbar { width: 6px; }
::-webkit-scrollbar-track { background: var(--abyss); }
::-webkit-scrollbar-thumb { background: rgba(215,168,62,0.4); border-radius: 3px; }
::-webkit-scrollbar-thumb:hover { background: rgba(215,168,62,0.7); }
CSSEOF

cat > src/components/layout/Header.tsx << 'HEOF'
"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Search, BookOpen } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);
  const nav = [
    { href: "/volumes", label: "Volumes" },
    { href: "/personagens", label: "Personagens" },
    { href: "/poderes", label: "Poderes" },
    { href: "/locais", label: "Locais" },
    { href: "/cronologia", label: "Cronologia" },
    { href: "/pistas", label: "Pistas" },
    { href: "/frases", label: "Frases" },
    { href: "/sobre", label: "Sobre" },
  ];
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-[#03070B]/95 backdrop-blur border-b border-[rgba(215,168,62,0.15)]" : "bg-transparent"}`}>
      <a href="#main" className="skip-link">Ir para conteúdo</a>
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-2 group">
          <BookOpen size={20} className="text-[#D7A83E] group-hover:text-[#F4D77A] transition-colors" />
          <span className="font-serif font-bold text-[#F4D77A] tracking-widest text-sm uppercase">One Treasure</span>
        </Link>
        <nav className="hidden lg:flex items-center gap-6" aria-label="Navegação principal">
          {nav.map(n => <Link key={n.href} href={n.href} className="nav-link">{n.label}</Link>)}
        </nav>
        <div className="flex items-center gap-3">
          <Link href="/buscar" className="nav-link flex items-center gap-1" aria-label="Buscar"><Search size={16}/></Link>
          <button className="lg:hidden text-[#D7A83E] p-1" onClick={() => setOpen(!open)} aria-label={open?"Fechar menu":"Abrir menu"} aria-expanded={open}>
            {open ? <X size={22}/> : <Menu size={22}/>}
          </button>
        </div>
      </div>
      {open && (
        <nav className="lg:hidden bg-[#03070B]/98 border-t border-[rgba(215,168,62,0.15)] px-4 pb-6 pt-4" aria-label="Menu mobile">
          {nav.map(n => (
            <Link key={n.href} href={n.href} className="block py-3 nav-link border-b border-[rgba(215,168,62,0.1)]" onClick={() => setOpen(false)}>{n.label}</Link>
          ))}
          <Link href="/admin" className="block py-3 nav-link text-[rgba(215,168,62,0.4)]" onClick={() => setOpen(false)}>Admin</Link>
        </nav>
      )}
    </header>
  );
}
HEOF

cat > src/components/layout/Footer.tsx << 'FEOF'
import Link from "next/link";
export default function Footer() {
  return (
    <footer className="border-t border-[rgba(215,168,62,0.12)] mt-20 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          <div>
            <h3 className="font-serif text-[#F4D77A] text-lg mb-2">One Treasure</h3>
            <p className="text-sm text-[rgba(242,233,208,0.5)] max-w-xs font-ui">O Homem que Enganou o Mundo.<br/>Uma obra original de ficção náutica.</p>
          </div>
          <div className="grid grid-cols-2 gap-x-12 gap-y-2 text-sm font-ui">
            <Link href="/volumes" className="nav-link">Volumes</Link>
            <Link href="/personagens" className="nav-link">Personagens</Link>
            <Link href="/poderes" className="nav-link">Poderes</Link>
            <Link href="/locais" className="nav-link">Locais</Link>
            <Link href="/cronologia" className="nav-link">Cronologia</Link>
            <Link href="/pistas" className="nav-link">Pistas</Link>
            <Link href="/frases" className="nav-link">Frases</Link>
            <Link href="/sobre" className="nav-link">Sobre</Link>
          </div>
        </div>
        <hr className="divider-gold mt-8"/>
        <div className="flex flex-col md:flex-row justify-between items-center gap-2 text-xs font-ui text-[rgba(242,233,208,0.35)]">
          <span>© One Treasure. Todos os direitos reservados.</span>
          <span className="microtexto">Esta informação pode estar incompleta.</span>
        </div>
      </div>
    </footer>
  );
}
FEOF

cat > src/app/layout.tsx << 'LAYEOF'
import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: { default: "One Treasure — O Homem que Enganou o Mundo", template: "%s | One Treasure" },
  description: "Num mundo onde toda verdade pode ser uma mentira, a maior arma não é uma espada. É a história que todos acreditam.",
  openGraph: { title: "One Treasure", description: "O Homem que Enganou o Mundo", type: "website" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <Header/>
        <main id="main">{children}</main>
        <Footer/>
      </body>
    </html>
  );
}
LAYEOF

cat > src/app/page.tsx << 'HOMEEOF'
"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { microtextos, frases, volumes, capitulos } from "@/data/mock";
import { getLastRead } from "@/lib/progress";

export default function Home() {
  const [microtexto, setMicrotexto] = useState("");
  const [frase, setFrase] = useState(frases[0]);
  const [lastRead, setLastRead] = useState<string|null>(null);

  useEffect(() => {
    setMicrotexto(microtextos[Math.floor(Math.random()*microtextos.length)]);
    setFrase(frases[Math.floor(Math.random()*frases.length)]);
    setLastRead(getLastRead());
  }, []);

  const lastCap = capitulos[capitulos.length-1];
  const lastCapVol = volumes.find(v=>v.id===lastCap.volumeId);

  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden" aria-label="Apresentação de One Treasure">
        <div className="absolute inset-0 bg-gradient-to-b from-[#03070B] via-[#071522] to-[#071522]"/>
        <div className="absolute inset-0 opacity-20" style={{backgroundImage:"radial-gradient(ellipse at 50% 30%, #0C3550 0%, transparent 70%)"}}/>
        {/* Ondas decorativas */}
        <svg className="absolute bottom-0 left-0 right-0 wave-anim" viewBox="0 0 1440 120" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0,60 C360,120 1080,0 1440,60 L1440,120 L0,120 Z" fill="rgba(12,53,80,0.25)"/>
        </svg>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-24">
          <p className="font-ui text-xs tracking-widest text-[rgba(215,168,62,0.6)] mb-6 uppercase">Arquivo Oficial</p>
          <h1 className="font-serif text-6xl md:text-8xl font-black text-[#F4D77A] mb-4 leading-none tracking-tight">ONE<br/>TREASURE</h1>
          <p className="font-serif text-xl md:text-2xl text-[rgba(242,233,208,0.7)] mb-8 italic">O Homem que Enganou o Mundo</p>
          <hr className="divider-gold max-w-xs mx-auto"/>
          <p className="font-serif text-lg md:text-xl text-[rgba(242,233,208,0.85)] max-w-2xl mx-auto my-8 italic leading-relaxed">
            "Num mundo onde toda verdade pode ser uma mentira, a maior arma não é uma espada. É a história que todos acreditam."
          </p>
          <div className="flex flex-wrap gap-4 justify-center mt-8">
            <Link href={`/ler/${lastCapVol?.slug}/${lastCap.slug}`} className="btn-primary">Começar a ler</Link>
            <Link href="/volumes" className="btn-ghost">Explorar os volumes</Link>
            <Link href="/pistas" className="btn-ghost">Entrar no arquivo proibido</Link>
          </div>
          {microtexto && <p className="microtexto mt-12">{microtexto}</p>}
        </div>
      </section>

      {/* CONTINUAR LEITURA */}
      {lastRead && (
        <section className="max-w-7xl mx-auto px-4 py-8">
          <div className="bg-[rgba(12,53,80,0.4)] border border-[rgba(215,168,62,0.2)] rounded p-4 flex items-center justify-between gap-4">
            <div>
              <p className="font-ui text-xs text-[rgba(215,168,62,0.6)] uppercase tracking-widest mb-1">Continuar leitura</p>
              <p className="font-serif text-[#F4D77A]">{capitulos.find(c=>c.id===lastRead)?.titulo || "Capítulo salvo"}</p>
            </div>
            <Link href={`/ler/${volumes.find(v=>v.id===capitulos.find(c=>c.id===lastRead)?.volumeId)?.slug}/${capitulos.find(c=>c.id===lastRead)?.slug}`} className="btn-primary text-sm whitespace-nowrap">Continuar</Link>
          </div>
        </section>
      )}

      {/* VOLUMES */}
      <section className="max-w-7xl mx-auto px-4 py-16" aria-label="Volumes disponíveis">
        <div className="flex items-end justify-between mb-8">
          <div>
            <p className="font-ui text-xs tracking-widest text-[rgba(215,168,62,0.6)] uppercase mb-2">Biblioteca</p>
            <h2 className="font-serif text-3xl text-[#F4D77A]">Volumes</h2>
          </div>
          <Link href="/volumes" className="nav-link text-[rgba(215,168,62,0.6)] hover:text-[#D7A83E]">Ver todos</Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {volumes.map(v=>(
            <article key={v.id} className="card-volume p-6">
              <div className="flex items-start justify-between mb-4">
                <span className="font-ui text-xs text-[rgba(215,168,62,0.5)] tracking-widest">Vol. {v.numero}</span>
                <span className={`status-badge ${v.status==="disponivel"?"status-disponivel":v.status==="em-andamento"?"status-andamento":"status-bloqueado"}`}>
                  {v.status==="disponivel"?"Disponível":v.status==="em-andamento"?"Em andamento":"Bloqueado"}
                </span>
              </div>
              <h3 className="font-serif text-xl text-[#F4D77A] mb-2">{v.titulo}</h3>
              <p className="font-serif italic text-[rgba(242,233,208,0.6)] text-sm mb-4">{v.subtitulo}</p>
              <p className="text-sm text-[rgba(242,233,208,0.7)] mb-6 line-clamp-3">{v.descricao}</p>
              <Link href={`/volumes/${v.slug}`} className="btn-ghost text-sm">Abrir volume</Link>
            </article>
          ))}
        </div>
      </section>

      {/* FRASE ALEATÓRIA */}
      <section className="py-20 px-4 text-center relative overflow-hidden" aria-label="Frase de destaque">
        <div className="absolute inset-0 opacity-5" style={{backgroundImage:"radial-gradient(ellipse at 50% 50%, #D7A83E 0%, transparent 70%)"}} aria-hidden="true"/>
        <div className="relative max-w-3xl mx-auto">
          <p className="font-ui text-xs tracking-widest text-[rgba(215,168,62,0.5)] uppercase mb-6">— {frase.personagem}</p>
          <blockquote className="font-serif text-2xl md:text-3xl italic text-[#F4D77A] leading-relaxed mb-6">"{frase.texto}"</blockquote>
          <p className="font-ui text-xs text-[rgba(242,233,208,0.4)]">{frase.volume}</p>
        </div>
      </section>

      {/* O MUNDO ACREDITA / VERDADE */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="border border-[rgba(143,29,44,0.4)] rounded p-8 bg-[rgba(66,18,27,0.2)]">
            <p className="font-ui text-xs tracking-widest text-[rgba(143,29,44,0.8)] uppercase mb-4">O mundo acredita que...</p>
            <p className="font-serif text-lg text-[rgba(242,233,208,0.8)] italic">El Denotas é um criminoso comum, um vigarista de rota menor, sem plano maior que o próximo golpe.</p>
          </div>
          <div className="border border-[rgba(215,168,62,0.3)] rounded p-8 bg-[rgba(12,53,80,0.2)]">
            <p className="font-ui text-xs tracking-widest text-[rgba(215,168,62,0.7)] uppercase mb-4">Mas a verdade pode ser...</p>
            <p className="font-serif text-lg text-[rgba(242,233,208,0.8)] italic">Cada golpe, cada identidade, cada mentira é uma peça de algo muito maior. E o mundo já está dentro do plano.</p>
          </div>
        </div>
      </section>

      {/* CHAMADA PERSONAGENS */}
      <section className="max-w-7xl mx-auto px-4 py-16" aria-label="Personagens">
        <div className="text-center mb-8">
          <p className="font-ui text-xs tracking-widest text-[rgba(215,168,62,0.6)] uppercase mb-2">Arquivo de Rostos</p>
          <h2 className="font-serif text-3xl text-[#F4D77A]">Personagens</h2>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          {["El Denotas","Kairos","Kael Tempest","Francis del Láguas Negras"].map(n=>(
            <Link key={n} href={`/personagens/${n.toLowerCase().replace(/\s+/g,"-").replace(/[^a-z0-9-]/g,"")}`} className="btn-ghost text-sm">{n}</Link>
          ))}
          <Link href="/personagens" className="btn-primary text-sm">Ver todos</Link>
        </div>
      </section>
    </>
  );
}
HOMEEOF

cat > src/app/volumes/page.tsx << 'VOLEOF'
import Link from "next/link";
import { volumes } from "@/data/mock";
import type { Metadata } from "next";
export const metadata: Metadata = { title: "Volumes — Biblioteca" };
export default function VolumesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 pt-28 pb-20">
      <div className="mb-12">
        <p className="font-ui text-xs tracking-widest text-[rgba(215,168,62,0.6)] uppercase mb-3">Arquivo Oficial</p>
        <h1 className="font-serif text-5xl text-[#F4D77A] mb-4">Biblioteca de Volumes</h1>
        <p className="font-serif italic text-[rgba(242,233,208,0.6)] max-w-xl">Cada volume é um capítulo do que o mundo acredita ter acontecido. Leia com cautela.</p>
      </div>
      <hr className="divider-gold mb-12"/>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {volumes.map(v=>(
          <article key={v.id} className="card-volume p-8 flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <span className="font-ui text-xs text-[rgba(215,168,62,0.5)] tracking-widest uppercase">Volume {v.numero}</span>
              <span className={`status-badge ${v.status==="disponivel"?"status-disponivel":v.status==="em-andamento"?"status-andamento":"status-bloqueado"}`}>
                {v.status==="disponivel"?"Disponível":v.status==="em-andamento"?"Em andamento":"Bloqueado"}
              </span>
            </div>
            <div>
              <h2 className="font-serif text-2xl text-[#F4D77A] mb-1">{v.titulo}</h2>
              <p className="font-serif italic text-[rgba(242,233,208,0.55)] text-sm">{v.subtitulo}</p>
            </div>
            <hr className="divider-gold"/>
            <p className="text-sm text-[rgba(242,233,208,0.75)] flex-1 leading-relaxed">{v.descricao}</p>
            {v.capitulos.length>0 && <p className="font-ui text-xs text-[rgba(215,168,62,0.5)]">{v.capitulos.length} capítulo{v.capitulos.length!==1?"s":""}</p>}
            <Link href={`/volumes/${v.slug}`} className="btn-primary text-center text-sm mt-2">Abrir volume</Link>
          </article>
        ))}
      </div>
      <p className="microtexto mt-12">Não confie em mapas perfeitos.</p>
    </div>
  );
}
VOLEOF

cat > src/app/volumes/\[slug\]/page.tsx << 'VOLSEOF'
import Link from "next/link";
import { volumes, capitulos } from "@/data/mock";
import { notFound } from "next/navigation";
export default function VolumePage({ params }: { params: { slug: string } }) {
  const vol = volumes.find(v=>v.slug===params.slug);
  if (!vol) notFound();
  const caps = capitulos.filter(c=>c.volumeId===vol.id);
  return (
    <div className="max-w-4xl mx-auto px-4 pt-28 pb-20">
      <nav className="font-ui text-xs text-[rgba(242,233,208,0.4)] mb-8" aria-label="Breadcrumb">
        <Link href="/" className="hover:text-[#D7A83E]">Início</Link> / <Link href="/volumes" className="hover:text-[#D7A83E]">Volumes</Link> / <span className="text-[#D7A83E]">{vol.titulo}</span>
      </nav>
      <div className="mb-4 flex items-center gap-3">
        <span className="font-ui text-xs text-[rgba(215,168,62,0.5)] tracking-widest uppercase">Volume {vol.numero}</span>
        <span className={`status-badge ${vol.status==="disponivel"?"status-disponivel":vol.status==="em-andamento"?"status-andamento":"status-bloqueado"}`}>
          {vol.status==="disponivel"?"Disponível":vol.status==="em-andamento"?"Em andamento":"Bloqueado"}
        </span>
      </div>
      <h1 className="font-serif text-5xl text-[#F4D77A] mb-2">{vol.titulo}</h1>
      <p className="font-serif italic text-[rgba(242,233,208,0.6)] text-xl mb-8">{vol.subtitulo}</p>
      <hr className="divider-gold mb-8"/>
      <p className="text-[rgba(242,233,208,0.8)] mb-12 leading-relaxed text-lg">{vol.descricao}</p>
      {caps.length>0 ? (
        <div>
          <h2 className="font-serif text-2xl text-[#F4D77A] mb-6">Capítulos</h2>
          <div className="space-y-4">
            {caps.map(c=>(
              <Link key={c.id} href={`/ler/${vol.slug}/${c.slug}`} className="block card-volume p-5 group">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1">
                      <span className="font-ui text-xs text-[rgba(215,168,62,0.5)]">Cap. {c.numero}</span>
                      <span className="font-ui text-xs text-[rgba(242,233,208,0.35)]">{c.duracaoEstimada}</span>
                    </div>
                    <h3 className="font-serif text-lg text-[#F4D77A] group-hover:text-[#F4D77A] mb-1">{c.titulo}</h3>
                    <p className="text-sm text-[rgba(242,233,208,0.6)] line-clamp-2">{c.resumo}</p>
                  </div>
                  <span className="font-ui text-xs text-[rgba(215,168,62,0.5)] mt-1 whitespace-nowrap">Ler →</span>
                </div>
              </Link>
            ))}
          </div>
          {caps.length>0 && <div className="mt-8"><Link href={`/ler/${vol.slug}/${caps[0].slug}`} className="btn-primary">Começar volume</Link></div>}
        </div>
      ) : (
        <div className="text-center py-16">
          <p className="font-serif italic text-[rgba(242,233,208,0.5)] text-lg">Capítulos ainda não disponíveis.</p>
          <p className="microtexto mt-4">Esta informação pode estar incompleta.</p>
        </div>
      )}
    </div>
  );
}
VOLSEOF

mkdir -p "src/app/ler/[volumeSlug]/[capituloSlug]"
cat > "src/app/ler/[volumeSlug]/[capituloSlug]/page.tsx" << 'READEOF'
"use client";
import Link from "next/link";
import { useState, useEffect, useCallback } from "react";
import { volumes, capitulos } from "@/data/mock";
import { saveProgress, markRead, isFavorite, toggleFavorite } from "@/lib/progress";
import { notFound } from "next/navigation";
import { Bookmark, Heart, ChevronLeft, ChevronRight, Settings, ArrowLeft } from "lucide-react";

export default function ReaderPage({ params }: { params: { volumeSlug: string; capituloSlug: string } }) {
  const vol = volumes.find(v=>v.slug===params.volumeSlug);
  const cap = capitulos.find(c=>c.slug===params.capituloSlug);
  if (!vol || !cap) return notFound();
  const caps = capitulos.filter(c=>c.volumeId===vol.id);
  const idx = caps.findIndex(c=>c.id===cap.id);
  const prev = idx>0?caps[idx-1]:null;
  const next = idx<caps.length-1?caps[idx+1]:null;

  const [fontSize, setFontSize] = useState(18);
  const [theme, setTheme] = useState<"dark"|"light"|"black">("dark");
  const [fav, setFav] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [toast, setToast] = useState("");

  useEffect(() => {
    setFav(isFavorite("capitulo", cap.id));
    markRead(cap.id);
    saveProgress(cap.id, 100);
  }, [cap.id]);

  const showToast = (msg: string) => { setToast(msg); setTimeout(()=>setToast(""),2500); };

  const handleFav = () => {
    const r = toggleFavorite("capitulo", cap.id);
    setFav(r);
    showToast(r?"Adicionado aos favoritos":"Removido dos favoritos");
  };

  useEffect(()=>{
    const h = (e: KeyboardEvent) => {
      if(e.key==="ArrowLeft"&&prev) window.location.href=`/ler/${vol.slug}/${prev.slug}`;
      if(e.key==="ArrowRight"&&next) window.location.href=`/ler/${vol.slug}/${next.slug}`;
    };
    window.addEventListener("keydown",h);
    return ()=>window.removeEventListener("keydown",h);
  },[prev,next,vol.slug]);

  const themeStyles: Record<string,string> = {
    dark: "bg-[#071522] text-[#F2E9D0]",
    light: "bg-[#F5EDD6] text-[#1a1209]",
    black: "bg-[#03070B] text-[#D8C39A]"
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${themeStyles[theme]}`}>
      {/* TOPBAR */}
      <div className={`fixed top-0 left-0 right-0 z-40 border-b ${theme==="light"?"border-[rgba(0,0,0,0.1)] bg-[#F5EDD6]/95":"border-[rgba(215,168,62,0.15)] bg-[#03070B]/95"} backdrop-blur`}>
        <div className="max-w-4xl mx-auto px-4 h-14 flex items-center justify-between gap-4">
          <Link href={`/volumes/${vol.slug}`} className="flex items-center gap-2 font-ui text-sm text-[rgba(215,168,62,0.7)] hover:text-[#D7A83E] transition-colors">
            <ArrowLeft size={16}/> {vol.titulo}
          </Link>
          <div className="hidden sm:block text-center">
            <p className="font-ui text-xs text-[rgba(215,168,62,0.5)]">Cap. {cap.numero}</p>
          </div>
          <div className="flex items-center gap-3">
            <button onClick={handleFav} aria-label={fav?"Remover favorito":"Adicionar favorito"} className={`p-1.5 transition-colors ${fav?"text-red-400":"text-[rgba(215,168,62,0.5)] hover:text-[#D7A83E]"}`}>
              <Heart size={16} fill={fav?"currentColor":"none"}/>
            </button>
            <button onClick={()=>setShowSettings(!showSettings)} aria-label="Configurações de leitura" className="p-1.5 text-[rgba(215,168,62,0.5)] hover:text-[#D7A83E] transition-colors">
              <Settings size={16}/>
            </button>
          </div>
        </div>
        {showSettings && (
          <div className={`border-t ${theme==="light"?"border-[rgba(0,0,0,0.1)] bg-[#F5EDD6]":"border-[rgba(215,168,62,0.1)] bg-[#03070B]"} px-4 py-3`}>
            <div className="max-w-4xl mx-auto flex flex-wrap items-center gap-6">
              <div className="flex items-center gap-3">
                <span className="font-ui text-xs text-[rgba(215,168,62,0.6)]">Fonte</span>
                <button onClick={()=>setFontSize(f=>Math.max(14,f-2))} className="font-ui text-xs px-2 py-1 border border-[rgba(215,168,62,0.3)] rounded text-[#D7A83E]">A-</button>
                <span className="font-ui text-xs">{fontSize}px</span>
                <button onClick={()=>setFontSize(f=>Math.min(26,f+2))} className="font-ui text-xs px-2 py-1 border border-[rgba(215,168,62,0.3)] rounded text-[#D7A83E]">A+</button>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-ui text-xs text-[rgba(215,168,62,0.6)]">Tema</span>
                {(["dark","light","black"] as const).map(t=>(
                  <button key={t} onClick={()=>setTheme(t)} className={`font-ui text-xs px-2 py-1 border rounded transition-all ${theme===t?"border-[#D7A83E] text-[#D7A83E]":"border-[rgba(215,168,62,0.2)] text-[rgba(215,168,62,0.5)]"}`}>
                    {t==="dark"?"Escuro":t==="light"?"Claro":"Mar Negro"}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* CONTEÚDO */}
      <div className={`pt-24 pb-20 px-4 ${showSettings?"pt-36":""}`}>
        <article className="max-w-2xl mx-auto" style={{fontSize:`${fontSize}px`}}>
          <header className="mb-10 text-center">
            <p className="font-ui text-xs tracking-widest text-[rgba(215,168,62,0.5)] uppercase mb-3">Vol. {vol.numero} — Cap. {cap.numero}</p>
            <h1 className="font-serif text-4xl text-[#F4D77A] mb-4">{cap.titulo}</h1>
            <p className="font-ui text-sm text-[rgba(215,168,62,0.4)]">{cap.duracaoEstimada} de leitura</p>
          </header>
          <hr className="divider-gold mb-10"/>
          <div className="reader-content" dangerouslySetInnerHTML={{__html:cap.conteudo}}/>
          <hr className="divider-gold mt-12 mb-8"/>

          {/* NAVEGAÇÃO */}
          <nav className="flex items-center justify-between gap-4" aria-label="Navegação entre capítulos">
            {prev ? (
              <Link href={`/ler/${vol.slug}/${prev.slug}`} className="btn-ghost text-sm flex items-center gap-2">
                <ChevronLeft size={16}/> Cap. {prev.numero}
              </Link>
            ) : <span/>}
            <Link href={`/volumes/${vol.slug}`} className="font-ui text-xs text-[rgba(215,168,62,0.5)] hover:text-[#D7A83E]">Ver volume</Link>
            {next ? (
              <Link href={`/ler/${vol.slug}/${next.slug}`} className="btn-primary text-sm flex items-center gap-2">
                Cap. {next.numero} <ChevronRight size={16}/>
              </Link>
            ) : <span className="font-ui text-xs text-[rgba(215,168,62,0.4)] italic">Fim do volume disponível</span>}
          </nav>
          <p className="microtexto mt-8">O leitor também faz parte do plano.</p>
        </article>
      </div>

      {/* TOAST */}
      {toast && (
        <div role="status" className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-[#0C3550] border border-[rgba(215,168,62,0.3)] text-[#F4D77A] font-ui text-sm px-5 py-3 rounded shadow-xl z-50">
          {toast}
        </div>
      )}
    </div>
  );
}
READEOF

cat > src/app/personagens/page.tsx << 'PEREOF'
import Link from "next/link";
import { personagens } from "@/data/mock";
import type { Metadata } from "next";
export const metadata: Metadata = { title: "Personagens" };
export default function PersonagensPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 pt-28 pb-20">
      <div className="mb-12">
        <p className="font-ui text-xs tracking-widest text-[rgba(215,168,62,0.6)] uppercase mb-3">Arquivo de Rostos</p>
        <h1 className="font-serif text-5xl text-[#F4D77A] mb-4">Personagens</h1>
        <p className="font-serif italic text-[rgba(242,233,208,0.6)] max-w-xl">Cada ficha contém o que se sabe oficialmente. O que se suspeita está em outra camada.</p>
      </div>
      <hr className="divider-gold mb-12"/>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {personagens.map(p=>(
          <Link key={p.id} href={`/personagens/${p.slug}`} className="card-volume p-6 block group">
            <div className="flex items-start justify-between mb-3">
              <span className="font-ui text-xs tracking-widest text-[rgba(215,168,62,0.5)] uppercase">{p.faccao}</span>
              <div className="flex gap-1" aria-label={`Nível de ameaça: ${p.ameaca} de 5`}>
                {Array.from({length:5}).map((_,i)=>(
                  <span key={i} className={`threat-dot ${i<p.ameaca?"bg-[#D7A83E]":"bg-[rgba(215,168,62,0.15)]"}`}/>
                ))}
              </div>
            </div>
            <h2 className="font-serif text-xl text-[#F4D77A] mb-1 group-hover:text-[#F4D77A]">{p.nome}</h2>
            {p.titulo && <p className="font-ui text-xs text-[rgba(215,168,62,0.5)] tracking-wider mb-3 uppercase">{p.titulo}</p>}
            <p className="text-sm text-[rgba(242,233,208,0.7)] line-clamp-3 leading-relaxed">{p.descricao}</p>
            {p.aliases && p.aliases.length>1 && (
              <p className="font-ui text-xs text-[rgba(215,168,62,0.4)] mt-3 tracking-widest">+{p.aliases.length-1} alias{p.aliases.length>2?"es":""}</p>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
}
PEREOF

cat > src/app/personagens/\[slug\]/page.tsx << 'PERDSEOF'
"use client";
import { personagens, personas } from "@/data/mock";
import { notFound } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
export default function PersonagemPage({ params }: { params: { slug: string } }) {
  const p = personagens.find(x=>x.slug===params.slug);
  if (!p) return notFound();
  const ps = personas.filter(x=>x.personagemId===p.id);
  const [spoiler, setSpoiler] = useState(false);
  return (
    <div className="max-w-4xl mx-auto px-4 pt-28 pb-20">
      <nav className="font-ui text-xs text-[rgba(242,233,208,0.4)] mb-8">
        <Link href="/" className="hover:text-[#D7A83E]">Início</Link> / <Link href="/personagens" className="hover:text-[#D7A83E]">Personagens</Link> / <span className="text-[#D7A83E]">{p.nome}</span>
      </nav>
      <div className="flex items-start justify-between gap-4 mb-4 flex-wrap">
        <div>
          <p className="font-ui text-xs tracking-widest text-[rgba(215,168,62,0.5)] uppercase mb-2">{p.faccao}</p>
          <h1 className="font-serif text-5xl text-[#F4D77A] mb-1">{p.nome}</h1>
          {p.titulo && <p className="font-ui text-sm tracking-widest text-[rgba(215,168,62,0.6)] uppercase">{p.titulo}</p>}
        </div>
        <div className="flex gap-1 mt-2" aria-label={`Nível de ameaça ${p.ameaca} de 5`}>
          {Array.from({length:5}).map((_,i)=>(
            <span key={i} className={`threat-dot ${i<p.ameaca?"bg-[#D7A83E]":"bg-[rgba(215,168,62,0.15)]"}`}/>
          ))}
        </div>
      </div>
      <hr className="divider-gold mb-8"/>
      {p.aliases.length>1 && (
        <div className="mb-6">
          <p className="font-ui text-xs tracking-widest text-[rgba(215,168,62,0.5)] uppercase mb-2">Aliases</p>
          <div className="flex flex-wrap gap-2">
            {p.aliases.map(a=><span key={a} className="font-ui text-xs px-3 py-1 border border-[rgba(215,168,62,0.2)] rounded text-[rgba(242,233,208,0.7)] tracking-widest">{a}</span>)}
          </div>
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
        <div>
          <h2 className="font-serif text-xl text-[#F4D77A] mb-3">Perfil</h2>
          <p className="text-[rgba(242,233,208,0.8)] leading-relaxed">{spoiler?p.descricaoSpoilers:p.descricao}</p>
        </div>
        <div className="space-y-4">
          <div>
            <p className="font-ui text-xs tracking-widest text-[rgba(215,168,62,0.5)] uppercase mb-2">Personalidade</p>
            <p className="text-sm text-[rgba(242,233,208,0.7)]">{p.personalidade}</p>
          </div>
          <div>
            <p className="font-ui text-xs tracking-widest text-[rgba(215,168,62,0.5)] uppercase mb-2">Aparência</p>
            <p className="text-sm text-[rgba(242,233,208,0.7)]">{p.aparencia}</p>
          </div>
          <div>
            <p className="font-ui text-xs tracking-widest text-[rgba(215,168,62,0.5)] uppercase mb-2">Poderes</p>
            <div className="flex flex-wrap gap-2">{p.poderes.length?p.poderes.map(x=><span key={x} className="font-ui text-xs px-2 py-1 bg-[rgba(12,53,80,0.5)] border border-[rgba(215,168,62,0.2)] rounded text-[#D7A83E]">{x}</span>):<span className="font-ui text-xs text-[rgba(242,233,208,0.4)]">Nenhum confirmado</span>}</div>
          </div>
          <div>
            <p className="font-ui text-xs tracking-widest text-[rgba(215,168,62,0.5)] uppercase mb-2">Armas</p>
            <div className="flex flex-wrap gap-2">{p.armas.map(x=><span key={x} className="font-ui text-xs px-2 py-1 border border-[rgba(215,168,62,0.15)] rounded text-[rgba(242,233,208,0.6)]">{x}</span>)}</div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        <div className="border border-[rgba(143,29,44,0.4)] rounded p-5 bg-[rgba(66,18,27,0.2)]">
          <p className="font-ui text-xs tracking-widest text-[rgba(143,29,44,0.8)] uppercase mb-3">Versão Oficial</p>
          <p className="text-sm text-[rgba(242,233,208,0.75)] italic">{p.versaoOficial}</p>
        </div>
        <div className="border border-[rgba(215,168,62,0.25)] rounded p-5 bg-[rgba(12,53,80,0.2)]">
          <p className="font-ui text-xs tracking-widest text-[rgba(215,168,62,0.6)] uppercase mb-3">Versão Suspeita</p>
          <p className="text-sm text-[rgba(242,233,208,0.75)] italic">{spoiler?p.versaoSuspeita:"[INFORMAÇÃO RESTRITA — ative spoilers para ver]"}</p>
        </div>
      </div>
      <div className="mb-10">
        <h2 className="font-serif text-xl text-[#F4D77A] mb-4">Frases Marcantes</h2>
        <div className="space-y-3">
          {p.frases.map((f,i)=><blockquote key={i} className="quote-importante">"{f}"</blockquote>)}
        </div>
      </div>
      {ps.length>0 && (
        <div className="mb-10">
          <h2 className="font-serif text-xl text-[#F4D77A] mb-6">Personas Conhecidas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {ps.map(per=>(
              <div key={per.id} className="persona-card">
                <p className="font-ui text-xs tracking-widest text-[rgba(215,168,62,0.5)] uppercase mb-1">{per.funcao}</p>
                <h3 className="font-serif text-lg text-[#F4D77A] mb-3">{per.nome}</h3>
                <p className="text-sm text-[rgba(242,233,208,0.7)] mb-3">{per.aparencia}</p>
                <p className="font-ui text-xs text-[rgba(215,168,62,0.5)] mb-1">Objetivo aparente</p>
                <p className="text-sm text-[rgba(242,233,208,0.65)] mb-3">{per.objetivoAparente}</p>
                {spoiler && <>
                  <p className="font-ui text-xs text-[rgba(215,168,62,0.5)] mb-1">Objetivo real</p>
                  <p className="text-sm text-[#F4D77A] italic">{per.objetivoReal}</p>
                </>}
              </div>
            ))}
          </div>
        </div>
      )}
      <button onClick={()=>setSpoiler(!spoiler)} className="btn-ghost text-sm">
        {spoiler?"Ocultar spoilers":"Mostrar informações completas"}
      </button>
      <p className="microtexto mt-8">Esta informação pode estar incompleta.</p>
    </div>
  );
}
PERDSEOF

cat > src/app/poderes/page.tsx << 'POWEOF'
import { poderes } from "@/data/mock";
import type { Metadata } from "next";
export const metadata: Metadata = { title: "Sistema de Poderes" };
export default function PoderesPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 pt-28 pb-20">
      <div className="mb-12">
        <p className="font-ui text-xs tracking-widest text-[rgba(215,168,62,0.6)] uppercase mb-3">Documento Confidencial</p>
        <h1 className="font-serif text-5xl text-[#F4D77A] mb-4">Sistema de Poderes</h1>
        <p className="font-serif italic text-[rgba(242,233,208,0.6)] max-w-xl">Três pilares. Cada um com limites. O poder só é interessante quando possui limite.</p>
      </div>
      <div className="border border-[rgba(215,168,62,0.3)] rounded p-6 bg-[rgba(12,53,80,0.2)] mb-12 text-center">
        <p className="font-serif text-2xl text-[#F4D77A] italic">"O poder só é interessante quando possui limite."</p>
      </div>
      <hr className="divider-gold mb-12"/>
      <div className="space-y-8 mb-16">
        {poderes.map(p=>(
          <div key={p.id} className="card-volume p-8">
            <div className="flex items-start justify-between gap-4 mb-4 flex-wrap">
              <div>
                <span className="font-ui text-xs tracking-widest text-[rgba(215,168,62,0.5)] uppercase">{p.categoria}</span>
                <h2 className="font-serif text-2xl text-[#F4D77A] mt-1">{p.nome}</h2>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="font-ui text-xs text-[rgba(215,168,62,0.5)] uppercase tracking-widest mb-2">Descrição</p>
                <p className="text-[rgba(242,233,208,0.8)] leading-relaxed text-sm">{p.descricao}</p>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="font-ui text-xs text-[rgba(215,168,62,0.5)] uppercase tracking-widest mb-1">Limitações</p>
                  <p className="text-sm text-[rgba(242,233,208,0.7)]">{p.limitacoes}</p>
                </div>
                <div>
                  <p className="font-ui text-xs text-[rgba(215,168,62,0.5)] uppercase tracking-widest mb-1">Custo</p>
                  <p className="text-sm text-[rgba(242,233,208,0.7)]">{p.custo}</p>
                </div>
                <div>
                  <p className="font-ui text-xs text-[rgba(215,168,62,0.5)] uppercase tracking-widest mb-1">Usuários conhecidos</p>
                  <div className="flex flex-wrap gap-2">{p.usuarios.map(u=><span key={u} className="font-ui text-xs px-2 py-1 border border-[rgba(215,168,62,0.2)] rounded text-[#D7A83E]">{u}</span>)}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="overflow-x-auto">
        <h2 className="font-serif text-2xl text-[#F4D77A] mb-6">Comparativo</h2>
        <table className="w-full text-sm font-ui border-collapse">
          <thead>
            <tr className="border-b border-[rgba(215,168,62,0.2)]">
              {["Sistema","Categoria","Origem","Custo"].map(h=><th key={h} className="text-left py-3 px-4 text-[rgba(215,168,62,0.6)] tracking-widest text-xs uppercase">{h}</th>)}
            </tr>
          </thead>
          <tbody>
            {poderes.map(p=>(
              <tr key={p.id} className="border-b border-[rgba(215,168,62,0.08)] hover:bg-[rgba(12,53,80,0.3)] transition-colors">
                <td className="py-3 px-4 text-[#F4D77A] font-medium">{p.nome}</td>
                <td className="py-3 px-4 text-[rgba(242,233,208,0.7)]">{p.categoria}</td>
                <td className="py-3 px-4 text-[rgba(242,233,208,0.6)]">{p.origem}</td>
                <td className="py-3 px-4 text-[rgba(242,233,208,0.6)]">{p.custo}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
POWEOF

cat > src/app/locais/page.tsx << 'LOCEOF'
import Link from "next/link";
import { locais } from "@/data/mock";
import type { Metadata } from "next";
export const metadata: Metadata = { title: "Locais" };
export default function LocaisPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 pt-28 pb-20">
      <div className="mb-12">
        <p className="font-ui text-xs tracking-widest text-[rgba(215,168,62,0.6)] uppercase mb-3">Mapa do Mundo</p>
        <h1 className="font-serif text-5xl text-[#F4D77A] mb-4">Locais</h1>
        <p className="font-serif italic text-[rgba(242,233,208,0.6)] max-w-xl">Alguns lugares existem nos mapas. Outros existem apenas para quem sabe procurar.</p>
      </div>
      <hr className="divider-gold mb-12"/>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {locais.map(l=>(
          <Link key={l.id} href={`/locais/${l.slug}`} className="card-volume p-6 block group">
            <div className="flex items-center justify-between mb-3">
              <span className="font-ui text-xs text-[rgba(215,168,62,0.5)] tracking-widest">Mistério</span>
              <div className="flex gap-1">{Array.from({length:5}).map((_,i)=><span key={i} className={`threat-dot ${i<l.nivelMisterio?"bg-[#D7A83E]":"bg-[rgba(215,168,62,0.15)]"}`}/>)}</div>
            </div>
            <h2 className="font-serif text-xl text-[#F4D77A] mb-3 group-hover:text-[#F4D77A]">{l.nome}</h2>
            <p className="text-sm text-[rgba(242,233,208,0.7)] line-clamp-3 leading-relaxed mb-4">{l.descricao}</p>
            <p className="font-ui text-xs text-[rgba(242,233,208,0.35)]">{l.clima}</p>
          </Link>
        ))}
      </div>
      <p className="microtexto mt-12">Não confie em mapas perfeitos.</p>
    </div>
  );
}
LOCEOF

cat > src/app/locais/\[slug\]/page.tsx << 'LOCDSEOF'
"use client";
import { locais } from "@/data/mock";
import { notFound } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
export default function LocalPage({ params }: { params: { slug: string } }) {
  const l = locais.find(x=>x.slug===params.slug);
  if (!l) return notFound();
  const [spoiler, setSpoiler] = useState(false);
  return (
    <div className="max-w-4xl mx-auto px-4 pt-28 pb-20">
      <nav className="font-ui text-xs text-[rgba(242,233,208,0.4)] mb-8">
        <Link href="/" className="hover:text-[#D7A83E]">Início</Link> / <Link href="/locais" className="hover:text-[#D7A83E]">Locais</Link> / <span className="text-[#D7A83E]">{l.nome}</span>
      </nav>
      <div className="flex items-center gap-3 mb-3">
        <span className="font-ui text-xs text-[rgba(215,168,62,0.5)] uppercase tracking-widest">Nível de mistério</span>
        <div className="flex gap-1">{Array.from({length:5}).map((_,i)=><span key={i} className={`threat-dot ${i<l.nivelMisterio?"bg-[#D7A83E]":"bg-[rgba(215,168,62,0.15)]"}`}/>)}</div>
      </div>
      <h1 className="font-serif text-5xl text-[#F4D77A] mb-8">{l.nome}</h1>
      <hr className="divider-gold mb-8"/>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
        <div>
          <p className="text-[rgba(242,233,208,0.8)] leading-relaxed mb-6">{l.descricao}</p>
          <div className="space-y-3">
            <div><p className="font-ui text-xs text-[rgba(215,168,62,0.5)] uppercase tracking-widest mb-1">Clima</p><p className="text-sm text-[rgba(242,233,208,0.7)]">{l.clima}</p></div>
            <div><p className="font-ui text-xs text-[rgba(215,168,62,0.5)] uppercase tracking-widest mb-1">Facções</p><div className="flex flex-wrap gap-2">{l.faccoes.map(f=><span key={f} className="font-ui text-xs px-2 py-1 border border-[rgba(215,168,62,0.2)] rounded text-[#D7A83E]">{f}</span>)}</div></div>
            <div><p className="font-ui text-xs text-[rgba(215,168,62,0.5)] uppercase tracking-widest mb-1">Perigos</p><ul className="list-disc list-inside text-sm text-[rgba(242,233,208,0.7)] space-y-1">{l.perigos.map(p=><li key={p}>{p}</li>)}</ul></div>
            <div><p className="font-ui text-xs text-[rgba(215,168,62,0.5)] uppercase tracking-widest mb-1">Personagens ligados</p><div className="flex flex-wrap gap-2">{l.personagens.map(p=><span key={p} className="font-ui text-xs px-2 py-1 border border-[rgba(215,168,62,0.15)] rounded text-[rgba(242,233,208,0.6)]">{p}</span>)}</div></div>
          </div>
        </div>
        <div className="space-y-6">
          <div className="border border-[rgba(143,29,44,0.4)] rounded p-5 bg-[rgba(66,18,27,0.2)]">
            <p className="font-ui text-xs tracking-widest text-[rgba(143,29,44,0.8)] uppercase mb-3">Versão Oficial</p>
            <p className="text-sm text-[rgba(242,233,208,0.75)] italic">{l.versaoOficial}</p>
          </div>
          <div className="border border-[rgba(215,168,62,0.25)] rounded p-5 bg-[rgba(12,53,80,0.2)]">
            <p className="font-ui text-xs tracking-widest text-[rgba(215,168,62,0.6)] uppercase mb-3">Versão Suspeita</p>
            <p className="text-sm text-[rgba(242,233,208,0.75)] italic">{spoiler?l.versaoSuspeita:"[RESTRITO — ative spoilers]"}</p>
          </div>
        </div>
      </div>
      <button onClick={()=>setSpoiler(!spoiler)} className="btn-ghost text-sm">{spoiler?"Ocultar spoilers":"Revelar versão suspeita"}</button>
      <p className="microtexto mt-8">Você encontrou uma pista. Ou foi encontrado por ela.</p>
    </div>
  );
}
LOCDSEOF

cat > src/app/cronologia/page.tsx << 'CRONOEOF'
"use client";
import { cronologia } from "@/data/mock";
import { useState } from "react";
export default function CronologiaPage() {
  const [spoiler, setSpoiler] = useState(false);
  const [filtro, setFiltro] = useState("Todos");
  const vols = ["Todos", ...Array.from(new Set(cronologia.map(e=>e.volume)))];
  const filtered = cronologia.filter(e=>filtro==="Todos"||e.volume===filtro);
  return (
    <div className="max-w-3xl mx-auto px-4 pt-28 pb-20">
      <div className="mb-12">
        <p className="font-ui text-xs tracking-widest text-[rgba(215,168,62,0.6)] uppercase mb-3">Arquivo Histórico</p>
        <h1 className="font-serif text-5xl text-[#F4D77A] mb-4">Cronologia</h1>
        <p className="font-serif italic text-[rgba(242,233,208,0.6)]">A ordem dos eventos, na versão que foi possível reconstruir.</p>
      </div>
      <div className="flex flex-wrap gap-2 mb-8 items-center">
        {vols.map(v=><button key={v} onClick={()=>setFiltro(v)} className={`font-ui text-xs px-3 py-1.5 border rounded transition-all ${filtro===v?"border-[#D7A83E] text-[#D7A83E]":"border-[rgba(215,168,62,0.2)] text-[rgba(215,168,62,0.5)] hover:border-[rgba(215,168,62,0.4)]"}`}>{v}</button>)}
        <button onClick={()=>setSpoiler(!spoiler)} className={`ml-auto font-ui text-xs px-3 py-1.5 border rounded transition-all ${spoiler?"border-[rgba(143,29,44,0.6)] text-[rgba(143,29,44,0.9)]":"border-[rgba(215,168,62,0.2)] text-[rgba(215,168,62,0.5)]"}`}>{spoiler?"Ocultar spoilers":"Mostrar spoilers"}</button>
      </div>
      <hr className="divider-gold mb-10"/>
      <div>
        {filtered.map(ev=>(
          <div key={ev.id} className="timeline-item">
            <div className="mb-1 flex items-center gap-3">
              <span className="font-ui text-xs text-[rgba(215,168,62,0.5)] tracking-widest uppercase">{ev.volume}</span>
              {ev.spoilerLevel>=2 && !spoiler && <span className="font-ui text-xs text-[rgba(143,29,44,0.6)]">[contém spoilers]</span>}
            </div>
            <h3 className="font-serif text-lg text-[#F4D77A] mb-1">{ev.titulo}</h3>
            <p className="text-sm text-[rgba(242,233,208,0.7)] leading-relaxed">{ev.spoilerLevel>=2&&!spoiler?"[Esta informação foi censurada. Ative spoilers para ver.]":ev.descricao}</p>
          </div>
        ))}
      </div>
      <p className="microtexto mt-12">O mundo lembra da versão errada.</p>
    </div>
  );
}
CRONOEOF

cat > src/app/frases/page.tsx << 'FRASEEOF'
import { frases } from "@/data/mock";
import type { Metadata } from "next";
export const metadata: Metadata = { title: "Frases" };
export default function FrasesPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 pt-28 pb-20">
      <div className="mb-12">
        <p className="font-ui text-xs tracking-widest text-[rgba(215,168,62,0.6)] uppercase mb-3">Arquivo de Palavras</p>
        <h1 className="font-serif text-5xl text-[#F4D77A] mb-4">Frases Marcantes</h1>
        <p className="font-serif italic text-[rgba(242,233,208,0.6)]">Palavras que sobreviveram a quem as disse.</p>
      </div>
      <hr className="divider-gold mb-12"/>
      <div className="space-y-8">
        {frases.map(f=>(
          <div key={f.id} className="border-l-2 border-[rgba(215,168,62,0.3)] pl-6">
            <blockquote className="font-serif text-xl text-[#F4D77A] italic mb-3">"{f.texto}"</blockquote>
            <div className="flex items-center gap-3">
              <span className="font-ui text-xs text-[rgba(215,168,62,0.6)] tracking-widest uppercase">{f.personagem}</span>
              <span className="text-[rgba(215,168,62,0.3)]">·</span>
              <span className="font-ui text-xs text-[rgba(242,233,208,0.4)]">{f.volume}</span>
            </div>
          </div>
        ))}
      </div>
      <p className="microtexto mt-12">Algumas histórias foram editadas.</p>
    </div>
  );
}
FRASEEOF

cat > src/app/pistas/page.tsx << 'PISTEOF'
"use client";
import { pistas } from "@/data/mock";
import { useState } from "react";
export default function PistasPage() {
  const [spoiler, setSpoiler] = useState(false);
  return (
    <div className="max-w-4xl mx-auto px-4 pt-28 pb-20">
      <div className="mb-12">
        <p className="font-ui text-xs tracking-widest text-[rgba(215,168,62,0.6)] uppercase mb-3">Arquivo Confidencial</p>
        <h1 className="font-serif text-5xl text-[#F4D77A] mb-4">Pistas e Teorias</h1>
        <p className="font-serif italic text-[rgba(242,233,208,0.6)] max-w-xl">Documentos parcialmente recuperados. Alguns dados podem ter sido alterados.</p>
      </div>
      <div className="flex justify-end mb-6">
        <button onClick={()=>setSpoiler(!spoiler)} className="btn-ghost text-sm">{spoiler?"Ocultar spoilers":"Revelar conteúdo restrito"}</button>
      </div>
      <hr className="divider-gold mb-10"/>
      <div className="space-y-6">
        {pistas.map(p=>(
          <div key={p.id} className="pista-card">
            <div className="flex items-start justify-between gap-4 mb-3 flex-wrap">
              <h2 className="font-serif text-xl text-[#F4D77A]">{p.titulo}</h2>
              <span className={`status-badge ${p.status==="confirmada"?"status-disponivel":p.status==="suspeita"?"status-andamento":"status-bloqueado"}`}>
                {p.status.charAt(0).toUpperCase()+p.status.slice(1)}
              </span>
            </div>
            <p className="text-sm text-[rgba(242,233,208,0.8)] leading-relaxed mb-4">{p.descricao}</p>
            <div className="flex flex-wrap gap-3 items-center">
              {p.tags.map(t=><span key={t} className="font-ui text-xs px-2 py-0.5 border border-[rgba(215,168,62,0.2)] rounded text-[rgba(215,168,62,0.6)]">{t}</span>)}
            </div>
            {p.personagens.length>0 && (
              <div className="mt-4">
                <p className="font-ui text-xs text-[rgba(215,168,62,0.4)] mb-2 uppercase tracking-widest">Personagens envolvidos</p>
                <div className="flex flex-wrap gap-2">{p.personagens.map(pr=><span key={pr} className="font-ui text-xs px-2 py-1 border border-[rgba(215,168,62,0.15)] rounded text-[rgba(242,233,208,0.6)]">{pr}</span>)}</div>
              </div>
            )}
          </div>
        ))}
      </div>
      <p className="microtexto mt-12">Você encontrou uma pista. Ou foi encontrado por ela.</p>
    </div>
  );
}
PISTEOF

cat > src/app/buscar/page.tsx << 'BUSCEOF'
"use client";
import { volumes, capitulos, personagens, locais, frases, pistas } from "@/data/mock";
import { useState, useMemo } from "react";
import Link from "next/link";
import { Search } from "lucide-react";
export default function BuscarPage() {
  const [q, setQ] = useState("");
  const resultados = useMemo(()=>{
    if(q.trim().length<2) return [];
    const t = q.toLowerCase();
    const r: {tipo:string;titulo:string;href:string;desc:string}[] = [];
    capitulos.filter(c=>c.titulo.toLowerCase().includes(t)||c.resumo.toLowerCase().includes(t)).forEach(c=>{
      const v=volumes.find(x=>x.id===c.volumeId);
      r.push({tipo:"Capítulo",titulo:c.titulo,href:`/ler/${v?.slug}/${c.slug}`,desc:c.resumo});
    });
    personagens.filter(p=>p.nome.toLowerCase().includes(t)||p.aliases.some(a=>a.toLowerCase().includes(t))).forEach(p=>r.push({tipo:"Personagem",titulo:p.nome,href:`/personagens/${p.slug}`,desc:p.descricao}));
    volumes.filter(v=>v.titulo.toLowerCase().includes(t)).forEach(v=>r.push({tipo:"Volume",titulo:v.titulo,href:`/volumes/${v.slug}`,desc:v.descricao}));
    locais.filter(l=>l.nome.toLowerCase().includes(t)).forEach(l=>r.push({tipo:"Local",titulo:l.nome,href:`/locais/${l.slug}`,desc:l.descricao}));
    frases.filter(f=>f.texto.toLowerCase().includes(t)).forEach(f=>r.push({tipo:"Frase",titulo:`"${f.texto.slice(0,60)}..."`,href:"/frases",desc:`— ${f.personagem}`}));
    pistas.filter(p=>p.titulo.toLowerCase().includes(t)||p.descricao.toLowerCase().includes(t)).forEach(p=>r.push({tipo:"Pista",titulo:p.titulo,href:"/pistas",desc:p.descricao.slice(0,100)+"..."}));
    return r;
  },[q]);
  return (
    <div className="max-w-3xl mx-auto px-4 pt-28 pb-20">
      <div className="mb-12">
        <p className="font-ui text-xs tracking-widest text-[rgba(215,168,62,0.6)] uppercase mb-3">Pesquisa</p>
        <h1 className="font-serif text-5xl text-[#F4D77A] mb-8">Buscar</h1>
        <div className="relative">
          <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-[rgba(215,168,62,0.5)]"/>
          <input value={q} onChange={e=>setQ(e.target.value)} placeholder="Capítulo, personagem, local, frase…" aria-label="Campo de busca" className="w-full bg-[rgba(12,53,80,0.4)] border border-[rgba(215,168,62,0.25)] rounded px-12 py-4 font-ui text-sm text-[#F2E9D0] placeholder:text-[rgba(242,233,208,0.3)] focus:outline-none focus:border-[rgba(215,168,62,0.6)]"/>
        </div>
      </div>
      {q.trim().length>=2 && (
        resultados.length>0 ? (
          <div className="space-y-4">
            <p className="font-ui text-xs text-[rgba(215,168,62,0.5)]">{resultados.length} resultado{resultados.length!==1?"s":""} encontrado{resultados.length!==1?"s":""}</p>
            {resultados.map((r,i)=>(
              <Link key={i} href={r.href} className="block card-volume p-5 group">
                <div className="flex items-start gap-3">
                  <span className="font-ui text-xs px-2 py-0.5 border border-[rgba(215,168,62,0.2)] rounded text-[rgba(215,168,62,0.6)] mt-0.5 whitespace-nowrap">{r.tipo}</span>
                  <div>
                    <h3 className="font-serif text-lg text-[#F4D77A] mb-1">{r.titulo}</h3>
                    <p className="text-sm text-[rgba(242,233,208,0.6)] line-clamp-2">{r.desc}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="font-serif italic text-[rgba(242,233,208,0.5)] text-lg mb-2">Essa informação ainda não existe.</p>
            <p className="font-serif italic text-[rgba(215,168,62,0.4)]">Ou alguém apagou.</p>
          </div>
        )
      )}
    </div>
  );
}
BUSCEOF

cat > src/app/sobre/page.tsx << 'SOBREOF'
import type { Metadata } from "next";
export const metadata: Metadata = { title: "Sobre a Obra" };
export default function SobrePage() {
  return (
    <div className="max-w-3xl mx-auto px-4 pt-28 pb-20">
      <div className="mb-12">
        <p className="font-ui text-xs tracking-widest text-[rgba(215,168,62,0.6)] uppercase mb-3">Sobre</p>
        <h1 className="font-serif text-5xl text-[#F4D77A] mb-4">One Treasure</h1>
        <p className="font-serif italic text-2xl text-[rgba(242,233,208,0.6)]">O Homem que Enganou o Mundo</p>
      </div>
      <hr className="divider-gold mb-10"/>
      <div className="space-y-6 text-[rgba(242,233,208,0.8)] leading-relaxed text-lg">
        <p>One Treasure é uma obra original de ficção náutica, fantasia e suspense psicológico. A saga acompanha Alphonse del Cart D. — conhecido pelo mundo como El Denotas — um estrategista que transformou a própria identidade em arma e a informação em poder.</p>
        <p>Em um mundo onde os mares guardam segredos que governos preferem que permaneçam submersos, El Denotas navega entre máscaras, mentiras calculadas e verdades que só ele conhece por completo.</p>
        <p>A obra explora temas de identidade, poder, manipulação de narrativa e a natureza da verdade em um mundo onde todos acreditam na versão errada da história.</p>
        <blockquote className="quote-importante font-serif text-xl">"Num mundo onde toda verdade pode ser uma mentira, a maior arma não é uma espada. É a história que todos acreditam."</blockquote>
      </div>
      <hr className="divider-gold mt-10"/>
      <p className="microtexto mt-6">O leitor também faz parte do plano.</p>
    </div>
  );
}
SOBREOF

cat > src/app/admin/page.tsx << 'ADMINEOF'
"use client";
import { volumes, capitulos, personagens } from "@/data/mock";
import { useState } from "react";
import Link from "next/link";
import { BookOpen, Users, MapPin, Shield } from "lucide-react";
const stats = [
  { label:"Volumes", value: volumes.length, icon: BookOpen, href:"/volumes" },
  { label:"Capítulos", value: capitulos.length, icon: Shield, href:"/volumes" },
  { label:"Personagens", value: personagens.length, icon: Users, href:"/personagens" },
  { label:"Locais", value: 3, icon: MapPin, href:"/locais" },
];
export default function AdminPage() {
  const [logged, setLogged] = useState(false);
  const [pw, setPw] = useState("");
  const [err, setErr] = useState(false);
  const login = () => { if(pw==="onetreasure") setLogged(true); else setErr(true); };
  if(!logged) return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="card-volume p-10 w-full max-w-sm text-center">
        <p className="font-ui text-xs tracking-widest text-[rgba(215,168,62,0.6)] uppercase mb-6">Acesso Restrito</p>
        <h1 className="font-serif text-3xl text-[#F4D77A] mb-8">Painel Admin</h1>
        <label htmlFor="pw" className="font-ui text-xs text-[rgba(215,168,62,0.5)] uppercase tracking-widest block mb-2">Senha</label>
        <input id="pw" type="password" value={pw} onChange={e=>{setPw(e.target.value);setErr(false);}} onKeyDown={e=>e.key==="Enter"&&login()} className="w-full bg-[rgba(12,53,80,0.4)] border border-[rgba(215,168,62,0.25)] rounded px-4 py-3 font-ui text-sm text-[#F2E9D0] mb-2 focus:outline-none focus:border-[rgba(215,168,62,0.6)]" aria-describedby={err?"pw-err":undefined}/>
        {err && <p id="pw-err" role="alert" className="font-ui text-xs text-red-400 mb-3">Senha incorreta</p>}
        <button onClick={login} className="btn-primary w-full mt-2">Entrar</button>
        <p className="microtexto mt-6">Senha de demo: onetreasure</p>
      </div>
    </div>
  );
  return (
    <div className="max-w-6xl mx-auto px-4 pt-28 pb-20">
      <div className="mb-10 flex items-center justify-between flex-wrap gap-4">
        <div>
          <p className="font-ui text-xs tracking-widest text-[rgba(215,168,62,0.6)] uppercase mb-2">Painel Administrativo</p>
          <h1 className="font-serif text-4xl text-[#F4D77A]">One Treasure Admin</h1>
        </div>
        <button onClick={()=>setLogged(false)} className="btn-ghost text-sm">Sair</button>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        {stats.map(s=>(
          <Link key={s.label} href={s.href} className="card-volume p-6 text-center block hover:scale-105 transition-transform">
            <s.icon className="mx-auto mb-3 text-[#D7A83E]" size={28}/>
            <p className="font-serif text-3xl text-[#F4D77A] mb-1">{s.value}</p>
            <p className="font-ui text-xs text-[rgba(215,168,62,0.5)] uppercase tracking-widest">{s.label}</p>
          </Link>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="card-volume p-6">
          <h2 className="font-serif text-xl text-[#F4D77A] mb-4">Volumes</h2>
          <div className="space-y-3">
            {volumes.map(v=>(
              <div key={v.id} className="flex items-center justify-between py-2 border-b border-[rgba(215,168,62,0.08)]">
                <div>
                  <p className="font-ui text-sm text-[rgba(242,233,208,0.8)]">Vol. {v.numero} — {v.titulo}</p>
                  <span className={`status-badge text-xs ${v.status==="disponivel"?"status-disponivel":v.status==="em-andamento"?"status-andamento":"status-bloqueado"}`}>{v.status}</span>
                </div>
                <Link href={`/volumes/${v.slug}`} className="font-ui text-xs text-[rgba(215,168,62,0.5)] hover:text-[#D7A83E]">Ver →</Link>
              </div>
            ))}
          </div>
        </div>
        <div className="card-volume p-6">
          <h2 className="font-serif text-xl text-[#F4D77A] mb-4">Capítulos Publicados</h2>
          <div className="space-y-3">
            {capitulos.map(c=>{
              const v=volumes.find(x=>x.id===c.volumeId);
              return (
                <div key={c.id} className="flex items-center justify-between py-2 border-b border-[rgba(215,168,62,0.08)]">
                  <div>
                    <p className="font-ui text-sm text-[rgba(242,233,208,0.8)]">{c.titulo}</p>
                    <p className="font-ui text-xs text-[rgba(215,168,62,0.4)]">Vol. {v?.numero} · Cap. {c.numero} · {c.duracaoEstimada}</p>
                  </div>
                  <Link href={`/ler/${v?.slug}/${c.slug}`} className="font-ui text-xs text-[rgba(215,168,62,0.5)] hover:text-[#D7A83E]">Ver →</Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="mt-6 border border-[rgba(215,168,62,0.15)] rounded p-5 bg-[rgba(12,53,80,0.2)]">
        <p className="font-ui text-xs text-[rgba(215,168,62,0.5)] uppercase tracking-widest mb-2">Modo Demonstração</p>
        <p className="text-sm text-[rgba(242,233,208,0.6)]">Este painel está em modo demo com dados mock. Para activar o painel completo com Supabase, configure as variáveis NEXT_PUBLIC_SUPABASE_URL e NEXT_PUBLIC_SUPABASE_ANON_KEY no Vercel.</p>
      </div>
    </div>
  );
}
ADMINEOF

cat > src/app/not-found.tsx << 'NFEOF'
import Link from "next/link";
export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center text-center px-4">
      <div className="max-w-lg">
        <p className="font-ui text-xs tracking-widest text-[rgba(215,168,62,0.6)] uppercase mb-6">Erro 404</p>
        <h1 className="font-serif text-6xl text-[#F4D77A] mb-6">Página não encontrada</h1>
        <p className="font-serif italic text-lg text-[rgba(242,233,208,0.7)] mb-4">Você chegou a um lugar que não existe.</p>
        <p className="font-serif italic text-[rgba(215,168,62,0.6)] mb-10">Ou existe, mas El Denotas não quer que você encontre.</p>
        <Link href="/" className="btn-primary">Voltar ao início</Link>
        <p className="microtexto mt-8">Esta informação pode estar incompleta.</p>
      </div>
    </div>
  );
}
NFEOF

cat > next.config.ts << 'NEXTEOF'
import type { NextConfig } from "next";
const config: NextConfig = { reactStrictMode: true };
export default config;
NEXTEOF

echo "✅ Estrutura criada! A fazer build de verificação..."
npm run build 2>&1 | tail -20




Crie um site completo, responsivo e imersivo para uma obra de ficção chamada “ONE TREASURE”.

A obra tem como subtítulo:
“O Homem que Enganou o Mundo”

O site deve funcionar como a plataforma oficial para ler, explorar e descobrir o universo de One Treasure, incluindo volumes, capítulos, personagens, locais, poderes, cronologia, frases marcantes e teorias.

IMPORTANTE:
Não crie um site genérico de piratas.
A identidade deve ser misteriosa, elegante, traiçoeira e imprevisível, com a sensação de que cada página pode esconder uma mentira.
O visitante deve sentir que entrou no mundo de El Denotas: um homem que nunca revela completamente suas intenções e que transforma informação em arma.

==================================================
1. OBJETIVO DO PRODUTO
==================================================

Criar uma experiência digital semelhante a uma biblioteca secreta, arquivo proibido e mapa náutico antigo ao mesmo tempo.

O usuário deve conseguir:

- Abrir a página inicial e descobrir One Treasure.
- Navegar pelos volumes.
- Ler capítulos em uma interface confortável.
- Continuar a leitura de onde parou.
- Pesquisar capítulos, personagens, lugares e termos.
- Ver fichas de personagens.
- Consultar o sistema de poderes.
- Explorar uma linha do tempo.
- Encontrar frases e pistas escondidas.
- Marcar capítulos como lidos ou favoritos.
- Alternar entre modo claro, escuro e “Mar Negro”.
- Receber surpresas narrativas sem prejudicar a navegação.
- Usar o site perfeitamente no celular, tablet e desktop.

==================================================
2. DIREÇÃO VISUAL
==================================================

Estética principal:
- fantasia náutica sombria;
- biblioteca proibida;
- mapa antigo;
- documentos secretos;
- mar tempestuoso;
- luxo decadente;
- suspense psicológico;
- humor inteligente;
- sensação de conspiração.

O site deve parecer oficial, mas nunca totalmente confiável.

Paleta:
- azul-marinho muito escuro: #071522;
- azul oceano: #0C3550;
- preto abissal: #03070B;
- dourado antigo: #D7A83E;
- dourado claro para destaque: #F4D77A;
- vermelho-capa: #8F1D2C;
- vermelho escuro: #42121B;
- papel envelhecido: #D8C39A;
- texto claro: #F2E9D0;
- verde-oliva discreto para a persona Jhon Tailor.

Tipografia:
- títulos: serifada dramática, semelhante a uma fonte de cartaz de aventura;
- corpo: serifada confortável para leitura longa;
- interface: sans-serif limpa;
- nomes de personagens: letras espaçadas, com aparência de documento confidencial.

Use sombras suaves, bordas douradas discretas, textura de papel, linhas de mapa, símbolos náuticos e divisórias inspiradas em gravuras antigas.

Não exagerar em textura.
A leitura deve continuar confortável.

==================================================
3. PERSONALIDADE DE EL DENOTAS
==================================================

A personalidade do site deve refletir El Denotas:

- misterioso;
- inteligente;
- irônico;
- teatral;
- imprevisível;
- elegante;
- manipulador;
- capaz de parecer fraco enquanto controla a situação;
- nunca totalmente explicável.

Use microtextos ocasionais como:

- “Você tem certeza de que esta página é verdadeira?”
- “Algumas histórias foram editadas.”
- “O mundo lembra da versão errada.”
- “Esta informação pode estar incompleta.”
- “Não confie em mapas perfeitos.”
- “O leitor também faz parte do plano.”
- “Você encontrou uma pista. Ou foi encontrado por ela.”

Essas mensagens devem aparecer com moderação e nunca bloquear o acesso ao conteúdo.

==================================================
4. ESTRUTURA DO SITE
==================================================

Crie as seguintes páginas e rotas:

1. Página inicial:
   /
2. Biblioteca de volumes:
   /volumes
3. Página individual do volume:
   /volumes/[volume-slug]
4. Página de leitura:
   /ler/[volume-slug]/[capitulo-slug]
5. Personagens:
   /personagens
6. Ficha de personagem:
   /personagens/[personagem-slug]
7. Sistema de poderes:
   /poderes
8. Locais:
   /locais
9. Ficha de local:
   /locais/[local-slug]
10. Linha do tempo:
    /cronologia
11. Frases:
    /frases
12. Teorias e pistas:
    /pistas
13. Busca:
    /buscar
14. Sobre a obra:
    /sobre
15. Painel administrativo:
    /admin

==================================================
5. PÁGINA INICIAL
==================================================

Criar uma abertura cinematográfica, mas com carregamento rápido.

Hero principal:
- fundo inspirado na capa de One Treasure;
- mar agitado;
- navio;
- céu azul e tempestade ao longe;
- bandeira negra;
- silhueta ou ilustração de El Denotas;
- título grande “ONE TREASURE”;
- subtítulo “O Homem que Enganou o Mundo”.

Texto de destaque:
“Num mundo onde toda verdade pode ser uma mentira, a maior arma não é uma espada. É a história que todos acreditam.”

Botões:
- “Começar a ler”
- “Explorar os volumes”
- “Entrar no arquivo proibido”

Adicionar uma pequena animação de ondas e partículas, mas respeitar prefers-reduced-motion.

Após o hero, mostrar:

- capítulo mais recente;
- continuar leitura;
- volumes disponíveis;
- personagens em destaque;
- uma frase aleatória de El Denotas;
- uma pista desbloqueável;
- seção “O mundo acredita que...”;
- seção “Mas a verdade pode ser...”;
- chamada para explorar o Mar Antigo.

A página inicial deve transmitir curiosidade imediatamente.

==================================================
6. BIBLIOTECA DE VOLUMES
==================================================

Criar uma biblioteca visual com cards de volumes.

Cada card deve mostrar:
- capa;
- número do volume;
- título;
- subtítulo;
- quantidade de capítulos;
- status: disponível, em andamento ou bloqueado;
- botão “Abrir volume”.

Usar efeitos sutis de hover:
- brilho dourado;
- movimento leve da capa;
- aparição de uma frase secreta;
- sombra de uma figura atrás do card.

Volumes iniciais:

Volume 1:
Título: O Homem que Enganou o Mundo
Status: disponível

Volume 3:
Título: O Leão Ainda Vive
Status: disponível

Volume 4:
Título: O Que Nunca Foi Contado
Status: em andamento

Deixar a estrutura preparada para adicionar Volume 2 e futuros volumes sem alterar o código principal.

==================================================
7. PÁGINA DO VOLUME
==================================================

Mostrar:

- capa grande;
- título;
- subtítulo;
- sinopse;
- lista de capítulos;
- status de leitura;
- progresso do usuário;
- frases marcantes;
- personagens presentes;
- locais visitados;
- botão “Começar volume”;
- botão “Continuar leitura”.

Cada capítulo deve ter:
- número;
- título;
- resumo curto;
- status lido/não lido;
- duração estimada;
- marcador de favorito.

Não revelar spoilers automaticamente.
Criar opção “Mostrar informações com spoilers”.

==================================================
8. LEITOR DE CAPÍTULOS
==================================================

Criar uma interface excelente para leitura.

Requisitos:

- coluna de texto centralizada;
- largura confortável;
- tamanho de fonte ajustável;
- espaçamento ajustável;
- modo claro;
- modo escuro;
- modo “Mar Negro”;
- progresso de leitura;
- navegação para capítulo anterior e próximo;
- botão de voltar ao volume;
- marcador de capítulo;
- favoritos;
- salvamento automático do progresso;
- atalhos de teclado;
- leitura perfeita em celular.

O texto deve respeitar:
- parágrafos curtos;
- diálogos destacados;
- separadores de cena;
- frases importantes com estilo visual especial;
- onomatopeias grandes quando existirem;
- flashbacks com tratamento visual próprio.

Criar estilos específicos para:

Flashback:
- fundo levemente sépia;
- borda lateral dourada;
- etiqueta “REGISTRO RECUPERADO”;
- transição suave.

Visão, sonho ou ilusão:
- fundo escuro;
- texto com leve distorção;
- etiqueta “VERDADE NÃO CONFIRMADA”;
- nunca prejudicar a legibilidade.

Diálogo importante:
- destaque discreto;
- nome do personagem em dourado;
- balões não devem transformar o site em história em quadrinhos.

No final de cada capítulo, mostrar:
- botão “Próximo capítulo”;
- frase de encerramento;
- personagens envolvidos;
- pistas encontradas;
- opção de esconder spoilers.

==================================================
9. SISTEMA DE SURPRESAS
==================================================

Criar surpresas elegantes ligadas à narrativa.

Exemplos:

- Uma frase da página inicial muda ao recarregar.
- Uma pista aparece depois que o usuário lê determinado capítulo.
- Um selo secreto surge ao visitar três páginas específicas.
- Uma página de personagem pode revelar “identidade conhecida” e “identidade suspeita”.
- Um mapa pode mostrar uma rota que não existia antes.
- Um documento pode exibir uma mensagem de El Denotas.

REGRAS:
- As surpresas não podem impedir o acesso.
- Não usar sustos sonoros automáticos.
- Não tocar áudio sem ação explícita do usuário.
- Não esconder navegação essencial.
- Oferecer opção de desativar efeitos narrativos.
- Salvar descobertas localmente ou no banco de dados.

==================================================
10. PERSONAGENS
==================================================

Criar cards e fichas detalhadas.

Cada ficha deve conter:

- nome;
- aliases;
- persona;
- imagem;
- descrição sem spoilers;
- descrição completa com spoilers;
- personalidade;
- aparência;
- poderes;
- armas;
- relações;
- primeira aparição;
- última aparição conhecida;
- frases marcantes;
- nível de ameaça;
- status atual;
- “versão oficial”;
- “versão suspeita”.

Personagens iniciais:

El Denotas:
- nome verdadeiro: Alphonse del Cart D.
- título: O Homem que Enganou o Mundo
- característica: estrategista, vigarista, mestre das identidades
- não pode usar Haki por causa da natureza de sua vontade
- usa Ki, Sandai Kitetsu e Akuma no Mi
- persona futura: Jhon Tailor, o ativista
- persona futura: Ryoiter Kinsaki, o espadachim de DownsThalassar

Kairos:
- título: Storm Engineer
- engenheiro do caos
- aprendiz ou aliado de Denotas
- especialista em sistemas, mecanismos, navegação e sabotagem

Kael Tempest:
- governante do Mar das Tempestades
- veterano de Akuma no Mi
- possui a Storm Storm no Mi
- chama Denotas de “novato”

Francis del Láguas Negras:
- almirante;
- rival de Denotas;
- carrega informações sobre o passado de Alphonse.

Christofer Evans:
- Almirante de Diamante;
- segundo no comando do Governo Mundial.

Magnus D. Kraken:
- figura do submundo pirata;
- presença ligada a DownsThalassar.

O Velho da ilha:
- identidade desconhecida;
- conhece diferentes nomes de Denotas;
- entende línguas e segredos do Mar Antigo.

==================================================
11. SISTEMA DE PODERES
==================================================

Criar uma página visual, clara e didática.

O sistema possui três pilares:

A. Akuma no Mi:
- poderes únicos concedidos por frutas do diabo;
- cada fruta deve possuir habilidade, limitações e custo;
- usuários não devem nadar;
- a fruta não substitui experiência, técnica ou inteligência.

B. Haki:
- poder ligado à vontade;
- Denotas não pode usar Haki por causa da natureza de sua vontade;
- criar categorias configuráveis;
- explicar que Haki não é automaticamente superior a todos os outros poderes.

C. Ki:
- energia interna;
- base de técnica, movimento, resistência, percepção corporal e controle;
- Denotas se encaixa naturalmente no Ki;
- o Ki pode ser canalizado através de armas;
- uso excessivo gera desgaste físico, dor, perda de precisão e exaustão.

Sandai Kitetsu:
- espada amaldiçoada;
- não deve funcionar como uma fonte infinita de poder;
- amplifica e canaliza o Ki de Denotas;
- permite a percepção de movimentos em sensação de câmera lenta;
- não para realmente o tempo;
- exige concentração;
- pode aumentar agressividade, risco e instabilidade;
- quanto maior o uso, maior o preço físico e mental.

Criar uma tabela comparativa:

Sistema | Origem | O que faz | Custo | Quem usa

Adicionar um componente visual chamado “Regra do poder”:
“O poder só é interessante quando possui limite.”

==================================================
12. PERSONAS DE DENOTAS
==================================================

Criar uma seção especial chamada “Arquivo de Rostos”.

Cada persona deve ter:
- nome;
- função;
- aparência;
- estilo de roupa;
- comportamento;
- sotaque ou forma de falar;
- objetivo aparente;
- objetivo real;
- pistas que podem revelar a identidade;
- nível de risco.

Persona 1:
Jhon Tailor — o ativista

Aparência:
- homem carinhoso e acessível;
- camisa clara com mangas dobradas;
- colete verde-oliva;
- bolsa com suprimentos;
- sorriso caloroso;
- barba bem cuidada;
- postura aberta;
- roupas práticas;
- símbolo de ajuda comunitária.

Comportamento:
- faz doações;
- ajuda feridos;
- conversa com todos;
- organiza comida e remédios;
- parece incapaz de trair alguém.

Verdade escondida:
Ele observa rotas, relações, segredos e sistemas sociais enquanto ajuda a população.

Persona 2:
Ryoiter Kinsaki — o espadachim de DownsThalassar

Aparência:
- vestes escuras;
- capa desgastada;
- postura silenciosa;
- cicatrizes discretas;
- presença ameaçadora;
- Sandai Kitetsu;
- olhar frio;
- movimentos econômicos.

Comportamento:
- fala pouco;
- nunca explica seu passado;
- aparece em locais impossíveis;
- é tratado como lenda no submundo.

Verdade escondida:
Ele é uma máscara criada para controlar o submundo e obter acesso a informações proibidas.

==================================================
13. LOCAIS
==================================================

Criar fichas para locais importantes:

- Del Láguas Cristalinas do Sul;
- Valdoria;
- Mar Negro;
- Mar da Coroa;
- Mar Antigo;
- Thassalar;
- DownsThalassar;
- Forte da Marinha;
- Biblioteca de Del Láguas;
- Ilha do Velho.

Cada local deve conter:
- descrição;
- mapa ou ilustração;
- clima;
- habitantes;
- facções;
- perigos;
- personagens ligados;
- capítulos relacionados;
- nível de mistério;
- versão oficial;
- verdade suspeita.

==================================================
14. MAPA INTERATIVO
==================================================

Criar um mapa náutico interativo do mundo.

Recursos:
- zoom;
- arrastar;
- marcadores;
- rotas;
- regiões bloqueadas;
- locais descobertos;
- locais secretos;
- filtro por volume;
- filtro por facção;
- modo “mapa oficial”;
- modo “mapa rabiscado por Denotas”.

O modo de Denotas deve apresentar:
- anotações manuscritas;
- rotas alternativas;
- pontos de interrogação;
- frases como “não siga esta rota”;
- possibilidade de uma anotação estar mentindo.

==================================================
15. CRONOLOGIA
==================================================

Criar linha do tempo filtrável por:

- volume;
- personagem;
- facção;
- local;
- evento;
- nível de spoiler.

Eventos iniciais:
- infância de Alphonse del Cart;
- entrada no sistema da Marinha;
- roubo da narrativa;
- eventos do Volume 1;
- queda no Mar Negro;
- surgimento de Kairos;
- retorno de Denotas;
- chegada de Kael Tempest;
- entrada no Mar Antigo;
- despertar de Magnus D. Kraken;
- reação de Christofer Evans.

==================================================
16. BUSCA
==================================================

Criar busca global por:
- capítulo;
- personagem;
- lugar;
- poder;
- frase;
- pista;
- persona;
- volume.

Adicionar filtros e resultados instantâneos.
Quando não houver resultado, mostrar:
“Essa informação ainda não existe. Ou alguém apagou.”

==================================================
17. PISTAS E TEORIAS
==================================================

Criar uma área de teorias.

Cada pista deve ter:
- título;
- texto;
- capítulo de origem;
- status: confirmada, suspeita, falsa ou desconhecida;
- nível de spoiler;
- tags;
- relação com personagens;
- espaço para comentários, se comentários forem ativados.

Criar uma experiência de “arquivo confidencial” com documentos parcialmente censurados.

==================================================
18. PAINEL ADMINISTRATIVO
==================================================

Criar painel protegido para o autor administrar:

- volumes;
- capítulos;
- personagens;
- locais;
- poderes;
- personas;
- frases;
- pistas;
- imagens;
- capas;
- ordem dos capítulos;
- status de publicação.

Funções:
- criar;
- editar;
- excluir;
- salvar rascunho;
- publicar;
- agendar;
- pré-visualizar;
- marcar conteúdo com spoiler;
- restaurar versão anterior.

O editor de capítulos deve aceitar:
- texto;
- títulos;
- diálogos;
- separadores;
- flashbacks;
- citações;
- onomatopeias;
- imagens;
- notas internas;
- marcações de spoiler.

==================================================
19. MODELO DE DADOS
==================================================

Use uma estrutura de dados organizada e escalável.

Entidades:

Volume:
- id
- numero
- slug
- titulo
- subtitulo
- descricao
- capa
- status
- ordem
- dataPublicacao

Capitulo:
- id
- volumeId
- numero
- slug
- titulo
- resumo
- conteudo
- status
- spoilerLevel
- dataPublicacao
- duracaoEstimada

Personagem:
- id
- nome
- aliases
- slug
- descricao
- descricaoComSpoilers
- imagem
- status
- faccao
- poderes
- armas
- primeiraAparicao
- frases

Persona:
- id
- personagemId
- nome
- slug
- funcao
- aparencia
- comportamento
- objetivoAparente
- objetivoReal
- riscos
- pistas

Local:
- id
- nome
- slug
- descricao
- imagem
- coordenadas
- perigos
- faccoes
- nivelMisterio

Poder:
- id
- nome
- categoria
- origem
- descricao
- limitações
- custo
- usuarios

Pista:
- id
- titulo
- descricao
- capituloId
- status
- spoilerLevel
- tags

Progresso:
- id
- usuarioId ou localStorageId
- capituloId
- porcentagem
- atualizadoEm

Favorito:
- id
- usuarioId ou localStorageId
- tipo
- itemId

==================================================
20. TECNOLOGIA
==================================================

Use:

- Next.js com App Router;
- TypeScript;
- Tailwind CSS;
- componentes acessíveis;
- banco de dados Supabase;
- autenticação Supabase;
- editor de capítulos em Markdown ou rich text;
- armazenamento de imagens no Supabase Storage;
- ícones Lucide;
- animações leves com Framer Motion;
- gráficos ou mapas apenas quando realmente necessários.

Estruture o projeto em componentes reutilizáveis.
Não coloque todo o código em uma única página.
Use dados de exemplo separados dos componentes.

Se a conexão com Supabase ainda não estiver configurada:
- criar modo demonstração com dados mock;
- usar localStorage para progresso, favoritos e descobertas;
- mostrar instruções claras para configurar o banco depois.

==================================================
21. RESPONSIVIDADE E ACESSIBILIDADE
==================================================

O site deve ser mobile-first.

Garantir:
- navegação por teclado;
- foco visível;
- contraste adequado;
- textos alternativos;
- HTML semântico;
- labels em todos os formulários;
- mensagens claras de erro e sucesso;
- botão para pausar efeitos;
- respeito a prefers-reduced-motion;
- nenhum áudio automático;
- tamanhos de toque confortáveis;
- skip link;
- menu acessível;
- leitores de tela.

Não sacrificar legibilidade em favor de efeitos visuais.
Seguir princípios de acessibilidade WCAG 2.2 AA. [web:95][web:97]

==================================================
22. PERFORMANCE
==================================================

O site deve carregar rapidamente.

Aplicar:
- lazy loading para imagens;
- formatos WebP ou AVIF;
- imagens responsivas;
- divisão de código;
- carregamento sob demanda;
- fontes otimizadas;
- animações leves;
- evitar vídeo de fundo pesado;
- evitar scripts desnecessários;
- otimizar Core Web Vitals.

As animações devem ser curtas e responsivas, geralmente entre 200 e 300 ms, e efeitos pesados devem ser desativados para usuários que preferem menos movimento. [web:95][web:99]

==================================================
23. ÁUDIO OPCIONAL
==================================================

Criar uma área opcional de ambientação:

- mar;
- chuva;
- vento;
- madeira de navio;
- páginas virando;
- trovão.

Nunca reproduzir automaticamente.
Adicionar controles:
- iniciar;
- pausar;
- volume;
- desligar completamente.

O site deve funcionar perfeitamente sem áudio.

==================================================
24. CONTEÚDO INICIAL
==================================================

Preencher a demonstração com:

- Volume 3: “O Leão Ainda Vive”;
- Volume 4: “O Que Nunca Foi Contado”;
- Capítulo 1 do Volume 4: “O Mundo em Colapso”;
- Capítulo 2 do Volume 4: “O Eco Que Cruza os Mares”;
- El Denotas;
- Alphonse del Cart D.;
- Kairos / Storm Engineer;
- Kael Tempest;
- Francis del Láguas Negras;
- Christofer Evans;
- Magnus D. Kraken;
- Jhon Tailor;
- Ryoiter Kinsaki;
- Mar Negro;
- Mar Antigo;
- DownsThalassar.

Usar apenas conteúdo original fornecido no projeto.
Não copiar personagens, nomes, textos, símbolos, imagens ou elementos protegidos de outras obras.
A inspiração deve ser apenas de aventura náutica, fantasia, mistério e ficção de piratas.

==================================================
25. DETALHES DE UX
==================================================

Adicionar:

- toast para progresso salvo;
- indicador “lido”;
- botão “continuar de onde parei”;
- busca no cabeçalho;
- breadcrumbs;
- botão voltar;
- estados vazios bem escritos;
- loading skeleton;
- páginas 404 com texto de El Denotas;
- confirmação antes de apagar algo no painel;
- erro visual amigável;
- modo de demonstração claramente indicado;
- favicon com símbolo original de One Treasure;
- metadados SEO;
- Open Graph;
- sitemap;
- URLs amigáveis.

Página 404:
“Você chegou a um lugar que não existe.
Ou existe, mas El Denotas não quer que você encontre.”

==================================================
26. SEO E COMPARTILHAMENTO
==================================================

Adicionar:
- título e descrição únicos por página;
- Open Graph para volumes e capítulos;
- Twitter Card;
- dados estruturados para obra e capítulos;
- sitemap;
- robots.txt;
- URLs legíveis;
- compartilhamento de capítulos sem revelar spoilers na prévia.

==================================================
27. TESTES DE ACEITAÇÃO
==================================================

Antes de finalizar, verificar:

- consigo abrir a home;
- consigo abrir volumes;
- consigo abrir capítulos;
- consigo continuar a leitura;
- o progresso é salvo;
- favoritos funcionam;
- busca retorna resultados;
- filtros funcionam;
- modo escuro funciona;
- site é utilizável no celular;
- painel administra conteúdo;
- spoilers podem ser ocultados;
- imagens possuem alt text;
- navegação funciona pelo teclado;
- não existe áudio automático;
- animações podem ser reduzidas;
- não há erros no console;
- páginas vazias e erros têm mensagens úteis;
- o projeto está organizado e pronto para receber novos volumes.

==================================================
28. RESULTADO ESPERADO
==================================================

Entregar um site visualmente impressionante, mas funcional.

A experiência deve parecer uma mistura de:
- biblioteca proibida;
- arquivo secreto;
- mapa de navegação;
- diário de um vigarista;
- portal oficial de uma saga épica.

O visitante deve terminar cada sessão pensando:

“Eu li uma história… ou fui conduzido exatamente para onde El Denotas queria?”

Não criar um design infantil.
Não usar excesso de neon.
Não usar piratas genéricos.
Não usar cópia visual de One Piece ou qualquer outra franquia.
Criar uma identidade original, elegante, misteriosa e memorável.

Comece criando:
1. a arquitetura do projeto;
2. o layout global;
3. a página inicial;
4. a biblioteca de volumes;
5. o leitor de capítulos;
6. os dados mock;
7. o sistema de progresso;
8. o painel administrativo básico.

Depois, valide a responsividade e a acessibilidade.

