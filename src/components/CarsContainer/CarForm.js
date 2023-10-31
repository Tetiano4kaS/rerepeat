import {useForm} from "react-hook-form";
import {carService} from "../../services/carService";
import {carValidator} from "../../validators/carValidator";
import {joiResolver} from "@hookform/resolvers/joi";
import {useEffect} from "react";

const CarForm = ({trigger, carForUpdate, setCarForUpdate}) => {
    const {register, reset, handleSubmit, setValue, formState:{isValid}}=useForm({
        mode:'all',
        resolver:joiResolver(carValidator)
    });

    useEffect(()=>{
        if(carForUpdate){
            setValue('brand',carForUpdate.brand, {shouldValidate:true})
            setValue('price', carForUpdate.price,{shouldValidate:true})
            setValue('year', carForUpdate.year, {shouldValidate:true})
        }
    },[carForUpdate])

    const save= async (car)=>{
        await carService.create(car)
        trigger()
        reset()
    }

    const update = async (car) => {
      await carService.updateById(carForUpdate.id,car)
        trigger()
        setCarForUpdate(null)
        reset()
    }

    return (
        <div>
<form onSubmit={handleSubmit(carForUpdate ? update:save)}>
    <input type={"text"} placeholder={'brand'} {...register('brand')}/>
    <input type={"text"} placeholder={'price'} {...register('price', {valueAsNumber:true})}/>
    <input type={'text'} placeholder={'year'} {...register('year',{valueAsNumber:true})}/>
    <button disabled={!isValid}>{carForUpdate?'Update':'Save'}</button>
</form>
        </div>
    );
};

export {CarForm};