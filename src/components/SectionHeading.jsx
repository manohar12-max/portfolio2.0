import React from 'react';
import { motion } from 'framer-motion';

const SectionHeading = ({ title, subtitle }) => {
  return (
    <motion.div 
      className="section-heading"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: false }}
    >
      <div className="heading-title-wrapper">
        <div className="heading-circle"></div>
        <h2 className="heading-title">{title}</h2>
      </div>
      <span className="heading-subtitle">{subtitle}</span>
    </motion.div>
  );
};

export default SectionHeading;
