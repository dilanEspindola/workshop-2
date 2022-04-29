import { useState, useEffect } from "react";
import { GetData } from "../services/data";
import { filterOfertas } from "../utils/filtraOfertas";
import { url } from "../utils/url";
import { Card, Spinner } from "react-bootstrap";
import { CardProduct } from "./CardProduct";

export const ListaPopulares = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    filterOfertas().then((res) => console.log(res));
  }, []);

  useEffect(() => {
    GetData(url).then((res) => setData(res));
  }, []);

  return (
    <div>
      <h1>Lista de mas popular</h1>
      {!data ? (
        <Spinner animation="border" role="status" />
      ) : (
        data.map((datos) => <CardProduct productos={datos} key={datos.id} />)
      )}
    </div>
  );
};
