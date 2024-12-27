import React, { useState } from 'react';
import "./comment.css"

const CommentBox = () => {
  const [comment, setComment] = useState('');
  const [commentsList, setCommentsList] = useState([]);

  const handleChange = (e) => {
    setComment(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (comment.trim()) {
      setCommentsList([...commentsList, comment]);
      setComment(''); 
    }
  };

  return (
    <div className="comment-box">
      <h2>Leave a Comment</h2>
      
      <form onSubmit={handleSubmit}>
        <textarea
          value={comment}
          onChange={handleChange}
          placeholder="Write your comment here..."
          rows="4"
          cols="50"
        />
        <br />
        <button type="submit">Submit</button>
      </form>

      <h3>Comments:</h3>
      <ul>
        {commentsList.map((comment, index) => (
          <li key={index}>{comment}</li>
        ))}
      </ul>
    </div>
  );
};

export default CommentBox;
