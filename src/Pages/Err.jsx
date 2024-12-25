import { Link } from "react-router-dom";

const Err = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black px-4 sm:px-6">
      <div className="relative text-center w-full max-w-3xl mx-auto">
        {/* Decorative grid background */}
        <div className="absolute inset-0 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4 opacity-10">
          {[...Array(16)].map((_, i) => (
            <div
              key={i}
              className="h-16 sm:h-20 border border-gray-700 rounded-lg"
            ></div>
          ))}
        </div>

        {/* Main content */}
        <div className="relative z-10 space-y-6 sm:space-y-8 md:space-y-10 py-8 sm:py-12">
          <div className="space-y-4 sm:space-y-6">
            {/* 404 Text */}
            <h1 className="text-[100px] sm:text-[140px] md:text-[180px] font-black text-white leading-none tracking-tighter">
              404
            </h1>

            {/* Error Message */}
            <div className="space-y-3 sm:space-y-4">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
                Page Not Found
              </h2>
              <p className="text-base sm:text-lg text-gray-400 max-w-md mx-auto px-4">
                The page you&apos;re looking for doesn&apos;t exist or has been
                moved.
              </p>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4 sm:px-0">
            <Link
              to="/"
              className="group flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 w-full sm:w-auto 
                border-2 border-white text-white font-semibold rounded-lg text-sm sm:text-base
                hover:bg-white hover:text-black transition-all duration-300"
            >
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 transform group-hover:-translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              Back to Home
            </Link>

            <button
              onClick={() => window.history.back()}
              className="px-5 sm:px-6 py-2.5 sm:py-3 w-full sm:w-auto rounded-lg text-sm sm:text-base
                border-2 border-gray-800 text-gray-400 font-semibold
                hover:border-gray-600 hover:text-white transition-all duration-300"
            >
              Previous Page
            </button>
          </div>
        </div>

        {/* Decorative corner elements */}
        <div className="absolute top-0 left-0 w-16 sm:w-20 h-16 sm:h-20 border-l-2 border-t-2 border-white opacity-20"></div>
        <div className="absolute bottom-0 right-0 w-16 sm:w-20 h-16 sm:h-20 border-r-2 border-b-2 border-white opacity-20"></div>
      </div>
    </div>
  );
};

export default Err;
