import styles from './Product.module.scss';
import clsx from 'clsx';
import Button from '../Button/Button';
import propTypes from 'prop-types';
import { useState } from 'react';
import shortid from 'shortid';
const Product = ({ title, basePrice, colors, sizes, name, id }) => {
  const [currentColor, setCurrentColor] = useState(colors[0]);
  const [currentSize, setCurrentSize] = useState(sizes[0].name);

  const prepareColorClassName = (color) => {
    return styles[
      'color' + color[0].toUpperCase() + color.substr(1).toLowerCase()
    ];
  };

  return (
    <article className={styles.product}>
      <div className={styles.imageContainer}>
        <img
          className={styles.image}
          alt={title}
          src={`${process.env.PUBLIC_URL}/images/products/shirt-${name}--${currentColor}.jpg`}
        />
      </div>
      <div>
        <header>
          <h2 className={styles.name}>{title}</h2>
          <span className={styles.price}>{basePrice}$</span>
        </header>
        <form>
          <div className={styles.sizes}>
            <h3 className={styles.optionLabel}>Sizes</h3>
            <ul className={styles.choices}>
              {sizes.map((size, index) => {
                return (
                  <li key={index}>
                    <button
                      type='button'
                      key={shortid.generate}
                      className={size === sizes[0] && styles.active}
                    >
                      {size.name}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className={styles.colors}>
            <h3 className={styles.optionLabel}>Colors</h3>
            <ul className={styles.choices}>
              {colors.map((item) => (
                <li key={item}>
                  <button
                    type='button'
                    className={clsx(
                      prepareColorClassName(item),
                      item === colors[0] && styles.active
                    )}
                  />
                </li>
              ))}
            </ul>
          </div>
          <Button className={styles.button}>
            <span className='fa fa-shopping-cart' />
          </Button>
        </form>
      </div>
    </article>
  );
};
Product.propTypes = {
  title: propTypes.string.isRequired,
};
export default Product;
