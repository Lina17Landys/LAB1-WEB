import React, { useState } from 'react';
import './testimonio.css';

const opinions = [
    {
        title: "Eshi-Sama Slides",
        text: "hola",
        name: "pepe",
        src: "./src/img/mini.avif",

    },
    {
        title: "Eshi-Sama Slides",
        text: "hola",
        name: "pepe",
        src: "./src/img/mini2.png",

    }, {
        title: "Eshi-Sama Slides",
        text: "hola",
        name: "pepe",
        src: "./src/img/mini3.avif",

    }, {
        title: "Eshi-Sama Slides",
        text: "hola",
        name: "pepe",
        src: "./src/img/mini4.avif",

    }, {
        title: "Eshi-Sama Slides",
        text: "hola",
        name: "pepe",
        src: "./src/img/mini5.avif",

    }, {
        title: "Eshi-Sama Slides",
        text: "hola",
        name: "pepe",
        src: "./src/img/mini6.avif",

    }, {
        title: "Eshi-Sama Slides",
        text: "hola",
        name: "pepe",
        src: "./src/img/mini7.avif",

    }, {
        title: "Eshi-Sama Slides",
        text: "hola",
        name: "pepe",
        src: "./src/img/mini8.avif",

    },
]

function Testimonios() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 3) % opinions.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 3 + opinions.length) % opinions.length);
    };

    const visibleOpinions = [
        opinions[currentIndex],
        opinions[(currentIndex + 1) % opinions.length],
        opinions[(currentIndex + 2) % opinions.length]
    ];

    return (
        <>
            <header className="testimonios-encabezado">
                <p>Let customers speak for us</p>
                <div className="estrellas">
                    {Array(5).fill().map((_, index) => (
                        <svg key={index} xmlns="http://www.w3.org/2000/svg" fill="black" viewBox="0 0 24 24" width="24px" height="24px">
                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </svg>
                    ))}
                </div>
                <p>from 201948 reviews</p>
            </header>

            <section className='contenedor-opiniones'>
                <div className="carrusel">
                    <button className="control-previo" onClick={handlePrev}>◀</button>
                    <div className="tarjetas-opinion">
                        {visibleOpinions.map((opinion, index) => (
                            <div className="tarjeta-opinion" key={index}>
                                <div className="estrellas">
                                    {Array(5).fill().map((_, index) => (
                                        <svg key={index} xmlns="http://www.w3.org/2000/svg" fill="black" viewBox="0 0 24 24" width="24px" height="24px">
                                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                        </svg>
                                    ))}
                                </div>
                                <h2>{opinion.title}</h2>
                                <p>{opinion.text}</p>
                                <p>- {opinion.name}</p>
                                <img src={opinion.src} alt={opinion.title} />
                            </div>
                        ))}
                    </div>
                    <button className="control-siguiente" onClick={handleNext}>▶</button>
                </div>
            </section>
        </>
    );
}

export default Testimonios;