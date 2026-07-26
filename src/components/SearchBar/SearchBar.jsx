function SearchBar({ searchTerm, onSearch }) {
  return (
    <input
      autoComplete="off"
      type="text"
      placeholder="Search notes..."
      value={searchTerm}
      onChange={(e) => onSearch(e.target.value)}
      className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-900 outline-none transition focus:border-transparent focus:ring-2 focus:ring-gray-400 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
    />
  );
}

export default SearchBar;
