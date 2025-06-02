import { useSearchParams } from 'react-router-dom';

const FilterSidebar = () => {
    const [searchParams, setSearchParams] = useSearchParams();   // Ici on utilise useSearchParams pour obtenir et mettre à jour les paramètres de recherche dans l'URL. Ainsi, on peut filtrer les produits en fonction des paramètres de recherche. Par exemple, si l'utilisateur sélectionne un filtre, on peut mettre à jour les paramètres de recherche pour refléter ce filtre dans l'URL. Cela permet également de conserver l'état des filtres lors de la navigation entre les pages.

   const [filter, setFilters] 
  return (
    <div>FilterSidebar</div>
  )
}

export default FilterSidebar;