import { useContext } from 'react';
import '../../App.css';
import { Layout } from '../../Components/Layout';
import { OrdersCard } from '../../Components/OrdersCard';
import { ShoppingCardContext } from '../../Context';
import { Link } from 'react-router-dom';

function MyOrders() {
  const { order } = useContext(ShoppingCardContext);

  return (
    <Layout>
      <div className='flex  items-center justify-center w-80 relative mb-4'>
        <h1 className='font-medium text-xl'>My Orders</h1>
      </div>
      {order?.map(({ totalPrice, totalProduct }, index) => (
        <Link key={index} to={`/my-orders/${index}`}>
          <OrdersCard totalPrice={totalPrice} totalProduct={totalProduct} />
        </Link>
      ))}
    </Layout>
  );
}

export default MyOrders;
