export default function ViewLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white p-4">
        <nav>
          <ul className="space-y-2">
            <li>
              <a href="/feed" className="block p-2 hover:bg-gray-700 rounded">
                Feed
              </a>
            </li>
            <li>
              <a href="/map" className="block p-2 hover:bg-gray-700 rounded">
                Map
              </a>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-grow p-6 bg-gray-100">
        {children}
      </main>
    </div>
  );
}
