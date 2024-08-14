import React from 'react';
import './videoComponent.css';

function VideoComponent() {
    return (
        <div className="video-card">
            <iframe
                title="vimeo-player"
                src="https://player.vimeo.com/video/865651900?h=fe554866c5"
                allow="autoplay; fullscreen"
                allowFullScreen
            ></iframe>
        </div>
    );
}

export default VideoComponent;
