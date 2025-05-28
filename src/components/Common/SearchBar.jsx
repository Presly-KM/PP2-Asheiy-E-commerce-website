import { useState } from "react";
import { HiMagnifyingGlass } from "react-icons/hi2";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState(""); // Ici on gère l'état du terme de recherche. Actuellement, il est vide par défaut.
  const [isOpen, setIsOpen] = useState(false); // Ici on gère l'état d'ouverture/visibilité du champ de recherche. Actuellement, il est fermé par défaut. Le champt de recherche ne sera visible que lorsque le "IsOpen" a la ligne 14 sera sur "true" autrement dit lorsque l'utilisateur cliquera sur l'icône de recherche.

  const handleSearchToggle = () => {
    setIsOpen(!isOpen); // Cette fonction inverse l'état d'ouverture du champ de recherche. Si le champ est fermé, il s'ouvre, et vice versa.
  };

  return (
    <div
      className={`flex items-center justify-center w-full transition-all duration-300 ${
        isOpen ? "absolute top-0 left-0 w-full bg-white h-24 z-50" : "w-auto"
      }  `}
    >
      {isOpen ? ( // Si le champ de recherche est ouvert, on affiche un champ de saisie.
        <form className="relative flex items-center justify-center w-full">
          <div className="relative w-1/2">
            <input
              type="text"
              placeholder="Search"
              value={searchTerm}
              className="bg-gray-100 px-4 py-2 pl-12 pr-12 rounded-lg focus:outline-none w-full
                 placeholder:text-gray-700"
            />
            {/* search icon */}
            <button>
              <HiMagnifyingGlass className="h-6 w-6" />
            </button>
          </div>
        </form>
      ) : (
        <button onClick={handleSearchToggle}>            {/* On veut afficher le form quand l'icone (la loupe) est cliqué par l'utilisateur. Ici quand on clique sur l'icone ça appelle la fonction handleSearchtoogle qui a pour role douvrir le form (cf ligne 8) */}
          <HiMagnifyingGlass className="h-6 w-6" />
        </button>
      )}
    </div>
  );
};
export default SearchBar;
