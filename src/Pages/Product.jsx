import React from "react";
import { useParams } from "react-router-dom";
import { ProductDescription } from "../components/ProductDescription/ProductDescription";
import { Descriptionbox } from "../components/Descriptionbox/Descriptionbox";

import { useSelector } from "react-redux";
const Product = () => {
  const products = useSelector((state) => state.shop.products);
  const { productId } = useParams();

  const product = products?.find((e) => e.id === Number(productId));

  return (
    <div>
      <ProductDescription product={product} />
      <Descriptionbox />
    </div>
  );
};

export default Product;
