import { useState, useEffect } from "react";
import { filterPopulares } from "../utils/filtraOfertas";
import { Spinner } from "react-bootstrap";
import { CardProduct } from "./CardProduct";

export const ListaPopulares = () => {
  const [populares, setPopulares] = useState(null);

  useEffect(() => {
    filterPopulares().then((res) => setPopulares(res));
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
      {!populares ? (
        <Spinner animation="border" role="status" />
      ) : (
        populares.map((datos) => (
          <CardProduct productos={datos} key={datos.id} />
        ))
      )}
    </div>
  );
};
