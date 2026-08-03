import React from 'react';
import { X, SlidersHorizontal, RotateCcw, Check } from 'lucide-react';

export default function FilterModal({ isOpen, onClose, filters, setFilters, onResetFilters }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex justify-center items-end sm:items-center animate-fade-in">
      <div className="bg-[var(--bg-main)] w-full max-w-[480px] rounded-t-[32px] sm:rounded-[32px] overflow-hidden flex flex-col border border-[var(--border-gold)] shadow-2xl p-5 animate-slide-up">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between pb-4 border-b border-[var(--border-subtle)]">
          <div className="flex items-center gap-2">
            <SlidersHorizontal size={18} className="text-[var(--accent-gold)]" />
            <h3 className="font-heading font-extrabold text-lg text-[var(--text-primary)]">Filtros de Busca</h3>
          </div>
          <button onClick={onClose} className="p-1.5 rounded-full bg-[var(--bg-card-elevated)] text-[var(--text-muted)] hover:text-white">
            <X size={18} />
          </button>
        </div>

        {/* Filter Groups */}
        <div className="py-5 space-y-5 max-h-[60vh] overflow-y-auto pr-1">
          
          {/* Dificuldade */}
          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-[var(--text-muted)] block mb-2">
              Dificuldade da Trilha
            </label>
            <div className="grid grid-cols-4 gap-2">
              {['Todas', 'Fácil', 'Médio', 'Difícil'].map((diff) => (
                <button
                  key={diff}
                  onClick={() => setFilters({ ...filters, difficulty: diff })}
                  className={`py-2 px-1 text-xs font-semibold rounded-xl border transition-all ${
                    filters.difficulty === diff
                      ? 'bg-[var(--accent-gold)] text-[#0C1818] border-[var(--accent-gold)]'
                      : 'bg-[var(--bg-card-elevated)] text-[var(--text-secondary)] border-[var(--border-subtle)]'
                  }`}
                >
                  {diff}
                </button>
              ))}
            </div>
          </div>

          {/* Banho de Cachoeira */}
          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-[var(--text-muted)] block mb-2">
              Poço para Banho
            </label>
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => setFilters({ ...filters, canSwim: !filters.canSwim })}
                className={`py-2.5 px-3 text-xs font-semibold rounded-xl border flex items-center justify-between transition-all ${
                  filters.canSwim
                    ? 'bg-[var(--accent-gold)] text-[#0C1818] border-[var(--accent-gold)]'
                    : 'bg-[var(--bg-card-elevated)] text-[var(--text-secondary)] border-[var(--border-subtle)]'
                }`}
              >
                <span>Apenas para Nadar</span>
                {filters.canSwim && <Check size={14} />}
              </button>
              <button
                onClick={() => setFilters({ ...filters, freeOnly: !filters.freeOnly })}
                className={`py-2.5 px-3 text-xs font-semibold rounded-xl border flex items-center justify-between transition-all ${
                  filters.freeOnly
                    ? 'bg-[var(--accent-gold)] text-[#0C1818] border-[var(--accent-gold)]'
                    : 'bg-[var(--bg-card-elevated)] text-[var(--text-secondary)] border-[var(--border-subtle)]'
                }`}
              >
                <span>Apenas Gratuitas</span>
                {filters.freeOnly && <Check size={14} />}
              </button>
            </div>
          </div>

          {/* Wikiloc Only */}
          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-[var(--text-muted)] block mb-2">
              Recursos de Trilha
            </label>
            <button
              onClick={() => setFilters({ ...filters, wikilocOnly: !filters.wikilocOnly })}
              className={`w-full py-2.5 px-3 text-xs font-semibold rounded-xl border flex items-center justify-between transition-all ${
                filters.wikilocOnly
                  ? 'bg-emerald-500 text-[#0C1818] border-emerald-400'
                  : 'bg-[var(--bg-card-elevated)] text-[var(--text-secondary)] border-[var(--border-subtle)]'
              }`}
            >
              <span>Com Trilha do Wikiloc Associada</span>
              {filters.wikilocOnly && <Check size={14} />}
            </button>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="pt-4 border-t border-[var(--border-subtle)] flex items-center gap-3">
          <button
            onClick={onResetFilters}
            className="p-3 rounded-2xl bg-[var(--bg-card-elevated)] text-[var(--text-muted)] hover:text-white flex items-center gap-1 text-xs"
          >
            <RotateCcw size={14} />
            <span>Limpar</span>
          </button>
          <button
            onClick={onClose}
            className="flex-1 gold-gradient-btn py-3 text-xs font-bold"
          >
            Aplicar Filtros
          </button>
        </div>
      </div>
    </div>
  );
}
