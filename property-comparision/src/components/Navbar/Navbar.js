'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import './Navbar.css';

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="navbar">
      <h1 className="logo">PropertyTool</h1>
      <ul className="nav-links">
        <li>
          <Link href="/" className={pathname === '/' ? 'active' : ''}>Home</Link>
        </li>
        <li>
          <Link href="/listings" className={pathname === '/listings' ? 'active' : ''}>Listings</Link>
        </li>
        <li>
          <Link href="/favorites" className={pathname === '/favorites' ? 'active' : ''}>Favorites</Link>
        </li>
        <li>
          <Link href="/compare" className={pathname === '/compare' ? 'active' : ''}>Compare</Link>
        </li>
      </ul>
    </nav>
  );
}
