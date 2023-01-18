import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Page404 from "./pages/Page404";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Logement from "./pages/Logement";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <Footer />
            </>
          }
        />
        <Route
          path="/about"
          element={
            <>
              <About />
              <Footer />
            </>
          }
        />
        <Route
          path="/logement/:id"
          element={
            <>
              <Logement />
              {/* FOOTER DANS Logement.js */}
            </>
          }
        />
        <Route
          path="*"
          element={
            <>
              <Page404 />
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
