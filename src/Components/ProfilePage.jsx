import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function ProfilePage() {
  const { user } = useContext(AuthContext);

  if (!user) return <h3 className="text-center">No user logged in.</h3>;

  return (
    <>
    <div className="container-fluid bg-primary mb-5">
        <div className="d-flex flex-column align-items-center justify-content-center" style={{ minHeight: "400px" }}>
          <h3 className="display-3 font-weight-bold text-white">Profile</h3>
          <div className="d-inline-flex text-white">
            <p className="m-0"><a className="text-white" href="/">Home</a></p>
            <p className="m-0 px-2">/</p>
            <p className="m-0">Profile</p>
          </div>
    </div>
      </div>
    <div className=" pt-6">
      {user.avatar && <img src={user.avatar} alt="profile" width="120" className="rounded-circle mb-3" />}
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
     </div>
     </>
  );
}

export default ProfilePage;
