# EDGE ARROW - Marketing Landing Page

Welcome to the official repository for the **EDGE ARROW** marketing landing page. This page serves as a premium, state-of-the-art interactive product showcase for the world's first production-ready rollable display smartphone.

Built using **React**, **Vite**, and **Framer Motion**, the application features rich visual showcases, custom WebGL ray effects, animated color transitions, and an embedded AI chatbot.

---

## Hardware & Software Innovations

The **EDGE ARROW** marks a historical milestone in mobile hardware development:

*   **World's First Rollable Production Display**: A multi-modular Dynamic LTPO AMOLED 2X, HDR10+ screen that extends seamlessly from a **6.3-inch phone** (18.5:9 aspect ratio) into an expansive **9.2-inch tablet** (21:9 aspect ratio) with just a simple gesture, powered by 3 twin hinges and an independent motorized drivetrain.
*   **Aerospace Grade Titanium Chassis**: Forged with a premium titanium and carbon-fiber frame, featuring smooth round curves with no peaked edges, making it safe and highly durable.
*   **The Infinity Display**: Eliminates default buttons and cutouts by integrating volume rockers and the front-facing camera completely in-display.
*   **The Eyes of the Edge (Triple Lens Camera)**:
    *   **200 MP Main**: Samsung ISOCELL HP2 sensor with high stability gimbal stabilization.
    *   **50 MP Ultrawide**: Samsung ISOCELL JN3 sensor capturing 97% of natural light with advanced dim light optimization.
    *   **50 MP Telephoto**: Sony IMX854 sensor supporting 5× optical zoom.
*   **EDGE OS (Android 17 based)**: Runs on a 3nm processor with multithreading performance. Built with customization variables in mind at every layer.
*   **The Magic Keyboard**: Low-latency Bluetooth capsule keyboard filled with memory foam for a tactile, clicky typing feel.

---

## Features & Interactive Showcases

1.  **Scroll Wheel Hero Showcase**: Scroll down to spin a responsive, mathematically positioned showcase wheel that shifts between phone finishes and updates product descriptors smoothly.
2.  **Color Picker Capsule Menu**: An interactive liquid-glass style island selector that allows users to toggle between Slate, Gold, and Violet chassis finishes.
3.  **Gimbal Camera and Extendable Video Showcase**: Highly visual mockups highlighting camera specifications and rolling screen ratios.
4.  **Specifications & Capabilities Panel**: A sleek specifications dashboard with matched column heights, containing a full spec table next to cards detailing the **144 FPS Gaming (with Bypass Charging directly to the GPU)** and **LTPO AMOLED 2X** capabilities.
5.  **EDGE ARROW ChatBot**: An embedded AI chatbot configured on a Llama 3.1 LLM (powered by Groq) trained on the phone's hardware parameters to answer questions in real-time.

---

## Getting Started

To run the project locally, ensure you have **Node.js** installed on your machine.

### 1. Clone the repository and install dependencies
```bash
npm install
```

### 2. Configure Environment Variables (Optional)
To enable the AI neural core of the **EDGE ARROW** chatbot, create a `.env` file in the root directory and add your Groq API Key:
```env
VITE_GROQ_API_KEY=your_groq_api_key_here
```

### 3. Run the Local Development Server
```bash
npm run dev
```
Open [http://localhost:5173/](http://localhost:5173/) in your browser.

### 4. Build for Production
To bundle the optimized assets for distribution:
```bash
npm run build
```

---

## Tech Stack

*   **Core**: React 19, JavaScript (ES6+), HTML5
*   **Styling**: Vanilla CSS, Flexbox, CSS Grid
*   **Animation**: Framer Motion 12 (physics-based momentum scroll, transitions, layouts)
*   **WebGL**: OGL (optimized WebGL helper framework for canvas rendering)
*   **Bundling**: Vite 8
*   **Code Quality**: Oxlint (ultra-fast linter)
