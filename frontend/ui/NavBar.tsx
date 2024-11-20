import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <span className="font-bold">River</span>
        </Link>
        {/* Navigation Links */}
        <div className="space-x-4">
          <Link href="/">
            <span className="hover:text-gray-400">Home</span>
          </Link>
          <Link href="/login">
            <span className="hover:text-gray-400">Login</span>
          </Link>
          <Link href="/sign-up">
            <span className="hover:text-gray-400">Sign Up</span>
          </Link>
          <Link href="/test">
            <span className="hover:text-gray-400">Test</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
