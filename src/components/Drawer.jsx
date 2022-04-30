import { useState } from "react";
import { Button, Offcanvas, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useCarrito } from "../context/CartContext";

export const Drawer = () => {
  const [show, setShow] = useState(false);
  const [showPay, setShowPay] = useState(false);
  const { carrito, setCarrito } = useCarrito();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const eliminarCarrito = (id) => {
    const deleteFromState = carrito.filter((p) => p.id !== id);
    setCarrito(deleteFromState);
  };

  const handleModalPay = () => {
    setShow(false);
    setShowPay(true);
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow} className="me-2">
        carrito {carrito.length}
      </Button>
      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Carrito</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {!carrito ? null : carrito.length === 0 ? (
            <p>No hay productos</p>
          ) : !carrito ? null : (
            carrito.map((producto) => (
              <div key={producto.id}>
                <img src={producto.imagen} alt="" />
                <h2>{producto.title}</h2>
                <p>{producto.price}</p>
                <p>Cantidad: {producto.cantidad}</p>
                <button
                  onClick={() => eliminarCarrito(producto.id)}
                  className="btn btn-primary"
                >
                  Eliminar del carrito
                </button>
              </div>
            ))
          )}
          {carrito.length < 1 ? null : (
            <button className="btn btn-secondary" onClick={handleModalPay}>
              Comprar
            </button>
          )}
        </Offcanvas.Body>
      </Offcanvas>
      <Modal show={showPay} backdrop="static" keyboard={false}>
        <Link to="/">X</Link>
        <Modal.Body>
          <button
            onClick={() => window.location.reload(true)}
            className="btn btn-secondary"
          >
            Seguir comprando
          </button>
        </Modal.Body>
      </Modal>
    </>
  );
};
