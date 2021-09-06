import React from "react";
import { Switch, Route, HashRouter } from "react-router-dom";
import { Header } from "./components/header/Header";

export default function PortafolioRouter() {
  return (
    <HashRouter basename="cv">
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      </div>

      <Header />
    </HashRouter>
  );
}
