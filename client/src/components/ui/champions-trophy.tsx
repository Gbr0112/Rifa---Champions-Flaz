export function ChampionsTrophy() {
  return (
    <div className="relative inline-block mb-8">
      <div className="animate-trophy-glow">
        <div className="w-40 h-56 mx-auto bg-gradient-gold rounded-2xl shadow-2xl animate-float flex items-center justify-center relative overflow-hidden border-4 border-yellow-300">
          {/* Champions League Trophy SVG */}
          <svg 
            className="w-24 h-36 text-gray-800" 
            viewBox="0 0 100 120" 
            fill="currentColor"
          >
            {/* Trophy Base - Multiple Layers */}
            <ellipse cx="50" cy="110" rx="20" ry="4" fill="#8B4513" />
            <rect x="30" y="106" width="40" height="8" rx="2" fill="#CD853F" />
            <rect x="35" y="102" width="30" height="6" rx="1" fill="#DAA520" />
            
            {/* Trophy Stem */}
            <rect x="48" y="85" width="4" height="17" fill="#8B4513" />
            <rect x="46" y="88" width="8" height="2" rx="1" fill="#CD853F" />
            
            {/* Main Trophy Bowl */}
            <path d="M25 25 Q25 15 35 15 L65 15 Q75 15 75 25 L75 70 Q75 80 65 80 L35 80 Q25 80 25 70 Z" fill="#FFD700" />
            
            {/* Trophy Bowl Inner Shadow */}
            <path d="M30 25 Q30 20 35 20 L65 20 Q70 20 70 25 L70 70 Q70 75 65 75 L35 75 Q30 75 30 70 Z" fill="#FFA500" />
            
            {/* Trophy Handles */}
            <path d="M20 35 Q12 35 12 42 Q12 48 20 48 L25 48 L25 35 Z" fill="#DAA520" />
            <path d="M80 35 Q88 35 88 42 Q88 48 80 48 L75 48 L75 35 Z" fill="#DAA520" />
            
            {/* Handle Details */}
            <path d="M18 35 Q14 35 14 42 Q14 48 18 48 L22 48 L22 35 Z" fill="#FFD700" />
            <path d="M82 35 Q86 35 86 42 Q86 48 82 48 L78 48 L78 35 Z" fill="#FFD700" />
            
            {/* Champions League Stars Pattern */}
            <circle cx="50" cy="30" r="2" fill="white" />
            <circle cx="42" cy="35" r="1.5" fill="white" />
            <circle cx="58" cy="35" r="1.5" fill="white" />
            <circle cx="38" cy="42" r="1" fill="white" />
            <circle cx="62" cy="42" r="1" fill="white" />
            <circle cx="45" cy="48" r="1" fill="white" />
            <circle cx="55" cy="48" r="1" fill="white" />
            <circle cx="40" cy="55" r="1" fill="white" />
            <circle cx="60" cy="55" r="1" fill="white" />
            <circle cx="50" cy="62" r="1.5" fill="white" />
            
            {/* Trophy Rim */}
            <ellipse cx="50" cy="20" rx="25" ry="5" fill="#FFD700" />
            <ellipse cx="50" cy="18" rx="23" ry="4" fill="#FFFF00" />
            
            {/* Central Champions Text Area */}
            <rect x="40" y="38" width="20" height="25" rx="2" fill="rgba(255,255,255,0.3)" />
          </svg>
          
          {/* Multiple Shine Effects */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20 animate-pulse"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-transparent opacity-10"></div>
        </div>
      </div>
      
      {/* Enhanced Glow Effects */}
      <div className="absolute -inset-6 bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400 rounded-full opacity-20 animate-pulse-gold"></div>
      <div className="absolute -inset-3 bg-gradient-to-r from-orange-400 via-yellow-400 to-orange-400 rounded-full opacity-15 animate-pulse-gold" style={{animationDelay: '0.5s'}}></div>
      
      {/* Champions Text */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-4">
        <div className="text-xs font-bold text-yellow-400 tracking-wider">CHAMPIONS</div>
      </div>
    </div>
  );
}
