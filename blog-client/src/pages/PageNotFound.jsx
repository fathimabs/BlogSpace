import { Link } from "react-router-dom";

 function PageNotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col justify-center items-center px-4 text-center">

      <h1 className="text-6xl md:text-8xl font-serif mb-4">
        404
      </h1>

      <h2 className="text-xl md:text-2xl mb-4">
        Page Not Found
      </h2>

      <p className="text-gray-600 max-w-md mb-8">
        The page you are looking for doesn’t exist.
      </p>

      <Link
        to="/"
        className="px-6 py-3 border border-gray-800 text-sm hover:bg-blue-800 hover:text-white transition"
      >
        Back to Home
      </Link>

    </div>
  );
}

export default PageNotFound