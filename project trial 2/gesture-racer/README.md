# 🎮 Gesture Racer - AI-Powered 3D Racing Game

![React](https://img.shields.io/badge/React-18-blue?logo=react)
![Three.js](https://img.shields.io/badge/Three.js-R3F-black?logo=three.js)
![MediaPipe](https://img.shields.io/badge/MediaPipe-Hand%20Tracking-orange)
![Vite](https://img.shields.io/badge/Vite-Lightning%20Fast-purple?logo=vite)
![License](https://img.shields.io/badge/License-MIT-green)

> **Control a spaceship with your HANDS! No keyboard, no mouse—just pure gesture-based gameplay.**

An immersive 3D space combat racing game built with React Three Fiber and powered by real-time AI hand tracking. Fly through neon cities, battle enemies, and experience next-generation Human-Computer Interaction.

---

## 🌟 Key Features

### 🖐️ **Gesture Control System**
- **Real-time Hand Tracking**: Powered by Google MediaPipe's advanced AI models
- **21-Point Landmark Detection**: Precise finger and palm tracking
- **Multi-Gesture Recognition**:
  - ✊ **Fist** → Rapid fire lasers
  - ✋ **Open Palm** → Navigate and steer
  - ☝️ **Pointing** → Precision targeting
  - 👌 **OK Sign** → Switch weapons
  - 👍 **Thumbs Up** → Health power-up

### 🚀 **Gameplay**
- **3D Space Combat**: Dogfight against intelligent enemy AI
- **Infinite Procedural Track**: Dynamic environment generation
- **Multiple City Themes**:
  - 🌃 Neon City (Cyberpunk aesthetic)
  - 🔴 Mars Colony (Red planet vibes)
  - 🌈 Retro Grid (Synthwave nostalgia)
  - 🏙️ Cyberpunk Metropolis
  - 🏚️ Abandoned Ruins
- **Power-Up System**: Health, shields, rapid fire, multi-shot
- **Boss Battles**: Epic encounters with large-scale enemies

### 🎨 **Visual Excellence**
- **Advanced 3D Rendering**: React Three Fiber + Three.js
- **Real-time Lighting**: Dynamic shadows and particle effects
- **Post-processing Effects**: Bloom, motion blur, depth of field
- **Responsive UI**: Cyberpunk-themed HUD with live stats

---

## 🎯 How to Play

### Prerequisites
- **Webcam**: Required for hand tracking
- **Modern Browser**: Chrome/Edge recommended (Firefox/Safari supported)
- **Good Lighting**: Ensures accurate hand detection

### Controls
1. **Position your hand** in front of the webcam
2. **Move your palm** left/right to steer the ship
3. **Make a FIST** to fire lasers continuously
4. **Use gestures** to activate special abilities:
   - Thumbs up for health boost
   - Peace sign for double damage
   - OK sign to change weapons

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **React 18** | UI framework |
| **Vite** | Lightning-fast build tool |
| **Three.js** | 3D rendering engine |
| **React Three Fiber** | React renderer for Three.js |
| **@react-three/drei** | 3D helpers and abstractions |
| **MediaPipe Tasks Vision** | AI hand tracking |
| **Zustand** | State management |
| **TailwindCSS** | Utility-first styling |

---

## 🚀 Installation & Setup

### 1. Clone the Repository
```bash
git clone https://github.com/Vishvateja2005a/Computer-Vision-and-Live-Tracking-Projects.git
cd "project trial 2/gesture-racer"
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Development Server
```bash
npm run dev
```

The game will open at `http://localhost:5173`

### 4. Build for Production
```bash
npm run build
```

### 5. Preview Production Build
```bash
npm run preview
```

---

## 📁 Project Structure

```
gesture-racer/
├── src/
│   ├── components/
│   │   ├── HandController.jsx    # MediaPipe integration
│   │   ├── GameScene.jsx          # 3D world renderer
│   │   ├── GameLogic.jsx          # Game mechanics
│   │   ├── Track.jsx              # Procedural environment
│   │   ├── CombatElements.jsx     # Lasers & enemies
│   │   └── UIOverlay.jsx          # HUD & menus
│   ├── store.js                   # Zustand state manager
│   ├── App.jsx                    # Root component
│   └── index.css                  # Global styles
├── public/                        # Static assets
└── package.json
```

---

## 🎮 Game Mechanics

### Combat System
- **Laser Weapons**: Three types (Standard, Spread, Focused)
- **Enemy AI**: Evasive, aggressive, and tank variants
- **Collision Detection**: Real-time physics
- **Score Multipliers**: Build combos by chaining kills

### Progression
- **Wave System**: Difficulty increases over time
- **Boss Encounters**: Appear at score milestones
- **Power Levels**: Upgrade ship capabilities
- **High Score Tracking**: Compete against yourself

---

## 🧠 AI & Computer Vision

### Hand Tracking Pipeline
1. **Video Capture**: 640x480 @ 30 FPS
2. **MediaPipe Processing**: Runs hand detection model
3. **Landmark Extraction**: 21 3D coordinates per hand
4. **Gesture Classification**: Custom algorithm analyzes finger positions
5. **Smoothing & Buffering**: Reduces jitter for stable control
6. **Game Input Mapping**: Translates gestures to actions

### Gesture Recognition Engine
- **Finger Extension Detection**: Geometric analysis of joint angles
- **Palm Orientation**: 3D vector calculations
- **Confidence Scoring**: Filters false positives
- **Temporal Smoothing**: Multi-frame buffering

---

## 🐛 Troubleshooting

### Camera Not Detected
- Ensure browser has camera permissions
- Close other apps using the webcam
- Try a different browser (Chrome recommended)

### Poor Hand Tracking
- Improve lighting conditions
- Remove background clutter
- Position hand at arm's length from camera

### Performance Issues
- Lower graphics quality in settings
- Close unnecessary browser tabs
- Use Performance Mode (lower FPS = higher accuracy)

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

**Vishva Teja Guduguntla**  
- GitHub: [@Vishvateja2005a](https://github.com/Vishvateja2005a)
- Portfolio: [Check out my other CV projects](https://github.com/Vishvateja2005a/Computer-Vision-and-Live-Tracking-Projects)

---

## 🙏 Acknowledgments

- [MediaPipe](https://github.com/google/mediapipe) - Google's ML framework
- [Three.js](https://threejs.org/) - 3D graphics library
- [React Three Fiber](https://github.com/pmndrs/react-three-fiber) - React renderer for Three.js
- [Zustand](https://github.com/pmndrs/zustand) - State management

---

## 🔮 Future Enhancements

- [ ] Multiplayer mode with hand gesture battles
- [ ] Voice commands for special abilities
- [ ] Mobile AR support (ARCore/ARKit)
- [ ] Custom gesture training
- [ ] Leaderboards and achievements
- [ ] VR headset compatibility

---

**⭐ If you found this project interesting, please give it a star!**
