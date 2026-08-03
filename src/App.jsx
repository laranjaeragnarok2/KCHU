import React, { useState, useMemo, useEffect } from 'react';
import TopHeader from './components/layout/TopHeader';
import BottomNav from './components/layout/BottomNav';
import MapView from './components/map/MapView';
import WaterfallCard from './components/waterfall/WaterfallCard';
import DetailModal from './components/waterfall/DetailModal';
import FilterModal from './components/filter/FilterModal';
import { WATERFALLS_DATA } from './data/waterfalls';
import { Award, CheckCircle2, Bookmark, ShieldCheck, Phone } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('explore'); // 'explore', 'map', 'passport', 'safety'
  const [searchQuery, setSearchQuery] = useState('');
  const [currentCategory, setCategory] = useState('all');
  const [selectedWaterfall, setSelectedWaterfall] = useState(null);
  const [mapSelectedWaterfall, setMapSelectedWaterfall] = useState(null);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // LocalStorage state for Saved & Check-ins
  const [savedIds, setSavedIds] = useState(() => {
    const local = localStorage.getItem('kchu_saved');
    return local ? JSON.parse(local) : ['santa-barbara'];
  });

  const [visitedIds, setVisitedIds] = useState(() => {
    const local = localStorage.getItem('kchu_visited');
    return local ? JSON.parse(local) : ['santa-barbara'];
  });

  // Filters State
  const [filters, setFilters] = useState({
    difficulty: 'Todas',
    canSwim: false,
    freeOnly: false,
    wikilocOnly: false
  });

  useEffect(() => {
    localStorage.setItem('kchu_saved', JSON.stringify(savedIds));
  }, [savedIds]);

  useEffect(() => {
    localStorage.setItem('kchu_visited', JSON.stringify(visitedIds));
  }, [visitedIds]);

  const toggleSave = (id) => {
    setSavedIds(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const toggleCheckin = (id) => {
    setVisitedIds(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  // Filtered Waterfalls
  const filteredWaterfalls = useMemo(() => {
    return WATERFALLS_DATA.filter((wf) => {
      // Search
      const query = searchQuery.toLowerCase();
      const matchesSearch =
        wf.name.toLowerCase().includes(query) ||
        wf.locationName.toLowerCase().includes(query) ||
        wf.description.toLowerCase().includes(query);

      if (!matchesSearch) return false;

      // Category Chip Filter
      if (currentCategory === 'easy' && wf.difficulty !== 'Fácil') return false;
      if (currentCategory === 'medium' && wf.difficulty !== 'Média' && wf.difficulty !== 'Médio') return false;
      if (currentCategory === 'hard' && wf.difficulty !== 'Difícil') return false;

      // Modal Difficulty
      if (filters.difficulty !== 'Todas' && wf.difficulty !== filters.difficulty) {
        return false;
      }

      // Swimming
      if (filters.canSwim && !wf.canSwim) return false;

      // Free Only
      if (filters.freeOnly && wf.isPaid) return false;

      return true;
    });
  }, [searchQuery, currentCategory, filters]);

  const featuredWaterfall = useMemo(() => {
    return filteredWaterfalls.find(wf => wf.isFeatured) || filteredWaterfalls[0];
  }, [filteredWaterfalls]);

  const secondaryWaterfalls = useMemo(() => {
    if (!featuredWaterfall) return filteredWaterfalls;
    return filteredWaterfalls.filter(wf => wf.id !== featuredWaterfall.id);
  }, [filteredWaterfalls, featuredWaterfall]);

  const activeFiltersCount = useMemo(() => {
    let count = 0;
    if (filters.difficulty !== 'Todas') count++;
    if (filters.canSwim) count++;
    if (filters.freeOnly) count++;
    if (currentCategory !== 'all') count++;
    return count;
  }, [filters, currentCategory]);

  const resetFilters = () => {
    setCategory('all');
    setFilters({
      difficulty: 'Todas',
      canSwim: false,
      freeOnly: false,
      wikilocOnly: false
    });
  };

  return (
    <div className="relative min-h-screen bg-[#0B1515] text-white pb-24 flex flex-col font-body">
      {/* Top Header */}
      <TopHeader
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        onOpenFilter={() => setIsFilterOpen(true)}
        activeFiltersCount={activeFiltersCount}
        currentCategory={currentCategory}
        setCategory={setCategory}
      />

      {/* Main Content Body */}
      <main className="flex-1 max-w-[480px] mx-auto w-full">
        {/* TAB 1: EXPLORAR (Feed estilo Stitch Imagem 1) */}
        {activeTab === 'explore' && (
          <div className="p-4 space-y-6 animate-fade-in">
            
            {/* Section 1: Destaque da Semana */}
            {featuredWaterfall && (
              <div>
                <h2 className="font-heading font-black text-xl text-white mb-3">
                  Destaque da Semana
                </h2>
                <WaterfallCard
                  waterfall={featuredWaterfall}
                  onOpenDetail={(item) => setSelectedWaterfall(item)}
                  isSaved={savedIds.includes(featuredWaterfall.id)}
                  onToggleSave={toggleSave}
                  isCompact={false}
                />
              </div>
            )}

            {/* Section 2: Continuar Explorando (Compact List Cards) */}
            {secondaryWaterfalls.length > 0 && (
              <div>
                <h2 className="font-heading font-black text-xl text-white mb-3">
                  Continuar Explorando
                </h2>
                <div className="space-y-3">
                  {secondaryWaterfalls.map((wf) => (
                    <WaterfallCard
                      key={wf.id}
                      waterfall={wf}
                      onOpenDetail={(item) => setSelectedWaterfall(item)}
                      isSaved={savedIds.includes(wf.id)}
                      onToggleSave={toggleSave}
                      isCompact={true}
                    />
                  ))}
                </div>
              </div>
            )}

            {filteredWaterfalls.length === 0 && (
              <div className="glass-card p-8 text-center space-y-3 my-6">
                <p className="text-sm font-semibold text-white/70">Nenhuma cachoeira encontrada com esses filtros.</p>
                <button onClick={resetFilters} className="gold-gradient-btn px-4 py-2 text-xs font-bold">
                  Resetar Filtros
                </button>
              </div>
            )}
          </div>
        )}

        {/* TAB 2: MAPA */}
        {activeTab === 'map' && (
          <div className="animate-fade-in">
            <MapView
              waterfalls={filteredWaterfalls}
              selectedWaterfall={mapSelectedWaterfall}
              onSelectWaterfall={setMapSelectedWaterfall}
              onOpenDetail={(item) => setSelectedWaterfall(item)}
            />
          </div>
        )}

        {/* TAB 3: PASSAPORTE (Salvas e Check-ins) */}
        {activeTab === 'passport' && (
          <div className="p-4 space-y-5 animate-fade-in">
            <div className="glass-card p-5 border border-[#E5A967]/30 text-center relative overflow-hidden shadow-2xl">
              <div className="w-14 h-14 rounded-2xl bg-[#E5A967] text-[#0B1515] flex items-center justify-center mx-auto mb-2 shadow-lg shadow-[#E5A967]/20 font-black">
                <Award size={28} />
              </div>
              <h2 className="font-heading font-black text-xl text-white">
                Seu Passaporte kCHU
              </h2>
              <p className="text-xs text-white/60 mt-1 mb-3">
                Conquiste selos ao fazer check-in nas cachoeiras visitadas!
              </p>

              <div className="grid grid-cols-2 gap-2 text-left pt-3 border-t border-white/10">
                <div className="p-3 rounded-2xl bg-black/40 border border-white/5">
                  <span className="text-[9px] font-bold text-white/50 uppercase block tracking-wider">Check-ins Feitos</span>
                  <span className="text-lg font-black text-emerald-400">{visitedIds.length} Cachoeiras</span>
                </div>
                <div className="p-3 rounded-2xl bg-black/40 border border-white/5">
                  <span className="text-[9px] font-bold text-white/50 uppercase block tracking-wider">Salvas na Lista</span>
                  <span className="text-lg font-black text-[#E5A967]">{savedIds.length} Salvas</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-heading font-black text-base text-white mb-3 flex items-center gap-2">
                <CheckCircle2 size={18} className="text-emerald-400" />
                <span>Cachoeiras Visitadas ({visitedIds.length})</span>
              </h3>
              <div className="space-y-3">
                {WATERFALLS_DATA.filter(wf => visitedIds.includes(wf.id)).map(wf => (
                  <WaterfallCard
                    key={wf.id}
                    waterfall={wf}
                    onOpenDetail={(item) => setSelectedWaterfall(item)}
                    isSaved={savedIds.includes(wf.id)}
                    onToggleSave={toggleSave}
                    isCompact={true}
                  />
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: SEGURANÇA */}
        {activeTab === 'safety' && (
          <div className="p-4 space-y-4 animate-fade-in">
            <div className="glass-card p-5 border border-amber-500/30 shadow-2xl">
              <div className="flex items-center gap-2 text-amber-400 font-bold text-base mb-2">
                <ShieldCheck size={20} />
                <span>Central de Segurança do Trilheiro</span>
              </div>
              <p className="text-xs text-white/70 leading-relaxed">
                Boletins meteorológicos para cabeceiras e orientações para prevenção de tromba d'água.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="font-heading font-black text-sm text-white">Telefones de Emergência</h3>
              <div className="glass-card p-4 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-sm text-white">Corpo de Bombeiros</h4>
                  <p className="text-xs text-white/50">Resgate em trilhas e rios</p>
                </div>
                <a href="tel:193" className="py-2 px-4 rounded-full bg-[#E5A967] text-[#0B1515] font-black text-xs">
                  193
                </a>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Floating Bottom Navigation */}
      <BottomNav
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        savedCount={savedIds.length}
      />

      {/* Waterfall Detail Modal */}
      {selectedWaterfall && (
        <DetailModal
          waterfall={selectedWaterfall}
          onClose={() => setSelectedWaterfall(null)}
          isSaved={savedIds.includes(selectedWaterfall.id)}
          onToggleSave={toggleSave}
        />
      )}

      {/* Filter Modal */}
      <FilterModal
        isOpen={isFilterOpen}
        onClose={() => setIsFilterOpen(false)}
        filters={filters}
        setFilters={setFilters}
        onResetFilters={resetFilters}
      />
    </div>
  );
}
