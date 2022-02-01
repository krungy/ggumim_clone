import { createContext, useContext, useEffect, useState } from 'react';
import api from '@api/api';

const SelectContext = createContext();
export const useSelects = () => useContext(SelectContext);

const SelectProvider = ({ children }) => {
  const [productList, setProductList] = useState(null);
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

  const selectProduct = (content) => {
    setSelectedProduct(content);
  };

  const removeProduct = () => {
    setSelectedProduct('');
  };

  return (
    <SelectContext.Provider
      value={{
        productList,
        isLoading,
        selectedProduct,
        selectProduct,
        removeProduct,
      }}
    >
      {children}
    </SelectContext.Provider>
  );
};

export default SelectProvider;
