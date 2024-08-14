import React, { useState } from 'react';
import './carupro.css';

const products = [
  {
    src: "./src/img/chanclas-down.webp",
    title: "Eshi-Sama Slides",
    price: "$24.99",
    description: "*Price may be VAT inclusive",
    reviews: 0
  },
  {
    src: "./src/img/chibi-shibuya-shaker-front.webp",
    title: "Waifu Cups X Kaho Shibuya: Chibi Shibuya",
    price: "$24.99",
    description: "*Price may be VAT inclusive",
    reviews: 0
  },
  {
    src: "./src/img/goof-juice-front.webp",
    title: "Goof Juice - 100 Servings",
    price: "$39.99",
    description: "*Price may be VAT inclusive",
    reviews: 0
  },
  {
    src: "./src/img/retro-kaho-lunchbox-front.webp",
    title: "Retro Kaho Lunchbox",
    price: "$24.99",
    description: "*Price may be VAT inclusive",
    reviews: 0
  },
  {
    src: "./src/img/sil-sweatpants-front.webp",
    title: "Silvervale Sweatpants",
    price: "$39.99",
    description: "*Price may be VAT inclusive",
    reviews: 0
  },
  {
    src: "./src/img/silv-hoodie-front.webp",
    title: "Silvervale Hoodieie",
    price: "$59.99",
    description: "*Price may be VAT inclusive",
    reviews: 0
  },
  {
    src: "./src/img/silvervale-front.webp",
    title: "Silvervale V2 Shirt",
    price: "$24.99",
    description: "*Price may be VAT inclusive",
    reviews: 0
  },
  {
    src: "./src/img/waifu-candy.webp",
    title: "Waifu Candy - 100 servings",
    price: "$39.99",
    description: "*Price may be VAT inclusive",
    reviews: 0
  },
  {
    src: "./src/img/breadbox-front.webp",
    title: "Silvervale Bread Box",
    price: "$49.99",
    description: "*Price may be VAT inclusive",
    reviews: 0
  },
];

function Productos() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % Math.max(products.length - 4, 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + Math.max(products.length - 4, 1)) % Math.max(products.length - 4, 1));
  };

  const displayedProducts = products.slice(currentIndex, currentIndex + 4);

  return (
    <div className="productos-container">
      <div className="header">
        <h1>Featured Products</h1>
        <div className="view-all" onClick={handleNext}>
          <span>View all</span>
          <div className="icon">
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M1.5 8a.5.5 0 0 1 .5-.5h10.793l-3.647-3.646a.5.5 0 1 1 .708-.708l4.5 4.5a.5.5 0 0 1 0 .708l-4.5 4.5a.5.5 0 0 1-.708-.708L12.793 8.5H2a.5.5 0 0 1-.5-.5z"/>
            </svg>
          </div>
        </div>
      </div>

      <section className='carousel-productos'>
        <button className="carousel-control prev" onClick={handlePrev}>
          <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.41 6.41L10.83 11H21v2H10.83l4.58 4.59-1.41 1.41-6-6 6-6 1.41 1.41z"/>
          </svg>
        </button>

        <div className="carousel-container">
          {displayedProducts.map((product, index) => (
            <div key={index} className="carousel-item">
              <div className="card">
                <img src={product.src} alt={`Product ${index}`} />
                <div className="card-content">
                  <h2>{product.title}</h2>
                  <p className="price">{product.price}</p>
                  <p className="description">{product.description}</p>
                  <div className="reviews">
                    {[...Array(5)].map((_, starIndex) => (
                      <svg key={starIndex} width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2l2.39 6.915L22 9l-5 5 1.18 7-6.18-3.24L6 21l1.18-7-5-5 7.61-1.085L12 2z"/>
                      </svg>
                    ))}
                    <span className="no-reviews">No reviews</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button className="carousel-control next" onClick={handleNext}>
          <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.59 6.41L13.17 11H3v2h10.17l-4.58 4.59 1.41 1.41 6-6-6-6-1.41 1.41z"/>
          </svg>
        </button>
      </section>
    </div>
  );
}

export default Productos;
