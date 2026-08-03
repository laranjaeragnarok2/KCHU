import React from 'react';
import { Star, MapPin, Bookmark, Compass, Waves, ArrowRight } from 'lucide-react';

export default function WaterfallCard({ waterfall, onOpenDetail, isSaved, onToggleSave }) {
  return (
    <div className="glass-card overflow-hidden group hover:border-[var(--border-gold)] transition-all duration-300 shadow-xl">
      {/* Card Image Banner */}
      <div className="relative h-52 w-full overflow-hidden">
        <img
          src={waterfall.image}
          alt={waterfall.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-card)] via-black/30 to-transparent"></div>

        {/* Top Floating Glass Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
          <div className="flex items-center gap-1.5">
            <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-xs font-bold text-[var(--accent-gold)] border border-[var(--border-gold)] flex items-center gap-1 shadow-md">
              <Star size={13} fill="currentColor" />
              {waterfall.rating}
              <span className="text-[10px] text-white/70 font-normal">({waterfall.reviewsCount})</span>
            </span>
            <span className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-xs font-semibold text-white border border-white/15">
              {waterfall.difficulty}
            </span>
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              onToggleSave(waterfall.id);
            }}
            className={`p-2.5 rounded-full backdrop-blur-md transition-all border ${
              isSaved
                ? 'bg-[var(--accent-gold)] text-[#0C1818] border-[var(--accent-gold)] shadow-lg shadow-[var(--accent-gold-glow)]'
                : 'bg-black/60 text-white border-white/20 hover:bg-black/80'
            }`}
            aria-label="Salvar nos favoritos"
          >
            <Bookmark size={16} fill={isSaved ? "currentColor" : "none"} />
          </button>
        </div>

        {/* Bottom Image Status Pill */}
        <div className="absolute bottom-3 left-3 flex items-center gap-2">
          <span className={`text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full backdrop-blur-md ${
            waterfall.safetyStatus.statusColor === 'safe'
              ? 'bg-emerald-950/80 text-emerald-400 border border-emerald-500/40'
              : 'bg-amber-950/80 text-amber-400 border border-amber-500/40'
          }`}>
            Vol: {waterfall.safetyStatus.waterVolume}
          </span>
          {waterfall.wikilocId && (
            <span className="text-[10px] font-semibold px-2.5 py-1 rounded-full bg-emerald-950/80 text-emerald-400 border border-emerald-500/30 flex items-center gap-1 backdrop-blur-md">
              <Compass size={11} /> Wikiloc
            </span>
          )}
        </div>
      </div>

      {/* Card Body */}
      <div className="p-4 sm:p-5">
        <h3 className="font-heading font-black text-xl text-white leading-tight mb-1 group-hover:text-[var(--accent-gold)] transition-colors">
          {waterfall.name}
        </h3>

        <p className="text-xs text-[var(--text-secondary)] flex items-center gap-1 mb-4">
          <MapPin size={14} className="text-[var(--accent-gold)] shrink-0" />
          <span className="line-clamp-1">{waterfall.locationName}</span>
        </p>

        {/* Technical Specs Grid (Clean, readable, no squeeze!) */}
        <div className="grid grid-cols-3 gap-2 p-3 rounded-2xl bg-[var(--bg-main)]/60 border border-[var(--border-subtle)] mb-4 text-center">
          <div>
            <span className="text-[9px] font-bold text-[var(--text-muted)] uppercase block tracking-wider mb-0.5">Queda & Poço</span>
            <span className="text-xs font-extrabold text-white block">{waterfall.height}</span>
            <span className="text-[10px] text-[var(--text-secondary)] font-medium block">{waterfall.depth}</span>
          </div>

          <div>
            <span className="text-[9px] font-bold text-[var(--text-muted)] uppercase block tracking-wider mb-0.5">Trilha</span>
            <span className="text-xs font-extrabold text-white block">{waterfall.trailDistance}</span>
            <span className="text-[10px] text-[var(--text-secondary)] font-medium block">{waterfall.trailTime}</span>
          </div>

          <div>
            <span className="text-[9px] font-bold text-[var(--text-muted)] uppercase block tracking-wider mb-0.5">Desnível</span>
            <span className="text-xs font-extrabold text-[var(--accent-gold)] block">{waterfall.elevationGain}</span>
            <span className="text-[10px] text-[var(--text-secondary)] font-medium block">Altimetria</span>
          </div>
        </div>

        {/* Card Action Footer */}
        <div className="flex items-center justify-between pt-2 border-t border-[var(--border-subtle)] gap-2">
          <div className="flex flex-col">
            <span className="text-[9px] font-bold uppercase text-[var(--text-muted)] tracking-wider">Acesso</span>
            <span className="text-xs font-extrabold text-[var(--accent-gold)]">{waterfall.price}</span>
          </div>

          <button
            onClick={() => onOpenDetail(waterfall)}
            className="gold-gradient-btn px-4 py-2.5 text-xs flex items-center gap-1.5 shrink-0"
          >
            <span>Ver Ficha & Rota</span>
            <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}
