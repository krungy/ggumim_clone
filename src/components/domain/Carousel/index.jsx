import styled from '@emotion/styled';
import { ProductItem } from '@components/base';
import { useCallback, useRef, useState } from 'react';
import { useSelects } from '@context/SelectProvider';
import PropTypes from 'prop-types';

const Carousel = ({ contentList, contentWidth, height, gap, ...props }) => {
  const { selectedProduct, selectProduct, removeProduct } = useSelects();
  const slideRef = useRef(null);
  const [isDrag, setIsDrag] = useState(false);
  const [startX, setStartX] = useState();

  const carouselStyle = {
    width: contentWidth * contentList.length + (gap * contentList.length - 1),
    gap,
  };

  const handleOnClick = useCallback(
    (e) => {
      e.preventDefault();
      selectedProduct !== e.target.dataset.id
        ? selectProduct(e.target.dataset.id)
        : removeProduct();
    },
    [selectedProduct, selectProduct, removeProduct],
  );

  const handleProductItem = (list) =>
    list.map(({ productId, discountRate, imageUrl }, index) => (
      <ProductItem
        productId={productId}
        src={imageUrl}
        discount={discountRate}
        size={contentWidth}
        onClick={handleOnClick}
        on={productId === Number(selectedProduct)}
        key={index}
      />
    ));

  const onDragStart = (e) => {
    e.preventDefault();
    setIsDrag(true);
    setStartX(e.pageX + slideRef.current.scrollLeft);
  };

  const onDragEnd = () => {
    setIsDrag(false);
  };

  const onDragMove = (e) => {
    if (isDrag) {
      slideRef.current.scrollLeft = startX - e.pageX;
    }
  };

  return (
    <CarouselContainer
      height={height}
      ref={slideRef}
      onMouseDown={onDragStart}
      onMouseMove={onDragMove}
      onMouseUp={onDragEnd}
      onMouseLeave={onDragEnd}
    >
      <CarouselContentContainer style={{ ...carouselStyle, ...props.style }}>
        {handleProductItem(contentList)}
      </CarouselContentContainer>
    </CarouselContainer>
  );
};

Carousel.propTypes = {
  contentList: PropTypes.array,
  contentWidth: PropTypes.number,
  height: PropTypes.number,
  gap: PropTypes.number,
};

Carousel.defaultProps = {
  contentList: [],
  contentWidth: 110,
  height: 162,
  gap: 12,
};

const CarouselContainer = styled.div`
  width: 100%;
  height: ${({ height }) => height};
  overflow: hidden;
  box-sizing: border-box;
`;

const CarouselContentContainer = styled.div`
  position: relative;
  display: flex;
`;

export default Carousel;
