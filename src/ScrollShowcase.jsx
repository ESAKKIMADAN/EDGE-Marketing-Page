import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const ScrollShowcase = () => {
  const containerRef = useRef(null);
  
  // Container height is 400vh for a smoother 3-step animation with pauses
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Apply spring physics to the scroll progress for buttery smooth momentum
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 25,
    mass: 0.5
  });

  // Wheel Rotation (Spins the whole wheel): 0, 100vh, 200vh snap points
  const wheelRotate = useTransform(smoothProgress, 
    [0, 0.5, 1.0], 
    [0, -120, -240]
  );

  // Keep the wheel fully opaque throughout this section as it naturally slides up
  const wheelOpacity = 1;

  // --- TEXT OPACITY & MOVEMENT ---
  const t1Opacity = useTransform(smoothProgress, [0, 0.25], [1, 0]);
  const t1Y       = useTransform(smoothProgress, [0, 0.25], ["0vh", "-5vh"]);

  const t2Opacity = useTransform(smoothProgress, [0.25, 0.5, 0.75], [0, 1, 0]);
  const t2Y       = useTransform(smoothProgress, [0.25, 0.5, 0.75], ["5vh", "0vh", "-5vh"]);

  const t3Opacity = useTransform(smoothProgress, [0.75, 1.0], [0, 1]);
  const t3Y       = useTransform(smoothProgress, [0.75, 1.0], ["5vh", "0vh"]);

  return (
    <div ref={containerRef} style={{ position: 'relative', width: '100%', backgroundColor: '#000' }}>
      
      {/* Sticky visual content */}
      <div style={{
        position: 'sticky',
        top: 0,
        height: '100vh',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden'
      }}>

        {/* --- TEXT CONTAINER (Left Side) --- */}
        <div className="scroll-text-container">
          {/* Text 1 */}
          <motion.div style={{ position: 'absolute', opacity: t1Opacity, y: t1Y }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', margin: 0 }}>
              <div 
                style={{ 
                  width: '320px', 
                  height: '65px', 
                  overflow: 'hidden', 
                  position: 'relative', 
                  display: 'flex', 
                  alignItems: 'center',
                  marginBottom: '10px'
                }}
              >
                <img 
                  src="/logo_edge_new.png" 
                  alt="EDGE Logo" 
                  style={{ 
                    height: '240px', 
                    width: '360px', 
                    mixBlendMode: 'screen',
                    position: 'absolute',
                    left: '-52px',
                    top: '50%',
                    transform: 'translateY(-50%)'
                  }} 
                />
              </div>
              <h2 className="scroll-text-title brink-font">
                ROLLABLE
              </h2>
            </div>
            <p className="scroll-text-p">
              The world's first Rollable display device that is coming into production. Your vision unmatched, every scroll becomes endless.
            </p>
            <button style={{
              marginTop: '30px',
              backgroundColor: '#ffffff',
              color: '#000000',
              border: 'none',
              outline: 'none',
              padding: '12px 30px',
              borderRadius: '100px',
              fontSize: '1.05rem',
              fontWeight: 600,
              cursor: 'pointer',
              fontFamily: 'inherit',
              transition: 'transform 0.2s ease, background-color 0.2s ease',
              boxShadow: '0 4px 15px rgba(255, 255, 255, 0.15)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.04)';
              e.currentTarget.style.backgroundColor = '#f5f5f7';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.backgroundColor = '#ffffff';
            }}
            >
              Pre-order
            </button>
          </motion.div>

          {/* Text 2 */}
          <motion.div style={{ position: 'absolute', opacity: t2Opacity, y: t2Y }}>
            <h2 className="scroll-text-title">
              No edge for the edge
            </h2>
            <p className="scroll-text-p">
              The phone is completely made of aerospace grade titanium. No peaked edges, so safe for your safe hands.
            </p>
          </motion.div>

          {/* Text 3 */}
          <motion.div style={{ position: 'absolute', opacity: t3Opacity, y: t3Y }}>
            <h2 className="scroll-text-title">
              The titanium hinge
            </h2>
            <p className="scroll-text-p">
              Completely motorised with a backup auto retrieval energy system that never fails. 10 million rolling sessions performed and tested before production.
            </p>
          </motion.div>
        </div>

        {/* --- SPINNING WHEEL (Right Side) --- */}
        <motion.div 
          className="scroll-wheel"
          style={{
            rotate: wheelRotate,
            opacity: wheelOpacity,
          }}
        >
          
          {/* Phone 1 (Starts at 9 o'clock position -> -90deg) */}
          <motion.div style={{
            position: 'absolute', top: '50%', left: '50%',
            transform: 'translate(-50%, -50%) rotate(-90deg) translateY(-40vw)'
          }}>
            <motion.img 
              src="/phone1_enhanced.png" 
              alt="Phone 1"
              style={{
                height: '100vw', // Added size directly to the mobile
                width: 'auto',
                objectFit: 'contain',
                filter: 'drop-shadow(0px 20px 30px rgba(0,0,0,0.8))'
              }}
            />
          </motion.div>

          {/* Phone 2 (Starts at 1 o'clock position -> 30deg) */}
          <motion.div style={{
            position: 'absolute', top: '50%', left: '50%',
            transform: 'translate(-50%, -50%) rotate(30deg) translateY(-40vw)'
          }}>
            <motion.img 
              src="/phone2_enhanced.png" 
              alt="Phone 2"
              style={{
                height: '100vw',
                width: 'auto',
                objectFit: 'contain',
                filter: 'drop-shadow(0px 20px 30px rgba(0,0,0,0.8))'
              }}
            />
          </motion.div>

          {/* Phone 3 (Starts at 5 o'clock position -> 150deg) */}
          <motion.div style={{
            position: 'absolute', top: '50%', left: '50%',
            transform: 'translate(-50%, -50%) rotate(150deg) translateY(-40vw)'
          }}>
            <motion.img 
              src="/phone3_enhanced.png" 
              alt="Phone 3"
              style={{
                height: '100vw',
                width: 'auto',
                objectFit: 'contain',
                filter: 'drop-shadow(0px 20px 30px rgba(0,0,0,0.8))'
              }}
            />
          </motion.div>

        </motion.div>
      </div>

      {/* Snap Points Container to create the 200vh scroll space */}
      <div style={{ marginTop: '-100vh' }}>
        <div className="snap-point" style={{ height: '100vh' }} />
        <div className="snap-point" style={{ height: '100vh' }} />
        <div className="snap-point" style={{ height: '100vh' }} />
      </div>

    </div>
  );
};

export default ScrollShowcase;
