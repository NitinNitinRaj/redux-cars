import { useSelector, useDispatch } from "react-redux";
import { addCar, changeCost, changeName } from "../store";
export default function CarForm() {
  const dispatch = useDispatch();

  const { name, cost } = useSelector((state) => {
    return state.carForm;
  });

  const handleNameChange = (e) => {
    const { value } = e.target;
    dispatch(changeName(value));
  };

  const handleCostChange = (e) => {
    const { value } = e.target;
    dispatch(changeCost(parseInt(value) || 0));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addCar({ name, cost }));
  };

  return (
    <div className="car-form panel">
      <h4 className="subtitle is-3">Add Car</h4>
      <form onSubmit={handleSubmit}>
        <div className="field-group">
          <div className="field">
            <label className="label">Name</label>
            <input
              className="input is-expanded"
              type="text"
              value={name}
              onChange={handleNameChange}
            />
          </div>
          <div className="field">
            <label className="label">Cost</label>
            <input
              className="input is-expanded"
              type="number"
              value={cost || ""}
              onChange={handleCostChange}
            />
          </div>
        </div>
        <div className="field">
          <button className="button is-link">Submit</button>
        </div>
      </form>
    </div>
  );
}
