import { useState } from "react";


const CommentsPage = () => {

    const [comments, setComments] = useState([]); // comments is an array of objects
    const [newComment,setNewComment] = useState("");

    const fetchComments = () => {
        fetch("/api/comments")
        .then(res => res.json())
        .then(data => setComments(data.comments))
    }

    const addComment = async () => {
        await fetch("/api/comments", {
            method: "POST",
            body: JSON.stringify({comment: newComment}),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(res => res.json())
        .then(data => {
            setComments(data.comments);
            setNewComment("");
        })
    }

    const deleteComment = async (commentId) => {
        await fetch(`/api/comments/${commentId}`, {
            method: "DELETE"
        })
        .then(res => res.json())
        .then(data => setComments(data.comments))
    }

  return (
    <div>
        <h1>Comments</h1>
        <input type="text" value={newComment} onChange={(e) => setNewComment(e.target.value)} />
        <button onClick={addComment}>Add Comment</button>
        {comments.length == 0 && <p>No comments yet!</p>}
        <br />
        <br />
        <button onClick={fetchComments}>Load Comments</button>
        {comments.map(comment => (
            <div key={comment.id} onClick={() => deleteComment(comment.id)}>
                <h3>{comment.text}</h3>
            </div>
        ))}
    </div>
  )
}

export default CommentsPage