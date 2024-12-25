import Icons from "./Icons";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  return (
    <>
      <header className="bg-white/0 text-white py-4 backdrop-blur-md fixed w-full z-50">
        <div className="container mx-auto flex justify-between items-center px-8">
          {/* Always display HGPG */}
          <span className="font-bold text-xl">
            <NavLink
              to="/"
              className="hover:text-gray-400 chakra tracking-widest"
            >
              HGPG
            </NavLink>
          </span>

          {/* Hamburger Menu for Mobile */}
          <div
            className={`flex lg:hidden items-center ${
              navOpen ? "h-screen" : ""
            }`}
            onClick={toggleNav}
          >
            <svg
              className="h-6 w-6 text-white cursor-pointer transition-colors duration-300 hover:text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={navOpen ? "" : "M4 6h16M4 12h12M4 18h8"}
              />
            </svg>
          </div>

          {/* Navigation Links */}
          <div
            className={`lg:flex flex-col lg:flex-row items-center lg:space-x-8 ${
              navOpen ? "flex" : "hidden"
            } space-y-4 lg:space-y-0 absolute top-0 left-0 w-full h-screen bg-black bg-opacity-50 lg:bg-transparent lg:relative lg:h-auto lg:w-auto`}
          >
            <div className="lg:hidden flex justify-end w-full px-4 py-4">
              <svg
                className="h-6 w-6 text-white cursor-pointer transition-colors duration-300 hover:text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                onClick={toggleNav}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
            <nav className="flex flex-col lg:flex-row space-y-7 lg:space-y-0 lg:space-x-6 flex-1 text-2xl md:text-xl">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `${
                    isActive ? "text-gray-400" : ""
                  } hover:text-gray-400 text-center`
                }
                onClick={toggleNav}
              >
                Home
              </NavLink>
              <NavLink
                to="/skills"
                className={({ isActive }) =>
                  `${
                    isActive ? "text-gray-400" : ""
                  } hover:text-gray-400 text-center`
                }
                onClick={toggleNav}
              >
                Skills
              </NavLink>
              <NavLink
                to="/projects"
                className={({ isActive }) =>
                  `${
                    isActive ? "text-gray-400" : ""
                  } hover:text-gray-400 text-center`
                }
                onClick={toggleNav}
              >
                Projects
              </NavLink>
              <NavLink
                to="/blogs"
                className={({ isActive }) =>
                  `${
                    isActive ? "text-gray-400" : ""
                  } hover:text-gray-400 text-center`
                }
                onClick={toggleNav}
              >
                Blogs
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `${
                    isActive ? "text-gray-400" : ""
                  } hover:text-gray-400 text-center`
                }
                onClick={toggleNav}
              >
                Contact
              </NavLink>

              <div
                className="flex lg:hidden items-center justify-center w-full space-x-6 mb-4"
                onClick={toggleNav}
              >
                <Icons />
              </div>
            </nav>
          </div>

          {/* Social Icons for Larger Screens */}
          <div className="hidden lg:flex lg:flex-row space-x-6 items-center justify-center">
            <Icons />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
