import React from 'react';
import { Star, ArrowRight, TrendingUp } from 'lucide-react';

export default function WaterfallCard({ waterfall, onOpenDetail, onStartRoute, isSaved, onToggleSave, isCompact = false }) {
  // COMPACT CARD STYLE (Continuar Explorando)
  if (isCompact) {
    return (
      <div 
        onClick={() => onOpenDetail(waterfall)}
        className="glass-card p-3 rounded-2xl flex items-center gap-3.5 cursor-pointer hover:border-[#F9BA77]/50 transition-all duration-200 border border-white/10 bg-[#162525]"
      >
        <div className="relative w-24 h-24 rounded-xl overflow-hidden shrink-0">
          <img src={waterfall.image} alt={waterfall.name} className="w-full h-full object-cover" />
          <span className="absolute top-1 right-1 glass-pill px-1.5 py-0.5 rounded text-[10px] font-bold text-white">
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
          <p className="text-xs font-bold text-[#F9BA77] mt-1">
            {waterfall.price} {waterfall.priceSubtitle && `(${waterfall.priceSubtitle})`}
          </p>
        </div>

        <div className="pr-1">
          <button 
            onClick={(e) => {
              e.stopPropagation();
              onOpenDetail(waterfall);
            }}
            className="w-8 h-8 rounded-full bg-[#F9BA77]/10 flex items-center justify-center text-[#F9BA77] hover:bg-[#F9BA77] hover:text-[#051424] transition-colors shrink-0"
          >
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    );
  }

  // FEATURED HERO CARD STYLE (Destaque da Semana)
  return (
    <div className="glass-card rounded-[24px] overflow-hidden border border-white/10 shadow-2xl transition-all bg-[#162525]">
      {/* Hero Image */}
      <div className="relative h-[280px] w-full overflow-hidden">
        <img
          src={waterfall.image}
          alt={waterfall.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-transparent"></div>

        {/* Floating Top Badges */}
        <div className="absolute top-4 right-4 flex items-center gap-2 z-10">
          <div className="glass-pill px-3 py-1.5 rounded-full flex items-center gap-1">
            <Star size={14} className="text-[#F9BA77]" fill="currentColor" />
            <span className="text-white text-xs font-bold">{waterfall.rating}</span>
          </div>
          <div className="glass-pill px-3 py-1.5 rounded-full">
            <span className="text-white text-xs font-bold">{waterfall.difficulty}</span>
          </div>
        </div>
      </div>

      {/* Hero Card Body */}
      <div className="p-5 bg-[#162525] flex flex-col gap-4">
        {/* Title & Price Row */}
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="font-heading font-bold text-2xl text-white leading-tight">
              {waterfall.name}
            </h3>
          </div>
          <div className="text-right shrink-0">
            <span className="text-xl font-bold text-[#F9BA77] block">{waterfall.price}</span>
            {waterfall.priceSubtitle && (
              <span className="text-[11px] text-white/50 block font-medium">{waterfall.priceSubtitle}</span>
            )}
          </div>
        </div>

        {/* Metrics Row */}
        <div className="flex items-center gap-4 py-3 border-y border-[#F9BA77]/10 flex-wrap text-xs text-white">
          <span className="flex items-center gap-1.5">
            <span className="text-[#F9BA77]">💧</span> Fluxo: {waterfall.safetyStatus.waterVolume}
          </span>
          <div className="w-1 h-1 rounded-full bg-[#F9BA77]/30"></div>
          <span className="flex items-center gap-1.5">
            <span>🗺️</span> {waterfall.trailDistance}
          </span>
          <div className="w-1 h-1 rounded-full bg-[#F9BA77]/30"></div>
          <span className="flex items-center gap-1.5">
            <TrendingUp size={16} className="text-[#F9BA77]" /> {waterfall.elevationGain}
          </span>
        </div>

        {/* Two Action Buttons (VER FICHA & ROTA) */}
        <div className="flex gap-3 mt-1">
          <button
            onClick={() => onOpenDetail(waterfall)}
            className="flex-1 py-3 px-4 rounded-full bg-transparent border border-[#F9BA77] text-white font-bold text-xs hover:bg-[#F9BA77]/10 transition-colors uppercase tracking-wider text-center"
          >
            Ver Ficha
          </button>
          <button
            onClick={() => onStartRoute ? onStartRoute(waterfall) : onOpenDetail(waterfall)}
            className="flex-1 py-3 px-4 rounded-full bg-[#F9BA77] text-[#051424] font-black text-xs hover:bg-[#F9BA77]/90 transition-colors shadow-[0_0_15px_rgba(249,186,119,0.3)] uppercase tracking-wider text-center"
          >
            Rota
          </button>
        </div>
      </div>
    </div>
  );
}
