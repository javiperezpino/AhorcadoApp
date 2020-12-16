import React from "react";
import { Route, Switch, HashRouter as HashRouter } from "react-router-dom";
import { ListComponent } from "./ListComponent";
import { MainComponent } from "./MainComponent";
import { PartidaComponent } from "./PartidaComponent";

export default function InstructorApp() {
  return (
    //Hacemos el routing de las rutas a cada componente de nuestra app
    //Originalmente usaba un BrowserRouter pero presentaba problemas con GitHub Pages así que se ha tenido que cambiar a HashRouter
    <HashRouter>
      <>
        <div className="title">
          <h1>Ahorcado</h1>
        </div>

        <Switch>
          <Route path="/" exact component={MainComponent} />
          <Route path="/palabras" exact component={ListComponent} />
          <Route path="/partida" exact component={PartidaComponent} />
        </Switch>
      </>
    </HashRouter>
  );
}
