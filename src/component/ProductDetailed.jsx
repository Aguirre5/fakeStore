import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function ProductDetailed() {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProducto(data))
      .catch((err) => console.error("Flop Error conmuted to detailed makeu up", err));
  }, [id]);

  if (!producto) return <p>Loading ways to slay...</p>;

  return (
    <div className="detalle-container">
      <Link to="/">← Product's list</Link>
      <h2>{producto.title}</h2>
      <img
        src={producto.image}
        alt={producto.title}
        style={{ width: "200px", height: "200px", objectFit: "contain" }}
      />
      <p><b>Flop Price:</b> ${producto.price}</p>
      <p><b>Category:</b> {producto.category}</p>
      <p><b>Description:</b> {producto.description}</p>
      <p><b>Give me 5 stars girl:</b> ⭐ {producto.rating.rate} ({producto.rating.count} give me reviews biotch.)</p>
    </div>
  );
}

export default function ProductDetailed() {
  return <h2>Detalle del producto</h2>;
}
