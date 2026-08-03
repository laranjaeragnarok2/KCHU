import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import { Star, Shield, ArrowRight, X, Navigation } from 'lucide-react';

export default function MapView({ waterfalls, selectedWaterfall, onSelectWaterfall, onOpenDetail }) {
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const markersRef = useRef({});

  useEffect(() => {
    if (!mapRef.current) return;

    if (!mapInstanceRef.current) {
      // Centered around Chapada / Canastra center of Brazil
      const map = L.map(mapRef.current, {
        center: [-16.5000, -46.5000],
        zoom: 6,
        zoomControl: false
      });

      L.control.zoom({ position: 'topright' }).addTo(map);

      // CartoDB Dark Matter tiles
      L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
        maxZoom: 19,
        subdomains: 'abcd'
      }).addTo(map);

      mapInstanceRef.current = map;
    }

    const map = mapInstanceRef.current;

    // Clear old markers
    Object.values(markersRef.current).forEach(marker => map.removeLayer(marker));
    markersRef.current = {};

    // Add Markers for each waterfall
    waterfalls.forEach((wf) => {
      const isSelected = selectedWaterfall?.id === wf.id;

      const customHtml = `
        <div class="custom-waterfall-pin ${isSelected ? 'active' : ''}">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
          </svg>
        </div>
      `;

      const customIcon = L.divIcon({
        html: customHtml,
        className: 'leaflet-custom-pin',
        iconSize: [38, 38],
        iconAnchor: [19, 19]
      });

      const marker = L.marker([wf.lat, wf.lng], { icon: customIcon }).addTo(map);

      marker.on('click', () => {
        onSelectWaterfall(wf);
        map.flyTo([wf.lat, wf.lng], 10, { duration: 1.2 });
      });

      markersRef.current[wf.id] = marker;
    });

  }, [waterfalls, selectedWaterfall]);

  return (
    <div className="relative w-full h-[calc(100vh-140px)] min-h-[500px] overflow-hidden">
      {/* Map Container */}
      <div ref={mapRef} className="w-full h-full" />

      {/* Floating Waterfall Bottom Card Preview when selected */}
      {selectedWaterfall && (
        <div className="absolute bottom-20 left-4 right-4 z-[1000] animate-slide-up">
          <div className="glass-card p-4 relative shadow-2xl border border-[var(--border-gold)]">
            <button
              onClick={() => onSelectWaterfall(null)}
              className="absolute top-3 right-3 p-1.5 rounded-full bg-[var(--bg-main)]/80 text-[var(--text-muted)] hover:text-white"
            >
              <X size={16} />
            </button>

            <div className="flex gap-3">
              <img
                src={selectedWaterfall.image}
                alt={selectedWaterfall.name}
                className="w-24 h-24 rounded-xl object-cover border border-white/10"
              />
              <div className="flex-1 pr-4">
                <div className="flex items-center gap-1.5 mb-1">
                  <span className="badge-tag">{selectedWaterfall.difficulty}</span>
                  <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${
                    selectedWaterfall.safetyStatus.statusColor === 'safe'
                      ? 'bg-emerald-500/20 text-emerald-400'
                      : 'bg-amber-500/20 text-amber-400'
                  }`}>
                    {selectedWaterfall.safetyStatus.waterVolume}
                  </span>
                </div>

                <h3 className="font-heading font-bold text-base text-[var(--text-primary)] leading-tight mb-1">
                  {selectedWaterfall.name}
                </h3>

                <p className="text-xs text-[var(--text-muted)] line-clamp-1 mb-2">
                  {selectedWaterfall.locationName}
                </p>

                <div className="flex items-center justify-between mt-1">
                  <div className="flex items-center gap-1 text-xs text-[var(--accent-gold)]">
                    <Star size={13} fill="currentColor" />
                    <span className="font-bold">{selectedWaterfall.rating}</span>
                    <span className="text-[var(--text-muted)]">({selectedWaterfall.reviewsCount})</span>
                  </div>

                  <button
                    onClick={() => onOpenDetail(selectedWaterfall)}
                    className="gold-gradient-btn px-3 py-1.5 text-xs flex items-center gap-1"
                  >
                    <span>Ver Ficha</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
