import React from 'react';
import { Search, SlidersHorizontal, ShieldAlert, Sparkles } from 'lucide-react';

export default function TopHeader({ searchQuery, setSearchQuery, onOpenFilter, activeFiltersCount, isOffline, currentCategory, setCategory }) {
  const categories = [
    { id: 'all', label: 'Todas' },
    { id: 'easy', label: 'Fácil' },
    { id: 'medium', label: 'Médio' },
    { id: 'hard', label: 'Difícil' },
    { id: 'free', label: 'Gratuitas' },
    { id: 'wikiloc', label: 'Com Wikiloc' }
  ];

  return (
    <header className="sticky top-0 z-30 px-4 pt-4 pb-3 glass-panel border-b border-[var(--border-subtle)] shadow-xl">
      {/* Brand Header */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2.5">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[var(--accent-gold)] to-[var(--accent-gold-dark)] flex items-center justify-center shadow-lg shadow-[var(--accent-gold-glow)]">
            <span className="font-heading text-xl font-extrabold text-[#0C1818]">k</span>
          </div>
          <div>
            <h1 className="font-heading font-black text-xl tracking-tight text-white flex items-center gap-1.5 leading-none">
              kCHU <span className="text-[9px] font-bold tracking-widest uppercase px-2 py-0.5 rounded-full bg-[var(--accent-gold-glow)] text-[var(--accent-gold)] border border-[var(--border-gold)]">PWA</span>
            </h1>
            <p className="text-[11px] text-[var(--text-muted)] mt-0.5">Mapeamento de Cachoeiras & Trilhas</p>
          </div>
        </div>

        {isOffline ? (
          <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/30 text-[11px] font-medium">
            <ShieldAlert size={12} />
            <span>Modo Offline</span>
          </div>
        ) : (
          <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[11px] font-medium">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>GPS Ativo</span>
          </div>
        )}
      </div>

      {/* Search Input & Filter Button */}
      <div className="flex items-center gap-2 mb-3">
        <div className="relative flex-1">
          <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[var(--text-muted)] pointer-events-none" />
          <input
            type="text"
            placeholder="Buscar por nome, estado ou parque..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-[var(--bg-card-elevated)] border border-[var(--border-subtle)] text-white placeholder-[var(--text-muted)] text-xs sm:text-sm rounded-2xl pl-10 pr-4 py-2.5 focus:outline-none focus:border-[var(--accent-gold)] transition-all shadow-inner"
          />
        </div>

        <button
          onClick={onOpenFilter}
          className="relative p-2.5 rounded-2xl bg-[var(--bg-card-elevated)] border border-[var(--border-subtle)] text-white hover:border-[var(--accent-gold)] active:scale-95 transition-all shrink-0"
          aria-label="Filtrar"
        >
          <SlidersHorizontal size={18} className="text-[var(--accent-gold)]" />
          {activeFiltersCount > 0 && (
            <span className="absolute -top-1 -right-1 w-5 h-5 bg-[var(--accent-gold)] text-[#0C1818] font-bold text-[10px] rounded-full flex items-center justify-center shadow-md">
              {activeFiltersCount}
            </span>
          )}
        </button>
      </div>

      {/* Filter Category Chips (Horizontal Scrollable) */}
      <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pt-1 pb-0.5">
        {categories.map((cat) => {
          const isActive = currentCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setCategory(cat.id)}
              className={`px-3 py-1.5 text-xs font-semibold rounded-full whitespace-nowrap transition-all duration-200 border ${
                isActive
                  ? 'bg-[var(--accent-gold)] text-[#0C1818] border-[var(--accent-gold)] shadow-md shadow-[var(--accent-gold-glow)] font-bold'
                  : 'bg-[var(--bg-card-elevated)] text-[var(--text-secondary)] border-[var(--border-subtle)] hover:border-white/20'
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>
    </header>
  );
}
