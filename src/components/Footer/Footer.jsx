import React from 'react';
import { motion } from 'framer-motion';
import { Download, Database } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="main-footer">
      <div className="footer-content">
        <div className="footer-top">
          <div className="footer-brand">
            <h2 className="footer-name">Rhytham Bajaj</h2>
            <p className="footer-tagline">Data Aspirant</p>
          </div>
          
          <div className="footer-resume">
            <p className="resume-text">Download Resume</p>
            <motion.button 
              className="btn-footer-resume"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Resume <Download size={18} />
            </motion.button>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-info">
            <p className="copyright">© {currentYear} <span>Rhytham Bajaj</span>. All Rights Reserved</p>
          </div>
          
          <div className="footer-badge">
            <div className="powered-badge">
              <Database size={16} className="badge-icon" />
              <span className="powered-text">Powered by</span>
              <span className="powered-brand">Data Analytics Portfolio</span>
            </div>
          </div>

          <div className="footer-links">
            <a href="#home">Terms & Conditions</a>
            <span className="separator">|</span>
            <a href="#home">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
