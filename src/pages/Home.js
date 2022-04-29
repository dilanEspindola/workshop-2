import React, { useState, useEffect } from "react";
import useGetData from "../hook/useGetData";
import { Card } from "react-bootstrap";

const Home = () => {
  const [loading, setLoading] = useState(true);

  const data = useGetData();

  console.log(data);

  return (
    <div>
      {data.map((datos) => (
        <Card style={{ width: "18rem" }} key={datos.id}>
          <Card.Img variant="top" src={data.images} />
          <Card.Body>
            <Card.Title>{datos.title}</Card.Title>
            <Card.Text>{datos.description}</Card.Text>
            <Card.Text>{datos.price}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default Home;
