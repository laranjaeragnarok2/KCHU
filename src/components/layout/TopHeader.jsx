import React from 'react';
import { Search, SlidersHorizontal, MapPin, Compass, ShieldAlert } from 'lucide-react';

export default function TopHeader({ searchQuery, setSearchQuery, onOpenFilter, activeFiltersCount, isOffline }) {
  return (
    <header className="sticky top-0 z-30 px-4 pt-4 pb-3 glass-panel border-b border-[var(--border-subtle)]">
      {/* Brand & Offline Status */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[var(--accent-gold)] to-[var(--accent-gold-dark)] flex items-center justify-center shadow-lg shadow-[var(--accent-gold-glow)]">
            <span className="font-heading text-lg font-extrabold text-[#0C1818]">k</span>
          </div>
          <div>
            <h1 className="font-heading font-extrabold text-xl tracking-tight text-[var(--text-primary)] flex items-center gap-1.5">
              kCHU <span className="text-[10px] font-semibold tracking-wide uppercase px-2 py-0.5 rounded-full bg-[var(--accent-gold-glow)] text-[var(--accent-gold)] border border-[var(--border-gold)]">PWA</span>
            </h1>
            <p className="text-[11px] text-[var(--text-muted)]">Mapeamento de Cachoeiras & Trilhas</p>
          </div>
        </div>

        {/* Offline Badge if active */}
        {isOffline ? (
          <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/30 text-[11px] font-medium">
            <ShieldAlert size={12} />
            <span>Modo Offline</span>
          </div>
        ) : (
          <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[11px] font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>GPS Ativo</span>
          </div>
        )}
      </div>

      {/* Search Input & Filter Button */}
      <div className="flex items-center gap-2">
        <div className="relative flex-1">
          <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[var(--text-muted)]" />
          <input
            type="text"
            placeholder="Buscar por nome, estado ou parque..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-[var(--bg-card-elevated)] border border-[var(--border-subtle)] text-[var(--text-primary)] placeholder-[var(--text-muted)] text-sm rounded-2xl pl-10 pr-4 py-2.5 focus:outline-none focus:border-[var(--accent-gold)] transition-colors"
          />
        </div>

        <button
          onClick={onOpenFilter}
          className="relative p-2.5 rounded-2xl bg-[var(--bg-card-elevated)] border border-[var(--border-subtle)] text-[var(--text-primary)] hover:border-[var(--accent-gold)] active:scale-95 transition-all"
          aria-label="Filtrar"
        >
          <SlidersHorizontal size={18} className="text-[var(--accent-gold)]" />
          {activeFiltersCount > 0 && (
            <span className="absolute -top-1 -right-1 w-5 h-5 bg-[var(--accent-gold)] text-[#0C1818] font-bold text-[10px] rounded-full flex items-center justify-center">
              {activeFiltersCount}
            </span>
          )}
        </button>
      </div>
    </header>
  );
}
