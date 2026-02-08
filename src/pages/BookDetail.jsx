import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const BookDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`https://openlibrary.org/works/${id}.json`)
      .then(res => res.json())
      .then(data => {
        setBook(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [id]);

  if (loading) return (
    <div className="container" style={{textAlign: 'center', padding: '100px'}}>
      <div className="loader">Loading Masterpiece...</div>
    </div>
  );

  if (!book) return <div className="container"><h2>Book not found!</h2></div>;

  return (
    <div className="container">
      {/* Back Button */}
      <button className="back-btn" onClick={() => navigate(-1)}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
        Back to Results
      </button>
      
      <div className="detail-card">
        <div className="detail-image">
          <img 
            src={book.covers ? `https://covers.openlibrary.org/b/id/${book.covers[0]}-L.jpg` : 'https://via.placeholder.com/400x600?text=No+Cover+Available'} 
            alt={book.title} 
          />
        </div>

        <div className="detail-info">
          <h1 className="detail-title">{book.title}</h1>
          
          <div className="detail-meta">
            <span className="meta-item"><strong>First Published:</strong> {book.first_publish_date || 'N/A'}</span>
          </div>

          <div className="detail-description">
            <h3>Description</h3>
            <p>
              {typeof book.description === 'string' ? book.description : book.description?.value || "This book is a unique addition to our library. Detailed description coming soon."}
            </p>
          </div>

          {book.subjects && (
            <div className="detail-tags">
              <h3>Subjects & Genres</h3>
              <div className="tag-container">
                {book.subjects.slice(0, 8).map((subject, index) => (
                  <span key={index} className="subject-tag">{subject}</span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookDetail;