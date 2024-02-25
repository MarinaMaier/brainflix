import Header from './components/Header/Header';
import ActiveHero from './components/Hero/Hero';
import videos from "./data/video-details.json";
import VideoDetails from "./components/VideoDetails/VideoDetails";
import VideoDetailsList from "./components/VideoDetailsList/VideoDetailsList";
import { useState } from "react";
import './App.scss';
import FormComments from './components/Form/Form';


function App() {
const [activeVideo, setActiveVideo] = useState(videos[0]);

function updateActiveVideo (clickedId) {
  const newActiveVideo = videos.find((video) => video.id === clickedId);
  setActiveVideo(newActiveVideo);
}

  return (
    <>
      <Header  />
      <ActiveHero
          hero={activeVideo}
        />
      <div className="content__section">
        <div className="content__right-side">
          <VideoDetails 
            video={activeVideo}   
          />
          <FormComments />
        </div>
        <hr className="divider"/>
        <div className="content__left-side">
          <VideoDetailsList 
            videos={videos}
            activeVideo={activeVideo}
            updateActiveVideo={updateActiveVideo}
          />
        </div>
      </div>
    </>
  );
}

export default App;
