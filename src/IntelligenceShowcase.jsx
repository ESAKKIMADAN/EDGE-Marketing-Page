import React from 'react';
import { motion } from 'framer-motion';

export default function IntelligenceShowcase() {
  const cards = [
    {
      id: 'visual-intel',
      image: '/ChatGPT Image Jul 15, 2026, 09_03_16 PM.png',
      title: 'Visual intelligence.',
      description: 'Search, ask questions and take action with the content on your EDGE screen.',
      imageStyle: { objectFit: 'cover' },
      wrapperStyle: { aspectRatio: '3 / 4' }
    },
    {
      id: 'live-translate',
      image: '/WhatsApp Image 2026-07-16 at 9.13.49 PM.jpeg',
      title: 'Live Translation.',
      description: 'Automatically translate texts in Messages, and get live translated captions in video calls and spoken translations.',
      imageStyle: { objectFit: 'cover' },
      wrapperStyle: { aspectRatio: '1 / 1' }
    },
    {
      id: 'clean-up',
      image: '/ChatGPT Image Jul 16, 2026, 09_18_45 PM.png',
      title: 'Clean Up.',
      description: 'Remove unwanted distractions with a tap. A photo editing tool that stays true to the original intent of the photo.',
      imageStyle: { objectFit: 'contain' },
      wrapperStyle: { aspectRatio: '4 / 3' }
    }
  ];

  return (
    <section className="intelligence-section">
      <div className="intelligence-container">
        <div className="intelligence-grid">
        {cards.map((card, index) => (
          <motion.div 
            className="intel-card" 
            key={card.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px" }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            whileHover={{ y: -5, scale: 1.02 }}
          >
            <div className="intel-card-image-wrapper" style={card.wrapperStyle}>
              <img src={card.image} alt={card.title} className="intel-card-img" style={card.imageStyle} />
            </div>
            <div className="intel-card-content">
              <p className="intel-card-text">
                <span className="intel-card-title">{card.title}</span> {card.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
      </div>
    </section>
  );
}
