import React from 'react';
import product from './product';

const ProductImage = () => {
  return <img src={product.image} alt={product.name} className="img-fluid" />;
};

export default ProductImage;
