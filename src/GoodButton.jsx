import React from 'react';
import ReactDOM from 'react-dom';

const GoodButton = () => {
  return <button className="fancy-button"
    onClick={() => alert('Good job!')}
  >
    Click me!
  </button>;
};

export default GoodButton;
