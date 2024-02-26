import "./VideoDetailsItem.scss";

function VideoDetailsItem({ video, updateActiveVideo }) {
    let className = "video-details-item";
    const handClick = () => {
        updateActiveVideo(video.id);
    }

    return ( 
        <li onClick={handClick} className={className}>
            <img className="video-details-item__image" src={video.image} alt={video.title} /> 
            <div className="video-details-item__title-channel">
                <h3 className="video-details-item__title">{video.title} </h3>
                <p className="video-details-item__channel">{video.channel}</p> 
            </div>
        </li>
    );
}

export default VideoDetailsItem;