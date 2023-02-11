import { Link } from "react-router-dom";

const PRODUCTS = [
  {
    id: "p1",
    title: "product1",
  },
  {
    id: "p2",
    title: "product2",
  },
  {
    id: "p3",
    title: "product3",
  },
  {
    id: "p4",
    title: "product4",
  },
];

function ProductsPage() {
  return (
    <>
      <h1>Products Page</h1>
      <ul>
        {PRODUCTS.map((prod) => (
          <li key={prod.id}>
            <Link to={prod.id}>{prod.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default ProductsPage;
