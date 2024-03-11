import "./Form.scss";
import image from "../../assets/images/Mohan-muruge.jpg";

const FormComments = ({ video }) => {
  const { comments } = video;

  return (
    <section className="form">
      <h3 className="form__heading">{comments && comments.length} Comments</h3>
      <form className="form__wrapper">
        <img className="form__avatar" src={image} alt="Mohan-muruge" />
        <div className="form__container">
          <div className="form__container-desktop">
            <h2 className="form__subheading">JOIN THE CONVERSATION</h2>
            <input
              placeholder="Add a new comment"
              className="form__comment-input"
              id="user-comment"
              type="text"
              name="text"
            />
            <p id="add-user-form-errors"></p>
          </div>
          <div className="form__btn">
            <button type="submit" className="form__btn__comment">
              COMMENT
            </button>
          </div>
        </div>
      </form>
      <hr className="form__divider" />
    </section>
  );
};

export default FormComments;
