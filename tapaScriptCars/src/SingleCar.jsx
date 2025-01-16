import PropTypes from "prop-types";

function SingleCar({ car }) {
  return (
    <div key={car.id} className="border p-4 rounded-lg shadow-sm">
      {car.title && <h2 className="text-xl font-bold ">{car.title}</h2>}

      {car.brand && (
        <p className="text-black ">
          <strong>Brand:</strong> {car.brand}
        </p>
      )}
      {car.year && (
        <p className="text-black">
          <strong>Year:</strong> {car.year}
        </p>
      )}
      {car.price && (
        <p className="text-black">
          <strong>Price:</strong> {car.price}
        </p>
      )}
      {car.isPremium && (
        <p className="text-black">
          <strong>Premium:</strong> {car.isPremium ? "Yes" : "No"}
        </p>
      )}
    </div>
  );
}
SingleCar.propTypes = {
  car: PropTypes.object.isRequired,
};

export default SingleCar;
