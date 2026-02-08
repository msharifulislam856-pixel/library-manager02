import { useState } from 'react';
import BookCard from '../components/BookCard';

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [subject, setSubject] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchBooks = async () => {
    if (!title && !author && !subject) return;
    setLoading(true);
    let query = `https://openlibrary.org/search.json?limit=10`;
    if (title) query += `&title=${encodeURIComponent(title)}`;
    if (author) query += `&author=${encodeURIComponent(author)}`;
    if (subject) query += `&subject=${encodeURIComponent(subject)}`;

    try {
      const res = await fetch(query);
      const data = await res.json();
      setBooks(data.docs || []);
    } catch (err) { console.error(err); }
    finally { setLoading(false); }
  };

  const clear = () => { setTitle(''); setAuthor(''); setSubject(''); setBooks([]); };

  return (
    <div className="container">
      <div className="search-section">
        <input placeholder="Search by Title" value={title} onChange={e => setTitle(e.target.value)} />
        <input placeholder="Search by Author" value={author} onChange={e => setAuthor(e.target.value)} />
        <select value={subject} onChange={e => setSubject(e.target.value)}>
          <option value="">Select Subject</option>
          <option value="fiction">Fiction</option>
          <option value="science">Science</option>
          <option value="history">History</option>
          <option value="mystery">Mystery</option>
        </select>
        <button className="btn-search" onClick={fetchBooks}>Search</button>
        <button className="btn-clear" onClick={clear}>Clear</button>
      </div>

      <div className="book-grid">
        {loading ? <h2>Loading...</h2> : books.map((book, i) => <BookCard key={i} book={book} />)}
      </div>
    </div>
  );
};
export default BookList;