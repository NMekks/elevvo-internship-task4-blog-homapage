import React from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="page-header flex justify-between items-center px-4 py-2 bg-orange-400">
        <h1 className="title text-3xl ms-5 text-white">
          My Coffee Mug
        </h1>
        <button className="btn-add-post rounded-md bg-amber-900 text-white py-2 px-4 me-5">
          Add Post +
        </button>
      </div>
        
      
    </div>
  );
};

export default Navbar;
