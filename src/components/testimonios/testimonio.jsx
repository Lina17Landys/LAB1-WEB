import React, { useState } from 'react';
import './testimonio.css';

const opinions = [
    {
        title: "Awesome cup",
        text: "The cup that I ordered looked so amazing and can’t wait to buy more!!!!",
        name: "Evan Richard",
        src: "./src/img/mini.avif",

    },
    {
        title: "Delicious",
        text: "One of the best tasting drinks I have ever had. Tastes exactly like a cherry slushy and you don't even notice the lack of sugar! Definitely will continue to buy.",
        name: "Nex Harrison",
        src: "./src/img/mini2.png",

    }, {
        title: "Surprisingly good!!",
        text: "Wonderfully sweet without a “medicine” taste. Definitely in the top 10 flavors on offer.",
        name: "Jason Momoa",
        src: "./src/img/mini3.avif",

    }, {
        title: "Strawberry goodness",
        text: "Such a absolutely good flavor to have added to my collection with its excellent tart flavor profile would recommend",
        name: "Revanous",
        src: "./src/img/mini4.avif",

    }, {
        title: "Amazing Flavour",
        text: " love the flavour of guacamole gamer farts and the intricate designs on the tub. Having a drink that is closely related to one of my favourite creators is so cool and really looks good with my waifu cup",
        name: "John Doe",
        src: "./src/img/mini5.avif",

    }, {
        title: "It's nice",
        text: "The cup is great and the insert really helps break up any of the mix. I’ve had no issues with drinking small chunks after mixing like some other cups I’ve had. The free flavors were good just need to order more or this will be mainly for water",
        name: "J",
        src: "./src/img/mini6.avif",

    }, {
        title: "Awesome cup",
        text: "The cup that I ordered looked so amazing and can’t wait to buy more!!!!",
        name: "David F",
        src: "./src/img/mini7.avif",

    }, {
        title: "Delicious",
        text: "One of the best tasting drinks I have ever had. Tastes exactly like a cherry slushy and you don't even notice the lack of sugar! Definitely will continue to buy.",
        name: "Richard",
        src: "./src/img/mini8.avif",

    },
]

function Testimonios() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % opinions.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 2 + opinions.length) % opinions.length);
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
                                <p className='nombre'>{opinion.name}</p>
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