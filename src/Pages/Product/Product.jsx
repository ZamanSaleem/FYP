import React, { useContext } from 'react';
import { ShopContext } from '../../Context/ShopContext.jsx';
import { useParams } from 'react-router-dom';
import Breadcrum from '../../components/Breadcrums/Breadcrum';
import { ProductDescription } from '../../components/ProductDescription/ProductDescription';
import { Descriptionbox } from '../../components/Descriptionbox/Descriptionbox';

const Product = () => {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();
  const product = all_product.find((e) => e.id === Number(productId)); 

  

  return (
    <div>
      <Breadcrum product={product} />
      <ProductDescription product={product} />
      <Descriptionbox />
    </div>
  );
};

export default Product;
