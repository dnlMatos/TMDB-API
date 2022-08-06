import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import Catalog from "../pages/Catalog";
import Details from "../pages/Details";

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/:category/search/:keyword" component={Catalog} />
        <Route path="/:category/:id" component={Details} />
        <Route path="/:category" component={Catalog} />
        <Route path="/" exact component={Home} />
      </Switch>
    </BrowserRouter>
  );
}
