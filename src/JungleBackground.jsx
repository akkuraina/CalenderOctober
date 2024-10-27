
import React from 'react';
import './JungleBackground.css';

const generateLeaves = (numLeaves) => {
  const leaves = [];
  for (let i = 0; i < numLeaves; i++) {
    leaves.push({
      id: i,
      size: Math.random() * 20 + 20,
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 4,
      duration: Math.random() * 8 + 4,
    });
  }
  return leaves;
};

const JungleBackground = () => {
  const leaves = generateLeaves(100);

  return (
    <div className="jungle-background">
      {leaves.map((leaf) => (
        <div
          key={leaf.id}
          className="leaf"
          style={{
            width: `${leaf.size}px`,
            height: `${leaf.size * 0.8}px`,
            left: `${leaf.left}%`,
            top: `${leaf.top}%`,
            animationDelay: `${leaf.delay}s`,
            animationDuration: `${leaf.duration}s`,
          }}
        />
      ))}
    </div>
  );
};

export default JungleBackground;
