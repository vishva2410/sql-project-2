import React, { useState, useEffect } from 'react';
import { useGameStore } from '../store';
import './UIOverlay.css'; // Optional: you can keep inline styles or use CSS

const UIOverlay = () => {
    const [showConfetti, setShowConfetti] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const {
        phase,
        score,
        startGame,
        resetGame,
        selectedCity,
        selectedShip,
        isHandDetected,
        gesture,
        health,
        highScore,
        timeLeft,
        wave
    } = useGameStore();

    const shipTypes = {
        speedster: {
            name: 'Speedster',
            color: '#ff0055',
            icon: '⚡',
            description: 'Fast & Agile',
            stats: 'Speed: ★★★☆ | Health: ★☆☆☆'
        },
        balanced: {
            name: 'Interceptor',
            color: '#00ffff',
            icon: '🚀',
            description: 'All-Rounder',
            stats: 'Speed: ★★☆☆ | Health: ★★☆☆'
        },
        tank: {
            name: 'Titan',
            color: '#00ff00',
            icon: '🛡️',
            description: 'Heavy Defender',
            stats: 'Speed: ★☆☆☆ | Health: ★★★★'
        }
    };

    const cityTypes = {
        neon_city: {
            name: 'Neon City',
            color: '#ff00ff',
            icon: '🏙️',
            description: 'Cyberpunk Metropolis'
        },
        mars_colony: {
            name: 'Mars Colony',
            color: '#ff5500',
            icon: '🔴',
            description: 'Red Planet Outpost'
        },
        retro_grid: {
            name: 'Retro Grid',
            color: '#ffff00',
            icon: '🟨',
            description: '80s Arcade World'
        }
    };

    // Victory confetti effect
    useEffect(() => {
        if (phase === 'victory') {
            const t = setTimeout(() => setShowConfetti(true), 0);
            const timer = setTimeout(() => setShowConfetti(false), 5000);
            return () => {
                clearTimeout(t);
                clearTimeout(timer);
            };
        }
    }, [phase]);

    const handleStartGame = async () => {
        if (!isHandDetected) return;
        setIsLoading(true);
        await startGame();
        setIsLoading(false);
    };

    if (phase === 'menu') {
        return (
            <div className="ui-overlay menu-overlay">
                {showConfetti && <div className="confetti-container" />}

                <div className="ui-container">
                    {/* Animated Header */}
                    <div className="header-group">
                        <h1 className="game-title">
                            <span className="title-gradient">GESTURE</span>
                            <span className="title-neon">RACER</span>
                        </h1>
                        <p className="subtitle">
                            Control with your hand • Navigate through space
                            <span className="blink"> ✋</span>
                        </p>
                    </div>

                    {/* Ship Selection */}
                    <div className="selection-section">
                        <h2 className="section-title">
                            <span className="icon">🚀</span> SELECT YOUR SHIP
                        </h2>
                        <div className="card-grid">
                            {Object.entries(shipTypes).map(([key, ship]) => (
                                <button
                                    key={key}
                                    className={`ship-card ${selectedShip === key ? 'selected' : ''}`}
                                    onClick={() => useGameStore.setState({ selectedShip: key })}
                                    style={{ '--ship-color': ship.color }}
                                >
                                    <div className="ship-icon" style={{ color: ship.color }}>
                                        {ship.icon}
                                    </div>
                                    <div className="ship-info">
                                        <h3>{ship.name}</h3>
                                        <p className="ship-desc">{ship.description}</p>
                                        <div className="ship-stats">{ship.stats}</div>
                                    </div>
                                    {selectedShip === key && (
                                        <div className="selection-indicator">
                                            <div className="pulse-ring" />
                                            ✓ SELECTED
                                        </div>
                                    )}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* City Selection */}
                    <div className="selection-section">
                        <h2 className="section-title">
                            <span className="icon">🌍</span> CHOOSE SECTOR
                        </h2>
                        <div className="card-grid">
                            {Object.entries(cityTypes).map(([key, city]) => (
                                <button
                                    key={key}
                                    className={`city-card ${selectedCity === key ? 'selected' : ''}`}
                                    onClick={() => useGameStore.setState({ selectedCity: key })}
                                >
                                    <div className="city-icon" style={{ color: city.color }}>
                                        {city.icon}
                                    </div>
                                    <div className="city-info">
                                        <h3>{city.name}</h3>
                                        <p>{city.description}</p>
                                    </div>
                                    {selectedCity === key && (
                                        <div className="selection-indicator">
                                            <div className="pulse-ring" />
                                            ✓ ACTIVE
                                        </div>
                                    )}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Hand Detection Status */}
                    <div className="status-panel">
                        <div className="status-indicator">
                            <div className={`hand-icon ${isHandDetected ? 'detected' : 'searching'}`}>
                                ✋
                            </div>
                            <div className="status-info">
                                <h3>HAND TRACKING</h3>
                                <p className={isHandDetected ? 'status-good' : 'status-bad'}>
                                    {isHandDetected
                                        ? '✓ System Ready - Hand Detected'
                                        : '⚠ Searching for hand...'}
                                </p>
                                <p className="hint">
                                    {isHandDetected
                                        ? 'Move hand left/right to steer'
                                        : 'Show your hand clearly to the camera'}
                                </p>
                            </div>
                        </div>

                        <div className="gesture-preview">
                            <div className="gesture-icon">{gesture === 'fist' ? '✊' : '🖐'}</div>
                            <span>Current Gesture: {gesture.toUpperCase()}</span>
                        </div>
                    </div>

                    {/* High Score */}
                    <div className="high-score">
                        🏆 HIGH SCORE: <span className="score-value">{Math.floor(highScore)}</span>
                    </div>

                    {/* Start Button */}
                    <button
                        className={`start-button ${isHandDetected ? 'enabled' : 'disabled'} ${isLoading ? 'loading' : ''}`}
                        onClick={handleStartGame}
                        disabled={!isHandDetected || isLoading}
                    >
                        {isLoading ? (
                            <>
                                <div className="spinner" />
                                INITIALIZING...
                            </>
                        ) : (
                            <>
                                <span className="button-icon">🚀</span>
                                {isHandDetected ? 'IGNITE ENGINES' : 'AWAITING HAND SIGNAL'}
                                <span className="button-hotkey">(SPACE)</span>
                            </>
                        )}
                    </button>

                    {/* Controls Legend */}
                    <div className="controls-legend">
                        <div className="control-item">
                            <kbd>← →</kbd>
                            <span>Steer Ship</span>
                        </div>
                        <div className="control-item">
                            <kbd>✊</kbd>
                            <span>Fire Lasers</span>
                        </div>
                        <div className="control-item">
                            <kbd>SPACE</kbd>
                            <span>Pause/Resume</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    if (phase === 'victory') {
        return (
            <div className="ui-overlay victory-overlay">
                <div className="particle-background" />

                <div className="ui-container victory-container">
                    <div className="trophy-icon">🏆</div>
                    <h1 className="victory-title">MISSION ACCOMPLISHED</h1>

                    <div className="score-display">
                        <div className="score-item">
                            <span className="score-label">FINAL SCORE</span>
                            <span className="score-value-large">{Math.floor(score)}</span>
                        </div>
                        <div className="score-item">
                            <span className="score-label">HIGH SCORE</span>
                            <span className="score-value-large">{Math.floor(highScore)}</span>
                        </div>
                    </div>

                    <div className="victory-stats">
                        <div className="stat">
                            <div className="stat-icon">🌊</div>
                            <div className="stat-value">Wave {wave}</div>
                        </div>
                        <div className="stat">
                            <div className="stat-icon">⏱️</div>
                            <div className="stat-value">{Math.floor(timeLeft)}s</div>
                        </div>
                        <div className="stat">
                            <div className="stat-icon">{shipTypes[selectedShip]?.icon}</div>
                            <div className="stat-value">{shipTypes[selectedShip]?.name}</div>
                        </div>
                    </div>

                    <p className="victory-message">
                        The galaxy is safe thanks to your expert piloting!<br />
                        Your ship will be remembered in the Hall of Fame.
                    </p>

                    <div className="action-buttons">
                        <button className="action-button primary" onClick={resetGame}>
                            <span className="button-icon">🔄</span>
                            FLY AGAIN
                        </button>
                        <button className="action-button secondary" onClick={() => console.log('Share score')}>
                            <span className="button-icon">📤</span>
                            SHARE SCORE
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    // In-Game HUD
    return (
        <div className="ui-overlay game-hud">
            {/* Top Bar */}
            <div className="hud-top">
                <div className="hud-left">
                    <div className="score-display-hud">
                        <div className="score-label-hud">SCORE</div>
                        <div className="score-value-hud">{Math.floor(score)}</div>
                    </div>

                    <div className="wave-display">
                        <div className="wave-icon">🌊</div>
                        <div className="wave-text">WAVE {wave}</div>
                    </div>
                </div>

                <div className="hud-center">
                    <div className="time-display">
                        <div className="time-icon">⏱️</div>
                        <div className="time-text">{Math.floor(timeLeft)}s</div>
                    </div>
                </div>

                <div className="hud-right">
                    <div className="gesture-display">
                        <div className={`gesture-icon-hud ${gesture}`}>
                            {gesture === 'fist' ? '✊' : '🖐'}
                        </div>
                        <div className="gesture-text">{gesture.toUpperCase()}</div>
                    </div>

                    <div className="connection-status">
                        <div className={`status-dot ${isHandDetected ? 'connected' : 'disconnected'}`} />
                        <span className="status-text">
                            {isHandDetected ? 'CONNECTED' : 'NO SIGNAL'}
                        </span>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="hud-bottom">
                <div className="health-bar-container">
                    <div className="health-label">
                        <div className="health-icon">❤️</div>
                        INTEGRITY
                    </div>
                    <div className="health-bar">
                        <div
                            className="health-fill"
                            style={{ width: `${health}%` }}
                            data-health={health}
                        />
                        <div className="health-value">{Math.floor(health)}%</div>
                    </div>
                </div>

                <div className="ship-info-hud">
                    <div className="ship-name-hud" style={{ color: shipTypes[selectedShip]?.color }}>
                        {shipTypes[selectedShip]?.icon} {shipTypes[selectedShip]?.name}
                    </div>
                    <div className="sector-name-hud">
                        📍 {selectedCity?.replace('_', ' ').toUpperCase()}
                    </div>
                </div>

                <div className="hud-controls">
                    <button className="hud-button" onClick={resetGame} title="Restart">
                        <span className="button-icon">🔄</span>
                    </button>
                    <button className="hud-button" onClick={() => console.log('Pause')} title="Pause">
                        <span className="button-icon">⏸️</span>
                    </button>
                </div>
            </div>

            {/* Notifications */}
            {score > 0 && score % 1000 < 50 && (
                <div className="notification">
                    <div className="notification-content">
                        <span className="notification-icon">⭐</span>
                        +1000 BONUS!
                    </div>
                </div>
            )}

            {health < 30 && (
                <div className="warning-alert">
                    <div className="warning-icon">⚠️</div>
                    CRITICAL DAMAGE!
                </div>
            )}
        </div>
    );
};

export default UIOverlay;