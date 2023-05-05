import Layout from "@/components/Layout";
import { useRouter } from "next/router";
import { useEffect } from "react";
import axios from "axios";
import ProductForm from "@/components/ProductForm";

export default function EditProductPage() {
  const router = useRouter();
  const { id } = router.query;
  useEffect(() => {
    if (!id) {
      return;
    }
    axios.get("/api/products?id=" + id).then((response) => {
      console.log(response.data);
    });
  }, [id]);
  console.log(router);
  return (
    <Layout>
      <ProductForm />
      Edit product form here
    </Layout>
  );
}
