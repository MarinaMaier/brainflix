import image from "../../assets/images/Upload-video-preview.jpg";
import "./UploadPage.scss";
import { useState } from "react";
import axios from "axios";
import UploadPopUp from './UploadPopUp';
import { Link } from "react-router-dom";
import { ApiUrl } from "../../utils/Api.js";

const UploadVideo = () => {
  const [uploadStatus, setUploadStatus] = useState(false);

  const handleSubmit = async (e) => { 
    e.preventDefault();
    try {
      const response = await axios.post(`${ApiUrl}videos/upload`, {
        title: e.target.title.value,
        description: e.target.description.value,
        image: '../public/images/Upload-video-preview.jpg'
      });
      console.log(response)
      setUploadStatus(true);
    } catch (error) {
      console.error("This is your error: ", error);
    }
  };

  return (
    <main className="upload-video">
      <hr className="upload-video__divider1" />
      <h1 className="upload-video__heading">Upload Video</h1>
      <hr className="upload-video__divider2" />
      <div className="upload-video__preview">
        <div className="upload-video__preview__items">
          <h3 className="upload-video__preview__items__heading">VIDEO THUMBNAIL</h3>
          <img
            className="upload-video__preview__items__img"
            src={image}
            alt="upload video"
          />
        </div>
        <div className="upload-video__preview__form">
          <form className="upload-video__preview__form__container" onSubmit={handleSubmit}>
            <h3 className="upload-video__preview__form__container__heading">
              TITLE YOUR VIDEO
            </h3>
            <input
              placeholder="Add a title to your video"
              className="upload-video__preview__form__container__title-input"
              id="title"
              type="text"
              name="title"
            />
            <h3 className="upload-video__preview__form__container__heading">
              ADD A VIDEO DESCRIPTION
            </h3>
            <input
              placeholder="Add a description to your video"
              className="upload-video__preview__form__container__title-input2" 
              id="title-2"
              type="text"
              name="description"
            />
            <hr className="upload-video__divider3" />
            <div className="upload-video__btn">
              <button type="submit" className="upload-video__btn__publish">
                PUBLISH
              </button> 
              <Link to={"/"}>
                <button className="upload-video__btn__cancel">
                  CANCEL
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
      <div className="upload__popup">
        { uploadStatus && <UploadPopUp />}
      </div>
    </main>
  );
};

export default UploadVideo;
