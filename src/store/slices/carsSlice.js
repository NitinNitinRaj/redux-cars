import { createSlice, nanoid } from "@reduxjs/toolkit";

const carsSlice = createSlice({
  name: "cars",
  initialState: {
    searchTerm: "",
    data: [
      { id: 1, name: "Tesla S", cost: 80000 },
      { id: 2, name: "Tesla 3", cost: 40000 },
      { id: 3, name: "Tesla X", cost: 95000 },
      { id: 4, name: "Tesla Y", cost: 45000 },
      { id: 5, name: "Ford GT", cost: 50000 },
      { id: 6, name: "Tata Nexon", cost: 15000 },
    ],
  },
  reducers: {
    changeCarSearch(state, action) {
      state.searchTerm = action.payload;
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
