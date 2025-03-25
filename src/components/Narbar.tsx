import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="p-4 bg-gray-100 shadow-md mb-4 flex gap-4">
      <Link to="/" className="text-blue-600 hover:underline">Home</Link>
      <Link to="/query" className="text-blue-600 hover:underline">React Query</Link>
    </nav>
  );
}