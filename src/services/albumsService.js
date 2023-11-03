import {axiosService} from "./axiosService";
import {urls} from "../constans/urls";

const albumsService={
    getAll:()=> axiosService.get(urls.albums)
}

export {albumsService};