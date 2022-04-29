import { createContext, useContext, useState } from "react";

const Context = createContext();

export const useCarrito = () => useContext(Context);

export const CarritoProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);

  return (
    <Context.Provider value={{ carrito, setCarrito }}>
      {children}
    </Context.Provider>
  )
}