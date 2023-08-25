import { useSelector } from "react-redux";

export default function CarValue() {
  const totalValue = useSelector(({ cars: { data, searchTerm } }) =>
    data
      .filter((car) =>
        car.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .reduce((sum, car) => sum + car.cost, 0)
  );

  return <p className="car-value">{`Total Value: $${totalValue}`}</p>;
}
