import "./VideoDetailsList.scss";

import VideoDetailsItem from "../VideoDetailsItem/VideoDetailsItem";

function VideoDetailsList({ videos, activeVideo, updateActiveVideo }) {
    return (
        <aside className="video-details-list">
            <h2 className="video-details-list__header">NEXT VIDEOS</h2>
            <ul className="video-details-list__videos">
                {
                    videos
                    .filter(video => video.id !== activeVideo.id)
                    .map((video) => {
                        return (
                            <VideoDetailsItem
                                key={video.id}
                                video={video}
                                updateActiveVideo={updateActiveVideo}
                            />
                        )
                    })
                }
            </ul>
        </aside>
    );
}

export default VideoDetailsList;