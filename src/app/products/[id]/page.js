'use client';

import ProductDetailPage from "@/components/products/productDetail";
import React from "react";

export default function ProductDetailWrapper({ params }) {
  const { id } = React.use(params)

  return <ProductDetailPage params={{ id }} />;
}