import React from 'react';
import "../App.css"
const Menu = ({ setLineColor, setLineWidth, setLineOpacity }) => {
  return (
    <div className="Menu">
      <label>Brush Color:</label>
      <input 
        type="color"
        onChange={(e) => setLineColor(e.target.value)}
      />

      <label>Brush Width:</label>
      <input 
        type="range"
        min={3}
        max={20} 
        defaultValue={5}
        onChange={(e) => setLineWidth(e.target.value)}
      />
      <label>Brush Opacity:</label>
      <input 
        type="range"
        min={1}
        max={100}
        step={0.1}
        defaultValue={1}
        onChange={(e) => setLineOpacity(e.target.value)}
      />
    </div>
  );
};

export default Menu;
