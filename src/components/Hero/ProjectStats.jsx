import React from 'react';
import { motion } from 'framer-motion';
import { Excel, PowerBI, SQL } from '../Icons';

const ProjectStats = () => {
  const stats = [
    { image: '/Microsoft_Office_Excel_(2019–2025).svg.png', count: 1, label: 'Excel Project', color: '#107c41' },
    { image: '/powerbi.png', count: 4, label: 'PowerBI Projects', color: '#f2c811' },
    { image: '/sql.png', count: 1, label: 'SQL Project', color: '#336791' },
  ];

  return (
    <motion.div
      className="project-stats-bar"
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1, duration: 0.8 }}
    >
      {stats.map((stat, index) => (
        <div key={index} className="stat-item">
          <div className="stat-icon-wrapper">
            <img src={stat.image} alt={stat.label} className="stat-image" />
          </div>
          <div className="stat-info">
            <span className="stat-count">{stat.count}</span>
            <span className="stat-label">{stat.label}</span>
          </div>
        </div>
      ))}
    </motion.div>
  );
};

export default ProjectStats;
