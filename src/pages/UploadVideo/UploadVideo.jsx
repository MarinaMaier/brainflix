import image from "../../assets/images/Upload-video-preview.jpg";
import "./UploadPage.scss";
import { useState } from "react";
import axios from "axios";
import UploadPopUp from "./UploadPopUp";
import { Link } from "react-router-dom";
import { ApiUrl } from "../../utils/Api.js";

const UploadVideo = () => {
  const [uploadStatus, setUploadStatus] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post(`${ApiUrl}videos/upload`, {
        title: event.target.title.value || event.target.title.placeholder,description:
          event.target.description.value || event.target.description.placeholder,
        image: "http://localhost:5001/images/Upload-video-preview.jpg",
      });
      setUploadStatus(true);
    } catch (error) {
      console.error("This is your error: ", error);
    }
  };

  return (
    <main className="upload-video">
      <hr className="upload-video__divider1" />
      <h1 className="upload-video__header">Upload Video</h1>
      <hr className="upload-video__divider2" />
      <div className="upload-video__preview">
        <div className="upload-video__wrapper">
          <h3 className="upload-video__heading">VIDEO THUMBNAIL</h3>
          <img className="upload-video__img" src={image} alt="upload video" />
        </div>
        <form className="upload-video__form" onSubmit={handleSubmit}>
          <h3 className="upload-video__form-heading">TITLE YOUR VIDEO</h3>
          <input
            placeholder="Add a title to your video"
            className="upload-video__title"
            id="title"
            type="text"
            name="title"
          />
          <h3 className="upload-video__form-heading">
            ADD A VIDEO DESCRIPTION
          </h3>
          <input
            placeholder="Add a description to your video"
            className="upload-video__description"
            id="title-2"
            type="text"
            name="description"
          />
          <hr className="upload-video__divider3" />
          <div className="upload-video__btn">
            <button type="submit" className="upload-video__publish">
              PUBLISH
            </button>
            <Link to={"/"}>
              <button className="upload-video__cancel">CANCEL</button>
            </Link>
          </div>
        </form>
      </div>
      <div className="upload__popup">{uploadStatus && <UploadPopUp />}</div>
    </main>
  );
};

export default UploadVideo;
