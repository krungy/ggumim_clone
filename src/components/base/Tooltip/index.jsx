import styled from '@emotion/styled';
import pointImage from '@assets/image/tooltip.png';
import { Image } from '@components/base';
import next from '@assets/image/next.png';
import PropTypes from 'prop-types';
import color from '@assets/colors';

const Tooltip = ({
  horizontalPosition,
  verticalPosition,
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
    color: color.red,
  };

  const stocklessStyle = {
    fontSize: 11,
    color: color.grey,
  };

  return (
    <TooltipContainer
      data-id={id}
      horizontalPosition={horizontalPosition}
      verticalPosition={verticalPosition}
      visible={on}
      {...props}
    >
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
  horizontalPosition: PropTypes.oneOf(['rightEnd', 'leftEnd']),
  verticalPosition: PropTypes.oneOf(['top', 'bottom']),
  id: PropTypes.number,
  src: PropTypes.string,
  title: PropTypes.string,
  outside: PropTypes.bool,
  discount: PropTypes.string,
  price: PropTypes.string,
  on: PropTypes.bool,
};

Tooltip.defaultProps = {
  horizontalPosition: 'leftEnd',
  verticalPosition: 'bottom',
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
  background-color: ${color.white};
  cursor: pointer;
  box-sizing: border-box;
  left: ${({ horizontalPosition }) =>
    horizontalPosition === 'rightEnd' ? '-160px' : '-30px'};
  top: ${({ verticalPosition }) =>
    verticalPosition === 'bottom' ? '38px' : '-96px'};

  &::before {
    content: '';
    position: absolute;
    top: ${({ verticalPosition }) =>
      verticalPosition === 'bottom' ? '-8px' : 'unset'};
    left: ${({ horizontalPosition }) =>
      horizontalPosition === 'rightEnd' ? '170px' : '40px'};
    bottom: -8px;
    transform: ${({ verticalPosition }) =>
      verticalPosition === 'top' && `rotate(180deg)`};
    width: 12px;
    height: 8px;
    background-image: url(${pointImage});
    background-size: cover;
    background-repeat: no-repeat;
    z-index: 1100;
  }
`;

const ContentContainer = styled.span`
  display: flex;
  pointer-events: none;
`;

const InfoContainer = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 8px;
`;

const Title = styled.span`
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
  line-height: '1.2em';
  font-size: 16px;
  font-weight: 700;
  > span {
    margin-right: 6px;
  }
`;
export default Tooltip;
