import "./App.css";
import logoDeliveroo from "./img/logo.png";
// IMPORTER USESTATE DE REACT
import { useState, useEffect } from "react";

// IMPORTER AXIOS
import axios from "axios";

function App() {
  // CREER LE COMPOSANT DATA POUR RECUPERER LA DATA DE LA REQUETE AXIOS
  const [data, setData] = useState();
  // CREER  LE COMPOSANT 'IS LOADING' POUR SAVOIR SI LA DATA A BIEN ETE RECUPERER ET PAS CRASHER LE SERVER
  const [isLoading, setIsLoading] = useState(true);

  // CREER LA CALLBACK useEffect AVANT LE RETURN POUR FAIRE UNE REQUETES SUR AXIOS STOCKER LA DATA DAN 'setData' ET APPELER LA FONCTION A LA FIN
  // POUR NE PAS FAIRE LA REQUETE A LINFINI IL FAUT LA METTRE DANS LE USEEFFECT
  useEffect(() => {
    // Je déclare la focntion fetchData qui fait la requête
    const fetchData = async () => {
      // Ma requête peut échouer donc je la place dans un try catch
      try {
        const response = await axios.get(
          "https://site--back-end-deliveroo--nzzr6c2rddvb.code.run/"
        );
        // console.log(response.data);
        // Je stocke le résultat dans data
        setData(response.data);
        // Je fais paser isLoading à false
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    // J'appelle ma fonction
    fetchData();
  }, []);

  // tant que 'isLoading' vaut true j'affiche un indicateur de chargement
  // Si isLoading existe(est vrai) alors on affiche l'indicateur de chargement en retour sinon on affiche la page en retour
  // si isLoading existe ? (le ? veut dire alors)  (<p>Loading...<p>) : (: veut dire sinon) (metre la page à afficher)
  // isLoading ? (<p>Loading...<p>) : (contenu de la page)
  /* et faire une terner pour pas tout effacer lors du rafraichissement */

  return isLoading ? (
    <p>Loading...</p>
  ) : (
    <div className="App">
      <header>
        {/* mettre data.restaurant.picture */}
        <img src={logoDeliveroo} alt="" />

        {/* creer un compososant(en haut) 'is loading' avec TRUE en valeur de base  */}

        {/* mettre data.restaurant.name dans les {}*/}
        <h1>{data.restaurant.name}</h1>

        {/* mettre data.restaurant.description */}
        <p>{data.restaurant.description}</p>
        <img src={data.restaurant.picture} alt="img-header" />

        {/* data.categorie.map((category,index)=>{}) */}
        {/* creation du composant 'category' */}
        {/* mettre une props category et la mettre en argument de la fonction du composant categoty */}

        {/* Si les categorie ne contienne pas de repas on affiche sinon non */}
        {/* Si le tableau de la clé meal de la clé categori à une une longueur diférent de 0 on retourne la category(de la ligne31) de la props category du composant category ou on ne l'affiche pas(null)   */}
        {/* if(category.meal.length!==0){
          return <Category category={category}/>
        }else{
          return null
        } */}
      </header>
      <main>
        {/* la clef categories est un tableau le .map va parcourire l'ensemble de la clef catérories
        et stocker sa valeur dans l'argument'category' 
        Je veut retouner la clef name de la clef categories */}
        {/* Pour franchir la barriere du tableau et stocker seulement en objet
        utiliser le .map et mettre un argument */}
        {data.categories.map((category, index) => {
          // console.log(category);
          return (
            <div>
              <h2>{category.name}</h2>
            </div>
          );
        })}
        {/*Je veut également certaines valeur de la clef 'meals' qui est un tableau d'objet 
        J'utilise 'category' car j'ai déjà stocker les valeur de categories
        J'utilise .map à ma clef meals car c'est un tableau */}

        {category.meals.map((plat, index) => {
          console.log(plat);
          return (
            <div>
              <p>{plat.title}</p>
            </div>
          );
        })}
      </main>
    </div>
  );
}

export default App;
