import styles from '../Product/Product.module.scss';

const ProductImage = ({ title, name, currentColor }) => {
  return (
    <img
      className={styles.image}
      alt={title}
      src={`${process.env.PUBLIC_URL}/images/products/shirt-${name}--${currentColor}.jpg`}
    />
  );
};

export default ProductImage;
