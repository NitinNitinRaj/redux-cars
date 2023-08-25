import { useSelector } from "react-redux";

export default function CarValue() {
  const { data, searchTerm } = useSelector((state) => state.cars);

  const totalValue = data.reduce((sum, car) => {
    if (car.name.toLowerCase().includes(searchTerm.toLowerCase())) {
      return sum + car.cost;
    }
    return sum;
  }, 0);

  return <p className="car-value">{`Total Value: $${totalValue}`}</p>;
}
