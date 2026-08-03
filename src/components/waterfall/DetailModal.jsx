import React, { useState } from 'react';
import { 
  ArrowLeft, Share2, Heart, Star, MapPin, Clock, Waves, Footprints, DollarSign, ChevronDown, Navigation 
} from 'lucide-react';

export default function DetailModal({ waterfall, onClose, isSaved, onToggleSave }) {
  const [isExpanded, setIsExpanded] = useState(false);

  if (!waterfall) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex justify-center items-end sm:items-center animate-fade-in overflow-hidden">
      <div className="bg-[#070E12] w-full max-w-[440px] h-[95vh] sm:h-[90vh] rounded-t-[36px] sm:rounded-[36px] overflow-hidden flex flex-col border border-white/10 shadow-2xl relative animate-slide-up">
        
        {/* Top Floating Header Buttons */}
        <div className="absolute top-5 left-5 right-5 z-20 flex items-center justify-between pointer-events-none">
          <button
            onClick={onClose}
            className="p-2.5 rounded-full bg-black/60 backdrop-blur-md text-white border border-white/10 hover:bg-black/80 pointer-events-auto transition-all"
          >
            <ArrowLeft size={18} />
          </button>

          <div className="flex items-center gap-2 pointer-events-auto">
            <button className="p-2.5 rounded-full bg-black/60 backdrop-blur-md text-white border border-white/10 hover:bg-black/80 transition-all">
              <Share2 size={18} />
            </button>
            <button
              onClick={() => onToggleSave(waterfall.id)}
              className={`p-2.5 rounded-full backdrop-blur-md border transition-all ${
                isSaved ? 'bg-[#E5A967] text-[#070E12] border-[#E5A967]' : 'bg-black/60 text-white border-white/10'
              }`}
            >
              <Heart size={18} fill={isSaved ? "currentColor" : "none"} />
            </button>
            <span className="px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-xs font-bold text-white border border-white/10 flex items-center gap-1">
              🥾 {waterfall.difficulty}
            </span>
          </div>
        </div>

        {/* Scrollable Body Content */}
        <div className="flex-1 overflow-y-auto pb-28">
          {/* Hero Image */}
          <div className="relative h-80 w-full">
            <img src={waterfall.image} alt={waterfall.name} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#070E12] via-transparent to-black/40"></div>
          </div>

          {/* Details Content Container */}
          <div className="p-6 space-y-6 -mt-6 relative z-10">
            {/* Title & Rating */}
            <div>
              <h2 className="font-heading font-black text-2xl text-white leading-tight mb-1">
                {waterfall.name}
              </h2>
              <p className="text-xs text-white/70 flex items-center gap-1.5 font-medium">
                <Star size={14} className="text-[#E5A967]" fill="currentColor" />
                <span className="font-bold text-white">{waterfall.rating}</span>
                <span>({waterfall.reviewsCount} avaliações)</span>
                <span>•</span>
                <span>{waterfall.locationName}</span>
              </p>
            </div>

            {/* 4 Metric Grid Cards (2x2) */}
            <div className="grid grid-cols-2 gap-3">
              <div className="glass-card p-4 rounded-2xl bg-[#0E1820] border border-white/10 flex flex-col items-start gap-1">
                <Clock size={20} className="text-[#E5A967]" />
                <span className="text-[10px] text-white/50 font-bold uppercase tracking-wider">Tempo</span>
                <span className="text-sm font-black text-white">{waterfall.trailTime}</span>
              </div>

              <div className="glass-card p-4 rounded-2xl bg-[#0E1820] border border-white/10 flex flex-col items-start gap-1">
                <Waves size={20} className="text-[#E5A967]" />
                <span className="text-[10px] text-white/50 font-bold uppercase tracking-wider">Água</span>
                <span className="text-sm font-black text-white">{waterfall.waterTemp || "Gelada"}</span>
              </div>

              <div className="glass-card p-4 rounded-2xl bg-[#0E1820] border border-white/10 flex flex-col items-start gap-1">
                <Footprints size={20} className="text-[#E5A967]" />
                <span className="text-[10px] text-white/50 font-bold uppercase tracking-wider">Trilha</span>
                <span className="text-sm font-black text-white">{waterfall.trailDistance}</span>
              </div>

              <div className="glass-card p-4 rounded-2xl bg-[#0E1820] border border-white/10 flex flex-col items-start gap-1">
                <DollarSign size={20} className="text-[#E5A967]" />
                <span className="text-[10px] text-white/50 font-bold uppercase tracking-wider">Acesso</span>
                <span className="text-sm font-black text-white">{waterfall.isPaid ? "Pago" : "Gratuito"}</span>
              </div>
            </div>

            {/* Section: Sobre */}
            <div>
              <h3 className="font-heading font-black text-lg text-white mb-2">Sobre</h3>
              <p className={`text-xs text-white/70 leading-relaxed ${isExpanded ? '' : 'line-clamp-4'}`}>
                {waterfall.description}
              </p>
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="mt-1.5 text-xs font-bold text-[#E5A967] flex items-center gap-1 hover:underline"
              >
                <span>{isExpanded ? 'Ler menos' : 'Ler mais'}</span>
                <ChevronDown size={14} className={`transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
              </button>
            </div>

            {/* Section: Localização (Map Card) */}
            <div>
              <h3 className="font-heading font-black text-lg text-white mb-2">Localização</h3>
              <div className="relative rounded-2xl overflow-hidden h-44 border border-white/10 bg-[#0E1820] shadow-inner flex items-center justify-center">
                {/* Topographic Map Canvas Effect */}
                <div className="absolute inset-0 bg-[radial-gradient(#1e3838_1px,transparent_1px)] [background-size:16px_16px] opacity-40"></div>
                
                {/* Pin Center */}
                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-[#E5A967] text-[#070E12] flex items-center justify-center font-bold shadow-lg shadow-[#E5A967]/30 border-2 border-white">
                    <MapPin size={20} />
                  </div>
                  <span className="text-[11px] font-bold text-white mt-1.5 px-2.5 py-0.5 rounded-full bg-black/80 backdrop-blur-md">
                    {waterfall.name}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Floating Sticky Route Button */}
        <div className="absolute bottom-4 left-5 right-5 z-30">
          <a
            href={waterfall.wikilocUrl || `https://www.google.com/maps/search/?api=1&query=${waterfall.lat},${waterfall.lng}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-4 rounded-full bg-[#E5A967] text-[#070E12] font-black text-sm flex items-center justify-center gap-2 shadow-2xl shadow-[#E5A967]/30 hover:bg-[#d69755] transition-all tracking-wider uppercase"
          >
            <Navigation size={18} />
            <span>Iniciar Rota</span>
          </a>
        </div>

      </div>
    </div>
  );
}
