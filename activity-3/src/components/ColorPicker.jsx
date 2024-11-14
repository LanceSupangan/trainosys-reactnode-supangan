import React, { useState } from 'react';

const ColorPicker = () => {
  const [selectedColor, setSelectedColor] = useState('red');

  const handleColorChange = (event) => {
    setSelectedColor(event.target.value);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Color Picker</h2>
      <select value={selectedColor} onChange={handleColorChange} style={{ padding: '10px', fontSize: '16px' }}>
        <option value="red">Red</option>
        <option value="green">Green</option>
        <option value="blue">Blue</option>
        <option value="yellow">Yellow</option>
        <option value="purple">Purple</option>
      </select>

      <div
        style={{
          margin: '15px 41%',
          width: '100px',
          height: '100px',
          backgroundColor: selectedColor,
          border: '1px solid black',
          display: 'inline-block',
        }}
      ></div>
    </div>
  );
}

export default ColorPicker;