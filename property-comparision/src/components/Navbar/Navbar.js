'use client';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useAuth } from '../../context/AuthContext';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase/config';
import './Navbar.css';

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const { user } = useAuth();

  const handleLogout = async () => {
    await signOut(auth);
    router.push('/auth/login');
  };

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

        {user ? (
          <li>
            <button onClick={handleLogout} className="logout-button">Logout</button>
          </li>
        ) : (
          <li>
            <Link href="/auth/login" className={pathname === '/auth/login' ? 'active' : ''}>Login</Link>
          </li>
        )}
      </ul>
    </nav>
  );
}
