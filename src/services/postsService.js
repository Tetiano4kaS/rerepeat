import {axiosService} from "./axiosService";
import {urls} from "../constans/urls";

const postsService = {
    getByPostId: (id) => axiosService.get(urls.posts.byPostId(id))
}

export {postsService}