import React from "react";

const Navbar = () => {
  return (
  <>
  <div className="bg-amber-500">
    <h1>NAVBAR</h1>
    <div>
      <ul className="list-none flex justify-end px-3">
        <li>Home</li>
        <li>Login</li>
        <li>Register</li>
      </ul>
    </div>
  </div>
  </>
  );
};

export default Navbar;
