// NavLink is a smart version of standard HTML <a> links
import { NavLink } from 'react-router-dom';

export default function NavBar() {
  // This helper function styles a link based on whether the user is viewing that page
  const checkActiveLink = ({ isActive }) => 
    `px-3 py-2 rounded-md text-sm font-medium transition-all ${
      isActive ? 'bg-blue-600 text-white underline' : 'text-gray-300 hover:bg-gray-700 hover:text-white'
    }`;

  return (
    <nav className="bg-gray-800 text-white p-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="font-bold text-xl text-blue-400">My Assignment</div>
        
        <div className="flex space-x-4">
          {/* We pass our style function to the className attribute */}
          <NavLink to="/" className={checkActiveLink}>Home</NavLink>
          <NavLink to="/about" className={checkActiveLink}>About</NavLink>
          <NavLink to="/users" className={checkActiveLink}>Users</NavLink>
          <NavLink to="/contact" className={checkActiveLink}>Contact</NavLink>
        </div>
      </div>
    </nav>
  );
}