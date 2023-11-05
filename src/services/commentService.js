import {axiosService} from "./axiosService";
import {urls} from "../constans/urls";

const
    commentService = {
   getByPostId:(postId)=>axiosService(urls.comments, {params:{postId}})
}

export {commentService}