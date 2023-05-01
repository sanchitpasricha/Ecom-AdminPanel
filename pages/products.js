/* eslint-disable react-hooks/rules-of-hooks */
import Layout from "@/components/Layout";
import axios from "axios";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function products() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get("/api/products").then((response) => {
      setProducts(response.data);
    });
  }, []);

  return (
    <Layout>
      <Link
        className="bg-blue-900 text-white p-2 rounded-lg"
        href="/products/new"
      >
        Add new product
      </Link>
      <table className="basic mt-4">
        <thead>
          <tr>
            <td>Product Name</td>
            <td>Description</td>
            <td>Price</td>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.title}</td>
              <td>{product.description}</td>
              <td>{product.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Layout>
  );
}
