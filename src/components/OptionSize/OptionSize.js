import styles from '../Product/Product.module.scss';
import clsx from 'clsx';
const OptionSize = ({ sizes, setCurrentSize, currentSize }) => {
  return (
    <div className={styles.sizes}>
      <h3 className={styles.optionLabel}>Sizes</h3>
      <ul className={styles.choices}>
        {sizes.map((size, index) => {
          return (
            <li key={index}>
              <button
                type='button'
                className={clsx(size, size === currentSize && styles.active)}
                onClick={() => {
                  setCurrentSize(sizes[index]);
                }}
              >
                {size.name}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default OptionSize;
