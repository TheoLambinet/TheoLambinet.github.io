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
        <article>
          <h3>Langages</h3>
          <p>Java, Python, C, HTML/CSS, PHP, SQL</p>
        </article>
        <article>
          <h3>Frameworks</h3>
          <p>Spring, Django, Bootstrap</p>
        </article>
        <article>
          <h3>Outils</h3>
          <p>Git, Docker, Jenkins, IntelliJ IDEA, Visual Studio Code</p>
        </article>
      </section>
      {/*
      compétences / outils
      Expériences professionnelles
      pour la page projet : 
      menu dépliant par année
      pour chaque projet, titre, descriptif, quelques images et les compétences */}
      <p>Oui</p>
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>e<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>d
    </main>
  );
}
