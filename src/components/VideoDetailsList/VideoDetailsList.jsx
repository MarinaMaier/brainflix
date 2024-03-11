import { Link } from "react-router-dom";
import "./VideoDetailsList.scss";
import VideoDetailsItem from "../VideoDetailsItem/VideoDetailsItem";

function VideoDetailsList({ videos, activeVideo }) {
  if (!videos || !videos.length) {
    return <p>No videos available.</p>;
  }
  return (
    <aside className="video-details-list">
      <h2 className="video-details-list__header">NEXT VIDEOS</h2>
      <ul className="video-details-list__videos">
        {videos
          .filter((video) => video && video.id !== activeVideo?.id)
          .map((video) => (
            <Link
              className="video-details-list__link"
              to={video ? `/video/${video.id}` : "/"}
              key={video?.id}
            >
              <VideoDetailsItem video={video} activeVideo={activeVideo} />
            </Link>
          ))}
      </ul>
    </aside>
  );
}

export default VideoDetailsList;
