import styled from '@emotion/styled';
import pointImage from '@assets/image/tooltip.png';
import { Image } from '@components/base';
import next from '@assets/image/next.png';
import PropTypes from 'prop-types';

const Tooltip = ({
  position,
  src,
  title,
  discount,
  price,
  visible,
  ...props
}) => {
  const discountStyle = {
    color: '#ff585d',
  };

  const stocklessStyle = {
    fontSize: 11,
    color: '#898f94',
  };

  return (
    <TooltipContainer position={position} visible={visible} {...props}>
      <ContentContainer>
        <Image src={src} width="70px" height="70px" radius="4px" />
        <InfoContainer>
          <Title>{title}</Title>
          <PriceInfo>
            {discount ? (
              <span style={{ ...discountStyle }}>{discount}</span>
            ) : (
              <span style={{ ...stocklessStyle }}>예상가</span>
            )}
            {price}
          </PriceInfo>
        </InfoContainer>
        <Image
          src={next}
          width={20}
          height={20}
          style={{ marginTop: 50 }}
        ></Image>
      </ContentContainer>
    </TooltipContainer>
  );
};

Tooltip.propTypes = {
  position: PropTypes.oneOf(['top', 'bottom']),
  src: PropTypes.string,
  title: PropTypes.string,
  discount: PropTypes.string,
  price: PropTypes.string,
  visible: PropTypes.bool,
};

Tooltip.defaultProps = {
  position: 'bottom',
  src: '',
  title: 'title',
  discount: '',
  price: 'price',
  visible: true,
};

const TooltipContainer = styled.div`
  display: ${({ visible }) => (visible ? 'flex' : 'none')};
  width: 220px;
  height: 86px;
  z-index: 1000;
  position: absolute;
  padding: 8px;
  border-radius: 7px;
  box-shadow: 3px 3px 8px 0 rgb(0 0 0 / 20%);
  font-size: 14px;
  background-color: #fff;
  cursor: pointer;
  box-sizing: border-box;

  &::before {
    content: '';
    position: absolute;
    top: ${({ position }) => (position === 'bottom' ? '-8px' : 'unset')};
    left: 95px;
    bottom: -8px;
    transform: ${({ position }) => position === 'top' && `rotate(180deg)`};
    width: 12px;
    height: 8px;
    background-image: url(${pointImage});
    background-size: cover;
    background-repeat: no-repeat;
    z-index: 1100;
  }
`;

const ContentContainer = styled.div`
  display: flex;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 8px;
`;

const Title = styled.div`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  overflow: hidden;
  line-height: 1.3em;
  display: border-box;
  font-size: 14px;
  width: 112px;
`;

const PriceInfo = styled.div`
  line-height: '1.2em';
  font-size: 16px;
  font-weight: 700;
  > span {
    margin-right: 6px;
  }
`;
export default Tooltip;
