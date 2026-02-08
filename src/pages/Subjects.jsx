import { useState } from 'react';
import BookCard from '../components/BookCard';

const Subjects = () => {
  const [books, setBooks] = useState([]);
  const [active, setActive] = useState('');
  const list = ['fiction', 'science', 'history', 'biography', 'fantasy', 'mystery'];

  const loadSubject = (s) => {
    setActive(s);
    fetch(`https://openlibrary.org/subjects/${s}.json?limit=12`)
      .then(res => res.json())
      .then(data => setBooks(data.works || []));
  };

  return (
    <div className="container">
      <h1 style={{marginBottom: '20px'}}>Browse by Subject</h1>
      <div className="subject-chips">
        {list.map(s => (
          <div key={s} className={`chip ${active === s ? 'active' : ''}`} onClick={() => loadSubject(s)}>
            {s.toUpperCase()}
          </div>
        ))}
      </div>
      <div className="book-grid">
        {books.map((book, i) => <BookCard key={i} book={book} />)}
      </div>
    </div>
  );
};
export default Subjects;