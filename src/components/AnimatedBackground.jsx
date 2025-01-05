'use client'; // Asegúrate de usar 'use client' si usas Next.js App Router

import { useEffect, useRef, useState } from 'react';

const ParticleCanvas = () => {
  const canvasRef = useRef(null);
  const [canvasSize, setCanvasSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Variables globales
    const particles = [];
    const dustParticles = [];

    let backgroundHue = 0;
    let frameCount = 0;
    let autoDrift = true; // If true, particles gently drift on their own

    // Mouse state
    const mouse = {
      x: null,
      y: null,
      set({ x, y }) {
        this.x = x;
        this.y = y;
      },
      reset() {
        this.x = null;
        this.y = null;
      },
    };

    const adjustParticleCount = () => {
      const particleConfig = {
        heightConditions: [200, 300, 400, 500, 600],
        widthConditions: [450, 600, 900, 1200, 1600],
        particlesForHeight: [40, 60, 70, 90, 110],
        particlesForWidth: [40, 50, 70, 90, 110],
      };

      let numParticles = 130;

      // Check the height and pick a suitable particle count
      for (let i = 0; i < particleConfig.heightConditions.length; i++) {
        if (canvas.height < particleConfig.heightConditions[i]) {
          numParticles = particleConfig.particlesForHeight[i];
          break;
        }
      }

      // Check the width and try to lower the particle count if needed
      for (let i = 0; i < particleConfig.widthConditions.length; i++) {
        if (canvas.width < particleConfig.widthConditions[i]) {
          numParticles = Math.min(
            numParticles,
            particleConfig.particlesForWidth[i]
          );
          break;
        }
      }

      return numParticles;
    };

    // Particle class handles both "normal" and "firework" particles
    class Particle {
      constructor(x, y, isFirework = false) {
        const baseSpeed = isFirework
          ? Math.random() * 2 + 1 // fireworks move faster
          : Math.random() * 0.5 + 0.3; // regular particles move slowly

        Object.assign(this, {
          isFirework,
          x,
          y,
          vx: Math.cos(Math.random() * Math.PI * 2) * baseSpeed,
          vy: Math.sin(Math.random() * Math.PI * 2) * baseSpeed,
          size: isFirework ? Math.random() * 2 + 2 : Math.random() * 3 + 1,
          hue: Math.random() * 360,
          alpha: 1,
          sizeDirection: Math.random() < 0.5 ? -1 : 1,
          trail: [],
        });
      }

      update(mouse) {
        const dist =
          mouse.x !== null ? (mouse.x - this.x) ** 2 + (mouse.y - this.y) ** 2 : 0;

        if (!this.isFirework) {
          const force = dist && dist < 22500 ? (22500 - dist) / 22500 : 0;

          if (mouse.x === null && autoDrift) {
            this.vx += (Math.random() - 0.5) * 0.03;
            this.vy += (Math.random() - 0.5) * 0.03;
          }

          if (dist) {
            const sqrtDist = Math.sqrt(dist);
            this.vx += ((mouse.x - this.x) / sqrtDist) * force * 0.1;
            this.vy += ((mouse.y - this.y) / sqrtDist) * force * 0.1;
          }

          this.vx *= mouse.x !== null ? 0.99 : 0.998;
          this.vy *= mouse.y !== null ? 0.99 : 0.998;
        } else {
          this.alpha -= 0.02;
        }

        this.x += this.vx;
        this.y += this.vy;

        if (this.x <= 0 || this.x >= canvas.width - 1) this.vx *= -0.9;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -0.9;

        this.size += this.sizeDirection * 0.1;
        if (this.size > 4 || this.size < 1) this.sizeDirection *= -1;

        this.hue = (this.hue + 0.3) % 360;

        if (
          frameCount % 2 === 0 &&
          (Math.abs(this.vx) > 0.1 || Math.abs(this.vy) > 0.1)
        ) {
          this.trail.push({
            x: this.x,
            y: this.y,
            hue: this.hue,
            alpha: this.alpha,
          });
          if (this.trail.length > 15) this.trail.shift();
        }
      }

      draw(ctx) {
        const gradient = ctx.createRadialGradient(
          this.x,
          this.y,
          0,
          this.x,
          this.y,
          this.size
        );
        gradient.addColorStop(
          0,
          `hsla(${this.hue}, 80%, 60%, ${Math.max(this.alpha, 0)})`
        );
        gradient.addColorStop(
          1,
          `hsla(${this.hue + 30}, 80%, 30%, ${Math.max(this.alpha, 0)})`
        );

        ctx.fillStyle = gradient;
        ctx.shadowBlur = canvas.width > 900 ? 10 : 0;
        ctx.shadowColor = `hsl(${this.hue}, 80%, 60%)`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;

        if (this.trail.length > 1) {
          ctx.beginPath();
          ctx.lineWidth = 1.5;
          for (let i = 0; i < this.trail.length - 1; i++) {
            const { x: x1, y: y1, hue: h1, alpha: a1 } = this.trail[i];
            const { x: x2, y: y2 } = this.trail[i + 1];
            ctx.strokeStyle = `hsla(${h1}, 80%, 60%, ${Math.max(a1, 0)})`;
            ctx.moveTo(x1, y1);
            ctx.lineTo(x2, y2);
          }
          ctx.stroke();
        }
      }

      isDead() {
        return this.isFirework && this.alpha <= 0;
      }
    }

    function connectParticles() {
      const gridSize = 120; // Tamaño de la cuadrícula
      const grid = new Map(); // Mapa para almacenar partículas por celda de la cuadrícula
    
      // Organizar las partículas en celdas de la cuadrícula
      particles.forEach((p) => {
        const key = `${Math.floor(p.x / gridSize)},${Math.floor(p.y / gridSize)}`;
        if (!grid.has(key)) grid.set(key, []);
        grid.get(key).push(p);
      });
    
      ctx.lineWidth = 1.5; // Grosor de las líneas
    
      // Recorrer todas las partículas
      particles.forEach((p) => {
        const gridX = Math.floor(p.x / gridSize);
        const gridY = Math.floor(p.y / gridSize);
    
        // Revisar las celdas cercanas (incluyendo la propia celda)
        for (let dx = -1; dx <= 1; dx++) {
          for (let dy = -1; dy <= 1; dy++) {
            const key = `${gridX + dx},${gridY + dy}`;
            if (grid.has(key)) {
              grid.get(key).forEach((neighbor) => {
                if (neighbor !== p) {
                  // Calcular la distancia entre las partículas
                  const diffX = neighbor.x - p.x;
                  const diffY = neighbor.y - p.y;
                  const dist = diffX * diffX + diffY * diffY;
    
                  // Si la distancia es lo suficientemente pequeña, dibujar una línea
                  if (dist < 10000) {
                    ctx.strokeStyle = `hsla(${
                      (p.hue + neighbor.hue) / 2
                    }, 80%, 60%, ${1 - Math.sqrt(dist) / 100})`; // Color de la línea
    
                    ctx.beginPath();
                    ctx.moveTo(p.x, p.y);
                    ctx.lineTo(neighbor.x, neighbor.y);
                    ctx.stroke();
                  }
                }
              });
            }
          }
        }
      });
    }

    class DustParticle {
      constructor() {
        Object.assign(this, {
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 1.5 + 0.5,
          hue: Math.random() * 360,
          vx: (Math.random() - 0.5) * 0.05,
          vy: (Math.random() - 0.5) * 0.05,
        });
      }

      update() {
        this.x = (this.x + this.vx + canvas.width) % canvas.width;
        this.y = (this.y + this.vy + canvas.height) % canvas.height;
        this.hue = (this.hue + 0.1) % 360;
      }

      draw(ctx) {
        ctx.fillStyle = `hsla(${this.hue}, 30%, 70%, 0.3)`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const resizeCanvas = () => {
      setCanvasSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    const createParticles = () => {
      particles.length = 0;
      dustParticles.length = 0;

      const numParticles = adjustParticleCount();
      for (let i = 0; i < numParticles; i++) {
        particles.push(new Particle(Math.random() * canvas.width, Math.random() * canvas.height));
      }

      for (let i = 0; i < 200; i++) {
        dustParticles.push(new DustParticle());
      }
    };

    const drawBackground = () => {
      backgroundHue = (backgroundHue + 0.2) % 360;
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      gradient.addColorStop(0, `hsla(${backgroundHue}, 100%, 10%)`); // Oscurecer el color inicial
      gradient.addColorStop(1, `hsla(${backgroundHue + 80}, 10%, 10%)`); // Oscurecer el color final
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    };

    const animate = () => {
      frameCount++;

      drawBackground();
      particles.forEach(p => p.update(mouse));
      dustParticles.forEach(p => p.update());
      particles.forEach(p => p.draw(ctx));
      dustParticles.forEach(p => p.draw(ctx));

      connectParticles();
      
      particles.forEach((p, index) => {
        if (p.isDead()) particles.splice(index, 1);
      });

      requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', (e) => mouse.set({ x: e.x, y: e.y }));
    window.addEventListener('mouseleave', () => mouse.reset());
    window.addEventListener('resize', resizeCanvas);

    resizeCanvas();
    createParticles();
    animate();

    return () => {
      window.removeEventListener('mousemove', (e) => mouse.set({ x: e.x, y: e.y }));
      window.removeEventListener('mouseleave', mouse.reset);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      width={canvasSize.width}
      height={canvasSize.height}
      style={{ position: 'absolute', top: 0, left: 0, zIndex: -1 }}
    />
  );
};


export default ParticleCanvas;
