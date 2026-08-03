import React, { useState } from 'react';
import { ArrowLeft, MoreVertical, Plus, Minus, Navigation, Pause, Play, Compass, Mountain, Clock } from 'lucide-react';

export default function ActiveNavigationModal({ waterfall, onClose }) {
  const [isNavigating, setIsNavigating] = useState(true);

  if (!waterfall) return null;

  return (
    <div className="fixed inset-0 z-50 bg-[#051424] animate-fade-in flex flex-col justify-between overflow-hidden">
      {/* Fullscreen Map Canvas */}
      <div className="absolute inset-0 z-0">
        {/* Topo Map Background */}
        <div 
          className="w-full h-full bg-cover bg-center opacity-80 mix-blend-luminosity"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1200&q=80')` }}
        ></div>
        <div className="absolute inset-0 bg-[#051424]/60"></div>
      </div>

      {/* SVG Animated Trail Overlay */}
      <svg className="absolute inset-0 w-full h-full z-10 pointer-events-none" preserveAspectRatio="xMidYMid slice" viewBox="0 0 1000 1000">
        <path 
          className="trail-path drop-shadow-[0_0_8px_rgba(249,186,119,0.8)]" 
          d="M350,650 Q 420,580 480,480 T 620,320 Q 670,260 720,200" 
          fill="none" 
          stroke="#F9BA77" 
          strokeWidth="6" 
          strokeLinecap="round"
        />
      </svg>

      {/* Pulsing Current Location Marker */}
      <div className="absolute top-[65%] left-[35%] z-20 -translate-x-1/2 -translate-y-1/2">
        <div className="pulse-marker shadow-[0_0_20px_rgba(249,186,119,0.8)]"></div>
      </div>

      {/* Destination Marker */}
      <div className="absolute top-[20%] left-[72%] -translate-x-1/2 -translate-y-full z-20 flex flex-col items-center">
        <div className="glass-panel px-3 py-1 rounded-full mb-1 flex items-center gap-1">
          <span className="text-[11px] font-bold text-[#F9BA77]">Destino</span>
        </div>
        <div className="w-8 h-8 rounded-full bg-[#F9BA77] text-[#051424] flex items-center justify-center font-black shadow-[0_0_15px_rgba(249,186,119,0.8)]">
          <Navigation size={18} fill="currentColor" />
        </div>
      </div>

      {/* Header Bar */}
      <header className="relative z-30 flex items-center justify-between px-4 py-4 glass-panel rounded-b-[24px] border-t-0 border-x-0">
        <button 
          onClick={onClose}
          className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
        >
          <ArrowLeft size={18} />
        </button>

        <div className="flex-1 text-center px-4">
          <h1 className="font-heading font-black text-lg text-white truncate">{waterfall.name}</h1>
          <p className="text-xs font-bold text-[#F9BA77] mt-0.5">Navegação Ativa</p>
        </div>

        <button className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors">
          <MoreVertical size={18} />
        </button>
      </header>

      {/* Floating Map Controls (Right Side) */}
      <div className="fixed right-4 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-30">
        <div className="glass-panel rounded-full flex flex-col overflow-hidden">
          <button className="w-11 h-11 flex items-center justify-center text-white hover:bg-white/10 border-b border-white/10">
            <Plus size={18} />
          </button>
          <button className="w-11 h-11 flex items-center justify-center text-white hover:bg-white/10">
            <Minus size={18} />
          </button>
        </div>
        <button className="w-11 h-11 rounded-full glass-panel flex items-center justify-center text-[#F9BA77] hover:bg-white/10">
          <Compass size={18} />
        </button>
      </div>

      {/* Bottom Navigation Metrics Panel */}
      <div className="relative z-30 p-4 pb-8">
        <div className="glass-panel rounded-[28px] p-5 w-full max-w-md mx-auto relative overflow-hidden shadow-[0_12px_32px_rgba(0,0,0,0.8)] border border-[#F9BA77]/30">
          {/* Primary Metric */}
          <div className="flex items-end justify-between mb-5">
            <div>
              <p className="text-[10px] font-bold text-white/60 uppercase tracking-wider mb-0.5">Distância Restante</p>
              <div className="flex items-baseline gap-1">
                <span className="font-heading font-black text-4xl text-white">2.4</span>
                <span className="text-sm font-bold text-[#F9BA77]">km</span>
              </div>
            </div>

            {/* Pause / Resume FAB Button */}
            <button 
              onClick={() => setIsNavigating(!isNavigating)}
              className="w-14 h-14 rounded-full bg-[#F9BA77] text-[#051424] flex items-center justify-center shadow-[0_0_20px_rgba(249,186,119,0.5)] hover:scale-95 transition-transform active:scale-90 font-black"
            >
              {isNavigating ? <Pause size={24} fill="currentColor" /> : <Play size={24} fill="currentColor" />}
            </button>
          </div>

          {/* Secondary Metrics Grid */}
          <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-[#F9BA77]">
                <Mountain size={20} />
              </div>
              <div>
                <p className="text-[10px] font-bold text-white/50 uppercase">Elevação</p>
                <p className="text-sm font-bold text-white">+85m</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-[#F9BA77]">
                <Clock size={20} />
              </div>
              <div>
                <p className="text-[10px] font-bold text-white/50 uppercase">Tempo Est.</p>
                <p className="text-sm font-bold text-white">45 min</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
