"use client";

import { useRef, useEffect, useState } from 'react';

const FluidBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMouseInCanvas, setIsMouseInCanvas] = useState(false);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    let animationFrameId: number;
    let particles: Particle[] = [];
    let frame = 0;
    
    // Set canvas size to match window size
    const resizeCanvas = () => {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      // Re-initialize particles when canvas size changes
      initParticles();
    };
    
    // Handle mouse movement
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
      setIsMouseInCanvas(true);
    };
    
    const handleMouseLeave = () => {
      setIsMouseInCanvas(false);
    };
    
    // Create a particle
    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
      originalX: number;
      originalY: number;
      pulse: number;
      pulseSpeed: number;
      
      constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.originalX = x;
        this.originalY = y;
        this.vx = 0;
        this.vy = 0;
        this.size = Math.random() * 3 + 2;
        this.pulse = 0;
        this.pulseSpeed = Math.random() * 0.02 + 0.01;
        
        // Light theme colors (blues and teals)
        const opacity = Math.random() * 0.7 + 0.3;
        const r = Math.floor(Math.random() * 50 + 100);
        const g = Math.floor(Math.random() * 150 + 155);
        const b = Math.floor(Math.random() * 150 + 155);
        this.color = `rgba(${r}, ${g}, ${b}, ${opacity})`;
      }
      
      update() {
        if (!canvas) return;
        // Fluid motion: Sine wave movement + small random shift
        const time = frame / 100;
        const angle = time + (this.originalX / canvas.width) * 4;
        
        this.vx = Math.sin(angle) * 0.5;
        this.vy = Math.cos(angle) * 0.5;
        
        // Add small random movement to make it more organic
        this.vx += (Math.random() - 0.5) * 0.2;
        this.vy += (Math.random() - 0.5) * 0.2;
        
        // Minimal cursor influence if mouse is in canvas
        if (isMouseInCanvas) {
          const dx = mousePosition.x - this.x;
          const dy = mousePosition.y - this.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100) {
            // Very subtle push away from cursor
            this.vx -= (dx / distance) * 0.1;
            this.vy -= (dy / distance) * 0.1;
          }
        }
        
        this.x += this.vx;
        this.y += this.vy;
        
        // Pulse effect for particles
        this.pulse += this.pulseSpeed;
        if (this.pulse > Math.PI * 2) this.pulse = 0;
        
        // If particles move too far from their origin, pull them back
        const dx = this.x - this.originalX;
        const dy = this.y - this.originalY;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance > 100) {
          this.x -= dx * 0.01;
          this.y -= dy * 0.01;
        }
        
        // Wrap around edges
        if (this.x < 0) this.x = canvas.width;
        if (this.x > canvas.width) this.x = 0;
        if (this.y < 0) this.y = canvas.height;
        if (this.y > canvas.height) this.y = 0;
      }
      
      draw() {
        if (!ctx) return;
        // Pulse size effect
        const pulseFactor = 1 + Math.sin(this.pulse) * 0.3;
        const currentSize = this.size * pulseFactor;
        
        ctx.beginPath();
        ctx.arc(this.x, this.y, currentSize, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
        
        // Add a subtle glow effect
        ctx.shadowBlur = 15;
        ctx.shadowColor = this.color;
      }
      
      connect() {
        if (!ctx) return;
        
        for (let i = 0; i < particles.length; i++) {
          const otherParticle = particles[i];
          const dx = this.x - otherParticle.x;
          const dy = this.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 150) {
            // Fade opacity based on distance
            const opacity = 1 - (distance / 150);
            ctx.beginPath();
            ctx.strokeStyle = this.color.replace(/[\d\.]+\)$/g, `${opacity * 0.6})`);
            ctx.lineWidth = 0.6;
            ctx.moveTo(this.x, this.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.stroke();
          }
        }
      }
    }
    
    // Initialize particles
    const initParticles = () => {
      if (!canvas) return;
      particles = [];
      const density = Math.min(window.innerWidth, window.innerHeight) < 768 ? 20 : 15;
      const particlesCount = (canvas.width * canvas.height) / (density * 400);
      
      for (let i = 0; i < particlesCount; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        particles.push(new Particle(x, y));
      }
    };
    
    // Animation loop
    const animate = () => {
      if (!canvas || !ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Reset shadow for better performance
      ctx.shadowBlur = 0;
      
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].connect();
      }
      
      for (let i = 0; i < particles.length; i++) {
        particles[i].draw();
      }
      
      frame++;
      animationFrameId = requestAnimationFrame(animate);
    };
    
    // Initial setup
    resizeCanvas();
    animate();
    
    // Event listeners
    window.addEventListener('resize', resizeCanvas);
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);
    
    // Cleanup on unmount
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, [mousePosition, isMouseInCanvas]);
  
  return (
    <canvas 
      ref={canvasRef}
      className="absolute inset-0 w-full h-full -z-10"
      style={{ 
        backgroundColor: '#f8fafc',
      }}
    />
  );
};

export default FluidBackground; 