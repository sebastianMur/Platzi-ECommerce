/* eslint-disable react/prop-types */
import { XMarkIcon } from '@heroicons/react/24/solid';

export const OrderCard = ({ id, title, imgUrl, price, handleDelete }) => {
  return (
    <div className='flex justify-between items-center mb-3'>
      <div className='flex items-center gap-2'>
        <figure className='w-20 h-20'>
          <img
            className='w-full h-full rounded-lg object-cover'
            src={imgUrl}
            alt={title}
          />
        </figure>
        <p className='text-sm font-light'>{title}</p>
      </div>

      {handleDelete ? (
        <div className='flex items-center gap-2'>
          <p className='text-lg font-medium'>{price}</p>
          <XMarkIcon
            onClick={() => handleDelete(id)}
            className='h-6 w-6 cursor-pointer'
          />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};
