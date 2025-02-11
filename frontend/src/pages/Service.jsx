import React from 'react';
import './service.css';
import './card.css';
function Service() {
  return (
    <div className="flex flex-row">
    <section className="min-h-screen  bg-white dark:bg-gray-800 w-1/2 flex-col flex items-center justify-center">
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
    <div className='min-h-screen   bg-white dark:bg-gray-800 w-1/2 flex-col flex items-center justify-center'>
      <h1 className='bg-red text-indigo-500'>
      Crafting Stunning Websites and Iconic Logos That Define Your Brand.
      </h1>
    </div>
    </div>
  );
}

export default Service;
