import { FaSearch } from "react-icons/fa";

const SearchBar = (
  { setSearch }:
    { setSearch: React.Dispatch<React.SetStateAction<string>> }
) => {
  return (
    <div className="flex justify-center mb-14">
      <div className="relative w-full sm:w-2/3 md:w-1/2 lg:w-1/2">
        <input
          type="text"
          placeholder="Search your contest" className="bg-[#f5eaee] pl-8 sm:pl-12 p-5 sm:p-6 w-full outline-0 text-base placeholder-black font-poppins "
          onChange={(e) => setSearch(e.target.value)}
        />
        <FaSearch className="absolute left-2 sm:left-5 top-6 sm:top-7 text-gray-900" />
      </div>
      <button className="text-white px-4 sm:px-14 py-5 sm:py-6 bg-secondary">Search</button>
    </div>
  )
};

export default SearchBar;