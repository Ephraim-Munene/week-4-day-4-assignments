// Outlet is a special placeholder component from React Router
import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';
import Footer from './Footer';

export default function Layout() {
  return (
    // These Tailwind utility classes make our footer stay stuck to the bottom
    <div className="flex flex-col min-h-screen bg-gray-50 text-gray-900">
      {/* Navigation bar stays at the top of every page */}
      <NavBar />
      
      {/* Main content container */}
      <main className="flex-grow max-w-7xl w-full mx-auto px-4 py-8">
        {/* This component swaps dynamically based on what URL path we are on */}
        <Outlet />
      </main>
      
      {/* Footer stays at the bottom of every page */}
      <Footer />
    </div>
  );
}