import React from 'react';
import { Search, SlidersHorizontal } from 'lucide-react';

export default function TopHeader({ searchQuery, setSearchQuery, onOpenFilter, activeFiltersCount, currentCategory, setCategory }) {
  const categories = [
    { id: 'all', label: 'TUDO' },
    { id: 'easy', label: 'FÁCIL' },
    { id: 'medium', label: 'MÉDIA' },
    { id: 'hard', label: 'DIFÍCIL' }
  ];

  return (
    <header className="sticky top-0 z-30 px-4 pt-4 pb-3 bg-[#070E12]/95 backdrop-blur-xl border-b border-white/5 shadow-xl">
      {/* Search Input Bar & Filter Icon */}
      <div className="flex items-center gap-2.5 mb-3">
        <div className="relative flex-1">
          <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40 pointer-events-none" />
          <input
            type="text"
            placeholder="Buscar cachoeiras, trilhas..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-[#0E1820] border border-white/10 text-white placeholder-white/40 text-xs sm:text-sm rounded-full pl-11 pr-4 py-3 focus:outline-none focus:border-[#E5A967] transition-all"
          />
        </div>

        <button
          onClick={onOpenFilter}
          className="relative p-3 rounded-full bg-[#0E1820] border border-white/10 text-white hover:border-[#E5A967] active:scale-95 transition-all shrink-0"
          aria-label="Filtrar"
        >
          <SlidersHorizontal size={18} className="text-white" />
          {activeFiltersCount > 0 && (
            <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#E5A967] text-[#070E12] font-bold text-[10px] rounded-full flex items-center justify-center shadow-md">
              {activeFiltersCount}
            </span>
          )}
        </button>
      </div>

      {/* Category Pills (TUDO, FÁCIL, MÉDIA, DIFÍCIL) */}
      <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pt-1">
        {categories.map((cat) => {
          const isActive = currentCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setCategory(cat.id)}
              className={`px-5 py-2 text-xs font-black tracking-wider uppercase rounded-full whitespace-nowrap transition-all duration-200 border ${
                isActive
                  ? 'bg-[#E5A967] text-[#070E12] border-[#E5A967] font-bold shadow-md shadow-[#E5A967]/20'
                  : 'bg-[#0E1820] text-white border-white/10 hover:border-white/30'
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
