import { createSlice, nanoid } from "@reduxjs/toolkit";

const carsSlice = createSlice({
  name: "cars",
  initialState: { searchCar: "", data: [] },
  reducers: {
    changeCarSearch(state, action) {
      state.searchCar = action.payload;
    },
    addCar(state, action) {
      state.data.push({
        id: nanoid(),
        name: action.payload.name,
        cost: action.payload.cost,
      });
    },
    removeCar(state, action) {
      const updatedCarList = state.data.filter(
        (car) => car.id !== action.payload.id
      );
      state.data = updatedCarList;
    },
  },
});

export const { changeCarSearch, addCar, removeCar } = carsSlice.actions;
export const carsReducer = carsSlice.reducer;
