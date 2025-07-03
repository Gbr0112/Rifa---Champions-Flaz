import { useEffect, useState } from "react";

interface Particle {
  id: number;
  left: number;
  delay: number;
}

export function FloatingParticles() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const newParticles: Particle[] = [];
    for (let i = 0; i < 9; i++) {
      newParticles.push({
        id: i,
        left: (i + 1) * 10,
        delay: Math.random() * 6,
      });
    }
    setParticles(newParticles);
  }, []);

  return (
    <div className="floating-particles">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="particle"
          style={{
            left: `${particle.left}%`,
            animationDelay: `${particle.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
