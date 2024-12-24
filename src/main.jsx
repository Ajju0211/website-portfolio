import { StrictMode, useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { background } from "./assets/index.js";

const InteractiveBackground = () => {
  const [cursorTrail, setCursorTrail] = useState([]);
  const [isMoving, setIsMoving] = useState(true);

  useEffect(() => {
    let timer;

    const handleMouseMove = (event) => {
      setIsMoving(true);
      setCursorTrail((prevTrail) => [
        ...prevTrail.slice(-10),
        { x: event.clientX, y: event.clientY },
      ]);

      clearTimeout(timer);
      timer = setTimeout(() => {
        setIsMoving(false);
      }, 300);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const backgroundStyle = {
    backgroundImage: `url(${background})`,
    backgroundSize: "200px 200px",
    backgroundRepeat: "repeat",
    height: "100vh",
    width: "100vw", 
    position: "relative",
    overflow: "hidden",
  };

  const generateTrailStyle = (index, position) => {
    const delayFactor = index * 0.1;
    const scaleFactor = isMoving ? 1 - index * 0.05 : 0;
    const opacityFactor = isMoving ? 1 - index * 0 : 0;


    const clampedX = Math.max(0, Math.min(window.innerWidth - 20, position.x));
    const clampedY = Math.max(0, Math.min(window.innerHeight - 20, position.y));

    return {
      position: "absolute",
      left: clampedX - 10,
      top: clampedY - 10,
      width: `${20 + index * 2}px`,
      height: `${20 + index * 2}px`,
      background: `radial-gradient(circle, rgba(255, 255, 255, 0.8) 0%, rgba(0, 0, 0, 0) 70%)`,
      borderRadius: "50%",
      pointerEvents: "none",
      zIndex: 10 - index,
      animation: `rotate-scale ${2 + delayFactor}s infinite linear`,
      animationDelay: `${delayFactor}s`,
      opacity: opacityFactor,
      transform: `translate(-50%, -50%) scale(${scaleFactor})`,
      transition: "transform 0.4s ease, opacity 0.4s ease",
    };
  };

  const keyframesStyle = `
    @keyframes rotate-scale {
      0% { transform: rotate(0deg) scale(1); }
      50% { transform: rotate(180deg) scale(1.2); }
      100% { transform: rotate(360deg) scale(1); }
    }
  `;

  return (
    <>
      <style>{keyframesStyle}</style>
      <div style={backgroundStyle}>
        {cursorTrail.map((position, index) => (
          <div key={index} style={generateTrailStyle(index, position)}></div>
        ))}
        <App />
      </div>
    </>
  );
};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <InteractiveBackground />
  </StrictMode>
);
