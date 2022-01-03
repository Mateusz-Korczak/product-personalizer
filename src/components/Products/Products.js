import { useState } from 'react';
import productsData from '../../data/products';
import Product from '../Product/Product';
// import shortid from 'shortid';

const Products = () => {
  const [products] = useState(productsData);

  return (
    <section>
      {products.map((product, index) => {
        return <Product {...products[index]} key={product.id} />;
      })}
    </section>
  );
};

export default Products;
