import {comments} from "../../../data/comments"

export default function handler(req, res) {
    if (req.method === "GET") {
        const { commentId } = req.query;
        const comment = comments.find(comment => comment.id === commentId);
        res.status(200).json({ comment })
    }

    if(req.method === "DELETE"){
        const {commentId} = req.query;
        const newComments = comments.filter(comment => comment.id != commentId);
        res.status(200).json({comments: newComments})
    }
}