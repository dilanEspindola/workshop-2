import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { CarritoProvider } from "./context/CartContext";
import { ProductoId } from "./pages/ProductoId";
import { DireccionProvider } from "./context/direccionContext";

const App = () => {
  return (
    <BrowserRouter>
      <CarritoProvider>
        <DireccionProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:id" element={<ProductoId />} />
          </Routes>
        </DireccionProvider>
      </CarritoProvider>
    </BrowserRouter>
  );
};

export default App;
