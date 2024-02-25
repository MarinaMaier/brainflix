import "./Form.scss";
import image from "../../assets/images/Mohan-muruge.jpg";

const FormComments = () => {
    return (
        <section className="comments">
            <h3 className="comments__heading">3 Comments</h3>
            <form className="comments__wrapper">
                <div className="comments__image">
                    <img className="comments__image__avatar" src={image} alt="Mohan-muruge" />
                </div>
                <div className="comments__container">
                    <div className="comments__container-desktop">
                        <h2 className="comments__subheading">JOIN THE CONVERSATION</h2>
                        <input placeholder="Add a new comment" className="comments__comment-input" id="user-comment" type="text"
                            name="text"/>
                        <p id="add-user-form-errors"></p>
                        </div>
                    <div className="comments__btn">
                        <button type="submit" className="comments__btn__comment">COMMENT</button>
                    </div>
                </div>
            </form>
            <hr className="comments__divider"/>
        </section>
    )
}

       


export default FormComments;