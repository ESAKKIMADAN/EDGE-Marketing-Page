import React, { useRef, useEffect } from 'react';

export default function VideoShowcase() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
        // IntersectionObserver to play video when it scrolls into view
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    videoRef.current.play();
                }
            },
            { threshold: 0.5 } // Trigger when at least 50% of the video is visible
        );
        
        observer.observe(videoRef.current);
        
        return () => {
            if (videoRef.current) {
                observer.unobserve(videoRef.current);
            }
        };
    }
  }, []);

  return (
    <section className="video-showcase-container">
      <div className="video-showcase-content">
        <div className="media-box">
          <video 
            ref={videoRef}
            src="/IMG_7221.MP4" 
            muted 
            playsInline
            className="curved-media"
            onEnded={(e) => {
                // Ensure it stops at the last frame without looping
                e.target.pause();
            }}
          />
        </div>
        
        <div className="showcase-text-content">
          <h2 className="showcase-heading">Smartphone or Tablet? <br/>Have Both.</h2>
          <p className="showcase-paragraph">
            Experience the ultimate hybrid. The EDGE Rollable transitions seamlessly from a pocket-sized smartphone into an expansive tablet, giving you the best of both worlds without compromise. Whether you're gaming, multitasking, or streaming, scale your view on demand.
          </p>
        </div>
      </div>
    </section>
  );
}
