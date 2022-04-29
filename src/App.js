import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { CarritoProvider } from "./context/CartContext";

const App = () => {
  return (
    <BrowserRouter>
      <CarritoProvider>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </CarritoProvider>
    </BrowserRouter>
  );
};

export default App;
