import React from 'react';
import { motion } from 'framer-motion';

const DataBackground = () => {
  const bars = Array.from({ length: 12 });
  const pieCharts = Array.from({ length: 5 });
  const lineGraphs = Array.from({ length: 3 });

  return (
    <div className="data-background-container">
      {/* Grid Lines with better visibility */}
      <div className="bg-grid-lines"></div>

      {/* Animated Bar Clusters */}
      <div className="bg-data-clusters">
        {bars.map((_, i) => (
          <motion.div
            key={`bar-${i}`}
            className="bg-data-bar"
            animate={{ 
              height: [Math.random() * 50 + 20, Math.random() * 150 + 50, Math.random() * 50 + 20],
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.2
            }}
            style={{
              left: `${(i * 8) + 4}%`,
              bottom: '5%',
              width: '15px'
            }}
          />
        ))}
      </div>

      {/* Structured Pie Chart Metrics (Grouped for Sense) */}
      <div className="bg-pie-metrics">
        {[
          { top: '15%', left: '82%', size: 90, dash: "70 100", label: "92%" },
          { top: '40%', left: '85%', size: 70, dash: "45 100", label: "48%" },
          { top: '65%', left: '82%', size: 110, dash: "85 100", label: "88%" }
        ].map((pie, i) => (
          <motion.div
            key={`pie-${i}`}
            className="bg-pie-chart"
            animate={{
              rotate: [0, 360],
              opacity: [0.15, 0.4, 0.15]
            }}
            transition={{
              rotate: { duration: 30 + i * 5, repeat: Infinity, ease: "linear" },
              opacity: { duration: 5, repeat: Infinity, ease: "easeInOut" }
            }}
            style={{
              position: 'absolute',
              top: pie.top,
              left: pie.left,
              width: `${pie.size}px`,
              height: `${pie.size}px`
            }}
          >
            <svg viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="40" fill="transparent" stroke="var(--accent-color)" strokeWidth="15" strokeDasharray={pie.dash} opacity="0.3" />
              <circle cx="50" cy="50" r="40" fill="transparent" stroke="var(--border-color)" strokeWidth="15" strokeDasharray="100 100" opacity="0.1" />
            </svg>
          </motion.div>
        ))}
      </div>

      {/* Analytics Line Charts (Dashboard Fragments) */}
      <div className="bg-analytics-panels">
        {[
          { top: '10%', left: '5%', d: "M0,80 L20,60 L40,70 L60,30 L80,50 L100,20" },
          { top: '45%', left: '10%', d: "M0,50 L30,20 L60,80 L90,40 L120,60 L150,10" }
        ].map((panel, i) => (
          <motion.div
            key={`panel-${i}`}
            className="bg-line-panel"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: [0.15, 0.35, 0.15], x: 0 }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: i * 2 }}
            style={{
              position: 'absolute',
              top: panel.top,
              left: panel.left,
              width: '250px',
              padding: '10px',
              borderLeft: '2px solid var(--accent-glow)'
            }}
          >
            <svg viewBox="0 0 100 100" preserveAspectRatio="none" style={{ height: '80px', width: '100%' }}>
              <motion.path
                d={panel.d}
                fill="none"
                stroke="var(--accent-color)"
                strokeWidth="2"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
              <path d="M0,100 L100,100" stroke="var(--border-color)" strokeWidth="1" strokeDasharray="5,5" />
            </svg>
          </motion.div>
        ))}
      </div>

      {/* Pulsing Analytics Nodes */}
      <div className="bg-data-nodes">
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.div
            key={`node-${i}`}
            className="bg-data-node"
            animate={{
              scale: [1, 1.8, 1],
              opacity: [0.1, 0.4, 0.1]
            }}
            transition={{
              duration: 3 + (i % 3),
              repeat: Infinity,
              delay: i * 0.4
            }}
            style={{
              position: 'absolute',
              top: `${(i * 19) % 100}%`,
              left: `${(i * 13) % 100}%`,
              width: '3px',
              height: '3px',
              background: 'var(--accent-color)',
              borderRadius: '50%',
              boxShadow: '0 0 8px var(--accent-glow)'
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default DataBackground;
