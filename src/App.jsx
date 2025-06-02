import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserLayout from "./components/Layout/UserLayout";
import Home from "./pages/Home";
import { Toaster } from "sonner";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";

const App = () => {
  return (
    <BrowserRouter>                                 {/* On utilise BrowserRouter pour gérer les routes. Les routes servent à naviguer entre différentes pages de l'application. Par exemple on pourrait avoir une route pour la page d'accueil, une autre pour la page de contact, etc. */}
      <Toaster position="top-right"/>               {/* Toaster est utilisé pour afficher des notifications à l'utilisateur. Par exemple, lorsqu'une action réussit ou échoue, une notification peut être affichée pour informer l'utilisateur. */}
      <Routes>
         <Route path="/" element={<UserLayout/>}>   { /* La route "/" correspond à la page d'accueil de l'application. Le composant UserLayout sera affiché lorsque l'utilisateur visitera cette page. */}
         <Route index element={<Home />} />         {/* La route index correspond à la page d'accueil de l'application. Elle est généralement utilisée pour afficher le contenu principal de l'application. */}
         <Route path="login" element={<Login />} /> {/* La route "login" correspond à la page de connexion de l'application. Lorsque l'utilisateur visitera cette page, le composant Login sera affiché. */}
          <Route path="register" element={<Register />} /> {/* La route "register" correspond à la page d'inscription de l'application. Le composant Register est utilisé ici, mais il pourrait être remplacé par un composant d'inscription spécifique. */}
          <Route path="profile" element={<Profile />} /> {/* La route "profile" correspond à la page de profil de l'utilisateur. Le composant Profile sera affiché lorsque l'utilisateur visitera cette page. */}
         </Route>
          <Route>{ /* Admin Layout */}</Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
