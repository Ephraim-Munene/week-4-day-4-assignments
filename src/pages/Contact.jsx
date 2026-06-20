import { useState } from 'react';

export default function Contact() {
  // Single state object to track text inputs across all individual fields
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'General Inquiry',
    message: ''
  });

  // State object to store field-specific error string notices
  const [errors, setErrors] = useState({});
  // State tracking boolean to verify if form sent successfully
  const [submitted, setSubmitted] = useState(false);

  // Master handler function fired every single time a user types into any text input box
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    // Keep old state values, but overwrite the single specific field name changed
    setFormData({ ...formData, [name]: value });
  };

  // Form submit handler logic
  const handleFormSubmit = (event) => {
    event.preventDefault(); // Stop standard browser page refresh action
    
    let localErrors = {};

    // Basic Validation Checklist rules
    if (!formData.name.trim()) localErrors.name = "Name field cannot be left blank.";
    if (!formData.email.trim()) {
      localErrors.email = "Email field is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      localErrors.email = "Please input a valid email address structure.";
    }
    if (formData.message.trim().length < 20) {
      localErrors.message = "Message contents must span at least 20 characters long.";
    }

    // Set errors state object
    setErrors(localErrors);

    // If local errors object contains no items, it means form is valid!
    if (Object.keys(localErrors).length === 0) {
      console.log("Successfully Sent Form Contents:", formData);
      setSubmitted(true);
      
      // Reset form variables to completely blank strings
      setFormData({ name: '', email: '', subject: 'General Inquiry', message: '' });
    }
  };

  return (
    // Responsive sizing layout configuration: full width on mobile phone screen, half width on large screens
    <div className="w-full md:w-1/2 mx-auto bg-white p-8 rounded-xl shadow-lg mt-6">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Get In Touch</h1>

      {/* Success Banner element conditional display */}
      {submitted && (
        <div className="mb-6 p-4 bg-green-100 text-green-800 rounded-lg border border-green-200">
          Thanks for your message! We'll get back to you soon.
        </div>
      )}

      <form onSubmit={handleFormSubmit} className="space-y-5">
        
        {/* Name Field Group */}
        <div>
          <label className="block text-sm font-medium mb-1 text-gray-700">Full Name</label>
          <input 
            type="text" 
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errors.name ? 'border-red-500 bg-red-50' : formData.name ? 'border-green-500' : 'border-gray-300'
            }`}
          />
          {errors.name && <p className="text-red-500 text-xs mt-1 font-semibold">{errors.name}</p>}
        </div>

        {/* Email Field Group */}
        <div>
          <label className="block text-sm font-medium mb-1 text-gray-700">Email Address</label>
          <input 
            type="email" 
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errors.email ? 'border-red-500 bg-red-50' : formData.email ? 'border-green-500' : 'border-gray-300'
            }`}
          />
          {errors.email && <p className="text-red-500 text-xs mt-1 font-semibold">{errors.email}</p>}
        </div>

        {/* Subject Dropdown Select Box */}
        <div>
          <label className="block text-sm font-medium mb-1 text-gray-700">Subject Inquiry</label>
          <select 
            name="subject"
            value={formData.subject}
            onChange={handleInputChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
          >
            <option value="General Inquiry">General Inquiry</option>
            <option value="Bug Report">Bug Report</option>
            <option value="Feature Request">Feature Request</option>
            <option value="Partnership">Partnership</option>
          </select>
        </div>

        {/* Message Text Area Box */}
        <div>
          <label className="block text-sm font-medium mb-1 text-gray-700">Message Box</label>
          <textarea 
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleInputChange}
            className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errors.message ? 'border-red-500 bg-red-50' : formData.message.length >= 20 ? 'border-green-500' : 'border-gray-300'
            }`}
          />
          {errors.message && <p className="text-red-500 text-xs mt-1 font-semibold">{errors.message}</p>}
        </div>

        {/* Form Submission Confirmation Button Action */}
        <button 
          type="submit" 
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg shadow transition-colors"
        >
          Send Message
        </button>

      </form>
    </div>
  );
}