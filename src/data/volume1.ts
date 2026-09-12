// Dados Oficiais - One Treasure: Volume 1
// Restrito estritamente a: Sinopse, Arquivo 0, Prólogo e Capítulos 1 a 10 do Volume 1.
// Nenhuma palavra do texto oficial foi alterada.

export interface CapituloItem {
  id: string;
  slug: string;
  tipo: "sinopse" | "documento" | "prologo" | "capitulo";
  titulo: string;
  subtitulo: string;
  numero: number;
  ordem: number;
  duracaoEstimada: string;
  resumo: string;
  conteudoTexto: string;
  dataPublicacao?: string;
  spoilerLevel?: number;
  volumeNumero?: number;
}

export const volume1Info = {
  id: "v1",
  numero: 1,
  slug: "o-homem-que-enganou-o-mundo",
  titulo: "Volume 1: O Homem que Enganou o Mundo",
  subtitulo: "A origem de tudo que o mundo acredita ser verdade",
  descricao: "Nas ruas de Del Láguas e sob o céu de Valdoria, um jovem órfão e vigarista descobre que a maior arma nos mares não é uma espada, mas a história em que todos acreditam. Acompanhe o início da saga de Denotas, do Arquivo 0 ao Capítulo 10.",
  status: "disponivel",
  totalCapitulos: 10,
  dataLancamento: "2024",
  totalSecoes: 13
};

