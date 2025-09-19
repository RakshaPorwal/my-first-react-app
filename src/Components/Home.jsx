import React, { useContext } from 'react';
import { Routes, Route, Navigate, Link } from 'react-router-dom';
import Navbar from './Components/Navbar.jsx';
import About from './Components/About.jsx';
import Contact from './Components/Contact.jsx';
import Team from './Components/Team.jsx';
import Footer from './Components/Footer.jsx';
import Resources from './Components/Resources.jsx';
import LiveAlert from './Components/LiveAlert.jsx';
import PDFUpload from './Components/PdfUploads.jsx';
import AuthPage from './Components/AuthPage.jsx';
import ProfilePage from './Components/ProfilePage.jsx';
import Signup from './Components/Signup.jsx';
import { AuthProvider, AuthContext } from './context/AuthContext.js';
import './App.css';

function Home() {
  return (
    <>
      {/* Hero Section */}
      <div className="container-fluid bg-primary text-white px-0 px-md-5 mb-5">
        <div className="row align-items-center px-3">
          <div className="col-lg-6 text-center text-lg-left">
            <h3 className="mb-4 mt-5">Beginner Learning Center</h3>
            <h1 className="display-3 font-weight-bold">Empowering Rural Education</h1>
            <p className="lead mt-3">
              Bridging the gap between dreams and opportunities with technology and care.
            </p>
            <Link to="/signup" className="btn btn-secondary mt-3 py-3 px-5 me-2">Get Started</Link>
            <Link to="/resources" className="btn btn-light mt-3 py-3 px-5">Explore Resources</Link>
          </div>
          <div className="col-lg-6 text-center">
            <img className="img-fluid mt-5" src="/img/girl.avif" alt="Learning Illustration" style={{ maxHeight: '400px' }} />
          </div>
        </div>
      </div>

      {/* About Preview */}
      <div className="container my-5">
        <div className="row align-items-center">
          <div className="col-md-6">
            <img src="/img/about-1.jpg" className="img-fluid rounded shadow" alt="About" />
          </div>
          <div className="col-md-6">
            <h2>Who We Are</h2>
            <p>
              RuRaL-ReAcH is a dedicated initiative focused on enhancing education in rural communities.
              Our mission is to make learning <strong>accessible, engaging, and empowering</strong>.
            </p>
            <Link to="/about" className="btn btn-primary mt-3">Learn More About Us</Link>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="container py-5 bg-light">
        <h2 className="text-center mb-4">What We Offer</h2>
        <div className="row text-center">
          <div className="col-md-4 mb-4">
            <h5>📚 Free Learning Materials</h5>
            <p>Self-paced curated resources for all levels.</p>
          </div>
          <div className="col-md-4 mb-4">
            <h5>🧠 Interactive Quizzes</h5>
            <p>Learn by testing your knowledge with instant feedback.</p>
          </div>
          <div className="col-md-4 mb-4">
            <h5>💬 Doubt Solving Support</h5>
            <p>One-click access to Live Zoom Sessions and help.</p>
          </div>
        </div>
      </div>

      {/* Team Preview */}
      <div className="container py-5">
        <div className="text-center">
          <h2>Meet the Team</h2>
          <p className="lead">Passionate developers, designers & educators working together.</p>
          <Link to="/team" className="btn btn-outline-primary mt-3">Meet Our Team</Link>
        </div>
      </div>

      {/* Testimonials */}
      <div className="container py-5 bg-light">
        <h2 className="text-center mb-4">What Students Say</h2>
        <div className="row">
          <div className="col-md-6 mb-3">
            <div className="p-4 border rounded shadow-sm">
              <p>"This platform changed the way I learn. It’s simple, interactive, and very helpful."</p>
              <strong>- Rakshaa, Student</strong>
            </div>
          </div>
          <div className="col-md-6 mb-3">
            <div className="p-4 border rounded shadow-sm">
              <p>"The quizzes and resources are so helpful for my college prep."</p>
              <strong>- Pavitra, Student</strong>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Preview */}
      <div className="container py-5 text-center">
        <h2>Have Questions?</h2>
        <p>We’re always here to help you learn better and faster.</p>
        <Link to="/contact" className="btn btn-info text-white mt-3 px-4 py-2">Contact Us</Link>
      </div>
    </>
  );
}

function AppContent() {
  const { user } = useContext(AuthContext);

  return (
    <>
      <Navbar />
      <LiveAlert />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/team" element={<Team />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/dashboard" element={<AuthPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/signup" element={user ? <Navigate to="/profile" /> : <Signup />} />
        <Route path="/upload" element={user?.role === 'admin' ? <PDFUpload /> : <Navigate to="/auth" />} />
      </Routes>

      <Footer />
    </>
  );
}

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;
