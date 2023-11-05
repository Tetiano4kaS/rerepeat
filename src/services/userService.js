import {axiosService} from "./axiosService";
import {urls} from "../constans/urls";

const userService = {
    getAll:()=> axiosService.get(urls.users.base),
    getById: (id) => axiosService.get(urls.users.byId(id))
}

export {userService}