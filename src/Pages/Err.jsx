import { Link } from "react-router-dom";

const Err = () => {
  return (
    <div className="flex items-center justify-center min-h-screen  text-gray-100">
      <div className="text-center p-6 max-w-lg">
        <h1 className="text-6xl font-bold ">404</h1>
        <p className="text-xl mt-4">
          Oops! The page you are looking for is under development.
        </p>
        <Link
          to="/"
          className="inline-block mt-6 px-6 py-3 text-lg font-semibold text-gray-500  rounded-md transition-colors"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default Err;
