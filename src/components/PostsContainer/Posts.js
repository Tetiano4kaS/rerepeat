import {useEffect, useState} from "react";
import {postsService} from "../../services/postsService";
import {Post} from "./Post";
import {useLocation} from "react-router-dom";

const Posts = () => {
    const {state: {postId}} = useLocation();
    const [posts, setPosts] = useState(null);

    useEffect(() => {
        postsService.getByPostId(postId).then(({data}) =>
            setPosts(data))
    }, [postId])
    return (
        <div>
            {posts && <Post posts={posts}/>}
        </div>
    );
};

export {Posts};