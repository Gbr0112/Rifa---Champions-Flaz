import { useState } from "react";

export function ChampionsTrophy() {
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <div className="relative inline-block mb-8">
      <div className="animate-trophy-glow">
        <div className="w-48 h-64 mx-auto bg-gradient-to-b from-yellow-100 via-yellow-300 to-yellow-600 rounded-3xl shadow-2xl animate-float flex items-center justify-center relative overflow-hidden border-4 border-yellow-400">
          {!imageError ? (
            <img
              src="https://cdn.pixabay.com/photo/2018/06/12/13/55/trophy-3470654_1280.jpg"
              alt="Champions League Trophy"
              className="w-full h-full object-cover rounded-2xl"
              onError={handleImageError}
            />
          ) : (
            <div className="w-32 h-48 mx-auto bg-gradient-gold rounded-lg shadow-2xl animate-float flex items-center justify-center">
              <i className="fas fa-trophy text-4xl text-black"></i>
            </div>
          )}
          
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
        <div className="text-sm font-black text-yellow-400 tracking-widest font-orbitron">CHAMPIONS</div>
        <div className="text-xs font-bold text-yellow-300 tracking-wider text-center mt-1 font-exo">LEAGUE</div>
      </div>
    </div>
  );
}