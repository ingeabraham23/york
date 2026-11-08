import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import AcercaDe from "./components/AcercaDe";

function App() {
  return (
    <HashRouter>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<AcercaDe />} />
          </Routes>
        </div>
    </HashRouter>
  );
}

export default App;
