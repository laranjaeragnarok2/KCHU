import React, { useState } from 'react';
import { 
  X, Star, MapPin, Compass, ShieldAlert, Waves, Sun, DollarSign, 
  CheckCircle2, AlertTriangle, Phone, Signal, ExternalLink, Bookmark, Check, Share2 
} from 'lucide-react';

export default function DetailModal({ waterfall, onClose, isSaved, onToggleSave, isVisited, onToggleCheckin }) {
  const [activeTab, setActiveTab] = useState('overview'); // 'overview', 'trail', 'safety', 'gallery'

  if (!waterfall) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex justify-center items-end sm:items-center animate-fade-in overflow-hidden">
      <div className="bg-[var(--bg-main)] w-full max-w-[480px] h-[92vh] sm:h-[88vh] rounded-t-[32px] sm:rounded-[32px] overflow-hidden flex flex-col border border-[var(--border-gold)] shadow-2xl relative animate-slide-up">
        
        {/* Top Floating Buttons */}
        <div className="absolute top-4 left-4 right-4 z-20 flex items-center justify-between">
          <button
            onClick={onClose}
            className="p-2.5 rounded-full bg-black/60 backdrop-blur-md text-white border border-white/10 hover:bg-black/80"
          >
            <X size={18} />
          </button>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onToggleCheckin(waterfall.id)}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold backdrop-blur-md flex items-center gap-1 border transition-all ${
                isVisited
                  ? 'bg-emerald-500 text-[#0C1818] border-emerald-400'
                  : 'bg-black/60 text-white border-white/20 hover:bg-black/80'
              }`}
            >
              <Check size={14} />
              <span>{isVisited ? 'Fui!' : 'Fazer Check-in'}</span>
            </button>

            <button
              onClick={() => onToggleSave(waterfall.id)}
              className={`p-2.5 rounded-full backdrop-blur-md border transition-all ${
                isSaved
                  ? 'bg-[var(--accent-gold)] text-[#0C1818] border-[var(--accent-gold)]'
                  : 'bg-black/60 text-white border-white/20'
              }`}
            >
              <Bookmark size={18} fill={isSaved ? "currentColor" : "none"} />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Content */}
        <div className="flex-1 overflow-y-auto pb-8">
          {/* Hero Image & Overlay */}
          <div className="relative h-72 w-full">
            <img src={waterfall.image} alt={waterfall.name} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-main)] via-black/30 to-transparent"></div>

            <div className="absolute bottom-4 left-5 right-5">
              <div className="flex items-center gap-2 mb-1.5">
                <span className="px-2.5 py-0.5 rounded-full bg-[var(--accent-gold)] text-[#0C1818] font-extrabold text-[11px]">
                  {waterfall.difficulty}
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-black/60 text-white text-[11px] font-medium border border-white/10 flex items-center gap-1">
                  <Star size={12} className="text-[var(--accent-gold)]" fill="currentColor" />
                  {waterfall.rating} ({waterfall.reviewsCount} avaliações)
                </span>
              </div>

              <h2 className="font-heading font-extrabold text-2xl text-[var(--text-primary)] leading-tight">
                {waterfall.name}
              </h2>
              <p className="text-xs text-[var(--text-secondary)] flex items-center gap-1 mt-0.5">
                <MapPin size={13} className="text-[var(--accent-gold)]" />
                {waterfall.locationName}
              </p>
            </div>
          </div>

          {/* Navigation Tabs (Style matching reference image!) */}
          <div className="px-4 mt-3 border-b border-[var(--border-subtle)] flex items-center justify-between gap-1 overflow-x-auto no-scrollbar">
            {[
              { id: 'overview', label: 'Visão Geral' },
              { id: 'trail', label: 'Trilha & Wikiloc' },
              { id: 'safety', label: 'Segurança & Clima' },
              { id: 'gallery', label: 'Fotos' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-2.5 px-3 text-xs font-semibold border-b-2 whitespace-nowrap transition-all ${
                  activeTab === tab.id
                    ? 'border-[var(--accent-gold)] text-[var(--accent-gold)]'
                    : 'border-transparent text-[var(--text-muted)] hover:text-[var(--text-primary)]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* TAB 1: VISÃO GERAL */}
          {activeTab === 'overview' && (
            <div className="p-5 space-y-5 animate-fade-in">
              {/* Quick Info Grid */}
              <div className="grid grid-cols-2 gap-3">
                <div className="glass-card p-3">
                  <div className="flex items-center gap-2 text-[var(--accent-gold)] mb-1">
                    <Waves size={16} />
                    <span className="text-[10px] font-bold uppercase text-[var(--text-muted)]">Queda & Poço</span>
                  </div>
                  <p className="text-sm font-bold text-[var(--text-primary)]">{waterfall.height}</p>
                  <p className="text-xs text-[var(--text-secondary)]">Poço: {waterfall.depth}</p>
                </div>

                <div className="glass-card p-3">
                  <div className="flex items-center gap-2 text-[var(--accent-gold)] mb-1">
                    <Sun size={16} />
                    <span className="text-[10px] font-bold uppercase text-[var(--text-muted)]">Incidência de Sol</span>
                  </div>
                  <p className="text-xs font-semibold text-[var(--text-primary)] line-clamp-2">{waterfall.sunIncidence}</p>
                </div>

                <div className="glass-card p-3">
                  <div className="flex items-center gap-2 text-[var(--accent-gold)] mb-1">
                    <DollarSign size={16} />
                    <span className="text-[10px] font-bold uppercase text-[var(--text-muted)]">Entrada</span>
                  </div>
                  <p className="text-xs font-bold text-[var(--text-primary)]">{waterfall.price}</p>
                </div>

                <div className="glass-card p-3">
                  <div className="flex items-center gap-2 text-[var(--accent-gold)] mb-1">
                    <Compass size={16} />
                    <span className="text-[10px] font-bold uppercase text-[var(--text-muted)]">Guia / Acesso</span>
                  </div>
                  <p className="text-xs font-semibold text-[var(--text-primary)]">
                    {waterfall.guideRequired ? 'Guia Obrigatório' : 'Acesso Livre sem Guia'}
                  </p>
                </div>
              </div>

              {/* Description */}
              <div>
                <h4 className="font-heading font-bold text-sm text-[var(--text-primary)] mb-1">Sobre a Cachoeira</h4>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{waterfall.description}</p>
              </div>

              {/* Infrastructure */}
              <div>
                <h4 className="font-heading font-bold text-sm text-[var(--text-primary)] mb-2">Infraestrutura no Local</h4>
                <div className="flex flex-wrap gap-2">
                  {waterfall.infrastructure.map((item, idx) => (
                    <span key={idx} className="badge-tag flex items-center gap-1.5">
                      <CheckCircle2 size={12} className="text-[var(--accent-gold)]" />
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: TRILHA & WIKILOC */}
          {activeTab === 'trail' && (
            <div className="p-5 space-y-5 animate-fade-in">
              {/* Wikiloc Card Integration Banner */}
              <div className="glass-card p-4 border border-emerald-500/30 bg-emerald-950/20">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2 text-emerald-400 font-extrabold text-sm">
                    <Compass size={18} />
                    <span>Integração Wikiloc</span>
                  </div>
                  <span className="text-[10px] font-bold bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded-full">
                    ID #{waterfall.wikilocId}
                  </span>
                </div>
                <p className="text-xs text-[var(--text-secondary)] mb-3">
                  Trilha gravada via GPS com perfil de altimetria e navegação em tempo real.
                </p>
                <a
                  href={waterfall.wikilocUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full gold-gradient-btn py-2.5 text-xs font-bold flex items-center justify-center gap-2"
                >
                  <span>Abrir Trilha no Wikiloc</span>
                  <ExternalLink size={14} />
                </a>
              </div>

              {/* Trail Specs */}
              <div className="space-y-3">
                <h4 className="font-heading font-bold text-sm text-[var(--text-primary)]">Ficha Técnica da Trilha</h4>
                <div className="grid grid-cols-3 gap-2 text-center">
                  <div className="glass-card p-3">
                    <span className="text-[10px] text-[var(--text-muted)] uppercase block">Distância</span>
                    <span className="text-sm font-bold text-[var(--text-primary)]">{waterfall.trailDistance}</span>
                  </div>
                  <div className="glass-card p-3">
                    <span className="text-[10px] text-[var(--text-muted)] uppercase block">Tempo Médio</span>
                    <span className="text-sm font-bold text-[var(--text-primary)]">{waterfall.trailTime}</span>
                  </div>
                  <div className="glass-card p-3">
                    <span className="text-[10px] text-[var(--text-muted)] uppercase block">Desnível</span>
                    <span className="text-sm font-bold text-[var(--accent-gold)]">{waterfall.elevationGain}</span>
                  </div>
                </div>
              </div>

              {/* Altimetry Profile Simulator */}
              <div>
                <h4 className="font-heading font-bold text-sm text-[var(--text-primary)] mb-2">Perfil Altimétrico da Trilha</h4>
                <div className="glass-card p-4">
                  <div className="h-24 flex items-end justify-between gap-2 pt-4 px-2 border-b border-white/10">
                    {waterfall.elevationProfile.map((pt, idx) => (
                      <div key={idx} className="flex-1 flex flex-col items-center gap-1 group">
                        <span className="text-[9px] text-[var(--accent-gold)] opacity-0 group-hover:opacity-100 transition-opacity font-bold">
                          {pt.alt}m
                        </span>
                        <div
                          className="w-full bg-gradient-to-t from-[var(--accent-gold-dark)] to-[var(--accent-gold)] rounded-t-sm"
                          style={{ height: `${Math.min(100, (pt.alt - 700) / 8)}px` }}
                        ></div>
                        <span className="text-[9px] text-[var(--text-muted)] mt-1">{pt.km}km</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-[11px] text-[var(--text-muted)] text-center mt-2">Altitude Máxima vs Início da Caminhada</p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: SEGURANÇA & CLIMA */}
          {activeTab === 'safety' && (
            <div className="p-5 space-y-4 animate-fade-in">
              <div className="glass-card p-4 border border-amber-500/30">
                <div className="flex items-center gap-2 text-amber-400 font-bold text-sm mb-2">
                  <AlertTriangle size={18} />
                  <span>Condições em Tempo Real</span>
                </div>
                <div className="space-y-2 text-xs">
                  <div className="flex justify-between py-1 border-b border-white/5">
                    <span className="text-[var(--text-muted)]">Volume do Rio:</span>
                    <span className="font-bold text-emerald-400">{waterfall.safetyStatus.waterVolume}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-white/5">
                    <span className="text-[var(--text-muted)]">Risco de Tromba d'Água:</span>
                    <span className="font-bold text-white">{waterfall.safetyStatus.flashFloodRisk}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-white/5">
                    <span className="text-[var(--text-muted)]">Sinal de Celular:</span>
                    <span className="font-semibold text-amber-300">{waterfall.safetyStatus.cellSignal}</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-[var(--text-muted)]">Último Relato:</span>
                    <span className="text-[var(--text-secondary)]">{waterfall.safetyStatus.lastReport}</span>
                  </div>
                </div>
              </div>

              {/* Safety Rules */}
              <div className="space-y-2">
                <h4 className="font-heading font-bold text-sm text-[var(--text-primary)]">Recomendações de Segurança</h4>
                <ul className="text-xs text-[var(--text-secondary)] space-y-1.5 list-disc list-inside">
                  <li>Se a água começar a ficar turva ou levar folhas/galhos rápidos, saia do rio imediatamente.</li>
                  <li>Baixe o mapa e a trilha do Wikiloc para acesso offline antes de iniciar a caminhada.</li>
                  <li>Avise alguém sobre seu horário estimado de retorno.</li>
                </ul>
              </div>
            </div>
          )}

          {/* TAB 4: GALERIA */}
          {activeTab === 'gallery' && (
            <div className="p-5 space-y-3 animate-fade-in">
              <h4 className="font-heading font-bold text-sm text-[var(--text-primary)]">Fotos da Comunidade</h4>
              <div className="grid grid-cols-2 gap-2">
                {waterfall.gallery.map((imgUrl, idx) => (
                  <img
                    key={idx}
                    src={imgUrl}
                    alt={`Foto ${idx}`}
                    className="w-full h-36 object-cover rounded-2xl border border-white/10 hover:opacity-90 transition-opacity"
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
