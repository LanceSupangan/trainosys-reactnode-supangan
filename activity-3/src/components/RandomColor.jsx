import React, { useState, useEffect } from 'react';

const RandomColor = () => {
  const [color, setColor] = useState('red');

  useEffect(() => {
    const colors = ['red', 'blue', 'green', 'yellow', 'purple', 'orange', 'pink'];
    const interval = setInterval(() => {
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      setColor(randomColor);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div style={{ backgroundColor: color, height: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <h2>Random Color</h2>
    </div>
  );
}

export default RandomColor;