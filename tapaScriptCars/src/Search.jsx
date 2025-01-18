import PropTypes from "prop-types";

function Search({ searchTerm, onSearchCar }) {
  return (
    <form>
      <div className="mb-4 md:flex md:flex-row items-center sm:flex-col sm:space-x-0 md:space-x-4 md:w-1/3 sm:w-full ">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(event) => onSearchCar(event.target.value)}
          className="p-2 border border-gray-300 rounded-lg w-full sm:w-full bg-transparent sm:mb-2"
        />
        <div className="flex space-x-2 md:min-w-fit sm:w-full sm:mt-2">
          <input type="checkbox" name="premium-car" value="" />
          <label htmlFor="premium-car"> Show Premium Only</label>
        </div>
      </div>
    </form>
  );
}

Search.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  onSearchCar: PropTypes.func.isRequired,
};

export default Search;
