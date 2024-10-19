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
import Loading from "../../components/Loading/loading";
import useLocalStorage from "../../utils/searchFilterStore";
import { motion, AnimatePresence } from 'framer-motion';
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
            <h1 className="text-4xl font-bold text-primary mt-1">Find your favorite contest</h1>
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
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                {
                  data?.results?.slice(0, 6).map((book: TBook) => (
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
          </AnimatePresence>

          {/* ========== Pagination Components ======== */}
          <BookPagination
            currentPage={currentPage}
            nextPage={data?.next}
            previousPage={data?.previous}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </Container>
    </div>
  )
};

export default BookList;