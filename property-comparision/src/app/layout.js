import './globals.css';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import { FavoritesProvider } from '../context/FavoritesContext';
import { SelectionProvider } from '../context/SelectionContext';
import { AuthProvider } from '../context/AuthContext';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <FavoritesProvider>
            <SelectionProvider>
              <div className="page-wrapper">
                <Navbar />
                <main className="page-content">{children}</main>
                <Footer />
              </div>
            </SelectionProvider>
          </FavoritesProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
