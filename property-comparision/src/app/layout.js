import './globals.css';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import { SelectionProvider } from '../context/SelectionContext';
import { FavoritesProvider } from '../context/FavoritesContext';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <FavoritesProvider>
          <SelectionProvider>
            <Navbar />
            <main>{children}</main>
            <Footer />
          </SelectionProvider>
        </FavoritesProvider>
      </body>
    </html>
  );
}
