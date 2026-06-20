export default function About() {
  return (
    <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-md border border-gray-100">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">About Me</h1>
      
      <p className="text-gray-700 leading-relaxed mb-4">
        Hello! I am a Computer Science student focused on modern software development. I enjoy learning programmatic architecture and logic through tools like C++, Python, and Java.
      </p>

      <p className="text-gray-700 leading-relaxed mb-6">
        Right now, I am expanding my skills in frontend development by mastering React, state tracking, semantic layout design, and responsive utilities using Tailwind CSS.
      </p>

      {/* A quick list showing off current tech stack focuses */}
      <div className="bg-gray-50 p-4 rounded-lg">
        <h2 className="font-semibold text-gray-800 mb-2">Current Learning Stack:</h2>
        <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
          <li>Core Programming (OOP logic)</li>
          <li>Web Foundations (HTML, CSS, JavaScript)</li>
          <li>Modern Frontend Frameworks (React)</li>
          <li>Version Control (Git & GitHub)</li>
        </ul>
      </div>
    </div>
  );
}