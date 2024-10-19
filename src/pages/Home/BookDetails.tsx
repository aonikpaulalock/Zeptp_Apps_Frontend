import { useParams } from "react-router-dom";
import { useGetSingleBookQuery } from "../../redux/bookApi/bookApi";
import Container from "../../components/Container/Container";
import shape from "../../assets/shape.png";
import Loading from "../../components/Loading/Loading";

const BookDetails = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useGetSingleBookQuery(id!, { skip: !id });

  if (!id) {
    return <div>Invalid book ID.</div>;
  }

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <div>Error fetching book details.</div>;
  }

  const {
    title,
    authors,
    subjects,
    bookshelves,
    languages,
    formats,
    download_count,
  } = data;

  return (
    <div className="my-10">
      <Container>
        {/* ========= Section Header ========= */}
        <div className="text-center my-10">
          <div>
            <p className="mb-1 text-xl font-bold text-[#81BAE3]">Book Details</p>
            <img src={shape} alt="" className="mx-auto" />
          </div>
        </div>

        {/* ======== Book Detail Section ========== */}
        <div className="max-w-5xl mx-auto p-4 md:p-8 bg-gray-50 rounded-lg shadow-lg">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <img
              src={formats["image/jpeg"]}
              alt={title}
              className="w-full md:w-48 h-auto rounded-lg shadow-2xl transition-transform transform hover:scale-105"
            />

            {/* ======== Book Information =========== */}
            <div className="text-left p-4 md:w-2/3 space-y-4">
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
                <strong className="text-xl">📚 Book Name: </strong>
                {title}
              </h1>
              <h2 className="text-lg text-gray-700">
                <strong>👨‍💼 Author: </strong>
                {authors[0]?.name} ({authors[0]?.birth_year} - {authors[0]?.death_year})
              </h2>
              <p className="text-gray-600">
                <strong>💾 Download Count: </strong> {download_count}
              </p>
              <p className="text-gray-600">
                <strong>🌐 Language: </strong> {languages[0]}
              </p>
            </div>
          </div>
          {/* ======== Subjects =========== */}
          <div className="mt-6 p-6">
            <div className="flex flex-col sm:flex-row justify-between items-start">
              <div className="mb-4 md:mb-0">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Subjects</h3>
                <ul className="list-disc pl-6 text-gray-700">
                  {subjects.map((subject: string, index: number) => (
                    <li key={index} className="mb-2">{subject}</li>
                  ))}
                </ul>
              </div>
              {/* ======== Bookshelves =========== */}
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Bookshelves</h3>
                <ul className="list-disc pl-6 text-gray-700">
                  {bookshelves.map((shelf: string, index: number) => (
                    <li key={index} className="mb-2">{shelf}</li>
                  ))}
                </ul>
              </div>
            </div>
            {/* ======== Download Options =========== */}
            <div className="mt-8 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Download Options</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {formats["text/html"] && (
                  <a
                    href={formats["text/html"]}
                    className="flex items-center justify-center px-4 py-2 bg-secondary text-white font-semibold rounded-lg shadow-md hover:bg-SecondPrimary transition duration-300 ease-in-out transform hover:scale-105"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    HTML Version
                  </a>
                )}
                {formats["application/epub+zip"] && (
                  <a
                    href={formats["application/epub+zip"]}
                    className="flex items-center justify-center px-4 py-2 bg-secondary text-white font-semibold rounded-lg shadow-md hover:bg-SecondPrimary transition duration-300 ease-in-out transform hover:scale-105"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    EPUB Version
                  </a>
                )}
                {formats["application/x-mobipocket-ebook"] && (
                  <a
                    href={formats["application/x-mobipocket-ebook"]}
                    className="flex items-center justify-center px-4 py-2 bg-secondary text-white font-semibold rounded-lg shadow-md hover:bg-SecondPrimary transition duration-300 ease-in-out transform hover:scale-105"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Mobi Version
                  </a>
                )}
                {formats["text/plain; charset=us-ascii"] && (
                  <a
                    href={formats["text/plain; charset=us-ascii"]}
                    className="flex items-center justify-center px-4 py-2 bg-secondary text-white font-semibold rounded-lg shadow-md hover:bg-SecondPrimary transition duration-300 ease-in-out transform hover:scale-105"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Plain Text Version
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default BookDetails;
