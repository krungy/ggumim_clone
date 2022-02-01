import styled from '@emotion/styled';
import pointImage from '@assets/image/tooltip.png';
import { Image } from '@components/base';
import next from '@assets/image/next.png';
import PropTypes from 'prop-types';

const Tooltip = ({
  position,
  id,
  src,
  title,
  outside,
  discount,
  price,
  on,
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
    <TooltipContainer data-id={id} position={position} visible={on} {...props}>
      <ContentContainer>
        <Image src={src} width="70px" height="70px" radius="4px" />
        <InfoContainer>
          <Title>{title}</Title>
          <PriceInfo>
            {outside ? (
              <span style={{ ...stocklessStyle }}>예상가</span>
            ) : (
              <span style={{ ...discountStyle }}>{discount}</span>
            )}
            {price}
          </PriceInfo>
        </InfoContainer>
        <Image
          src={next}
          alt={title}
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
  id: PropTypes.number,
  src: PropTypes.string,
  title: PropTypes.string,
  outside: PropTypes.bool,
  discount: PropTypes.string,
  price: PropTypes.string,
  on: PropTypes.bool,
};

Tooltip.defaultProps = {
  position: 'bottom',
  id: null,
  src: '',
  title: 'title',
  outside: false,
  discount: '0',
  price: '0',
  on: false,
};

const TooltipContainer = styled.span`
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
  left: -85px;
  top: ${({ position }) => (position === 'bottom' ? '38px' : '-96px')};

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

const ContentContainer = styled.span`
  pointer-events: none;
  display: flex;
`;

const InfoContainer = styled.span`
  pointer-events: none;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 8px;
`;

const Title = styled.span`
  pointer-events: none;
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

const PriceInfo = styled.span`
  pointer-events: none;
  line-height: '1.2em';
  font-size: 16px;
  font-weight: 700;
  > span {
    margin-right: 6px;
  }
`;
export default Tooltip;
