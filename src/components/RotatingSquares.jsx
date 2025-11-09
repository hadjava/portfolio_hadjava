import React from 'react';
import './RotatingSquares.css';

const RotatingSquares = () => {
  const squares = [
    { id: 1, text: 'devops', color: '#FF6B6B' },
    { id: 2, text: 'js', color: '#4ECDC4' },
    { id: 3, text: 'react', color: '#45B7D1' },
    { id: 4, text: 'AI', color: '#FFBE0B' },
    { id: 5, text: 'IT', color: '#FB5607' }
  ];

  return (
    <div className="rotating-squares-container">
      {squares.map((square, index) => (
        <div
          key={square.id}
          className="rotating-square"
          style={{
            backgroundColor: square.color,
            animationDelay: `${index * 0.5}s`
          }}
        >
          <span className="square-text">{square.text}</span>
        </div>
      ))}
    </div>
  );
};

export default RotatingSquares;