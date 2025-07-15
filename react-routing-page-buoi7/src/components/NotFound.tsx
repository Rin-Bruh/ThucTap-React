import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-100 to-slate-300">
      <h1 className="text-6xl md:text-8xl font-extrabold text-red-600 drop-shadow-lg animate-pulse mb-4">
        404
      </h1>
      <h2 className="text-2xl md:text-3xl font-semibold text-slate-800 mb-2">
        Page Not Found
      </h2>
      <p className="text-slate-600 mb-8 text-center max-w-md">
        Sorry, the page you are looking for does not exist or has been moved.
      </p>
      <Link
        to="/"
        className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition font-medium"
      >
        Go back home
      </Link>
    </div>
  );
}

export default NotFound;
