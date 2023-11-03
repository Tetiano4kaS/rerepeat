import {axiosService} from "./axiosService";
import {urls} from "../constans/urls";

const commentsService={
    getAll:()=> axiosService.get(urls.comments)
}

export {commentsService}