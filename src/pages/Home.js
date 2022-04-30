import React, { useState, useEffect } from "react";
import { Navbar, Container, NavDropdown, Nav } from "react-bootstrap";
import { GetData } from "../services/data";
import { url } from "../utils/url";
import { ListaOfertas } from "../components/ListaOfertas";
import { ListaPopulares } from "../components/ListaPopulares";
import { Drawer } from "../components/Drawer";
import { useCarrito } from "../context/CartContext";

const Home = () => {
  const [data, setData] = useState(null);
  const { carrito } = useCarrito();

  useEffect(() => {
    GetData(url).then((res) => setData(res));
  }, []);

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Tienditas</Navbar.Brand>
          <Drawer />
        </Container>
      </Navbar>
      <ListaOfertas />
      <ListaPopulares />
    </div>
  );
};

export default Home;
