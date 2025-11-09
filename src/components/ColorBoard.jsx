import React, { useState, useEffect } from 'react';
import './ColorBoard.css';

const ColorBoard = () => {
  const [squares, setSquares] = useState([]);
  const colors = ['#dcacfa', '#ff86eb', '#ffd089', '#fffb98', '#d6ffed', '#ff4bbd', '#93ffa1'];
  const SQUARES_NUMBER = 494;

  useEffect(() => {
    // Создаем массив квадратов
    const newSquares = Array.from({ length: SQUARES_NUMBER }, (_, index) => ({
      id: index,
      color: '#1d1d1d',
      boxShadow: '0 0 2px #000'
    }));
    setSquares(newSquares);
  }, []);

  const handleMouseEnter = (id) => {
    const color = getRandomColor();
    setSquares(prevSquares => 
      prevSquares.map(square => 
        square.id === id 
          ? { 
              ...square, 
              color: color, 
              boxShadow: `0 0 2px ${color}, 0 0 10px ${color}` 
            }
          : square
      )
    );
  };

  const handleMouseLeave = (id) => {
    setSquares(prevSquares => 
      prevSquares.map(square => 
        square.id === id 
          ? { 
              ...square, 
              color: '#1d1d1d', 
              boxShadow: '0 0 2px #000' 
            }
          : square
      )
    );
  };

  const getRandomColor = () => {
    const index = Math.floor(Math.random() * colors.length);
    return colors[index];
  };

  return (
    <div className="color-board-container">
      <h2 className="color-board-title">Interactive Color Board</h2>
      <p className="color-board-description">
        Hover over the squares to see the magic! ✨
      </p>
      <div className="board-container">
        {squares.map(square => (
          <div
            key={square.id}
            className="square"
            style={{
              backgroundColor: square.color,
              boxShadow: square.boxShadow
            }}
            onMouseEnter={() => handleMouseEnter(square.id)}
            onMouseLeave={() => handleMouseLeave(square.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default ColorBoard;