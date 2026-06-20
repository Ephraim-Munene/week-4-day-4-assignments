// We must import these specific tools from the react-router-dom library to handle pages
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Here we import our layout (Navbar/Footer) and all individual page components
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Users from './pages/Users';
import UserDetail from './pages/UserDetail';
import NotFound from './pages/NotFound';

function App() {
  return (
    // 1. BrowserRouter activates routing capabilities for our entire application
    <BrowserRouter>
      {/* 2. Routes is a container that looks through all the routes inside it */}
      <Routes>
        
        {/* 3. This is our master layout route. It wraps around our other pages */}
        <Route path="/" element={<Layout />}>
          {/* index means this is the default page loaded when at the root "/" URL */}
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="users" element={<Users />} />
          {/* The :id syntax means this part of the URL is a flexible, dynamic variable */}
          <Route path="users/:id" element={<UserDetail />} />
          <Route path="contact" element={<Contact />} />
        </Route>

        {/* 4. The "*" is a wildcard. If the URL doesn't match anything above, show 404 */}
        <Route path="*" element={<NotFound />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;