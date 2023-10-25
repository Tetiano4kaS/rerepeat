import {useEffect, useState} from "react";
import {postService} from "../../../services/postService";
import {Post} from "../Post/Post";
import {PostDetails} from "../../PostDetsils/PostDetails";

const Posts = () => {
    const [posts, setPosts] = useState([]);
    const [details, setDetails] = useState(null);

    const clickDetails = async (id) => {
        const {data} = await postService.getById(id);
        setDetails(data)
    }

    useEffect(() => {
        postService.getAll().then(({data}) => setPosts(data))
    }, []);


    return (
        <div>
            <div>
                {posts.map(post => <Post key={post.id} item={post} clickDetails={clickDetails}/>)}
            </div>
            <div>
                {details && <PostDetails postDetails={details}/>}
            </div>

        </div>
    );
};

export {Posts};