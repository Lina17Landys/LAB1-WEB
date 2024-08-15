import React from 'react';
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

function Testimonio() {
    
    return (
        <>
            <header className="testimonio-header">
                <p>Let customers speak for us</p>
                <div className="stars">
                    {Array(5).fill().map((_, index) => (
                        <svg key={index} xmlns="http://www.w3.org/2000/svg" fill="black" viewBox="0 0 24 24" width="24px" height="24px">
                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </svg>

                    ))}
                </div>
                <p>from 201948 reviews</p>
            </header>

            <section className='opinion-container'>
                

            </section>


        </>
    );
}

export default Testimonio