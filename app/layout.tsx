'use client';
import Link from "next/link";
import { useEffect, useState } from "react";
import "./css/globals.css";
import { changerTheme, initTheme } from "./theme";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [theme,setTheme] = useState<string>("sombre");
  
  useEffect(() => {
    if (typeof(window) !== "undefined") {
      setTheme(initTheme());
    }
  })

  return (
    <html lang="fr-FR" data-theme={theme}>
      <head>
        <title>Théo LAMBINET</title>
        <meta name="description" content={"Portfolio de Théo Lambinet."}/>
      </head>
      <body>
        <header>
          <Link href="/"><h1>Theo LAMBINET</h1></Link>
          <Link href="/projets">Projets</Link>
          <a href="CV.pdf" target="_blank">CV</a>
          <button type="button" onClick={() => changerTheme()}><img src="/img/themeSwitch.webp" alt="thème"/></button>
        </header>

        {children}

        <footer>
          <div>
            <p>&copy; Théo LAMBINET - {new Date().getFullYear()}</p>
            
          </div>
          <div>
            <p><img src="/img/mail.webp" alt="Mail"/> theo.lamb@sfr.fr</p>
            <a href="https://www.linkedin.com/in/th%C3%A9o-lambinet-60a6192b0/" target="_blank"><img src="/img/linkedin.webp" alt="LinkedIn"/></a>
            <br/>
          </div>
        </footer>
      </body>
    </html>
  );
}
