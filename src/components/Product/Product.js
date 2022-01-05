import styles from './Product.module.scss';
import ProductImage from '../ProductImage/ProductImage';
import propTypes from 'prop-types';
import { useState } from 'react';
import ProductOptions from '../ProductOptions/ProductOptions';
const Product = ({ title, basePrice, colors, sizes, name }) => {
  const [currentColor, setCurrentColor] = useState(colors[0]);
  const [currentSize, setCurrentSize] = useState(sizes[0]);

  const getPrice = () => {
    return (
      basePrice +
      sizes.find((element) => element === currentSize).additionalPrice
    );
  };

  return (
    <article className={styles.product}>
      <div className={styles.imageContainer}>
        <ProductImage title={title} name={name} currentColor={currentColor} />
      </div>
      <div>
        <header>
          <h2 className={styles.name}>{title}</h2>
          <span className={styles.price}>Price: {getPrice()}$</span>
        </header>
        <ProductOptions
          currentColor={currentColor}
          currentSize={currentSize}
          colors={colors}
          sizes={sizes}
          setCurrentColor={setCurrentColor}
          setCurrentSize={setCurrentSize}
          title={title}
          getPrice={getPrice}
        />
      </div>
    </article>
  );
};
Product.propTypes = {
  title: propTypes.string.isRequired,
};
export default Product;
