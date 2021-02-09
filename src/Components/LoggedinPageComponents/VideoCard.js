import React from 'react';
import './VideoCard.css';
import Avatar from "@material-ui/core/Avatar";

function VideoCard({ ReactPlayer, image, title }) {
    return (
        <div className="videoCard">
            <img className="videoCard__thumbnail" src={ReactPlayer, image} alt="" />
            <div className="videoCard__info">
                <div className="videoCard__text">
                    <h4>{title}</h4>
                </div>
            </div>
        </div>
    );
}

export default VideoCard;