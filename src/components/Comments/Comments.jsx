import React from "react";
import "./Comments.scss";
import * as moment from "moment";

function VideoComments ({ video }){
    const {
        comments
    } = video;

    //Dynamic Timestamp
    const getCustomTime = (time) => {
      var duration = moment.duration(new moment().diff(new moment(time)));
      return `${duration.humanize()} ago`
    }

    return (
        <article className="comments-list">
          {comments.map((comment) => (
            <React.Fragment key={comment.id}>
              <div className="comments-list__wrapper">
                <div className="comments-list__avatar"></div>
                <div className="comments-list__wrapper-details-comments">
                    <div className="comments-list__wrapper-details-comments__details">
                      <h3 className="comments-list__wrapper-details-comments__details__name">{comment.name}</h3>
                      <p className="comments-list__wrapper-details-comments__details__timestamp">{getCustomTime(comment.timestamp)}</p>
                    </div>
                    <div className="comments-list__wrapper-details-commentst__comment">
                      <p className="comments-list__wrapper-details-comments__comment__text">{comment.comment}</p>
                    </div>
                </div>
              </div>
              <hr className="comments-list__divider" />
            </React.Fragment>
          ))}
        </article>
      );
}
  
  export default VideoComments;