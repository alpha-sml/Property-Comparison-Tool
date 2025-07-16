import './Footer.css';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2025 PropertyTool. All rights reserved.</p>
        <div className="footer-links">
          <Link href="/">Home</Link>
          <Link href="/listings">Listings</Link>
          <Link href="/favorites">Favorites</Link>
          <Link href="/compare">Compare</Link>
        </div>
      </div>
    </footer>
  );
}
