import { getWishlistIds } from "../../utils/wishlistHelpers";
import { useGetAllBooksQuery } from "../../redux/bookApi/bookApi";
import Container from "../../components/Container/Container";
import shape from "../../assets/shape.png"
import { TBook } from "../../types";
import { FaInfoCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Loading from "../../components/Loading/loading";
const Wishlist = () => {
  const savedWishlistIds = getWishlistIds();
  const ids = savedWishlistIds.join(',');
  const navigate = useNavigate()

  const query = {
    ids
  };

  const { data, isLoading } = useGetAllBooksQuery(query);

  return (
    <div className="my-10">
      <Container>
        <div className="text-center my-8">
          <div>
            <p className="mb-1 text-base font-bold text-[#81BAE3]">Wishlist</p>
            <img src={shape} alt="" className="mx-auto" />
          </div>
          <h1 className="text-4xl font-bold text-primary mt-1">Find your favorite wishlist</h1>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 cursor-pointer">
            <thead>
              <tr className="bg-gray-100 text-gray-600 uppercase text-sm leading-normal">
                <th className="py-3 px-6 text-left">ID</th>
                <th className="py-3 px-6 text-left">image</th>
                <th className="py-3 px-6 text-left">Title</th>
                <th className="py-3 px-6 text-left">Author</th>
                <th className="py-3 px-6 text-left">Actions</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 text-sm font-light">
              {isLoading ? (
                <Loading />
              ) : data?.results.length > 0 ? (
                data.results.map((book: TBook) => (
                  <tr key={book.id} className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="py-3 px-6 text-left text-sm font-bold text-primary">{book.id}</td>
                    <td className="py-3 px-6 text-left">
                      <img
                        src={book.formats['image/jpeg']}
                        alt={book.authors[0]?.name}
                        className="w-16 h-16 object-fit flex-shrink-0"
                      />
                    </td>
                    <td className="py-3 px-6 text-left text-base font-bold text-primary">{book.title}</td>
                    <td className="py-3 px-6 text-sm font-semibold text-primary">{book.authors[0]?.name}</td>
                    <td className="py-3 px-6 text-left">
                      <button
                        onClick={() => navigate(`/books/${book?.id}`)}
                        className="flex items-center justify-center px-4 py-2 bg-secondary text-white font-semibold rounded-lg shadow-md hover:bg-SecondPrimary transition duration-300 ease-in-out transform hover:scale-105"
                      >
                        <FaInfoCircle className="mr-2" />
                        <span>View Details</span>
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={5} className="py-3 px-6 text-center text-gray-500">
                    No books in wishlist
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </Container >
    </div >
  )
};

export default Wishlist;