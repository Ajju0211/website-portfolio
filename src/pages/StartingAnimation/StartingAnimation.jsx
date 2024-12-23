import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import HomePage from "../HomePage/HomePage";
import logo from "../../assets/image.png";


const StartingAnimation = () => {
    const [progress, setProgress] = useState(0);
    const [showScreen, setShowScreen] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => (prev < 100 ? prev + 1 : 100));
        }, 10);

        if (progress === 100) {
            clearInterval(interval);
            setTimeout(() => setShowScreen(true), 500);
        }

        return () => clearInterval(interval);
    }, [progress]);

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
                width: "100vw",
                background: "#000",
            }}
        >
            {!showScreen ? (
                <>
                    <img
                        src={logo}
                        alt="Apple Logo"
                        style={{ 
                            width: "80px",
                            height: "80px",
                            marginBottom: "20px",
                            boxShadow: "0 0 20px rgba(255, 255, 255, 0.7)",
                            borderRadius: "50%"
                         }}
                    />
                    <div
                        style={{
                            height: "10px",
                            width: "200px",
                            borderRadius: "5px",
                            background: "linear-gradient(145deg, #494949, #fff)",
                            boxShadow: "0 0 20px rgba(255, 255, 255, 0.7)",
                            overflow: "hidden",
                        }}
                    >
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${progress}%` }}
                            style={{
                                height: "100%",
                                background: "linear-gradient(145deg, #ffffff, #d4d4d4)",
                                boxShadow: "0 0 20px rgba(255, 255, 255, 0.7)",
                            }}
                            transition={{ duration: 0.1 }}
                        />
                    </div>
                    <div
                        style={{
                            marginTop: "20px",
                            color: "#fff",
                            fontSize: "14px",
                            fontFamily: "Arial, sans-serif",
                        }}
                    >
                        {progress < 100 ? "Starting up..." : "Welcome"}
                    </div>
                </>
            ) : (
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "100vh",
                        width: "100vw",
                        background: "#1e1e1e",
                        color: "#fff",
                        fontSize: "24px",
                        fontWeight: "bold",
                    }}
                >
                    <HomePage />
                </motion.div>
            )}
        </div>
    );
};

export default StartingAnimation;
