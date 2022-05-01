import { useState } from "react";
import { Button, Offcanvas, Modal } from "react-bootstrap";
import { useCarrito } from "../context/CartContext";
import { useDireccion } from "../context/direccionContext";

export const Drawer = () => {
  const [show, setShow] = useState(false);
  const [showPay, setShowPay] = useState(false);
  const { carrito, setCarrito } = useCarrito();

  const { data } = useDireccion()

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
      <Button onClick={handleShow}
        style={{
          width: '90px',
          backgroundColor: '#0AC763',
          outline: 'none',
        }}
      >
        <i className="fa-solid fa-cart-shopping icon-cart mr-2"></i>
        <span className="ml-4">{carrito.length}</span>
      </Button>

      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            Entregar en: <span>{ data }</span>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body style={{ padding: 0 }}>
          {!carrito ? null : carrito.length === 0 ? (
            <div
              style={{
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <img
                src="https://res.cloudinary.com/dz8on44po/image/upload/v1651370798/R2S2/pezvb5pjnzw25s8gvmnj.png"
                style={{ width: "300px" }}
              />
            </div>
          ) : !carrito ? null : (
            carrito.map((producto) => (
              <div key={producto.id}
                style={{
                  width: "100%",
                  display: "flex",
                  flexFlow: "row nowrap",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "24px 12px",
                  borderBottom: "1px solid #E5E5E5",
                  backgroundColor: "transparent",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexFlow: "row nowrap",
                    alignItems: "center",
                  }}
                >
                  <img
                    src={producto.imagen}
                    alt=""
                    style={{
                      width: "64px",
                      height: "64px",
                      objectFit: "cover",
                      marginRight: "16px",
                    }}
                  />

                  <div>
                    <p
                      style={{
                        margin: "0",
                        fontSize: "14px",
                        fontWeight: "400",
                      }}
                    >
                    {producto.title}
                  </p>

                    <p
                      style={{
                        margin: "0",
                        fontSize: "14px",
                        fontWeight: "400",
                      }}
                    >
                      Cantidad: {producto.cantidad}
                    </p>

                    <p
                      style={{
                        margin: "0",
                        fontSize: "16px",
                        fontWeight: "600",
                      }}
                    >
                      ${producto.price}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => eliminarCarrito(producto.id)}
                  className="btn btn-primary"
                >
                  Eliminar
                </button>
              </div>
            ))
          )}
          {carrito.length < 1 ? null : (
            <button
              className="btn btn-secondary"
              onClick={handleModalPay}
              style={{
                position: "absolute",
                bottom: "24px",
                width: "100%",
                height: "40px",
                borderRadius: "8px",
                backgroundColor: "#0AC763",
                color: "white",
                outline: "none",
              }}
            >
              Comprar
            </button>
          )}
        </Offcanvas.Body>

      </Offcanvas>
      <Modal
        show={showPay}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Body
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            width: "500px",
            height: "500px",
          }}
        >
          <img
            src="https://res.cloudinary.com/dz8on44po/image/upload/v1651376765/R2S2/kjmu3qdmiwh7i3jcsjhq.svg"
            alt="Ilustración de dinero"
            style={{
              width: "400px",
              objectFit: "cover",
            }}
          />

          <button
            onClick={() => window.location.reload(true)}
            className="btn btn-secondary"
            style={{
                position: "absolute",
                bottom: "24px",
                height: "40px",
                borderRadius: "8px",
                backgroundColor: "#0AC763",
                color: "white",
                outline: "none",
              }}
          >
            Seguir comprando
          </button>
        </Modal.Body>
      </Modal>
    </>
  );
};
