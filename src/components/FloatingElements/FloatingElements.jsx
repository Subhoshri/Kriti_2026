import React, { useState, useEffect } from "react";
import "./FloatingElements.css";

const FloatingElements = () => {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePos({
                x: (e.clientX / window.innerWidth) * 2 - 1,
                y: (e.clientY / window.innerHeight) * 2 - 1,
            });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    // Parallax offset calculation
    const getParallaxOffset = (strength) => ({
        x: mousePos.x * strength,
        y: mousePos.y * strength,
    });

    return (
        <div className="floating-elements">
            {/* Floating Star 1 */}
            <div
                className="floating-element floating-star-1"
                style={{
                    transform: `translate(${getParallaxOffset(15).x}px, ${getParallaxOffset(15).y}px)`,
                }}
            >
                <svg
                    width="48"
                    height="48"
                    viewBox="0 0 48 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M24 2L30.4 19.6H48L35.2 28.8L41.6 46.4L24 37.2L6.4 46.4L12.8 28.8L0 19.6H17.6L24 2Z"
                        fill="var(--pop-yellow)"
                        stroke="var(--ink)"
                        strokeWidth="1.5"
                    />
                </svg>
            </div>

            {/* Floating Ink Blot 1 */}
            <div
                className="floating-element floating-blot-1"
                style={{
                    transform: `translate(${getParallaxOffset(-12).x}px, ${getParallaxOffset(-12).y}px)`,
                }}
            >
                <svg
                    width="52"
                    height="52"
                    viewBox="0 0 52 52"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <circle
                        cx="26"
                        cy="26"
                        r="20"
                        fill="var(--pop-red)"
                        opacity="0.8"
                    />
                    <circle cx="18" cy="22" r="6" fill="var(--pop-red)" opacity="0.6" />
                    <circle cx="35" cy="20" r="5" fill="var(--pop-red)" opacity="0.7" />
                    <circle cx="22" cy="35" r="7" fill="var(--pop-red)" opacity="0.65" />
                </svg>
            </div>

            {/* Floating Arrow */}
            <div
                className="floating-element floating-arrow-1"
                style={{
                    transform: `translate(${getParallaxOffset(18).x}px, ${getParallaxOffset(18).y}px)`,
                }}
            >
                <svg
                    width="44"
                    height="44"
                    viewBox="0 0 44 44"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M22 2L35 22L25 22L25 42L19 42L19 22L9 22L22 2Z"
                        fill="var(--ink)"
                        stroke="var(--pop-yellow)"
                        strokeWidth="1.5"
                    />
                </svg>
            </div>

            {/* Floating Star 2 */}
            <div
                className="floating-element floating-star-2"
                style={{
                    transform: `translate(${getParallaxOffset(-20).x}px, ${getParallaxOffset(-20).y}px)`,
                }}
            >
                <svg
                    width="40"
                    height="40"
                    viewBox="0 0 48 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M24 2L30.4 19.6H48L35.2 28.8L41.6 46.4L24 37.2L6.4 46.4L12.8 28.8L0 19.6H17.6L24 2Z"
                        fill="var(--pop-red)"
                        stroke="var(--ink)"
                        strokeWidth="1.5"
                    />
                </svg>
            </div>

            {/* Floating Ink Blot 2 */}
            <div
                className="floating-element floating-blot-2"
                style={{
                    transform: `translate(${getParallaxOffset(14).x}px, ${getParallaxOffset(14).y}px)`,
                }}
            >
                <svg
                    width="60"
                    height="60"
                    viewBox="0 0 60 60"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <circle
                        cx="30"
                        cy="30"
                        r="22"
                        fill="var(--pop-yellow)"
                        opacity="0.75"
                    />
                    <circle cx="20" cy="25" r="7" fill="var(--pop-yellow)" opacity="0.6" />
                    <circle cx="40" cy="28" r="6" fill="var(--pop-yellow)" opacity="0.7" />
                    <circle cx="25" cy="40" r="8" fill="var(--pop-yellow)" opacity="0.65" />
                    <circle cx="42" cy="38" r="5" fill="var(--pop-yellow)" opacity="0.55" />
                </svg>
            </div>

            {/* Floating Arrow 2 */}
            <div
                className="floating-element floating-arrow-2"
                style={{
                    transform: `translate(${getParallaxOffset(-16).x}px, ${getParallaxOffset(-16).y}px)`,
                }}
            >
                <svg
                    width="38"
                    height="38"
                    viewBox="0 0 44 44"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M22 2L35 22L25 22L25 42L19 42L19 22L9 22L22 2Z"
                        fill="var(--pop-yellow)"
                        stroke="var(--ink)"
                        strokeWidth="1.5"
                        transform="rotate(90 22 22)"
                    />
                </svg>
            </div>
        </div>
    );
};

export default FloatingElements;
