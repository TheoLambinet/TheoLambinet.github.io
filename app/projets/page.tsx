import cssProjets from "../css/projets.module.css";

export default function Projets() {
    const lstProj = [];
    return (
        <main className={cssProjets.projets}>
            <h2>Projets</h2>
            <p>Les réalisations concrètes que j'ai effectué.</p>

            <section>
                <h3><span/>2023</h3>

                <article className={cssProjets.projet}>
                    <aside>
                        <h3>Competences</h3>
                        <p>Création d'une application permettant à une entreprise de créer des évaluations, afin de noter ses collaborateurs en marge du référentiel de BTS SIO. Tentative en React Native, projet final en Next JS.</p>
                        <div>
                            <img src="img/html5.webp" alt=""/>
                            <img src="img/css.webp" alt=""/>
                            <img src="img/nextJS.webp" alt=""/>
                            <img src="img/nodeJS.webp" alt=""/>
                            <img src="img/javascript.webp" alt=""/>
                            <img src="img/sql.webp" alt=""/>
                            <img src="img/mariaDB.webp" alt=""/>
                            <img src="img/reactNative.webp" alt=""/>
                            <img src="img/git.webp" alt=""/>
                        </div>
                    </aside>

                    <div>
                        <img src="img/proj/competences1.png" alt=""/>
                        <img src="img/proj/competences2.png" alt=""/>
                        <img src="img/proj/competences3.png" alt=""/>
                    </div>
                </article>

                <article className={cssProjets.projet}>
                    <aside>
                        <h3>Dolibarr</h3>
                        <p>Création d'une application web et mobile, à l'aide de frameworks, permettant d'utiliser l'API de Dolibarr afin de créer des notes de frais.</p>
                        <div>
                            <img src="img/reactNative.webp" alt=""/>
                            <img src="img/nodeJS.webp" alt=""/>
                            <img src="img/javascript.webp" alt=""/>
                            <img src="img/mariaDB.webp" alt=""/>
                            <img src="img/git.webp" alt=""/>
                        </div>
                    </aside>

                    <div>
                        <img src="img/proj/dolibarr1.png" alt=""/>
                        <img src="img/proj/dolibarr2.png" alt=""/>
                        <img src="img/proj/dolibarr3.png" alt=""/>
                    </div>
                </article>
            </section>

            <section>
                <h3><span/>2022</h3>
            </section>
            {/*
            pour la page projet : 
            générer programmatiquement (oui) les projets, avec un tag date
            git : competences, dolibarr, portfolio, roulette
            faire page 404 */}
        </main>
    );
}