import React from 'react';
import { Star, ArrowRight, TrendingUp } from 'lucide-react';

export default function WaterfallCard({ waterfall, onOpenDetail, isSaved, onToggleSave, isCompact = false }) {
  // COMPACT CARD STYLE (Continuar Explorando)
  if (isCompact) {
    return (
      <div 
        onClick={() => onOpenDetail(waterfall)}
        className="glass-card p-3 rounded-2xl flex items-center gap-3.5 cursor-pointer hover:border-[#E5A967]/50 transition-all duration-200 border border-white/10 bg-[#0E1820]"
      >
        <div className="relative w-20 h-20 rounded-xl overflow-hidden shrink-0">
          <img src={waterfall.image} alt={waterfall.name} className="w-full h-full object-cover" />
          <span className="absolute top-1 left-1 bg-black/70 backdrop-blur-md px-1.5 py-0.5 rounded text-[9px] font-bold text-white">
            {waterfall.difficulty}
          </span>
        </div>

        <div className="flex-1 min-w-0">
          <h4 className="font-heading font-bold text-base text-white truncate leading-snug mb-1">
            {waterfall.name}
          </h4>
          <p className="text-xs text-white/60 flex items-center gap-2 mb-1">
            <span>🗺️ {waterfall.trailDistance}</span>
            <span>•</span>
            <span>⏱️ {waterfall.trailTime}</span>
          </p>
          <p className="text-xs font-bold text-[#E5A967]">
            {waterfall.price} {waterfall.priceSubtitle && `(${waterfall.priceSubtitle})`}
          </p>
        </div>

        <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white shrink-0 hover:bg-[#E5A967] hover:text-[#070E12] transition-colors">
          <ArrowRight size={18} />
        </div>
      </div>
    );
  }

  // FEATURED HERO CARD STYLE (Destaque da Semana)
  return (
    <div className="glass-card rounded-[28px] overflow-hidden border border-white/10 shadow-2xl transition-all bg-[#0E1820]">
      {/* Hero Image */}
      <div className="relative h-64 w-full overflow-hidden">
        <img
          src={waterfall.image}
          alt={waterfall.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0E1820] via-black/20 to-transparent"></div>

        {/* Floating Top Badges */}
        <div className="absolute top-4 right-4 flex items-center gap-2 z-10">
          <span className="px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-xs font-bold text-white border border-white/10 flex items-center gap-1">
            <Star size={13} className="text-[#E5A967]" fill="currentColor" />
            {waterfall.rating}
          </span>
          <span className="px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-xs font-bold text-white border border-white/10">
            {waterfall.difficulty}
          </span>
        </div>
      </div>

      {/* Hero Card Body */}
      <div className="p-5 bg-[#0E1820]">
        {/* Title & Price Row */}
        <div className="flex items-start justify-between gap-2 mb-3">
          <div>
            <h3 className="font-heading font-black text-2xl text-white leading-tight">
              {waterfall.name}
            </h3>
          </div>
          <div className="text-right shrink-0">
            <span className="text-xl font-black text-[#E5A967] block">{waterfall.price}</span>
            {waterfall.priceSubtitle && (
              <span className="text-[10px] text-white/50 block font-medium">{waterfall.priceSubtitle}</span>
            )}
          </div>
        </div>

        {/* Metrics Row */}
        <div className="flex items-center gap-3 text-xs text-white/70 py-2.5 border-y border-white/10 my-3">
          <span className="flex items-center gap-1">
            <span className="text-[#E5A967]">💧</span> Fluxo: {waterfall.safetyStatus.waterVolume}
          </span>
          <span>•</span>
          <span className="flex items-center gap-1">
            <span>🗺️</span> {waterfall.trailDistance}
          </span>
          <span>•</span>
          <span className="flex items-center gap-1">
            <TrendingUp size={14} className="text-[#E5A967]" /> {waterfall.elevationGain}
          </span>
        </div>

        {/* Two Action Buttons (VER FICHA & ROTA) */}
        <div className="grid grid-cols-2 gap-3 pt-1">
          <button
            onClick={() => onOpenDetail(waterfall)}
            className="py-3 px-4 rounded-full border border-white/20 text-white font-bold text-xs hover:border-[#E5A967] hover:text-[#E5A967] transition-all tracking-wider uppercase text-center"
          >
            Ver Ficha
          </button>
          <button
            onClick={() => onOpenDetail(waterfall)}
            className="py-3 px-4 rounded-full bg-[#E5A967] text-[#070E12] font-black text-xs hover:bg-[#d69755] transition-all tracking-wider uppercase text-center shadow-lg shadow-[#E5A967]/20"
          >
            Rota
          </button>
        </div>
      </div>
    </div>
  );
}
