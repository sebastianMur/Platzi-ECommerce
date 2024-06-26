import { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

export const ShoppingCardContext = createContext();

export const ShoppingCardProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  const [isProductDetailOpen, setProductDetailOpen] = useState(false);
  const openProductDetail = () => {
    setProductDetailOpen(true);
  };
  const closeProductDetail = () => {
    setProductDetailOpen(false);
  };

  //Checkout side menu
  const [isCheckoutSideMenuOpen, setCheckoutSideMenuOpen] = useState(false);
  const openCheckoutSideMenu = () => {
    setCheckoutSideMenuOpen(true);
  };
  const closeCheckoutSideMenu = () => {
    setCheckoutSideMenuOpen(false);
  };

  const [productToShow, setProductToShow] = useState({});
  const [cartProducts, setCartProducts] = useState([]);

  const handleDelete = productId => {
    const filteredProduct = cartProducts.filter(
      product => product.id !== productId,
    );

    setCartProducts(filteredProduct);
  };

  const [order, setOrder] = useState([]);

  const [items, setItems] = useState(null);
  const [filteredItems, setFilteredItems] = useState(null);
  const [searchByTitle, setSearchByTitle] = useState(null);

  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/products')
      .then(response => response.json())
      .then(data => setItems(data));
  }, []);

  const filteredByTitle = (items, searchByTitle) => {
    return items?.filter(item =>
      item.title.toLowerCase().includes(searchByTitle.toLowerCase()),
    );
  };

  useEffect(() => {
    if (searchByTitle) setFilteredItems(filteredByTitle(items, searchByTitle));
  }, [items, searchByTitle]);

  return (
    <ShoppingCardContext.Provider
      value={{
        count,
        setCount,
        closeProductDetail,
        openProductDetail,
        isProductDetailOpen,
        productToShow,
        setProductToShow,
        setCartProducts,
        cartProducts,
        closeCheckoutSideMenu,
        openCheckoutSideMenu,
        isCheckoutSideMenuOpen,
        handleDelete,
        order,
        setOrder,
        items,
        setItems,
        setSearchByTitle,
        searchByTitle,
        filteredItems,
      }}
    >
      {children}
    </ShoppingCardContext.Provider>
  );
};
ShoppingCardProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
