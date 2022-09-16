import {comments} from "../../../data/comments"
export default function handler(req,res){
    if(req.method === "GET"){
        res.status(200).json({comments})
    }

    if(req.method === "POST"){
        const {comment} = req.body;
        const newComment = {
            id: new Date().toISOString(),
            text: comment
        }
        comments.push(newComment);
        res.status(201).json({comments})
    }
}
