import {useNavigate} from "react-router-dom";

const Post = ({post}) => {
    const {userId,id, title} = post

    const navigation=useNavigate()
    return (
        <div>
            <div>userId: {userId}</div>
            <div>title: {title}</div>
            <button onClick={()=> navigation(`${id}`)}>post-detail</button>
        </div>
    );
};

export {Post};