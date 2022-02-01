import { Toggle, Tooltip } from '@components/base';
import styled from '@emotion/styled';
import useToggle from '@hooks/useToggle';

const ToggleTooltip = ({ info, on, ...props }) => {
  const [checked, toggle] = useToggle(on);

  const convertPosition = {
    x: info.pointX * 1.6,
    y: info.pointY * 1.65,
    position: (info.pointX * 1.6) / 998 >= 0.5 ? 'top' : 'bottom',
  };

  return (
    <ToggleTooltipContainer
      id={info.productId}
      x={convertPosition.x}
      y={convertPosition.y}
      onChange={() => toggle()}
      {...props}
    >
      <Toggle name={info.productName} on={on} />
      <Tooltip
        position={convertPosition.position}
        src={info.imageUrl}
        title={info.productName}
        outside={info.outside}
        discount={`${info.discountRate}%`}
        price={info.priceDiscount.toLocaleString()}
        visible={checked}
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
