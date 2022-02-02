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
        info={info}
        key={index}
        onClick={(e) => handleClickToggle(e)}
        on={info.productId === Number(selectedProduct)}
      />
    ));

  return (
    <>
      <Global styles={ResetStyle} />
      {!isLoading && (
        <Container>
          <MainImageContainer onClick={(e) => handleOnClick(e)}>
            <Image
              width="100%"
              height="100%"
              alt="mainImage"
              src={productList.imageUrl}
            />
            {handleToggleTooltipList(productList.productList)}
          </MainImageContainer>
          {/* <Carousel
            contentList={productList.productList}
            style={{ margin: '24px 12px' }}
          /> */}
        </Container>
      )}
    </>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 800px;
`;

const MainImageContainer = styled.div`
  width: 800px;
  height: 998px;
  position: relative;
`;
export default App;
