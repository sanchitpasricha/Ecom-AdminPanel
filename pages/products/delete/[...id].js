import Layout from "@/components/Layout";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function DeleteProductPage() {
  const router = useRouter();
  const [productInfo, setProductInfo] = useState();
  const { id } = router.query;
  useEffect(() => {
    if (!id) {
      return;
    }
    axios.get("/api/products?id=" + id).then((res) => {
      setProductInfo(res.data);
    });
  }, [id]);
  function goBack() {
    router.push("/products");
  }
  return (
    <Layout>
      <h1>Do you really want to delete {productInfo?.title}?</h1>
      <button>Yes</button>
      <button onclick={goBack}>No</button>
    </Layout>
  );
}
