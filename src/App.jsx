import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import BookList from './pages/BookList';
import BookDetail from './pages/BookDetail';
import Subjects from './pages/Subjects';
import Navbar from './components/Navbar';
import Footer from './components/Footer'; // ফুটার ইমপোর্ট করা হলো

function App() {
  return (
    <Router>
      {/* পুরো অ্যাপকে একটি ফ্লেক্স কন্টেইনারে রাখা হলো */}
      <div className="min-h-screen flex flex-col">
        
        <Navbar />

        {/* মেইন সেকশন flex-grow ব্যবহার করবে যাতে এটি বাকি জায়গা দখল করে নেয় */}
        <main className="flex-grow">
          <Routes>
            {/* Bonus Requirement: Redirect "/" to "/books" */}
            <Route path="/" element={<Navigate to="/books" />} />
            <Route path="/books" element={<BookList />} />
            <Route path="/book/:id" element={<BookDetail />} />
            <Route path="/subjects" element={<Subjects />} />
          </Routes>
        </main>

        {/* ফুটার কল করা হলো */}
        <Footer />
        
      </div>
    </Router>
  );
}

export default App;