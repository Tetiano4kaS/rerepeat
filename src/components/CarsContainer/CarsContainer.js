import {CarForm} from "./CarForm";
import {Cars} from "./Cars";
import {useEffect, useState} from "react";
import {carService} from "../../services/carService";

const CarsContainer = () => {
    const [cars,setCars]=useState([])
    const [triger, setTriger]=useState(true)
    const [carForUpdate, setCarForUpdate]=useState(null)

    const trigger=()=>{
        setTriger(prev=>!prev)
    }

    useEffect(()=>{
        carService.getAll().then(({data})=>setCars(data))
    },[triger])

    return (
        <div>
            <CarForm trigger={trigger} carForUpdate={carForUpdate} setCarForUpdate={setCarForUpdate} />
            <hr/>
            <Cars cars={cars} setCarForUpdate={setCarForUpdate} trigger={trigger} />
        </div>
    );
};

export {CarsContainer};