import { createContext, useContext, useState } from "react";

export const context = createContext();

export const useDireccion = () => useContext(context);

export const DireccionProvider = ({ children }) => {
  const [data, setData] = useState();

  return (
    <context.Provider value={{ data, setData }}>{children}</context.Provider>
  );
};
