import React from "react";
import { Route, BrowserRouter, Routes as AppRoutes } from "react-router-dom";

import Login from "./components/Login/Login";
import List from "./components/List/List";
import Detail from "./components/Detail/Detail";

const Routes = () => {
  return (
    <BrowserRouter>
      <AppRoutes>
      <Route path="/" element={<Login />} />
        <Route path="/lista" element={<List />} />
        <Route path="/detalhes/:id" element={<Detail />} />
      </AppRoutes>
    </BrowserRouter>
  )
}

export default Routes;