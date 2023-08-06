import React from "react";
import { Route, BrowserRouter, Routes as AppRoutes } from "react-router-dom";

import Login from "./components/Login/Login";
import List from "./components/List/List";

const Routes = () => {
  return (
    <BrowserRouter>
      <AppRoutes>
      <Route path="/" element={<Login />} />
        <Route path="/lista" element={<List />} />
      </AppRoutes>
    </BrowserRouter>
  )
}

export default Routes;