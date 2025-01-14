import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.presentation}>
        <h2>Théo LAMBINET</h2>
        <h3>Je suis développeur, passionné d'informatique.</h3>
        <p>A la recherche d'opportunités pour m'épanouir dans ce domaine.</p>
        <img src="/img/programmation.webp" alt="Illustration de programmation"/>
      </section>

      <section className={styles.parcours}>
        <h2>Parcours</h2>
        <article>
          BAC
        </article>
        <article>
          BTS
        </article>
        <article>
          LP
        </article>
      </section>
      {/*
      parcours
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
