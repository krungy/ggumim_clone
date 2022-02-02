import { Toggle, Tooltip } from '@components/base';
import styled from '@emotion/styled';

const ToggleTooltip = ({ info, on, ...props }) => {
  const convertPosition = {
    x: info.pointX * 1.6,
    y: info.pointY * 1.65,
    yPosition: (info.pointX * 1.6) / 998 >= 0.5 ? 'top' : 'bottom',
    xPosition: info.pointY > 250 ? 'rightEnd' : 'leftEnd',
  };

  return (
    <ToggleTooltipContainer
      x={convertPosition.x}
      y={convertPosition.y}
      {...props}
    >
      <Toggle id={info.productId} name={info.productName} on={on} />
      <Tooltip
        xPosition={convertPosition.xPosition}
        yPosition={convertPosition.yPosition}
        id={info.productId}
        src={info.imageUrl}
        title={info.productName}
        outside={info.outside}
        discount={`${info.discountRate}%`}
        price={info.priceDiscount.toLocaleString()}
        on={on}
      />
    </ToggleTooltipContainer>
  );
};

const ToggleTooltipContainer = styled.div`
  display: inline-block;
  position: absolute;
  left: ${({ y }) => y}px;
  top: ${({ x }) => x}px;
`;
export default ToggleTooltip;
