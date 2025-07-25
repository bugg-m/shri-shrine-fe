import React from 'react';

interface Particle {
  id: number;
  size: number;
  top: string;
  left: string;
  delay: number;
  shape: 'circle' | 'diamond' | 'star';
  color: string;
}

const FloatingParticlesEffect: React.FC = () => {
  const generateParticles = (): Particle[] => {
    const particles: Particle[] = [];
    const particleCount = 15;

    const shapes: ('circle' | 'diamond' | 'star')[] = [
      'circle',
      'diamond',
      'star',
    ];
    const colors = [
      'bg-primary-300/60',
      'bg-primary-300/60',
      'bg-primary-200/40',
      'bg-primary-300/50',
      'bg-primary-400/40',
      'bg-primary-200/50',
    ];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        id: i,
        size: Math.random() * 16 + 8,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        delay: Math.random() * 6,
        shape: shapes[Math.floor(Math.random() * shapes.length)],
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    return particles;
  };

  const particles = generateParticles();

  const getShapeStyles = (particle: Particle): string => {
    const baseStyles = `absolute ${particle.color}`;
    const sizeStyles = `w-${Math.ceil(particle.size / 4)} h-${Math.ceil(particle.size / 4)}`;

    switch (particle.shape) {
      case 'circle':
        return `${baseStyles} ${sizeStyles} rounded-full`;
      case 'diamond':
        return `${baseStyles} ${sizeStyles} rotate-45 rounded-sm`;
      case 'star':
        return `${baseStyles} ${sizeStyles} rounded-sm clip-star`;
      default:
        return `${baseStyles} ${sizeStyles} rounded-full`;
    }
  };

  return (
    <>
      <div className="absolute inset-0 overflow-hidden opacity-30">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className={`animate-float ${getShapeStyles(particle)}`}
            style={{
              top: particle.top,
              left: particle.left,
              animationDelay: `${particle.delay}s`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
            }}
          />
        ))}
      </div>
    </>
  );
};

export default FloatingParticlesEffect;
