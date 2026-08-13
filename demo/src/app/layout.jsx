import Navigation from "./components/Navigation";
import "./globals.scss";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navigation />

        <main>
          {children}
        </main>

      </body>
    </html>
  );
}