export const secoesVolume1: CapituloItem[] = [
  {
    "id": "sinopse",
    "slug": "sinopse",
    "tipo": "sinopse",
    "titulo": "Sinopse Oficial",
    "subtitulo": "A Lenda de Denotas e a Nova Era da Broken Line",
    "numero": 0,
    "ordem": 1,
    "duracaoEstimada": "2 min",
    "resumo": "Em um mundo onde o lendário tesouro de Roger mudou os mares, Denotas surge na Broken Line: um gênio vigarista que vale 100 homens.",
    "conteudoTexto": "📖 One Treasure — Sinopse Oficial\nEm um mundo onde o lendário tesouro deixado por Gol D. Roger mudou para sempre o destino dos mares, uma nova era nasceu — não de sonhos, mas de ganância, loucura e mentiras.\nDécadas após a lenda de Monkey D. Luffy, o mundo acredita conhecer a verdade.\nMas a história… foi manipulada.\nNo coração das traiçoeiras rotas da Broken Line, surge alguém que não busca fama, glória ou o próprio One Piece.\nSeu nome é Denotas.\nUm jovem gênio, vigarista e observador, que começa do zero absoluto, guiado por um lema simples:\n“Um homem que vale 100 homens.”\nMas o mundo não é feito para homens solitários.\nE conforme seu conhecimento cresce, sua visão muda:\n“Um é bom… mas mais é melhor.”\nEntre livros proibidos, enigmas esquecidos e jogos mentais invisíveis, Denotas descobre algo que poucos ousaram questionar:\nE se o maior tesouro do mundo… nunca foi o que todos pensam?\nEnquanto enfrenta inimigos que manipulam a verdade, aliados que desafiam sua visão e um antagonista oculto que joga nas sombras, Denotas trilha um caminho onde inteligência vale mais que força, e percepção decide destinos.\nMas toda busca tem um preço.\nE no fim de sua jornada, ao alcançar o verdadeiro tesouro…\nEle fará a escolha mais dolorosa de todas.\nNão ser lembrado.\nNão ser temido.\nNão ser ninguém.\nE assim, o mundo esquecerá seu nome…\nRestando apenas ecos de uma lenda:\n“Existiu um homem…”\n",
    "spoilerLevel": 0
  },
  {
    "id": "arquivo-0",
    "slug": "arquivo-0",
    "tipo": "documento",
    "titulo": "Arquivo 0: Como o Mundo Funciona",
    "subtitulo": "Documento Confidencial — O que move o mundo e as três verdades",
    "numero": 0,
    "ordem": 2,
    "duracaoEstimada": "5 min",
    "resumo": "O mundo não é movido por justiça ou força, mas por percepção. A regra de ouro e as três verdades que sustentam a farsa.",
    "conteudoTexto": "📜 ARQUIVO 0: COMO O MUNDO FUNCIONA\nSe você está lendo isso… então já está dentro do jogo.\n1. 🌍 O QUE MOVE O MUNDO\nO mundo não é movido por justiça.\nNunca foi.\nTambém não é movido por força.\nIsso é apenas o que te fazem acreditar.\nO que realmente move o mundo…\né a percepção.\nAquilo que as pessoas acreditam ser verdade\npassa a ser mais real do que qualquer fato.\nReis governam porque acreditam que governam.\nCriminosos são caçados porque alguém decidiu chamá-los assim.\nHeróis existem… porque alguém precisa acreditar neles.\nA verdade?\nA verdade não tem valor aqui.\nApenas a versão mais convincente dela.\n2. 👑 QUEM MANDA DE VERDADE\nVocê vai ouvir falar de:\nGovernos\nMarinhas\nPiratas\nMercadores\nMas isso são apenas peças visíveis.\nO controle real nunca está nas mãos de quem aparece.\nEle está nas mãos de quem:\ncontrola a informação\nmolda narrativas\ndecide o que o mundo deve temer\nPorque quem controla o medo…\ncontrola as escolhas.\nE quem controla as escolhas…\nnunca precisa lutar.\n3. ⚖️ COMO O PODER FUNCIONA\nExistem três formas de poder neste mundo:\n🩸 Poder Natural\nForça. Velocidade. Técnica.\nAquilo que pode ser treinado.\nÉ o poder mais comum…\ne o mais limitado.\n🍎 Poder Anômalo\nFrutas que desafiam a lógica.\nHabilidades que não deveriam existir.\nElas não seguem regras normais.\nE pior…\nNem sempre seguem a mesma regra duas vezes.\n🎭 Poder Percebido\nO mais perigoso de todos.\nNão depende do que você é…\nmas do que os outros acreditam que você é.\nUm homem temido pode vencer sem lutar.\nUm homem subestimado pode morrer sendo mais forte.\nNeste mundo…\nreputação é uma arma.\n4. 🧠 O QUE AS PESSOAS ACREDITAM\nAs pessoas precisam de ordem.\nEntão elas aceitam histórias simples:\nO bem luta contra o mal\nO governo protege\nOs criminosos destroem\nO destino é algo fixo\nEssas crenças não são verdadeiras…\nmas são necessárias.\nPorque sem elas…\no mundo entraria em colapso.\n5. 🚫 O QUE NINGUÉM QUESTIONA\nExistem coisas que simplesmente são aceitas.\nSem perguntas.\nSem dúvidas.\nComo:\nPor que certas pessoas nunca são tocadas\nPor que algumas histórias desaparecem\nPor que certas verdades nunca chegam ao público\nE principalmente…\nPor que algumas coisas parecem\nquase verdadeiras… mas nunca completas\n6. ⚠️ LEI INVISÍVEL\nExiste uma regra que não está escrita em lugar nenhum:\n“Quanto mais perto da verdade… maior o risco de desaparecer.”\nAlguns chamam isso de coincidência.\nOutros de destino.\nMas aqueles que chegaram perto demais…\nnão estão aqui para explicar.\n7. 🕳️ NOTA FINAL\nSe você chegou até aqui…\nparabéns.\nAgora você entende como o mundo funciona.\nOu pelo menos…\ncomo ele quer que você acredite que funciona.\n“Se tudo isso fizer sentido para você… então você já foi enganado.”\n",
    "spoilerLevel": 0
  },
  {
    "id": "prologo",
    "slug": "prologo",
    "tipo": "prologo",
    "titulo": "Prólogo: O Fim de Uma Era",
    "subtitulo": "Mil eras atrás e o surgimento de El Denotas",
    "numero": 0,
    "ordem": 3,
    "duracaoEstimada": "3 min",
    "resumo": "O mundo governado pelos mares, a busca pelo One Piece, e o surgimento do homem que enganaria o mundo.",
    "conteudoTexto": "📖 PRÓLOGO\nO Fim de Uma Era\nMil eras atrás…\nO mundo era governado pelos mares.\nPiratas, reis, aventureiros e sonhadores navegavam em busca do maior tesouro já conhecido.\nO One Piece.\nUm homem conseguiu encontrá-lo.\nO nome dele era Monkey D. Luffy.\nQuando ele se tornou o Rei dos Piratas, o mundo mudou para sempre.\nMas ninguém imaginava o que viria depois.\nNos séculos seguintes, novas gerações surgiram.\nAlgumas queriam liberdade.\nOutras queriam poder.\nOutras queriam algo ainda mais perigoso.\nDominar o mundo.\nAssim começou uma era que os historiadores chamariam de:\nA Era dos Grandes Perigosos e dos Deuses Loucos.\nUsuários de poderes impossíveis surgiram.\nIlhas inteiras foram destruídas.\nArmas antigas foram despertadas.\nE guerras devastaram os mares.\nO equilíbrio do mundo começou a quebrar.\nAté que um evento mudou tudo.\nUm evento que hoje é chamado apenas de:\nA Grande Mudança.\nOs oceanos se alteraram.\nAs correntes marítimas desapareceram.\nA lendária Grand Line se partiu em milhares de fragmentos.\nE o lugar que antes guiava aventureiros se tornou algo diferente.\nAlgo instável.\nAlgo perigoso.\nAlgo que hoje é conhecido como:\nBROKEN LINE.\nNinguém sabe o que existe lá agora.\nAlguns dizem que monstros vivem naquela rota.\nOutros dizem que o próprio mundo está quebrado naquele lugar.\nMas existe um rumor que todos conhecem.\nUm rumor que atravessa gerações.\nDizem que, após a Grande Mudança…\nUm novo segredo apareceu no mundo.\nUm segredo maior que qualquer tesouro.\nUm segredo que poderia destruir a verdade da história.\nEsse segredo tem um nome.\nONE TREASURE.\nE em algum lugar deste mundo…\nExiste um homem destinado a encontrá-lo.\nUm homem que não busca ouro.\nNem fama.\nNem poder.\nApenas a verdade.\nO nome dele é:\nEl Denotas.\nO homem que enganaria o mundo.\n",
    "spoilerLevel": 0
  },
  {
    "id": "cap-1",
    "slug": "capitulo-1",
    "tipo": "capitulo",
    "titulo": "Capítulo 1 — O Homem que Enganou o Mundo",
    "subtitulo": "Festival de Valdoria e o primeiro grande truque",
    "numero": 1,
    "ordem": 4,
    "duracaoEstimada": "3 min",
    "resumo": "Noite no Reino de Valdoria. Três baús no centro da praça, guardados por soldados de elite, e o desaparecimento do tesouro da coroa.",
    "conteudoTexto": "📖 CAPÍTULO 1 — O Homem que Enganou o Mundo\nEra noite no Reino de Valdoria.\nUm festival iluminava as ruas.\nMúsica.\nRisos.\nFogos de artifício.\nMas no castelo real…\nAlgo estava prestes a desaparecer.\nGuardas patrulhavam os corredores.\nO tesouro real estava protegido por soldados de elite.\nDentro de uma sala de pedra, um objeto repousava em um pedestal.\nUma fruta estranha.\nRoxa, coberta por padrões espirais que pulsavam sob o luar.\nUma Akuma no Mi.\nNenhum guarda percebeu quando um novo soldado entrou no corredor.\nUniforme perfeito.\nPostura impecável.\nEle parecia apenas mais um homem cumprindo seu dever.\nMas ao passar diante de um espelho —\nseu reflexo sorriu diferente.\nCalmo. Confiante. Quase divertido.\n“Espelhos nunca mentem,” pensou. “Apenas mostram o que o mundo quer ver.”\nEle entrou na sala do tesouro.\nOs guardas do lado de fora estavam distraídos; o festival era alto demais.\nSilenciosamente, pegou a fruta.\nPor um instante, apenas observou.\nOs olhos avaliavam o objeto como quem decifra um jogo antigo.\n“Ele não buscava poder. Buscava uma resposta.”\nEntão mordeu.\nO gosto era horrível.\nEle fez uma careta — e começou a rir.\n“Valeu a pena.”\nPassos ecoaram no corredor.\nGuardas haviam descoberto o roubo. Alarmes ressoaram, se misturando à música do festival.\nO homem caminhou até a janela com calma.\nQuando os soldados invadiram a sala, congelaram.\nO rosto do ladrão… havia mudado.\nAgora ele parecia um deles.\nAntes de desaparecer na noite, ele disse:\n“Piratas roubam tesouros.”\nColocou um velho chapéu de palha sobre a cabeça — símbolo de uma liberdade antiga, agora reinventada.\nE sorriu.\n“Eu roubo a verdade.”\nE assim, nas sombras daquela noite, nasceu a lenda que mudaria tudo.\nO homem que enganaria o mundo.\nEl Denotas.\n"
  },
  {
    "id": "cap-2",
    "slug": "capitulo-2",
    "tipo": "capitulo",
    "titulo": "Capítulo 2 — O Mar dos Bolsos",
    "subtitulo": "As origens em Del Láguas Cristalinas do Sul",
    "numero": 2,
    "ordem": 5,
    "duracaoEstimada": "6 min",
    "resumo": "Muito antes da fama, um garoto nas ruas úmidas de Del Láguas aprende que a cidade tem bolsos e que a sobrevivência exige observação.",
    "conteudoTexto": "📖 ONE TREASURE\nCapítulo 2 — O Mar dos Bolsos\nMuito antes do nome El Denotas ecoar pelos mares…\nEle era apenas um garoto.\nUm garoto nascido nas ruas úmidas de Del Láguas Cristalinas do Sul, uma cidade interiorana do Mar da Coroa.\nDel Láguas era uma cidade estranha.\nRica demais para ser pobre.\nPobre demais para ser justa.\nOs canais de água cristalina cruzavam as ruas como espelhos líquidos, refletindo torres de mármore branco e mercados cheios de luxo.\nO aroma salgado do mar misturava-se ao perfume caro dos bazares.\nMas entre aquelas construções grandiosas existia outro mundo.\nBecos apertados.\nPontes velhas.\nPessoas esquecidas.\nFoi ali que ele nasceu.\nNão em um palácio.\nNão em uma família famosa.\nMas no lado invisível da cidade.\nDesde pequeno, Denotas observava algo curioso.\nOs homens ricos nunca olhavam para baixo.\nEles olhavam para o horizonte, para os navios, para as moedas.\nNunca para as pessoas.\nE foi observando isso que ele percebeu algo simples.\nOs bolsos dos homens ricos estavam sempre cheios.\nE quase sempre desprotegidos.\nFoi naquele dia que nasceu uma ideia.\nUma ideia pequena.\nQuase inocente.\nMas que mudaria tudo.\nO Primeiro Roubo\nO mercado central estava cheio.\nMercadores gritavam preços.\nMoedas tilintavam.\nPerfumes caros misturavam-se com o cheiro salgado do mar.\nDenotas caminhava entre as pessoas como uma sombra.\nSilencioso.\nObservador.\nEle não estava olhando para rostos.\nEle estava olhando para bolsos.\nFoi então que ele viu.\nUm homem cercado por guardas.\nRoupas luxuosas.\nAnéis nos dedos.\nUma bolsa pesada presa ao cinto.\nAquele era o homem mais rico de Del Láguas.\nTalvez até do próprio Mar da Coroa.\nNaquele momento, o garoto pensou algo que definiria sua vida:\n“No mar da ambição… todo homem tem um preço.”\nEle se aproximou.\nPasso por passo.\nCalmo.\nRespiração controlada.\nMão estendida.\nUm movimento rápido.\nQuase perfeito.\nQuase.\nPorque naquele instante…\nA mão do homem segurou o pulso dele.\nForte.\nImplacável.\nO mercado inteiro ficou em silêncio.\nAs moedas pararam de tilintar.\nAté o vento pareceu prender a respiração.\nO homem rico olhou para o garoto.\nE sorriu.\nNão era um sorriso gentil.\nEra o sorriso de alguém que já tinha visto aquilo muitas vezes.\n“Um ladrãozinho?”\nOs guardas começaram a rir.\nMas o homem levantou a mão.\nSilêncio.\nEle observou o garoto com curiosidade.\n“Você tentou roubar o homem mais influente desta cidade.”\nDenotas não respondeu.\nEle apenas olhou diretamente nos olhos dele.\nSem medo.\nSem arrependimento.\nO homem soltou uma gargalhada.\n“Isso não é ambição.”\n“Isso é demência.”\nOs guardas começaram a falar entre si.\nAlguns riram.\nOutros balançaram a cabeça.\n“Esse garoto pertence a um hospício.”\nMas Denotas não ouviu as risadas.\nPorque naquele momento…\nAlgo diferente estava acontecendo dentro da mente dele.\nUma pergunta.\nSimples.\nMas poderosa.\n“E se eu conseguir?”\nA Primeira Lenda\nNaquela noite, ele fugiu dos guardas.\nNão com força.\nNão com velocidade.\nMas com algo muito mais perigoso.\nObservação.\nMentiras.\nManipulação.\nPequenos truques.\nHoras depois, ele estava sozinho em um telhado olhando a cidade.\nAs luzes refletiam nos canais de água.\nDenotas observava os navios ao longe.\nE pensava.\nNão sobre dinheiro.\nNão sobre riqueza.\nMas sobre liberdade.\nFoi anos depois que ele descobriria uma história antiga.\nA história de um homem chamado Monkey D. Luffy.\nUm pirata que havia mudado o mundo.\nUm homem que havia comido uma fruta lendária.\nA Hito Hito no Mi.\nA fruta que escondia o poder de Nika, o Deus do Sol.\nMas naquele momento…\nDenotas ainda não conhecia essa história.\nEle apenas olhava o horizonte.\nE dizia algo para si mesmo.\nBaixo.\nQuase como um juramento.\n“Se o mundo chama isso de loucura…”\nEle sorriu.\n“Então eu vou enlouquecer o mundo.”\nE assim começou a verdadeira história de El Denotas.\nMuito antes do roubo da fruta.\nMuito antes da fama.\nMuito antes do mundo conhecer o nome dele.\nTudo começou…\nCom um bolso.\n"
  },
  {
    "id": "cap-3",
    "slug": "capitulo-3",
    "tipo": "capitulo",
    "titulo": "Capítulo 3 — A Lenda do Primeiro Rei",
    "subtitulo": "A biblioteca municipal e a verdade sobre Joy Boy e Roger",
    "numero": 3,
    "ordem": 6,
    "duracaoEstimada": "10 min",
    "resumo": "Denotas explora a biblioteca de Del Láguas, encontra livros censurados e conversa com o velho Garvin sobre Joy Boy, Roger e o Século Perdido.",
    "conteudoTexto": "📖 ONE TREASURE\nCapítulo 3 — A Lenda do Primeiro Rei\nAlguns meses haviam se passado desde o incidente no mercado.\nDel Láguas Cristalinas do Sul continuava a mesma cidade de sempre.\nRica.\nBrilhante.\nE profundamente injusta.\nDurante o dia, a luz do sol refletia nos canais de água cristalina que cortavam a cidade como veias brilhantes. As torres de pedra branca se erguiam acima das ruas movimentadas, exibindo bandeiras de famílias ricas que controlavam o comércio do Mar da Coroa.\nÀ primeira vista, Del Láguas parecia perfeita.\nMas Denotas já sabia a verdade.\nA cidade não era governada por justiça.\nEra governada por bolsos.\nBolsos cheios.\nBolsos pesados.\nBolsos que decidiam quem tinha voz e quem era invisível.\nE foi observando esses bolsos que ele havia aprendido sua primeira lição sobre o mundo:\nTodo homem tem um preço.\nMas agora havia algo novo em sua mente.\nAlgo que ele não conseguia ignorar.\nUma pergunta.\nUma pergunta que havia nascido depois do fracasso em roubar o homem mais poderoso da cidade.\nPor que alguns homens se tornavam lendas?\nDinheiro não criava lendas.\nPoder também não.\nAlguns homens ricos eram esquecidos no mesmo dia em que morriam.\nMas outros…\nOutros atravessavam séculos.\nDenotas queria entender isso.\nEle queria descobrir o que separava um homem comum de um homem cujo nome sobrevivia ao tempo.\nFoi essa curiosidade que o levou, numa noite chuvosa, ao porto de Del Láguas.\nO Mercado das Histórias\nO porto da cidade era diferente do resto de Del Láguas.\nAli, a elegância desaparecia.\nEm vez de mármore polido, havia madeira desgastada.\nEm vez de perfumes caros, havia cheiro de sal, peixe e rum.\nEm vez de nobres orgulhosos, havia homens marcados pelo mar.\nMarinheiros.\nMercadores.\nAventureiros.\nGente que havia visto lugares que os nobres jamais imaginariam.\nPara Denotas, aquilo era mais valioso que qualquer moeda.\nPorque aqueles homens não carregavam apenas mercadorias.\nEles carregavam histórias.\nNaquela noite, a chuva caía fina sobre o cais.\nA taverna do porto estava cheia.\nRisos.\nDiscussões.\nCopos batendo nas mesas.\nDenotas entrou silenciosamente.\nNinguém prestou atenção nele.\nPara os adultos, ele era apenas mais um garoto de rua.\nMas ele não estava ali para ser visto.\nEle estava ali para ouvir.\nSentou-se em um canto escuro próximo a um grupo de marinheiros que discutiam animadamente.\nUm deles era um homem velho.\nCabelos grisalhos.\nBarba espessa.\nRosto marcado por cicatrizes que contavam histórias silenciosas.\nEle falava alto, segurando uma garrafa quase vazia.\n“Vocês jovens não sabem nada sobre o mar!”\nOs outros riram.\nUm deles respondeu:\n“Lá vem o velho Garvin com suas histórias de novo.”\nGarvin bateu a garrafa na mesa.\n“Histórias? Vocês acham que são histórias?”\nEle apontou para seu reflexo distorcido no copo de rum.\n“Ele viu o que o mundo se recusa a enxergar.”\nGarvin apontou para a janela da taverna, onde o mar escuro se estendia até o horizonte.\n“Aquele oceano já foi dominado por um homem.”\nO grupo ficou em silêncio.\nDenotas inclinou levemente a cabeça.\nO Homem que Riu\nGarvin continuou:\n“Muito antes de vocês nascerem… existiu um homem que conquistou todos os mares.”\nUm jovem marinheiro riu.\n“Você está falando daquele louco…?”\nGarvin levantou a garrafa.\nOs olhos dele brilhavam.\n“Louco?”\nEle soltou uma gargalhada.\n“Se ele era louco… então o mundo inteiro é um hospício.”\nE então ele disse um nome que parecia carregar o peso da história.\nGol D. Roger.\nDenotas nunca tinha ouvido aquele nome.\nMas algo na forma como Garvin o pronunciou fez o garoto prestar ainda mais atenção.\nEra como se aquele nome tivesse gravidade.\nUm dos marinheiros cruzou os braços.\n“Você quer dizer o Rei dos Piratas?”\nGarvin assentiu lentamente.\n“Sim.”\nOutro homem interveio:\n“Meu avô dizia que Roger era um demônio.”\n“Um tirano.”\n“Um assassino.”\nGarvin balançou a cabeça.\n“Talvez.”\nEle tomou um gole da garrafa.\n“Mas também era algo mais.”\nOs outros esperaram.\nGarvin sorriu.\n“O homem mais livre que já existiu.”\nSilêncio.\nA chuva batia no telhado da taverna.\nDenotas sentiu um arrepio estranho.\nGarvin continuou:\n“Ele navegou por mares impossíveis.”\n“Enfrentou inimigos lendários.”\n“Descobriu segredos que ninguém mais conseguiu encontrar.”\nUm dos marinheiros perguntou:\n“E então ele encontrou o tal tesouro?”\nGarvin olhou para a mesa por um momento.\nComo se estivesse lembrando de algo distante.\nEntão respondeu:\n“Sim.”\n“O maior tesouro da história.”\nOutro marinheiro perguntou:\n“O que era?”\nGarvin deu de ombros.\n“Ninguém sabe.”\n“Tudo que sabemos é o que aconteceu depois.”\n“Quando Roger encontrou o tesouro…”\nEle levantou os olhos.\nE sorriu.\n“…ele riu.”\nA Pergunta\nA taverna voltou a ficar barulhenta.\nMas Denotas não estava mais ouvindo as conversas.\nAquela frase ecoava em sua mente.\nEle riu.\nNão fazia sentido.\nUm homem conquista o maior tesouro do mundo…\nE ri?\nPor quê?\nSe fosse dinheiro…\nEle ficaria rico.\nSe fosse poder…\nEle dominaria o mundo.\nSe fosse uma arma…\nEle poderia destruir seus inimigos.\nMas rir?\nAquilo não era reação de quem encontra riqueza.\nEra reação de quem encontra algo inesperado.\nAlgo que muda tudo.\nDenotas voltou para casa naquela noite com a cabeça cheia de perguntas.\nE pela primeira vez na vida…\nEle não conseguiu dormir.\nO Primeiro Passo\nNa manhã seguinte, a cidade acordou como sempre.\nMercadores abrindo lojas.\nNobres atravessando pontes elegantes.\nGuardas patrulhando ruas.\nMas Denotas fez algo diferente.\nEm vez de ir ao mercado observar bolsos…\nEle caminhou até um prédio antigo perto do centro da cidade.\nUm lugar que sempre ignorara.\nA biblioteca de Del Láguas.\nEra um edifício enorme.\nConstruído de pedra escura.\nColunas altas sustentavam um teto arqueado.\nA maioria das pessoas da cidade nunca entrava ali.\nLivros não interessavam a quem já tinha dinheiro.\nDenotas empurrou a porta pesada.\nEla rangeu lentamente.\nO interior era silencioso.\nFileiras intermináveis de estantes se estendiam em todas as direções.\nO cheiro de papel antigo preenchia o ar.\nUm homem idoso levantou os olhos de trás de uma mesa.\nEra o bibliotecário.\nEle observou Denotas por alguns segundos.\n“Biblioteca não é lugar para crianças.”\nDenotas respondeu calmamente:\n“Eu não sou criança.”\nO velho ergueu uma sobrancelha.\n“E o que você procura?”\nDenotas respondeu sem hesitar:\n“História.”\nO bibliotecário ficou em silêncio por um momento.\nDepois apontou para uma seção distante.\n“Última ala.”\n“História antiga.”\nO Primeiro Livro Proibido\nDenotas passou horas caminhando entre estantes.\nOs livros eram pesados.\nAlguns estavam cobertos de poeira.\nOutros pareciam tão antigos que poderiam se desfazer ao toque.\nEle começou a procurar qualquer coisa relacionada ao nome que ouvira na taverna.\nRoger. Roger. Roger.\nFinalmente encontrou.\nUm volume antigo com capa de couro desgastado.\nO título estava quase apagado.\nMas ainda era possível ler algumas palavras.\nA Grande Era dos Piratas.\nDenotas abriu o livro.\nAs páginas estavam amareladas.\nA escrita era irregular.\nComo se tivesse sido copiada várias vezes ao longo dos anos.\nEle começou a ler.\nAli estavam registros fragmentados de uma era distante.\nUma época em que o mundo era dominado por piratas.\nNavios lendários cruzavam os mares.\nBatalhas gigantes aconteciam em ilhas desconhecidas.\nE no centro de tudo…\nEstava o nome de Gol D. Roger.\nEle continuou lendo.\nRoger havia sido capturado.\nExecutado publicamente.\nMas antes de morrer…\nEle disse algo que mudou o mundo.\nAlgo sobre um tesouro chamado One Piece.\nDenotas virou a página.\nE então percebeu algo estranho.\nA página seguinte estava arrancada.\nEle franziu a testa.\nVirou outra página.\nMetade do texto estava coberto por tinta preta.\nPáginas arrancadas com violência. Tintas pretas espalhadas como feridas. Palavras fantasmas onde letras deveriam existir.\nMais páginas faltavam.\nOutras tinham frases apagadas.\nEra como se alguém tivesse tentado esconder partes da história.\nDenotas fechou o livro lentamente.\nAlgo estava errado. Muito errado.\nSe aquelas histórias eram apenas lendas…\nPor que alguém se daria ao trabalho de escondê-las?\nA Verdade Escondida\nDenotas voltou à mesa do bibliotecário.\nColocou o livro diante dele.\n“Por que essas páginas estão faltando?”\nO velho observou o livro.\nDepois suspirou.\n“Algumas histórias são… inconvenientes.”\nDenotas cruzou os braços.\n“Inconvenientes para quem?”\nO bibliotecário não respondeu imediatamente.\nFinalmente disse:\n“A história não é escrita pelos que vivem. É escrita pelos que sobrevivem à história.”\nDenotas inclinou a cabeça.\n“Então a história foi alterada?”\nO velho respondeu calmamente:\n“A história sempre é alterada.”\n“Por vencedores.”\n“Por governos.”\n“Por aqueles que querem controlar o que as pessoas acreditam.”\nDenotas ficou em silêncio.\nO bibliotecário acrescentou:\n“Mas às vezes… a verdade escapa.”\nEle apontou para o livro.\n“Mesmo quando tentam escondê-la.”\nDenotas pegou o livro novamente.\nAgora ele entendia algo importante.\nSe estavam tentando esconder partes da história…\nEntão essas partes eram perigosas.\nE se eram perigosas…\nProvavelmente eram verdadeiras.\nA Decisão\nNaquela noite, Denotas voltou ao telhado onde costumava observar a cidade.\nDel Láguas brilhava sob a luz da lua.\nOs canais refletiam as lanternas das pontes.\nNavios balançavam suavemente no porto.\nMas Denotas não estava olhando para a cidade.\nEle estava olhando para o horizonte.\nPensando em um homem que viveu séculos atrás.\nUm homem que encontrou o maior tesouro do mundo.\nE riu.\nEle murmurou para si mesmo:\n“Se esse homem realmente existiu…”\nO vento soprou forte.\nDenotas continuou:\n“…então o mundo inteiro está mentindo.”\nE naquele momento, algo mudou dentro dele.\nAntes, ele queria dinheiro.\nDepois, queria se tornar uma lenda.\nMas agora…\nEle queria algo muito mais perigoso.\nA verdade.\nE sem saber…\nEle havia dado o primeiro passo em uma jornada que o levaria muito além de Del Láguas.\nMuito além do Mar da Coroa.\nMuito além do que qualquer homem comum ousaria buscar.\nPorque, um dia…\nO mundo inteiro conheceria o nome dele.\nEl Denotas.\nO homem que enganaria o mundo.\n"
  },
  {
    "id": "cap-4",
    "slug": "capitulo-4",
    "tipo": "capitulo",
    "titulo": "Capítulo 4 — O Homem que Libertou o Sol",
    "subtitulo": "O Mundo Antes da Quebra e a Era da Loucura",
    "numero": 4,
    "ordem": 7,
    "duracaoEstimada": "15 min",
    "resumo": "Garvin revela o que aconteceu com Luffy, a libertação do mundo, o colapso dos mares e o início da Era da Loucura.",
    "conteudoTexto": "📖 CAPÍTULO 4\nO Homem que Libertou o Sol\n(Parte 1)\nO mundo era estranho.\nQuanto mais Denotas aprendia sobre ele, mais percebia que havia algo profundamente errado com a história que as pessoas contavam.\nOs livros da biblioteca de Del Láguas pareciam antigos, mas ao mesmo tempo incompletos.\nAlgumas páginas estavam arrancadas.\nOutras haviam sido raspadas com tinta.\nE havia partes em que a narrativa simplesmente saltava anos inteiros, como se alguém tivesse decidido que certos acontecimentos não deveriam existir.\nNo começo, Denotas pensou que aquilo fosse apenas descuido.\nMas depois percebeu algo.\nAs páginas arrancadas sempre apareciam perto de certos nomes.\nNomes que pareciam carregar peso demais.\nNomes que não deviam ser lembrados.\nUm deles ele já conhecia.\nGol D. Roger.\nMas havia outro.\nUm nome que aparecia repetidamente nas margens rasgadas.\nUm nome escrito de formas diferentes.\nÀs vezes como herói.\nÀs vezes como criminoso.\nÀs vezes como algo ainda mais estranho.\nNaquela tarde, enquanto o sol atravessava os vitrais da biblioteca, Denotas encontrou novamente aquele nome.\nEle estava escondido em um livro pequeno, quase esquecido entre volumes de história marítima.\nA capa dizia apenas:\nCrônicas da Última Era dos Piratas.\nDenotas abriu o livro.\nLogo na primeira página havia uma frase escrita em tinta escura.\n“Depois da morte do Rei dos Piratas, o mundo mergulhou na maior era de liberdade e caos que já existiu.”\nEle virou a página.\nO texto continuava.\n“Mas nenhum homem simbolizou essa era tanto quanto um garoto que veio de um pequeno mar chamado East Blue.”\nDenotas franziu a testa.\nEast Blue.\nEle já ouvira esse nome antes nas histórias de marinheiros.\nEra considerado o mais fraco dos mares.\nUm lugar pequeno.\nQuase insignificante.\nMas o livro dizia algo diferente.\n“Daquele mar nasceu um homem que enfrentaria imperadores, governos e deuses.”\nDenotas sentiu um leve arrepio.\nEle virou a página seguinte.\nE ali estava o nome completo.\nMonkey D. Luffy.\nO garoto que queria ser livre\nA história começava de forma simples.\nMuito simples.\nSimples demais para alguém que acabaria mudando o mundo.\nSegundo o livro, Luffy era apenas um garoto.\nSem riqueza.\nSem poder.\nSem influência.\nMas tinha um sonho.\nUm sonho tão absurdo que qualquer adulto teria rido dele.\nEle queria se tornar o Rei dos Piratas.\nDenotas levantou os olhos do livro.\nEle já sabia o que significava esse título.\nEra o mesmo que pertencera a Roger.\nO homem que conquistou todos os mares.\nO homem que riu ao encontrar o maior tesouro do mundo.\nMas havia algo estranho.\nRoger havia sido um homem lendário.\nUm capitão poderoso.\nUm explorador.\nMas Luffy?\nO livro descrevia alguém completamente diferente.\nUm garoto simples.\nImpulsivo.\nQue parecia agir mais com o coração do que com estratégia.\nDenotas continuou lendo.\nSegundo os relatos, Luffy não queria o título de Rei dos Piratas por poder.\nNem por riqueza.\nNem por fama.\nEle queria algo muito mais simples.\nLiberdade.\nO livro dizia que Luffy acreditava que o Rei dos Piratas era simplesmente o homem mais livre do mar.\nDenotas fechou o livro por um momento.\nAquilo era… estranho.\nTodos os homens que ele conhecia queriam dinheiro.\nQueriam influência.\nQueriam controle.\nMas esse tal de Luffy queria apenas ser livre?\nParecia uma ambição pequena.\nE ao mesmo tempo…\nParecia maior do que qualquer outra.\nO fruto proibido\nDenotas voltou ao livro.\nA próxima parte da história falava sobre um evento peculiar.\nUm acidente.\nOu talvez destino.\nSegundo o registro, quando Luffy ainda era criança, ele comeu algo que não deveria.\nUma fruta rara.\nUma fruta que concedia poderes sobrenaturais.\nUma Akuma no Mi.\nDenotas já tinha ouvido esse termo antes.\nFrutas do diabo.\nObjetos misteriosos que concediam habilidades impossíveis.\nMas o livro especificava algo mais.\nNão era qualquer fruta.\nEra uma das mais estranhas já registradas.\nO nome estava escrito claramente na página.\nHito Hito no Mi — Modelo Nika.\nDenotas franziu a testa.\nA descrição da fruta era confusa.\nAlgumas partes estavam borradas.\nOutras estavam claramente censuradas.\nMas o que restava era suficiente para levantar uma pergunta.\nA fruta não concedia apenas força.\nNem apenas habilidades físicas.\nEla concedia algo mais.\nAlgo chamado…\no poder do Deus do Sol.\nDenotas ficou em silêncio.\nDeus do Sol?\nAquilo parecia mais uma lenda do que história.\nMas o livro continuava.\nSegundo o texto, Nika era uma figura mitológica.\nUm guerreiro que aparecia sempre que o mundo mergulhava na escuridão.\nUm libertador.\nUm símbolo de alegria.\nE o mais estranho de tudo…\nNika lutava rindo.\nDenotas sentiu um arrepio.\nRindo.\nO livro sobre Roger dizia que ele riu ao encontrar o tesouro.\nAgora este dizia que o Deus do Sol lutava rindo.\nEra coincidência?\nOu havia algo mais conectando essas histórias?\nUm homem contra o mundo\nDenotas continuou lendo.\nA história de Luffy se tornava cada vez mais absurda.\nSegundo os registros, ele enfrentou piratas lendários.\nDerrotou governantes poderosos.\nInvadiu fortalezas impossíveis.\nEnfrentou até mesmo o governo que controlava o mundo.\nE mesmo assim…\nEle continuava rindo.\nNão como um homem cruel.\nMas como alguém que simplesmente se recusava a viver com medo.\nDenotas passou a mão pelo queixo.\nEle conhecia homens que riam.\nA maioria deles ria quando enganava alguém.\nOu quando ficava rica.\nMas esse tal de Luffy parecia rir por outro motivo.\nComo se o mundo inteiro fosse uma grande aventura.\nComo se cada obstáculo fosse apenas parte da diversão.\nDenotas voltou à primeira página.\nAli estava a frase novamente.\n“Nenhum homem simbolizou essa era tanto quanto Monkey D. Luffy.”\nEle respirou fundo.\nSe metade daquilo fosse verdade…\nEntão esse homem não era apenas um pirata.\nEle era algo maior.\nAlgo que inspirava pessoas.\nAlgo que mudava o mundo.\nMas então surgiu a pergunta mais importante.\nSe Luffy foi tão importante…\nPor que os livros estavam incompletos?\nPor que tantas partes da história estavam escondidas?\nPor que alguém queria apagar esse nome?\nDenotas fechou o livro lentamente.\nE naquele momento ele percebeu algo.\nTalvez o problema não fosse apenas que a história estava incompleta.\nTalvez…\nO mundo estivesse mentindo sobre seus heróis.\nEle olhou novamente para o nome na capa.\nMonkey D. Luffy.\nE murmurou:\n“Quem foi você… de verdade?”\nUma nova pergunta\nNaquela noite, Denotas voltou novamente ao porto.\nA taverna estava cheia como sempre.\nMas desta vez ele não estava procurando histórias sobre Roger.\nEle queria ouvir algo diferente.\nAlgo sobre Luffy.\nEle encontrou o velho Garvin novamente sentado em sua mesa habitual.\nDenotas aproximou-se.\nGarvin olhou para ele.\n“Você de novo.”\nDenotas sentou-se sem pedir permissão.\n“Quero saber sobre outro homem.”\nGarvin levantou uma sobrancelha.\n“Outro?”\nDenotas respondeu:\n“Monkey D. Luffy.”\nO velho ficou em silêncio.\nUm silêncio longo.\nDepois ele soltou uma pequena risada.\n“Então você encontrou esse nome também…”\nDenotas inclinou a cabeça.\n“Também?”\nGarvin tomou um gole de rum.\nE disse algo que mudaria tudo.\n“Garoto… se Roger iniciou a era dos piratas…”\nEle colocou a garrafa na mesa.\n“…Luffy foi quem quebrou o mundo.”\nDenotas sentiu o coração acelerar.\n“Como?”\nGarvin sorriu.\n“Essa é uma história longa.”\nEle olhou pela janela da taverna.\nPara o mar escuro.\nE disse:\n“Mas tudo começou com um sonho simples.”\n“O sonho de ser livre.”\n\n\n📖 CAPÍTULO 4\nO Homem que Libertou o Sol\n(Parte 2 — Final)\nA chuva havia parado.\nMas o som do mar continuava pesado, como se o próprio oceano estivesse ouvindo a conversa.\nO velho Garvin ficou em silêncio por alguns segundos, encarando o copo à sua frente.\nDenotas não falou nada.\nEle já tinha aprendido que as melhores respostas vinham quando se sabia esperar.\nFinalmente, Garvin começou.\nO Mundo Antes da Quebra\n“Antes de tudo mudar…” — disse o velho —\n“o mundo era controlado.”\nEle levantou um dedo.\n“Não por reis comuns.”\nOutro dedo.\n“Nem por piratas.”\nMais um.\n“Mas por algo maior.”\nEle olhou diretamente nos olhos de Denotas.\n“O Governo Mundial.”\nDenotas já tinha ouvido esse nome antes nos livros.\nMas sempre de forma vaga.\nDistante.\nComo se fosse uma entidade invisível.\nGarvin continuou:\n“Eles controlavam o que as pessoas sabiam.”\n“Controlavam a história.”\n“Controlavam o medo.”\nDenotas lembrou imediatamente das páginas arrancadas.\nDos textos censurados.\nDas lacunas nos livros.\nTudo começou a fazer sentido.\nGarvin inclinou-se para frente.\n“E então apareceu ele.”\nUm nome que Denotas já conhecia.\nMas que agora parecia carregar ainda mais peso.\nMonkey D. Luffy.\nO Homem que Não Obedecia\n“Luffy era diferente de qualquer outro pirata.”\nGarvin deu uma leve risada.\n“Na verdade… ele era diferente de qualquer pessoa.”\nDenotas cruzou os braços.\n“Como?”\nGarvin respondeu:\n“Ele não obedecia.”\n“Não seguia regras.”\n“Não respeitava poder.”\n“E o mais importante…”\nEle fez uma pausa.\n“…ele não tinha medo.”\nDenotas pensou por um instante.\nIsso parecia simples.\nMas não era.\nTodo mundo tinha medo de alguma coisa.\nDinheiro.\nPoder.\nAutoridade.\nAté mesmo piratas temiam algo.\nMas alguém que não tinha medo de nada…\nEra impossível de controlar.\nGarvin continuou:\n“Ele entrava onde ninguém podia entrar.”\n“Desafiava quem ninguém podia desafiar.”\n“E libertava quem ninguém podia salvar.”\nDenotas apertou levemente os punhos.\nLibertava.\nEssa palavra apareceu de novo.\nO Retorno do Sol\nGarvin pegou um pedaço de papel velho do bolso.\nDesenhou algo de forma simples.\nUm círculo.\nE ao redor dele, traços irregulares.\n“Você sabe o que isso é?”\nDenotas respondeu:\n“O sol.”\nGarvin assentiu.\n“Para alguns povos antigos…”\n“o sol não era apenas uma estrela.”\n“Era esperança.”\nEle virou o papel.\nE escreveu uma palavra.\nNIKA.\nDenotas sentiu um leve arrepio.\nEle já tinha visto esse nome no livro.\nGarvin continuou:\n“Dizem que, nos tempos antigos… existia um guerreiro.”\n“Um homem que aparecia quando o mundo estava quebrado.”\n“Um homem que fazia as pessoas rirem… mesmo em meio à dor.”\nEle olhou para Denotas.\n“Esse homem era chamado de Deus do Sol.”\n“E seu nome era Nika.”\nDenotas respirou fundo.\n“E isso tem a ver com Luffy?”\nGarvin sorriu.\n“Tem tudo a ver.”\nO Poder que Ri\n“O garoto comeu uma fruta.”\nGarvin disse calmamente.\n“Mas não era uma fruta qualquer.”\nEle bateu o dedo na mesa.\n“Era uma fruta que o mundo tentou esconder.”\n“Uma fruta que não devia existir.”\nDenotas murmurou:\n“Hito Hito no Mi — Modelo Nika…”\nGarvin arregalou levemente os olhos.\n“Então você já sabe.”\nDenotas assentiu.\nGarvin continuou:\n“Essa fruta não dá apenas poder.”\n“Ela dá… liberdade.”\nDenotas franziu a testa.\n“Liberdade não é poder.”\nGarvin riu.\n“É aí que você está errado, garoto.”\nEle inclinou-se para frente.\n“Liberdade é o maior poder que existe.”\nSilêncio.\nAquelas palavras ficaram no ar.\nPesadas.\nReais.\nGarvin continuou:\n“Quando Luffy despertou esse poder…”\nEle fez uma pausa.\n“…ele começou a lutar de forma completamente diferente.”\n“Seu corpo ignorava regras.”\n“Seus movimentos eram impossíveis.”\n“E o mais assustador…”\nEle sorriu.\n“…ele lutava rindo.”\nDenotas sentiu o coração acelerar.\nRindo.\nDe novo.\nRoger riu.\nNika ria.\nLuffy ria.\nAquilo não era coincidência.\nA Verdade que o Mundo Escondeu\nGarvin olhou ao redor da taverna.\nCertificando-se de que ninguém estava prestando atenção.\nE então falou mais baixo.\n“Garoto… escuta bem.”\n“Essa parte não está nos livros.”\nDenotas inclinou-se ligeiramente.\nGarvin continuou:\n“Luffy não apenas enfrentou o mundo…”\n“…ele venceu.”\nO tempo pareceu parar.\nDenotas piscou lentamente.\n“Venceu… o mundo?”\nGarvin assentiu.\n“O Governo.”\n“Os imperadores.”\n“As forças que controlavam tudo.”\n“Ele destruiu o equilíbrio.”\nDenotas respirou fundo.\nIsso era impossível.\nOu… deveria ser.\nGarvin continuou:\n“Mas aqui está o problema…”\nEle apontou para a cabeça.\n“Quem controla a história…”\n“…controla o que as pessoas acreditam.”\nDenotas entendeu imediatamente.\n“Então eles mudaram tudo.”\nGarvin assentiu.\n“Eles transformaram um libertador em ameaça.”\n“Um símbolo de liberdade… em perigo.”\n“Um homem que quebrou correntes…”\n“…em alguém que deveria ser esquecido.”\nDenotas apertou os punhos.\nAquilo explicava tudo.\nAs páginas arrancadas.\nAs histórias contraditórias.\nO silêncio.\nO mundo não tinha apenas esquecido.\nO mundo tinha sido forçado a esquecer.\nA Ligação\nDenotas ficou em silêncio por um longo tempo.\nPensando.\nConectando tudo.\nRoger encontrou algo e riu.\nLuffy herdou algo e lutou rindo.\nNika era uma lenda que representava liberdade.\nEle murmurou:\n“Então… o tesouro…”\nGarvin sorriu.\n“Você está começando a entender.”\nDenotas continuou:\n“O One Piece…”\n“…não é apenas um tesouro.”\nGarvin não respondeu.\nMas o sorriso dele confirmou tudo.\nDenotas sentiu algo mudar dentro dele.\nTudo o que ele acreditava…\nEstava errado.\nDinheiro não era o topo.\nPoder não era o topo.\nFama não era o topo.\nO topo era…\nLiberdade.\nO Silêncio Antes da Tempestade\nDenotas saiu da taverna.\nA noite estava silenciosa.\nO mar calmo.\nMas dentro dele…\nTudo estava em movimento.\nEle caminhou até o mesmo ponto onde costumava observar o horizonte.\nE ficou ali.\nPensando.\nSe Roger riu ao encontrar o tesouro…\nE Luffy lutou rindo ao alcançar seu sonho…\nEntão…\nO verdadeiro tesouro não era algo que se possuía.\nEra algo que se vivia.\nDenotas fechou os olhos.\nPela primeira vez…\nEle não pensava em roubar.\nNem em enganar.\nNem em vencer.\nEle pensava em algo diferente.\nAlgo perigoso.\nAlgo impossível de controlar.\nLiberdade.\nO Nascimento de uma Nova Ambição\nEle abriu os olhos.\nE disse em voz baixa:\n“Se o mundo esconde isso…”\n“…então isso é o mais valioso que existe.”\nO vento soprou mais forte.\nDenotas sorriu.\nMas não era o sorriso de um vigarista.\nEra diferente.\nMais leve.\nMais verdadeiro.\n“Então eu não vou roubar ouro.”\nEle deu um passo à frente.\n“Eu vou roubar algo maior.”\nOutro passo.\n“Eu vou roubar a verdade.”\nE então…\nEle disse algo que definiria seu destino.\n“E quando eu tiver essa verdade…\neu vou fazer o mundo inteiro rir.”\nCliffhanger — O Eco da Loucura\nNaquela mesma noite…\nEm algum lugar distante do mundo…\nUm homem encapuzado fechava um livro antigo.\nNa capa, um símbolo proibido.\nO símbolo do sol.\nEle murmurou:\n“Então alguém começou a procurar…”\nOutro homem nas sombras perguntou:\n“Devemos agir?”\nO encapuzado respondeu:\n“Ainda não.”\nEle olhou pela janela.\nPara o mar escuro.\n“Mas se esse garoto continuar…”\nUma pausa.\nE então:\n“…ele vai descobrir o que nunca deveria ser encontrado.”\nSilêncio.\n“O início da…”\nEle sorriu levemente.\n“…Era da Loucura.”\n\n"
  },
  {
    "id": "cap-5",
    "slug": "capitulo-5",
    "tipo": "capitulo",
    "titulo": "Capítulo 5 — A Primeira Caçada pelo Conhecimento",
    "subtitulo": "As três da manhã na biblioteca e a descoberta da chave",
    "numero": 5,
    "ordem": 8,
    "duracaoEstimada": "6 min",
    "resumo": "Denotas volta à biblioteca na madrugada, descobre a gaveta falsa com mapas do Mar Antigo e um enigma gravado em latão.",
    "conteudoTexto": "📖 CAPÍTULO 5 — PARTE 1\nA Primeira Caçada pelo Conhecimento\nA biblioteca estava escura.\nVelas tremiam nas paredes.\nEram três da manhã.\nDenotas não dormiu após as palavras de Garvin.\n\"Luffy quebrou o mundo.\"\nQuebrou como?\nPortas pesadas rangeram.\nO bibliotecário, olhos injetados, sussurrou:\n\"Volte amanhã, garoto.\"\nDenotas respondeu frio:\n\"A verdade não espera.\"\nO Pergaminho Vermelho\nQuarto canto esquecido. Estante empoeirada.\nUma corda vermelha prendia algo antigo.\nPERGAMINHO PROIBIDO.\nPrimeira linha, tinta desbotada:\n\"Nika não foi o fim. Foi o começo.\"\nDenotas leu rápido. Coração acelerou.\nRoger. Luffy. Broken Line.\nUma prisão viva.\nBibliotecário atrás dele, voz trêmula:\n\"Isso matou dois estudiosos. Guarde e fuja.\"\nDenotas dobrou o pergaminho.\n\"Eles morreram. Eu não.\"\nDoze Horas Depois\nSol nasceu. Sol se pôs.\nDenotas sangrava dos olhos.\nÚltimo símbolo decifrado.\nMAPA CENSURADO.\nIlha Relógio. Coordenadas riscadas.\n\"Onde o tempo trai quem procura.\"\nPorta da biblioteca TREMEU.\nDuas sombras entraram. Capuzes pretos.\n\"O garoto que lê o proibido...\"\nDenotas desapareceu nas sombras das estantes.\nVoz ecoou calma:\n\"Eu leio o que vocês escondem.\"\nCapuz riu baixo. Lâmina brilhou na manga.\n\"Então leia isso.\"\nFuga Silenciosa\nDenotas deslizou entre livros como fantasma.\nPassos dos capuzes ecoaram mais lentos. Mais calculados.\nEle conhecia cada canto.\nTreze dias roubando na cidade.\nBiblioteca = seu território.\nEscada em espiral. Corredor estreito.\nCapuz primeiro:\n\"Ele não pode sair com aquilo!\"\nDenotas, já no telhado, sussurrou pro vento:\n\"Vocês me subestimam.\"\nHorizonte fumegava. Porto distante. Navios balançavam.\nPergaminho vermelho queimava em sua mão.\nPrimeiro teste passado.\nPrimeiros inimigos reais.\nMas uma pergunta queimava mais forte:\n\"Quem mandou vocês?\"\nDenotas sorriu no escuro.\n\"O jogo começou.\"\n\n\n📖 CAPÍTULO 5 — PARTE 2\nO Jogo das Sombras\nDenotas correu pelas telhados de Del Láguas.\nO pergaminho vermelho queimava em sua mão.\nIlha Relógio.\nAtrás dele, passos dos capuzes. Silenciosos. Profissionais.\n\"Eles sabem cada canto da cidade.\"\nEle parou na sombra de uma torre.\nRespirou. Observou.\nDois homens. Armas ocultas. Sincronia perfeita.\n\"O garoto que lê o proibido...\"\nO Primeiro Sinal\nMercado central. Multidão densa.\nDenotas misturou-se aos comerciantes. Mudou capa. Postura.\nTécnica de rua. Ainda sem fruta.\nEntre peixes e perfumes, um pergaminho anônimo caiu em seus pés.\nCorda preta agora.\n\"O que liberta também aprisiona. Escolha.\"\nTrês caminhos escritos:\nHistória — Verdades apagadas\nPsicologia — Mentes dos homens\nEstratégia — Movimentos ocultos\nDenotas escondeu o pergaminho.\nCapuzes passaram a 10 metros. Não viram.\n\"Eles me guiam. Ou me provocam.\"\nXadrez Mental\nTaverna do porto. Fumaça espessa.\nDenotas sentou no canto escuro. Pergaminho aberto.\nLinha oculta entre símbolos:\n\"Cada mentira que acredita fortalece minha posição.\"\nEle sorriu.\n\"Então vocês escrevem as regras. Eu reescrevo o jogo.\"\nDeixou um livro aberto na mesa. Pista falsa.\n\"Roger falhou na Ilha Relógio.\"\nNoite seguinte, livro estava virado na página errada.\nAlguém leu. Alguém corrigiu.\n\"Excelente. Ele não recua.\" — Voz nas sombras.\nPrimeira Armadilha\nBiblioteca. Terceira madrugada.\nLivro \"normal\" entre volumes comuns.\nHistória de pirata. Datas trocadas. Nomes invertidos.\nDenotas decifrou em 47 minutos:\nRoger venceu. Livro mente.\nNo canto da página, nova mensagem:\n\"Passou no primeiro teste, garoto. O próximo custará caro.\"\nPorta rangeu.\nCapuz sozinho desta vez.\n\"O que você roubou da estante vermelha?\"\nDenotas, calma absoluta:\n\"O que vocês esconderam dela.\"\nCapuz riu baixo. Lâmina na manga.\n\"Então leia isto.\"\nFaca na Sombra\nDenotas deslizou entre estantes como fumaça.\nCapuz mais rápido que os outros. Treinado.\n\"Ele prevê meus movimentos.\"\nEscada espiral. Livros caindo. Poeira.\nCapuz sussurrou:\n\"Crianças curiosas desaparecem.\"\nDenotas parou no último degrau.\nVoz ecoou das sombras:\n\"Vocês me subestimam.\"\nCapuz virou. Lâmina cortou ar vazio.\nDenotas já estava no telhado.\nPorto fumegava abaixo. Navios balançavam.\nPergaminho vermelho + preto na mão.\nDois testes. Duas vitórias.\nMas agora ele sabia:\nNão era mais só estudo.\nEra guerra.\n\"O jogo começou de verdade.\"\n\n"
  },
  {
    "id": "cap-6",
    "slug": "capitulo-6",
    "tipo": "capitulo",
    "titulo": "Capítulo 6 — O Primeiro Jogo Real",
    "subtitulo": "O leilão clandestino no Armazém 44",
    "numero": 6,
    "ordem": 9,
    "duracaoEstimada": "8 min",
    "resumo": "Denotas participa de seu primeiro teste prático de manipulação no cais leste durante um leilão ilegal de artefatos.",
    "conteudoTexto": "📖 CAPÍTULO 6 — O Primeiro Jogo Real\nA cidade nunca dormia.\nMesmo quando o sol desaparecia no horizonte e as luzes começavam a dominar as ruas, Del Láguas continuava viva — pulsando, respirando, escondendo segredos em cada esquina.\nMas naquela noite…\nhavia algo diferente.\nOu melhor…\nalguém diferente.\nDenotas caminhava lentamente entre as ruas estreitas, sem pressa, sem medo, sem destino aparente.\nMas isso era apenas aparência.\nSeus olhos estavam atentos a tudo.\nCada movimento.\nCada som.\nCada padrão.\nA Cidade como um Sistema\nDurante meses, Denotas havia feito algo que ninguém ao seu redor sequer imaginava.\nEle observou.\nNão por curiosidade…\nmas por necessidade.\nEle não via mais pessoas como indivíduos.\nVia padrões.\nUm guarda que coçava o queixo sempre antes de trocar de turno.\nUm vendedor que escondia moedas extras sempre que um cliente discutia preços.\nUm bêbado que repetia o mesmo caminho… todos os dias.\nNada era aleatório.\nNada era caos.\n“O mundo parece desorganizado…”\n“Mas isso é só porque ninguém observa o suficiente.”\nEle parou em uma esquina, encostando-se levemente contra a parede.\nSeus olhos seguiram um grupo de guardas.\nTrês.\nSempre três.\nSempre naquele horário.\nSempre no mesmo trajeto.\nEle fechou os olhos por um instante.\nVisualizou o caminho deles.\nCronometrado.\nRepetitivo.\nPrevisível.\nE então… sorriu.\n“Se tudo segue um padrão… então tudo pode ser quebrado.”\nA Escolha\nDenotas não era um ladrão comum.\nEle não roubava por impulso.\nNem por necessidade imediata.\nEle escolhia.\nE naquela cidade… havia muitos alvos.\nMas apenas alguns… eram interessantes.\nDurante dias — talvez semanas — ele observou um homem específico.\nUm comerciante.\nRico.\nRespeitado.\nE… paranoico.\nO tipo de pessoa que achava que estava sempre um passo à frente.\nO tipo de pessoa que confiava demais… em suas próprias precauções.\nErro fatal.\nO homem tinha guardas.\nTinha cofres.\nTinha rotinas.\nE foi exatamente isso que chamou a atenção de Denotas.\n“Quanto mais alguém tenta se proteger…”\n“Mais padrões cria.”\nEle observou a casa.\nEntradas.\nSaídas.\nJanelas.\nSombras.\nTudo.\nNada escapava.\nO Plano\nDenotas não pensava como um ladrão.\nEle pensava como um jogador.\nE o mundo…\nera um tabuleiro.\nEle não precisava de força.\nPrecisava de tempo.\nE tinha.\nFase 1 — Informação\nEle mapeou tudo.\nHorários dos guardas\nCaminhos alternativos\nTempo de reação\nRotina do comerciante\nO homem jantava sempre no mesmo horário.\nBebia sempre a mesma bebida.\nDormia sempre na mesma hora.\nE mais importante…\nConfiava na previsibilidade.\nFase 2 — Ilusão\nDenotas não queria apenas entrar.\nQueria garantir que ninguém estivesse olhando.\nEntão ele fez algo simples.\nCriou uma distração.\nNada exagerado.\nNada chamativo.\nApenas o suficiente.\nUm pequeno conflito em outra rua.\nUm barulho fora do comum.\nUma atenção desviada.\n“As pessoas não precisam ver você…”\n“Só precisam estar olhando para outro lugar.”\nFase 3 — Execução\nAgora…\nEra hora.\nA Noite do Roubo\nO céu estava limpo.\nA lua iluminava o suficiente para ver…\nmas não o suficiente para revelar.\nPerfeito.\nDenotas se moveu como uma sombra.\nSem pressa.\nSem hesitação.\nSem erro.\nEle não correu.\nNão se escondeu de forma óbvia.\nEle simplesmente… se encaixou no ambiente.\nComo se sempre estivesse ali.\nA Entrada\nNenhuma porta quebrada.\nNenhuma janela forçada.\nEle já sabia onde entrar.\nUma pequena abertura lateral.\nIgnorada por todos.\nMenos por ele.\nEle deslizou para dentro.\nSilêncio.\nO Interior\nA casa era exatamente como ele imaginava.\nOrganizada.\nControlada.\nPrevisível.\nEle caminhou lentamente.\nContando passos.\nEvitando áreas de risco.\nCada movimento…\ncalculado.\nO Cofre\nEle chegou ao cofre principal.\nGrande.\nImponente.\nÓbvio.\nE então…\nEle parou.\nNão tocou.\nNão abriu.\nApenas… observou.\n“Se eu fosse ele…”\n“Eu protegeria isso.”\nSilêncio.\nRespiração controlada.\nOlhos atentos.\nE então ele percebeu.\nAlgo sutil.\nQuase invisível.\nUma discrepância.\nUm detalhe.\nO Verdadeiro Tesouro\nO cofre era uma distração.\nUma armadilha.\nO verdadeiro esconderijo…\nEstava escondido dentro da própria ilusão de segurança.\nDenotas se moveu.\nEncontrou o compartimento oculto.\nAbriu.\nE lá estava.\nOuro.\nMuito ouro.\nA Decisão\nEle poderia pegar tudo.\nE ir embora.\nSeria fácil.\nMas…\nEle não fez isso.\nEle pegou apenas uma parte.\nPrecisa.\nCalculada.\nSuficiente para importar…\nmas não suficiente para ser óbvio.\n“Se tudo desaparecer… é roubo.”\n“Se quase nada desaparecer… é dúvida.”\nE dúvida…\nEra muito mais poderosa.\nA Saída\nEle saiu como entrou.\nSem som.\nSem pressa.\nSem erro.\nE desapareceu na noite.\nO Dia Seguinte\nO comerciante abriu o compartimento.\nParou.\nFranziu a testa.\nContou.\nRecontou.\nConfusão.\nDúvida.\nIncerteza.\n“Eu… tinha mais aqui?”\nSilêncio.\nParanoia.\nE isso…\nEra pior que qualquer roubo.\nA Evolução\nDo alto de um prédio, Denotas observava a cidade.\nCalmo.\nPensativo.\nDiferente.\nEle não era mais apenas alguém que estudava.\nAgora…\nele aplicava.\n“Informação é poder…”\n“Padrões são fraquezas…”\n“E pessoas… são previsíveis.”\nEle fechou os olhos por um momento.\nE então disse:\n“Eu não preciso ser mais forte que 100 homens…”\n“Eu só preciso pensar melhor que eles.”\nO Sinal\nO vento soprou.\nAlgo caiu ao seu lado.\nUm pergaminho.\nEle não se assustou.\nApenas pegou.\nAbriu.\nLeu.\n“Você evoluiu…”\n“Mais rápido do que o esperado.”\n“Mas isso…”\n“Foi apenas o primeiro nível.”\nSilêncio.\nDenotas sorriu.\nUm sorriso leve.\nPerigoso.\n“Então você está me observando…”\nEle olhou para o horizonte.\nPara a cidade.\nPara o mundo.\n“Ótimo.”\n“Porque eu também estou jogando.”\nE naquele momento…\nSem que ninguém percebesse…\nNascia algo muito mais perigoso que um ladrão.\nUm jogador.\nUm estrategista.\nUma mente que não seguia o mundo…\nMas começava a moldá-lo.\n"
  },
  {
    "id": "cap-7",
    "slug": "capitulo-7",
    "tipo": "capitulo",
    "titulo": "Capítulo 7 — O Corpo Que Não Acompanha a Mente",
    "subtitulo": "As limitações físicas e o despertar do Ki",
    "numero": 7,
    "ordem": 10,
    "duracaoEstimada": "7 min",
    "resumo": "Conhecimento sem capacidade de execução é perigoso. Denotas inicia seu treinamento rigoroso de percepção corporal e resistência.",
    "conteudoTexto": "📖 CAPÍTULO 7 — O Corpo Que Não Acompanha a Mente\nA cidade continuava a mesma.\nMas Denotas… não.\nDepois do roubo, algo havia mudado.\nNão no mundo.\nMas na forma como ele o via.\nAgora ele não apenas observava.\nEle interagia.\nEle influenciava.\nEle jogava.\nVestígios… Não Palavras\nDenotas voltou ao mesmo local do roubo.\nNão por necessidade.\nMas por curiosidade.\nEle queria ver as consequências.\nQueria entender… o impacto.\nMas ao chegar lá…\nalgo estava errado.\nNão havia gritos.\nNão havia caos.\nHavia… silêncio.\nE então ele percebeu.\nGuardas.\nMais do que antes.\nMais atentos.\nMais organizados.\n“Eles não reagiram…”\n“Eles aprenderam.”\nIsso fez seu olhar mudar.\n“Então… eu não sou o único que evolui.”\nO Primeiro Erro\nDenotas começou a sair.\nMas algo o fez parar.\nUm detalhe.\nUm pequeno movimento no canto de sua visão.\nAlguém… estava observando.\nNão como um guarda.\nNão como um civil.\nMas como ele.\nAnalisando.\nO Rival\nO homem estava encostado em um poste.\nBraços cruzados.\nCalmo.\nOlhos atentos.\nNão havia medo nele.\nNem pressa.\nDenotas sentiu algo novo.\nNão era perigo.\nEra… reconhecimento.\n“Esse… vê como eu vejo.”\nO homem falou primeiro:\n— Você demorou.\nSilêncio.\nDenotas não respondeu.\nApenas observou.\n— Eu estava curioso se você voltaria… disse o homem.\n— E você voltou.\nPrimeiro Confronto Psicológico\nDenotas decidiu testar.\n— E você estava esperando… ou caçando?\nO homem sorriu levemente.\n— Depende… você é presa ou jogador?\nSilêncio.\nTensão.\nOs dois estavam se medindo.\nNão com força.\nMas com mente.\nA Verdade Inconfortável\nO homem deu um passo à frente.\n— Você é inteligente… isso é óbvio.\nMais um passo.\n— Mas inteligência sem corpo… é só teoria.\nDenotas não recuou.\nMas… percebeu.\nO homem continuou:\n— Você entrou… roubou… saiu… perfeito.\n— Mas se alguém tivesse te visto…\nPausa.\n— Você conseguiria fugir?\nSilêncio.\nDessa vez… Denotas não respondeu.\nPorque sabia a verdade.\nO Primeiro Impacto Físico\nSem aviso…\nO homem avançou.\nRápido.\nMuito rápido.\nDenotas tentou reagir.\nMas seu corpo… não acompanhou.\nO golpe não foi forte.\nMas foi preciso.\nEle caiu.\nPela primeira vez…\nEle não estava no controle.\nO Momento de Realidade\nNo chão, Denotas respirava fundo.\nNão era dor.\nEra algo pior.\nConsciência.\n“Meu corpo… não acompanha minha mente.”\nO homem não atacou de novo.\nApenas observou.\n— Você viu, não viu?\nSilêncio.\n— Você é perigoso… mas incompleto.\nA Lição\nO homem se afastou.\n— O mundo não é feito só de jogos mentais.\n— Às vezes… você precisa agir.\n— E quando esse momento chegar…\nEle olhou diretamente para Denotas.\n— Você vai morrer.\nO Desaparecimento\nO homem virou as costas.\nE foi embora.\nSem nome.\nSem explicação.\nSem identidade.\nMas deixou algo muito maior.\nUm problema.\nA Reflexão Mais Importante Até Agora\nDenotas ficou em silêncio.\nPensando.\nRelembrando cada movimento.\nCada erro.\nCada fraqueza.\n“Eu consigo prever…”\n“Mas não consigo reagir.”\n“Eu consigo planejar…”\n“Mas não consigo executar sob pressão.”\nEle fechou os olhos.\nE pela primeira vez…\nSentiu algo diferente de confiança.\nLimitação.\nA Decisão\nQuando abriu os olhos…\nEle já havia decidido.\n“Conhecimento não é suficiente.”\n“Eu preciso de corpo.”\n“Preciso de técnica.”\n“Preciso de controle.”\nE então…\nEle olhou para suas próprias mãos.\n“Se um dia eu usar aquela fruta…”\n“Eu não posso depender dela.”\n“Porque se eu depender…”\n“Eu já perdi.”\nO Primeiro Passo Real\nNaquela noite…\nDenotas não voltou para a biblioteca.\nEle foi para outro lugar.\nUm lugar que ele ignorava até então.\nUm pequeno espaço aberto.\nOnde homens treinavam.\nLutavam.\nErravam.\nAprendiam.\nEle observou.\nSilencioso.\nComo sempre.\nMas dessa vez…\nNão estava ali apenas para entender.\nEstava ali para começar.\nCena Final — O Novo Caminho\nEnquanto observava os movimentos, os golpes, os erros…\nEle percebeu algo que nenhum livro ensinava completamente.\n“O corpo também tem padrões…”\n“Mas esses… precisam ser construídos.”\nO vento soprou.\nA cidade continuava viva.\nO jogo continuava.\nMas agora…\nDenotas não era apenas um jogador de mente.\nEle estava começando a se tornar…\nAlgo mais completo.\n“Se o mundo é um tabuleiro…”\n“Então eu vou dominar… todas as peças.”\nE em algum lugar distante…\nAlguém observava novamente.\nO antagonista oculto.\n“Finalmente…”\n“Ele entendeu.”\n\n"
  },
  {
    "id": "cap-8",
    "slug": "capitulo-8",
    "tipo": "capitulo",
    "titulo": "Capítulo 8 — A Ciência de Não Perder",
    "subtitulo": "Contingências, planos de fuga e a lógica das probabilidades",
    "numero": 8,
    "ordem": 11,
    "duracaoEstimada": "7 min",
    "resumo": "A arte de antecipar reações. Como Denotas constrói suas teias onde a vitória é assegurada antes mesmo do primeiro movimento.",
    "conteudoTexto": "📖 CAPÍTULO 8 — A Ciência de Não Perder\nA dor ainda estava lá.\nNão no corpo.\nMas na memória.\nO impacto.\nO chão.\nA falha.\nDenotas não esquecia.\nEle não podia esquecer.\nA Primeira Verdade Brutal\nNaquela noite, ele não foi direto treinar.\nEle parou.\nPensou.\nReviu tudo.\nCada detalhe do confronto.\nCada milésimo de segundo.\n“Eu perdi… antes do golpe.”\nEle percebeu algo essencial.\nNão foi o corpo que falhou primeiro.\nFoi o tempo.\nReação.\nDecisão.\nExecução.\n“Não é só força…”\n“É velocidade de decisão.”\nO Erro que Ele Nunca Mais Cometeria\nDenotas sentou-se sozinho, desenhando padrões no chão com o dedo.\nCriando cenários.\nSimulando situações.\n“E se ele atacasse pela direita?”\n“E se fosse uma finta?”\n“E se houvesse dois?”\n“E se eu estivesse cercado?”\nEle não queria vencer.\nEle queria algo maior.\n“Eu nunca mais quero estar em uma situação onde perder seja possível.”\nE isso mudou tudo.\nO Novo Tipo de Treino\nNa manhã seguinte…\nEle foi até o campo de treino.\nMas não entrou.\nNão ainda.\nPrimeiro…\nEle observou.\nAnálise de Combate\nOs homens treinavam.\nGolpes diretos.\nMovimentos previsíveis.\nForça bruta.\nDenotas não ficou impressionado.\n“Eles treinam para lutar…”\n“Mas não treinam para pensar.”\nEle começou a identificar padrões:\nGolpes repetidos\nRitmos previsíveis\nFalta de adaptação\n“Se eu entrar assim…”\n“Eu vou virar mais um.”\nE ele recusava isso.\nA Estratégia do Corpo\nEntão ele fez algo diferente.\nAlgo que ninguém ali fazia.\nEle começou pelo básico absoluto.\nControle de Movimento\nAntes de lutar…\nEle treinou ficar parado.\nSim.\nParado.\nEquilíbrio.\nPostura.\nRespiração.\nPorque ele percebeu:\n“Se eu não controlo meu corpo parado…”\n“Nunca vou controlar em movimento.”\nReação Antes da Ação\nDepois…\nEle treinou reação.\nNão ataque.\nReação.\nEle pedia para outros tentarem tocá-lo.\nApenas tocar.\nE ele desviava.\nFalhava.\nMuito.\nMas aprendia.\n“Não preciso acertar primeiro…”\n“Preciso não ser atingido.”\nEconomia de Movimento\nEnquanto os outros gastavam energia…\nEle economizava.\nMovimentos mínimos.\nPrecisos.\n“Quanto menos eu me movo…”\n“Mais rápido eu respondo.”\nA Primeira Queda Real\nDias depois…\nEle decidiu lutar.\nDe verdade.\nUm oponente maior.\nMais forte.\nMais rápido.\nResultado?\nEle perdeu.\nDe novo.\nMas dessa vez…\nFoi diferente.\nEle não caiu imediatamente.\nEle reagiu.\nDesviou.\nErrou menos.\nE quando caiu…\nSorriu.\n“Eu durei mais.”\nA Evolução Invisível\nNinguém percebeu.\nMas Denotas sim.\nEle viu o golpe antes de acontecer\nEle reagiu mais rápido\nEle controlou melhor o corpo\nPequeno avanço.\nMas real.\nA Introdução da Lâmina\nAlguns dias depois…\nEle começou algo novo.\nEspadas.\nNão para atacar.\nMas para entender alcance.\nDistância.\nTempo.\nEle segurou uma lâmina pela primeira vez.\nSentiu o peso.\nO equilíbrio.\nA extensão do corpo.\n“Isso… muda tudo.”\nA espada não era só arma.\nEra cálculo.\nPensamento Tático Aplicado\nAgora ele treinava assim:\nSem arma → foco em reação\nCom arma → foco em distância\nContra múltiplos → foco em posicionamento\nTudo tinha um objetivo.\nNada era aleatório.\nA Verdade Mais Importante\nDepois de semanas…\nEle chegou a uma conclusão.\n“Não existe vitória garantida.”\nMas existe algo próximo disso.\n“Preparação extrema.”\nO Encontro Novamente\nCerta noite…\nEle sentiu.\nO mesmo olhar.\nO mesmo homem.\nO rival.\n— Vejo que você não desistiu… disse o homem.\nDenotas ficou em silêncio.\nMas dessa vez…\nSua postura era diferente.\nMais firme.\nMais estável.\nMais presente.\n— Você ainda perderia… disse o homem.\nPausa.\n— Mas não tão rápido.\nDenotas respondeu pela primeira vez:\n— E você?\n— Já perdeu?\nSilêncio.\nUm leve sorriso.\n— Muitas vezes.\n— É por isso que ainda estou vivo.\nO Verdadeiro Início\nO homem começou a se afastar.\nMas antes de desaparecer…\nDisse:\n— Continue assim…\n— E talvez… você sobreviva ao próximo nível.\nCena Final — A Promessa\nDenotas olhou para suas mãos novamente.\nMas dessa vez…\nNão viu fraqueza.\nViu potencial.\n“Eu não preciso ser o mais forte…”\n“Eu preciso ser o mais preparado.”\nEle ergueu o olhar.\nDeterminado.\n“E da próxima vez…”\n“Eu não vou cair.”\nO vento soprou.\nE com ele…\nVeio algo novo.\nNão era talento.\nNão era dom.\nEra construção.\n\n"
  },
  {
    "id": "cap-9",
    "slug": "capitulo-9",
    "tipo": "capitulo",
    "titulo": "Capítulo 9 — Ecos de um Passado Que Não Morreu",
    "subtitulo": "A sombra da Marinha e os segredos de Del Láguas",
    "numero": 9,
    "ordem": 12,
    "duracaoEstimada": "8 min",
    "resumo": "A chegada de oficiais de alto escalão e a descoberta de que Del Láguas guarda segredos que atraem a atenção do Governo Mundial.",
    "conteudoTexto": "📖 CAPÍTULO 9 — Ecos de um Passado Que Não Morreu\nO Sonho\nO mar estava calmo.\nSilencioso.\nBonito.\nEra… impossível.\nDenotas sabia disso.\nMesmo assim, ele estava lá.\nUma pequena casa de madeira.\nSimples.\nInteira.\nViva.\nEle abriu a porta.\nE viu.\nSeu pai… sorrindo.\nSua mãe… preparando comida.\nSua irmã… rindo.\nTudo… completo.\nTudo… errado.\n— Você demorou… disse sua mãe, com uma voz suave.\nDenotas não respondeu.\nEle apenas olhou.\nAbsorvendo.\nSentindo algo que não sentia há muito tempo.\nCalor.\nSeu pai se aproximou.\nColocou a mão em seu ombro.\n— O mar hoje está tranquilo… disse ele.\nSilêncio.\nDenotas fechou os olhos lentamente.\n“Não… está.”\nA Ruptura\nO som veio primeiro.\nDistante.\nPesado.\nFamiliar.\nO mar rugiu.\nO céu escureceu.\nO vento cortou.\nE então…\nAs ondas.\nGigantes.\nViolentas.\nImpossíveis de ignorar.\nSua mãe gritou.\nSua irmã caiu.\nSeu pai virou-se…\nE desapareceu.\nEngolido.\nSem chance.\nSem luta.\nDenotas tentou correr.\nMas o chão… desapareceu.\nFragmentos da Verdade\nCenas começaram a quebrar.\nMisturar.\nDistorcer.\nCorrentes.\nHomens.\nMercadores.\nSua mãe sendo levada.\nGritando.\nLutando.\n“Mar sombrio…”\nOutro corte.\nSangue.\nRiso.\nNobres.\nCrueldade.\nSua irmã…\nSilêncio.\nDenotas não viu o fim.\nMas sabia.\nO Despertar\nEle acordou.\nRespiração pesada.\nOlhos abertos.\nCalmo.\nSem lágrimas.\nApenas… silêncio.\n“Sonhos não mentem…”\n“Eles só mostram… o que ainda está vivo.”\nO Passado Não é Fraqueza\nDenotas sentou-se.\nPensando.\nNão no que perdeu.\nMas no que restou.\n“Eu sobrevivi.”\nE isso… não era acaso.\nO Homem Que Acendeu a Mente\nEntre memórias… havia algo diferente.\nAlgo que não doía.\nUm homem.\nSem nome.\nSem rosto claro.\nMas presente.\n— Você quer continuar sendo controlado… ou quer entender o jogo?\nFoi isso que mudou tudo.\nEle não ensinou força.\nNão ensinou luta.\nEle ensinou algo mais perigoso.\nComo pensar.\nComo observar.\nComo não ser previsível.\n“A inteligência… é uma chave.”\n“Mas portas não se abrem sozinhas.”\nE Denotas abriu.\nUma por uma.\nO Presente — Movimento\nDenotas levantou.\nO dia já começava.\nHoje… não era dia de pensar.\nEra dia de agir.\nTreino em Movimento Real\nDiferente dos dias anteriores…\nEle saiu da zona segura.\nFoi para ruas mais perigosas.\nMais instáveis.\nMais reais.\n“Treinar no conforto… cria ilusões.”\nEle precisava de risco.\nPrimeira Situação Real\nUm grupo.\nTrês homens.\nBrutos.\nDesorganizados.\nMas perigosos.\nEles cercavam alguém.\nDenotas parou.\nObservou.\nRespiração.\nDistância.\nÂngulos.\n“Três… sem coordenação.”\nEle entrou.\nA Luta\nO primeiro veio direto.\nSem estratégia.\nDenotas desviou.\nSimples.\nE respondeu.\nUm golpe rápido.\nPreciso.\nO segundo hesitou.\nErro.\nDenotas se moveu.\nReposicionou.\nCriou espaço.\nO terceiro tentou surpreender.\nMas…\nDenotas já esperava.\nEle caiu.\nSilêncio.\nA Primeira Vitória Real\nNão foi perfeita.\nNão foi limpa.\nMas foi… suficiente.\nDenotas ficou parado.\nRespirando.\n“Funcionou…”\nMente + corpo.\nFinalmente… juntos.\nO Observador\n— Então… você mudou.\nDenotas virou.\nE viu.\nUm rosto do passado.\nUm amigo.\nAlguém que o conhecia… antes de tudo isso.\n— Achei que você tinha morrido… disse o amigo.\nDenotas respondeu calmamente:\n— Quase.\nO Reconhecimento\nO amigo observou o cenário.\nOs homens caídos.\nA postura de Denotas.\n— Você está diferente.\nPausa.\n— E em problemas.\nDenotas não negou.\nEcos de Lealdade\nO amigo cruzou os braços.\n— Eu te conheço…\n— E você não entra em briga sem motivo.\nOlhou mais fundo.\n— Então… isso é maior do que parece.\nSilêncio.\nDenotas respondeu:\n— Sempre foi.\nA Decisão do Amigo\nO amigo suspirou.\n— Você continua o mesmo idiota.\nPausa.\n— Mas… não vou deixar você morrer sozinho.\nDenotas não reagiu.\nMas ouviu.\nA Mudança Real\nEnquanto caminhavam…\nDenotas percebeu algo novo.\nEle não estava mais sozinho.\nE isso…\nMudava o jogo.\nCena Final — O Começo da Tensão\nO porto.\nMovimento intenso.\nMercadores.\nNavios.\nSussurros.\nDenotas parou.\nObservou.\nAlgo ali…\nImportante.\nMuito importante.\n“É aqui…”\nO início de algo maior.\nMuito maior que ele.\nMuito maior que a cidade.\nO amigo olhou para ele.\n— O que você está planejando?\nSilêncio.\nDenotas respondeu:\n“Algo que vai mudar tudo.”\nO vento soprou.\nE trouxe consigo…\nO cheiro do mar.\nDo perigo.\nDo destino.\nE pela primeira vez…\nO jogo deixou de ser pequeno.\n"
  },
  {
    "id": "cap-10",
    "slug": "capitulo-10",
    "tipo": "capitulo",
    "titulo": "Capítulo 10 — Quando Um Homem Decide Enfrentar o Mundo",
    "subtitulo": "O Grande Salto e a partida para os mares abertos",
    "numero": 10,
    "ordem": 13,
    "duracaoEstimada": "8 min",
    "resumo": "A decisão final. Denotas deixa Del Láguas rumo ao desconhecido, jurando que nem o mundo inteiro impedirá um homem livre.",
    "conteudoTexto": "📖 CAPÍTULO 10 — Quando Um Homem Decide Enfrentar o Mundo\nO porto não dormia.\nNunca.\nEra um organismo vivo.\nBarulhento.\nCaótico.\nPerigoso.\nE… perfeito.\nO Olhar de Quem Já Não É Amador\nDenotas caminhava entre mercadores, marinheiros e ladrões com a mesma calma de sempre.\nMas havia algo diferente.\nEle não estava mais apenas observando.\nEle estava… caçando informações.\nAo seu lado, o amigo acompanhava em silêncio.\nAtento.\nDesconfiado.\n— Você vai me explicar o que estamos fazendo aqui…? perguntou ele.\nDenotas respondeu sem olhar:\n— Estamos procurando algo que ainda não sabemos onde está.\nO amigo franziu a testa.\n— Isso não ajuda em nada.\n— Ajuda… disse Denotas.\nPausa.\n— Porque quem não sabe o que procura… aceita qualquer coisa.\n— E eu não aceito.\nPrimeiro Contato — O Teste\nDenotas parou diante de um mercador.\nVelho.\nExperiente.\nOlhos de quem já viu demais.\n— Você vende informação? perguntou Denotas.\nO homem sorriu.\n— Depende… você pode pagar?\nSilêncio.\nDenotas respondeu:\n— Informação errada custa mais caro.\nO sorriso do mercador mudou.\n— O que você quer?\nA Primeira Pista\nDenotas falou baixo.\n— Mercadorias raras.\n— Itens que não podem ser exibidos.\n— Coisas… que não deveriam estar aqui.\nO mercador ficou em silêncio por alguns segundos.\nDepois respondeu:\n— Tem um carregamento chegando.\n— Protegido.\n— Não listado oficialmente.\nO amigo olhou para Denotas.\nAgora… entendendo.\n— De onde?\n— Do norte… disse o mercador.\nPausa.\n— Mar sombrio.\nO mundo pareceu parar por um instante.\nMas Denotas não reagiu.\nExternamente.\nInternamente…\nalgo queimou.\nConfirmação do Alvo\n— Quando? perguntou Denotas.\n— Em breve.\n— Vai passar pelo porto…\n— E seguir para um lugar onde ninguém comum entra.\nPausa.\n— O palácio.\nSilêncio.\nO amigo soltou um leve riso incrédulo.\n— Você não está pensando nisso…\nDenotas virou-se lentamente.\n— Eu estou.\nA Construção do Plano\nNaquela noite…\nEles não dormiram.\nSentados em um lugar alto, observando o porto, Denotas começou.\nNão com ação.\nMas com estrutura.\n“Um plano não é sobre o que fazer…”\n“É sobre prever tudo que pode dar errado.”\nEle começou a dividir:\n1 — Transporte\nOrigem: Mar sombrio\nTipo: carga não oficial\nSegurança: elevada\nRota: porto → palácio\n2 — Ponto de Intervenção\n— O porto é caótico demais… disse o amigo.\nDenotas respondeu:\n— Exato.\n— Caos gera variáveis.\n— Variáveis geram falha.\nPausa.\n— Eu vou agir… no lugar mais controlado.\nO amigo arregalou os olhos.\n— O palácio?!\n— Sim.\nSilêncio… e Medo\nO vento soprou.\n— Isso não é roubo… disse o amigo.\n— Isso é suicídio.\nDenotas respondeu calmamente:\n— Não.\n— Suicídio é não ter plano.\n3 — Entrada\n— Segurança máxima.\n— Rotas limitadas.\n— Vigilância constante.\nDenotas desenhou no chão.\nLinhas.\nCaminhos.\nPadrões.\n— Todo sistema perfeito tem uma falha.\n— E você encontrou? perguntou o amigo.\nSilêncio.\n— Ainda não.\n4 — Saída\n— Você não vai sair de lá… disse o amigo.\nDenotas olhou para o mar.\n— Eu não preciso sair pelo mesmo caminho.\nO Navio\nNo dia seguinte…\nEles encontraram.\nUm navio.\nDiscreto.\nRápido.\nPouco chamativo.\nO tipo perfeito para desaparecer.\nDenotas observou.\n— Esse.\n— Você já tem fuga planejada… disse o amigo.\n— Sempre.\nA Verdade que Muda Tudo\nO amigo ficou em silêncio por um longo tempo.\nDepois perguntou:\n— O que tem nessa carga?\nDenotas respondeu:\n— Algo que pode mudar o jogo.\nPausa.\n— Ou destruir quem tentar usar.\nA Decisão do Amigo\nO amigo respirou fundo.\n— Então é isso…\nOlhou para Denotas.\n— Você vai fazer isso mesmo.\n— Vou.\nSilêncio.\n— Então eu vou junto.\nDenotas não respondeu imediatamente.\nMas depois…\n— Não.\nO Lema\nO amigo franziu a testa.\n— O quê?\nDenotas virou-se.\nOlhou diretamente para ele.\nE disse:\n“Um homem que vale 100 homens.”\nSilêncio.\nPesado.\n— Esse é o meu lema.\nO amigo apertou os dentes.\n— E o novo lema?\nDenotas respondeu:\n— Ainda não chegou.\nA Separação\nDenotas deu alguns passos.\nParou.\nSem olhar para trás, disse:\n“Meu irmão…”\nPausa.\n“Deixe-me carregar a cruz.”\nO vento soprou forte.\n“E ir cometer suicídio.”\nSilêncio absoluto.\n“Quando um louco bater à porta…”\nAgora ele virou o rosto levemente.\n“Fuja.”\nPausa.\n“Porque será a hora da fuga.”\nO Peso da Escolha\nO amigo não respondeu.\nMas ficou.\nObservando.\nEntendendo.\nQue aquilo não era coragem.\nEra decisão.\nCena Final — A Promessa\nDenotas caminhava sozinho.\nA cidade parecia menor agora.\nO mundo…\nmaior.\nEle olhou para o horizonte.\nPara o mar.\nPara o desconhecido.\nE disse, em voz baixa:\n“Se o mundo inteiro protege esse tesouro…”\nSeus olhos ficaram frios.\nDeterminados.\n“Então eu vou provar…”\nPausa.\n“Que nem o mundo inteiro… pode impedir um homem livre.”\nO vento rugiu.\nO mar respondeu.\nE naquele momento…\nNascia algo que não poderia mais ser parado.\n"
  }
];

