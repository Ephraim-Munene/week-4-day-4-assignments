import { useNavigate } from 'react-router-dom';

export default function NotFound() {
  // useNavigate provides an active method hook allowing programmatic redirection commands
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center p-4">
      <h1 className="text-6xl font-black text-gray-400 mb-2">404</h1>
      <h2 className="text-xl font-bold mb-4">Whoops! Page Not Found</h2>
      <p className="text-gray-500 max-w-sm mb-6">The link you followed might be broken, or the page may have been removed.</p>
      
      {/* Clicking this button automatically kicks the user back onto the default homepage route */}
      <button 
        onClick={() => navigate('/')} 
        className="bg-blue-600 text-white font-medium px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-200 shadow"
      >
        Go Home
      </button>
    </div>
  );
}