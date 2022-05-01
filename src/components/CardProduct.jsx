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
    <>
      <aside style={{ width: '192px', height: '420px'}}>
        <img
          src={productos.images}
          alt=""
          style={{ width: '192px', height: '192px', objectFit: 'cover' }}
        />

        <div
          style={{
              display: 'flex',
              flexFlow: 'column nowrap',
              justifyContent: 'space-between',
              height: '210px',
              width: '192px',
              marginTop: '16px'
          }}
        >
          <div>
            <p className="mb-2 text-base font-bold">
              ${productos.price}
            </p>
            <p className="text-base font-regular">
              {productos.title}
            </p>
          </div>

          <button
            onClick={handleShow}
            style={{
              width: '100%',
              height: '40px',
              borderRadius: '8px',
              backgroundColor: '#0AC763',
              color: 'white',
              outline: 'none',
            }}
          >
            Agregar
          </button>
        </div>
      </aside>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
          ¿Dónde quieres recibir tu pedido?
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <p>
          Para poder ofrecerte productos dentro de tu área, necesitamos
          tu dirección.
        </p>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                type="text"
                name="direccion"
                autoFocus
                placeholder="Ingresa tu dirección"
                onChange={({ target }) => setDireccion(target.value)}
              />
            </Form.Group>

            <Button
              className="w-full"
              variant="primary"
              onClick={handleSubmit}
              style={{
                backgroundColor: '#0AC763',
                outline: 'none',
                borderRadius: '8px',
              }}
            >
              Agregar
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>

  );
};
