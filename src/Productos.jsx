import { useState, useEffect } from "react";
import "./Productos.css";
import { Link } from "react-router-dom";

export default function Productos() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProductos(data))
      .catch((error) => console.error("Flop Error product:", error));
  }, []);

  return (
    <div className="productos-container">
      <h2 className="productos-title">Jiafei Products</h2>
      <div className="productos-grid">
        {productos.map((producto) => (
          <div key={producto.id} className="producto">
            <img src={producto.image} alt={producto.title} />
            <h3>{producto.title}</h3>
            <p className="categoria">SlayCategory: {producto.category}</p>
            <p className="precio">${producto.price}</p>
            <p className="rating">
              ⭐ {producto.rating.rate} ({producto.rating.count} give me reviews biotch.)
            </p>

            <Link to={`/producto/${producto.id}`} className="detalle-btn">
              Make up of the product
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
