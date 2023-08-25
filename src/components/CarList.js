import { useDispatch, useSelector } from "react-redux";
import { removeCar } from "../store";

export default function CarList() {
  const dispatch = useDispatch();
  const data = useSelector(({ cars: { data, searchTerm } }) => {
    return data.filter((car) =>
      car.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  const { name } = useSelector((state) => state.carForm);

  const handleCarDelete = (car) => {
    dispatch(removeCar(car));
  };

  const renderedCarsList = data.map((car) => {
    return (
      <div key={car.id} className="panel">
        {car.name.toLowerCase().startsWith(name.toLowerCase()) &&
        name !== "" ? (
          <p className="bold">
            {car.name} - ${car.cost}
          </p>
        ) : (
          <p>
            {car.name} - ${car.cost}
          </p>
        )}
        <button
          onClick={() => handleCarDelete(car)}
          className="button is-danger"
        >
          Delete
        </button>
      </div>
    );
  });

  return (
    <div className="car-list">
      {renderedCarsList}
      <hr />
    </div>
  );
}
