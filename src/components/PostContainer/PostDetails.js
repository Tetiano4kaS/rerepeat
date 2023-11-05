import {Comments} from "../CommentContainer/Comments";

const PostDetails = ({post}) => {

    const {id, title, body} = post
    return (
        <div>
            <div>id:{id}</div>
            <div>title:{title}</div>
            <div>body:{body}</div>
            <hr/>
            <Comments postId={id}/>
        </div>
    );
};

export {PostDetails};