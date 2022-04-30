import { createContext, useContext, useState } from "react";

const Context = createContext();

export const useCarrito = () => useContext(Context);

export const CarritoProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);
  const [contador, setContador] = useState(0);

  console.log(carrito);

  return (
    <Context.Provider value={{ carrito, setCarrito, contador, setContador }}>
      {children}
    </Context.Provider>
  );
};
