import { getCustomTime } from "../../utils/utils";
import "./VideoDetails.scss";
import viewsIcon from "../../assets/icons/views.svg";
import likesIcon from "../../assets/icons/likes.svg";

function VideoDetails ({ video }){
    const {
        title,
        channel,
        timestamp,
        views,
        likes,
        description
    } = video;

    if (!video) {
        return <div>Loading...</div>;
    }
    return (
        <article className="video-details">
            <h1 className="video-details__title">{title}</h1>
            <hr className="video-details__divider video-details__divider--mb"/>
            <div className="video-details__container">
                <div className="video-details__channel-details">
                    <h3 className="video-details__channel">By {channel}</h3>
                    <p className="video-details__timestamp">{getCustomTime(timestamp)}</p>
                </div>
                <div className="video-details__views-likes-container">
                    <div className="video-details__views-container">
                        <img className="video-details__view-icon" src={viewsIcon} alt="views" />
                        <p className="video-details__views">{views}</p>
                    </div>
                    <div className="video-details__likes-container">
                        <img className="video-details__likes-icon" src={likesIcon} alt="likes" />
                        <p className="video-details__likes">{likes}</p>
                    </div>   
                </div>
            </div>
            <hr className="video-details__divider"/>
            <p className="video-details__description">{description}</p>
        </article>
    )
}

export default VideoDetails;
