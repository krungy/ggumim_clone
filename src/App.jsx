import React, { useCallback } from 'react';
import { Global } from '@emotion/core';
import ResetStyle from '@styles/ResetStyle';
import styled from '@emotion/styled';
import { Image } from '@components/base';
import { ToggleTooltip, Carousel } from '@components/domain';
import { useSelects } from '@context/SelectProvider';

const App = () => {
  const {
    productList,
    isLoading,
    selectedProduct,
    selectProduct,
    removeProduct,
  } = useSelects();

  const initialSize = {
    // 기본 ... width: 800px; hieght: 998px;
    // 전체 사이즈 변경은 이곳에서 ... 'px'단위 붙이지 않고 지정
    width: 800,
    height: 998,
  };

  const ratioSize = {
    widthRatio: 800 / initialSize.width,
    heightRatio: 998 / initialSize.height,
  };

  const handleOnClick = useCallback(
    (e) => {
      e.preventDefault();
      if (!e.target.dataset.id || e.target.tagName === 'SPAN') {
        removeProduct();
      }
      if (selectedProduct && e.target.dataset.id !== selectedProduct) {
        selectProduct(e.target.dataset.id);
      }
    },
    [selectedProduct, selectProduct, removeProduct],
  );

  const handleClickToggle = (e) => {
    e.preventDefault();
    selectProduct(e.target.dataset.id);
  };

  const handleToggleTooltipList = (list) =>
    list.map((info, index) => (
      <ToggleTooltip
        contentObject={info}
        ratioSize={ratioSize}
        key={index}
        onClick={(e) => handleClickToggle(e)}
        on={info.productId === Number(selectedProduct)}
      />
    ));

  return (
    <>
      <Global styles={ResetStyle} />
      {!isLoading && (
        <Container width={initialSize.width}>
          <MainImageContainer
            onClick={(e) => handleOnClick(e)}
            width={initialSize.width}
            height={initialSize.height}
          >
            <Image
              width="100%"
              height="100%"
              alt="mainImage"
              src={productList.imageUrl}
            />
            {handleToggleTooltipList(productList.productList)}
          </MainImageContainer>
          <Carousel
            contentList={productList.productList}
            contentWidth={110}
            height={162}
            gap={12}
            style={{ margin: '24px 0' }}
          />
        </Container>
      )}
    </>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: ${({ width }) => width}px;
`;

const MainImageContainer = styled.div`
  position: relative;
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
`;
export default App;
