import React from "react";
import FavoriteItem from "./components/FavoriteImages";
import Homepage from "./components/Homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <main style={{ padding: "1rem 0" }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/favorites" element={<FavoriteItem />}></Route>
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
