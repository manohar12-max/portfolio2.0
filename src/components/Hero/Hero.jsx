import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, Play } from 'lucide-react';
import { GitHub, LinkedIn } from '../Icons';
import VideoModal from '../VideoModal/VideoModal';
import ProjectStats from './ProjectStats';
import DataBackground from '../Background/DataBackground';
import SectionHeading from '../SectionHeading';

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const videoId = "dQw4w9WgXcQ"; // Placeholder video ID

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section id="home" className="hero-section">
      <DataBackground />
      <div className="section-content">
        {/* <SectionHeading title="Home" subtitle="Page" /> */}
        <div className="hero-main">
          <motion.div
            className="hero-text"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.p className="hero-greeting" variants={itemVariants}>
              Hello, I am
            </motion.p>
            <motion.h1 className="hero-name" variants={itemVariants}>
              Rhytham Bajaj
            </motion.h1>
            <motion.div className="hero-title" variants={itemVariants}>
              <span className="badge">Data Aspirant</span>
            </motion.div>

            <motion.p className="hero-description" variants={itemVariants}>
              Transforming complex data into actionable insights.
              Specializing in statistical analysis, machine learning, and data visualization.
            </motion.p>

            <motion.div className="hero-actions" variants={itemVariants}>
              <button className="btn-primary">
                Resume <Download size={20} />
              </button>
              <div className="social-links">
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="social-icon">
                  <LinkedIn size={20} />
                </a>
                <a href="https://github.com" target="_blank" rel="noreferrer" className="social-icon">
                  <GitHub size={20} />
                </a>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="hero-image-container"
            initial={{ opacity: 0, scale: 0.9, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
          >
            <div className="profile-wrapper" onClick={() => setIsModalOpen(true)}>
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop"
                alt="Profile"
                className="profile-image"
              />
              <div className="play-button">
                <Play size={28} fill="currentColor" />
              </div>

              {/* Decorative Data Elements */}
              <motion.div
                className="data-badge db-1"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <span>98% Accuracy</span>
              </motion.div>
              <motion.div
                className="data-badge db-2"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <span>Python & SQL</span>
              </motion.div>
              <motion.div
                className="data-badge db-3"
                animate={{ x: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              >
                <span>ML Models</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <VideoModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        videoId={videoId}
      />

      <ProjectStats />
    </section>
  );
};

export default Hero;
