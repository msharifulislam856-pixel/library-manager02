import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import BookList from './pages/BookList';
import BookDetail from './pages/BookDetail';
import Subjects from './pages/Subjects';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Bonus Requirement: Redirect "/" to "/books" */}
        <Route path="/" element={<Navigate to="/books" />} />
        <Route path="/books" element={<BookList />} />
        <Route path="/book/:id" element={<BookDetail />} />
        <Route path="/subjects" element={<Subjects />} />
      </Routes>
    </Router>
  );
}
export default App;