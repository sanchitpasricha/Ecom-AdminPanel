/* eslint-disable react-hooks/rules-of-hooks */
import Layout from "@/components/Layout";
import axios from "axios";
import Link from "next/link";
import { useEffect } from "react";

export default function products() {
  useEffect(() => {
    axios.get("/api/products").then((response) => {
      console.log(response.data);
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
    </Layout>
  );
}
