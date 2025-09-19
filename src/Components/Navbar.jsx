import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

function Navbar() {
  const [isAdmin, setIsAdmin] = useState(false);
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    setIsAdmin(user?.role === 'admin');
  }, [user]);

  const handleLogout = () => {
    logout();
    navigate('/auth');
  };

  return (
    <div className="container-fluid bg-light position-relative shadow">
      <nav className="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-0 px-lg-5">
        <Link to="/" className="navbar-brand font-weight-bold text-secondary" style={{ fontSize: '50px' }}>
          <i className="flaticon-043-teddy-bear"></i>
          <span className="text-primary">RuRaL-ReAcH</span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto py-0">
            <Link to="/" className="nav-item nav-link">Home</Link>
            <Link to="/about" className="nav-item nav-link">About</Link>
            <Link to="/resources" className="nav-item nav-link">Resources</Link>
            {isAdmin && <Link to="/upload" className="nav-item nav-link">Upload PDF</Link>}
            <Link to="/contact" className="nav-item nav-link">Contact</Link>
            <Link to="/team" className="nav-item nav-link">Team</Link>
            <Link to="/signup" className="nav-item nav-link">Signup</Link>
            
          </div>
        </div>
        <div className="text-center mb-8">
          <a
            href="https://zoom.us/j/your_meeting_id"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-info px-4 py-2 fw-bold"
          >
            <i className="fas fa-video me-6"></i> Join
          </a>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
