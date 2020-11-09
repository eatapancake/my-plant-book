import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import AddPlantPage from "../pages/add-plant-page";
import EditPlantPage from "../pages/edit-plant-page";
import PlantPage from "../pages/plant-page";
import NotFoundPage from "../pages/not-found-page";

import Nav from "./nav";

function App() {
  return (
    <BrowserRouter>
      <Nav />

      <Switch>
        <Route path="/" exact>
          <PlantPage />
        </Route>

        <Route path="/add">
          <AddPlantPage />
        </Route>

        <Route path="/edit/:id">
          <EditPlantPage />
        </Route>

        <Route path="*">
          <NotFoundPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
