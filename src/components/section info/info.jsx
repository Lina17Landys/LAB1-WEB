import React from 'react';
import './info.css';

function Info() {
    return (
        <section className='big-conteiner'>
            <div className='info-conteiner'>
                <div className='health'>
                    <svg role="presentation" fill="none" focusable="false" strokeWidth="2" width="32" height="32" className="hidden sm:block icon icon-picto-love" viewBox="0 0 24 24">
                        <path d="M12 5.457C6.823-.895 1.358 3.619 1.286 8.484c0 7.24 8.665 13.185 10.714 13.185 2.049 0 10.714-5.946 10.714-13.187C22.642 3.617 17.177-.895 12 5.457Z" fill="currentColor" fillOpacity="0" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                    <h1>HEALTH</h1>
                    <p>At Gamer Supps, our goal is to offer esports athletes and gamers the most effective and healthy
                        energy choice to help us perform at our highest potential. GG® is keto friendly, less than
                        one calorie, and sugar free.</p>
                </div>

                <div className='taste'>
                    <svg role="presentation" fill="none" focusable="false" strokeWidth="2" width="32" height="32" className="hidden sm:block icon icon-picto-like" viewBox="0 0 24 24">
                        <path d="M7.05 19.41H6V9.6h1.05l4.17-7.234a2.16 2.16 0 0 1 4.008 1.376l-.4 2.875h3.412c1.491 0 4.476 1.492 4.476 4.474 0 2.983-3 9.81-6.173 9.81-4.178 0-7.75-.995-9.49-1.492l-.002.002Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path>
                        <path d="M1.286 9.214a2.357 2.357 0 1 1 4.714 0v9.857a2.357 2.357 0 1 1-4.714 0V9.214Z" fill="currentColor" fillOpacity="0" stroke="currentColor" strokeLinejoin="round"></path>
                    </svg>
                    <h1>TASTE</h1>
                    <p>GG’s powerful formula comes in many tasty flavors that will have you coming back for more.
                        Expect a smooth chalk-less ride and a juicy-salivating mouthfeel.</p>
                </div>

                <div className='cost'>
                    <svg role="presentation" fill="none" focusable="false" strokeWidth="2" width="32" height="32" className="hidden sm:block icon icon-picto-jewelry" viewBox="0 0 24 24">
                        <path d="M5.157 3.74C3.83 4.835 2.009 7.19 1.286 9.43c1.056 2.112 5.208 7.782 9.619 11.88a1.607 1.607 0 0 0 2.19 0c4.411-4.098 8.563-9.768 9.62-11.88-.724-2.24-2.545-4.595-3.872-5.688a1.457 1.457 0 0 0-.934-.312H6.091a1.457 1.457 0 0 0-.934.312v0Z" fill="currentColor" fillOpacity="0" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path>
                        <path d="M1.3 9.429h21.409M6 3.429l6 6 6-6M12 9.429v12.836" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                    <h1>COST</h1>
                    <p>GG® is an energy formula that delivers long-lasting energy at a fraction of the cost of
                        canned energy drinks. With 100 servings per tub that comes out to just $0.40 per serving.</p>
                </div>
            </div>
        </section>
    );
}

export default Info;
