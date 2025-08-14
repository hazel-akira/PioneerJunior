import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col font-sans items-center justify-center bg-gradient-to-br from-blue-100 to-purple-200 p-6">
      <h1 className="text-6xl font-extrabold text-purple-700 mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Page Not Found</h2>
      <p className="text-lg text-gray-600 mb-8 text-center max-w-md">
        Oops! The page you are looking for does not exist or has been moved.<br />
        Let us help you get back on track.
      </p>
      <Link
        to="/"
        className="px-6 py-3 bg-purple-600 text-white rounded-lg shadow hover:bg-purple-700 transition-colors font-semibold text-lg"
      >
        Go Home
      </Link>
    </div>
  );
} 