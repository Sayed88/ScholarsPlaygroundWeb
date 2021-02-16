import React from 'react';
import './VideoCard.css';

function VideoCard({ ReactPlayer, image, title }) {
    return (
        <div className="videoCard">
            <img className="videoCard__thumbnail" src={ReactPlayer, image} alt="Scholars Playground Video" />
            <div className="videoCard__info">
                <div className="videoCard__text">
                    <h4>{title}</h4>
                </div>
            </div>
        </div>
    );
}

export default VideoCard;