import PropTypes from "prop-types";

function Search({ searchTerm, onSearchCar, showPremium, onSetShowPrmium }) {
  return (
    <form>
      <div className="mb-4 md:flex md:flex-row items-center sm:flex-col sm:space-x-0 md:space-x-4 md:w-1/2 sm:w-full ">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(event) => onSearchCar(event.target.value)}
          className="p-2 border border-gray-300 rounded-lg w-full sm:w-full bg-transparent md:mb-0 sm:mb-2"
        />
        <div className="flex space-x-2 md:min-w-fit md:mt-0 sm:w-full sm:mt-2">
          <input type="checkbox" name="premium-car" 
          value={showPremium}
          onChange={(event) => onSetShowPrmium(event.target.checked)} />
          <label htmlFor="premium-car"> Show Premium Only</label>
        </div>
      </div>
    </form>
  );
}

Search.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  onSearchCar: PropTypes.func.isRequired,
  showPremium: PropTypes.bool.isRequired,
  onSetShowPrmium: PropTypes.func.isRequired,
};

export default Search;
