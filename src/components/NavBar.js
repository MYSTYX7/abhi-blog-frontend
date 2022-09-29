import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div
      className="w-full border-b-8 border-red-600 text-center fixed top-0 bg-black 
    font-bold text-lg text-white"
    >
      <ul>
        <li className="inline-block pt-4 pb-4 hover:scale-125 hover:bg-red-600">
          <Link to="/" className="pl-6 pr-8">
            Home
          </Link>
        </li>
        <li className="inline-block pt-4 pb-4 hover:scale-125 hover:bg-red-600">
          <Link to="/about" className="pl-6 pr-8">
            About
          </Link>
        </li>
        <li className="inline-block pt-4 pb-4 hover:scale-125 hover:bg-red-600">
          <Link to="/articles-list" className="pl-6 pr-8">
            ArticlesList
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
