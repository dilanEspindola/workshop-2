import {useEffect , useState } from 'react'
import axios from 'axios'

const useGetData = (url) => {
  const [productos, setProductos] = useState([])
  const getData = async () => {
    const response = await axios.get(url)
    setProductos(response.data)
  }

  useEffect(() => {
    getData()
  },[])

  return productos
}

export default useGetData