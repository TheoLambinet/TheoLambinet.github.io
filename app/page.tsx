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
            <img src="img/nodeJS.webp" alt="Node.JS"/>
            <img src="img/typescript.webp" alt="TypeScript"/>
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

      <section className={styles.experiences}>
        <h2>Expériences</h2>
        <p>Mon immersion dans le monde professionnel.</p>

        <article>
        <h3>Amphenol Air LB</h3>
          {/* img */}
          <p>Développeur</p>
          <p>03/2024 - 06/2024 (12 semaines)</p>
          <p>Stage (3ème année)</p>
          <p>Carignan</p>

          <ul>
            <li>- Développements sur Dynamics Ax 2009</li>
            <li>- Rapport Power BI du conditionnement</li>
            <li>- Mise en place de matériel informatique</li>
            <li>- Dépannage</li>
          </ul>
        </article>

        <article>
          <h3>Amphenol Air LB</h3>
          {/* img */}
          <p>Développeur</p>
          <p>01/2023 - 02/2023 (5 semaines)</p>
          <p>Stage (2ème année)</p>
          <p>Carignan</p>

          <ul>
            <li>- Introduction à l'ERP Dynamics Ax 2009</li>
            <li>- Projet d'automatisation de l'atelier assemblage de l'usine.</li>
          </ul>
        </article>

        <article>
          <h3>Mairie</h3>
          {/* <img src="img/mairie.webp" alt="Mairie de Vivier-au-Court"/> */}
          <p>Informaticien</p>
          <p>05/2022 - 06/2022 (5 semaines)</p>
          <p>Stage (1ère année)</p>
          <p>Vivier-au-Court</p>

          <ul>
            <li>- Projet de programmation en introduction à C#</li>
            <li>- Mise en place de matériel informatique pour la commune.</li>
          </ul>
        </article>
      </section>
      {/*
      pour la page projet : 
      générer programmatiquement (?) les projets, avec un tag date
      menu dépliant par année
      pour chaque projet, titre, descriptif, alternant gauche droite, quelques images et les compétences */}
    </main>
  );
}
