import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Medal, Award, Star } from 'lucide-react';

const CertificateBackground = () => {
  const icons = [Trophy, Medal, Award, Star];
  
  // Fixed positions for stability and better layout control
  const achievementElements = [
    { top: '15%', left: '10%', size: 60, delay: 0 },
    { top: '20%', left: '85%', size: 80, delay: 2 },
    { top: '65%', left: '5%', size: 70, delay: 4 },
    { top: '80%', left: '75%', size: 90, delay: 1 },
    { top: '45%', left: '15%', size: 50, delay: 3 },
    { top: '35%', left: '80%', size: 65, delay: 5 },
    { top: '10%', left: '50%', size: 55, delay: 2 },
    { top: '90%', left: '40%', size: 75, delay: 6 },
  ];
  
  return (
    <div className="certificate-background">
      {/* Floating Icons */}
      {achievementElements.map((el, i) => {
        const Icon = icons[i % icons.length];
        return (
          <motion.div
            key={i}
            className="bg-icon-wrapper"
            animate={{ 
              y: [0, -20, 0],
              rotate: [0, 5, -5, 0],
              opacity: [0.03, 0.08, 0.03]
            }}
            transition={{ 
              duration: 8 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: el.delay
            }}
            style={{
              position: 'absolute',
              top: el.top,
              left: el.left,
              color: 'var(--accent-color)',
            }}
          >
            <Icon size={el.size} strokeWidth={1} />
          </motion.div>
        );
      })}

      {/* Pulsing Stars */}
      <div className="bg-stars">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={`star-${i}`}
            className="bg-star-node"
            animate={{ 
              scale: [1, 1.4, 1],
              opacity: [0.1, 0.3, 0.1],
              filter: ["blur(0px)", "blur(2px)", "blur(0px)"]
            }}
            transition={{ 
              duration: 3 + (i % 4),
              repeat: Infinity,
              delay: i * 0.3
            }}
            style={{
              position: 'absolute',
              top: `${(i * 13) % 100}%`,
              left: `${(i * 19) % 100}%`,
              color: 'var(--accent-color)',
            }}
          >
            <Star size={12} fill="currentColor" />
          </motion.div>
        ))}
      </div>

      {/* Large faint decorative text */}
      <div className="bg-faint-text">
        ACHIEVEMENTS • CERTIFICATIONS • RECOGNITION • EXCELLENCE • AWARDS
      </div>

      {/* Decorative Circles */}
      <div className="bg-glow-circle circle-1"></div>
      <div className="bg-glow-circle circle-2"></div>
    </div>
  );
};

export default CertificateBackground;
