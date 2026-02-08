import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'; // সিএসএস ফাইলটি লিঙ্ক করুন

const Footer = () => {
  return (
    <footer className="footer-wrapper">
      <div className="footer-content">
        
        {/* উপরের ডিজাইন লাইন */}
        <div className="footer-line-gradient"></div>

        <div className="footer-main-grid">
          {/* ব্র্যান্ড অংশ */}
          <div className="footer-brand">
            <h2 className="brand-logo">📚 Lib<span>Manager</span></h2>
            <p className="brand-text">
              Discover a vast collection of books and manage your library with ease. Your knowledge journey starts here.
            </p>
          </div>

          {/* লিঙ্কস অংশ */}
          <div className="footer-nav">
            <h4 className="footer-title">Navigation</h4>
            <ul className="nav-links">
              <li><Link to="/books">All Books</Link></li>
              <li><Link to="/subjects">By Subjects</Link></li>
              <li><a href="#">New Arrivals</a></li>
            </ul>
          </div>

          {/* কন্টাক্ট এবং সোশ্যাল */}
          <div className="footer-contact">
            <h4 className="footer-title">Contact & Social</h4>
            <p className="city">"Dhaka, Bangladesh"</p>
            <div className="social-links-row">
              <a href="#" className="social-box github-btn">
                <i className="fab fa-github"></i>
              </a>
              <a href="#" className="social-box linkedin-btn">in</a>
            </div>
          </div>
        </div>

        {/* নিচের কপিরাইট অংশ */}
        <div className="footer-bottom-bar">
          <p>© 2026 Library Manager. All rights reserved.</p>
          <p className="credit">
            Crafted with <span className="sparkle">✨</span> by <strong>Shariful Islam</strong>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;