import { useNavigate } from 'react-router-dom';

const BookCard = ({ book }) => {
  const navigate = useNavigate();
  
  // extracting the unique ID from the key (e.g., /works/OL123W -> OL123W)
  const bookId = book.key ? book.key.split('/').pop() : '';
  const coverId = book.cover_i || book.cover_id;

  return (
    <div className="book-card-premium">
      <div className="card-image-wrapper">
        <img 
          src={coverId 
            ? `https://covers.openlibrary.org/b/id/${coverId}-L.jpg` 
            : 'https://via.placeholder.com/300x450?text=No+Cover+Found'} 
          alt={book.title || "Book Cover"} 
        />
        <div className="card-overlay">
          <span className="year-badge">
            {book.first_publish_year ? `Year: ${book.first_publish_year}` : 'N/A'}
          </span>
        </div>
      </div>
      
      <div className="card-content">
        {/* Title in English */}
        <h3 title={book.title}>{book.title || "Untitled Book"}</h3>
        
        {/* Author in English */}
        <p className="author-text">
          <span>Author:</span> {book.author_name ? book.author_name[0] : 'Unknown Author'}
        </p>
        
        {/* Details Button in English */}
        <button className="premium-btn" onClick={() => navigate(`/book/${bookId}`)}>
          View Details
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default BookCard;