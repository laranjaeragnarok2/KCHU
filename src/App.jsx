import React, { useState, useMemo, useEffect } from 'react';
import TopHeader from './components/layout/TopHeader';
import BottomNav from './components/layout/BottomNav';
import MapView from './components/map/MapView';
import WaterfallCard from './components/waterfall/WaterfallCard';
import DetailModal from './components/waterfall/DetailModal';
import FilterModal from './components/filter/FilterModal';
import { WATERFALLS_DATA } from './data/waterfalls';
import { Compass, Bookmark, ShieldCheck, Award, MapPin, CheckCircle2, AlertTriangle, Phone, Sparkles } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('explore'); // 'explore', 'map', 'passport', 'safety'
  const [searchQuery, setSearchQuery] = useState('');
  const [currentCategory, setCategory] = useState('all');
  const [selectedWaterfall, setSelectedWaterfall] = useState(null);
  const [mapSelectedWaterfall, setMapSelectedWaterfall] = useState(null);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isOffline, setIsOffline] = useState(!navigator.onLine);

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

  useEffect(() => {
    const handleOnline = () => setIsOffline(false);
    const handleOffline = () => setIsOffline(true);
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

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
      if (currentCategory === 'medium' && wf.difficulty !== 'Médio') return false;
      if (currentCategory === 'hard' && wf.difficulty !== 'Difícil') return false;
      if (currentCategory === 'free' && wf.isPaid) return false;
      if (currentCategory === 'wikiloc' && !wf.wikilocId) return false;

      // Modal Difficulty
      if (filters.difficulty !== 'Todas' && wf.difficulty !== filters.difficulty) {
        return false;
      }

      // Swimming
      if (filters.canSwim && !wf.canSwim) return false;

      // Free Only
      if (filters.freeOnly && wf.isPaid) return false;

      // Wikiloc
      if (filters.wikilocOnly && !wf.wikilocId) return false;

      return true;
    });
  }, [searchQuery, currentCategory, filters]);

  const activeFiltersCount = useMemo(() => {
    let count = 0;
    if (filters.difficulty !== 'Todas') count++;
    if (filters.canSwim) count++;
    if (filters.freeOnly) count++;
    if (filters.wikilocOnly) count++;
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
    <div className="relative min-h-screen bg-[var(--bg-main)] text-[var(--text-primary)] pb-24 flex flex-col font-body">
      {/* Top Header */}
      <TopHeader
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        onOpenFilter={() => setIsFilterOpen(true)}
        activeFiltersCount={activeFiltersCount}
        isOffline={isOffline}
        currentCategory={currentCategory}
        setCategory={setCategory}
      />

      {/* Main Content Body */}
      <main className="flex-1">
        {/* TAB 1: EXPLORAR (Feed de Cards & Destaques) */}
        {activeTab === 'explore' && (
          <div className="p-4 space-y-5 animate-fade-in max-w-[480px] mx-auto w-full">
            
            {/* Hero Welcome Banner */}
            <div className="relative rounded-3xl overflow-hidden p-5 bg-gradient-to-br from-[#182E2E] to-[#0F1E1E] border border-[var(--border-gold)] shadow-2xl">
              <div className="absolute top-0 right-0 p-4 opacity-10 text-[var(--accent-gold)] pointer-events-none">
                <Sparkles size={130} />
              </div>
              <span className="text-[10px] font-black uppercase tracking-widest text-[var(--accent-gold)] px-3 py-1 rounded-full bg-[var(--accent-gold-glow)] inline-block mb-2 border border-[var(--border-gold)]">
                Descubra o Inexplorado
              </span>
              <h2 className="font-heading font-black text-2xl text-white leading-tight mb-1">
                Explore as Melhores Cachoeiras do Brasil
              </h2>
              <p className="text-xs text-[var(--text-secondary)] mb-3 leading-relaxed">
                Trilhas salvas via Wikiloc, altimetria, volume de água em tempo real e sinal de celular.
              </p>
              <div className="flex items-center gap-2 text-xs font-semibold">
                <span className="text-[var(--accent-gold)]">{WATERFALLS_DATA.length} Cachoeiras Mapeadas</span>
                <span className="text-[var(--text-muted)]">•</span>
                <span className="text-emerald-400">{visitedIds.length} Visitações</span>
              </div>
            </div>

            {/* Section Header */}
            <div className="flex items-center justify-between pt-1">
              <h3 className="font-heading font-black text-base text-white tracking-tight">
                {searchQuery || currentCategory !== 'all' ? `Resultados (${filteredWaterfalls.length})` : 'Próximas de Você'}
              </h3>
              {activeFiltersCount > 0 && (
                <button onClick={resetFilters} className="text-xs font-bold text-[var(--accent-gold)] hover:underline">
                  Limpar Filtros
                </button>
              )}
            </div>

            {/* Cards List */}
            {filteredWaterfalls.length > 0 ? (
              <div className="space-y-4">
                {filteredWaterfalls.map((wf) => (
                  <WaterfallCard
                    key={wf.id}
                    waterfall={wf}
                    onOpenDetail={(item) => setSelectedWaterfall(item)}
                    isSaved={savedIds.includes(wf.id)}
                    onToggleSave={toggleSave}
                  />
                ))}
              </div>
            ) : (
              <div className="glass-card p-8 text-center space-y-3 my-6">
                <p className="text-sm font-semibold text-[var(--text-secondary)]">Nenhuma cachoeira encontrada com esses filtros.</p>
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
          <div className="p-4 space-y-5 animate-fade-in max-w-[480px] mx-auto w-full">
            {/* Passport Banner */}
            <div className="glass-card p-5 border border-[var(--border-gold)] text-center relative overflow-hidden shadow-2xl">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[var(--accent-gold)] to-[var(--accent-gold-dark)] flex items-center justify-center mx-auto mb-2 text-[#0C1818] shadow-lg shadow-[var(--accent-gold-glow)]">
                <Award size={28} />
              </div>
              <h2 className="font-heading font-black text-xl text-white">
                Seu Passaporte kCHU
              </h2>
              <p className="text-xs text-[var(--text-secondary)] mt-1 mb-3">
                Conquiste selos ao fazer check-in nas cachoeiras visitadas!
              </p>

              <div className="grid grid-cols-2 gap-2 text-left pt-3 border-t border-[var(--border-subtle)]">
                <div className="p-3 rounded-2xl bg-black/40 border border-white/5">
                  <span className="text-[9px] font-bold text-[var(--text-muted)] uppercase block tracking-wider">Check-ins Feitos</span>
                  <span className="text-lg font-black text-emerald-400">{visitedIds.length} Cachoeiras</span>
                </div>
                <div className="p-3 rounded-2xl bg-black/40 border border-white/5">
                  <span className="text-[9px] font-bold text-[var(--text-muted)] uppercase block tracking-wider">Salvas na Lista</span>
                  <span className="text-lg font-black text-[var(--accent-gold)]">{savedIds.length} Salvas</span>
                </div>
              </div>
            </div>

            {/* Visited Check-ins Section */}
            <div>
              <h3 className="font-heading font-black text-base text-white mb-3 flex items-center gap-2">
                <CheckCircle2 size={18} className="text-emerald-400" />
                <span>Cachoeiras Visitadas ({visitedIds.length})</span>
              </h3>
              <div className="space-y-3">
                {WATERFALLS_DATA.filter(wf => visitedIds.includes(wf.id)).map(wf => (
                  <div key={wf.id} onClick={() => setSelectedWaterfall(wf)} className="glass-card p-3 flex items-center gap-3 cursor-pointer hover:border-[var(--border-gold)] transition-colors">
                    <img src={wf.image} alt={wf.name} className="w-14 h-14 rounded-xl object-cover" />
                    <div className="flex-1">
                      <h4 className="font-bold text-sm text-white">{wf.name}</h4>
                      <p className="text-xs text-[var(--text-secondary)]">{wf.locationName}</p>
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-[10px] font-bold border border-emerald-500/30">
                      Selo Conquistado
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Saved List Section */}
            <div>
              <h3 className="font-heading font-black text-base text-white mb-3 flex items-center gap-2">
                <Bookmark size={18} className="text-[var(--accent-gold)]" />
                <span>Lista de Desejos ({savedIds.length})</span>
              </h3>
              <div className="space-y-3">
                {WATERFALLS_DATA.filter(wf => savedIds.includes(wf.id)).map(wf => (
                  <div key={wf.id} onClick={() => setSelectedWaterfall(wf)} className="glass-card p-3 flex items-center gap-3 cursor-pointer hover:border-[var(--border-gold)] transition-colors">
                    <img src={wf.image} alt={wf.name} className="w-14 h-14 rounded-xl object-cover" />
                    <div className="flex-1">
                      <h4 className="font-bold text-sm text-white">{wf.name}</h4>
                      <p className="text-xs text-[var(--text-secondary)]">{wf.locationName}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: SEGURANÇA */}
        {activeTab === 'safety' && (
          <div className="p-4 space-y-4 animate-fade-in max-w-[480px] mx-auto w-full">
            <div className="glass-card p-5 border border-amber-500/30 shadow-2xl">
              <div className="flex items-center gap-2 text-amber-400 font-bold text-base mb-2">
                <ShieldCheck size={20} />
                <span>Central de Segurança do Trilheiro</span>
              </div>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Alertas automáticos de volume de rio, boletins meteorológicos para cabeceiras e orientações para prevenção de tromba d'água.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="font-heading font-black text-sm text-white">Telefones de Emergência Nacional</h3>
              
              <div className="glass-card p-3.5 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-sm text-white">Corpo de Bombeiros</h4>
                  <p className="text-xs text-[var(--text-secondary)]">Resgate em trilhas e rios</p>
                </div>
                <a href="tel:193" className="gold-gradient-btn px-4 py-2 text-xs flex items-center gap-1.5">
                  <Phone size={14} />
                  <span>193</span>
                </a>
              </div>

              <div className="glass-card p-3.5 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-sm text-white">Defesa Civil</h4>
                  <p className="text-xs text-[var(--text-secondary)]">Alertas de enxurrada e chuvas</p>
                </div>
                <a href="tel:199" className="gold-gradient-btn px-4 py-2 text-xs flex items-center gap-1.5">
                  <Phone size={14} />
                  <span>199</span>
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
          isVisited={visitedIds.includes(selectedWaterfall.id)}
          onToggleCheckin={toggleCheckin}
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
