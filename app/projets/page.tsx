"use client";
import cssProjets from "../css/projets.module.css";

export default function Projets() {
    // Change à true ou rien le statut ouvert d'une section
    const changeOuvert = (e: React.MouseEvent<HTMLElement>) : void => {
        if (e.currentTarget.getAttribute("data-ouvert") != "true") {
            e.currentTarget.setAttribute("data-ouvert", "true");
        }
        else {
            e.currentTarget.removeAttribute("data-ouvert");
        }
    }

    return (
        <main className={cssProjets.projets}>
            <h2>Projets</h2>
            <p>Les réalisations concrètes que j'ai effectué.</p>

            <section data-ouvert="true" onClick={(e) => changeOuvert(e)}>
                <h3><span/>2023</h3>

                <article className={cssProjets.projet}>
                    <aside>
                        <h3>Roulette</h3>
                        <p>Site web permettant de tirer au sort un élève parmi une classe sélectionnable, et de mettre une note.</p>
                        <div>
                            <img src="img/php.webp" alt="PHP"/>
                            <img src="img/html5.webp" alt="Html"/>
                            <img src="img/css.webp" alt="CSS"/>
                            <img src="img/sql.webp" alt="SQL"/>
                            <img src="img/mariaDB.webp" alt="MariaDB"/>
                            <img src="img/git.webp" alt="Git"/>
                        </div>
                    </aside>

                    <div>
                        <img src="img/proj/roulette1.webp" alt="CompetencesApp"/>
                        <img src="img/proj/roulette2.webp" alt="CompetencesApp"/>
                        <img src="img/proj/roulette3.webp" alt="CompetencesApp"/>
                    </div>
                </article>

                <article className={cssProjets.projet}>
                    <aside>
                        <h3>MdpApp</h3>
                        <p>Projet personnel. Création d'une application UWP, ayant pour objectif de répertorier les identifiants de connexion enregistrés pour des services. Connexion sécurisée à la base de données locale.</p>
                        <div>
                            <img src="img/csharp.webp" alt="C#"/>
                            <img src="img/sql.webp" alt="SQL"/>
                            <img src="img/mariaDB.webp" alt="MariaDB"/>
                        </div>
                    </aside>

                    <div>
                        <img src="img/proj/mdpApp1.webp" alt="Mdp App"/>
                        <img src="img/proj/mdpApp2.webp" alt="Mdp App"/>
                        <img src="img/proj/mdpApp3.webp" alt="Mdp App"/>
                    </div>
                </article>

                <article className={cssProjets.projet}>
                    <aside>
                        <h3>Assemblage</h3>
                        <p>Création d'un programme permettant d'entrer des cuissons dans des étuves en scannant une tâche, de lister les cuissons en cours (temps restant, recuisson, ...) et de sortir une cuisson. Historique des cuissons pour les superviseurs d'atelier.</p>
                        <div>
                            <img src="img/xpp.webp" alt="AX 2009"/>
                            <img src="img/sql.webp" alt="SQL"/>
                        </div>
                    </aside>

                    <div>
                        <img src="img/proj/projAssemb1.webp" alt="Stage BTS2"/>
                        <img src="img/proj/projAssemb2.webp" alt="Stage BTS2"/>
                        <img src="img/proj/projAssemb3.webp" alt="Stage BTS2"/>
                    </div>
                </article>

                <article className={cssProjets.projet}>
                    <aside>
                        <h3>Portfolio (BTS SIO)</h3>
                        <p>Création d'un site web pour servir de support de présentation pour l'épreuve E4. Il s'agit du prédécesseur de ce site.</p>
                        <div>
                            <img src="img/html5.webp" alt="Html"/>
                            <img src="img/css.webp" alt="CSS"/>
                            <img src="img/git.webp" alt="Git"/>
                        </div>
                    </aside>

                    <div>
                        <img src="img/proj/portfoliobts1.webp" alt="Portfolio"/>
                        <img src="img/proj/portfoliobts2.webp" alt="Portfolio"/>
                        <img src="img/proj/portfoliobts3.webp" alt="Portfolio"/>
                    </div>
                </article>

                <article className={cssProjets.projet}>
                    <aside>
                        <h3>Competences</h3>
                        <p>Création d'une application permettant à une entreprise de créer des évaluations, afin de noter ses collaborateurs en marge du référentiel de BTS SIO.<br/>Création d'une API avec Directus, tentative en React Native, projet final en Next JS.</p>
                        <div>
                            <img src="img/html5.webp" alt="Html"/>
                            <img src="img/css.webp" alt="CSS"/>
                            <img src="img/nextJS.webp" alt="Next JS"/>
                            <img src="img/nodeJS.webp" alt="Node JS"/>
                            <img src="img/javascript.webp" alt="JS"/>
                            <img src="img/sql.webp" alt="SQL"/>
                            <img src="img/mariaDB.webp" alt="MariaDB"/>
                            <img src="img/reactNative.webp" alt="React Native"/>
                            <img src="img/git.webp" alt="Git"/>
                        </div>
                    </aside>

                    <div>
                        <img src="img/proj/competences1.webp" alt="CompetencesApp"/>
                        <img src="img/proj/competences2.webp" alt="CompetencesApp"/>
                        <img src="img/proj/competences3.webp" alt="CompetencesApp"/>
                    </div>
                </article>
            </section>

            <section onClick={(e) => changeOuvert(e)}>
                <h3><span/>2022</h3>

                <article className={cssProjets.projet}>
                    <aside>
                        <h3>Dolibarr</h3>
                        <p>Création d'une application web et mobile, à l'aide de frameworks, permettant d'utiliser l'API de Dolibarr afin de créer des notes de frais.</p>
                        <div>
                            <img src="img/reactNative.webp" alt="React Native"/>
                            <img src="img/nodeJS.webp" alt="NodeJS"/>
                            <img src="img/javascript.webp" alt="JS"/>
                            <img src="img/mariaDB.webp" alt="MariaDB"/>
                            <img src="img/git.webp" alt="Git"/>
                        </div>
                    </aside>

                    <div>
                        <img src="img/proj/dolibarr1.webp" alt="DolibarrApp"/>
                        <img src="img/proj/dolibarr2.webp" alt="DolibarrApp"/>
                        <img src="img/proj/dolibarr3.webp" alt="DolibarrApp"/>
                    </div>
                </article>

                <article className={cssProjets.projet}>
                    <aside>
                        <h3>Courrier mairie</h3>
                        <p>Création d'une application WPF (C#) permettant de répertorier des fichiers en fonction de l'entreprise, la date ou le type de document.<br/>Mise en place de matériel informatique pendant le stage.</p>
                        <div>
                            <img src="img/csharp.webp" alt="C#"/>
                        </div>
                    </aside>

                    <div>
                        <img src="img/proj/vivier1.webp" alt="Stage BTS1"/>
                        <img src="img/proj/vivier2.webp" alt="Stage BTS1"/>
                        <img src="img/proj/vivier3.webp" alt="Stage BTS1"/>
                    </div>
                </article>

                <article className={cssProjets.projet}>
                    <aside>
                        <h3>Asetar08</h3>
                        <p>Contexte : Création d'un site web entier pour une association, de l'analyse à la réalisation finale, en appliquant la méthode Scrum.</p>
                        <div>
                            <img src="img/html5.webp" alt="Html"/>
                            <img src="img/css.webp" alt="CSS"/>
                            <img src="img/php.webp" alt="PHP"/>
                            <img src="img/javascript.webp" alt="JS"/>
                            <img src="img/sql.webp" alt="SQL"/>
                            <img src="img/mariaDB.webp" alt="MariaDB"/>
                            <img src="img/git.webp" alt="Git"/>
                        </div>
                    </aside>

                    <div>
                        <img src="img/proj/asetar1.webp" alt="Asextar08"/>
                        <img src="img/proj/asetar2.webp" alt="Asextar08"/>
                        <img src="img/proj/asetar3.webp" alt="Asextar08"/>
                    </div>
                </article>
            </section>

            <section onClick={(e) => changeOuvert(e)}>
                <h3><span/>2021</h3>

                <article className={cssProjets.projet}>
                    <aside>
                        <h3>Miniprojet Ping</h3>
                        <p>Programmation d'un script en Bash permettant de tester la connectivité avec un hôte précisé dans un document texte, avec résultats dans la console.
                        <br/>Refait en php plus tard, génère une page html affichant les résultats sous forme de tableau.</p>
                        <div>
                            <img src="img/php.webp" alt="PHP"/>
                            <img src="img/sql.webp" alt="SQL"/>
                            <img src="img/mariaDB.webp" alt="MariaDB"/>
                        </div>
                    </aside>

                    <div>
                        <img src="img/proj/ping1.webp" alt="Miniprojet ping"/>
                        <img src="img/proj/ping2.webp" alt="Miniprojet ping"/>
                        <img src="img/proj/ping3.webp" alt="Miniprojet ping"/>
                    </div>
                </article>
            </section>
            {/*faire page 404*/}
        </main>
    );
}