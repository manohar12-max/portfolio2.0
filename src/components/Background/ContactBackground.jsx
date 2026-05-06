import React from 'react';
import { motion } from 'framer-motion';
import { Share2, MessageSquare, Send, Radio, Zap } from 'lucide-react';

const ContactBackground = () => {
  const elements = [
    { Icon: Share2, top: '10%', left: '10%', size: 40 },
    { Icon: MessageSquare, top: '20%', left: '80%', size: 50 },
    { Icon: Send, top: '70%', left: '15%', size: 45 },
    { Icon: Radio, top: '60%', left: '85%', size: 55 },
    { Icon: Zap, top: '40%', left: '50%', size: 30 },
  ];

  return (
    <div className="contact-background">
      {/* Communication Lines */}
      <svg className="bg-connection-lines" viewBox="0 0 100 100" preserveAspectRatio="none">
        <motion.path
          d="M10 10 L 50 40 L 80 20 M 15 70 L 50 40 L 85 60"
          fill="none"
          stroke="var(--accent-color)"
          strokeWidth="0.1"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.2 }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
      </svg>

      {/* Floating Communication Icons */}
      {elements.map((el, i) => (
        <motion.div
          key={i}
          className="bg-icon-wrapper"
          animate={{ 
            y: [0, -15, 0],
            opacity: [0.03, 0.07, 0.03],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 6 + i,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            position: 'absolute',
            top: el.top,
            left: el.left,
            color: 'var(--accent-color)',
          }}
        >
          <el.Icon size={el.size} strokeWidth={1} />
        </motion.div>
      ))}

      {/* Pulsing Nodes */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="bg-contact-node"
          animate={{ 
            scale: [1, 2, 1],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            delay: i * 0.5
          }}
          style={{
            position: 'absolute',
            top: `${(i * 17) % 100}%`,
            left: `${(i * 23) % 100}%`,
            width: '4px',
            height: '4px',
            background: 'var(--accent-color)',
            borderRadius: '50%',
          }}
        />
      ))}

      <div className="bg-faint-text">
        NETWORKING • COMMUNICATION • COLLABORATION • CONNECTION • REACH OUT
      </div>
    </div>
  );
};

export default ContactBackground;