export const personagensVolume1 = [
  {
    id: "p1",
    nome: "Denotas / Alphonse del Cart D.",
    slug: "denotas",
    aliases: ["El Denotas", "O Vigarista de Del Láguas", "Alphonse del Cart D."],
    titulo: "O Homem que Enganou o Mundo",
    descricao: "Jovem prodígio, observador e calculista que cresceu nas ruas de Del Láguas. Começou como um garoto de bolso no cais e aprendeu que a percepção humana é a chave de todo o poder.",
    descricaoSpoilers: "Descobre que a narrativa oficial do mundo foi adulterada após a era de Roger e Luffy, e decide trilhar um caminho onde a inteligência supera a força bruta.",
    personalidade: "Frio, perspicaz, paciente, com forte intuição tática. Age sempre antecipando os movimentos dos adversários.",
    aparencia: "Jovem de olhar atento e postura discreta, capaz de se mesclar à multidão sem chamar atenção.",
    poderes: ["Percepção Tática e Leitura de Movimentos", "Fundamentos de Ki"],
    armas: ["Adaga de rua", "Disfarces e Artifícios"],
    faccao: "Independente / Ruas de Del Láguas",
    status: "ativo",
    ameaca: 4,
    primeiraAparicao: "Sinopse / Prólogo / Capítulo 1",
    frases: [
      "Um homem que vale 100 homens.",
      "A verdade é aquilo que as pessoas acreditam ser verdade.",
      "Se o mundo inteiro protege esse tesouro... então nem o mundo inteiro pode impedir um homem livre."
    ],
    versaoOficial: "Pequeno larápio de rua e vigarista das docas de Del Láguas.",
    versaoSuspeita: "O estrategista que orquestrou o sumiço do tesouro real de Valdoria diante de guardas de elite."
  },
  {
    id: "p2",
    nome: "Velho Garvin",
    slug: "velho-garvin",
    aliases: ["O Guardião da Memória", "O Velho do Cais"],
    titulo: "Veterano Informante de Del Láguas",
    descricao: "Um idoso com histórico nas antigas rotas que frequenta os cantos escuros de Del Láguas. Conhece fragmentos da história que foram apagados dos registros oficiais.",
    descricaoSpoilers: "Foi quem abriu os olhos de Denotas para o que aconteceu após a quebra do mundo e a ascensão da Era da Loucura.",
    personalidade: "Cético, melancólico, paciente com quem demonstra verdadeira curiosidade histórica.",
    aparencia: "Idoso encurvado, olhos penetrantes, mãos calejadas por décadas no mar.",
    poderes: ["Memória Histórica Pré-Quebra"],
    armas: ["Cajado de madeira"],
    faccao: "Neutro / Antiga Guarda",
    status: "ativo",
    ameaca: 2,
    primeiraAparicao: "Volume 1, Capítulo 3",
    frases: [
      "O mundo antes da Quebra era controlado... não por reis comuns.",
      "Luffy quebrou o mundo... e o que veio depois foi a Era da Loucura."
    ],
    versaoOficial: "Apenas um velho contador de causos aposentado.",
    versaoSuspeita: "Sobrevivente de expedições proibidas que guarda registros anteriores à censura governamental."
  },
  {
    id: "p3",
    nome: "Francis del Láguas Negras",
    slug: "francis-del-laguas-negras",
    aliases: ["O Comandante da Guarda", "Francis"],
    titulo: "Autoridade Local de Del Láguas",
    descricao: "Figura de autoridade encarregada de manter a ordem e os interesses da nobreza no Mar da Coroa.",
    descricaoSpoilers: "Mantém controle férreo sobre a circulação de livros e registros históricos na biblioteca municipal.",
    personalidade: "Rígido, intolerante a desordem, orgulhoso de sua linhagem e cargo.",
    aparencia: "Porte marcial, vestimenta oficial impecável, expressão severa.",
    poderes: ["Autoridade militar", "Esgrima militar"],
    armas: ["Sabre de oficial"],
    faccao: "Governo Local / Forças de Segurança",
    status: "ativo",
    ameaca: 3,
    primeiraAparicao: "Volume 1, Capítulo 1",
    frases: [
      "A ordem em Del Láguas é inegociável."
    ],
    versaoOficial: "Comandante zeloso pela segurança pública e comércio marítimo.",
    versaoSuspeita: "Executa a censura seletiva para impedir que o povo descubra os segredos do Mar Antigo."
  }
];

