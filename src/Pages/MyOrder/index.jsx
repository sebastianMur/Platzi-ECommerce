import { useContext } from 'react';
import '../../App.css';
import { Layout } from '../../Components/Layout';
import { ShoppingCardContext } from '../../Context';
import { OrderCard } from '../../Components/OrderCard';
import { ChevronLeftIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';

function MyOrder() {
  const { order } = useContext(ShoppingCardContext);
  const currentPath = window.location.pathname;
  let index = currentPath.substring(currentPath.lastIndexOf('/') + 1);
  if (index === 'last') index = order?.length - 1;
  return (
    <Layout>
      <div className='flex  items-center justify-center w-80 relative mb-6'>
        <Link to='/my-orders' className='absolute left-0'>
          <ChevronLeftIcon className='h-6 w-6 text-black cursor-pointer' />
        </Link>
        <h1>My Orders</h1>
      </div>
      <div className='flex flex-col w-80'>
        {order?.[index].products.map(product => (
          <OrderCard
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            imgUrl={product.images}
          />
        ))}
      </div>
    </Layout>
  );
}

export default MyOrder;
