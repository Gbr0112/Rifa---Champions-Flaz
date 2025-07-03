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
    <div className="glass-effect rounded-2xl p-8 text-center shine-effect hover:scale-105 transition-transform duration-300">
      <div className={`${iconBg} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
        {icon}
      </div>
      <h3 className={`text-xl font-bold ${titleColor} mb-2`}>{title}</h3>
      <div className="text-white">{description}</div>
    </div>
  );
}
