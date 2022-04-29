import axios from "axios";

export const filterOfertas = async () => {
  const { data } = await axios.get(
    "https://backend-workshop-2.herokuapp.com/productos"
  );

  const filtrado = data.filter((p) => p.category === "Ofertas");

  return filtrado;
};

export const filterPopulares = async () => {
  const { data } = await axios.get(
    "https://backend-workshop-2.herokuapp.com/productos"
  );

  const filtrado = data.filter((p) => p.category === "Los mas populares");

  return filtrado;
};
