import React, { useState, useEffect } from 'react';

const MousePosition = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    function handleMouseMove(evt) {
      setPosition({ x: evt.clientX, y: evt.clientY });
    }

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div>
      <h2>Mouse Position</h2>
      <p>X: {position.x}</p>
      <p>Y: {position.y}</p>
    </div>
  );
}

export default MousePosition;