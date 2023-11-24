import {axiosService} from "./axiosService";
import {urls} from "../constans";

const carService = {
    getAll: () => axiosService.get(urls.base),
    create: (data) => axiosService.post(urls.base, data),
    updateById: (id, data) => axiosService.put(urls.byId(id), data),
    delete: (id) => axiosService.delete(urls.byId(id))
}

export {carService}