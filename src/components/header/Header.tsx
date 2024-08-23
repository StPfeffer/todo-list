import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 p-4 text-white">
      <nav className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">My Company</h1>
        <div className="space-x-4">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <Link href="/about" className="hover:underline">
            About
          </Link>
          <Link href="/todo" className="hover:underline">
            ToDo
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
