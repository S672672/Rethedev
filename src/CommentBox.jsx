import React, { useState } from 'react';

export default function CommentBox () {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  const handleAddComment = () => {
    if (newComment.trim() !== '') {
      setComments([...comments, { text: newComment, replies: [] }]);
      setNewComment('');
    }
  };

  const handleAddReply = (commentIndex, replyText) => {
    if (replyText.trim() !== '') {
      const updatedComments = [...comments];
      updatedComments[commentIndex].replies.push(replyText);
      setComments(updatedComments);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4 bg-gray-100 rounded-lg">
      <h2 className="text-xl font-bold mb-4">Comment Box</h2>
      <textarea
        className="w-full p-2 mb-4 border border-gray-300 rounded"
        rows="4"
        placeholder="Add a comment..."
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
      ></textarea>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        onClick={handleAddComment}
      >
        Add Comment
      </button>
      <div className="mt-4">
        {comments.map((comment, commentIndex) => (
          <div key={commentIndex} className="bg-white p-3 mb-2 rounded-lg border border-gray-300">
            <div className="mb-2">{comment.text}</div>
            <textarea
              className="w-full p-2 mb-2 border border-gray-300 rounded"
              rows="2"
              placeholder="Reply to this comment..."
              value={''}
              onChange={(e) => handleAddReply(commentIndex, e.target.value)}
            ></textarea>
            <div>
              {comment.replies.map((reply, replyIndex) => (
                <div key={replyIndex} className="bg-gray-200 p-2 mb-2 rounded-lg border border-gray-300">
                  {reply}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
