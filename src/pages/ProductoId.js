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
        <Link to="/">X</Link>
        <Modal.Body>
          <img src={findData.images} alt="" />
          <h2>{findData.title}</h2>
          <p> $ {findData.price}</p>
          <label htmlFor="">Selecciona el rango de entrega</label>
          <Form.Select onChange={cambiarSelect}>
            <option>Open this select menu</option>
            <option value="para hoy 3-5 dias<">para hoy 3-5 dias</option>
            <option value="2 dias">2 dias</option>
            <option value="3 dias">3 dias</option>
          </Form.Select>
          <ButtonToolbar aria-label="Toolbar with button groups">
            <ButtonGroup className="me-2" aria-label="First group">
              <Button onClick={menos}> - </Button> <span>{contador}</span>{" "}
              <Button onClick={añadir}>+</Button>
            </ButtonGroup>
          </ButtonToolbar>
          <h1>Otras ofertas</h1>
          {filtrador &&
            filtrador.map((ofertas) => (
              <div key={ofertas.id}>
                <img src={ofertas.images} />
                <h1>{ofertas.title}</h1>
                <p>{ofertas.price}</p>
              </div>
            ))}
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="primary"
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
        </Modal.Footer>
      </Modal>
    </div>
  );
};
