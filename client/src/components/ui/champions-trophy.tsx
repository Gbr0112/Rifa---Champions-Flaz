export function ChampionsTrophy() {
  return (
    <div className="relative inline-block mb-8">
      <div className="animate-trophy-glow">
        <div className="w-48 h-64 mx-auto bg-gradient-to-b from-yellow-100 via-yellow-300 to-yellow-600 rounded-3xl shadow-2xl animate-float flex items-center justify-center relative overflow-hidden border-4 border-yellow-400">
          {/* Ultra Realistic Champions League Trophy SVG */}
          <svg 
            className="w-32 h-48 text-gray-800" 
            viewBox="0 0 120 160" 
            fill="currentColor"
          >
            {/* Trophy Base - Multiple Detailed Layers */}
            <ellipse cx="60" cy="150" rx="28" ry="6" fill="#654321" />
            <rect x="32" y="146" width="56" height="10" rx="3" fill="#8B4513" />
            <rect x="36" y="142" width="48" height="8" rx="2" fill="#CD853F" />
            <rect x="40" y="138" width="40" height="6" rx="1" fill="#DAA520" />
            <rect x="44" y="134" width="32" height="6" rx="1" fill="#FFD700" />
            
            {/* Trophy Stem with Details */}
            <rect x="57" y="110" width="6" height="24" fill="#8B4513" />
            <rect x="55" y="115" width="10" height="3" rx="1" fill="#CD853F" />
            <rect x="55" y="125" width="10" height="3" rx="1" fill="#CD853F" />
            
            {/* Main Trophy Bowl - More Realistic Shape */}
            <path d="M30 30 Q30 18 42 18 L78 18 Q90 18 90 30 L90 85 Q90 95 78 95 L42 95 Q30 95 30 85 Z" fill="#FFD700" />
            
            {/* Trophy Bowl Inner Gradient */}
            <path d="M35 30 Q35 23 42 23 L78 23 Q85 23 85 30 L85 85 Q85 90 78 90 L42 90 Q35 90 35 85 Z" fill="#FFA500" />
            <path d="M40 30 Q40 26 42 26 L78 26 Q80 26 80 30 L80 85 Q80 87 78 87 L42 87 Q40 87 40 85 Z" fill="#FFB84D" />
            
            {/* Trophy Handles - More Elegant */}
            <path d="M25 45 Q15 45 15 55 Q15 65 25 65 L30 65 L30 45 Z" fill="#DAA520" />
            <path d="M95 45 Q105 45 105 55 Q105 65 95 65 L90 65 L90 45 Z" fill="#DAA520" />
            
            {/* Handle Inner Details */}
            <path d="M22 47 Q17 47 17 55 Q17 63 22 63 L28 63 L28 47 Z" fill="#FFD700" />
            <path d="M98 47 Q103 47 103 55 Q103 63 98 63 L92 63 L92 47 Z" fill="#FFD700" />
            
            {/* Decorative Handle Elements */}
            <circle cx="20" cy="55" r="2" fill="#FFFF00" />
            <circle cx="100" cy="55" r="2" fill="#FFFF00" />
            
            {/* UEFA Champions League Stars Pattern */}
            <circle cx="60" cy="35" r="3" fill="white" />
            <circle cx="48" cy="42" r="2" fill="white" />
            <circle cx="72" cy="42" r="2" fill="white" />
            <circle cx="44" cy="52" r="1.5" fill="white" />
            <circle cx="76" cy="52" r="1.5" fill="white" />
            <circle cx="52" cy="62" r="1.5" fill="white" />
            <circle cx="68" cy="62" r="1.5" fill="white" />
            <circle cx="46" cy="72" r="1" fill="white" />
            <circle cx="74" cy="72" r="1" fill="white" />
            <circle cx="60" cy="80" r="2" fill="white" />
            
            {/* Additional Star Details */}
            <circle cx="60" cy="48" r="1" fill="white" />
            <circle cx="54" cy="55" r="0.8" fill="white" />
            <circle cx="66" cy="55" r="0.8" fill="white" />
            <circle cx="58" cy="65" r="0.8" fill="white" />
            <circle cx="62" cy="65" r="0.8" fill="white" />
            
            {/* Trophy Rim - Enhanced */}
            <ellipse cx="60" cy="23" rx="30" ry="6" fill="#FFD700" />
            <ellipse cx="60" cy="20" rx="28" ry="5" fill="#FFFF00" />
            <ellipse cx="60" cy="18" rx="26" ry="4" fill="#FFF700" />
            
            {/* Central UEFA Logo Area */}
            <rect x="50" y="45" width="20" height="30" rx="3" fill="rgba(255,255,255,0.4)" />
            <text x="60" y="58" textAnchor="middle" fontSize="4" fill="#000" fontWeight="bold">UEFA</text>
            <text x="60" y="68" textAnchor="middle" fontSize="3" fill="#000">CL</text>
          </svg>
          
          {/* Multiple Advanced Shine Effects */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-25 animate-pulse"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-transparent opacity-15"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-200 via-transparent to-transparent opacity-20 animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>
      </div>
      
      {/* Enhanced Multi-Layer Glow Effects */}
      <div className="absolute -inset-8 bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400 rounded-full opacity-25 animate-pulse-gold"></div>
      <div className="absolute -inset-6 bg-gradient-to-r from-orange-400 via-yellow-400 to-orange-400 rounded-full opacity-20 animate-pulse-gold" style={{animationDelay: '0.5s'}}></div>
      <div className="absolute -inset-4 bg-gradient-to-r from-yellow-500 via-yellow-300 to-yellow-500 rounded-full opacity-15 animate-pulse-gold" style={{animationDelay: '1s'}}></div>
      
      {/* Champions Text with Better Typography */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-6">
        <div className="text-sm font-black text-yellow-400 tracking-widest">CHAMPIONS</div>
        <div className="text-xs font-bold text-yellow-300 tracking-wider text-center mt-1">LEAGUE</div>
      </div>
    </div>
  );
}
