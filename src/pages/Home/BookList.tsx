import BookCard from "../../components/Book/BookCard";
import BookPagination from "../../components/Book/BookPagination";
import FilterButtons from "../../components/Book/FilterButtons";
import SearchBar from "../../components/Book/SearchBar";
import Container from "../../components/Container/Container";
import shape from "../../assets/shape.png"
import { useGetAllBooksQuery } from "../../redux/bookApi/bookApi";
import { useEffect, useState } from "react";
import { getWishlistIds, saveWishlistIds } from "../../utils/wishlistHelpers";
import { TBook } from "../../types";
import Error from "../../components/Loading/Error";
import Loading from "../../components/Loading/Loading";
import useLocalStorage from "../../utils/searchFilterStore";
import { motion, AnimatePresence } from 'framer-motion';
import { FaRegSadCry, FaUndo } from "react-icons/fa";
const BookList = () => {
  const [search, setSearch] = useLocalStorage("search", "");
  const [topic, setTopic] = useLocalStorage("topic", "");
  const [currentPage, setCurrentPage] = useState(1);
  const [wishlistIds, setWishlistIds] = useState<string[]>([]);

  const query = {
    search,
    topic,
    page: currentPage,
  };

  const { data, isLoading, isFetching, error } = useGetAllBooksQuery(query);

  // Unique subjects
  const subjects = [...new Set(data?.results?.flatMap((book: TBook) => book.subjects))];

  // Wishlist funtionality
  useEffect(() => {
    const savedWishlistIds = getWishlistIds();
    setWishlistIds(savedWishlistIds);
  }, []);

  const toggleWishlist = (bookId: string) => {
    setWishlistIds((prevIds) => {
      const updatedIds = prevIds.includes(bookId)
        ? prevIds.filter((id) => id !== bookId)
        : [...prevIds, bookId];

      saveWishlistIds(updatedIds);
      return updatedIds;
    });
  };

  //======= Reset Filtering
  const handleReset = () => {
    setSearch("");
    setTopic("");
  };


  return (
    <div className="mb-28">
      <Container>
        <div className="mx-auto p-6">
          {/* ======= Header Section ========= */}
          <div className="text-center mb-8">
            <div>
              <p className="mb-1 text-base font-bold text-[#81BAE3]">Let's something about us</p>
              <img src={shape} alt="" className="mx-auto" />
            </div>
            <h1 className="text-4xl font-bold text-primary mt-1">Find your favorite book</h1>
          </div>

          {/* ====== Search Bar ======== */}
          <SearchBar setSearch={setSearch} />

          {/* ======== Filter Buttons ========= */}
          <FilterButtons topic={topic} subjects={subjects as string[]} setTopic={setTopic} />

          {/* ======== Loading State ========== */}
          {(isLoading || isFetching) && <Loading />}

          {/* ========= Error State ======== */}
          {error && <Error />}

          {/* ========= Book Cards Grid ========== */}
          <AnimatePresence>
            {!isLoading && !error && !isFetching && (
              <>
                {data?.results.length === 0 ? (
                  <motion.div
                    className="flex flex-col items-center justify-center py-20"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <FaRegSadCry className="text-6xl text-gray-400 mb-2" />
                    <p className="text-lg font-semibold text-gray-500">
                      No Books Found !
                    </p>
                    <p className="text-gray-400">Please try again later .</p>
                    <button
                      onClick={handleReset}
                      className="mt-2 flex items-center justify-center px-4 py-2 bg-primary text-white hover:bg-SecondPrimary transition"
                    >
                      <FaUndo className="mr-2" /> {/* Icon on the left */}
                      Reset Filters
                    </button>
                  </motion.div>
                ) : (
                  <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    {
                      data?.results.slice(0, 6).map((book: TBook) => (
                        <motion.div key={book.id} layout transition={{ duration: 0.3 }}>
                          <BookCard
                            book={book}
                            isWishlisted={wishlistIds.includes(book.id.toString())}
                            toggleWishlist={toggleWishlist}
                          />
                        </motion.div>
                      ))
                    }
                  </motion.div>
                )}
              </>
            )}
          </AnimatePresence>

          {/* ========== Pagination Components ======== */}
          {data?.results.length > 0 && (
            <BookPagination
              currentPage={currentPage}
              nextPage={data?.next}
              previousPage={data?.previous}
              setCurrentPage={setCurrentPage}
            />
          )}
        </div>
      </Container>
    </div>
  )
};

export default BookList;