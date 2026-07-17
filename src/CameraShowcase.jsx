import React from 'react';
import { motion } from 'framer-motion';

function CameraShowcase() {
  return (
    <section className="camera-section snap-point" style={{ height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
      <div className="camera-content-container" style={{ width: '100%', maxWidth: '1400px', height: '100%', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: '0 5%' }}>
        <motion.div 
          className="camera-text"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          style={{ flex: '1', zIndex: 10, textAlign: 'left', paddingRight: '40px' }}
        >
          <h2 style={{ fontSize: '4rem', lineHeight: '1.1' }}>The eyes of the Edge.</h2>
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
          initial={{ scale: 0.6, opacity: 0, x: 50 }}
          whileInView={{ scale: 0.75, opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          style={{ flex: '1.2', display: 'flex', justifyContent: 'center', backgroundColor: 'transparent', boxShadow: 'none' }}
        >
          <img src="/35fc0db4-8ffc-425f-9717-66744a67b1bd.png" alt="Camera Pro Setup" className="camera-img" style={{ width: '100%', height: 'auto', objectFit: 'contain' }} />
        </motion.div>
      </div>
    </section>
  );
}

export default CameraShowcase;
