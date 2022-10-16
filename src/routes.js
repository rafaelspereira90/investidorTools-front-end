import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import { isAuthenticated } from "./services/auth";
import Login from "./pages/login";
import Home from "./pages/home";
import Reports from "./pages/reports";
import Report from "./pages/report";
import Sale from "./pages/sale";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Navigate to={{ pathname: "/", state: { from: props.location } }} />
      )
    }
  />
);

const RoutesApp = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/reports" element={<Reports />} />
      <Route path="/report" element={<Report />} />
      <Route path="/sale" element={<Sale />} />
      <Route path="*" element={() => <h1>Page not found</h1>} />
    </Routes>
  </BrowserRouter>
);

export default RoutesApp;