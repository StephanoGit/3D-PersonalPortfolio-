import React, { useRef, useEffect } from 'react';

const GrainyOverlay = ({ children, alpha = 0.3 }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    const drawNoise = () => {
      const imageData = ctx.createImageData(canvas.width, canvas.height);
      const data = imageData.data;
      const maxColorValue = 60;

      for (let i = 0; i < data.length; i += 4) {
        const value = Math.random() * maxColorValue;
        data[i] = value; // Red channel
        data[i + 1] = value; // Green channel
        data[i + 2] = value; // Blue channel
        data[i + 3] = Math.floor(alpha * 255); // Apply transparency to the alpha channel
      }

      ctx.putImageData(imageData, 0, 0);
    };

    const animate = () => {
      drawNoise();
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [alpha]);

  return (
    <div className='absolute w-screen h-screen'>
      <canvas
        ref={canvasRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          zIndex: 100,
          pointerEvents: 'none', // Allow click events to pass through
        }}
      />
      <div style={{ position: 'relative' }}>
        {children}
      </div>
    </div>
  );
};

export default GrainyOverlay;
