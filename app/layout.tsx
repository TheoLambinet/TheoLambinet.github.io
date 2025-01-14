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
          <a href=""><h1>Theo LAMBINET</h1></a>
          <a href="/projets">Projets</a>
          <a href="CV.pdf" target="_blank">CV</a>
          <button><img src="img/themeSwitch.webp" alt="thème"/></button>
        </header>

        {children}

        <footer>
          <div>
            <p>&copy; Théo LAMBINET - {new Date().getFullYear()}</p>
            
          </div>
          <div>
            <p><img src="img/mail.webp"/> theo.lamb@sfr.fr</p>
            <a href="https://www.linkedin.com/in/th%C3%A9o-lambinet-60a6192b0/" target="_blank"><img src="img/linkedin.webp" alt="LinkedIn"/></a>
            <br/>
          </div>
        </footer>
      </body>
    </html>
  );
}
