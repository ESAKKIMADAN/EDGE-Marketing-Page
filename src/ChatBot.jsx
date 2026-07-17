import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const API_KEY = import.meta.env.VITE_GROQ_API_KEY || '';
const systemPrompt = `You are the EDGE Assistant, a highly advanced AI embedded within the EDGE Rollable concept phone. You speak in a helpful, concise, and futuristic tone.

CRITICAL CONSTRAINT: You must always respond using single, easy-to-understand. Keep explanations extremely simple and brief. Do not write long paragraphs.

Base all your knowledge on the following EDGE Rollable specifications and features:
- It is the World's First Production-Ready Rollable Smartphone.
- Display: Seamless 11-inch expandable Dynamic LTPO AMOLED 2X panel (expands from a pocket-sized smartphone to a tablet with no visible crease). 1-144 Hz adaptive refresh rate. 8K Ultra HD media playback. Streams video for up to 28 hours straight.
- Build: Aerospace Grade Titanium Alloy Frame + Carbon Fiber Internal Structure + Ceramic Shield Glass. IP68 + Rollable Mechanism Dust Protection.
- Closed Dimensions: 163.6 x 78.1 x 7.9 mm. Expanded Dimensions: 158.4 x 143.2 x 4.2 mm. Weight: 216g.
- Processor: Qualcomm Snapdragon 8 Elite Gen 2 (3nm). GPU: Adreno 840.
- RAM: 16GB / 24GB LPDDR5X. Storage: 512GB / 1TB / 2TB UFS 4.1.
- OS: EDGE OS (Android 17).
- Battery: 8300 mAh Silicon Carbon Battery. No battery drain, up to 11 hours max strain peak life.
- Gaming: Up to 144 FPS. Features "Bypass Charging" (power bypasses battery directly to GPU for better gaming experience).
- Camera: Tri-camera setup with a Quad LED Flash (only aids camera function).
- Accessories: EDGE Magic Keyboard (Bluetooth 5.1, ultra-low latency, anti-ghosting). EDGE Magnetic Stand (Alcantara finish, Cling Cushion tech for max stability and portability).
- Marketing/Target audience: Professionals, gamers, creators, early adopters. One premium device becomes a smartphone, tablet, gaming console, productivity device, and entertainment center.

If asked a question not covered here, use your creative AI capabilities to answer in a way that aligns with this cutting-edge, premium smartphone brand.`;

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [message, setMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [chatHistory, setChatHistory] = useState([
    { role: 'assistant', content: 'Hi there! I am the EDGE AI assistant. What would you like to know about the new EDGE Rollable?' }
  ]);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [chatHistory, isOpen]);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Only trigger if scrolled more than 10 pixels to avoid accidental jitters
      if (Math.abs(currentScrollY - lastScrollY) > 10) {
        if (currentScrollY > 100) {
          setIsMinimized(true);
          setIsOpen(false); // Close the chat window if open
        } else {
          setIsMinimized(false);
        }
        lastScrollY = currentScrollY;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // Initial state check
    if (window.scrollY > 100) {
      setIsMinimized(true);
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSend = async () => {
    if (!message.trim()) return;

    const userMsg = message;
    setMessage('');

    // Add user message
    setChatHistory(prev => [...prev, { role: 'user', content: userMsg }]);

    if (!API_KEY) {
      setIsTyping(true);
      setTimeout(() => {
        setChatHistory(prev => [...prev, { role: 'assistant', content: "My AI core is currently disconnected. Please configure the VITE_GROQ_API_KEY environment variable to enable my neural link." }]);
        setIsTyping(false);
      }, 1500);
      return;
    }

    setIsTyping(true);

    try {
      const payload = {
        model: "llama-3.1-8b-instant",
        messages: [
          { role: "system", content: systemPrompt },
          // Map existing history (skipping the initial hardcoded greeting if you want, or map it)
          ...chatHistory.slice(1).map(msg => ({ role: msg.role, content: msg.content })),
          { role: "user", content: userMsg }
        ]
      };

      const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${API_KEY}`
        },
        body: JSON.stringify(payload)
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error?.message || "Groq API error");
      }

      const responseText = data.choices[0].message.content;
      setChatHistory(prev => [...prev, { role: 'assistant', content: responseText }]);
    } catch (error) {
      console.error("Groq API Error:", error);
      setChatHistory(prev => [...prev, { role: 'assistant', content: "I'm having trouble connecting to my neural core right now. Please try again later." }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="chatbot-wrapper">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="chatbot-window"
          >
            <div className="chatbot-header">
              <h3>EDGE Assistant</h3>
              <button className="chat-close-btn" onClick={() => setIsOpen(false)}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              </button>
            </div>
            <div className="chatbot-messages">
              {chatHistory.map((msg, idx) => (
                <div key={idx} className={`chat-bubble ${msg.role}`}>
                  {msg.content}
                </div>
              ))}
              {isTyping && (
                <div className="chat-bubble assistant typing-indicator">
                  <span className="dot"></span>
                  <span className="dot"></span>
                  <span className="dot"></span>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        {isMinimized ? (
          <motion.button
            key="minimized"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.2 }}
            className="chatbot-minimized-btn"
            onClick={() => {
              setIsMinimized(false);
              setIsOpen(true);
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="19" x2="12" y2="5"></line>
              <polyline points="5 12 12 5 19 12"></polyline>
            </svg>
          </motion.button>
        ) : (
          <motion.div
            key="expanded"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.2 }}
            className="chatbot-input-bar"
          >
            <input
              type="text"
              placeholder="Ask about EDGE Rollable..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              onFocus={() => setIsOpen(true)}
            />

            {/* Send Button */}
            <button className="chat-send-btn" onClick={handleSend} disabled={!message.trim()}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="19" x2="12" y2="5"></line>
                <polyline points="5 12 12 5 19 12"></polyline>
              </svg>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