export const locaisVolume1 = [
  {
    id: "loc1",
    nome: "Del Láguas Cristalinas do Sul",
    slug: "del-laguas",
    descricao: "Cidade interiorana do Mar da Coroa cortada por canais de água cristalina como veias brilhantes. Rica demais para ser pobre, pobre demais para ser justa. Berço das primeiras jogadas de Denotas.",
    clima: "Marítimo costeiro, manhãs ensolaradas e noites enevoadas nas docas.",
    habitantes: ["Nobres mercadores", "Pescadores", "Ladrões de bolso", "Guardas municipais"],
    faccoes: ["Consórcio Comercial", "Guarda de Del Láguas", "Submundo do Cais"],
    perigos: ["Guardas corruptos", "Cais traiçoeiro", "Censura de informações"],
    personagens: ["Denotas", "Velho Garvin", "Francis del Láguas Negras"],
    nivelMisterio: 3,
    versaoOficial: "Próspero porto mercantil do Mar da Coroa.",
    versaoSuspeita: "Ponto de passagem de mercadorias não catalogadas e biblioteca com seções clandestinamente raspadas."
  },
  {
    id: "loc2",
    nome: "Biblioteca de Del Láguas",
    slug: "biblioteca-del-laguas",
    descricao: "Edifício antigo de pedra com corredores escuros e estantes maciças. Guarda compêndios oficiais e gavetas seladas contendo mapas e registros expurgados.",
    clima: "Ambiente fechado, cheiro de pergaminho antigo e cera de vela.",
    habitantes: ["Bibliotecário de turno", "Estudiosos autorizados"],
    faccoes: ["Administração Cultural da Coroa"],
    perigos: ["Vigilância armada", "Prisão por posse de literatura proibida"],
    personagens: ["Denotas", "Bibliotecário"],
    nivelMisterio: 4,
    versaoOficial: "Arquivo cívico e histórico autorizado pela Coroa.",
    versaoSuspeita: "Local onde páginas cruciais sobre o Século Perdido e a Era de Roger foram deliberadamente arrancadas."
  },
  {
    id: "loc3",
    nome: "Reino de Valdoria",
    slug: "reino-de-valdoria",
    descricao: "Cenário de festivais grandiosos e riqueza ostensiva. Foi onde três baús vigiados serviram de palco para o golpe inaugural de El Denotas.",
    clima: "Festeiro, noites iluminadas por fogos de artifício e praças lotadas.",
    habitantes: ["Cidadãos festivos", "Nobreza do reino", "Guarda de elite"],
    faccoes: ["Coroa de Valdoria"],
    perigos: ["Forças de segurança em alerta máximo"],
    personagens: ["Denotas"],
    nivelMisterio: 2,
    versaoOficial: "Reino seguro com celebrações impecáveis.",
    versaoSuspeita: "Vítima do maior blefe da década, onde o ouro sumiu sem vestígios."
  },
  {
    id: "loc4",
    nome: "Broken Line",
    slug: "broken-line",
    descricao: "As traiçoeiras rotas marítimas onde a navegação comum se perde. O horizonte para onde Denotas aponta seu olhar no desfecho do Volume 1.",
    clima: "Correntes imprevisíveis e tempestades súbitas.",
    habitantes: ["Navegadores ousados", "Foras da lei"],
    faccoes: ["Navegantes Livres"],
    perigos: ["Recifes ocultos", "Rotas corrompidas"],
    personagens: ["Denotas"],
    nivelMisterio: 5,
    versaoOficial: "Área de navegação de alto risco desaconselhada.",
    versaoSuspeita: "A rota que conduz aos segredos que os governos tentaram sepultar."
  }
];

