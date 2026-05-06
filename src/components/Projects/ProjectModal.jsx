import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, PlayCircle } from 'lucide-react';
import { GitHub, LinkedIn } from '../Icons';

const ProjectModal = ({ project, isOpen, onClose }) => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!project) return null;

  const nextSlide = () => setCurrentSlide(prev => prev === 1 ? 2 : 1);
  const prevSlide = () => setCurrentSlide(prev => prev === 2 ? 1 : 2);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="modal-overlay" onClick={onClose}>
          <motion.div 
            className="project-modal-container"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="modal-header">
              <h2 className="modal-title">{project.title}</h2>
              <button className="modal-close-btn" onClick={onClose}>
                <X size={24} />
              </button>
            </div>

            <div className="modal-body">
              <AnimatePresence mode="wait">
                {currentSlide === 1 ? (
                  /* Slide 1: Project Overview */
                  <motion.div 
                    key="slide1"
                    className="modal-slide slide-overview"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="slide-content-left">
                      <div className="project-tag-badge" style={{ backgroundColor: `${project.color}20`, color: project.color }}>
                        {project.tag || `${project.tech} Project`}
                      </div>
                      <h1 className="slide-project-title">{project.title}</h1>
                      <p className="slide-project-desc">{project.description}</p>
                      
                      <div className="slide-actions">
                        {project.linkedInUrl && (
                          <a href={project.linkedInUrl} target="_blank" rel="noreferrer" className="btn-social linkedin">
                          <LinkedIn size={20} /> View Project Engagement
                          </a>
                        )}
                        {project.githubUrl && (
                          <a href={project.githubUrl} target="_blank" rel="noreferrer" className="btn-social github">
                          <GitHub size={20} /> View Project on GitHub
                          </a>
                        )}
                      </div>
                    </div>

                    <div className="slide-content-right">
                      <div className="image-slider-container">
                        <img 
                          src={project.images[currentImageIndex]} 
                          alt={`Project view ${currentImageIndex + 1}`} 
                          className="slider-image"
                        />
                        <div className="slider-nav">
                          <button className="slider-btn prev" onClick={prevImage}>
                            <ChevronLeft size={24} />
                          </button>
                          <button className="slider-btn next" onClick={nextImage}>
                            <ChevronRight size={24} />
                          </button>
                        </div>
                      </div>
                      <p className="image-caption">{project.imageCaptions?.[currentImageIndex] || "Project View"}</p>
                    </div>
                  </motion.div>
                ) : (
                  /* Slide 2: Project Details */
                  <motion.div 
                    key="slide2"
                    className="modal-slide slide-details"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="slide-content-left">
                      <h2 className="details-heading">Project Details</h2>
                      <p className="details-text">{project.longDescription}</p>
                      
                      <div className="learned-section">
                        <h3>I have learned the following:</h3>
                        <ul className="learned-list">
                          {project.learned.map((item, i) => (
                            <li key={i}>{i + 1}. {item}</li>
                          ))}
                        </ul>
                      </div>

                      {project.summary && (
                        <div className="summary-section">
                          <p className="summary-text">{project.summary}</p>
                        </div>
                      )}
                    </div>

                    <div className="slide-content-right">
                      <h2 className="details-heading">Project video</h2>
                      <div className="video-preview-container">
                        <img src={project.image} alt="Video preview" className="video-thumbnail" />
                        <a href={project.videoUrl} target="_blank" rel="noreferrer" className="video-play-overlay">
                          <img src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg" alt="YouTube" className="yt-logo-small" />
                          <div className="play-icon-wrapper">
                            <PlayCircle size={64} color="red" fill="white" />
                          </div>
                          <span className="watch-on-yt">Watch on <span className="yt-text">YouTube</span></span>
                        </a>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Slide Navigation Dots/Arrows */}
            <div className="modal-footer-nav">
              <button 
                className={`btn-nav-text ${currentSlide === 1 ? 'disabled' : ''}`} 
                onClick={prevSlide} 
                disabled={currentSlide === 1}
              >
                <ChevronLeft size={20} /> Previous Page
              </button>
              
              <div className="nav-dots">
                <div className={`nav-dot ${currentSlide === 1 ? 'active' : ''}`} onClick={() => setCurrentSlide(1)}></div>
                <div className={`nav-dot ${currentSlide === 2 ? 'active' : ''}`} onClick={() => setCurrentSlide(2)}></div>
              </div>
              
              <button 
                className={`btn-nav-text ${currentSlide === 2 ? 'disabled' : ''}`} 
                onClick={nextSlide} 
                disabled={currentSlide === 2}
              >
                Next Page <ChevronRight size={20} />
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
