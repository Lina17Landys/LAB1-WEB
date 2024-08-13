import React from 'react';
import './fotos.css';

function FotosCont() {
  return (

    <div className='container'>
      <div className='big'>
        <img src="./src/img/Try-For-Free.webp" alt="Try For Free" />
        <img src="./src/img/GG-Energy-Tubs.webp" alt="GG Energy Tubs" />
      </div>

      <div className='small'>
        <img src="./src/img/Merch.webp" alt="Merch" />
        <img src="./src/img/GG-Caffeine-Free-Tubs.webp" alt="GG Caffeine Free Tubs" />
      </div>

      <div className='medium'>
        <img src="./src/img/Waifu-Cups.webp" alt="Waifu Cups" />
        <img className='newpic' src="./src/img/See-Whats-New.webp" alt="See What's New" />
      </div>
      
    </div>
  );
}

export default FotosCont;
