import { Card } from "react-bootstrap";

export const CardProduct = ({ productos }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <img src={productos.images} alt="" />
      <Card.Body>
        <Card.Title>{productos.title}</Card.Title>
        <Card.Text>{productos.description}</Card.Text>
        <Card.Text>$ {productos.price}</Card.Text>
      </Card.Body>
    </Card>
  );
};
