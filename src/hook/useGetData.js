import { useEffect, useState } from "react";
import axios from "axios";

const useGetData = () => {
  const [productos, setProductos] = useState([]);
  const getData = async () => {
    const response = await axios.get(
      "https://backend-workshop-2.herokuapp.com/productos"
    );
    setProductos(response.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return productos;
};

export default useGetData;
