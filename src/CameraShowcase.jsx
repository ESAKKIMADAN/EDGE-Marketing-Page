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
          <h2 style={{ fontSize: '4rem', lineHeight: '1.1' }}>Pro-Level Camera System.</h2>
          <p style={{ fontSize: '1.2rem', marginTop: '20px' }}>Capture every moment with unparalleled clarity. The advanced triple-lens setup delivers professional-grade photography right from your pocket, ensuring stunning detail in any lighting condition.</p>
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
