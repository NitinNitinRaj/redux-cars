import { useDispatch, useSelector } from "react-redux";
import { removeCar } from "../store";

export default function CarList() {
  const dispatch = useDispatch();
  const { data, name } = useSelector(
    ({ carForm, cars: { data, searchTerm } }) => {
      const filterData = data.filter((car) =>
        car.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      return { data: filterData, name: carForm.name };
    }
  );

  const handleCarDelete = (car) => {
    dispatch(removeCar(car));
  };

  const renderedCarsList = data.map((car) => {
    const bold = car.name.toLowerCase().includes(name.toLowerCase()) && name;
    return (
      <div key={car.id} className="panel">
        <p className={`${bold && "bold"}`}>
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
  });

  return (
    <div className="car-list">
      {renderedCarsList}
      <hr />
    </div>
  );
}
