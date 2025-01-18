import SingleCar from "./SingleCar";
import PropTypes from "prop-types";

function CarList({ searchTerm,cars }) {
  const carResults=[];
  cars.forEach((car) =>{
    if(car.title.toLowerCase().indexOf(searchTerm.toLowerCase()) === -1){
      return;
    }
    
    carResults.push(<SingleCar key={car.id} car={car} />);

  })

  
  return (
    <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-4">
      {carResults}
    </div>
  );
}

CarList.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  cars: PropTypes.array.isRequired
};

export default CarList;
