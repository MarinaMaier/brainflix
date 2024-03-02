import ActiveHero from "../../components/Hero/Hero";
import VideoDetails from "../../components/VideoDetails/VideoDetails";
import VideoDetailsList from "../../components/VideoDetailsList/VideoDetailsList";
import FormComments from "../../components/Form/Form";
import VideoComments from "../../components/Comments/Comments";
import { useState, useEffect } from "react";
import { HomePageServices } from "../../utils/HomePage";
import { useParams } from "react-router-dom";


const HomePage = () => {
  const { videoId } = useParams();

  const [activeVideo, setActiveVideo] = useState([]);
  const [allVideos, setAllVideos] = useState([]);

  useEffect(() => {
  /*     
    Initializing the service class holding all backend calls for the home page.
    We used a class to scope all our service calls because it's generally best to avoid using global variables as much as possible. This includes all data types, objects, and functions.
    One of the main reasons to avoid global properties is that they can be easily overwritten by other scripts, causing unexpected behavior.
  */
  const homePageServices = new HomePageServices();

  const fetchVideos = async() => {
    // Fetching all videos from backend
    const allVideos = await homePageServices.fetchAllVideos();
    // Determining which video to fetch based on avalibility of videoId
    const id = videoId ? videoId : allVideos[0] && allVideos[0].id;
    // Fetching full video json
    const activeVideoDetails = await homePageServices.fetchVideoDetails(id);
    // Updating respective states
    setAllVideos(allVideos);
    setActiveVideo(activeVideoDetails);
  }
  fetchVideos();
  }, [videoId]);

  return (
    <>
      {activeVideo && <ActiveHero hero={activeVideo} />}
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
          />
        </div>
      </div>
    </>
  );
};

export default HomePage;
