import { useState } from 'react';
import image from "../../assets/user.png"
import { FiCheckCircle } from 'react-icons/fi';
import { TBookCard } from '../../types';
const BookCard = ({ book, isWishlisted, toggleWishlist }: TBookCard
) => {
  const [showAllSubjects, setShowAllSubjects] = useState(false);

  // Limit subjects to display initially, e.g., only 3
  const displayedSubjects = showAllSubjects ? book.subjects : book.subjects.slice(0, 3);

  return (
    <div className="bg-[#F9F9F9] p-4">
      <img
        src={book.formats['image/jpeg']}
        alt={book.authors[0]?.name}
        className="w-full h-[450px] object-fit flex-shrink-0"
      />
      <div>
        <div className="flex my-6">
          <div className="flex items-center space-x-1">
            <strong className="text-gray-500 text-xs">Book: 
              <span className='text-sm font-bold text-primary'> {book.title}</span>
            </strong>
          </div>
        </div>

        <div className="my-2">
          <h4 className="font-semibold">Subjects:</h4>
          <ul className="ml-5 text-gray-600">
            {displayedSubjects.map((subject, index) => (
              <li key={index} className="flex items-start gap-2">
                {/* Replace default bullet point with custom icon */}
                <FiCheckCircle className="text-blue-500 mt-[2px]" />
                <span className="truncate max-w-[400px]">{subject}</span>
              </li>
            ))}
          </ul>
          {book.subjects.length > 3 && (
            <button
              onClick={() => setShowAllSubjects(!showAllSubjects)}
              className="text-blue-500 text-sm mt-2"
            >
              {showAllSubjects ? 'View Less' : 'View More'}
            </button>
          )}
        </div>

        <div className="flex items-center mb-4">
          <img
            src={image}
            alt={book.authors[0]?.name}
            className="w-[52px] h-[52px]"
          />
          <div className="ml-4">
            <h3 className="text-base font-semibold text-primary">{book.authors[0]?.name}</h3>
            <p className="text-sm font-thin text-[#7C88A8]">Birth Year: {book.authors[0]?.birth_year}</p>
            <p className="text-sm font-thin text-[#7C88A8]">ID: {book.id}</p>
          </div>
        </div>
        <hr className="border border-[#f1efef] mb-5" />
        <button
          onClick={() => toggleWishlist(book.id.toString())}
          className={`w-full px-8 py-4 border-2 rounded font-base font-semibold transition-colors duration-300 
          ${isWishlisted ? 'border-red-600 text-red-600' : 'border-[#d0d5e0] text-primary hover:bg-gray-100'}`}
        >
          {isWishlisted ? '❤️ Wishlisted' : '🤍 Add to Wishlist'}
        </button>
      </div>
    </div>
  );
};

export default BookCard;
