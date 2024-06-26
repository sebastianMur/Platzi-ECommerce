import { useContext } from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import { XMarkIcon } from '@heroicons/react/24/solid';
import { ShoppingCardContext } from '../../Context';
import { OrderCard } from '../OrderCard';
import { totalPrice } from '../../Utils';
export const CheckoutSideMenu = () => {
  const {
    isCheckoutSideMenuOpen,
    closeCheckoutSideMenu,
    cartProducts,
    handleDelete,
    setOrder,
    order,
    setCartProducts,
  } = useContext(ShoppingCardContext);

  const handleCheckout = () => {
    const orderToAdd = {
      date: '01.02.23',
      products: [...cartProducts],
      totalProduct: cartProducts.length,
      totalPrice: totalPrice(cartProducts),
    };

    setOrder([...order, orderToAdd]);
    setCartProducts([]);
  };

  return (
    <aside
      className={`${
        isCheckoutSideMenuOpen ? 'flex' : 'hidden'
      } checkout-side-menu flex-col fixed right-0 border border-black rounded-lg bg-white `}
    >
      <div className='flex justify-between items-center p-6'>
        <h2 className='font-medium text-xl'>My Order</h2>
        <div>
          <XMarkIcon
            className='h6 w-6 text-black-500 cursor-pointer'
            onClick={() => closeCheckoutSideMenu()}
          />
        </div>
      </div>
      <div className='px-6 overflow-y-auto flex-1'>
        {cartProducts.map(product => (
          <OrderCard
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            imgUrl={product.images}
            handleDelete={handleDelete}
          />
        ))}
      </div>
      <div className='px-6 mb-6'>
        <p className='flex justify-between items-center mb-2'>
          <span className='font-light'>Total:</span>
          <span className='font-medium text-2xl'>
            ${totalPrice(cartProducts)}
          </span>
        </p>

        <Link to='/my-orders/last'>
          <button
            className='w-full bg-green-500 py-3 text-white rounded-lg'
            onClick={() => handleCheckout()}
          >
            Checkout
          </button>
        </Link>
      </div>
    </aside>
  );
};
