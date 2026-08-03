export const WATERFALLS_DATA = [
  {
    id: "dragao",
    name: "Cachoeira do Dragão",
    locationName: "Vila de São Jorge, Chapada dos Veadeiros - GO",
    lat: -14.1685,
    lng: -47.8188,
    rating: 4.9,
    reviewsCount: 240,
    difficulty: "Média",
    difficultyLevel: 2,
    trailDistance: "5.2 km",
    trailTime: "2h 15min",
    elevationGain: "+120m",
    price: "R$ 55",
    priceSubtitle: "Entrada + Guia",
    isPaid: true,
    swimSuitability: "Perfeita para Banho",
    waterTemp: "Gelada",
    canSwim: true,
    sunIncidence: "10:30 às 14:00",
    height: "35m",
    depth: "4m (Poço profundo)",
    guideRequired: true,
    petFriendly: false,
    childFriendly: false,
    isFeatured: true, // Destaque da Semana

    wikilocUrl: "https://pt.wikiloc.com/trilhas-caminhada/cachoeira-do-dragao-chapada-dos-veadeiros-15829102",
    wikilocId: "15829102",
    elevationProfile: [
      { km: 0, alt: 980 },
      { km: 1.5, alt: 1040 },
      { km: 3.2, alt: 1100 }
    ],

    safetyStatus: {
      waterVolume: "Normal",
      statusColor: "safe",
      flashFloodRisk: "Baixo",
      cellSignal: "Sem Sinal na Trilha",
      lastReport: "Hoje às 09:00 por Guia Lucas"
    },

    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1511497584788-876761c139d6?auto=format&fit=crop&w=1000&q=80"
    ],
    description: "Uma experiência de travessia e aventura única no cânion do rio. A Cachoeira do Dragão fica escondida entre paredões de rocha avermelhada e possui um poço gigantesco de águas profundas.",
    infrastructure: ["Estacionamento na Base", "Venda de lanches", "Equipamento de segurança fornecido"]
  },
  {
    id: "santa-barbara",
    name: "Cachoeira Santa Bárbara",
    locationName: "Cavalcante, GO",
    lat: -13.5936,
    lng: -47.4578,
    rating: 5.0,
    reviewsCount: 120,
    difficulty: "Fácil",
    difficultyLevel: 1,
    trailDistance: "1.5 km",
    trailTime: "30 min",
    elevationGain: "+45m",
    price: "R$ 55",
    priceSubtitle: "Entrada + Guia Kalunga",
    isPaid: true,
    swimSuitability: "Perfeita para Banho",
    waterTemp: "Gelada",
    canSwim: true,
    sunIncidence: "10:30 às 13:30 (Água incrivelmente azul)",
    height: "28m",
    depth: "3m (Água azul turquesa)",
    guideRequired: true,
    petFriendly: false,
    childFriendly: true,
    isFeatured: false,

    wikilocUrl: "https://pt.wikiloc.com/trilhas-caminhada/cachoeira-santa-barbara-cavalcante-go-24810293",
    wikilocId: "24810293",
    elevationProfile: [
      { km: 0, alt: 940 },
      { km: 0.5, alt: 915 },
      { km: 1.5, alt: 890 }
    ],

    safetyStatus: {
      waterVolume: "Normal",
      statusColor: "safe",
      flashFloodRisk: "Baixo",
      cellSignal: "Sem Sinal na Trilha",
      lastReport: "Hoje às 09:15 por Guia Mateus"
    },

    image: "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1000&q=80"
    ],
    description: "Uma das cachoeiras mais famosas e impressionantes da Chapada dos Veadeiros. Com águas de um azul turquesa inesquecível e uma queda majestosa, a Santa Bárbara oferece um poço perfeito para banho. A trilha é relativamente curta e plana, tornando o acesso fácil para a maioria dos visitantes, embora exija acompanhamento de guia credenciado.",
    infrastructure: ["Estacionamento na Base", "Lanchonete Quilombola", "Jangada / Transporte local", "Sanitários"]
  },
  {
    id: "macacos",
    name: "Cachoeira dos Macacos",
    locationName: "Alto Paraíso de Goiás - GO",
    lat: -14.1333,
    lng: -47.5167,
    rating: 4.7,
    reviewsCount: 95,
    difficulty: "Fácil",
    difficultyLevel: 1,
    trailDistance: "1.8 km",
    trailTime: "45 min",
    elevationGain: "+30m",
    price: "Grátis",
    priceSubtitle: "Sem Guia",
    isPaid: false,
    swimSuitability: "Ótima para Banho",
    waterTemp: "Agradável",
    canSwim: true,
    sunIncidence: "09:00 às 15:00",
    height: "15m",
    depth: "2m",
    guideRequired: false,
    petFriendly: true,
    childFriendly: true,
    isFeatured: false,

    wikilocUrl: "https://pt.wikiloc.com/trilhas-caminhada/cachoeira-dos-macacos-alto-paraiso-1284910",
    wikilocId: "1284910",
    elevationProfile: [
      { km: 0, alt: 1000 },
      { km: 0.9, alt: 980 }
    ],

    safetyStatus: {
      waterVolume: "Normal",
      statusColor: "safe",
      flashFloodRisk: "Baixo",
      cellSignal: "Pega Vivo na trilha",
      lastReport: "Hoje às 11:00 por Morador Local"
    },

    image: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1000&q=80"
    ],
    description: "Cachoeira de fácil acesso ideal para famílias. Conta com quedas menores em sequência e poços rasos transparentes cercados por vegetação nativa.",
    infrastructure: ["Estacionamento de terra", "Sinalização na trilha"]
  }
];
