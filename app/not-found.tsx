import cssErreur from "./css/erreur.module.css";

export default function Erreur() {
    return (
        <main className={cssErreur.main}>
            <p>Une erreur s'est produite...<br/>
            Cette page ne semble pas exister.<br/><br/>

            Voici un chat en guise de compensation !
            </p>

            <img src="/img/popcat.gif" alt="Chat"/>
        </main>
    );
}