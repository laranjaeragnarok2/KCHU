import React, { useState } from 'react';
import { 
  ArrowLeft, Share2, Heart, Star, MapPin, Clock, Waves, Footprints, DollarSign, ChevronDown, Navigation 
} from 'lucide-react';

export default function DetailModal({ waterfall, onClose, onStartRoute, isSaved, onToggleSave }) {
  const [isExpanded, setIsExpanded] = useState(false);

  if (!waterfall) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex justify-center items-end sm:items-center animate-fade-in overflow-hidden">
      <div className="bg-[#051424] w-full max-w-[440px] h-[95vh] sm:h-[90vh] rounded-t-[32px] sm:rounded-[32px] overflow-hidden flex flex-col border border-white/10 shadow-2xl relative animate-slide-up">
        
        {/* Top Floating Header Buttons */}
        <div className="absolute top-5 left-5 right-5 z-20 flex items-center justify-between pointer-events-none">
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full glass-panel flex items-center justify-center text-white hover:text-[#F9BA77] transition-colors pointer-events-auto"
          >
            <ArrowLeft size={18} />
          </button>

          <div className="flex items-center gap-2 pointer-events-auto">
            <button className="w-10 h-10 rounded-full glass-panel flex items-center justify-center text-white hover:text-[#F9BA77] transition-colors">
              <Share2 size={18} />
            </button>
            <button
              onClick={() => onToggleSave(waterfall.id)}
              className={`w-10 h-10 rounded-full glass-panel flex items-center justify-center transition-colors ${
                isSaved ? 'text-[#F9BA77]' : 'text-white hover:text-[#F9BA77]'
              }`}
            >
              <Heart size={18} fill={isSaved ? "currentColor" : "none"} />
            </button>
            <div className="glass-panel px-3 py-1 rounded-full flex items-center gap-1">
              <span className="text-xs font-bold text-white">🥾 {waterfall.difficulty}</span>
            </div>
          </div>
        </div>

        {/* Scrollable Body Content */}
        <div className="flex-1 overflow-y-auto pb-28">
          {/* Hero Image */}
          <div className="relative h-[60vh] w-full">
            <img src={waterfall.image} alt={waterfall.name} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#051424] via-[#051424]/20 to-transparent"></div>
          </div>

          {/* Details Content Container */}
          <div className="p-6 space-y-6 -mt-8 pt-8 relative z-10 bg-[#051424] rounded-t-[32px]">
            {/* Header Block */}
            <div className="flex flex-col gap-1">
              <h1 className="font-heading font-bold text-2xl text-white">
                {waterfall.name}
              </h1>
              <div className="flex items-center gap-2">
                <div className="flex items-center text-[#F9BA77]">
                  <Star size={18} fill="currentColor" />
                  <span className="font-bold text-sm ml-1 text-white">{waterfall.rating}</span>
                </div>
                <span className="text-white/60 text-xs">({waterfall.reviewsCount} avaliações)</span>
                <span className="text-white/60 text-xs">•</span>
                <span className="text-[#F9BA77] text-xs font-bold">{waterfall.locationName}</span>
              </div>
            </div>

            {/* Bento Grid: Technical Data (2x2) */}
            <div className="grid grid-cols-2 gap-3">
              <div className="glass-panel p-3 rounded-xl flex flex-col items-center justify-center text-center gap-1">
                <Clock size={20} className="text-[#F9BA77] mb-1" />
                <span className="text-[11px] text-white/60 font-medium">Tempo</span>
                <span className="text-sm font-bold text-white">{waterfall.trailTime}</span>
              </div>

              <div className="glass-panel p-3 rounded-xl flex flex-col items-center justify-center text-center gap-1">
                <Waves size={20} className="text-[#F9BA77] mb-1" />
                <span className="text-[11px] text-white/60 font-medium">Água</span>
                <span className="text-sm font-bold text-white">{waterfall.waterTemp || "Gelada"}</span>
              </div>

              <div className="glass-panel p-3 rounded-xl flex flex-col items-center justify-center text-center gap-1">
                <Footprints size={20} className="text-[#F9BA77] mb-1" />
                <span className="text-[11px] text-white/60 font-medium">Trilha</span>
                <span className="text-sm font-bold text-white">{waterfall.trailDistance}</span>
              </div>

              <div className="glass-panel p-3 rounded-xl flex flex-col items-center justify-center text-center gap-1">
                <DollarSign size={20} className="text-[#F9BA77] mb-1" />
                <span className="text-[11px] text-white/60 font-medium">Acesso</span>
                <span className="text-sm font-bold text-white">{waterfall.isPaid ? "Pago" : "Gratuito"}</span>
              </div>
            </div>

            {/* Description */}
            <div className="flex flex-col gap-2">
              <h2 className="font-heading font-bold text-xl text-white">Sobre</h2>
              <p className={`text-sm text-white/70 leading-relaxed ${isExpanded ? '' : 'line-clamp-4'}`}>
                {waterfall.description}
              </p>
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="text-[#F9BA77] text-xs font-bold self-start mt-1 flex items-center gap-1 hover:opacity-80 transition-opacity"
              >
                <span>{isExpanded ? 'Ler menos' : 'Ler mais'}</span>
                <ChevronDown size={16} className={`transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
              </button>
            </div>

            {/* Map Location */}
            <div className="flex flex-col gap-2">
              <h2 className="font-heading font-bold text-xl text-white">Localização</h2>
              <div className="w-full h-48 rounded-[24px] glass-panel overflow-hidden relative group cursor-pointer flex items-center justify-center">
                <div className="w-full h-full bg-cover bg-center opacity-80 group-hover:opacity-100 transition-opacity" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=800&q=80')` }}></div>
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-12 h-12 bg-[#F9BA77]/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-[#F9BA77]/50">
                    <MapPin size={24} className="text-[#F9BA77]" fill="currentColor" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Action Button (Iniciar Rota) */}
        <div className="fixed bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-[#051424] via-[#051424]/90 to-transparent z-50 flex justify-center">
          <button
            onClick={() => onStartRoute(waterfall)}
            className="w-full max-w-xs bg-[#F9BA77] text-[#051424] font-heading font-bold text-base py-4 rounded-full flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(249,186,119,0.3)] hover:scale-[1.02] active:scale-95 transition-transform"
          >
            <Navigation size={20} />
            <span>Iniciar Rota</span>
          </button>
        </div>

      </div>
    </div>
  );
}
