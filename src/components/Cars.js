import {useDispatch, useSelector} from "react-redux";
import {Car} from "./Car";
import {useEffect} from "react";
import {carService} from "../services";
import {carAction} from "../redux/slices";

const Cars = () => {
    const {cars,trigger} = useSelector(state => state.cars);
    const dispatch = useDispatch();

    useEffect(()=>{
        carService.getAll().then(({data})=>dispatch(carAction.setCars(data)))
    },[trigger,dispatch])

    return (
        <div>
            {cars.map(car=><Car key={car.id} car={car}/>)}
        </div>
    );
};

export {Cars};