import React from 'react';
import {useState } from 'react';
function Footer() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    const form = e.target;
    const data = new FormData(form);

    const response = await fetch("https://formspree.io/f/xrbkngno", {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    });

    if (response.ok) {
      setStatus("Thanks for subscribing!");
      form.reset();
    } else {
      setStatus("Oops! Something went wrong.");
    }
  };
  return (
    
    <footer className="bg-dark text-white text-center py-1 mt-5">
      <div className="container-fluid bg-secondary text-white py-1 px-sm-3 px-md-4">
        <div className="row pt-3">
          {/* Logo & Description */}
          <div className="col-lg-3 col-md-6 mb-5">
            <a href="/" className="navbar-brand font-weight-bold text-primary m-0 mb-4 p-0" style={{ fontSize: '40px', lineHeight: '40px' }}>
              <i className="flaticon-043-teddy-bear"></i>
              <span className="text-white">RuRaL-ReAcH</span>
            </a>
            <p>
              “It’s a fantastic educational platform—easy to use, full of helpful resources, and designed to make learning engaging and accessible for everyone."
            </p>
            <div className="d-flex justify-content-start mt-4 ">
              <a className="btn btn-outline-primary rounded-circle text-center me-4 px-0" style={{ width: '38px', height: '38px' }} href="https://twitter.com"><i className="fab fa-twitter"></i></a>
              <a className="btn btn-outline-primary rounded-circle text-center me-6 px-0" style={{ width: '38px', height: '38px' }} href="https://facebook.com"><i className="fab fa-facebook-f"></i></a>
              <a className="btn btn-outline-primary rounded-circle text-center me-8 px-0" style={{ width: '38px', height: '38px' }} href="https://linkedin.com"><i className="fab fa-linkedin-in"></i></a>
              <a className="btn btn-outline-primary rounded-circle text-center px-0" style={{ width: '38px', height: '38px' }} href="https://instagram.com"><i className="fab fa-instagram"></i></a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="col-lg-3 col-md-8 mb-">
            <h3 className="text-primary mb-4">Get In Touch</h3>
            <div className="d-flex mb-2">
              <i className="fa fa-map-marker-alt text-primary me-2"></i>
              <div>
                <h5 className="text-white">Address</h5>
                <p>123 Street, Ram Tekri, Mandsaur</p>
              </div>
            </div>
            <div className="d-flex mb-2">
              <i className="fa fa-envelope text-primary me-2"></i>
              <div>
                <h5 className="text-white">Email</h5>
                <p>info@example.com</p>
              </div>
            </div>
            <div className="d-flex">
              <i className="fa fa-phone-alt text-primary me-3"></i>
              <div>
                <h5 className="text-white">Phone</h5>
                <p>+91 3452367890</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-lg-3 col-md-6 mb-5">
            <h3 className="text-primary mb-4">Quick Links</h3>
            <div className="d-flex flex-column">
              <a className="text-white mb-2" href="/"><i className="fa fa-angle-right me-2"></i>Home</a>
              <a className="text-white mb-2" href="/about"><i className="fa fa-angle-right me-2"></i>About Us</a>
              <a className="text-white mb-2" href="/Resources"><i className="fa fa-angle-right me-2"></i>Resources</a>
              <a className="text-white mb-2" href="/team"><i className="fa fa-angle-right me-2"></i>Our Team</a>
              <a className="text-white" href="/contact"><i className="fa fa-angle-right me-2"></i>Contact Us</a>
            </div>
          </div>

          {/* Newsletter */}
          <div className="col-lg-3 col-md-6 mb-5">
        <h3 className="text-primary mb-4">Newsletter</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group mb-3">
            <input
              type="text"
              name="name"
              className="form-control border-0 py-3"
              placeholder="Your Name"
              required
            />
          </div>
          <div className="form-group mb-3">
            <input
              type="email"
              name="email"
              className="form-control border-0 py-3"
              placeholder="Your Email"
              required
            />
          </div>
          <button
            className="btn btn-primary btn-block border-0 py-3"
            type="submit"
          >
            Submit Now
          </button>
        </form>
        {status && <p className="mt-2">{status}</p>}
      </div>

        </div>

        {/* Copyright */}
        <div className="text-center pt-4 mt-4 border-top" style={{ borderColor: 'rgba(23, 162, 184, 0.2)' }}>
          <p className="m-0 text-white">
            &copy; <a className="text-primary fw-bold" href="#">RuRaL-ReAcH</a>. All Rights Reserved. Designed by <a className="text-primary fw-bold" href="#">Code Crafters</a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
