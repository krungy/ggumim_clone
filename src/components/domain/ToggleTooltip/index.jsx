import { Toggle, Tooltip } from '@components/base';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const ToggleTooltip = ({ contentObject, ratioSize, on, ...props }) => {
  const convertPosition = {
    x: (contentObject.pointX * 1.6) / ratioSize.widthRatio,
    y: (contentObject.pointY * 1.65) / ratioSize.heightRatio,
    horizontalPosition: contentObject.pointY > 250 ? 'rightEnd' : 'leftEnd',
    verticalPosition:
      (contentObject.pointX * 1.6) / 998 >= 0.5 ? 'top' : 'bottom',
  };

  return (
    <ToggleTooltipContainer
      x={convertPosition.x}
      y={convertPosition.y}
      {...props}
    >
      <Toggle
        id={contentObject.productId}
        name={contentObject.productName}
        on={on}
      />
      <Tooltip
        horizontalPosition={convertPosition.horizontalPosition}
        verticalPosition={convertPosition.verticalPosition}
        id={contentObject.productId}
        src={contentObject.imageUrl}
        title={contentObject.productName}
        outside={contentObject.outside}
        discount={`${contentObject.discountRate}%`}
        price={contentObject.priceDiscount.toLocaleString()}
        on={on}
      />
    </ToggleTooltipContainer>
  );
};

ToggleTooltip.propTypes = {
  contentObject: PropTypes.object,
  ratioSize: PropTypes.object,
  on: PropTypes.bool,
};

ToggleTooltip.defaultProps = {
  contentList: {},
  ratioSize: {},
  on: false,
};

const ToggleTooltipContainer = styled.div`
  display: inline-block;
  position: absolute;
  left: ${({ y }) => y}px;
  top: ${({ x }) => x}px;
`;

export default ToggleTooltip;
