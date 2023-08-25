import { useDispatch, useSelector } from "react-redux";
import { changeCarSearch } from "../store";

export default function CarSearch() {
  const dispatch = useDispatch();
  const searchTerm = useSelector((state) => state.cars.searchTerm);
  const handleSearchTermChange = (e) => {
    const { value } = e.target;
    dispatch(changeCarSearch(value));
  };
  return (
    <div className="list-header">
      <h3 className="title">Cars</h3>
      <div className="search">
        <label className="label">Search</label>
        <input
          className="input is-expanded"
          type="text"
          value={searchTerm}
          onChange={handleSearchTermChange}
        />
      </div>
    </div>
  );
}
