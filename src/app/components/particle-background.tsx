"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  color: string;
  opacity: number;
  life: number;
  maxLife: number;
}

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pathname = usePathname();
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  // Different particle settings based on page
  const getParticleSettings = () => {
    switch (pathname) {
      case "/":
        return {
          count: 25,
          colors: ["#ffccd5", "#ffb3c1", "#ff99ac", "#fcc2d7"],
          shape: "heart",
        };
      case "/valentine":
        return {
          count: 35,
          colors: ["#ff6b6b", "#ffd700", "#ff8787", "#FFC0CB"],
          shape: "heart",
        };
      case "/gallery":
        return {
          count: 20,
          colors: ["#c9adff", "#ad8df9", "#927bd4", "#e5dbff"],
          shape: "sparkle",
        };
      default:
        return {
          count: 15,
          colors: ["#ffccd5", "#d8e2dc", "#ffe5d9", "#ffcad4"],
          shape: "circle",
        };
    }
  };

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", updateDimensions);
    updateDimensions();

    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  useEffect(() => {
    if (!canvasRef.current || dimensions.width === 0) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = dimensions.width;
    canvas.height = dimensions.height;

    const settings = getParticleSettings();
    let particles: Particle[] = [];

    // Create particles
    const createParticles = () => {
      for (let i = 0; i < settings.count; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 5 + 2,
          speedX: Math.random() * 0.5 - 0.25,
          speedY: Math.random() * 0.5 - 0.25,
          color:
            settings.colors[Math.floor(Math.random() * settings.colors.length)],
          opacity: Math.random() * 0.7 + 0.2,
          life: 0,
          maxLife: Math.random() * 600 + 200,
        });
      }
    };

    createParticles();

    // Draw circle particle
    const drawCircle = (particle: Particle) => {
      if (!ctx) return;
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      ctx.fillStyle = particle.color;
      ctx.globalAlpha =
        particle.opacity * (1 - particle.life / particle.maxLife);
      ctx.fill();
      ctx.globalAlpha = 1;
    };

    // Draw heart particle
    const drawHeart = (particle: Particle) => {
      if (!ctx) return;
      const size = particle.size * 1.5;
      ctx.save();
      ctx.translate(particle.x, particle.y);
      ctx.rotate(Math.PI / 4);
      ctx.fillStyle = particle.color;
      ctx.globalAlpha =
        particle.opacity * (1 - particle.life / particle.maxLife);
      ctx.beginPath();
      ctx.arc(-size / 2, 0, size / 2, Math.PI, 0, false);
      ctx.arc(size / 2, 0, size / 2, Math.PI, 0, false);
      ctx.bezierCurveTo(size, size, -size, size, 0, -size / 2);
      ctx.closePath();
      ctx.fill();
      ctx.globalAlpha = 1;
      ctx.restore();
    };

    // Draw sparkle particle
    const drawSparkle = (particle: Particle) => {
      if (!ctx) return;
      const outerRadius = particle.size * 2;
      const innerRadius = particle.size;
      const spikes = 4;

      ctx.save();
      ctx.beginPath();
      ctx.translate(particle.x, particle.y);
      ctx.rotate(particle.life * 0.01);
      ctx.strokeStyle = particle.color;
      ctx.fillStyle = particle.color;
      ctx.globalAlpha =
        particle.opacity * (1 - particle.life / particle.maxLife);
      ctx.lineWidth = particle.size / 10;

      for (let i = 0; i < spikes * 2; i++) {
        const radius = i % 2 === 0 ? outerRadius : innerRadius;
        const x = radius * Math.cos((Math.PI / spikes) * i);
        const y = radius * Math.sin((Math.PI / spikes) * i);
        if (i === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }

      ctx.closePath();
      ctx.stroke();
      ctx.fill();
      ctx.globalAlpha = 1;
      ctx.restore();
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle, index) => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        particle.life++;

        if (
          particle.x > canvas.width ||
          particle.x < 0 ||
          particle.y > canvas.height ||
          particle.y < 0 ||
          particle.life > particle.maxLife
        ) {
          particles.splice(index, 1);
          // Replace with a new particle
          if (Math.random() > 0.1) {
            // 90% chance to create a new particle
            particles.push({
              x: Math.random() * canvas.width,
              y: Math.random() * canvas.height,
              size: Math.random() * 5 + 2,
              speedX: Math.random() * 0.5 - 0.25,
              speedY: Math.random() * 0.5 - 0.25,
              color:
                settings.colors[
                  Math.floor(Math.random() * settings.colors.length)
                ],
              opacity: Math.random() * 0.7 + 0.2,
              life: 0,
              maxLife: Math.random() * 600 + 200,
            });
          }
        }

        // Draw particle based on shape
        switch (settings.shape) {
          case "heart":
            drawHeart(particle);
            break;
          case "sparkle":
            drawSparkle(particle);
            break;
          case "circle":
          default:
            drawCircle(particle);
            break;
        }
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      particles = [];
    };
  }, [dimensions, pathname]);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0 h-full w-full opacity-40"
      style={{ position: "fixed", top: 0, left: 0 }}
    />
  );
}
