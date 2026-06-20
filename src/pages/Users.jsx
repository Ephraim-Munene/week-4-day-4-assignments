import { useState, useEffect } from 'react';
// Link is a basic routing link used for navigating between components
import { Link } from 'react-router-dom';

export default function Users() {
  // State hook to store the list of users we fetch from the web API
  const [users, setUsers] = useState([]);
  // State hook to track if the network request is still downloading data
  const [loading, setLoading] = useState(true);

  // useEffect triggers code immediately when this page component loads onto the browser screen
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json()) // Translate raw network data into clean JavaScript arrays
      .then((data) => {
        setUsers(data);       // Put that array into our state variable
        setLoading(false);    // Turn off the loading text because we have data now
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []); // The empty array [] means "run this code only once when page mounts"

  // If loading state is true, stop here and show a simple message
  if (loading) {
    return <div className="text-center font-bold mt-10">Loading users from API...</div>;
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 text-center">User Directory</h1>
      
      {/* Grid container layout for cards: 1 column on mobile, 3 columns on medium screens */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* We map (loop) through our array of users and render a dynamic card for each one */}
        {users.map((user) => (
          <Link 
            to={`/users/${user.id}`} 
            key={user.id} 
            className="block p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow border border-gray-200"
          >
            <h2 className="text-xl font-semibold text-blue-600">{user.name}</h2>
            <p className="text-gray-600 text-sm mt-1">{user.email}</p>
            <p className="text-gray-500 text-xs mt-3 italic">🏢 {user.company.name}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}