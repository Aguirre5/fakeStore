import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Productos from "./Productos";
import ProductDetailed from "./component/ProductDetailed";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Productos />} />
        <Route path="/producto/:id" element={<ProductDetailed />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
