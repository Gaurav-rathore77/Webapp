import React from 'react';
import './service.css';

function Service() {
  return (
    <section className="min-h-screen  bg-white dark:bg-gray-800 w-screen flex items-center justify-center">
      <div className="cube-container">
        <div className="cube">
          <div className="face front">Frontend development</div>
          <div className="face back">costum websites</div>
          <div className="face right">LOGO DESIGN</div>
          <div className="face left">WORDPRESS</div>
          <div className="face top">Packeging</div>
          <div className="face bottom">post design</div>
        </div>
      </div>
    </section>
  );
}

export default Service;
