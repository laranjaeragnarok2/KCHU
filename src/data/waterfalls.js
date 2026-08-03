export const WATERFALLS_DATA = [
  {
    id: "santa-barbara",
    name: "Cachoeira Santa Bárbara",
    locationName: "Cavalcante, Chapada dos Veadeiros - GO",
    lat: -13.5936,
    lng: -47.4578,
    rating: 4.9,
    reviewsCount: 342,
    difficulty: "Fácil",
    difficultyLevel: 1, // 1: Fácil, 2: Médio, 3: Difícil
    trailDistance: "1.8 km (Ida e Volta)",
    trailTime: "40 min",
    elevationGain: "+65m",
    price: "R$ 55 (Entrada + Guia Kalunga)",
    isPaid: true,
    swimSuitability: "Perfeita para Banho",
    canSwim: true,
    sunIncidence: "10:30 às 13:30 (Água incrivelmente azul)",
    height: "28m",
    depth: "3m (Água cristalina)",
    guideRequired: true,
    petFriendly: false,
    childFriendly: true,
    
    // Wikiloc & Rota
    wikilocUrl: "https://pt.wikiloc.com/trilhas-caminhada/cachoeira-santa-barbara-cavalcante-go-24810293",
    wikilocId: "24810293",
    elevationProfile: [
      { km: 0, alt: 940 },
      { km: 0.3, alt: 932 },
      { km: 0.6, alt: 915 },
      { km: 0.9, alt: 890 }, // Cachoeira
    ],

    // Módulo de Segurança & Clima
    safetyStatus: {
      waterVolume: "Normal", // "Normal", "Alto (Alerta)", "Perigoso"
      statusColor: "safe", // "safe", "warning", "danger"
      flashFloodRisk: "Baixo",
      cellSignal: "Sem Sinal na Trilha (Pegar Kalunga na base)",
      lastReport: "Hoje às 09:15 por Guia Mateus"
    },

    image: "https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1000&q=80"
    ],
    description: "Famosa mundialmente pelo poço de tom azul-turquesa radiante. Localizada na Comunidade Quilombola Kalunga do Engenho II. A visibilidade da água é inacreditável no horário de sol pleno.",
    infrastructure: ["Estacionamento na Base", "Lanchonete Quilombola", "Jangada / Transporte local", "Sanitários"]
  },
  {
    id: "casca-d-anta",
    name: "Cachoeira Casca d'Anta",
    locationName: "São Roque de Minas, Serra da Canastra - MG",
    lat: -20.3092,
    lng: -46.5233,
    rating: 4.8,
    reviewsCount: 218,
    difficulty: "Médio",
    difficultyLevel: 2,
    trailDistance: "3.5 km (Parte Baixa + Trilha Alta)",
    trailTime: "1h 30min",
    elevationGain: "+210m",
    price: "R$ 18 (Ingresso Parque)",
    isPaid: true,
    swimSuitability: "Apenas Contemplação no Poço Principal",
    canSwim: false,
    sunIncidence: "09:00 às 15:00",
    height: "186m",
    depth: "Muito Fundo / Correnteza Forte",
    guideRequired: false,
    petFriendly: false,
    childFriendly: true,

    wikilocUrl: "https://pt.wikiloc.com/trilhas-caminhada/trilha-da-casca-danta-parte-baixa-serra-da-canastra-1940129",
    wikilocId: "1940129",
    elevationProfile: [
      { km: 0, alt: 720 },
      { km: 0.5, alt: 735 },
      { km: 1.0, alt: 760 },
      { km: 1.7, alt: 900 }
    ],

    safetyStatus: {
      waterVolume: "Alto (Volume Forte)",
      statusColor: "warning",
      flashFloodRisk: "Moderado (Cabeceira no Chapadão)",
      cellSignal: "Apenas Vivo perto da portaria",
      lastReport: "Ontem às 16:30 por Parque Nacional"
    },

    image: "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80"
    ],
    description: "A primeira grande queda do Rio São Francisco. Uma parede imponente de 186 metros de altura com o spray da água atingindo centenas de metros na mata ciliar.",
    infrastructure: ["Portaria ICMBio", "Estacionamento Gratuito", "Área de Picnic", "Banheiros"]
  },
  {
    id: "cachoeira-do-gato",
    name: "Cachoeira do Gato",
    locationName: "Ilhabela - SP",
    lat: -23.7915,
    lng: -45.2753,
    rating: 4.7,
    reviewsCount: 189,
    difficulty: "Médio",
    difficultyLevel: 2,
    trailDistance: "4.0 km (A partir de Castelhanos)",
    trailTime: "1h 15min",
    elevationGain: "+140m",
    price: "Gratuito",
    isPaid: false,
    swimSuitability: "Excelente Poço Principal",
    canSwim: true,
    sunIncidence: "11:00 às 14:00",
    height: "40m",
    depth: "2.5m",
    guideRequired: false,
    petFriendly: true,
    childFriendly: false,

    wikilocUrl: "https://pt.wikiloc.com/trilhas-caminhada/praia-dos-castelhanos-cachoeira-do-gato-ilhabela-1284910",
    wikilocId: "1284910",
    elevationProfile: [
      { km: 0, alt: 5 },
      { km: 0.8, alt: 45 },
      { km: 1.5, alt: 95 },
      { km: 2.0, alt: 110 }
    ],

    safetyStatus: {
      waterVolume: "Normal",
      statusColor: "safe",
      flashFloodRisk: "Baixo",
      cellSignal: "Sem Sinal de nenhuma operadora",
      lastReport: "Hoje às 08:00 por Monitor Ambiental"
    },

    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1000&q=80"
    ],
    description: "Uma das cachoeiras mais volumosas de Ilhabela, escondida no coração da Mata Atlântica após a famosa Praia dos Castelhanos. Queda d'água cristalina e refrescante.",
    infrastructure: ["Ponte suspensa", "Duchas naturais", "Quiosque na Praia dos Castelhanos"]
  },
  {
    id: "fumaca",
    name: "Cachoeira da Fumaça",
    locationName: "Palmeiras, Chapada Diamantina - BA",
    lat: -12.6019,
    lng: -41.4533,
    rating: 4.9,
    reviewsCount: 412,
    difficulty: "Difícil",
    difficultyLevel: 3,
    trailDistance: "12 km (Subida Íngreme da Serra)",
    trailTime: "4h 30min",
    elevationGain: "+480m",
    price: "Gratuito (Doação voluntária ACVB)",
    isPaid: false,
    swimSuitability: "Apenas Contemplação no Mirante",
    canSwim: false,
    sunIncidence: "Dia Inteiro (Exposta no topo)",
    height: "340m",
    depth: "Sem Poço (A água evapora antes de tocar o chão)",
    guideRequired: false,
    petFriendly: false,
    childFriendly: false,

    wikilocUrl: "https://pt.wikiloc.com/trilhas-caminhada/trilha-da-cachoeira-da-fumaca-por-cima-vale-do-capao-741912",
    wikilocId: "741912",
    elevationProfile: [
      { km: 0, alt: 980 },
      { km: 2.0, alt: 1320 },
      { km: 4.0, alt: 1410 },
      { km: 6.0, alt: 1390 }
    ],

    safetyStatus: {
      waterVolume: "Vento Forte (Cuidado no Abismo)",
      statusColor: "warning",
      flashFloodRisk: "Baixo no Topo",
      cellSignal: "Pega Claro/Tim em alguns pontos da serra",
      lastReport: "Ontem às 17:00 por Associação de Guias do Capão"
    },

    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&w=1000&q=80"
    ],
    description: "Uma das maiores quedas d'água do Brasil (340m). Pelo impressionante vento que sobe o cânion, a água não chega ao chão e borrifa de volta para o céu como fumaça.",
    infrastructure: ["Posto de Controle da Associação", "Água potável na base", "Guias credenciados"]
  },
  {
    id: "saltos-do-rio-preto",
    name: "Saltos do Rio Preto (120m)",
    locationName: "Alto Paraíso de Goiás, Chapada dos Veadeiros - GO",
    lat: -14.1625,
    lng: -47.8028,
    rating: 4.8,
    reviewsCount: 298,
    difficulty: "Médio",
    difficultyLevel: 2,
    trailDistance: "9.0 km (Trilha Vermelha)",
    trailTime: "3h 30min",
    elevationGain: "+180m",
    price: "R$ 40 (Entrada Parque Nacional)",
    isPaid: true,
    swimSuitability: "Excelente no Poço do Salto de 80m",
    canSwim: true,
    sunIncidence: "10:00 às 15:00",
    height: "120m & 80m",
    depth: "4m no poço do Salto 80m",
    guideRequired: false,
    petFriendly: false,
    childFriendly: false,

    wikilocUrl: "https://pt.wikiloc.com/trilhas-caminhada/trilha-dos-saltos-parque-nacional-da-chapada-dos-veadeiros-15829102",
    wikilocId: "15829102",
    elevationProfile: [
      { km: 0, alt: 1020 },
      { km: 2.2, alt: 980 },
      { km: 4.5, alt: 890 }
    ],

    safetyStatus: {
      waterVolume: "Normal",
      statusColor: "safe",
      flashFloodRisk: "Baixo",
      cellSignal: "Sem Sinal no Parque",
      lastReport: "Hoje às 10:00 por Brigada do Parque"
    },

    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1000&q=80"
    ],
    description: "O cartão-postal do Parque Nacional da Chapada dos Veadeiros. Mirante épico com vista para a queda de 120 metros e banho de energia no poço de 80 metros.",
    infrastructure: ["Centro de Visitantes", "Socorristas", "Banheiros", "Pontos de hidratação"]
  }
];
