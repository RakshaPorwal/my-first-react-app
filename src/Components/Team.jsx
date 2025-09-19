import React from 'react';

function Team() {
  const teamMembers = [
    {
      name: "Jhalakkkkkk",
      role: "Frontend Developer",
      image: "/img/team-1.jpg",
      linkedin: "https://linkedin.com/in/jhalakkkkkk",
      github: "https://github.com/jhalakkkkkk"
    },
    {
      name: "Anushka",
      role: "UI Designer",
      image: "/img/team-2.jpg",
      linkedin: "https://linkedin.com/in/anushka",
      github: "https://github.com/anushka"
    },
    {
      name: "Prerna",
      role: "React Intern",
      image: "/img/team-3.jpg",
      linkedin: "https://linkedin.com/in/prerna",
      github: "https://github.com/prerna"
    }
  ];

  return (
    <>
      <div className="container-fluid bg-primary mb-5">
        <div className="d-flex flex-column align-items-center justify-content-center" style={{ minHeight: "400px" }}>
          <h3 className="display-3 font-weight-bold text-white">Our Team</h3>
          <div className="d-inline-flex text-white">
            <p className="m-0"><a className="text-white" href="/">Home</a></p>
            <p className="m-0 px-2">/</p>
            <p className="m-0">Our Team</p>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="container-fluid pt-5">
        <div className="container">
          <div className="text-center pb-4">
            <p className="section-title px-5"><span className="px-2">Meet Our Team</span></p>
            <h1 className="mb-4">Talented & Passionate</h1>
          </div>

          <div className="row justify-content-center">
           {teamMembers.map((member, index) => (
          <div className="col-lg-4 col-md-6 text-center mb-5" key={index}>
            <img
              src={member.image}
              className="rounded-circle shadow mb-3"
              width="140"
              height="140"
              alt={member.name}
            />
            <h4>{member.name}</h4>
            <p className="text-muted">{member.role}</p>
            <div>
            <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="me-3 text-decoration-none text-dark">
                <i className="fab fa-linkedin fa-lg"></i>
            </a>
            <a href={member.github} target="_blank" rel="noopener noreferrer" className="text-decoration-none text-dark">
                <i className="fab fa-github fa-lg"></i>
            </a>
            </div>

          </div>
        ))}
          </div>
        </div>
      </div>

      {/* Testimonial Section */}
      <div className="container-fluid py-5">
        <div className="container">
          <div className="text-center pb-4">
            <p className="section-title px-5"><span className="px-2">Testimonials</span></p>
            <h1 className="mb-4">What Our Students Say</h1>
          </div>
          <div className="row">
            {["Rakshaa", "Jagrati", "Pavitra", "Sakshi"].map((student, idx) => (
              <div key={idx} className="col-md-6 col-lg-3 mb-4">
                <div className="testimonial-item bg-light shadow-sm rounded p-4 h-100">
                  <h3 className="fas fa-quote-left text-primary mb-3"></h3>
                  <p>
                    {student === "Rakshaa" && "It's a great website. Very useful and user-friendly."}
                    {student === "Jagrati" && "It’s a fantastic website—very helpful and easy to use."}
                    {student === "Pavitra" && "This website is excellent—easy to navigate and full of useful content."}
                    {student === "Sakshi" && "This website is amazing—super helpful and simple to use."}
                  </p>
                  <div className="pt-3">
                    <h5>{student}</h5>
                    <i>Student</i>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Team;
