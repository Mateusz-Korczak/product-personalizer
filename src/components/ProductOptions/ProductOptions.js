import styles from '../Product/Product.module.scss';

import Button from '../Button/Button';
import OptionSize from '../OptionSize/OptionSize';
import OptionColor from '../OptionColor/OptionColor';

const ProductOptions = ({
  sizes,
  currentSize,
  colors,
  currentColor,
  title,
  setCurrentSize,
  setCurrentColor,
  getPrice,
}) => {
  const consoleOrderInfo = `  Summary
  ===========
  Name: ${title}
  Price: ${getPrice}
  Size: ${currentSize.name}
  Color: ${currentColor}
  `;

  return (
    <form>
      <OptionSize
        sizes={sizes}
        currentSize={currentSize}
        setCurrentSize={setCurrentSize}
      />
      <OptionColor
        colors={colors}
        currentColor={currentColor}
        setCurrentColor={setCurrentColor}
      />
      <Button
        className={styles.button}
        onClickHandler={(e) => {
          e.preventDefault();
          console.log(consoleOrderInfo);
        }}
      >
        <span className='fa fa-shopping-cart' />
      </Button>
    </form>
  );
};

export default ProductOptions;
