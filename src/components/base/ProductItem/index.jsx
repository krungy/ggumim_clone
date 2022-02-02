import styled from '@emotion/styled';
import { Image } from '@components/base';
import discountBadge from '@assets/image/discountBadge.png';
import { PropTypes } from 'prop-types';

const ProductItem = ({ src, on, discount, size, ...props }) => {
  const itemStyle = {
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
      style={{ ...itemStyle, ...props.style }}
      {...props}
    >
      <ImageContainer>
        <Image src={src} alt="productImage" />
        {discount !== 0 && handleDiscount()}
      </ImageContainer>
    </ProductItemContainer>
  );
};

ProductItem.propTypes = {
  src: PropTypes.string,
  on: PropTypes.bool,
  discount: PropTypes.number,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ProductItem.defaultProps = {
  src: '',
  on: false,
  discount: 0,
  size: 110,
};

const ProductItemContainer = styled.div`
  background: ${({ selected }) =>
    selected
      ? `linear-gradient(163.54deg, #ff659e 8.22%, #f56b30 94.1%)`
      : '#fff'};
  padding: 2px;
  box-sizing: border-box;
  border-radius: 18px;
  > div {
    border: ${({ selected }) => selected && '0.5px solid white'};
  }
`;

const ImageContainer = styled.div`
  position: relative;
  width: 106px;
  height: 106px;
  border: 0.5px solid #aaafb9;
  border-radius: 16px;
  user-select: none;
  cursor: pointer;
  overflow: hidden;
  box-sizing: border-box;
`;

const BadgeContainer = styled.div`
  position: absolute;
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
    color: #fff;
    font-weight: 700;
    line-height: 25px;
    text-align: center;
  }
`;

export default ProductItem;
