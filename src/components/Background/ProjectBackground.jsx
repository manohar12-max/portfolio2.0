import React from 'react';
import { motion } from 'framer-motion';

const ProjectBackground = () => {
  // Use a fixed seed for random positions to avoid hydration mismatch if possible, 
  // but for a background, simple random is usually okay or use a fixed array.
  const dashboardElements = [
    { top: '10%', left: '5%', w: 200, h: 120, delay: 0 },
    { top: '25%', left: '80%', w: 180, h: 150, delay: 2 },
    { top: '60%', left: '10%', w: 220, h: 100, delay: 4 },
    { top: '75%', left: '70%', w: 250, h: 180, delay: 1 },
    { top: '40%', left: '40%', w: 150, h: 130, delay: 5 },
    { top: '15%', left: '60%', w: 190, h: 110, delay: 3 },
    { top: '85%', left: '20%', w: 210, h: 140, delay: 6 },
    { top: '50%', left: '85%', w: 170, h: 160, delay: 2 },
  ];

  return (
    <div className="project-background">
      {/* Floating Dashboard Outlines */}
      {dashboardElements.map((el, i) => (
        <motion.div
          key={i}
          className="bg-dashboard-outline"
          initial={{ opacity: 0 }}
          animate={{
            y: [0, -30, 0],
            rotate: [0, 2, 0],
            opacity: [0.1, 0.25, 0.1] // Significantly increased opacity
          }}
          transition={{
            duration: 10 + i * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: el.delay
          }}
          style={{
            top: el.top,
            left: el.left,
            width: `${el.w}px`,
            height: `${el.h}px`,
          }}
        >
          <div className="outline-header"></div>
          <div className="outline-row">
            <div className="outline-col"></div>
            <div className="outline-col"></div>
          </div>
          <div className="outline-chart">
            {/* Simple SVG Sparkline for extra detail */}
            <svg viewBox="0 0 100 30" className="sparkline">
              <motion.path
                d="M0 20 Q 25 5 50 20 T 100 10"
                fill="none"
                stroke="var(--accent-color)"
                strokeWidth="2"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              />
            </svg>
          </div>
        </motion.div>
      ))}

      {/* Pulsing Data Nodes */}
      <div className="project-nodes">
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.div
            key={`node-${i}`}
            className="project-node"
            animate={{ 
              scale: [1, 1.5, 1], 
              opacity: [0.2, 0.5, 0.2],
              boxShadow: [
                "0 0 0px var(--accent-glow)",
                "0 0 15px var(--accent-glow)",
                "0 0 0px var(--accent-glow)"
              ]
            }}
            transition={{ 
              duration: 2 + (i % 3), 
              repeat: Infinity,
              delay: i * 0.2 
            }}
            style={{
              top: `${(i * 17) % 100}%`,
              left: `${(i * 23) % 100}%`,
            }}
          />
        ))}
      </div>

      {/* Large faint decorative text */}
      <div className="bg-faint-text">
        DATA ANALYTICS • INSIGHTS • VISUALIZATION • SQL • POWER BI • EXCEL
      </div>
    </div>
  );
};

export default ProjectBackground;
