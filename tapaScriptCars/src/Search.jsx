function Search() {
  return (
    <div className="mb-4 md:flex md:flex-row items-center sm:flex-col sm:space-x-0 md:space-x-4 md:w-1/3 sm:w-full">
      <input
        type="text"
        placeholder="Search..."
        className="p-2 border border-gray-300 rounded-lg w-full sm:w-full bg-transparent"
      />
      <div className="flex space-x-2 md:min-w-fit sm:w-full sm:mt-3 md:mt-0">
        <input type="checkbox" name="premium-car" value="" />
        <label htmlFor="premium-car"> Show Premium Only</label>
      </div>
    </div>
  );
}

export default Search;
