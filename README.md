# kCHU 🌊 | Mapeamento Inteligente de Cachoeiras & Trilhas (PWA)

O **kCHU** é uma aplicação web PWA mobile-first projetada para amantes de ecoturismo e aventura. Permite mapear cachoeiras, visualizar dados técnicos (poço, queda, sol), acompanhar condições de segurança e volume de água em tempo real, além de integrar trilhas gravadas do **Wikiloc**.

![kCHU Preview](public/favicon.svg)

## 🚀 Funcionalidades Chave

* 🗺️ **Mapa Interativo (Modo Escuro)**: Visualizador de cachoeiras com Leaflet.js e marcadores dinâmicos.
* 🥾 **Integração Wikiloc & Trilhas**: Leitor de altimetria, distância, ganho de elevação e link direto para o app Wikiloc.
* ⚠️ **Módulo de Segurança & Clima**: Volume d'água (Normal/Alerta), risco de tromba d'água e indicador de sinal de celular por operadora.
* 🏆 **Passaporte de Cachoeiras**: Sistema de Check-in ("Já visitei!") com selos conquistados e lista de desejos.
* 📱 **PWA & Offline First**: Funciona sem sinal de internet na trilha através de Service Workers e manifesto instalável.

## 🛠️ Tecnologias Utilizadas

* **React + Vite** (JavaScript ES6+)
* **Leaflet.js** (Renderização vetorial de mapas escuros)
* **Lucide Icons** (Iconografia moderna)
* **PWA (Progressive Web App)**
* **CSS Tokens & Design System** inspirados no design *Outdoors Premium* (Teal & Amber)

## ⚙️ Como Rodar Localmente

```bash
# Clone o repositório
git clone <URL_DO_REPOSITORIO>

# Entre na pasta
cd kchu

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

## ☁️ Deploy no Vercel

O projeto está 100% pronto para deploy automático no Vercel via GitHub:
1. Faça o push deste repositório para o seu GitHub.
2. Importe o repositório no dashboard do [Vercel](https://vercel.com).
3. Selecione o preset **Vite** e clique em **Deploy**.
