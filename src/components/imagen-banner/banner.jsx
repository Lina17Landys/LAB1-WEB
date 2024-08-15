import React from 'react';
import './banner.css';

function BannerImg() {
    return (
        <div className="banner-container">
            <img 
                src="./src/img/Benefit-Icons-banner.png" 
                alt="Banner" 
                className="banner-img desktop-banner" 
            />
            <img 
                src="./src/img/Benefit-Icons-Mobile.webp" 
                alt="Mobile Banner" 
                className="banner-img mobile-banner" 
            />
        </div>
    );
}

export default BannerImg;
