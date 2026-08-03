import React from 'react';
import { Compass, Map, Bookmark, ShieldCheck } from 'lucide-react';

export default function BottomNav({ activeTab, setActiveTab, savedCount }) {
  const navItems = [
    { id: 'explore', label: 'Explorar', icon: Compass },
    { id: 'map', label: 'Mapa', icon: Map },
    { id: 'passport', label: 'Passaporte', icon: Bookmark, badge: savedCount },
    { id: 'safety', label: 'Segurança', icon: ShieldCheck }
  ];

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 w-[92%] max-w-[440px] z-40">
      <nav className="glass-panel rounded-3xl p-2 shadow-2xl shadow-black/80 flex items-center justify-around border border-white/10">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`relative flex flex-col items-center gap-1 px-4 py-2 rounded-2xl transition-all duration-200 ${
                isActive
                  ? 'bg-[var(--accent-gold)] text-[#0C1818] font-bold scale-105 shadow-md shadow-[var(--accent-gold-glow)]'
                  : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
              }`}
            >
              <Icon size={20} strokeWidth={isActive ? 2.5 : 1.8} />
              <span className="text-[11px] tracking-tight">{item.label}</span>

              {item.badge > 0 && !isActive && (
                <span className="absolute top-1 right-2 w-4 h-4 bg-[var(--accent-gold)] text-[#0C1818] font-bold text-[9px] rounded-full flex items-center justify-center">
                  {item.badge}
                </span>
              )}
            </button>
          );
        })}
      </nav>
    </div>
  );
}
