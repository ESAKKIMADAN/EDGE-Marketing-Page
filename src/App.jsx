import React from 'react';
import './App.css';

function App() {
  return (
    <>
      <header>
          <div className="logo">Edge</div>
          <nav>
              <a href="#">Mobile</a>
              <a href="#">TV & Audio</a>
              <a href="#">Support</a>
          </nav>
      </header>

      <section className="hero">
          <h1 className="hero-title">Unroll the Future.</h1>
          <p className="hero-subtext">The world's first seamless rollable display, expanding your vision without limits.</p>
          <a href="#" className="cta-button">Pre-order Now</a>
      </section>

      <div className="hero-image-container">
          <img src="/hero.png" alt="Samsung EDGE Rollable extending smoothly on a dark studio background"
              className="hero-image" />
      </div>

      <section className="features">
          <div className="feature-card">
              <h3 className="feature-title">Aerospace Durability</h3>
              <p className="feature-desc">Crafted with aerospace-grade titanium and carbon fiber for unmatched, lightweight
                  resilience every day.</p>
          </div>
          <div className="feature-card">
              <h3 className="feature-title">Limitless Performance</h3>
              <p className="feature-desc">Powered by Snapdragon 8 Elite Gen 2 to handle your most demanding tasks
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
