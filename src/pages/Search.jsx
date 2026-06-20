// useSearchParams reads and sets extra query properties added onto the end of URLs
import { useSearchParams } from 'react-router-dom';

export default function Search() {
  // searchParams acts like a state variable, setSearchParams updates the URL string
  const [searchParams, setSearchParams] = useSearchParams();
  
  // Extract the specific 'q' parameter out of the URL path string (default to empty string if missing)
  const searchQuery = searchParams.get('q') || '';

  // Hardcoded mock data list to search through
  const sampleItems = [
    'React Navigation',
    'React Hooks',
    'Tailwind Utility Classes',
    'Vite Build Tools',
    'Object-Oriented Programming',
    'Dynamic URL Routing',
    'State Architecture'
  ];

  // Run a filter loop to match string patterns between search query input and mock items
  const filteredItems = sampleItems.filter((item) =>
    item.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Triggered every single time the user types inside the search text input box
  const handleSearchChange = (event) => {
    const value = event.target.value;
    if (value) {
      setSearchParams({ q: value }); // Updates URL to: /search?q=your-text
    } else {
      setSearchParams({});            // Clear query parameters entirely if input is blank
    }
  };

  return (
    <div className="max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-gray-900">Search Framework</h1>
      
      {/* Search Input Field */}
      <div className="mb-6">
        <input 
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Type to search modules (e.g., react)..."
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Render matching filtered string results block */}
      <div className="bg-white rounded-lg shadow p-4 border border-gray-100">
        <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Results ({filteredItems.length})</h2>
        
        {filteredItems.length > 0 ? (
          <ul className="divide-y divide-gray-100">
            {filteredItems.map((item, index) => (
              <li key={index} className="py-3 text-gray-800 font-medium">
                ✨ {item}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-400 italic text-sm py-4">No matching items found. Try another term!</p>
        )}
      </div>
    </div>
  );
}