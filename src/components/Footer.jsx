import Icons from "./Icons";

const Footer = () => {
  return (
    <>
      <div className="flex flex-col ">
        <footer className="text-gray-400 py-6 mt-auto">
          <div className="container mx-auto text-center">
            <p className="">
              Designed & Created by{" "}
              <span className="text-white">Pratheek Gowda</span>
            </p>
            <div className="m-2">
              <Icons />
            </div>
            <p className="text-xs">
              Copyright © {new Date().getFullYear()}{" "}
              <span className="text-white">Pratheek Gowda </span>
              All Rights Reserved.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
