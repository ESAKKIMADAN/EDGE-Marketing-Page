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

  // Wheel Rotation (Spins the whole wheel): 0, 100vh, 200vh, 300vh snap points
  const wheelRotate = useTransform(smoothProgress, 
    [0, 0.333, 0.666, 1], 
    [0, -120, -240, -360]
  );

  // Fade out the entire wheel at the very end
  const wheelOpacity = useTransform(smoothProgress, [0.666, 0.8, 1], [1, 1, 0]);

  // --- TEXT OPACITY & MOVEMENT ---
  const t1Opacity = useTransform(smoothProgress, [0, 0.16], [1, 0]);
  const t1Y       = useTransform(smoothProgress, [0, 0.16], ["0vh", "-5vh"]);

  const t2Opacity = useTransform(smoothProgress, [0.16, 0.333, 0.5], [0, 1, 0]);
  const t2Y       = useTransform(smoothProgress, [0.16, 0.333, 0.5], ["5vh", "0vh", "-5vh"]);

  const t3Opacity = useTransform(smoothProgress, [0.5, 0.666, 0.833], [0, 1, 0]);
  const t3Y       = useTransform(smoothProgress, [0.5, 0.666, 0.833], ["5vh", "0vh", "-5vh"]);

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
        <div style={{
          position: 'absolute',
          left: '10%',
          width: '35%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          height: '100%',
          zIndex: 10
        }}>
          {/* Text 1 */}
          <motion.div style={{ position: 'absolute', opacity: t1Opacity, y: t1Y }}>
            <h2 style={{ fontSize: '4.5rem', fontWeight: 800, color: '#ffffff', letterSpacing: '1px', textTransform: 'uppercase', margin: 0 }}>
              EDGE ROLLABLE
            </h2>
            <p style={{ fontSize: '1.4rem', color: '#a1a1a6', lineHeight: 1.6, marginTop: '20px', maxWidth: '80%' }}>
              Experience the world's first seamless rollable screen. Expand your vision effortlessly as you scroll.
            </p>
          </motion.div>

          {/* Text 2 */}
          <motion.div style={{ position: 'absolute', opacity: t2Opacity, y: t2Y }}>
            <h2 style={{ fontSize: '4.5rem', fontWeight: 800, color: '#ffffff', letterSpacing: '1px', textTransform: 'uppercase', margin: 0 }}>
              Aerospace Grade
            </h2>
            <p style={{ fontSize: '1.4rem', color: '#a1a1a6', lineHeight: 1.6, marginTop: '20px', maxWidth: '80%' }}>
              Forged from premium titanium and carbon fiber for unmatched durability in your hand.
            </p>
          </motion.div>

          {/* Text 3 */}
          <motion.div style={{ position: 'absolute', opacity: t3Opacity, y: t3Y }}>
            <h2 style={{ fontSize: '4.5rem', fontWeight: 800, color: '#ffffff', letterSpacing: '1px', textTransform: 'uppercase', margin: 0 }}>
              Limitless Power
            </h2>
            <p style={{ fontSize: '1.4rem', color: '#a1a1a6', lineHeight: 1.6, marginTop: '20px', maxWidth: '80%' }}>
              The Snapdragon 8 Elite Gen 2 handles your most demanding tasks at the speed of thought.
            </p>
          </motion.div>
        </div>

        {/* --- SPINNING WHEEL (Right Side) --- */}
        <motion.div style={{
          position: 'absolute',
          right: '-75vw', // Positioned to crop perfectly
          top: '50%',
          marginTop: '-50vw', // Mathematical center
          width: '100vw',
          height: '100vw',
          borderRadius: '50%',
          rotate: wheelRotate,
          opacity: wheelOpacity,
        }}>
          
          {/* Phone 1 (Starts at 9 o'clock position -> -90deg) */}
          <motion.div style={{
            position: 'absolute', top: '50%', left: '50%',
            transform: 'translate(-50%, -50%) rotate(-90deg) translateY(-40vw)'
          }}>
            <motion.img 
              src="/phone1.png" 
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
              src="/phone2.png" 
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
          <div style={{
            position: 'absolute', top: '50%', left: '50%',
            transform: 'translate(-50%, -50%) rotate(150deg) translateY(-40vw)'
          }}>
            <motion.img 
              src="/phone3.png" 
              alt="Phone 3"
              style={{
                height: '100vw',
                width: 'auto',
                objectFit: 'contain',
                filter: 'drop-shadow(0px 20px 30px rgba(0,0,0,0.8))'
              }}
            />
          </div>

        </motion.div>
      </div>

      {/* Snap Points Container to create the 300vh scroll space */}
      <div style={{ marginTop: '-100vh' }}>
        <div className="snap-point" style={{ height: '100vh' }} />
        <div className="snap-point" style={{ height: '100vh' }} />
        <div className="snap-point" style={{ height: '100vh' }} />
        <div className="snap-point" style={{ height: '100vh' }} />
      </div>

    </div>
  );
};

export default ScrollShowcase;
