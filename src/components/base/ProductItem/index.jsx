import styled from '@emotion/styled';
import { Image } from '@components/base';
import discountBadge from '@assets/image/discountBadge.png';
import { PropTypes } from 'prop-types';
import color from '@assets/colors';

const ProductItem = ({ src, productId, on, discount, size, ...props }) => {
  const imageStyle = {
    width: size - 4,
    height: size - 4,
  };
  const containerStyle = {
    width: size,
    height: size,
  };

  const discountPosition = discount < 10 ? 'center' : 'default';

  const handleDiscount = () => (
    <BadgeContainer discountPosition={discountPosition}>
      <Image src={discountBadge} alt="discountBadge" />
      <span>{discount}%</span>
    </BadgeContainer>
  );

  return (
    <ProductItemContainer
      selected={on}
      data-id={productId}
      style={{ ...containerStyle, ...props.style }}
      {...props}
    >
      <ImageContainer style={{ ...imageStyle, ...props.style }}>
        <Image src={src} alt="productImage" width={size} height={size} />
        {discount !== 0 && handleDiscount()}
      </ImageContainer>
    </ProductItemContainer>
  );
};

ProductItem.propTypes = {
  src: PropTypes.string,
  productId: PropTypes.number,
  on: PropTypes.bool,
  discount: PropTypes.number,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ProductItem.defaultProps = {
  src: '',
  productId: 0,
  on: false,
  discount: 0,
  size: 110,
};

const ProductItemContainer = styled.div`
  background: ${({ selected }) =>
    selected
      ? `linear-gradient(163.54deg, #ff659e 8.22%, #f56b30 94.1%)`
      : '#fff'};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2px;
  box-sizing: border-box;
  border-radius: 18px;
  cursor: pointer;
  user-select: none;
  > div {
    border: ${({ selected }) => selected && '0.5px solid white'};
  }
`;

const ImageContainer = styled.div`
  position: relative;
  border: 0.5px solid ${color.border};
  border-radius: 16px;
  overflow: hidden;
  box-sizing: border-box;
  pointer-events: none;
`;

const BadgeContainer = styled.div`
  position: absolute;
  pointer-events: none;
  width: 24px;
  height: 28px;
  top: 0;
  right: 6px;
  > span {
    position: absolute;
    top: 0;
    right: ${({ discountPosition }) =>
      discountPosition === 'center' ? '4px' : '1px'};
    font-size: 11px;
    color: ${color.white};
    font-weight: 700;
    line-height: 25px;
    text-align: center;
  }
`;

export default ProductItem;
