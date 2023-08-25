import CarForm from "../components/CarForm";
import CarSearch from "../components/CarSearch";
import CarList from "../components/CarList";
import CarValue from "../components/CarValue";

export default function CarPage() {
  return (
    <div className="container is-fluid">
      <CarForm />
      <CarSearch />
      <CarList />
      <CarValue />
    </div>
  );
}
