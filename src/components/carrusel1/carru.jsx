import React, { useState, useEffect } from 'react';
import './carru.css';

function CarruselOne() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [posters, setPosters] = useState([
    "./src/img/bannerA1.webp",
    "./src/img/bannerB1.webp",
    "./src/img/bannerC1.webp",
    "./src/img/bannerD1.webp",
    "./src/img/bannerE1.webp",
    "./src/img/bannerF1.webp",
  ]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 932) {
        setPosters([
          "./src/img/bannerA2.webp",
          "./src/img/bannerB2.webp",
          "./src/img/bannerC2.webp",
          "./src/img/bannerD2.webp",
          "./src/img/bannerE2.webp",
          "./src/img/bannerF2.webp",
        ]);
      } else {
        setPosters([
          "./src/img/bannerA1.webp",
          "./src/img/bannerB1.webp",
          "./src/img/bannerC1.webp",
          "./src/img/bannerD1.webp",
          "./src/img/bannerE1.webp",
          "./src/img/bannerF1.webp",
        ]);
      }
    };

    // Set initial images based on window size
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Clean up the event listener
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? posters.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === posters.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="carousel-container">
      <div className="carousel">
        <button className="carousel-button prev" onClick={handlePrev}>
          &#10094;
        </button>
        <div className="carousel-slides" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {posters.map((poster, index) => (
            <img
              key={index}
              className="poster"
              src={poster}
              alt={`Poster ${index + 1}`}
            />
          ))}
        </div>
        <button className="carousel-button next" onClick={handleNext}>
          &#10095;
        </button>
      </div>
    </div>
  );
}

export default CarruselOne;
