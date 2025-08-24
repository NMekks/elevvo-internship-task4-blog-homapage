import React from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="page-header flex justify-between items-center p-4 text-white bg-slate-800">
        <h1 className="title text-3xl ms-5">
          My Coffee Mug
        </h1>
        <button className="btn-add-post rounded-md bg-slate-400 py-2 px-4 me-5">
          Add Post +
        </button>
      </div>
        
      
    </div>
  );
};

export default Navbar;
