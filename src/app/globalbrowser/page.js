"use client"

import { useState, useEffect } from "react";

export default function Global(){
    const [position, setPosition] = useState({ x:0, y:0})

    useEffect(() => {
        function handleMove(e) {
            console.log('Mouse moved:', e.clientX, e.clientY);
            setPosition({x:e.clientX, y:e.clientY}) //client = a coordinate value while being clicked
        }
        window.addEventListener('pointermove', handleMove);
        return () => {
            window.removeEventListener('pointermove', handleMove)
        };
    }, [])

    return (
        <div style={{ 
            position: 'absolute',
            backgroundColor: 'pink',
            borderRadius: '50%',
            opacity: 0.6,
            transform: `translate(${position.x}px, ${position.y}px,)`,
            pointerEvents: 'none',
            left: -20,
            top: -20,
            width: 40,
            height: 40
         }} />

    )
}