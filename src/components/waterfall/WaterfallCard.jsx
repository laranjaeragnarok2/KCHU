import React from 'react';
import { Star, MapPin, Bookmark, Waves, ShieldAlert, ExternalLink, Compass } from 'lucide-react';

export default function WaterfallCard({ waterfall, onOpenDetail, isSaved, onToggleSave }) {
  return (
    <div className="glass-card overflow-hidden group hover:border-[var(--border-gold)] transition-all duration-300">
      {/* Card Image Banner */}
      <div className="relative h-48 w-full overflow-hidden">
        <img
          src={waterfall.image}
          alt={waterfall.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-card)] via-black/20 to-transparent"></div>

        {/* Top Floating Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
          <div className="flex items-center gap-1.5">
            <span className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-xs font-semibold text-[var(--accent-gold)] border border-[var(--border-gold)] flex items-center gap-1">
              <Star size={12} fill="currentColor" />
              {waterfall.rating}
            </span>
            <span className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-xs font-medium text-white border border-white/10">
              {waterfall.difficulty}
            </span>
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              onToggleSave(waterfall.id);
            }}
            className={`p-2 rounded-full backdrop-blur-md transition-all ${
              isSaved
                ? 'bg-[var(--accent-gold)] text-[#0C1818] shadow-md shadow-[var(--accent-gold-glow)]'
                : 'bg-black/50 text-white hover:bg-black/80'
            }`}
            aria-label="Salvar nos favoritos"
          >
            <Bookmark size={16} fill={isSaved ? "currentColor" : "none"} />
          </button>
        </div>

        {/* Bottom Image Status Tag */}
        <div className="absolute bottom-3 left-3 flex items-center gap-2">
          <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full backdrop-blur-md ${
            waterfall.safetyStatus.statusColor === 'safe'
              ? 'bg-emerald-500/30 text-emerald-300 border border-emerald-500/40'
              : 'bg-amber-500/30 text-amber-300 border border-amber-500/40'
          }`}>
            Vol: {waterfall.safetyStatus.waterVolume}
          </span>
          {waterfall.wikilocId && (
            <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-emerald-950/80 text-emerald-400 border border-emerald-800 flex items-center gap-1">
              <Compass size={10} /> Wikiloc
            </span>
          )}
        </div>
      </div>

      {/* Card Body */}
      <div className="p-4">
        <h3 className="font-heading font-extrabold text-lg text-[var(--text-primary)] mb-1 leading-tight group-hover:text-[var(--accent-gold)] transition-colors">
          {waterfall.name}
        </h3>

        <p className="text-xs text-[var(--text-muted)] flex items-center gap-1 mb-3">
          <MapPin size={13} className="text-[var(--accent-gold)] shrink-0" />
          <span className="line-clamp-1">{waterfall.locationName}</span>
        </p>

        {/* Technical Pills Grid */}
        <div className="grid grid-cols-2 gap-2 py-2 border-y border-[var(--border-subtle)] my-2 text-xs">
          <div>
            <span className="text-[10px] text-[var(--text-muted)] uppercase block">Queda / Poço</span>
            <span className="font-semibold text-[var(--text-secondary)]">{waterfall.height} • {waterfall.depth}</span>
          </div>
          <div>
            <span className="text-[10px] text-[var(--text-muted)] uppercase block">Trilha</span>
            <span className="font-semibold text-[var(--text-secondary)]">{waterfall.trailDistance}</span>
          </div>
        </div>

        {/* Action Footer */}
        <div className="flex items-center justify-between mt-3 pt-1">
          <div className="text-xs">
            <span className="font-bold text-[var(--accent-gold)]">{waterfall.price}</span>
          </div>

          <button
            onClick={() => onOpenDetail(waterfall)}
            className="gold-gradient-btn px-4 py-2 text-xs flex items-center gap-1.5"
          >
            <span>Ver Ficha & Rota</span>
          </button>
        </div>
      </div>
    </div>
  );
}
