import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './App.css';
import ScrollShowcase from './ScrollShowcase';
import DeviceShowcase from './DeviceShowcase';

const navItems = [
  { id: 'overview', label: 'Overview', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" /><circle cx="12" cy="12" r="3" /></svg> },
  { id: 'display', label: 'Rollable', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 3 21 3 21 9" /><polyline points="9 21 3 21 3 15" /><line x1="21" x2="14" y1="3" y2="10" /><line x1="3" x2="10" y1="21" y2="14" /></svg> },
  { id: 'performance', label: 'Performance', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg> },
  { id: 'specs', label: 'Specs', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="8" x2="21" y1="6" y2="6" /><line x1="8" x2="21" y1="12" y2="12" /><line x1="8" x2="21" y1="18" y2="18" /><line x1="3" x2="3.01" y1="6" y2="6" /><line x1="3" x2="3.01" y1="12" y2="12" /><line x1="3" x2="3.01" y1="18" y2="18" /></svg> },
];

function DynamicIsland() {
  const [hovered, setHovered] = useState(null);
  const [active, setActive] = useState('overview');

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      const vh = window.innerHeight;

      if (y < vh * 0.5) {
        setActive('overview');
      } else if (y < vh * 1.5) {
        setActive('display');
      } else if (y < vh * 2.5) {
        setActive('performance');
      } else {
        setActive('specs');
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id) => {
    setActive(id);
    const vh = window.innerHeight;
    let target = 0;
    if (id === 'overview') target = 0;
    else if (id === 'display') target = vh * 1;
    else if (id === 'performance') target = vh * 2;
    else if (id === 'specs') target = vh * 3;

    window.scrollTo({ top: target, behavior: 'smooth' });
  };

  return (
    <header className="glass-island">
      <nav className="glass-nav" onMouseLeave={() => setHovered(null)}>
        {navItems.map((item) => {
          const isHovered = hovered === item.id;
          const isActive = active === item.id;
          return (
            <div
              key={item.id}
              className="nav-item-wrapper"
              onMouseEnter={() => setHovered(item.id)}
              onClick={() => handleNavClick(item.id)}
            >
              {(isHovered || (isActive && !hovered)) && (
                <motion.div
                  layoutId="glass-highlight"
                  className="nav-item-highlight"
                  initial={false}
                  transition={{ type: "spring", stiffness: 500, damping: 35 }}
                />
              )}
              <div className={`nav-item-content ${isActive ? 'active' : ''}`}>
                {item.id === 'overview' ? (
                  <div 
                    style={{ 
                      width: '74px', 
                      height: '18px', 
                      overflow: 'hidden', 
                      position: 'relative', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      opacity: isActive || isHovered ? 1 : 0.7, 
                      transition: 'opacity 0.3s ease'
                    }}
                  >
                    <img 
                      src="/logo_edge_new.png" 
                      alt="Logo" 
                      style={{ 
                        height: '60px', 
                        width: 'auto', 
                        objectFit: 'contain', 
                        mixBlendMode: 'screen',
                        position: 'absolute'
                      }} 
                    />
                  </div>
                ) : (
                  <span>{item.label}</span>
                )}
              </div>
            </div>
          )
        })}
      </nav>
    </header>
  );
}

function App() {
  return (
    <>
      <DynamicIsland />

      <ScrollShowcase />

      <DeviceShowcase />

      <section className="hero">
        <h1 className="hero-title">Unroll the Future.</h1>
        <p className="hero-subtext">The world's first seamless rollable display, expanding your vision without limits.</p>
      </section>

      <section className="features">
        <div className="feature-card">
          <h3 className="feature-title">Aerospace Durability</h3>
          <p className="feature-desc">Crafted with aerospace-grade titanium and carbon fiber for unmatched, lightweight
            resilience every day.</p>
        </div>
        <div className="feature-card">
          <h3 className="feature-title">Limitless Performance</h3>
          <p className="feature-desc">Powered by NewGen 8 Elite Gen 5 to handle your most demanding tasks
            effortlessly.</p>
        </div>
        <div className="feature-card">
          <h3 className="feature-title">Creaseless Canvas</h3>
          <p className="feature-desc">Expand your workspace smoothly with our continuous roll-out Ceramic Shield Glass
            screen.</p>
        </div>
      </section>

      <section className="benefit-section">
        <p className="benefit-text">
          Whether you are multitasking on the go or immersing yourself in cinematic entertainment, the <span
            className="benefit-highlight">EDGE Rollable</span> adapts to your needs. Experience the power of a tablet
          with the portability of a smartphone, all in one striking device.
        </p>
      </section>

      <footer>
        <p>&copy; 2026 Samsung Electronics Co., Ltd. All Rights Reserved. (Fictional Concept)</p>
      </footer>
    </>
  );
}

export default App;
