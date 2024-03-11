import React from "react";
import "./Comments.scss";
import { getCustomTime } from "../../utils/utils";

function VideoComments({ video }) {
  if (!(video && video.comments && video.comments.length)) {
    return <p>No comments available.</p>;
  }

  const { comments } = video;

  // Checking no comments scenario
  if (!comments.length) {
    return <p>No comments available.</p>;
  }

  return (
    <article className="comments-list">
      {comments.map((comment) => (
        <React.Fragment key={comment.id}>
          <div className="comments-list__wrapper">
            <div className="comments-list__avatar"></div>
            <div className="comments-list__wrapper-details-comments">
              <div className="comments-list__details">
                <h3 className="comments-list__name">{comment.name}</h3>
                <p className="comments-list__timestamp">
                  {getCustomTime(comment.timestamp)}
                </p>
              </div>
              <div className="comments-list__comment">
                <p className="comments-list__text">{comment.comment}</p>
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
