import './globals.css';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import { SelectionProvider } from '../context/SelectionContext';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SelectionProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </SelectionProvider>
      </body>
    </html>
  );
}
