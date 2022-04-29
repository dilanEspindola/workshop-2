import React, { useState, useEffect } from "react";
import { Card, Spinner } from "react-bootstrap";
import { GetData } from "../services/data";
import { url } from "../utils/url";
import { ListaOfertas } from "../components/ListaOfertas";
import { ListaPopulares } from "../components/ListaPopulares";

const Home = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    GetData(url).then((res) => setData(res));
  }, []);

  return (
    <div>
      <ListaOfertas />
      <ListaPopulares />
    </div>
  );
};

export default Home;
