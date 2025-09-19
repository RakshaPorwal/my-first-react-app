import React from 'react';

function About() {
  return (
    <>
      {/* Header Section */}
      <div className="container-fluid bg-primary mb-5">
        <div className="d-flex flex-column align-items-center justify-content-center" style={{ minHeight: '400px' }}>
          <h3 className="display-3 font-weight-bold text-white">About Us</h3>
          <div className="d-inline-flex text-white">
            <p className="m-0"><a className="text-white" href="/">Home</a></p>
            <p className="m-0 px-2">/</p>
            <p className="m-0">About Us</p>
          </div>
        </div>
      </div>

      {/* About Content */}
      <div className="container-fluid py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <img className="img-fluid rounded mb-5 mb-lg-0" src="/img/about-1.jpg" alt="About" />
            </div>
            <div className="col-lg-7">
              <p className="section-title pr-5"><span className="pr-2">Learn About Us</span></p>
              <h1 className="mb-4">Best Way To Learn Something New!</h1>
              <p>
                “It’s a fantastic educational platform—easy to use, full of helpful resources, and designed to make learning engaging and accessible for everyone. Whether you’re looking to dive deep into a topic or get quick answers, it’s a great place to learn at your own pace."
              </p>
              <div className="row pt-2 pb-4">
                <div className="col-6 col-md-4">
                  <img className="img-fluid rounded" src="/img/about-2.jpg" alt="About Us" />
                </div>
                <div className="col-6 col-md-8">
                  <ul className="list-inline m-0">
                    <li className="py-2 border-top border-bottom"><i className="fa fa-check text-primary mr-3"></i>Easy To Use</li>
                    <li className="py-2 border-bottom"><i className="fa fa-check text-primary mr-3"></i>User Friendly</li>
                    <li className="py-2 border-bottom"><i className="fa fa-check text-primary mr-3"></i>Doubt Solving Facilities</li>
                  </ul>
                </div>
              </div>
              <h4>Let's Give It a Try!</h4>
              <a href="/" className="btn btn-primary mt-2 py-2 px-4">Test Yourself</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