export const pistasVolume1 = [
  {
    id: "pis1",
    titulo: "Páginas Raspadas e Arrancadas",
    descricao: "Na biblioteca de Del Láguas, certos livros históricos têm folhas arrancadas deliberadamente perto de referências a figuras antigas e ao Século Perdido.",
    capituloSlug: "capitulo-3",
    status: "confirmada",
    spoilerLevel: 1,
    tags: ["Biblioteca", "Censura", "Século Perdido", "Governo"],
    personagens: ["Denotas", "Garvin"]
  },
  {
    id: "pis2",
    titulo: "A Quebra do Mundo e a Era da Loucura",
    descricao: "Luffy libertou o mundo ao alcançar o One Piece, mas em vez de paz universal, sua vitória desestabilizou todo o equilíbrio e abriu a Era da Loucura.",
    capituloSlug: "capitulo-4",
    status: "confirmada",
    spoilerLevel: 1,
    tags: ["Luffy", "One Piece", "Quebra", "Era da Loucura"],
    personagens: ["Garvin", "Denotas"]
  },
  {
    id: "pis3",
    titulo: "A Gaveta Falsa do Armário de Latão",
    descricao: "Às 3h da manhã, Denotas encontra um fundo falso na escrivaninha da biblioteca com pergaminhos sobre rotas da Broken Line nunca exibidas nos mapas da Coroa.",
    capituloSlug: "capitulo-5",
    status: "confirmada",
    spoilerLevel: 1,
    tags: ["Segredo", "Broken Line", "Mapas"],
    personagens: ["Denotas"]
  },
  {
    id: "pis4",
    titulo: "O Enigma do Valor de Cem Homens",
    descricao: "O lema inicial de Denotas era valer por 100 homens solitários; ao final do Volume 1, ele descobre que dominar a percepção do mundo vale mais do que qualquer exército.",
    capituloSlug: "capitulo-10",
    status: "confirmada",
    spoilerLevel: 1,
    tags: ["Filosofia", "Denotas", "Percepção"],
    personagens: ["Denotas"]
  }
];

