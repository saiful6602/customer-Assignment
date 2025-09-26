import React from "react";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm md:px-6 ">
        <div className="flex-1 ">
          <a className="btn btn-ghost md:text-xl">CS — Ticket System</a>
        </div>
        <div className="gap-6 items-center hidden md:flex  ">
          <button className="cursor-pointer">Home</button>
          <button className="cursor-pointer">FAQ</button>
          <button className="cursor-pointer">Changelog</button>
          <button className="cursor-pointer">Blog</button>
          <button className="cursor-pointer">Download</button>
          <button className="cursor-pointer">Contact</button>
        </div>
        <div>
          <button className="btn bg-gradient-to-r from-purple-600 to-indigo-800 text-white font-semibold  ml-4">
            + New Ticket
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
