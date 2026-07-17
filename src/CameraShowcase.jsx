import React from 'react';
import { motion } from 'framer-motion';

function CameraShowcase() {
  return (
    <section className="camera-section-container snap-point">
      <div className="camera-content-container">
        <motion.div 
          className="camera-text-wrapper"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="camera-text-title">The eyes of the Edge.</h2>
          <p style={{ fontSize: '1.2rem', marginTop: '20px', lineHeight: '1.6' }}>
            The phone comes with a 200 MP main Samsung ISOCELL HP2 sensor with a high stability gimbal loaded.
          </p>
          <p style={{ fontSize: '1.2rem', marginTop: '15px', lineHeight: '1.6' }}>
            The ultrawide sensor is a 50 MP Samsung ISOCELL JN3 sensor that captures 97% of natural light along with optimization in dim light.
          </p>
          <p style={{ fontSize: '1.2rem', marginTop: '15px', lineHeight: '1.6' }}>
            It also comes packed with a 50 MP 5× optical zoom telephoto camera utilizing a Sony IMX854 sensor. No more stress in zoom photos.
          </p>
        </motion.div>
        
        <motion.div 
          className="camera-image-wrapper"
          initial={{ scale: 0.8, opacity: 0, x: 50 }}
          whileInView={{ scale: 1.15, opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <img src="/35fc0db4-8ffc-425f-9717-66744a67b1bd.png" alt="Camera Pro Setup" className="camera-img" style={{ width: '100%', height: 'auto', objectFit: 'contain' }} />
        </motion.div>
      </div>
    </section>
  );
}

export default CameraShowcase;
