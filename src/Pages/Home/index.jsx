import { useContext } from 'react';
import { Card } from '../../Components/Card';
import { Layout } from '../../Components/Layout';
import { ProductDetail } from '../../Components/ProductDetail';
import { ShoppingCardContext } from '../../Context';

function Home() {
  const { items, filteredItems, searchByTitle, setSearchByTitle } =
    useContext(ShoppingCardContext);

  const renderView = () => {
    if (searchByTitle && searchByTitle?.length == 0) {
      return items?.map(item => <Card data={item} key={item.id} />);
    }

    if (searchByTitle.length > 0 && filteredItems.length === 0)
      return <div>{"we don't have anything"}</div>;

    if (searchByTitle && searchByTitle.length > 0 && filteredItems.length > 0) {
      return filteredItems?.map(item => <Card data={item} key={item.id} />);
    }
  };

  return (
    <Layout>
      <div className='flex items-center justify-center relative w-80 mb-4'>
        <h1 className='font-medium text-xl'>Exclusive Products</h1>
      </div>
      <input
        className='rounded-lg border border-black w-80 p-4 mb-4 focus:outline-none'
        type='text'
        placeholder='Search a product'
        onChange={event => setSearchByTitle(event.target.value)}
      />

      <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'>
        {renderView()}
      </div>
      <ProductDetail />
    </Layout>
  );
}

export default Home;
