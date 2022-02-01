import React, { useEffect, useState } from 'react';
import { Global } from '@emotion/core';
import ResetStyle from '@styles/ResetStyle';
import api from '@api/api';
import styled from '@emotion/styled';
import { Image } from '@components/base';
import { ToggleTooltip } from '@components/domain';

const App = () => {
  const [productList, setProductList] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const getapi = async () => {
      setIsLoading(true);
      try {
        const { data } = await api();
        setProductList(data);
        setIsLoading(false);
      } catch (e) {
        console.log(e.response);
      }
    };
    getapi();
  }, []);

  const handleToggleTooltipList = (list) =>
    list.map((info, index) => (
      <ToggleTooltip
        info={info}
        key={index}
        onClick={() => setSelectedProduct(info.productId)}
        visible={info.productId === selectedProduct}
      />
    ));

  return (
    <>
      <Global styles={ResetStyle} />
      {isLoading ? (
        <div>로딩중</div>
      ) : (
        <Container>
          <MainImageContainer>
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
