import PropTypes from "prop-types";

function SingleCar({ car }) {
  return (
    <div className="border p-4 rounded-lg shadow-sm">
      <h2 className="text-xl font-bold ">{car.title}</h2>
      <p className="text-black ">
        <strong>Brand:</strong> {car.brand}
      </p>
      <p className="text-black">
        <strong>Year:</strong> {car.year}
      </p>
      <p className="text-black">
        {" "}
        <strong>Price:</strong> {car.price}
      </p>
      <p className="text-black">
        <strong>Premium:</strong> {car.isPremium ? "Yes" : "No"}
      </p>
    </div>
  );
}
SingleCar.propTypes = {
  car: PropTypes.object.isRequired,
};

export default SingleCar;