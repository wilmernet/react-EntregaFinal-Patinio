import { useState, useEffect } from "react";
import axios from "axios";
import CardUser from "../CardProduct/CardProduct";
import "./ListProducts.css";

import { Link } from "react-router-dom";

const ListProducts = ({cambioVista}) => {
  const [chars, setChars] = useState([]);

  useEffect(() => {
    console.log(`Cambio de vista recibido en LIstProduct ${cambioVista}`)
    axios("https://fakestoreapi.com/products").then((res) =>
      setChars(res.data)
    );
  }, []);  
  
  return (
    <div className={cambioVista==0?"Cards-List-Grilla":"Cards-List-Lista"}>
      {chars.map((char) => {
        return (
          <div style={{ margin: 10 }} key={char.id}>
            <Link to={`/detail/${char.id}`} style={{ textDecoration: "none" }}>
              <CardUser char={char} />
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default ListProducts;
