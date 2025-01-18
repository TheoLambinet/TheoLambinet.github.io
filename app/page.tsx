import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.presentation}>
        <div>
          <h2>Théo LAMBINET</h2>
          <h3>Je suis développeur, passionné d'informatique.</h3>
          <p>A la recherche d'opportunités pour m'épanouir dans ce domaine.</p>
        </div>
        <img src="/img/programmation.webp" alt="Illustration de programmation"/>
      </section>

      <section className={styles.parcours}>
        <h2>Parcours</h2>

        <article>
          <h3>BAC</h3>
          <p>2018 - 2021</p>
          <p>NSI - Maths - SI</p>
          <p>Lycée Pierre Bayle, Sedan</p>
        </article>

        <article>
          <h3>BTS SIO</h3>
          <p>2021 - 2023</p>
          <p>Option SLAM</p>
          <p>Lycée Gaspard Monge, Charleville-Mézières</p>
        </article>

        <article>
          <h3>LP CRRW</h3>
          <p>2023 - 2024</p>
          <p>EiSINe, Charleville-Mézières</p>
        </article>
      </section>

      <section className={styles.competences}>
        <h2>Compétences</h2>
        <p>Les compétences que j'ai acquises au cours de mes études et expériences professionnelles :</p>

        <article>
          <h3>C#</h3>
          <img src="img/csharp.webp" alt="C#"/>
          <p>Projets UWP, WPF</p>
          <div>
            <img src="img/dotnet.webp" alt=".NET"/>
          </div>
        </article>
        
        <article>
          <h3>Web</h3>
          <img src="img/web.webp" alt="Web"/>
          <p>HTML/CSS, JS, PHP</p>
          <div>
            <img src="img/html5.webp" alt="Html 5"/>
            <img src="img/css.webp" alt="Css 3"/>
            <img src="img/javascript.webp" alt="Js"/>
            <img src="img/php.webp" alt="php"/>
          </div>
        </article>

        <article>
          <h3>Donnees</h3>
          <img src="img/sql.webp" alt="SQL"/>
          <p>SQL, MariaDB</p>
          <div>
            <img src="img/mariaDB.webp" alt="Maria DB"/>
          </div>
        </article>

        <article>
          <h3>ERP</h3>
          <img src="img/xpp.webp" alt="Dynamics AX 2009"/>
          <p>Développements sur AX</p>
        </article>

        <article>
          <h3>Frameworks</h3>
          <img src="img/react.webp" alt="React"/>
          <p>NextJS, React Native</p>
          <div>
            <img src="img/nextjs.webp" alt="NextJS"/>
            <img src="img/reactNative.webp" alt="React Native"/>
          </div>
        </article>

        <article>
          <h3>Python</h3>
          <img src="img/python.webp" alt="Python"/>
          <p>Introduction avec Python</p>
        </article>

        <article>
          <h3>Git</h3>
          <img src="img/git.webp" alt="Git"/>
          <p>Git pour les projets</p>
        </article>

        <article>
          <h3>Power BI</h3>
          <img src="img/powerBI.webp" alt="Power BI"/>
          <p>Création de rapports</p>
        </article>
      </section>
      {/*
      Expériences professionnelles
      pour la page projet : 
      menu dépliant par année
      pour chaque projet, titre, descriptif, alternant gauche droite, quelques images et les compétences */}
    </main>
  );
}
