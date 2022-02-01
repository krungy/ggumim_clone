import React, { useCallback } from 'react';
import { Global } from '@emotion/core';
import ResetStyle from '@styles/ResetStyle';
import styled from '@emotion/styled';
import { Image } from '@components/base';
import { ToggleTooltip } from '@components/domain';
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
      if (selectProduct) {
        !e.target.dataset.id && removeProduct();
        e.target.dataset.id !== selectProduct &&
          selectProduct(e.target.dataset.id);
      }
    },
    [selectProduct, removeProduct],
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
        </Container>
      )}
    </>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const MainImageContainer = styled.div`
  width: 800px;
  height: 998px;
  position: relative;
`;
export default App;
