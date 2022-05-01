import { useState, useEffect } from "react";
import { GetData } from "../services/data";
import { filterOfertas } from "../utils/filtraOfertas";
import { url } from "../utils/url";
import { Spinner } from "react-bootstrap";
import { CardProduct } from "./CardProduct";

export const ListaOfertas = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    filterOfertas().then((res) => setData(res));
  }, []);

  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        flexFlow: 'row nowrap',
        overflowX: 'scroll',
        gap: '40px',
        scrollbarWidth: 'none'
      }}
    >
      {!data ? (
        <Spinner animation="border" role="status" />
      ) : (
        data.map((datos) => (
          <CardProduct productos={datos} key={datos.id} />
        ))
      )}
    </div>
  );
};
