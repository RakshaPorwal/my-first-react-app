import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

const Signup = () => {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    profileImage: null,
  });

  useEffect(() => {
    // ✅ Redirect if user is already logged in
    if (user) {
      navigate("/profile");
    }
  }, [user, navigate]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setFormData((prev) => ({ ...prev, profileImage: reader.result }));
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newUser = {
      name: formData.name,
      email: formData.email,
      password: formData.password,
      profileImage: formData.profileImage || '',
    };

    localStorage.setItem("userProfile", JSON.stringify(newUser));
    setUser(newUser);
    navigate("/profile");
  };

  // ✅ Optional: prevent flicker of signup form if user is already logged in
  if (user) return null;

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

    <div>
      <h2>Create Account</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" onChange={handleChange} required />
        <input name="email" placeholder="Email" onChange={handleChange} required />
        <input name="password" type="password" placeholder="Password" onChange={handleChange} required />
        <input type="file" accept="image/*" onChange={handleImageUpload} />
        {formData.profileImage && (
          <img
            src={formData.profileImage}
            alt="Preview"
            width="100"
            height="100"
            style={{ objectFit: 'cover', borderRadius: '50%', marginTop: '10px' }}
          />
        )}
        <button type="submit">Signup</button>
      </form>
    </div>
    </>
  );
};

export default Signup;
