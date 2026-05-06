import React from 'react';
import { motion } from 'framer-motion';
import { Target, BarChart3, Rocket, Users } from 'lucide-react';
import PlexusBackground from '../Background/Background';
import SectionHeading from '../SectionHeading';

const About = () => {
  const aboutPoints = [
    {
      title: "What Drives My Search?",
      text: "I'm on the lookout for roles that match my skills, challenge me, and let me make a meaningful contribution.",
      icon: Target
    },
    {
      title: "Why Consider Me?",
      text: "Passion for Practical Data Insights. I turn data into actionable insights using Excel, SQL, and Power BI.",
      icon: BarChart3
    },
    {
      title: "Proven Real-World Skills",
      text: "I haven't walked the typical office path, but that didn't stop me from diving headfirst into real projects proving what I can do in action.",
      icon: Rocket
    },
    {
      title: "What Makes Me Special?",
      text: "I easily fit into teams with my adaptability and strong analytical skills, making a quick and positive impact.",
      icon: Users
    }
  ];

  return (
    <section id="about" className="about-section">
      <PlexusBackground />
      <div className="section-content">
        <SectionHeading title="About" subtitle="Me" />
        
        <motion.p 
          className="hero-description"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          style={{ textAlign: 'left', maxWidth: '800px', marginBottom: '3rem' }}
        >
          Hello! I'm Rhytham Bajaj, a data enthusiast. I adore transforming numbers into stories that guide smart choices.
        </motion.p>

        <div className="about-grid">
          {aboutPoints.map((point, index) => (
            <motion.div 
              key={index}
              className="about-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: false }}
            >
              <div className="card-icon">
                <point.icon size={32} color="var(--accent-color)" />
              </div>
              <h3 className="card-title">{point.title}</h3>
              <p className="card-text">{point.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
