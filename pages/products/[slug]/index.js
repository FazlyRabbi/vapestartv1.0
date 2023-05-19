import Footer from "@/components/Footer";
import Header from "@/components/HomePage/Header";
import ProductDescription from "@/components/SingleProduct/ProductDescription";
import ProductPrimaryDetails from "@/components/SingleProduct/ProductPrimaryDetails";
import RelatedProducts from "@/components/SingleProduct/RelatedProducts";
import ShopLayout from "@/components/ShopPage/Layout/Layout";
import { useRouter } from "next/router";
import { ProductsContext } from "@/context/productsContext";
import { useState, useContext, useEffect } from "react";

import http from "utils/api";

export default function SingleProduct({ params }) {
  const { productsQuery } = useContext(ProductsContext);
  const { data, isLoading, isError } = productsQuery;

  const [singleProduct, setSingleProduct] = useState(null);

  useEffect(() => {
    if (data) {
      const filteredProduct = data?.find(
        (product) => product.slug === params.slug
      );
      setSingleProduct(filteredProduct);
    }
  }, [data]);

  return (
    <section>
      <Header />
      <ShopLayout>
        {singleProduct && <ProductPrimaryDetails data={singleProduct} />}
        {singleProduct && <ProductDescription data={singleProduct} />}
        <RelatedProducts className="md:mt-4" />
      </ShopLayout>
      <Footer />
    </section>
  );
}

export async function getStaticProps({ params }) {
  return {
    props: { params },
    revalidate: 5,
  };
}

export async function getStaticPaths() {
  const res = await fetch(`https://vape-star.vercel.app/api/product`);

  const products = await res.json();

  return {
    paths: products?.data?.map((product) => {
      return {
        params: {
          slug: product.slug,
        },
      };
    }),

    fallback: true,
  };
}
