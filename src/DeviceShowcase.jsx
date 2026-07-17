import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const DeviceShowcase = () => {
  const sectionRef = useRef(null);
  const [selectedColor, setSelectedColor] = useState(null); // 'gold' | 'slate' | 'cobalt' | null
  const [hoveredColor, setHoveredColor] = useState(null);
  const activeColor = hoveredColor || selectedColor;

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 40,
    damping: 26,
    mass: 0.8
  });

  // Animations driven by scroll:
  // Spread the phones out as we scroll
  // Left phone: phone2.png (Slate) slides to the left
  const leftX = useTransform(smoothProgress, [0.1, 0.7], ["0vw", "-17vw"]);
  const leftRotate = useTransform(smoothProgress, [0.1, 0.7], [0, -5]);

  // Right phone: phone3.png (Cobalt) slides to the right
  const rightX = useTransform(smoothProgress, [0.1, 0.7], ["0vw", "17vw"]);
  const rightRotate = useTransform(smoothProgress, [0.1, 0.7], [0, 5]);

  // Center phone: phone1.png (Gold) scales up slightly
  const centerScale = useTransform(smoothProgress, [0.1, 0.7], [1.0, 1.15]);
  const sideScale = useTransform(smoothProgress, [0.1, 0.7], [0.95, 1.1]);

  // Fade in the text elements and color labels
  const textOpacity = useTransform(smoothProgress, [0, 0.25], [0, 1]);
  const textY = useTransform(smoothProgress, [0, 0.25], [40, 0]);

  const labelsOpacity = useTransform(smoothProgress, [0.55, 0.8], [0, 1]);

  const colors = [
    { id: 'slate', name: 'Onyx', hex: '#161719' },
    { id: 'gold', name: 'Champagne', hex: '#E5C158' },
    { id: 'violet', name: 'Twilight', hex: '#7A35B8' }
  ];

  return (
    <div ref={sectionRef} className="device-showcase-container" id="device-showcase">
      <div className="device-showcase-sticky">
        <motion.div style={{ opacity: textOpacity, y: textY }} className="showcase-header">
          <h2 className="showcase-title">Forged in three stunning finishes.</h2>
        </motion.div>

        <div className="phones-stage">
          {/* Left Phone (Slate) */}
          <motion.div
            style={{
              x: leftX,
              rotate: leftRotate,
              scale: activeColor === 'slate' ? 1.15 : sideScale,
              zIndex: activeColor === 'slate' ? 20 : 10
            }}
            className={`phone-wrapper left-phone ${activeColor && activeColor !== 'slate' ? 'dimmed' : ''} ${activeColor === 'slate' ? 'focused' : ''}`}
            onClick={() => setSelectedColor(selectedColor === 'slate' ? null : 'slate')}
          >
            <img src="/phone2.png" alt="Onyx" className="phone-image" />
          </motion.div>

          {/* Center Phone (Gold) */}
          <motion.div
            style={{
              scale: activeColor === 'gold' ? 1.18 : centerScale,
              zIndex: activeColor === 'gold' ? 20 : 11
            }}
            className={`phone-wrapper center-phone ${activeColor && activeColor !== 'gold' ? 'dimmed' : ''} ${activeColor === 'gold' ? 'focused' : ''}`}
            onClick={() => setSelectedColor(selectedColor === 'gold' ? null : 'gold')}
          >
            <img src="/phone1.png" alt="Champagne" className="phone-image" />
          </motion.div>

          {/* Right Phone (Violet) */}
          <motion.div
            style={{
              x: rightX,
              rotate: rightRotate,
              scale: activeColor === 'violet' ? 1.15 : sideScale,
              zIndex: activeColor === 'violet' ? 20 : 10
            }}
            className={`phone-wrapper right-phone ${activeColor && activeColor !== 'violet' ? 'dimmed' : ''} ${activeColor === 'violet' ? 'focused' : ''}`}
            onClick={() => setSelectedColor(selectedColor === 'violet' ? null : 'violet')}
          >
            <img src="/phone3.png" alt="Twilight" className="phone-image" />
          </motion.div>
        </div>

        {/* Color Picker Capsule Menu (Liquid Glass dynamic island style) */}
        <motion.div 
          style={{ opacity: labelsOpacity }} 
          className="color-picker-container"
          onMouseLeave={() => setHoveredColor(null)}
        >
          <div className="glass-island color-island">
            <nav className="glass-nav">
              {colors.map((c) => {
                const isHovered = hoveredColor === c.id;
                const isActive = selectedColor === c.id;
                return (
                  <div
                    key={c.id}
                    className="nav-item-wrapper"
                    onMouseEnter={() => setHoveredColor(c.id)}
                    onClick={() => setSelectedColor(selectedColor === c.id ? null : c.id)}
                  >
                    {(isHovered || isActive) && (
                      <motion.div
                        layoutId="color-highlight"
                        className="nav-item-highlight"
                        initial={false}
                        transition={{ type: "spring", stiffness: 500, damping: 35 }}
                      />
                    )}
                    <div className={`nav-item-content ${isActive ? 'active' : ''}`}>
                      <span style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '0.5px', padding: '0 8px' }}>{c.name}</span>
                    </div>
                  </div>
                );
              })}
            </nav>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default DeviceShowcase;
