import { FaLinkedinIn, FaInstagram, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoMailOpenOutline } from "react-icons/io5";

function Icons() {
  return (
    <div className="flex justify-center space-x-4 items-center text-3xl md:text-2xl">
      <a target="_blank" href="https://www.linkedin.com/in/pratheek-gowda/">
        <FaLinkedinIn />
      </a>
      <a target="_blank" href="https://www.instagram.com/pratheek._.gowda_/">
        <FaInstagram />
      </a>
      <a target="_blank" href="https://x.com/GowdaPratheek_">
        <FaXTwitter />
      </a>
      <a target="_blank" href="https://github.com/gowdapratheek">
        <FaGithub />
      </a>

      <a href="mailto:gowdapratheek91@gmail.com?subject=From website&body=hi">
        <IoMailOpenOutline />
      </a>
    </div>
  );
}

export default Icons;
