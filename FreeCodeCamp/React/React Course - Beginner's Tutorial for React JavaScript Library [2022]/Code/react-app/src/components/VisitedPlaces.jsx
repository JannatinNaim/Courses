import Card from "./Card";
import places from "../data/places";

const VisitedPlaces = () => {
  return (
    <div className="visited-places">
      {places.map((item) => (
        <Card item={item} />
      ))}
    </div>
  );
};

export default VisitedPlaces;
