'use client';

import { useEffect, useRef } from 'react';

export default function CanvasDots() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    if (!canvas) return;

    const ctx = canvas.getContext('2d')!;
    if (!ctx) return;

    const colorDot = '#A3D1FF';
    const colorLine = '#A3D1FF';

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.style.display = 'block';
    ctx.fillStyle = colorDot;
    ctx.lineWidth = 0.1;
    ctx.strokeStyle = colorLine;

    const mousePosition = {
      x: canvas.width / 2,
      y: canvas.height / 2,
    };

    const dots = {
      nb: 600,
      distance: 60,
      d_radius: 100,
      array: [] as Dot[],
    };

    class Dot {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (-0.5 + Math.random()) * 0.8; // 👈 slower velocity
        this.vy = (-0.5 + Math.random()) * 0.8;
        this.radius = Math.random();
      }

      create() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctx.fill();
      }

      animate() {
        if (this.y < 0 || this.y > canvas.height) this.vy = -this.vy;
        if (this.x < 0 || this.x > canvas.width) this.vx = -this.vx;

        this.x += this.vx;
        this.y += this.vy;
      }

      static line() {
        for (let i = 0; i < dots.nb; i++) {
          for (let j = i + 1; j < dots.nb; j++) {
            const i_dot = dots.array[i];
            const j_dot = dots.array[j];

            const dx = i_dot.x - j_dot.x;
            const dy = i_dot.y - j_dot.y;

            if (
              Math.abs(dx) < dots.distance &&
              Math.abs(dy) < dots.distance &&
              Math.abs(i_dot.x - mousePosition.x) < dots.d_radius &&
              Math.abs(i_dot.y - mousePosition.y) < dots.d_radius
            ) {
              ctx.beginPath();
              ctx.moveTo(i_dot.x, i_dot.y);
              ctx.lineTo(j_dot.x, j_dot.y);
              ctx.stroke();
              ctx.closePath();
            }
          }
        }
      }
    }

    function initializeDots() {
      for (let i = 0; i < dots.nb; i++) {
        dots.array.push(new Dot());
      }
    }

    function drawDots() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      dots.array.forEach((dot) => {
        dot.create();
        dot.animate();
      });
      Dot.line();
    }

    function animate() {
      drawDots();
      requestAnimationFrame(animate);
    }

    const handleMouseMove = (e: MouseEvent) => {
      mousePosition.x = e.pageX;
      mousePosition.y = e.pageY;
    };

    initializeDots();
    window.addEventListener('mousemove', handleMouseMove);
    requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="connecting-dots absolute inset-0 w-full h-full z-0"
    />
  );
}
