import { useState } from "react";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  return (
    <>
      <header className="bg-white/0 text-white py-4 backdrop-blur-md fixed w-full z-50">
        <div className="container mx-auto flex justify-between items-center px-4">
          {!navOpen && (
            <span className="font-bold text-xl">
              <a href="/" className="hover:text-gray-400">
                Pratheek Gowda
              </a>
            </span>
          )}
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
            <nav className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-6 items-center justify-center flex-1">
              <a href="/" className="hover:text-gray-400 text-center">
                Home
              </a>
              <a href="#about" className="hover:text-gray-400 text-center">
                About
              </a>
              <a href="#skills" className="hover:text-gray-400 text-center">
                Skills
              </a>
              <a href="#projects" className="hover:text-gray-400 text-center">
                Projects
              </a>
              <a href="#blogs" className="hover:text-gray-400 text-center">
                Blogs
              </a>
              <a href="#contact" className="hover:text-gray-400 text-center">
                Contact
              </a>
              <a
                href="#resume"
                className="border border-[#2e99cd] text-[#2e99cd] px-4 py-2 rounded hover:bg-[#2e99cd] hover:text-white"
              >
                Resume
              </a>
              <div className="flex lg:hidden items-center justify-center w-full space-x-6  mb-4">
                <a
                  href="https://www.linkedin.com/in/pratheek-gowda/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-400 text-xl"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://www.instagram.com/pratheek._.gowda_/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-400 text-xl"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://github.com/gowdapratheek"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-400 text-xl"
                >
                  <FaGithub />
                </a>
              </div>
            </nav>
          </div>
          <div className="hidden lg:flex lg:flex-row space-x-6 items-center justify-center">
            <a
              href="https://www.linkedin.com/in/pratheek-gowda/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400 text-xl"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.instagram.com/pratheek._.gowda_/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400 text-xl"
            >
              <FaInstagram />
            </a>
            <a
              href="https://github.com/gowdapratheek"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400 text-xl"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
