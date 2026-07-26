function SearchBar({ searchTerm, onSearch }) {
  return (
    <input
      type="text"
      placeholder="Search notes..."
      value={searchTerm}
      onChange={(e) => onSearch(e.target.value)}
      className="w-full rounded-lg border px-4 py-2"
    />
  );
}

export default SearchBar;
