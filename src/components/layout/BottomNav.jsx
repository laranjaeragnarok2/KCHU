import React from 'react';
import { Compass, Map, Heart, User } from 'lucide-react';

export default function BottomNav({ activeTab, setActiveTab }) {
  const navItems = [
    { id: 'explore', icon: Compass },
    { id: 'map', icon: Map },
    { id: 'passport', icon: Heart },
    { id: 'safety', icon: User }
  ];

  return (
    <div className="fixed bottom-5 left-1/2 -translate-x-1/2 w-[90%] max-w-[390px] z-40">
      <nav className="bg-[#0E1820]/95 backdrop-blur-xl rounded-full p-2 border border-white/10 shadow-2xl flex items-center justify-around">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-200 ${
                isActive
                  ? 'bg-[#15232F] text-[#E5A967] ring-2 ring-[#E5A967] shadow-lg shadow-[#E5A967]/20 scale-105'
                  : 'text-white/60 hover:text-white'
              }`}
            >
              <Icon size={22} strokeWidth={isActive ? 2.5 : 1.8} />
            </button>
          );
        })}
      </nav>
    </div>
  );
}
