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
          <h2 className="showcase-heading">Smartphone or tablet?<br/>Why not both?</h2>
          <p className="showcase-paragraph">
            The actual phone is a 6.3 inch 18.5:9 multi modular amoled display that extends. It has a fully independent motor that operates 3 fully functional twin hinges that extends the display to 9.2 inches 21:9 aspect ratio with just a gesture.
          </p>
        </div>
      </div>
    </section>
  );
}
