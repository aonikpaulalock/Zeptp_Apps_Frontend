import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
interface PaginationProps {
  currentPage: number;
  nextPage: string | null;
  previousPage: string | null;
  setCurrentPage: (page: number) => void;
}
const BookPagination = ({
  currentPage,
  nextPage,
  previousPage,
  setCurrentPage,
}: PaginationProps) => {
  const handleNext = () => {
    if (nextPage) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevious = () => {
    if (previousPage && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  return (
    <div className="flex justify-end items-center mt-8 md:mt-16 ">
      <button
        disabled={!previousPage || currentPage === 1}
        onClick={handlePrevious}
        className={`border border-gray-400 text-gray-400 px-4 py-3 transition-colors duration-300 me-4 
          ${!previousPage || currentPage === 1 ? 'cursor-not-allowed' : 'hover:bg-gray-200 cursor-pointer'}`}
      >
        <FaChevronLeft className="ml-1" />
      </button>

      <button
        disabled={!nextPage}
        onClick={handleNext}
        className="border border-gray-400 text-gray-400 px-4 py-3  hover:bg-gray-200 transition-colors duration-300 me-4">
        <FaChevronRight className="ml-1" />
      </button>
    </div>
  )
};

export default BookPagination;