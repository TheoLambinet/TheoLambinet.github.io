import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Théo LAMBINET",
  description: "Portfolio de Théo LAMBINET",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr-FR">
      <body>
        <header>
          <h1>Théo LAMBINET</h1>
          <nav>
            <ul>
              <li>
                <a href="/">Projets</a>
              </li>
              <li>
                <a href="/contact">Contact ?</a>
              </li>
            </ul>
          </nav>
        </header>

        {children}

        <footer>
          <p>&copy; Théo LAMBINET - {new Date().getFullYear()}</p>
          <p><img src="img/mail.webp"/>Contact : theo.lamb@sfr.fr</p>
          <img src="img/linkedin.webp" alt="LinkedIn" />
        </footer>
      </body>
    </html>
  );
}
