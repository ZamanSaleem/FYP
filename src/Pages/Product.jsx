import React from "react";
import { useParams } from "react-router-dom";
import { ProductDescription } from "../components/ProductDescription/ProductDescription";

import { useSelector } from "react-redux";
const Product = () => {
  const products = useSelector((state) => state.shop.products);
  const { productId } = useParams();

  const product = products?.find((e) => e.id === Number(productId));

  return (
    <div>
      <ProductDescription product={product} />
    </div>
  );
};

export default Product;
