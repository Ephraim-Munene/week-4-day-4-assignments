import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="text-center py-12 max-w-3xl mx-auto">
      {/* Main headline banner styled with large, bold text */}
      <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
        Welcome to My React Router Day 4 Assignment!
      </h1>
      
      <p className="text-lg text-gray-600 mb-8">
        This is a multi-page single-page application (SPA) built using React, React Router v6, and Tailwind CSS. Explore the directory or get in touch!
      </p>

      {/* Navigation buttons using Link instead of standard anchor tags */}
      <div className="flex justify-center gap-4">
        <Link 
          to="/users" 
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg shadow transition-colors"
        >
          View User Directory
        </Link>
        <Link 
          to="/contact" 
          className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-3 px-6 rounded-lg transition-colors"
        >
          Contact Me
        </Link>
      </div>
    </div>
  );
}