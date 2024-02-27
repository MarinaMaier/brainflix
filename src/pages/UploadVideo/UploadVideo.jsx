import image from "../../assets/images/Upload-video-preview.jpg";
import "./UploadPage.scss";

const UploadVideo = () => {
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
          <form className="upload-video__preview__form__container">
            <h3 className="upload-video__preview__form__container__heading">
              TITLE YOUR VIDEO
            </h3>
            <input
              placeholder="Add a title to your video"
              className="upload-video__preview__form__container__title-input"
              id="title"
              type="text"
              name="text"
            />
            <h3 className="upload-video__preview__form__container__heading">
              ADD A VIDEO DESCRIPTION
            </h3>
            <input
              placeholder="Add a description to your video"
              className="upload-video__preview__form__container__title-input2" 
              id="title-2"
              type="text"
              name="text"
            />
          </form>
        </div>
      </div>
      <hr className="upload-video__divider3" />
      <div className="upload-video__btn">
        <button type="submit" className="upload-video__btn__publish-mb">
          PUBLISH
        </button>
        <button type="submit" className="upload-video__btn__cancel">
          CANCEL
        </button>
        <button type="submit" className="upload-video__btn__publish-td">
          PUBLISH
        </button>
      </div>
    </main>
  );
};

export default UploadVideo;