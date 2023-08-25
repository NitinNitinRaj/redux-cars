import { useDispatch, useSelector } from "react-redux";
import { removeCar } from "../store";

export default function CarList() {
  const dispatch = useDispatch();
  const { data, searchTerm } = useSelector((state) => {
    return state.cars;
  });

  const handleCarDelete = (car) => {
    dispatch(removeCar(car));
  };

  const renderedCarsList = data.map((car) => {
    if (car.name.toLowerCase().includes(searchTerm.toLowerCase())) {
      return (
        <div key={car.id} className="panel">
          <p className="">
            {car.name} - ${car.cost}
          </p>
          <button
            onClick={() => handleCarDelete(car)}
            className="button is-danger"
          >
            Delete
          </button>
        </div>
      );
    }
    return null;
  });

  return (
    <div className="car-list">
      {renderedCarsList}
      <hr />
    </div>
  );
}
