import { XMarkIcon } from '@heroicons/react/24/solid';

import './style.css';
import { ShoppingCardContext } from '../../Context';
import { useContext } from 'react';

export const ProductDetail = () => {
  const { isProductDetailOpen, closeProductDetail, productToShow } =
    useContext(ShoppingCardContext);
  return (
    <aside
      className={`${
        isProductDetailOpen ? 'flex' : 'hidden'
      } product-detail flex-col fixed right-0 border border-black rounded-lg bg-white `}
    >
      <div className='flex justify-between items-center p-6'>
        <h2 className='font-medium text-xl'>Detail</h2>
        <div>
          <XMarkIcon
            className='h6 w-6 text-black-500 cursor-pointer'
            onClick={() => closeProductDetail()}
          />
        </div>
      </div>
      <figure className='px-6'>
        <img
          className='w-full h-full rounded-lg'
          src={productToShow.images}
          alt={productToShow.title}
        />
      </figure>
      <p className='flex flex-col p-6'>
        <span className='font-medium text-2xl mb-2'>productToShow.price</span>
        <span className='font-medium text-md'>{productToShow.title}</span>
        <span className='font-medium text-sm'>{productToShow.description}</span>
      </p>
    </aside>
  );
};
