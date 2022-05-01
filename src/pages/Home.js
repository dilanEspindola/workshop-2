// Base
import React, { useState, useEffect } from "react";

// Components
import { ListaOfertas } from "../components/ListaOfertas";
import { ListaPopulares } from "../components/ListaPopulares";
import { Drawer } from "../components/Drawer";

// React Bootstrap
import { Navbar, Container} from "react-bootstrap";

// Services
import { GetData } from "../services/data";
import { useDireccion } from "../context/direccionContext";

// Utils
import { url } from "../utils/url";

const Home = () => {
  const [dataa, setData] = useState(null);

  const { data } = useDireccion()

  useEffect(() => {
    GetData(url).then((res) => setData(res));
  }, []);

  return (
    <div className="w-screen h-screen">
      <Navbar className="bg-white">
        <Container style={{ width:'100%',  margin: '0 auto'}}>
          <Navbar.Brand
            style={{
              color: '#FC462D',
              fontWeight: 'bold',
              fontStyle: 'italic '
            }}>
            Tienditas
          </Navbar.Brand>

          <div className="flex flex-row items-center">
            <p className="mb-0 font-bold">{data}</p>
            <span className="mx-4 text-zinc-400">|</span>
            <Drawer />
          </div>
        </Container>
      </Navbar>

      <main className="w-full p-10 bg-slate-100">
        <section className="w-full">
          <img
            src="https://res.cloudinary.com/dz8on44po/image/upload/v1651370927/R2S2/jtbzmheloma3o73a9vjm.svg"
            alt="Tienditas Banner"
            style={{ width: "100%" }}
          />
        </section>

        <section className="w-full p-10 bg-white rounded-xl my-10">
          <h2 class="text-xl font-semibold mb-10">Ofertas</h2>
          <ListaOfertas />
        </section>

        <section className="p-10 bg-white rounded-xl">
          <h2 class="text-xl font-semibold mb-10">Los más populares</h2>
          <ListaPopulares />
        </section>
        </main>
    </div>
  );
};

export default Home;
