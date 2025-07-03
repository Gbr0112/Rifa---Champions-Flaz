import { useState } from "react";

export function ChampionsTrophy() {
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <div className="relative inline-block mb-8">
      <div className="animate-trophy-glow">
        {!imageError ? (
          <img
            src="https://images.unsplash.com/photo-1624526267942-ab0ff8a3e972?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&h=300"
            alt="Champions League Trophy"
            className="w-32 h-48 mx-auto object-cover rounded-lg shadow-2xl animate-float"
            onError={handleImageError}
          />
        ) : (
          <div className="w-32 h-48 mx-auto bg-gradient-gold rounded-lg shadow-2xl animate-float flex items-center justify-center">
            <i className="fas fa-trophy text-4xl text-black"></i>
          </div>
        )}
      </div>
      <div className="absolute -inset-4 bg-gradient-to-r from-yellow-400 via-yellow-400 to-yellow-400 rounded-full opacity-20 animate-pulse-gold"></div>
    </div>
  );
}
