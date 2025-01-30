// Changement de thème
export const changerTheme = () : void => {
  // Récupérer le thème actuel
  const theme = getTheme();

  // Changer le thème dans le stockage local
  if (theme === "clair") {
    setTheme("sombre");
  }
  else {
    setTheme("clair");
  }

  // Change le thème de la page
  document.getElementsByTagName('html')[0].setAttribute('data-theme', getTheme());

  // Et le main juste pour la page d'accueil...
  document.getElementsByTagName('main')[0].setAttribute('data-theme', getTheme());
}

export const initTheme = () : string => {
  if (typeof(window) !== "undefined") {
    // Si aucune valeur n'est stockée, stocker prefere-color-scheme inversé
    if (localStorage.getItem('theme') === null) {
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        setTheme("sombre");
      }
      else {
        setTheme("clair");
      }
    }

    // Renvoie le thème stocké
    return localStorage.getItem('theme') as string;
  }
  return "sombre";
}

const getTheme = () : string => {
  return localStorage.getItem('theme') as string;
}

const setTheme = (theme: string) : void => {
  localStorage.setItem('theme', theme);
}