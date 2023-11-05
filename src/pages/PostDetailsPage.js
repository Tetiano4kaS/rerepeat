import {PostDetails} from "../components/PostContainer/PostDetails";
import {useLoaderData} from "react-router-dom";

const PostDetailsPage = () => {
    const {data: post} = useLoaderData()

    return (
        <div>
            {post && <PostDetails post={post}/>}

        </div>
    );
};

export {PostDetailsPage};