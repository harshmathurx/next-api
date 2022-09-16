import {comments} from "../../data/comments"

export async function getStaticProps(context) {

    const {params} = context;
    const {commentId} = params;

    const comment = comments.find(comment => comment.id === parseInt(commentId));
    return{
        props: {
            comment
        }
    }
}

export async function getStaticPaths() {
    const paths = comments.map(comment => ({
        params: {commentId: comment.id.toString()}
    }))
    return {
        paths,
        fallback: false
    }
}

const CommentDetail = ({comment}) => {
  return (
    <div>
        <h1>Comment {comment.id}</h1>
        <h3>{comment.text}</h3>
    </div>
  )
}

export default CommentDetail