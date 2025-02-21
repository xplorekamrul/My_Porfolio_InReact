// instraction 

// take it global css 
// .custom-cursor {
//   position: fixed;
//   pointer-events: none; /* Prevent interaction with the cursor */
//   border: 2px solid #fff; /* Optional border for visibility */
//   z-index: 9999; /* Ensure it appears above other elements */
// }

//then import into app.jsx

import React, { useEffect, useRef } from 'react';

const CustomCursor = () => {
  const canvasRef = useRef(null);
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const particlesArray = [];
    let mouseX = 0;
    let mouseY = 0;

    // Resize the canvas to the full window size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    window.addEventListener('resize', () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });

    // Update the position of the custom cursor
    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      for (let i = 0; i < 5; i++) {  // Increase number of particles
        createParticle(e.clientX, e.clientY);
      }
    });

    // Particle object constructor
    class Particle {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 3 + 1; // Reduced size for smaller particles
        this.speedX = Math.random() * 3 - 1.5;
        this.speedY = Math.random() * 3 - 1.5;
        this.color = 'rgba(0, 255, 0, 0.7)'; // Green color
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.size > 0.2) this.size -= 0.1;
      }

      draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Create particles at the cursor position
    const createParticle = (x, y) => {
      particlesArray.push(new Particle(x, y));
    };

    const animateParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particlesArray.forEach((particle, index) => {
        particle.update();
        particle.draw();

        if (particle.size <= 0.2) {
          particlesArray.splice(index, 1);
        }
      });
      requestAnimationFrame(animateParticles);
    };

    animateParticles();
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="w-[10px] h-[10px] bg-green-500 rounded-full fixed pointer-events-none z-50"
      ></div>
      <canvas
        ref={canvasRef}
        className="fixed top-0 left-0 pointer-events-none"
      ></canvas>
    </>
  );
};

export default CustomCursor;
