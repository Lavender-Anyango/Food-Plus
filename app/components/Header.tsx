// src/components/Header.tsx
import Link from 'next/link';

const Header = () => {
  return (
    <header className="flex justify-between items-center py-4 px-6">
      <div className="text-2xl font-bold text-yellow-500">Food store</div>
      <nav>
        <ul className="flex space-x-6">
          <li><Link href="/" className="text-gray-800 hover:text-gray-600">HOME</Link></li>
          <li><Link href="/restaurant" className="text-gray-800 hover:text-gray-600">RESTURANT</Link></li>
          <li><Link href="/services" className="text-gray-800 hover:text-gray-600">SERVICES</Link></li>
          <li><Link href="/cart" className="text-gray-800 hover:text-gray-600">CART</Link></li>
        </ul>
      </nav>
      <button className="text-gray-800 hover:text-gray-600">Sign In</button>
    </header>
  );
};

export default Header;