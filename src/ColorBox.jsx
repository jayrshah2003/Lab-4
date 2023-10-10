
import { useState, useEffect } from 'react'

export default function ColorBox(){

    const [currentColor, setCurrentColor] = useState("#FF0000");

    useEffect(() => {
        setCurrentColor(getRandomColor());
      }, []);

    const handleChangeColor = () => {
        const newColor = getRandomColor();
        setCurrentColor(newColor);
      };
      

      const getRandomColor = () => {
        const colors = [
            "#FF0000",
            "#00FF00",
            "#0000FF",
            "#00FFFF",
            "#FF00FF",
            "#FFFF00",
            "#000000",
            "#FFFFFF",
            "#808080",
            "#C0C0C0",
            "#800000",
            "#808000",
            "#000080",
            "#800080",
            "#008080",
            "#FFA500",
            "#FFC0CB",
            "#FFD700",
            "#A52A2A",
            "#E6E6FA",
        ];
        const randomIndex = Math.floor(Math.random() * colors.length)
        return colors[randomIndex]
    }

    

    return (
            <div className="color-box"
                style={{ backgroundColor: currentColor, width: '50px', height: '50px' }}
                onClick={handleChangeColor}
            ></div>
            )
}