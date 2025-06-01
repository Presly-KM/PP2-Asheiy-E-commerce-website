import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserLayout from "./components/Layout/UserLayout";
import Home from "./pages/Home";
import { Toaster } from "sonner";

const App = () => {
  return (
    <BrowserRouter>                                 {/* On utilise BrowserRouter pour gérer les routes. Les routes servent à naviguer entre différentes pages de l'application. Par exemple on pourrait avoir une route pour la page d'accueil, une autre pour la page de contact, etc. */}
      <Toaster position="top-right"/>               {/* Toaster est utilisé pour afficher des notifications à l'utilisateur. Par exemple, lorsqu'une action réussit ou échoue, une notification peut être affichée pour informer l'utilisateur. */}
      <Routes>
         <Route path="/" element={<UserLayout/>}>   { /* La route "/" correspond à la page d'accueil de l'application. Le composant UserLayout sera affiché lorsque l'utilisateur visitera cette page. */}
         <Route index element={<Home />} />         {/* La route index correspond à la page d'accueil de l'application. Elle est généralement utilisée pour afficher le contenu principal de l'application. */}
         </Route>
          <Route>{ /* Admin Layout */}</Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
