export default function Navbar() {
  return (
    <nav className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between">
        <h1 className="text-xl font-bold text-indigo-600">
          VideoEditor
        </h1>
        <div className="space-x-4">
          <a href="/login" className="text-gray-600 hover:text-black">
            Login
          </a>
          <a
            href="/register"
            className="bg-indigo-600 text-white px-4 py-2 rounded"
          >
            Get Started
          </a>
        </div>
      </div>
    </nav>
  );
}
