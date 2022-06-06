import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Card from "./Card";
import CardData from "./CardData";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Card />}></Route>
        <Route path="/carddata/:id" element={<CardData />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
