import Layout from "@/components/Layout";
import Link from "next/link";

export default function products() {
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
