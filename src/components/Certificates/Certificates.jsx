import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../SectionHeading';
import CertificateBackground from '../Background/CertificateBackground';

const Certificates = () => {
  const certificates = [
    {
      id: 1,
      title: "The Fundamentals of Digital Marketing",
      issuer: "Google Digital Unlocked",
      image: "https://images.unsplash.com/photo-1589330694653-ded6df53f7bb?q=80&w=1000&auto=format&fit=crop",
      date: "Dec 2021"
    },
    {
      id: 2,
      title: "Social Media Marketing",
      issuer: "Great Learning",
      image: "https://images.unsplash.com/photo-1496065187959-7f07b8353c55?q=80&w=1000&auto=format&fit=crop",
      date: "Oct 2021"
    },
    {
      id: 3,
      title: "Advanced SQL",
      issuer: "Great Learning",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1000&auto=format&fit=crop",
      date: "April 2022"
    }
  ];

  return (
    <section id="certificates" className="certificates-section">
      <CertificateBackground />
      
      <div className="section-content">
        <SectionHeading title="Awards" subtitle="& Certificate" />
        
        <div className="certificates-grid">
          {certificates.map((cert, index) => (
            <motion.div 
              key={cert.id}
              className="certificate-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: false }}
            >
              <div className="cert-image-container">
                <img src={cert.image} alt={cert.title} className="cert-image" />
                <div className="cert-overlay">
                  <span className="cert-date">{cert.date}</span>
                </div>
              </div>
              <div className="cert-info">
                <h3 className="cert-title">{cert.title}</h3>
                <p className="cert-issuer">{cert.issuer}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
