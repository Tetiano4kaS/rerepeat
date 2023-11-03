import {axiosService} from "./axiosService";
import {urls} from "../constans/urls";

const todosService={
    getAll: ()=> axiosService.get(urls.todos)
}

export {todosService};