export const frasesVolume1 = [
  {
    id: "fr1",
    texto: "Um homem que vale 100 homens.",
    personagem: "Denotas",
    secao: "Sinopse Oficial"
  },
  {
    id: "fr2",
    texto: "O que move o mundo é a percepção. Aquilo que as pessoas acreditam ser verdade passa a ser mais real do que qualquer fato.",
    personagem: "Arquivo 0",
    secao: "Arquivo 0: Como o Mundo Funciona"
  },
  {
    id: "fr3",
    texto: "Se tudo isso fizer sentido para você… então você já foi enganado.",
    personagem: "Arquivo 0",
    secao: "Arquivo 0: Como o Mundo Funciona"
  },
  {
    id: "fr4",
    texto: "O mundo não é feito para homens solitários. Um é bom… mas mais é melhor.",
    personagem: "Denotas",
    secao: "Sinopse Oficial"
  },
  {
    id: "fr5",
    texto: "O mundo inteiro está mentindo.",
    personagem: "Denotas",
    secao: "Capítulo 3 — A Lenda do Primeiro Rei"
  },
  {
    id: "fr6",
    texto: "Antes de tudo mudar, o mundo era controlado... não por reis comuns.",
    personagem: "Velho Garvin",
    secao: "Capítulo 4 — O Homem que Libertou o Sol"
  },
  {
    id: "fr7",
    texto: "Eu vou fazer o mundo inteiro rir.",
    personagem: "Ecos do Passado",
    secao: "Capítulo 4 — O Homem que Libertou o Sol"
  },
  {
    id: "fr8",
    texto: "Se o mundo inteiro protege esse tesouro… então eu vou provar que nem o mundo inteiro pode impedir um homem livre.",
    personagem: "Denotas",
    secao: "Capítulo 10 — Quando Um Homem Decide Enfrentar o Mundo"
  }
];

