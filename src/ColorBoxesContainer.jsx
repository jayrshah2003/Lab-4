import { useState } from 'react';
import ColorBox from './ColorBox';

export default function ColorBoxesContainer() {
  const [currentColor, setCurrentColor] = useState("#FF0000");

  const colors = [
    ["#FF0000", "#00FF00", "#0000FF", "#00FFFF", "#FF00FF"],
    ["#FFFF00", "#000000", "#FFFFFF", "#808080", "#C0C0C0"],
    ["#800000", "#808000", "#000080", "#800080", "#008080"],
    ["#FFA500", "#FFC0CB", "#FFD700", "#A52A2A", "#E6E6FA"],
    ["#800000", "#000000", "#FFFFFF", "#808080", "#A52A2A"],
  ];

  
  const getRandomColor = () => {
    const randomRow = Math.floor(Math.random() * colors.length);
    const randomCol = Math.floor(Math.random() * colors[randomRow].length);
    const randomColor = colors[randomRow][randomCol];
  
    return randomColor;
    
  };

  

  return (
    <div className="color-boxes-container">

        <div className="color-box-row">
        <ColorBox color={getRandomColor()} />
        <ColorBox color={getRandomColor()} />
        <ColorBox color={getRandomColor()} />
        <ColorBox color={getRandomColor()} />
        <ColorBox color={getRandomColor()} />
      </div>

      <div className="color-box-row">
        <ColorBox color={getRandomColor()} />
        <ColorBox color={getRandomColor()} />
        <ColorBox color={getRandomColor()} />
        <ColorBox color={getRandomColor()} />
        <ColorBox color={getRandomColor()} />
      </div>

      <div className="color-box-row">
        <ColorBox color={getRandomColor()} />
        <ColorBox color={getRandomColor()} />
        <ColorBox color={getRandomColor()} />
        <ColorBox color={getRandomColor()} />
        <ColorBox color={getRandomColor()} />
      </div>

      <div className="color-box-row">
        <ColorBox color={getRandomColor()} />
        <ColorBox color={getRandomColor()} />
        <ColorBox color={getRandomColor()} />
        <ColorBox color={getRandomColor()} />
        <ColorBox color={getRandomColor()} />
      </div>

      <div className="color-box-row">
        <ColorBox color={getRandomColor()} />
        <ColorBox color={getRandomColor()} />
        <ColorBox color={getRandomColor()} />
        <ColorBox color={getRandomColor()} />
        <ColorBox color={getRandomColor()} />
      </div>

    </div>
  );
}
