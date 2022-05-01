import {
  Modal,
  Button,
  Form,
  ButtonToolbar,
  ButtonGroup,
} from "react-bootstrap";
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { filterOfertas } from "../utils/filtraOfertas";
import { useDireccion } from "../context/direccionContext";
import { useCarrito } from "../context/CartContext";
import { GetData } from "../services/data";
import { url } from "../utils/url";

export const ProductoId = () => {
  const [dataId, setDataId] = useState(null);
  const { id } = useParams();
  const { data } = useDireccion();
  const [show, setShow] = useState(false);
  const [select, setSelect] = useState();
  const [filtrador, setFiltrador] = useState(null);
  const { contador, setContador, carrito, setCarrito } = useCarrito();
  const navigate = useNavigate();

  useEffect(() => {
    GetData(url).then((res) => setDataId(res));
  }, []);

  useEffect(() => {
    setShow(true);
  }, []);

  useEffect(() => {
    filterOfertas().then((res) => setFiltrador(res));
  }, []);

  const añadir = () => {
    setContador(contador + 1);
  };

  const menos = () => {
    if (contador > 1) setContador(contador - 1);
  };

  const cambiarSelect = (e) => {
    setSelect(e.target.value);
  };

  const addCart = ({ ...data }) => {
    setContador(0);
    setCarrito([
      ...carrito,
      {
        cantidad: contador,
        id: data.id,
        title: data.title,
        price: data.price,
        imagen: data.imagen,
        entregar: select,
      },
    ]);
    navigate("/");
  };

  if (!dataId) return null;

  const findData = dataId.find((producto) => producto.id === Number(id));

  return (
    <div>
      <Modal show={show} backdrop="static" keyboard={false} fullscreen>
        <main
          style={{
            width: "100%",
            height: "100%",
            padding: "30px",
            overflowY: "scroll",
          }}
        >
          <Link
            to="/"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              textDecoration: "none",
              backgroundColor: "#0008",
              fontSize: "20px",
              color: "#fff",
              float: "right",
            }}
          >
            X
          </Link>
          <div
            style={{
              display: "flex",
              flexFlow: "row nowrap",
              alignItems: "center",
              justifyContent: "flex-start",
            }}
          >
            <div
              style={{
                width: "50%",
                marginRight: "40px",
              }}
            >
              <img src={findData.images} alt="" />
            </div>

            <div
              style={{
                width: "50%",
              }}
            >
              <h2
                style={{
                  fontSize: "28px",
                  fontWeight: "600",
                  marginBottom: "16px",
                }}
              >
                {findData.title}
              </h2>

              <p
                style={{
                  fontSize: "28px",
                  fontWeight: "600",
                  marginBottom: "16px",
                }}
              >
                ${findData.price}
              </p>

              <p
                style={{
                  fontSize: "14px",
                  fontWeight: "400",
                  marginBottom: "50px",
                }}
              >
                Precio con IVA incluido
              </p>

              <label
                style={{
                  fontSize: "16px",
                  fontWeight: "700",
                  marginBottom: "12px",
                }}
              >
                Selecciona el rango de entrega
              </label>
              <Form.Select
                onChange={cambiarSelect}
                style={{
                  height: "50px",
                }}
              >
                <option>Por elegir</option>
                <option value="para hoy 3-5 dias<">para hoy 3-5 dias</option>
                <option value="2 dias">2 dias</option>
                <option value="3 dias">3 dias</option>
              </Form.Select>

              <div
                style={{
                  width: "100%",
                  display: "flex",
                  flexFlow: "row nowrap",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginTop: "20px",
                }}
              >
                <ButtonToolbar
                  aria-label="Toolbar with button groups"
                  style={{
                    width: "50%",
                    height: "auto",
                  }}
                >
                  <ButtonGroup
                    className="me-2"
                    aria-label="First group"
                    style={{ width: "100%" }}
                  >
                    <Button onClick={menos}> - </Button>
                    <section style={{ width: "100%", textAlign: "center" }}>
                      <p style={{ marginBottom: 0 }}>{contador}</p>{" "}
                    </section>
                    <Button onClick={añadir}>+</Button>
                  </ButtonGroup>
                </ButtonToolbar>

                <Button
                  variant="primary"
                  style={{
                    backgroundColor: "#0AC763",
                    outline: "none",
                    borderRadius: "8px",
                    width: "50%",
                  }}
                  onClick={() =>
                    addCart({
                      id: findData.id,
                      title: findData.title,
                      imagen: findData.images,
                      price: findData.price,
                    })
                  }
                >
                  Enviar al carrito
                </Button>
              </div>
            </div>
          </div>

          <div
            style={{
              width: "100%",
              display: "flex",
              flexFlow: "row nowrap",
              overflowX: "scroll",
              gap: "40px",
              scrollbarWidth: "none",
              marginTop: "40px",
            }}
          >
            {filtrador &&
              filtrador.map((ofertas) => (
                <aside
                  style={{ width: "192px", height: "420px" }}
                  key={ofertas.id}
                >
                  <img
                    src={ofertas.images}
                    alt=""
                    style={{
                      width: "192px",
                      height: "192px",
                      objectFit: "cover",
                    }}
                  />

                  <div
                    style={{
                      display: "flex",
                      flexFlow: "column nowrap",
                      justifyContent: "space-between",
                      height: "210px",
                      width: "192px",
                      marginTop: "16px",
                    }}
                  >
                    <div>
                      <p className="mb-2 text-base font-bold">
                        ${ofertas.title}
                      </p>
                      <p className="text-base font-regular">{ofertas.title}</p>
                    </div>

                    <button
                      style={{
                        width: "100%",
                        height: "40px",
                        borderRadius: "8px",
                        backgroundColor: "#0AC763",
                        color: "white",
                        outline: "none",
                      }}
                    >
                      Agregar
                    </button>
                  </div>
                </aside>
              ))}
          </div>
        </main>
      </Modal>
    </div>
  );
};
