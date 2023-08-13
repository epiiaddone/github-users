import React from "react";
import Dashboard from "./pages/Dashboard";
import Error from "./pages/Error";
import Login from "./pages/Login";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrivateRoute from "./pages/PrivateRoute";

function App() {
  return (
      <BrowserRouter>
          <Routes>
            <Route
              path='/'
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            />
            <Route path='login' element={<Login />} />
            <Route path='*' element={<Error />} />
          </Routes>
      </BrowserRouter>
  );
}

export default App;
