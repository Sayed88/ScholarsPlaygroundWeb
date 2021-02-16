import React from 'react';
import VideoCard from './VideoCard';
import './VideosComments.css';
import ReactPlayer from 'react-player';

function VideosComments() {
    return (
        <div className="recommendedVideos">
            <h2>Themed Videos</h2>
            <div className="recommendedVideos__videos">
                <ReactPlayer className="player"
                    url="https://youtu.be/4L-VHqVfmUA"
                    title="Video Uploaded from Youtube temporarily"
                    controls="true"
                    width="528"
                    height="320"
                />
                <ReactPlayer className="player"
                    url="https://youtu.be/4L-VHqVfmUA"
                    title="Video Uploaded from Youtube temporarily"
                    controls="true"
                    width="528"
                    height="320"
                />
                <ReactPlayer className="player"
                    url="https://youtu.be/4L-VHqVfmUA"
                    title="Video Uploaded from Youtube temporarily"
                    controls="true"
                    width="528"
                    height="320"
                />
                <ReactPlayer className="player"
                    url="https://youtu.be/4L-VHqVfmUA"
                    title="Video Uploaded from Youtube temporarily"
                    controls="true"
                    width="528"
                    height="320"
                />
                <ReactPlayer className="player"
                    url="https://youtu.be/4L-VHqVfmUA"
                    title="Video Uploaded from Youtube temporarily"
                    controls="true"
                    width="528"
                    height="320"
                />
                <ReactPlayer className="player"
                    url="https://youtu.be/4L-VHqVfmUA"
                    title="Video Uploaded from Youtube temporarily"
                    controls="true"
                    width="528"
                    height="320"
                />
                <ReactPlayer className="player"
                    url="https://youtu.be/4L-VHqVfmUA"
                    title="Video Uploaded from Youtube temporarily"
                    controls="true"
                    width="528"
                    height="320"
                />
                <ReactPlayer className="player"
                    url="https://youtu.be/4L-VHqVfmUA"
                    title="Video Uploaded from Youtube temporarily"
                    controls="true"
                    width="528"
                    height="320"
                />
            </div>
            <hr />
            <h2>Latest Additions</h2>
            <div className="recommendedVideos__videos">
                <VideoCard
                    title="Web Development in 2021"
                    image="https://analyticsindiamag.com/wp-content/uploads/2018/12/image.jpg"                
                />
                <VideoCard
                    title="Golden Gate Bridge in 2021"
                    image="https://img.traveltriangle.com/blog/wp-content/uploads/2019/01/Golden-Gate-Bridge-cover-img.jpg"                
                />
                <VideoCard
                    title="Awesome Beach View From Above"
                    image="https://p.bigstockphoto.com/eIdTXLbqQilMs9xbjvcs_bigstock-Aerial-View-Of-Sandy-Beach-Wit-256330393.jpg"                
                />
                <VideoCard
                    title="Nice View of Land"
                    image="https://www.wallpaperflare.com/static/175/569/92/this-heaven-animal-livestock-green-field-wallpaper.jpg"                
                />
                    <VideoCard
                        title="Animals in Nature are Awesome"
                        image="https://html5box.com/html5gallery/images/Swan_1024.jpg"                
                    />
                    <VideoCard
                        title="The Best Photography in the World"
                        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3Ne4fxlOxhGDTycjkVZd_4KxtraQ0WP4DoQ&usqp=CAU"
                    />
                    <VideoCard
                        title="How Robots Developed Recently"
                        image="https://miro.medium.com/max/10000/0*wZAcNrIWFFjuJA78"                
                    />
                <VideoCard
                    title="Moon View at Night Time"
                    image="https://s7d2.scene7.com/is/image/TWCNews/moon-1940806_960720jpg"                
                />
                <VideoCard
                    title="Business Growth in California"
                    image="https://goldmediakit.com/wp-content/uploads/2020/05/double-exposure-image-business-profit-growth_31965-3022.jpg"                
                />
            </div>            
        </div>
    );
}

export default VideosComments;
