import React from "react";
//Css
import "./App.css";
//Router
import { Switch, Route, BrowserRouter } from "react-router-dom";
//Screens
import Acceuil from "./screens/Acceuil";
import Contact from "./screens/Contact";
import Cours_Tarifs from "./screens/Cours_Tarifs";
import LaSalle from "./screens/LaSalle";
import Parcours from "./screens/Parcours";
//Components
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Acceuil} />
          <Route path="/cours_tarifs" component={Cours_Tarifs} />
          <Route path="/lasalle" component={LaSalle} />
          <Route path="/contact" component={Contact} />
          <Route path="/parcours" component={Parcours} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