export const cronologiaVolume1 = [
  {
    id: "crono-1",
    titulo: "A Era dos Reis e a Quebra do Mundo",
    descricao: "A época em que piratas lendários navegaram e culminou no evento em que Luffy desafiou a ordem estabelecida, iniciando a Era da Loucura.",
    secao: "Capítulo 4",
    spoilerLevel: 1
  },
  {
    id: "crono-2",
    titulo: "Infância nas Ruas de Del Láguas",
    descricao: "Denotas sobrevive como observador e batedor de carteiras no Mar dos Bolsos, descobrindo o valor dos pequenos segredos.",
    secao: "Capítulo 2",
    spoilerLevel: 1
  },
  {
    id: "crono-3",
    titulo: "O Mistério na Biblioteca Municipal",
    descricao: "Denotas descobre textos com páginas arrancadas e conversa com o velho Garvin sobre Joy Boy, Roger e os mares proibidos.",
    secao: "Capítulo 3 e 4",
    spoilerLevel: 1
  },
  {
    id: "crono-4",
    titulo: "A Invasão Noturna às 3 da Manhã",
    descricao: "Busca clandestina por mapas na biblioteca e a descoberta da gaveta secreta com coordenadas do Mar Antigo.",
    secao: "Capítulo 5",
    spoilerLevel: 1
  },
  {
    id: "crono-5",
    titulo: "O Teste no Armazém e o Treino de Ki",
    descricao: "Denotas aplica suas lições de psicologia no submundo do cais e inicia seu condicionamento físico e mental rigoroso.",
    secao: "Capítulo 6 e 7",
    spoilerLevel: 1
  },
  {
    id: "crono-6",
    titulo: "O Roubo Triplo de Valdoria",
    descricao: "Diante do festival noturno, Denotas engana guardas de elite e subtrai o tesouro real, consagrando a persona de El Denotas.",
    secao: "Capítulo 1",
    spoilerLevel: 1
  },
  {
    id: "crono-7",
    titulo: "A Decisão do Homem Livre",
    descricao: "Denotas deixa Del Láguas rumo às correntes da Broken Line, dando início à sua lenda pelos oceanos.",
    secao: "Capítulo 10",
    spoilerLevel: 1
  }
];
