import Layout from "@/components/Layout";
import ProductForm from "@/components/ProductForm";
import { useState } from "react";
import { useRouter } from "next/router";

export default function NewProduct() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [goToProducts, setGoToProducts] = useState();
  const router = useRouter();
  async function createProduct(ev) {
    ev.preventDefault();
    const data = { title, description, price };
    await axios.post("/api/products", data);
    setGoToProducts(true);
  }
  if (goToProducts) {
    router.push("/products");
  }
  return (
    <Layout>
      <h1>New Product</h1>
      <ProductForm />
    </Layout>
  );
}
