import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import AddPlantPage from "../pages/add-plant-page";
import EditPlantPage from "../pages/edit-plant-page";
import AccountPage from "../pages/account-page";
import PlantPage from "../pages/plant-page";
import NotFoundPage from "../pages/not-found-page";

import Nav from "./nav";
import { auth } from "../data/firebase";

function AuthenicatedRoute(props) {
  const { isAuthenticated, children, ...routeProps } = props;
  return (
    <Route {...routeProps}>
      {isAuthenticated ? children : <Redirect to="/account" />}{" "}
    </Route>
  );
}
function App() {
  const [user, setUser] = useState(null);
  const isAuthenticated = user !== null;

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
    });
    return unsubscribe;
  }, []);

  return (
    <BrowserRouter>
      <Nav user={user} />

      <Switch>
        <Route path="/account">
          <AccountPage user={user} />
        </Route>

        <AuthenicatedRoute path="/" exact isAuthenticated={isAuthenticated}>
          <PlantPage user={user} />
        </AuthenicatedRoute>

        <AuthenicatedRoute path="/add" isAuthenticated={isAuthenticated}>
          <AddPlantPage user={user} />
        </AuthenicatedRoute>

        <AuthenicatedRoute path="/edit/:id" isAuthenticated={isAuthenticated}>
          <EditPlantPage user={user} />
        </AuthenicatedRoute>

        <Route path="*">
          <NotFoundPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
