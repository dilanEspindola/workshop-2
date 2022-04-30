import { useNavigate } from "react-router-dom";
import { Card, Modal, Button, Form } from "react-bootstrap";
import { useState } from "react";
import { useDireccion } from "../context/direccionContext";

export const CardProduct = ({ productos }) => {
  const [show, setShow] = useState(false);
  const [direccion, setDireccion] = useState();
  const navigate = useNavigate();

  const { setData } = useDireccion();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    setData(direccion);
    navigate(`/${productos.id}`);
  };

  return (
    <Card style={{ width: "18rem" }}>
      <img src={productos.images} alt="" />
      <Card.Body>
        <Card.Title>{productos.title}</Card.Title>
        <Card.Text>{productos.description}</Card.Text>
        <Card.Text>$ {productos.price}</Card.Text>
        <Button variant="primary" onClick={handleShow}>
          Launch demo modal
        </Button>
      </Card.Body>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                type="text"
                name="direccion"
                autoFocus
                placeholder="direccion"
                onChange={({ target }) => setDireccion(target.value)}
              />
            </Form.Group>
            <Button variant="primary" onClick={handleSubmit}>
              Save Changes
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </Card>
  );
};
