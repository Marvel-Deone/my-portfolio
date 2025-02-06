'use client'

import { useEffect, useRef, useState } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  // Store last known mouse coordinates in a ref
  const lastMousePosition = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Handler for mouse move events
    const handleMouseMove = (e: MouseEvent) => {
      lastMousePosition.current = { x: e.clientX, y: e.clientY };
      setPosition({ x: e.clientX + window.scrollX, y: e.clientY + window.scrollY });
    };

    // Handler for scroll events (generic Event)
    const handleScroll = (_e: Event) => {
      setPosition({
        x: lastMousePosition.current.x + window.scrollX,
        y: lastMousePosition.current.y + window.scrollY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className="cursor-inner"
      style={{
        position: "absolute", // Using absolute so it scrolls with the document
        top: position.y,
        left: position.x,
        zIndex: 2000,
        width: "12px",
        height: "12px",
        borderRadius: "50%",
        backgroundColor: "rgb(174, 160, 160);",
        pointerEvents: "none",
        transform: "translate(-50%, -50%)",
        transition: "transform all 0.8s ease-out",
      }}
    />
  );
};

export default CustomCursor;
