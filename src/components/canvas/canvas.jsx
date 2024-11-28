import React, { useEffect, useRef } from 'react';

const GalaxyAnimation = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        class GalaxyParticle {
            constructor() {
                this.reset();
            }

            reset() {
                const angle = Math.random() * Math.PI * 2;
                const radius = Math.random() * Math.max(canvas.width, canvas.height);
                this.x = canvas.width / 2 + Math.cos(angle) * radius;
                this.y = canvas.height / 2 + Math.sin(angle) * radius;
                this.size = Math.random() * 2.5;
                this.speedX = (Math.random() - 0.5) * 0.3;
                this.speedY = (Math.random() - 0.5) * 0.3;
                this.color = `rgba(${255 * Math.random()}, ${255 * Math.random()}, ${255 * Math.random()}, ${Math.random() * 0.7})`;
            }

            update() {
                this.x += this.speedX;
                this.y += this.speedY;

                const centerX = canvas.width / 2;
                const centerY = canvas.height / 2;
                const distanceFromCenter = Math.hypot(this.x - centerX, this.y - centerY);

                if (distanceFromCenter > Math.max(canvas.width, canvas.height)) {
                    this.reset();
                }
            }

            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = this.color;
                ctx.fill();
            }
        }

        const particles = Array.from({ length: 300 }, () => new GalaxyParticle());

        const animateGalaxy = () => {
            ctx.fillStyle = 'rgba(15,12,41,0.1)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            particles.forEach((particle) => {
                particle.update();
                particle.draw();
            });

            requestAnimationFrame(animateGalaxy);
        };

        animateGalaxy();

        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return <canvas ref={canvasRef} style={{ display: 'block' }} />;
};

export default GalaxyAnimation;
