import { Link } from "react-router-dom";
import "./UploadPopUp.scss";

const UploadPopUp = () => {
  return (
    <>
      <div className="popup">
        <p className="popup__text">Your video is uploaded successfully</p>
        <Link to="/">
          <button className="popup__btn" type="submit">
            OK
          </button>
        </Link>
      </div>
    </>
  );
}

export default UploadPopUp;