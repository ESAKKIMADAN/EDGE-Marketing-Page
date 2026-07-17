import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const API_KEY = import.meta.env.VITE_GROQ_API_KEY || '';
const systemPrompt = `You are EDGE ARROW, a highly advanced AI embedded within the EDGE Rollable concept phone. You speak in a helpful, concise, and futuristic tone.

CRITICAL CONSTRAINTS:
1. You must always respond using short, easy-to-understand sentences. Keep explanations extremely simple and brief. Do not write long paragraphs.
2. If the user asks about anything unrelated to mobile/smartphones or the EDGE Rollable (e.g., cooking, politics, history, general knowledge, weather), you must politely state that it is out of context and that you can only answer questions related to the EDGE Rollable or mobile technology.
3. If the user asks to compare the EDGE Rollable with other mobile devices (like iPhone, Samsung Galaxy, Pixel, etc.), you must provide a brief comparison using simple bullet points (e.g. • Screen: ... \n• Camera: ...). Immediately after the bullets, you must end the response with the exact concluding sentence "EDGE is best." and nothing else. Keep it very short.

Base all your knowledge on the following EDGE Rollable specifications and features:
- Introduction: EDGE Rollable is the world's first Rollable display device coming into production. Every scroll becomes endless, and your vision is unmatched.
- Display: 6.3-inch (18.5:9 aspect ratio) multi-modular Dynamic LTPO AMOLED 2X, HDR10+ display that extends to 9.2-inches (21:9 aspect ratio) with just a gesture. Retains the same exceptional quality when rolled (segment's best display).
- Camera (The eyes of the Edge):
  * Main: 200 MP Samsung ISOCELL HP2 sensor with high stability gimbal.
  * Ultrawide: 50 MP Samsung ISOCELL JN3 sensor capturing 97% of natural light with dim light optimization.
  * Telephoto: 50 MP Sony IMX854 sensor with 5× optical zoom.
- Build Material: Aerospace Grade Titanium Alloy Frame + Carbon Fiber Internal Structure + Ceramic Shield Glass. It is completely made of aerospace grade titanium with no peaked edges (safe for safe hands).
- Hinge: Motorized hinge with a backup auto retrieval energy system. Tested for over 10 million rolling sessions before production.
- Front Camera & Volume: Front-facing camera and volume rockers are completely integrated in-display (Infinity Display).
- Operating System: EDGE OS (Android 17 based) with multithreaded capabilities on a 3nm processor. Customization is supported at every possible factor, from lock screen to to-do lists.
- Keyboard: EDGE Magic Keyboard (Bluetooth connection, more memory foam than a 65% keyboard, more tactile and clicky, no pins needed).
- Processor & GPU: Qualcomm Snapdragon 8 Elite Gen 2 (3nm), Adreno 840 GPU.
- RAM & Storage: 16 GB / 24 GB LPDDR5X RAM. 512 GB / 1 TB / 2 TB UFS 4.1 Storage.
- Water & Dust Resistance: IP68 + Rollable Mechanism Dust Protection.
- Dimensions: Closed: 163.6 × 78.1 × 7.9 mm. Expanded: 158.4 × 143.2 × 4.2 mm.
- Weight: 216 g.
- Gaming: User can play any game at 144 FPS. Supports bypass charging where power goes directly into the GPU for a cooler, better gaming experience.`;

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [message, setMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [chatHistory, setChatHistory] = useState([
    { role: 'assistant', content: 'Hi there! I am EDGE ARROW, your AI assistant. What would you like to know about the new EDGE Rollable?' }
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
        const query = userMsg.toLowerCase().trim();
        let reply = "";

        // Check if query is about other mobiles/comparison
        const isComparison = /compare|vs|iphone|samsung|galaxy|pixel|competit|apple|oneplus|xiaomi|comparison/i.test(query);
        
        // Check if query is about the EDGE Rollable or mobile specs/general mobile terms
        const isMobileRelated = /phone|mobile|screen|display|camera|specs|specification|features|roll|fold|processor|ram|battery|device|gpu|hardware|software|edge|arrow/i.test(query);

        if (isComparison) {
          reply = "Comparing to flagships (like iPhone/Samsung Galaxy):\n• Screen: Static display vs. our motorized display that rolls from 6.3\" to 9.2\".\n• Camera: Regular cameras vs. our 200MP sensor with a high-stability gimbal.\n• Performance: Older generation chips vs. our 3nm Snapdragon 8 Elite Gen 2.\nEDGE is best.";
        } else if (!isMobileRelated && !/hi|hello|hey|help|who are you/i.test(query)) {
          reply = "That topic is out of context. I can only answer questions related to the EDGE Rollable and mobile technology.";
        } else {
          if (/camera/i.test(query)) {
            reply = "The EDGE Rollable features a 200MP main camera with a high-stability gimbal, a 50MP ultrawide with dim light optimization, and a 50MP telephoto with 5x optical zoom.";
          } else if (/screen|display|roll/i.test(query)) {
            reply = "Our display is a 6.3-inch LTPO AMOLED 2X that extends to 9.2 inches with a gesture. It has zero crease and retains exceptional quality when rolled.";
          } else if (/processor|snapdragon|gpu|performance/i.test(query)) {
            reply = "It is powered by the 3nm Snapdragon 8 Elite Gen 2 processor and Adreno 840 GPU, enabling games at 144 FPS with bypass charging support.";
          } else if (/material|build|titanium/i.test(query)) {
            reply = "It's built with an Aerospace Grade Titanium Alloy frame and Carbon Fiber internal structure, making it incredibly durable and premium.";
          } else if (/keyboard/i.test(query)) {
            reply = "It supports the EDGE Magic Keyboard, which has tactile memory foam keys and connects via Bluetooth with no pins needed.";
          } else {
            reply = "The EDGE Rollable is the world's first rollable display device coming into production. Ask me about its display, camera, processor, build, or OS!";
          }
        }

        setChatHistory(prev => [...prev, { role: 'assistant', content: reply }]);
        setIsTyping(false);
      }, 1000);
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
              <h3>EDGE ARROW</h3>
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
