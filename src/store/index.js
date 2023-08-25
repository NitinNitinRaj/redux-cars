import { configureStore } from "@reduxjs/toolkit";
import { carFormReducer, changeCost, changeName } from "./slices/carFormSlice";
import {
  carsReducer,
  addCar,
  removeCar,
  changeCarSearch,
} from "./slices/carsSlice";

const store = configureStore({
  reducer: {
    carForm: carFormReducer,
    cars: carsReducer,
  },
});

export { store, changeCost, changeName, addCar, removeCar, changeCarSearch };
