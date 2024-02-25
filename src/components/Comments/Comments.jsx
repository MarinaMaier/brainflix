function VideoComments ({ video }){
    const {
        comments
    } = video;
    return (
        <article className="comments">
          {comments.map((comment) => (
            <div key={comment.id} className="comments-list">
              <div className="comments-list__avatar"></div>
              <div className="comments-list__details">
                <h3 className="comments-list__details__name">{comment.name}</h3>
                <p className="comments-list__details__timestamp">{new Date(comment.timestamp).toLocaleDateString()}</p>
              </div>
              <div className="comments-list__comment">
                <p key={comment.id} className="comments-list__comment__text">{comment.comment}</p>
              </div>
              <hr className="comments-list__divider" />
            </div>
          ))}
        </article>
      );
}
  
  export default VideoComments;