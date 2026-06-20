import { useState, useEffect } from 'react';
// useParams reads values directly out of our URL string
import { useParams, Link } from 'react-router-dom';

export default function UserDetail() {
  // Destructure (pull out) the 'id' variable we defined in our router configuration
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Append the specific ID variable directly onto the end of our API url string
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("User not found");
        }
        return response.json();
      })
      .then((data) => {
        setUser(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false); // Stop loading even if it fails so we don't freeze the UI
      });
  }, [id]); // Re-run if the URL dynamic id changes

  if (loading) return <div className="text-center mt-10">Fetching profile details...</div>;
  if (!user) return <div className="text-center text-red-500 mt-10 font-bold">⚠️ Profile ID Not Found!</div>;

  return (
    <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-lg border border-gray-100">
      <Link to="/users" className="text-blue-500 hover:underline text-sm font-medium">← Back to Directory</Link>
      
      <h1 className="text-3xl font-bold mt-4 text-gray-800">{user.name}</h1>
      <p className="text-gray-400 font-mono text-sm">@{user.username}</p>

      <hr className="my-6 border-gray-200" />

      <div className="space-y-3 text-gray-700">
        <p><strong>📧 Email:</strong> {user.email}</p>
        <p><strong>📞 Phone:</strong> {user.phone}</p>
        <p><strong>🌐 Website:</strong> {user.website}</p>
        <p><strong>🏢 Company:</strong> {user.company.name}</p>
        <p><strong>📍 Location:</strong> {user.address.street}, {user.address.city}</p>
      </div>
    </div>
  );
}