import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar">
    <Link to="/books">Library Manager</Link>
    <div style={{color: 'white', fontWeight: 'bold'}}></div>
  </nav>
);

export default Navbar;