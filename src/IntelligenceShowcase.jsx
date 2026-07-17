import React from 'react';
import { motion } from 'framer-motion';

export default function IntelligenceShowcase() {
  const cards = [
    {
      id: 'infinity-display',
      image: '/ChatGPT Image Jul 15, 2026, 09_03_16 PM.png',
      title: 'The Infinity display.',
      description: 'Not your regular phone, Edge Rollable has in-display volume rockers and an in-display front-facing camera.',
      imageStyle: { objectFit: 'cover' },
      wrapperStyle: { aspectRatio: '3 / 4' }
    },
    {
      id: 'edge-os',
      image: '/edge_live_translate.png',
      title: 'The Edge OS.',
      description: 'The phone comes with our own OS, the Edge OS. It has multithreaded running capabilities running on a 3nm processor. Has customisation factors at every possible factor that you can imagine, from the lock screen to your to-do list.',
      imageStyle: { objectFit: 'cover' },
      wrapperStyle: { aspectRatio: '1 / 1' }
    },
    {
      id: 'magic-keyboard',
      image: '/WhatsApp Image 2026-07-17 at 12.37.30 AM.jpeg',
      title: 'The magic keyboard.',
      description: 'No more magic pins needed, all you need is a Bluetooth connection and our magic keyboard. More memory foam than a thin slice 65 keyboard, more tactile and more clicky.',
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
