"use client";
import products from "@/data/products";
import Product from "./Product";

export default function PlatinamProduct() {
  return (
    <Product
      title="Produtos em Destaque"
      showTabs={false}
      showSlider={true}
      products={products.slice(0, 6)}
      className="platinam-product"
    />
  );
}
