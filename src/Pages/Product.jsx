import React, { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import { useParams } from 'react-router-dom';
import Breadcrum from '../Components/Breadcrums/Breadcrum';

function Product() {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams(); // Fix: Added function call
  const product = all_product.find((e) => e.id === Number(productId));

  return (
    <div>
      <Breadcrum product={product} />
      {/* Render other product details as needed */}
    </div>
  );
}

export default Product;
