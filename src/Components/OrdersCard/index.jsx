/* eslint-disable react/prop-types */

import { ChevronRightIcon } from '@heroicons/react/24/solid';

export const OrdersCard = ({ totalPrice, totalProduct }) => {
  return (
    <div className='flex justify-between items-center border border-black rounded-lg p-4 w-80 mb-4'>
      <div className='flex justify-between w-full'>
        <p className='flex flex-col'>
          <span className='font-light'>01.02.23</span>
          <span className='font-light'>{totalProduct} Articles</span>
        </p>
        <p className='flex items-center justify-between gap-2'>
          <span className='font-medium'>${totalPrice}</span>
          <ChevronRightIcon className='h-6 w-6 text-black cursor-pointer' />
        </p>
      </div>
    </div>
  );
};
