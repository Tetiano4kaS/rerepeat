import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    cars: [],
    setCars: null,
    trigger: null,
    carForUpdate:null
}
const carSlice = createSlice({
    name: 'carSlice',
    initialState,
    reducers: {
        setCars: (state, actions) => {
            state.cars = actions.payload
        },
        trigger: (state) => {
            state.trigger = !state.trigger
        },
        setCarForUpdate:(state, actions)=>{
            state.carForUpdate=actions.payload
        }
    }
})

const {reducer: carReduser, actions} = carSlice;

const carAction = {
    ...actions
}

export {
    carReduser,
    carAction
}