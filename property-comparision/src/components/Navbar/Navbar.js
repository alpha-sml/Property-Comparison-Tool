'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useAuth } from '../../context/AuthContext';
import './Navbar.css';

export default function Navbar() {
  const pathname = usePathname();
  const { user, logout } = useAuth();

  return (
    <nav className="navbar">
      <h1 className="logo"><Link href="/">PropertyTool</Link></h1>
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

        {user ? (
          <>
            <li className="user-email">{user.email || 'Guest'}</li>
            <li>
              <button className="logout-button" onClick={logout}>Logout</button>
            </li>
          </>
        ) : (
          <li>
            <Link href="/auth/login" className={pathname === '/auth/login' ? 'active' : ''}>Login</Link>
          </li>
        )}
      </ul>
    </nav>
  );
}
