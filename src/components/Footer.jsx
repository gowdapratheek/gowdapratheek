import { FaLinkedinIn, FaInstagram, FaGithub } from "react-icons/fa";

const day = new Date();


const Footer = () => {
  return (
    <>
      <footer className="text-gray-400 py-6 ">
        <div className="container mx-auto text-center flex-grow">
          <p className="mb-4">
            Designed & Created by{" "}
            <span className="text-white">Pratheek Gowda</span>
          </p>
          <div className="flex justify-center space-x-4 mb-4">
            <a href="https://www.linkedin.com/in/your-profile">
              <FaLinkedinIn />
            </a>
            <a href="https://www.instagram.com/your-profile">
              <FaInstagram />
            </a>
            <a href="https://github.com/your-profile">
              <FaGithub />
            </a>
          </div>
          <p className="text-xs">
            Copyright © {day.getFullYear()}{" "}
            <span className="text-white">Pratheek Gowda </span>
            All Rights Reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
