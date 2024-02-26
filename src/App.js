import Header from './components/Header/Header';
import ActiveHero from './components/Hero/Hero';
import LimitedVideoContent from "./data/videos.json";
import FullVideoContent from "./data/video-details.json";
import VideoDetails from "./components/VideoDetails/VideoDetails";
import VideoDetailsList from "./components/VideoDetailsList/VideoDetailsList";
import { useState } from "react";
import './App.scss';
import FormComments from './components/Form/Form';
import VideoComments from './components/Comments/Comments';

function App() {
  const [activeVideo, setActiveVideo] = useState(FullVideoContent[0]);
  const [allVideos] = useState(LimitedVideoContent);
  
  function updateActiveVideo(clickedId) {
    const newActiveVideo = FullVideoContent.find((video) => video.id === clickedId);
    setActiveVideo(newActiveVideo);
  }

  return (
    <>
      <Header />
      <ActiveHero hero={activeVideo} />
      <div className="content__section">
        <div className="content__right-side">
          <VideoDetails video={activeVideo} />
          <FormComments />
          <VideoComments video={activeVideo} /> 
        </div>
        <hr className="divider" />
        <div className="content__left-side">
          <VideoDetailsList
            videos={allVideos}
            activeVideo={activeVideo}
            updateActiveVideo={updateActiveVideo}
          />
        </div>
      </div>
    </>
  );
}

export default App;