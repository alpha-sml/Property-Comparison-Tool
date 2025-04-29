import Link from 'next/link';
import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="logo">PropertyTool</h1>
      <ul className="nav-links">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/listings">Listings</Link></li>
        <li><Link href="/compare">Compare</Link></li>
        <li><Link href="/favorites">Favorites</Link></li>
      </ul>
    </nav>
  );
}
