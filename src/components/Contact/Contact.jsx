import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Send } from 'lucide-react';
import { GitHub, LinkedIn } from '../Icons';
import SectionHeading from '../SectionHeading';
import ContactBackground from '../Background/ContactBackground';

const Contact = () => {
  const contactInfo = [
    {
      id: 1,
      title: "Email Me",
      value: "bajajrhytham@gmail.com",
      icon: Mail,
      link: "mailto:bajajrhytham@gmail.com",
      desc: "Always open for professional opportunities."
    },
    {
      id: 2,
      title: "GitHub",
      value: "ridhi0228",
      icon: GitHub,
      link: "https://github.com/ridhi0228",
      desc: "Check out my latest code and repositories."
    },
    {
      id: 3,
      title: "LinkedIn",
      value: "Rhytham Bajaj",
      icon: LinkedIn,
      link: "https://linkedin.com",
      desc: "Let's connect and expand our network."
    },
    {
      id: 4,
      title: "Call Me",
      value: "+91 9592030044",
      icon: Phone,
      link: "tel:+919592030044",
      desc: "Available for quick chats and meetings."
    }
  ];

  return (
    <section id="contact" className="contact-section">
      <ContactBackground />
      
      <div className="section-content">
        <SectionHeading title="Contact" subtitle="Me" />
        
        <div className="contact-main">
          <motion.div 
            className="contact-text-area"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false }}
          >
            <h3 className="contact-heading">Let's build something <span className="text-gradient">amazing</span> together.</h3>
            <p className="contact-subtext">
              I'm currently looking for new opportunities as a Data Analyst. 
              Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
            <div className="contact-status">
              <span className="status-dot pulsing"></span>
              <span className="status-text">Available for new projects</span>
            </div>
          </motion.div>

          <div className="contact-cards-grid">
            {contactInfo.map((item, index) => (
              <motion.a
                key={item.id}
                href={item.link}
                target="_blank"
                rel="noreferrer"
                className="contact-vibe-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: false }}
              >
                <div className="card-icon-box">
                  <item.icon size={24} />
                </div>
                <div className="card-content">
                  <h4>{item.title}</h4>
                  <p className="card-value">{item.value}</p>
                  <p className="card-desc">{item.desc}</p>
                </div>
                <div className="card-arrow">
                  <Send size={16} />
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
