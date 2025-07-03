import { ReactNode } from "react";

interface PrizeCardProps {
  icon: ReactNode;
  title: string;
  description: ReactNode;
  iconBg: string;
  titleColor: string;
}

export function PrizeCard({ icon, title, description, iconBg, titleColor }: PrizeCardProps) {
  return (
    <div className="glass-effect rounded-2xl p-8 text-center shine-effect hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-yellow-500/20 enhanced-glow">
      <div className={`${iconBg} w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse-gold shadow-lg`}>
        {icon}
      </div>
      <h3 className={`text-2xl font-bold ${titleColor} mb-4 tracking-wide`}>{title}</h3>
      <div className="text-white text-lg">{description}</div>
      
      {/* Decorative Border */}
      <div className="mt-6 w-16 h-1 bg-gradient-gold rounded-full mx-auto"></div>
    </div>
  );
}
